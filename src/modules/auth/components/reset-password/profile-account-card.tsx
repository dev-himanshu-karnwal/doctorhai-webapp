"use client";

import { memo } from "react";
import { Input } from "@/components/ui";
import { cn } from "@/lib/cn";
import {
  CheckCircleIcon,
  HeartIcon,
  HospitalSquareIcon,
} from "@/components/icons";
import { UseFormRegister } from "react-hook-form";
import { type ResetPasswordValues } from "../../schemas/reset-password/reset-password.schema";

export type ResetProfile = {
  accountId: string;
  type: string;
  name: string;
};

interface ProfileAccountCardProps {
  profile: ResetProfile;
  isSelected: boolean;
  register: UseFormRegister<ResetPasswordValues>;
}

export const ProfileAccountCard = memo(
  ({ profile, isSelected, register }: ProfileAccountCardProps) => {
    return (
      <label
        className={cn(
          "relative flex cursor-pointer flex-col rounded-2xl border bg-white p-4 shadow-sm transition-all duration-300 hover:border-[#3D8F87]/30 hover:bg-[#F0FDFA]/50 focus:outline-none",
          isSelected
            ? "border-[#3D8F87] bg-[#F0FDFA] ring-4 ring-[#3D8F87]/5"
            : "border-gray-100"
        )}
      >
        <Input
          type="radio"
          value={profile.accountId}
          {...register("accountId")}
          className="sr-only"
        />
        <div className="flex flex-1 flex-col">
          <div className="mb-3 flex items-center justify-between">
            <div className="flex items-center gap-2">
              <div
                className={cn(
                  "flex h-8 w-8 items-center justify-center rounded-[8px] transition-colors",
                  isSelected
                    ? "bg-[#3D8F87] text-white"
                    : "bg-gray-50 text-gray-400"
                )}
              >
                {profile.type.toLowerCase() === "doctor" ? (
                  <HeartIcon size={16} />
                ) : (
                  <HospitalSquareIcon size={16} />
                )}
              </div>
              <span
                className={cn(
                  "text-[13px] font-bold capitalize transition-colors",
                  isSelected ? "text-[#115E59]" : "text-gray-900"
                )}
              >
                {profile.type}
              </span>
            </div>
            <CheckCircleIcon
              className={cn(
                "h-5 w-5 text-[#3D8F87] transition-all duration-300",
                isSelected ? "scale-100 opacity-100" : "scale-50 opacity-0"
              )}
            />
          </div>
          <span
            className={cn(
              "line-clamp-2 text-[13px] leading-relaxed font-medium transition-colors",
              isSelected ? "text-[#0F766E]" : "text-gray-500"
            )}
          >
            {profile.name}
          </span>
        </div>
      </label>
    );
  }
);

ProfileAccountCard.displayName = "ProfileAccountCard";
