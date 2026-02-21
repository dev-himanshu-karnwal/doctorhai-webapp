import { cn } from "@/lib/cn";
import type { StatusKind } from "@/types/common.types";

export type StatusIndicatorProps = {
  status: StatusKind;
  showLabel?: boolean;
  size?: "sm" | "md";
  className?: string;
};

const statusConfig: Record<
  StatusKind,
  { label: string; dotClass: string; badgeClass: string }
> = {
  available: {
    label: "Available Now",
    dotClass: "bg-green-500",
    badgeClass: "bg-green-600 text-white",
  },
  busy: {
    label: "Busy",
    dotClass: "bg-red-500",
    badgeClass: "bg-red-600 text-white",
  },
  "on-break": {
    label: "On Break",
    dotClass: "bg-amber-500",
    badgeClass: "bg-amber-600 text-white",
  },
  open: {
    label: "Open",
    dotClass: "bg-green-500",
    badgeClass: "bg-green-600 text-white",
  },
  closed: {
    label: "Closed",
    dotClass: "bg-gray-400",
    badgeClass: "bg-gray-500 text-white",
  },
};

export function StatusIndicator({
  status,
  showLabel = false,
  size = "md",
  className,
}: StatusIndicatorProps) {
  const config = statusConfig[status];
  const dotSize = size === "sm" ? "h-2 w-2" : "h-2.5 w-2.5";

  if (showLabel) {
    return (
      <span
        className={cn(
          "inline-flex items-center gap-1.5 rounded-full px-2.5 py-0.5 text-xs font-medium",
          config.badgeClass,
          className
        )}
      >
        <span className={cn("rounded-full", dotSize, config.dotClass)} />
        {config.label}
      </span>
    );
  }

  return (
    <span
      className={cn("rounded-full", dotSize, config.dotClass, className)}
      title={config.label}
      aria-label={config.label}
    />
  );
}
