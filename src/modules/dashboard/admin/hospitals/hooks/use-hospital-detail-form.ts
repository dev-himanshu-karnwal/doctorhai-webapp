import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";
import { useUpdateHospital } from "@/modules/hospitals/hooks/use-update-hospital";
import {
  useUpdateAddress,
  useCreateAddress,
} from "@/modules/address/hooks/use-address";
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
  address: AddressValues | undefined;
}

export function useHospitalDetailForm({
  hospital,
  address,
}: UseHospitalDetailFormProps) {
  const hospitalId = hospital?.id || "";
  const addressId = hospital?.addressId || "";

  const { mutate: updateHospital, isPending: isUpdatingHospital } =
    useUpdateHospital(hospitalId);
  const { mutate: updateAddress, isPending: isUpdatingAddress } =
    useUpdateAddress();
  const { mutate: createAddress, isPending: isCreatingAddress } =
    useCreateAddress();

  // Form 1: Hospital fields only
  const hospitalForm = useForm<HospitalUpdateValues>({
    resolver: zodResolver(hospitalUpdateSchema),
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
    resolver: zodResolver(addressSchema),
    defaultValues: {
      addressLine1: "",
      addressLine2: "",
      city: "",
      state: "",
      pincode: "",
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
  }, [hospital, hospitalForm.reset]);

  useEffect(() => {
    const src = address;
    if (src) {
      addressForm.reset({
        addressLine1: src.addressLine1 || "",
        addressLine2: src.addressLine2 || "",
        city: src.city || "",
        state: src.state || "",
        pincode: src.pincode || "",
      });
    }
  }, [address, addressForm.reset]);

  const onSubmit = () => {
    // Submit hospital form
    hospitalForm.handleSubmit((data: HospitalUpdateValues) => {
      const payload: HospitalUpdatePayload = {
        ...data,
        facilities: data.facilities?.map((f) => f.value) || [],
      };
      updateHospital(payload);
    })();

    // Submit address form independently
    addressForm.handleSubmit((data: AddressValues) => {
      const accountId = hospital?.accountId || "";
      if (addressId) {
        // PATCH — address already exists
        updateAddress({ accountId, data });
      } else if (hospital?.accountId) {
        // POST — create address for this hospital account
        createAddress({ accountId, data });
      }
    })();
  };

  return {
    hospitalForm,
    addressForm,
    onSubmit,
    isUpdating: isUpdatingHospital || isUpdatingAddress || isCreatingAddress,
  };
}
