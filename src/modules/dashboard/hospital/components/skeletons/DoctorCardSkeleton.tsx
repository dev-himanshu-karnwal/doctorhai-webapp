import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const DoctorCardSkeleton: React.FC = () => {
  return (
    <div
      className="flex flex-col gap-5 px-5 py-6 sm:px-7 lg:grid lg:grid-cols-[1fr_minmax(150px,200px)_minmax(150px,200px)_auto] lg:items-center lg:gap-6"
      style={{ border: "1px solid #f1f5f9", borderRadius: 28 }}
    >
      {/* Column 1: Profile */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        {/* Avatar Skeleton */}
        <Skeleton className="h-[50px] w-[50px] shrink-0 rounded-full sm:h-[56px] sm:w-[56px]" />

        {/* Info Skeleton */}
        <div className="flex flex-col gap-2">
          <Skeleton className="h-4 w-32" />
          <Skeleton className="h-3 w-48" />
          <Skeleton className="mt-1 h-4 w-24" />
        </div>
      </div>

      {/* Column 2: Shift (Example) */}
      <div className="hidden flex-col justify-center lg:flex">
        <Skeleton className="mb-1 h-3 w-12" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Column 3: Room (Example) */}
      <div className="hidden flex-col justify-center lg:flex">
        <Skeleton className="mb-1 h-3 w-12" />
        <Skeleton className="h-4 w-20" />
      </div>

      {/* Column 4: Actions Skeleton */}
      <div className="xs:flex-nowrap mt-2 flex w-full flex-wrap items-center gap-2.5 border-t border-[#f1f5f9] pt-5 lg:mt-0 lg:w-auto lg:border-t-0 lg:pt-0">
        <Skeleton className="h-10 flex-1 rounded-full lg:w-28 lg:flex-none" />
        <Skeleton className="h-10 flex-1 rounded-full lg:w-28 lg:flex-none" />
      </div>
    </div>
  );
};

export default DoctorCardSkeleton;
