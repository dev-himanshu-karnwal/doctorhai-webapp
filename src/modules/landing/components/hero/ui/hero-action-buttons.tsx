import { Button } from "@/components/ui";
import { ArrowRightIcon, PlayCircleIcon } from "@/components/icons";

export function HeroActionButtons() {
  return (
    <div className="flex flex-col flex-wrap items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
      <Button className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2D3748] px-[24px] py-[12px] text-[15px] font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#1e293b] active:scale-95 sm:w-auto sm:px-[32px] sm:py-[14px] sm:text-[16px]">
        Get Started
        <ArrowRightIcon
          size={18}
          strokeWidth={3}
          className="transition-transform group-hover:translate-x-1"
        />
      </Button>

      <Button className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-[24px] py-[12px] text-[15px] font-bold text-[#2D3748] shadow-sm ring-1 ring-black/[0.05] transition-all hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md active:scale-95 sm:w-auto sm:px-[32px] sm:py-[14px] sm:text-[16px]">
        <PlayCircleIcon size={15} className="text-[#4FB3AA]" />
        View Demo
      </Button>
    </div>
  );
}
