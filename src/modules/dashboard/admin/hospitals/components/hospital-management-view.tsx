"use client";

import { useStats } from "@/modules/stats";
import { useHospitalsListing } from "@/modules/hospitals/hooks";
import { HospitalCard } from "./hospital-card";
import { HospitalManagementHeader } from "./hospital-management-header";
import { HospitalManagementFilters } from "./hospital-management-filters";
import { ChevronDownIcon } from "@/components/icons";
import { HospitalManagementSkeleton } from "./skeletons";

import { Button } from "@/components/ui/button";

export function HospitalManagementView() {
  const { hospitalStats, isLoading: isLoadingStats } = useStats();
  const {
    accumulatedHospitals: hospitals,
    searchQuery,
    handleSearch,
    handleSearchSubmit,
    isLoading: isLoadingHospitals,
    isFetchingMore,
    hasMore,
    handleLoadMore,
  } = useHospitalsListing(undefined);

  const isLoading = isLoadingStats || isLoadingHospitals;

  return (
    <div className="min-h-screen" style={{ background: "#F0F2F5" }}>
      <div className="mx-auto max-w-6xl px-4 py-7 sm:px-6 md:px-8">
        <HospitalManagementHeader
          totalHospitals={hospitalStats?.total_hospital_count || 0}
          percentageChange={hospitalStats?.percentage_change}
          isLoading={isLoadingStats}
        />
        <HospitalManagementFilters
          search={searchQuery}
          setSearch={handleSearch}
          onSearchSubmit={handleSearchSubmit}
        />

        {/* ── Cards Grid ── */}
        <div className="mb-8">
          {isLoading ? (
            <HospitalManagementSkeleton />
          ) : (
            <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
              {hospitals.map((hospital) => (
                <HospitalCard key={hospital.id} h={hospital} />
              ))}
              {hospitals.length === 0 && (
                <div
                  className="col-span-1 py-20 text-center text-gray-400 sm:col-span-2 lg:col-span-3"
                  style={{ fontSize: 14 }}
                >
                  No hospitals match your search.
                </div>
              )}
            </div>
          )}
        </div>

        {/* ── Load More ── */}
        {hasMore && (
          <div className="flex justify-center">
            <Button
              variant="secondary"
              onClick={handleLoadMore}
              disabled={isFetchingMore}
              className="h-11 rounded-xl border-gray-200 bg-white px-7 text-gray-700 shadow-sm hover:bg-gray-50"
            >
              {isFetchingMore ? "Loading..." : "Load More Hospitals"}
              <ChevronDownIcon
                className={`h-4 w-4 text-gray-500 ${isFetchingMore ? "animate-spin" : ""}`}
              />
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
