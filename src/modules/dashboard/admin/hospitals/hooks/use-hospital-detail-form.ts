"use client";

import { useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";
import { useUpdateHospital } from "@/modules/hospitals/hooks/use-update-hospital";
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
  const { mutate: updateHospital, isPending: isUpdating } = useUpdateHospital(
    hospital?.id || ""
  );

  const formMethods = useForm<HospitalUpdateValues>({
    resolver: zodResolver(hospitalUpdateSchema),
    defaultValues: {
      email: "",
      phone: "",
      address: {
        addressLine1: "",
        city: "",
        state: "",
        pincode: "",
      },
      location: {
        latitude: 0,
        longitude: 0,
      },
      type: "",
      facilities: [],
      timeline: [],
    },
  });

  const { handleSubmit, reset } = formMethods;

  useEffect(() => {
    if (hospital) {
      reset({
        email: hospital.email || "",
        phone: hospital.phone || "",
        address: {
          addressLine1: hospital.address?.addressLine1 || "",
          city: hospital.address?.city || "",
          state: hospital.address?.state || "",
          pincode: hospital.address?.pincode || "",
        },
        location: {
          latitude: hospital.location?.latitude || 0,
          longitude: hospital.location?.longitude || 0,
        },
        type: hospital.type || "",
        facilities: (hospital.facilities || []).map((f) => ({ value: f })),
        timeline: hospital.timeline || [],
      });
    }
  }, [hospital, reset]);

  const onSubmit = (data: HospitalUpdateValues) => {
    const payload: HospitalUpdatePayload = {
      ...data,
      facilities: data.facilities?.map((f) => f.value) || [],
    };
    updateHospital(payload);
  };

  return {
    formMethods,
    onSubmit: handleSubmit(onSubmit),
    isUpdating,
  };
}
