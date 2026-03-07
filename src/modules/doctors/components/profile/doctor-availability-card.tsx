"use client";

import { getAvailabilityTheme } from "../../utils/status-visuals";

interface DoctorAvailabilityCardProps {
  availabilityStatus: string;
  availabilityMessage: string;
}

export function DoctorAvailabilityCard({
  availabilityStatus,
  availabilityMessage,
}: DoctorAvailabilityCardProps) {
  const theme = getAvailabilityTheme(availabilityStatus);

  return (
    <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-[24px] bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-10">
      <div
        className={`mb-4 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full sm:mb-6 ${theme.bg} shadow-[0_4px_12px_rgba(0,0,0,0.05)] sm:h-[80px] sm:w-[80px]`}
      >
        {theme.icon}
      </div>
      <h2 className="text-[32px] leading-tight font-bold text-[#1A2B3D] sm:text-[48px]">
        {theme.statusLabel}
      </h2>
      <p className="mt-3 max-w-[450px] text-[14px] leading-[20px] text-[#718096] sm:mt-4 sm:text-[16px] sm:leading-[24px]">
        {availabilityMessage}
      </p>
      <div className="absolute right-4 bottom-4 flex items-center gap-[6px] rounded-full border border-[#F1F5F9] bg-[#F8FAFC] px-[10px] py-[4px] sm:right-6 sm:bottom-6 sm:px-[12px] sm:py-[5px]">
        <span className={`h-[6px] w-[6px] rounded-full ${theme.accent}`} />
        <span className="text-[11px] font-semibold text-[#94A3B8] sm:text-[12px]">
          Live Updated
        </span>
      </div>
    </div>
  );
}
