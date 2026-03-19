"use client";

import { DoctorStatusTrackerSkeleton } from "./DoctorStatusTrackerSkeleton";
import { DoctorStatusOptionsSkeleton } from "./DoctorStatusOptionsSkeleton";
import { DoctorQuickReturnsSkeleton } from "./DoctorQuickReturnsSkeleton";

const DoctorDashboardSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#fcfdfe] px-5 pt-2 pb-32 sm:px-8 sm:pt-4 lg:pt-6">
      <main className="mx-auto flex max-w-[850px] flex-col items-center">
        <DoctorStatusTrackerSkeleton />
        <DoctorStatusOptionsSkeleton />
        <DoctorQuickReturnsSkeleton />
      </main>
    </div>
  );
};

export default DoctorDashboardSkeleton;
