import React from "react";
import { Skeleton } from "@/components/ui/skeleton";

const HospitalHeaderSkeleton: React.FC = () => {
  return (
    <div
      className="mb-6 flex flex-col items-center justify-between gap-8 bg-white px-5 py-7 sm:px-6 md:mb-8 md:flex-row md:gap-0 md:px-10 md:py-8"
      style={{
        borderRadius: 32,
        boxShadow: "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      {/* Left Side: Hospital Info */}
      <div className="flex flex-col items-center gap-4 text-center md:items-start md:text-left">
        <div className="flex items-center gap-3">
          <Skeleton className="h-4 w-16" />
          <div className="text-[14px] text-gray-200">•</div>
          <Skeleton className="h-3 w-32" />
        </div>

        <Skeleton className="mt-1 h-8 w-64 sm:h-9 md:h-10" />

        <Skeleton className="mt-2 h-4 w-48" />
      </div>

      {/* Right Side: Stats */}
      <div className="flex w-full justify-center gap-4 md:w-auto">
        <Skeleton className="h-[100px] flex-1 rounded-[28px] sm:h-[130px] md:w-[150px]" />
        <Skeleton className="h-[100px] flex-1 rounded-[28px] sm:h-[130px] md:w-[150px]" />
      </div>
    </div>
  );
};

export default HospitalHeaderSkeleton;
