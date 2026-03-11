"use client";

import React from "react";
import { UseFormReturn } from "react-hook-form";
import { HospitalUpdateValues } from "@/modules/hospitals/schemas/hospital-update.schema";
import {
  BasicInfoSection,
  AddressSection,
  FacilitiesSection,
  TimelineSection,
} from "./sections";

import { Button } from "@/components/ui";

interface HospitalConfigFormProps {
  isLoading: boolean;
  formMethods: UseFormReturn<HospitalUpdateValues>;
  onSubmit: () => void;
  isUpdating: boolean;
}

export function HospitalConfigForm({
  isLoading,
  formMethods,
  onSubmit,
  isUpdating,
}: HospitalConfigFormProps) {
  const {
    register,
    control,
    formState: { errors },
  } = formMethods;

  if (isLoading) {
    return null; // Parent handles loading skeleton
  }

  return (
    <div className="flex flex-col gap-6">
      <BasicInfoSection register={register} errors={errors} />
      <AddressSection register={register} />
      <FacilitiesSection register={register} control={control} />
      <TimelineSection register={register} control={control} />

      <div className="mt-2 flex justify-end">
        <Button
          onClick={onSubmit}
          loading={isUpdating}
          disabled={isUpdating}
          variant="primary"
          size="md"
          className="rounded-xl bg-[#059669] px-10 font-bold text-white shadow-sm hover:bg-[#047857]"
        >
          Save Changes
        </Button>
      </div>
    </div>
  );
}
