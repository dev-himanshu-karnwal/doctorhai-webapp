import { IconProps } from "@/components/icons";

export const AuthSubmitIcon = ({ size = 16, className = "" }: IconProps) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 19 16"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    className={className}
  >
    <path
      d="M0 16V0L19 8L0 16ZM2 13L13.85 8L2 3V6.5L8 8L2 9.5V13ZM2 13V8V3V6.5V9.5V13Z"
      fill="currentColor"
    />
  </svg>
);
