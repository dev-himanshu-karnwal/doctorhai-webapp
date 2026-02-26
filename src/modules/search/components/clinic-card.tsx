import { Clinic } from "../types/search.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";

interface ClinicCardProps {
  clinic: Clinic;
}

export function ClinicCard({ clinic }: ClinicCardProps) {
  return (
    <div className="group relative flex h-full flex-col overflow-hidden rounded-[24px] border border-gray-100 bg-white p-5 shadow-[0_8px_30px_rgb(0,0,0,0.02)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-6">
      {/* Icon & Rating Header */}
      <div className="mb-4 flex items-start justify-between sm:mb-6">
        <div className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[20px] bg-[#DDF2F8] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:h-[64px] sm:w-[64px] sm:rounded-[32px]">
          <svg
            width="23"
            height="23"
            viewBox="0 0 23 23"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5 sm:h-[23px] sm:w-[23px]"
          >
            <path
              d="M9.375 17.5H13.125V13.125H17.5V9.375H13.125V5H9.375V9.375H5V13.125H9.375V17.5ZM2.5 22.5C1.8125 22.5 1.22396 22.2552 0.734375 21.7656C0.244792 21.276 0 20.6875 0 20V2.5C0 1.8125 0.244792 1.22396 0.734375 0.734375C1.22396 0.244792 1.8125 0 2.5 0H20C20.6875 0 21.276 0.244792 21.7656 0.734375C22.2552 1.22396 22.5 1.8125 22.5 2.5V20C22.5 20.6875 22.2552 21.276 21.7656 21.7656C21.276 22.2552 20.6875 22.5 20 22.5H2.5ZM2.5 20H20V2.5H2.5V20ZM2.5 2.5V20V2.5Z"
              fill="#3B82F6"
            />
          </svg>
        </div>
        <div className="text-right">
          <div className="flex items-center justify-end gap-1">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="#FFB300"
              stroke="#FFB300"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
            </svg>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2" />
              <circle cx="9" cy="7" r="4" />
              <path d="M22 21v-2a4 4 0 0 0-3-3.87" />
              <path d="M16 3.13a4 4 0 0 1 0 7.75" />
            </svg>
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
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="12" cy="12" r="10" />
              <polyline points="12 6 12 12 16 14" />
            </svg>
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
