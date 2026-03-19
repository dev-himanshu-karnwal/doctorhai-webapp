import { cn } from "@/lib/cn";
import { Button } from "@/components/ui";

interface LoginToggleProps {
  type: "username" | "email";
  onChange: (type: "username" | "email") => void;
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
          onClick={() => onChange("email")}
          className={cn(
            "h-auto flex-1 rounded-[18px] py-3 text-[15px] font-bold transition-all duration-300 hover:bg-transparent",
            type === "email"
              ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)] hover:bg-white"
              : "text-[#3D8F87]"
          )}
        >
          Hospital
        </Button>
        <Button
          type="button"
          variant="ghost"
          onClick={() => onChange("username")}
          className={cn(
            "h-auto flex-1 rounded-[18px] py-3 text-[15px] font-bold transition-all duration-300 hover:bg-transparent",
            type === "username"
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
