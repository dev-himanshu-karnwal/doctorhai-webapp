import { useEffect } from "react";
import { useForm, Resolver } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";
import { useUpdateHospital } from "@/modules/hospitals/hooks/use-update-hospital";
import { useUpdateAddress } from "@/modules/address/hooks/use-address";
import {
  addressSchema,
  AddressValues,
} from "@/modules/address/validators/address.validator";
import {
  hospitalUpdateSchema,
  HospitalUpdateValues,
  HospitalUpdatePayload,
} from "@/modules/hospitals/schemas/hospital-update.schema";

interface UseHospitalDetailFormProps {
  hospital: HospitalDetailDto | undefined;
}

export function useHospitalDetailForm({
  hospital,
}: UseHospitalDetailFormProps) {
  const hospitalId = hospital?.id || "";

  const { mutate: updateHospital, isPending: isUpdatingHospital } =
    useUpdateHospital(hospitalId, { showToast: false });
  const { mutate: updateAddress, isPending: isUpdatingAddress } =
    useUpdateAddress();

  // Form 1: Hospital fields only
  const hospitalForm = useForm<HospitalUpdateValues>({
    resolver: zodResolver(
      hospitalUpdateSchema
    ) as Resolver<HospitalUpdateValues>,
    defaultValues: {
      email: "",
      phone: "",
      location: { latitude: 0, longitude: 0 },
      type: "",
      facilities: [],
      timeline: [],
    },
  });

  // Form 2: Address fields — using address module's schema
  const addressForm = useForm<AddressValues>({
    resolver: zodResolver(addressSchema) as Resolver<AddressValues>,
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
      latitude: 0,
      longitude: 0,
    },
  });

  useEffect(() => {
    if (hospital) {
      hospitalForm.reset({
        email: hospital.email || "",
        phone: hospital.phone || "",
        location: {
          latitude: hospital.location?.latitude || 0,
          longitude: hospital.location?.longitude || 0,
        },
        type: hospital.type || "",
        facilities: (hospital.facilities || []).map((f) => ({ value: f })),
        timeline: hospital.timeline || [],
      });
    }
  }, [hospital, hospitalForm]);

  useEffect(() => {
    const src = hospital?.address;
    if (src) {
      addressForm.reset({
        addressLine1: src.addressLine1 || "",
        addressLine2: src.addressLine2 || "",
        city: src.city || "",
        state: src.state || "",
        pincode: src.pincode || "",
        latitude: hospital.location?.latitude ?? 0,
        longitude: hospital.location?.longitude ?? 0,
      });
    }
  }, [hospital, addressForm]);

  const onSubmit = () => {
    let completed = 0;
    const total = 2;
    const onSubSuccess = () => {
      completed++;
      if (completed === total) {
        import("sonner").then(({ toast }) =>
          toast.success("Profile updated successfully!")
        );
      }
    };

    // Submit hospital form
    hospitalForm.handleSubmit((data: HospitalUpdateValues) => {
      // Sync coordinates from addressForm if they exist
      const addressVals = addressForm.getValues();
      const payload: HospitalUpdatePayload = {
        ...data,
        location: {
          latitude:
            addressVals.latitude !== undefined && addressVals.latitude !== null
              ? Number(addressVals.latitude)
              : 0,
          longitude:
            addressVals.longitude !== undefined &&
            addressVals.longitude !== null
              ? Number(addressVals.longitude)
              : 0,
        },
        facilities: data.facilities?.map((f) => f.value) || [],
      };
      updateHospital(payload, { onSuccess: onSubSuccess });
    })();

    // Submit address form independently
    addressForm.handleSubmit((data: AddressValues) => {
      const accountId = hospital?.accountId || "";
      if (accountId) {
        updateAddress({ accountId, data }, { onSuccess: onSubSuccess });
      } else {
        onSubSuccess();
      }
    })();
  };

  return {
    hospitalForm,
    addressForm,
    onSubmit,
    isUpdating: isUpdatingHospital || isUpdatingAddress,
  };
}
