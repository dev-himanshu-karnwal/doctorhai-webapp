"use client";

import { cn } from "@/lib/cn";
import { useState, type InputHTMLAttributes, type ReactNode } from "react";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  error?: string;
}

export function FormInput({
  label,
  icon,
  error,
  type = "text",
  className,
  ...props
}: FormInputProps) {
  const [showPassword, setShowPassword] = useState(false);
  const isPassword = type === "password";
  const inputType = isPassword ? (showPassword ? "text" : "password") : type;

  return (
    <div className="w-full space-y-2.5">
      <label className="ml-0.5 text-[15px] font-bold text-[#334155]">
        {label}
      </label>
      <div className="group relative">
        {icon && (
          <div className="absolute top-1/2 left-4 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#3D8F87]">
            {icon}
          </div>
        )}
        <input
          type={inputType}
          className={cn(
            "h-[60px] w-full rounded-[18px] border border-[#F1F5F9] bg-[#F8FAFC] px-4 py-2 text-[16px] text-[#1E293B] transition-all outline-none placeholder:text-[#94A3B8] focus:border-[#3D8F87] focus:bg-white focus:ring-4 focus:ring-[#3D8F87]/5",
            icon && "pl-12",
            isPassword && "pr-12",
            error && "border-red-500 focus:border-red-500 focus:ring-red-500",
            className
          )}
          {...props}
        />
        {isPassword && (
          <button
            type="button"
            onClick={() => setShowPassword(!showPassword)}
            className="absolute top-1/2 right-4 -translate-y-1/2 text-[#94A3B8] transition-colors hover:text-[#3D8F87]"
          >
            {showPassword ? (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
                <line x1="2" y1="2" x2="22" y2="22" />
              </svg>
            ) : (
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M2 12s3-7 10-7 10 7 10 7-3 7-10 7-10-7-10-7Z" />
                <circle cx="12" cy="12" r="3" />
              </svg>
            )}
          </button>
        )}
      </div>
      {error && (
        <p className="ml-1 text-[13px] font-medium text-red-500">{error}</p>
      )}
    </div>
  );
}
