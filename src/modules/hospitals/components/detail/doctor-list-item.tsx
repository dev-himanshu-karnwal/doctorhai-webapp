"use client";

import {
  Doctor,
  DoctorSpecialtyColor,
} from "../../types/hospital-detail.types";
import { getStatusBadge, getStatusDotColor } from "../../utils/status-helpers";
import { cn } from "@/lib/cn";

interface DoctorListItemProps {
  doctor: Doctor;
}

export function DoctorListItem({ doctor }: DoctorListItemProps) {
  const badge = getStatusBadge(doctor.status);
  const dotCls = getStatusDotColor(doctor.status);

  const getSpecialtyCls = (color: DoctorSpecialtyColor) => {
    const map: Record<DoctorSpecialtyColor, string> = {
      teal: "bg-[#E0F2F1] text-[#00796B]",
      purple: "bg-[#EDE7F6] text-[#6D28D9]",
      blue: "bg-[#DBEAFE] text-[#1D4ED8]",
      gray: "bg-[#F1F5F9] text-[#475569]",
      pink: "bg-[#FCE4EC] text-[#9D174D]",
    };
    return map[color];
  };

  const specialtyCls = getSpecialtyCls(doctor.specialtyColor);

  return (
    <div className="flex flex-col gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-sm transition-all hover:shadow-md sm:flex-row sm:items-center">
      <div className="relative shrink-0">
        <div
          className="flex h-14 w-14 items-center justify-center rounded-full font-bold"
          style={{
            backgroundColor: doctor.avatarBg,
            color: doctor.avatarTextColor,
          }}
        >
          {doctor.initials}
        </div>
        <span
          className={cn(
            "absolute right-0 bottom-0 h-3.5 w-3.5 rounded-full border-2 border-white",
            dotCls
          )}
        />
      </div>

      <div className="flex-1 space-y-1">
        <div className="flex items-center gap-2">
          <span className="text-[17px] font-bold text-[#2d3748]">
            {doctor.name}
          </span>
          <span
            className={cn(
              "rounded px-2 py-0.5 text-[10px] font-bold uppercase",
              specialtyCls
            )}
          >
            {doctor.specialty}
          </span>
        </div>
        <p className="text-sm text-[#718096]">
          {doctor.role} • {doctor.experience}
        </p>
        <p className="text-[12px] text-gray-400">
          Last updated: {doctor.updatedAt}
        </p>
      </div>

      <div
        className={cn(
          "flex items-center gap-2 rounded-full px-4 py-1.5 text-[13px] font-bold",
          badge.cls
        )}
      >
        <span className="text-[8px]">●</span>
        <span>{badge.label}</span>
      </div>
    </div>
  );
}
