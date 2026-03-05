"use client";

import { useMemo } from "react";
import { Button } from "@/components/ui";
import { HospitalCard } from "./hospital-card";
import { Hospital } from "../../types/hospital.types";
import { CardSkeletonList } from "@/components/skeleton";

interface HospitalsGridViewProps {
  hospitals: Hospital[];
  isLoading: boolean;
  isFetching: boolean;
  error: unknown;
  hasMore: boolean;
  onLoadMore: () => void;
  page: number;
}

export function HospitalsGridView({
  hospitals,
  isLoading,
  isFetching,
  error,
  hasMore,
  onLoadMore,
  page,
}: HospitalsGridViewProps) {
  const renderedHospitals = useMemo(
    () =>
      hospitals.map((hospital) => (
        <HospitalCard key={hospital.id} hospital={hospital} />
      )),
    [hospitals]
  );

  if (isLoading && page === 1) {
    return <CardSkeletonList count={6} />;
  }

  if (error) {
    return (
      <div className="py-12 text-center text-red-500">
        Failed to load hospitals. Please try again later.
      </div>
    );
  }

  return (
    <>
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {renderedHospitals}
      </div>

      {!isLoading && hospitals.length === 0 && (
        <div className="py-12 text-center text-[#718096]">
          No hospitals found matching your criteria.
        </div>
      )}

      {hasMore && (
        <div className="mt-12 flex justify-center">
          <Button
            variant="outline"
            className="h-12 rounded-full px-8 font-bold disabled:opacity-50"
            onClick={onLoadMore}
            disabled={isFetching}
          >
            {isFetching ? "Loading..." : "Load More Hospitals"}
          </Button>
        </div>
      )}
    </>
  );
}
