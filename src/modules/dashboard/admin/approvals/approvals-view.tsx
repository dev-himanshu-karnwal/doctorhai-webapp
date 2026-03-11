"use client";

import { useState } from "react";
import { ApprovalsStats, ApprovalsQueue } from "./components";
import {
  ApprovalsStatsSkeleton,
  ApprovalsQueueSkeleton,
} from "./components/skeletons";
import { useDoctorsListing } from "@/modules/doctors/hooks";
import { useHospitalsListing } from "@/modules/hospitals/hooks";

export function ApprovalsView() {
  const [searchQuery, setSearchQuery] = useState("");
  const [requestType, setRequestType] = useState<"all" | "doctor" | "hospital">(
    "all"
  );

  const {
    items: doctors,
    isLoading: isLoadingDoctors,
    isSearching: isSearchingDoctors,
    hasMore: hasMoreDoctors,
    loadMore: loadMoreDoctors,
    handleSearch: handleDoctorSearch,
  } = useDoctorsListing({ initialIsVerified: false });

  const {
    accumulatedHospitals: hospitals,
    isLoading: isLoadingHospitals,
    isSearching: isSearchingHospitals,
    hasMore: hasMoreHospitals,
    handleLoadMore: loadMoreHospitals,
    handleSearch: handleHospitalSearch,
  } = useHospitalsListing(false);

  const isGlobalLoading = isLoadingDoctors || isLoadingHospitals;
  const isGlobalSearching = isSearchingDoctors || isSearchingHospitals;

  const onSearchChange = (query: string) => {
    setSearchQuery(query);
    handleDoctorSearch(query);
    handleHospitalSearch(query);
  };

  const displayDoctors =
    requestType === "all" || requestType === "doctor" ? doctors : [];
  const displayHospitals =
    requestType === "all" || requestType === "hospital" ? hospitals : [];

  return (
    <div className="min-h-screen bg-[#F2F2ED]">
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:px-8">
        {/* Breadcrumb */}
        <div className="mb-2 flex items-center gap-2">
          <span
            className="rounded-full bg-[#E6F6F4] px-3 py-1 font-bold text-[#3D8F87] uppercase"
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
            }}
          >
            Requests Queue
          </span>
          <span className="text-[14px] leading-[20px] font-normal text-[#718096]">
            •
          </span>
          <span className="text-[14px] leading-[20px] font-medium text-[#718096]">
            Pending Approvals
          </span>
        </div>

        {/* Page Header */}
        <div className="mb-7 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
          <h1
            className="text-[28px] leading-[32px] font-extrabold text-[#2D3748] sm:text-[36px] sm:leading-[40px]"
            style={{ letterSpacing: "-0.9px" }}
          >
            Verification Dashboard
          </h1>
        </div>

        {/* Stats Row */}
        {isGlobalLoading ? (
          <>
            <ApprovalsStatsSkeleton />
            <ApprovalsQueueSkeleton />
          </>
        ) : (
          <>
            <ApprovalsStats />
            {/* ── Pending Verification Queue ── */}
            <ApprovalsQueue
              hospitals={displayHospitals}
              doctors={displayDoctors}
              isLoading={isGlobalLoading || isGlobalSearching}
              hasMore={hasMoreHospitals || hasMoreDoctors}
              searchQuery={searchQuery}
              onSearchChange={onSearchChange}
              requestType={requestType}
              onRequestTypeChange={setRequestType}
              onLoadMore={() => {
                if (
                  hasMoreHospitals &&
                  (requestType === "all" || requestType === "hospital")
                )
                  loadMoreHospitals();
                if (
                  hasMoreDoctors &&
                  (requestType === "all" || requestType === "doctor")
                )
                  loadMoreDoctors();
              }}
            />
          </>
        )}
      </div>
    </div>
  );
}
