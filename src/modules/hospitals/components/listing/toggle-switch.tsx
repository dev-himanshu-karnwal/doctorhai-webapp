"use client";

import { cn } from "@/lib/cn";

interface ToggleSwitchProps {
  enabled: boolean;
  onChange: (enabled: boolean) => void;
}

export function ToggleSwitch({ enabled, onChange }: ToggleSwitchProps) {
  return (
    <div
      onClick={() => onChange(!enabled)}
      className={cn(
        "relative h-[22px] w-[40px] cursor-pointer rounded-full transition-colors",
        enabled ? "bg-[#4DB6AC]" : "bg-[#CBD5E1]"
      )}
    >
      <div
        className={cn(
          "absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-all duration-300",
          enabled ? "left-[21px]" : "left-[3px]"
        )}
      />
    </div>
  );
}
