import { cn } from "@/lib/cn";
import { Input } from "@/components/ui";

interface FilterCheckboxProps {
  label: string;
  checked?: boolean;
  onChange?: (checked: boolean) => void;
}

export function FilterCheckbox({
  label,
  checked = false,
  onChange,
}: FilterCheckboxProps) {
  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <Input
        type="checkbox"
        className="hidden"
        checked={checked}
        onChange={(e) => onChange?.(e.target.checked)}
      />
      <div
        className={cn(
          "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border transition-all",
          checked
            ? "border-[#4FB3AA] bg-[#4FB3AA]"
            : "border-[#CBD5E1] bg-white"
        )}
      >
        {checked && (
          <svg width="13" height="10" viewBox="0 0 11 9" fill="none">
            <path
              d="M1 4L4 7L10 1"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[14px] leading-[20px] font-normal text-[#2D3748]">
        {label}
      </span>
    </label>
  );
}
