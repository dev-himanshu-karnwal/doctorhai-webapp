"use client";

import { Skeleton } from "@/components/ui";

export function TopHospitalsSkeleton() {
  return (
    <div className="mb-3 flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:mb-4 sm:gap-3 sm:rounded-[24px] sm:p-4 md:mb-[14px] md:gap-[12px] md:rounded-[32px] md:p-[16px]">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-20 rounded" />
        <Skeleton className="h-3 w-12 rounded" />
      </div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="-mx-1 flex items-center justify-between p-1">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <Skeleton className="h-[24px] w-[24px] rounded-full sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]" />
              <Skeleton className="h-4 w-32 rounded sm:w-40" />
            </div>
            <Skeleton className="h-4 w-10 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}

export function TopDoctorsSkeleton() {
  return (
    <div className="flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:gap-3 sm:rounded-[24px] sm:p-4 md:gap-[12px] md:rounded-[32px] md:p-[16px]">
      <div className="flex items-center justify-between">
        <Skeleton className="h-3 w-20 rounded" />
        <Skeleton className="h-3 w-12 rounded" />
      </div>
      <div className="space-y-2 sm:space-y-3 md:space-y-4">
        {[1, 2].map((i) => (
          <div key={i} className="-mx-1 flex items-center justify-between p-1">
            <div className="flex items-center gap-2 sm:gap-3 md:gap-4">
              <Skeleton className="h-[24px] w-[24px] rounded-full sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]" />
              <div className="space-y-1">
                <Skeleton className="h-3 w-24 rounded sm:w-32" />
                <Skeleton className="h-2 w-16 rounded sm:w-24" />
              </div>
            </div>
            <Skeleton className="h-4 w-12 rounded-full" />
          </div>
        ))}
      </div>
    </div>
  );
}
