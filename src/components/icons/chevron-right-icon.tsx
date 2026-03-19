import { IconProps } from "@/components/icons/types";

export const ChevronRightIcon = ({
  size = 20,
  className = "",
  ...props
}: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
    {...props}
  >
    <path d="M9 18l6-6-6-6" />
  </svg>
);
