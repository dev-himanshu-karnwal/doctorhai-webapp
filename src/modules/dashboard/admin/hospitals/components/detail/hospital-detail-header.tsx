"use client";

import { Button } from "@/components/ui";
import { AdminControlsIcon } from "../../icons";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";

interface HospitalDetailHeaderProps {
  hospital: HospitalDetailDto | undefined;
  isLoading: boolean;
}

export function HospitalDetailHeader({
  hospital,
  isLoading,
}: HospitalDetailHeaderProps) {
  if (isLoading) {
    return (
      <div className="mb-8 animate-pulse">
        <div className="mb-2 h-8 w-64 rounded bg-gray-200"></div>
        <div className="h-4 w-48 rounded bg-gray-100"></div>
      </div>
    );
  }

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <h1 className="text-[28px] font-black tracking-tight text-[#0f172a]">
            {hospital?.name || "Hospital Detail"}
          </h1>
          <span
            className="rounded-full bg-[#ecfdf5] px-2.5 py-0.5 font-bold text-[#10b981]"
            style={{ fontSize: 11, letterSpacing: "0.02em" }}
          >
            {hospital?.isActive ? "ACTIVE" : "INACTIVE"}
          </span>
        </div>
        <p className="font-medium text-[#64748b]" style={{ fontSize: 13.5 }}>
          {`${hospital?.address?.addressLine1}, ${hospital?.address?.city}, ${hospital?.address?.pincode}` ||
            "No address provided"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        <Button
          variant="outline"
          size="md"
          className="gap-2.5 rounded-xl border-[#e2e8f0] bg-white font-bold text-[#475569] shadow-sm hover:bg-[#f8fafc]"
        >
          <AdminControlsIcon className="h-4 w-4" />
          Admin Controls
        </Button>
      </div>
    </div>
  );
}
