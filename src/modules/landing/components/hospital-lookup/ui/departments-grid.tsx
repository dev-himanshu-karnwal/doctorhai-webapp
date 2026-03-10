import type { DepartmentCategory } from "../../../types";
import { Button } from "@/components/ui";
import {
  StethoscopeIcon,
  CardiologyIcon,
  PediatricsIcon,
  NeurologyIcon,
} from "@/components/icons";

type DepartmentsGridProps = {
  departments: DepartmentCategory[];
};

export function DepartmentsGrid({}: DepartmentsGridProps) {
  return (
    <div className="grid grid-cols-2 gap-2 pb-4 sm:gap-3 sm:pb-6 md:gap-4 md:pb-[24px]">
      {/* General Physician */}
      <Button
        variant="ghost"
        className="group flex h-auto w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]"
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F6F4] transition-colors group-hover:bg-[#cbefe9] sm:h-8 sm:w-8 md:h-10 md:w-10">
          <StethoscopeIcon size={20} className="text-[#3D8F87]" />
        </div>
        <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
          General Physician
        </span>
      </Button>

      {/* Cardiology */}
      <Button
        variant="ghost"
        className="group flex h-auto w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]"
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] transition-colors group-hover:bg-[#c9e8f7] sm:h-8 sm:w-8 md:h-10 md:w-10">
          <CardiologyIcon size={20} className="text-[#3B82F6]" />
        </div>
        <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
          Cardiology
        </span>
      </Button>

      {/* Pediatrics */}
      <Button
        variant="ghost"
        className="group flex h-auto w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]"
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] transition-colors group-hover:bg-[#ebd9f7] sm:h-8 sm:w-8 md:h-10 md:w-10">
          <PediatricsIcon size={20} className="text-[#A855F7]" />
        </div>
        <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
          Pediatrics
        </span>
      </Button>

      {/* Neurology */}
      <Button
        variant="ghost"
        className="group flex h-auto w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]"
      >
        <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] transition-colors group-hover:bg-[#ffefc9] sm:h-8 sm:w-8 md:h-10 md:w-10">
          <NeurologyIcon size={20} className="text-[#CA8A04]" />
        </div>
        <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
          Neurology
        </span>
      </Button>
    </div>
  );
}
