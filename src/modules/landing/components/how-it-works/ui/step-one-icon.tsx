import { TouchIcon } from "@/components/icons";

export function StepOneIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#DDF2F8] shadow-[0_0_0_8px_white] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_25px_-5px_rgba(79,179,170,0.2),0_0_0_8px_white] sm:h-20 sm:w-20 lg:h-[96px] lg:w-[96px]">
      <TouchIcon size={28} className="text-[#3B82F6]" />
    </div>
  );
}
