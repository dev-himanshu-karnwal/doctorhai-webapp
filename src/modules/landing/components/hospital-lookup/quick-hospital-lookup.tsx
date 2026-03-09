"use client";

import { useDoctors } from "@/modules/doctors/hooks";
import { useHospitals } from "@/modules/hospitals/hooks";
import type { DepartmentCategory } from "../../types";
import { DepartmentsGrid, TopHospitalsList, TopDoctorsList } from "./ui";
import {
  TopDoctorsSkeleton,
  TopHospitalsSkeleton,
} from "./ui/skeleton/lookup-skeletons";

type QuickHospitalLookupProps = {
  departments: DepartmentCategory[];
};

export function QuickHospitalLookup({ departments }: QuickHospitalLookupProps) {
  const { data: hospitalsData, isLoading: isLoadingHospitals } = useHospitals({
    limit: 2,
    isVerified: true,
  });

  const { data: doctorsData, isLoading: isLoadingDoctors } = useDoctors({
    limit: 2,
    isVerified: true,
  });

  const topHospitals =
    hospitalsData?.items.map((h) => ({
      id: h.id,
      name: h.name,
      status: (h.isActive ? "available" : "busy") as string,
    })) || [];

  const topDoctors =
    doctorsData?.doctors.map((d) => ({
      id: d.id,
      name: d.fullName,
      specialty: d.specialization || "General Physician",
      imageUrl: d.profilePhotoUrl || undefined,
      status: (d.status?.status || "available") as string,
      hasExperience: d.hasExperience ? d.hasExperience.toString() : "0",
    })) || [];

  return (
    <section className="col-span-12 flex h-auto min-h-[auto] w-full flex-col justify-between rounded-[24px] bg-[#DDF2F8] p-4 shadow-sm transition-all duration-300 sm:rounded-[32px] sm:p-6 md:rounded-[40px] md:p-8 lg:col-span-3 xl:min-h-[646px]">
      <div className="space-y-1 pb-3 sm:pb-4 md:pb-[16px]">
        <h2 className="text-[16px] leading-[22px] font-bold text-[#2D3748] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[28px]">
          Quick Hospital Lookup
        </h2>
        <p className="text-[12px] leading-[16px] font-normal text-[#718096] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
          Jump to department listings
        </p>
      </div>

      <div className="flex flex-1 flex-col justify-between gap-4">
        <DepartmentsGrid departments={departments} />

        <div className="space-y-4">
          {isLoadingHospitals ? (
            <TopHospitalsSkeleton />
          ) : (
            <TopHospitalsList topHospitals={topHospitals} />
          )}

          {isLoadingDoctors ? (
            <TopDoctorsSkeleton />
          ) : (
            <TopDoctorsList topDoctors={topDoctors} />
          )}
        </div>
      </div>
    </section>
  );
}
