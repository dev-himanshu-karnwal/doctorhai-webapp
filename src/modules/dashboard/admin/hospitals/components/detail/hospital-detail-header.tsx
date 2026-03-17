"use client";

import { Button } from "@/components/ui";
import { AdminControlsIcon } from "../../icons";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";

interface HospitalDetailHeaderProps {
  hospital: HospitalDetailDto | undefined;
  isLoading: boolean;
  isVerified?: boolean;
  onApprove?: () => void;
  onReject?: () => void;
}

export function HospitalDetailHeader({
  hospital,
  isLoading,
  isVerified,
  onApprove,
  onReject,
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
          {hospital?.address || hospital?.addressId
            ? `${hospital?.address?.addressLine1}, ${hospital?.address?.city}, ${hospital?.address?.pincode}`
            : "No address provided"}
        </p>
      </div>

      <div className="flex items-center gap-3">
        {isVerified && (
          <Button
            variant="outline"
            size="md"
            className="gap-2.5 rounded-xl border-[#e2e8f0] bg-white font-bold text-[#475569] shadow-sm hover:bg-[#f8fafc]"
          >
            <AdminControlsIcon className="h-4 w-4" />
            Admin Controls
          </Button>
        )}
        {!isVerified && (
          <div className="flex items-center gap-2">
            <Button
              type="button"
              onClick={onReject}
              className="h-auto rounded-xl border-[#fecdd3] bg-[#fff1f2] px-6 py-[10px] text-[13.5px] font-bold text-[#e11d48] hover:bg-red-50 active:scale-95"
            >
              Reject
            </Button>
            <Button
              type="button"
              onClick={onApprove}
              className="h-auto rounded-xl border-none bg-blue-500 px-6 py-[10px] text-[13.5px] font-bold text-white hover:bg-blue-600 active:scale-95"
            >
              Approve
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
