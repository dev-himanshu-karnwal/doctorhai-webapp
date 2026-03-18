import { Clinic } from "../types/search.types";
import { Button } from "@/components/ui";
import { HospitalSquareIcon } from "@/components/icons";
import Link from "next/link";
import { getStatusBadge } from "@/modules/dashboard/hospital/utils/status.utils";
import { StatusKind } from "@/types/common.types";
import { cn } from "@/lib/cn";

interface ClinicCardProps {
  clinic: Clinic;
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  const config = getStatusBadge(clinic.status as StatusKind);

  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-6">
      {/* Icon and Status Header */}
      <div className="mb-4 flex items-start justify-between sm:mb-6">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[20px] bg-[#DDF2F8] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:h-[64px] sm:w-[64px] sm:rounded-[32px]">
          <HospitalSquareIcon className="h-5 w-5 text-blue-500 sm:h-[23px] sm:w-[23px]" />
        </div>

        {/* Status Badge */}
        <div
          className={cn(
            "flex h-[24px] items-center gap-[6px] rounded-full border px-[10px] py-[2px] text-[11px] leading-[16px] font-bold tracking-[0px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all sm:h-[26px] sm:px-[12px] sm:py-[4px] sm:text-[12px]"
          )}
          style={{
            backgroundColor: config.bgColor,
            color: config.textColor,
            borderColor: config.dotColor + "40",
          }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: config.dotColor }}
          />
          {config.text}
        </div>
      </div>

      {/* Title Section */}
      <div className="mb-3 sm:mb-[16px]">
        <h3 className="line-clamp-2 text-[18px] leading-[24px] font-bold tracking-[0px] text-[#2D3748] sm:text-[20px] sm:leading-[28px]">
          {clinic.name}
        </h3>
        <p className="mt-0.5 text-[13px] leading-[18px] font-normal tracking-[0px] text-[#718096] sm:text-[14px] sm:leading-[20px]">
          {clinic.type} • {clinic.hours}
        </p>
      </div>

      {/* Specialists List */}
      <div className="mb-6 sm:mb-8">
        <h4 className="mb-2 text-[13px] font-bold text-[#2D3748] sm:text-[14px]">
          Specialists
        </h4>
        <div className="flex flex-wrap gap-2">
          {clinic.specialists && clinic.specialists.length > 0 ? (
            clinic.specialists.slice(0, 4).map((specialist, index) => (
              <div
                key={index}
                className="rounded-full border border-gray-100 bg-[#F8FAFC] px-3 py-1 text-[11px] font-medium text-[#475569] sm:text-[12px]"
              >
                {specialist}
              </div>
            ))
          ) : (
            <span className="text-[12px] text-gray-400">
              No specialists listed
            </span>
          )}
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Link href={`/hospitals/${clinic.id}`} className="block w-full">
          <Button
            variant="outline"
            className="h-[44px] w-full rounded-[24px] border-2 border-[#F1F5F9] bg-white text-[13px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] transition-all hover:border-gray-200 hover:bg-gray-50 active:scale-95 sm:h-[48px] sm:text-[14px]"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
