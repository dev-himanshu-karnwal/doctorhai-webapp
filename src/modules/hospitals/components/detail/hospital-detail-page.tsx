"use client";

import { MOCK_HOSPITAL_DETAIL } from "../../data/mock-hospital-detail";
import { HospitalDetailHeader } from "./hospital-detail-header";
import { HospitalDetailSidebar } from "./hospital-detail-sidebar";
import { HospitalDoctorAvailability } from "./hospital-doctor-availability";
import Link from "next/link";

export function HospitalDetailPage() {
  const h = MOCK_HOSPITAL_DETAIL;

  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Link
          href="/hospitals"
          className="mb-6 flex items-center gap-2 text-sm font-medium text-[#4FB3AA] hover:text-[#3D8F87]"
        >
          <span>←</span> Back to Directory
        </Link>

        <HospitalDetailHeader h={h} />

        <div className="flex flex-col gap-8 lg:flex-row">
          <HospitalDetailSidebar h={h} />
          <HospitalDoctorAvailability doctors={h.doctors} />
        </div>
      </div>
    </div>
  );
}
