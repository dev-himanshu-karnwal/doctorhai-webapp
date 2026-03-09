import React from "react";
import { Skeleton } from "@/components/ui/skeleton";
import HospitalHeaderSkeleton from "./HospitalHeaderSkeleton";
import DoctorCardSkeleton from "./DoctorCardSkeleton";

const HospitalDashboardSkeleton: React.FC = () => {
  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-6 pb-16 font-sans sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        <HospitalHeaderSkeleton />

        <div
          className="bg-white px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-10"
          style={{
            borderRadius: 32,
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* List Header Skeleton */}
          <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-center xl:gap-0">
            <div className="flex items-center gap-3">
              <Skeleton className="h-10 w-10 rounded-xl" />
              <Skeleton className="h-6 w-40" />
            </div>
            <div className="flex w-full flex-col gap-4 sm:flex-row xl:w-auto">
              <Skeleton className="h-10 w-full rounded-full sm:w-64" />
              <Skeleton className="h-10 w-full rounded-full sm:w-32" />
            </div>
          </div>

          {/* Cards List Skeleton */}
          <div className="flex flex-col gap-4">
            {Array.from({ length: 5 }).map((_, i) => (
              <DoctorCardSkeleton key={i} />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default HospitalDashboardSkeleton;
