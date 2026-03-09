"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const DoctorStatusTrackerSkeleton = () => {
  return (
    <div className="flex w-full flex-col items-center">
      <div className="mb-6 h-4 w-24 sm:mb-10">
        <Skeleton className="h-full w-full rounded" />
      </div>

      <div className="relative mb-20 flex items-center justify-center sm:mb-28">
        {/* Glow effect skeleton */}
        <div className="absolute h-[320px] w-[320px] rounded-full bg-slate-100/50 blur-[50px] sm:h-[380px] sm:w-[380px]" />

        <div className="relative flex h-[260px] w-[260px] flex-col items-center justify-center rounded-full border-[4px] border-white bg-slate-50 sm:h-[300px] sm:w-[300px]">
          <div className="absolute inset-[10px] rounded-full border-[8px] border-slate-100 sm:inset-[12px] sm:border-[10px]" />

          <Skeleton className="h-20 w-20 rounded-full sm:h-24 sm:w-24" />
          <Skeleton className="mt-5 h-10 w-40 sm:mt-6" />
          <Skeleton className="mt-2 h-4 w-32" />
        </div>
      </div>
    </div>
  );
};
