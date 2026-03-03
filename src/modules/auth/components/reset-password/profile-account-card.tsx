"use client";

import { memo } from "react";
import { Input } from "@/components/ui/input";
import { cn } from "@/lib/cn";
import { Icons } from "../shared/icons";

export type ResetProfile = {
  accountId: string;
  type: string;
  name: string;
};

interface ProfileAccountCardProps {
  profile: ResetProfile;
  isSelected: boolean;
  register: any;
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
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M19 14c1.49-1.46 3-3.21 3-5.5A5.5 5.5 0 0 0 16.5 3c-1.76 0-3 .5-4.5 2-1.5-1.5-2.74-2-4.5-2A5.5 5.5 0 0 0 2 8.5c0 2.3 1.5 4.05 3 5.5l7 7Z" />
                  </svg>
                ) : (
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M3 21h18" />
                    <path d="M5 21V7l8-4v18" />
                    <path d="M13 21v-4a3 3 0 0 1 6 0v4" />
                  </svg>
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
            <Icons.CheckCircle
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
