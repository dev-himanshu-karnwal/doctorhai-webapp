import { cn } from "@/lib/cn";
import Link from "next/link";
import type { ButtonHTMLAttributes } from "react";

type ButtonVariant = "primary" | "secondary" | "outline" | "ghost";
type ButtonSize = "sm" | "md" | "lg";

export type ButtonProps = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant?: ButtonVariant;
  size?: ButtonSize;
  href?: string;
  loading?: boolean;
};

const variantClasses: Record<ButtonVariant, string> = {
  primary: "bg-teal-600 text-white hover:bg-teal-700",
  secondary: "bg-white text-blue-600 border border-gray-200 hover:bg-gray-50",
  outline: "border border-input bg-transparent hover:bg-gray-100",
  ghost: "hover:bg-gray-100",
};

const sizeClasses: Record<ButtonSize, string> = {
  sm: "h-8 px-3 text-sm",
  md: "h-10 px-4 text-sm",
  lg: "h-11 px-6 text-base",
};

const baseClasses =
  "inline-flex items-center justify-center gap-2 rounded-lg font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-teal-500 disabled:pointer-events-none disabled:opacity-50";

export function Button({
  className,
  variant = "primary",
  size = "md",
  type = "button",
  href,
  children,
  loading,
  disabled,
  ...props
}: ButtonProps) {
  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    className
  );

  const content = (
    <>
      {loading && (
        <svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24">
          <circle
            className="opacity-25"
            cx="12"
            cy="12"
            r="10"
            stroke="currentColor"
            strokeWidth="4"
            fill="none"
          />
          <path
            className="opacity-75"
            fill="currentColor"
            d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
          />
        </svg>
      )}
      {children}
    </>
  );

  if (href) {
    return (
      <Link href={href} className={classes}>
        {content}
      </Link>
    );
  }

  return (
    <button
      type={type}
      className={classes}
      disabled={loading || disabled}
      {...props}
    >
      {content}
    </button>
  );
}
