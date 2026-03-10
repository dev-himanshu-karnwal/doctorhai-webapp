import { Clinic } from "../types/search.types";
import { Button } from "@/components/ui";
import {
  HospitalSquareIcon,
  StarIcon,
  UserIcon,
  ClockIcon,
  UsersIcon,
} from "@/components/icons";

interface ClinicCardProps {
  clinic: Clinic;
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-6">
      {/* Icon & Rating Header */}
      <div className="mb-4 flex items-start justify-between sm:mb-6">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[20px] bg-[#DDF2F8] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:h-[64px] sm:w-[64px] sm:rounded-[32px]">
          <HospitalSquareIcon className="h-5 w-5 text-blue-500 sm:h-[23px] sm:w-[23px]" />
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1">
            <StarIcon size={14} className="fill-yellow-500 text-yellow-500" />
            <span className="text-[14px] leading-[20px] font-bold tracking-[0px] text-[#EAB308]">
              4.9
            </span>
          </div>
          <span className="text-[12px] leading-[16px] font-normal tracking-[0px] text-[#718096]">
            2.1k reviews
          </span>
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

      {/* Stats Grid */}
      <div className="mb-6 space-y-2.5 sm:mb-8 sm:space-y-3">
        <div className="flex h-[36px] w-full items-center justify-between rounded-[12px] border border-[#DCFCE7] bg-[#F0FDF4] p-[8px] sm:h-[38px] sm:rounded-[16px]">
          <div className="flex min-w-0 items-center gap-1.5 pr-2 text-[#166534] sm:gap-2">
            <UsersIcon size={16} />
            <span className="truncate text-[13px] leading-[18px] font-bold tracking-[0px] sm:text-[14px] sm:leading-[20px]">
              {clinic.doctorsCount} {clinic.doctorsSpecialty}
            </span>
          </div>
          <span className="flex h-[20px] shrink-0 items-center rounded-[8px] bg-white px-[8px] py-[2px] text-[10px] leading-[16px] font-bold tracking-[0px] text-[#16A34A] uppercase shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:text-[12px]">
            {clinic.status === "live" ? "LIVE" : "AVAILABLE"}
          </span>
        </div>

        <div className="flex h-[36px] w-full items-center justify-between rounded-[12px] border border-[#FFEDD5] bg-[#FFF7ED] p-[8px] opacity-75 sm:h-[38px] sm:rounded-[16px]">
          <div className="flex items-center gap-1.5 text-[#9A3412] sm:gap-2">
            <ClockIcon size={16} />
            <span className="text-[14px] leading-[20px] font-medium tracking-[0px]">
              {clinic.waitTime || "No Wait"} Wait
            </span>
          </div>
          <span className="text-[12px] leading-[16px] font-medium tracking-[0px] text-[#9A3412]">
            Avg. Time
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto">
        <Button
          variant="outline"
          className="h-[44px] w-full rounded-[24px] border-2 border-[#F1F5F9] bg-white py-[12px] text-[13px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] transition-all hover:border-gray-200 hover:bg-gray-50 active:scale-95 sm:h-[48px] sm:text-[14px]"
        >
          View Departments
        </Button>
      </div>
    </div>
  );
}
