"use client";

import Image from "next/image";
import Link from "next/link";
import { Doctor } from "@/modules/doctors/types";
import { getStatusConfig } from "@/modules/doctors/components/cards/doctor-status-config";

export function DoctorListItem({ doctor }: { doctor: Doctor }) {
  const config = getStatusConfig(doctor.status?.status ?? "off-duty");

  const formatTime = (isoString?: string | null) => {
    if (!isoString) return "0";
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return "0";
    }
  };

  return (
    <Link
      href={`/doctors/${doctor.id}${doctor.slug ? `?name=${doctor.slug}` : ""}`}
      className="group flex flex-col gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center"
    >
      {/* Avatar Section */}
      <div className="relative h-[68px] w-[68px] shrink-0 overflow-hidden rounded-full ring-4 ring-rose-50">
        <Image
          src={
            doctor.profilePhotoUrl ||
            `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.fullName}&background=%23f0fdf4`
          }
          alt={doctor.fullName}
          fill
          className="bg-teal-50 object-cover"
          unoptimized
        />
      </div>

      {/* Info Section */}
      <div className="flex flex-1 flex-col justify-center">
        <div className="flex flex-wrap items-center gap-2">
          <h3 className="text-[18px] font-bold text-[#2D3748] transition-colors group-hover:text-[#4FB3AA]">
            {doctor.fullName}
          </h3>
          <span className="rounded bg-[#EEF2FF] px-2 py-0.5 text-[10px] font-bold tracking-wider text-[#4F46E5] uppercase">
            {doctor.specialization || "GENERAL"}
          </span>
        </div>
        <div className="mt-1 flex items-center gap-1.5 text-[13px] font-medium text-[#718096]">
          <span>{doctor.designation || "Specialist"}</span>
          <span>•</span>
          <span>{doctor.hasExperience ? "10+" : "0"} years exp.</span>
        </div>
        <div className="mt-2 flex items-center gap-1.5 text-[12px] text-[#A0AEC0]">
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span>
            Updated{" "}
            {doctor.status?.updatedAt
              ? formatTime(doctor.status.updatedAt)
              : "just now"}
          </span>
        </div>
      </div>

      {/* Status Section */}
      <div className="flex shrink-0 items-center sm:pl-4">
        <div
          className={`flex items-center gap-1.5 rounded-full px-4 py-2 text-[12px] font-bold ${config.barBg} ${config.barText}`}
        >
          {config.footerIcon}
          <span className="ml-1">{config.label}</span>
        </div>
      </div>
    </Link>
  );
}
