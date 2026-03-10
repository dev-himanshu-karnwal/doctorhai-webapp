import { EyeIcon } from "@/components/icons";

export function StepTwoIcon() {
  return (
    <div className="flex h-16 w-16 items-center justify-center rounded-full bg-[#E6F6F4] shadow-[0_0_0_8px_white] transition-transform duration-300 group-hover:scale-110 group-hover:shadow-[0_10px_25px_-5px_rgba(61,143,135,0.2),0_0_0_8px_white] sm:h-20 sm:w-20 lg:h-[96px] lg:w-[96px]">
      <EyeIcon size={28} className="text-[#3D8F87]" />
    </div>
  );
}
