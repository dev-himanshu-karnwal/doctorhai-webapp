import { Button } from "@/components/ui";
import { ArrowRightIcon } from "@/components/icons";
import Link from "next/link";

export function HeroActionButtons() {
  return (
    <div className="flex flex-col flex-wrap items-stretch gap-3 pt-4 sm:flex-row sm:items-center sm:gap-4">
      <Link href={"/hospitals"}>
        <Button className="group h-[52px] min-w-[160px] gap-2.5 rounded-full bg-[#1e293b] px-8 text-[15px] font-bold text-white shadow-[0_8px_30px_rgb(0,0,0,0.12)] transition-all duration-300 hover:-translate-y-1 hover:bg-[#0f172a] hover:shadow-[0_12px_40px_rgb(0,0,0,0.18)] active:scale-95">
          Get Started
          <ArrowRightIcon
            size={18}
            strokeWidth={2.5}
            className="transition-transform duration-300 group-hover:translate-x-1"
          />
        </Button>
      </Link>
    </div>
  );
}
