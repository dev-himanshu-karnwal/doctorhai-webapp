import type { HospitalEntry } from "../../../types";
import { Button } from "@/components/ui/button";

type TopHospitalsListProps = {
  topHospitals: HospitalEntry[];
};

export function TopHospitalsList({ topHospitals }: TopHospitalsListProps) {
  return (
    <div className="mb-3 flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:mb-4 sm:gap-3 sm:rounded-[24px] sm:p-4 md:mb-[14px] md:gap-[12px] md:rounded-[32px] md:p-[16px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] leading-[12px] font-bold tracking-[0.6px] text-[#718096] uppercase sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[16px]">
          Top Hospitals
        </h3>
        <Button
          variant="ghost"
          className="h-auto p-0 text-[9px] leading-[12px] font-bold text-[#3D8F87] transition-colors hover:text-[#2c6e67] hover:underline sm:text-[10px] sm:leading-[14px] md:text-[11px] md:leading-[15px]"
        >
          View All
        </Button>
      </div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {topHospitals.slice(0, 2).map((hospital) => (
          <div
            key={hospital.id}
            className="group -mx-1 flex cursor-pointer flex-wrap items-center justify-between rounded-xl p-1 transition-all hover:bg-white/30 sm:flex-nowrap sm:rounded-2xl"
          >
            <div className="flex min-w-[70%] flex-1 items-center gap-2 sm:gap-3 md:gap-4">
              <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow group-hover:shadow-md sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A0AEC0"
                  strokeWidth="2.5"
                >
                  <rect x="3" y="3" width="18" height="18" rx="4" />
                  <line x1="12" y1="8" x2="12" y2="16" />
                  <line x1="8" y1="12" x2="16" y2="12" />
                </svg>
              </div>
              <div className="w-full min-w-0 flex-1 space-y-0.5 pr-1 sm:space-y-0">
                <p className="truncate text-[12px] leading-[16px] font-bold text-[#2D3748] transition-colors group-hover:text-[#3D8F87] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
                  {hospital.name}
                </p>
                <div className="flex items-center gap-1">
                  <svg
                    width="10"
                    height="10"
                    viewBox="0 0 24 24"
                    fill="#FFC107"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                  </svg>
                  <span className="text-[10px] leading-[15px] font-normal text-[#718096]">
                    4.9 (2.1k reviews)
                  </span>
                </div>
              </div>
            </div>
            <div className="flex shrink-0 items-center gap-[2px] rounded-full bg-[#DCFCE7] px-[4px] py-[2px] transition-transform group-hover:scale-105 sm:gap-[3px] sm:px-[5px] sm:py-[2px] md:gap-[4px] md:px-[8px] md:py-[4px]">
              <div className="h-[4px] w-[4px] animate-pulse rounded-full bg-[#22C55E] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
              <span className="text-[8px] leading-[10px] font-bold text-[#15803D] sm:text-[9px] sm:leading-[12px] md:text-[10px] md:leading-[15px]">
                Live
              </span>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
