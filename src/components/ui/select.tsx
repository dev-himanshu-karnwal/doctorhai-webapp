import * as React from "react";
import { cn } from "@/lib/cn";
import { ChevronDownIcon } from "@/components/icons";

export interface SelectOption {
  value: string;
  label: string;
}

export interface SelectProps extends React.SelectHTMLAttributes<HTMLSelectElement> {
  options: SelectOption[];
  icon?: React.ReactNode;
  containerClassName?: string;
}

const Select = React.forwardRef<HTMLSelectElement, SelectProps>(
  ({ className, options, icon, containerClassName, ...props }, ref) => {
    return (
      <div className={cn("relative", containerClassName)}>
        {icon && (
          <div className="pointer-events-none absolute top-1/2 left-3 z-10 -translate-y-1/2 text-gray-500">
            {icon}
          </div>
        )}
        <select
          className={cn(
            "flex h-[46px] w-full cursor-pointer appearance-none items-center justify-center gap-1.5 rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] py-[6px] text-[13px] leading-[20px] font-bold whitespace-nowrap text-[#2D3748] transition-all hover:bg-gray-100 focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none sm:text-[14px]",
            icon ? "pl-9" : "pl-4",
            "pr-10",
            className
          )}
          ref={ref}
          {...props}
        >
          {options.map((option) => (
            <option key={option.value} value={option.value}>
              {option.label}
            </option>
          ))}
        </select>
        <div className="pointer-events-none absolute top-1/2 right-3 z-10 -translate-y-1/2 text-gray-400">
          <ChevronDownIcon className="h-[13px] w-[13px]" />
        </div>
      </div>
    );
  }
);

Select.displayName = "Select";

export { Select };
