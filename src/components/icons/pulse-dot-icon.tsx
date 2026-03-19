import { cn } from "@/lib/cn";
import { IconProps } from "./types";

export const PulseDotIcon = ({
  size = 6,
  className = "",
  color,
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={cn("animate-pulse", className)}
    {...props}
  >
    <circle cx="12" cy="12" r="12" fill={color || "currentColor"} />
  </svg>
);
