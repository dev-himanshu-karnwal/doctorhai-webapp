"use client";

import { useRouter } from "next/navigation";
import { Button } from "@/components/ui/button";
import { ArrowLeftIcon } from "@/components/icons";
import { HospitalDetailDto } from "@/modules/hospitals/types/hospital-detail-api.types";

interface HospitalProfileHeaderProps {
  hospital: HospitalDetailDto | undefined;
  isLoading: boolean;
}

export function HospitalProfileHeader({
  hospital,
  isLoading,
}: HospitalProfileHeaderProps) {
  const router = useRouter();

  if (isLoading) {
    return (
      <div className="mb-8 animate-pulse">
        <div className="mb-2 h-8 w-64 rounded bg-gray-200"></div>
        <div className="h-4 w-48 rounded bg-gray-100"></div>
      </div>
    );
  }

  const addressText = [
    hospital?.address?.addressLine1,
    hospital?.address?.city,
    hospital?.address?.state,
    hospital?.address?.pincode,
  ]
    .filter(Boolean)
    .join(", ");

  return (
    <div className="mb-8 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
      <div>
        <div className="mb-1 flex items-center gap-3">
          <Button
            variant="ghost"
            size="sm"
            onClick={() => router.push("/dashboard/hospitals")}
            className="mr-1 -ml-2 h-9 w-9 p-0 text-slate-500 hover:bg-slate-100 sm:hidden"
          >
            <ArrowLeftIcon className="h-5 w-5" />
          </Button>
          <h1 className="text-[28px] font-black tracking-tight text-[#0f172a]">
            {hospital?.name || "Hospital Profile"}
          </h1>
          <span
            className="rounded-full bg-[#ecfdf5] px-2.5 py-0.5 font-bold text-[#10b981]"
            style={{ fontSize: 11, letterSpacing: "0.02em" }}
          >
            {hospital?.isActive ? "ACTIVE" : "INACTIVE"}
          </span>
        </div>
        <p className="font-medium text-[#64748b]" style={{ fontSize: 13.5 }}>
          {addressText || "No address provided"}
        </p>
      </div>

      <div className="hidden sm:block">
        <Button
          variant="outline"
          size="md"
          onClick={() => router.push("/dashboard/hospitals")}
          className="gap-2 rounded-xl border-[#e2e8f0] bg-white font-bold text-[#475569] shadow-sm hover:bg-[#f8fafc]"
        >
          <ArrowLeftIcon className="h-4 w-4" />
          Back to Dashboard
        </Button>
      </div>
    </div>
  );
}
