"use client";

import { Skeleton } from "@/components/ui/skeleton";

export const DoctorStatusOptionsSkeleton = () => {
  return (
    <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:max-w-[720px]">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col items-center justify-center gap-3 rounded-[32px] bg-white p-7 shadow-sm sm:rounded-[40px] sm:p-10"
        >
          <Skeleton className="h-14 w-14 rounded-2xl sm:h-16 sm:w-16" />
          <Skeleton className="h-6 w-24" />
          <Skeleton className="h-4 w-40" />
        </div>
      ))}
    </div>
  );
};
