"use client";

import { useHospital } from "@/modules/hospitals/hooks/use-hospital";
import { useHospitalProfileForm } from "../../hooks/use-hospital-profile-form";
import { HospitalProfileHeader } from "./HospitalProfileHeader";
import { HospitalConfigForm } from "@/modules/dashboard/admin/hospitals/components/detail/hospital-config-form";
import {
  HeaderSkeleton,
  ConfigFormSkeleton,
} from "@/modules/dashboard/admin/hospitals/components/detail/skeleton";

interface HospitalProfileViewProps {
  hospitalId: string;
}

export function HospitalProfileView({ hospitalId }: HospitalProfileViewProps) {
  const { data: hospital, isLoading: isHospitalLoading } =
    useHospital(hospitalId);

  const { hospitalForm, addressForm, onSubmit, isUpdating } =
    useHospitalProfileForm({
      hospital,
    });

  if (isHospitalLoading) {
    return (
      <div className="min-h-screen bg-[#f1fcf8] px-4 pt-6 pb-12 font-sans sm:px-6 md:px-8">
        <div className="mx-auto max-w-[1200px]">
          <HeaderSkeleton />
          <div className="max-w-[850px]">
            <ConfigFormSkeleton />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#f1fcf8] pt-6 pb-12 font-sans">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6 md:px-8">
        <HospitalProfileHeader
          hospital={hospital}
          isLoading={isHospitalLoading}
        />

        <div className="max-w-[850px]">
          <HospitalConfigForm
            isLoading={isHospitalLoading}
            hospitalForm={hospitalForm}
            addressForm={addressForm}
            onSubmit={onSubmit}
            isUpdating={isUpdating}
          />
        </div>
      </div>
    </div>
  );
}
