import Image from "next/image";
import type { DoctorEntry } from "../../../types";

type DoctorStatusCardProps = {
  doctor: DoctorEntry;
};

import { getStatusConfig } from "./doctor-status-config";

export function DoctorStatusCard({ doctor }: DoctorStatusCardProps) {
  const config = getStatusConfig(doctor.status);

  return (
    <article className="flex min-w-[325.34px] flex-shrink-0 flex-col gap-5 rounded-[32px] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#F1F5F9] ring-offset-1">
            <Image
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}&background=%23f0fdf4`}
              alt={doctor.name}
              fill
              className="bg-teal-50 object-cover"
              unoptimized
            />
          </div>
          <div>
            <h3 className="text-[18px] font-bold tracking-tight text-[#2D3748]">
              {doctor.name}
            </h3>
            <p className="text-[12px] leading-[16px] font-medium text-[#718096]">
              {doctor.specialty}
            </p>
          </div>
        </div>
        {config.topIcon}
      </div>

      <div className="flex items-center gap-2 px-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#718096"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-[12px] leading-[16px] font-normal text-[#718096]">
          {doctor.hospitalName || "General Hospital"}
        </span>
      </div>

      {/* Status Bar */}
      <div
        className={`flex items-center justify-between rounded-full ${config.barBg} px-4 py-[10px] transition-transform active:scale-[0.98]`}
      >
        <span className={`text-[14px] font-bold ${config.barText}`}>
          {config.label}
        </span>
        {config.footerIcon}
      </div>
    </article>
  );
}
