"use client";

import {
  useState,
  type ReactNode,
  forwardRef,
  type InputHTMLAttributes,
} from "react";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import { EyeIcon, EyeOffIcon } from "@/components/icons";

interface FormInputProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  icon?: ReactNode;
  rightElement?: ReactNode;
  addonLeft?: ReactNode;
  error?: string;
  successMessage?: string;
}

export const FormInput = forwardRef<HTMLInputElement, FormInputProps>(
  (
    {
      label,
      icon,
      rightElement,
      addonLeft,
      error,
      successMessage,
      type = "text",
      className,
      ...props
    },
    ref
  ) => {
    const [show, setShow] = useState(false);
    const isPass = type === "password";
    return (
      <div className="w-full space-y-2.5">
        <label className="ml-0.5 text-[15px] font-bold text-[#334155]">
          {label}
        </label>
        <div className="group relative">
          {icon && (
            <div className="absolute top-1/2 left-4 z-10 -translate-y-1/2 text-[#94A3B8] transition-colors group-focus-within:text-[#3D8F87]">
              {icon}
            </div>
          )}
          {addonLeft && (
            <div
              className={cn(
                "absolute top-1/2 z-10 flex -translate-y-1/2 items-center gap-1.5 text-[16px] font-medium text-[#1E293B]",
                icon ? "left-11" : "left-4"
              )}
            >
              {addonLeft}
            </div>
          )}
          <Input
            ref={ref}
            type={isPass && show ? "text" : type}
            className={cn(
              "h-[60px] rounded-[18px] border-[#F1F5F9] bg-[#F8FAFC] px-4 py-2 text-[16px] text-[#1E293B] placeholder:text-[#64748B] focus:border-[#3D8F87] focus:bg-white focus:ring-4 focus:ring-[#3D8F87]/5",
              icon && !addonLeft && "pl-12",
              icon && addonLeft && "pl-[100px]",
              !icon && addonLeft && "pl-[75px]",
              isPass && "pr-12",
              rightElement && "pr-12",
              error &&
                "border-red-400 focus:border-red-400 focus:ring-red-400/20",
              successMessage &&
                "border-emerald-400 focus:border-emerald-400 focus:ring-emerald-400/20",
              className
            )}
            {...props}
          />
          {rightElement ? (
            <div className="absolute top-1/2 right-4 flex -translate-y-1/2 items-center justify-center">
              {rightElement}
            </div>
          ) : (
            isPass && (
              <Button
                type="button"
                variant="ghost"
                onClick={() => setShow(!show)}
                className="absolute top-1/2 right-2 h-9 w-9 -translate-y-1/2 p-0 text-[#94A3B8] hover:bg-transparent hover:text-[#3D8F87]"
              >
                {show ? <EyeOffIcon size={20} /> : <EyeIcon size={20} />}
              </Button>
            )
          )}
        </div>
        {error && (
          <p className="ml-1 text-[13px] font-medium text-red-500/90">
            {error}
          </p>
        )}
        {!error && successMessage && (
          <p className="ml-1 text-[13px] font-medium text-emerald-500/90">
            {successMessage}
          </p>
        )}
      </div>
    );
  }
);
FormInput.displayName = "FormInput";
