import { ActivityIcon } from "@/components/icons";

export function StepThreeIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E0BBE466] shadow-[0_0_0_8px_white] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_25px_-5px_rgba(147,51,234,0.15),0_0_0_8px_white] sm:h-20 sm:w-20 lg:h-[96px] lg:w-[96px]">
      <ActivityIcon size={28} className="text-[#9333EA]" />
    </div>
  );
}
