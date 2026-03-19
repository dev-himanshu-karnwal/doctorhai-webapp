"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const DoctorQuickReturnsSkeleton = () => {
  return (
    <div className="mt-10 w-full rounded-[32px] bg-white p-7 shadow-sm sm:mt-14 sm:rounded-[40px] sm:p-10 lg:max-w-[720px]">
      <div className="mb-6 flex items-center gap-3 sm:mb-8">
        <Skeleton className="h-9 w-9 rounded-xl" />
        <Skeleton className="h-6 w-40" />
      </div>

      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
        {[1, 2, 3, 4].map((i) => (
          <Skeleton key={i} className="h-12 w-full rounded-[22px] sm:h-16" />
        ))}
      </div>

      <div className="mt-8">
        <Skeleton className="mb-2 h-4 w-40" />
        <Skeleton className="h-12 w-full rounded-[20px]" />
        <div className="mt-4 flex justify-end">
          <Skeleton className="h-10 w-32 rounded-[16px]" />
        </div>
      </div>
    </div>
  );
};
