import { cn } from "@/lib/cn";
import { ListingSpecialtyColor } from "../../types/hospital.types";

export function SpecialtyPill({
  name,
  color = "default",
}: {
  name: string;
  color?: ListingSpecialtyColor;
}) {
  const colorMap: Record<ListingSpecialtyColor, string> = {
    default: "bg-[#F1F5F9] text-[#475569]",
    teal: "bg-[#CCFBF1] text-[#0D9488]",
    purple: "bg-[#EDE9FE] text-[#7C3AED]",
    amber: "bg-[#FEF3C7] text-[#B45309]",
  };
  return (
    <span
      className={cn(
        "rounded-full px-[10px] py-[4px] text-[12px] leading-[16px] font-medium",
        colorMap[color]
      )}
    >
      {name}
    </span>
  );
}
