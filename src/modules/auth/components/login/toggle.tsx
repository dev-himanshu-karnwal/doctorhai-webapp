import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

interface LoginToggleProps {
  type: "doctor" | "hospital";
  onChange: (type: "doctor" | "hospital") => void;
}

export function LoginToggle({ type, onChange }: LoginToggleProps) {
  return (
    <div className="mb-10 flex w-full items-center rounded-[24px] bg-[#F1F5F9] p-1.5">
      <div className="flex-none px-6">
        <span className="text-[15px] font-bold text-[#64748B]">I am a:</span>
      </div>
      <div className="flex flex-1 gap-1">
        <Button
          type="button"
          variant="ghost"
          onClick={() => onChange("hospital")}
          className={cn(
            "h-auto flex-1 rounded-[18px] py-3 text-[15px] font-bold transition-all duration-300 hover:bg-transparent",
            type === "hospital"
              ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-white"
              : "text-[#3D8F87]"
          )}
        >
          Hospital
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => onChange("doctor")}
          className={cn(
            "h-auto flex-1 rounded-[18px] py-3 text-[15px] font-bold transition-all duration-300 hover:bg-transparent",
            type === "doctor"
              ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-white"
              : "text-[#3D8F87]"
          )}
        >
          Doctor
        </Button>
      </div>
    </div>
  );
}
