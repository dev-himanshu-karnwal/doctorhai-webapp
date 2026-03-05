"use client";

import { HospitalDetail } from "../../types/hospital-detail.types";
import { DoctorListItem } from "./doctor-list-item";
import { Input } from "@/components/ui/input";

export function HospitalDoctorAvailability({
  doctors,
}: {
  doctors: HospitalDetail["doctors"];
}) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[20px] font-bold text-[#2D3748] sm:text-[24px]">
          Doctor Availability
        </h2>
        <div className="flex h-11 w-full items-center gap-3 rounded-full border border-gray-100 bg-[#F8FAFC] px-4 sm:w-[320px]">
          <span className="text-gray-400">🔍</span>
          <Input
            type="text"
            placeholder="Search doctor..."
            className="h-full border-0 bg-transparent px-0 text-sm ring-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="grid gap-4">
        {doctors.map((doctor) => (
          <DoctorListItem key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </div>
  );
}
