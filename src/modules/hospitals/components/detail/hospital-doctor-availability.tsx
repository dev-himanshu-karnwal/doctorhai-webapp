"use client";

import { HospitalDetail } from "../../types/hospital-detail.types";
import { Input, Button } from "@/components/ui";
import { DoctorListItemSkeleton } from "../shared";
import { DoctorListItem } from "./doctor-list-item";

export function HospitalDoctorAvailability({
  doctors,
  hasMore,
  onLoadMore,
  isLoadingMore,
  isSearching,
  searchQuery,
  onSearchQueryChange,
}: {
  doctors: HospitalDetail["doctors"];
  hasMore?: boolean;
  onLoadMore?: () => void;
  isLoadingMore?: boolean;
  isSearching?: boolean;
  searchQuery?: string;
  onSearchQueryChange?: (value: string) => void;
}) {
  return (
    <div className="flex-1 space-y-6">
      <div className="flex flex-wrap items-center justify-between gap-4">
        <h2 className="text-[20px] font-bold text-[#2D3748] sm:text-[24px]">
          Doctor Availability
        </h2>
        <div className="flex h-11 w-full items-center gap-3 rounded-full border border-gray-100 bg-[#F8FAFC] px-4 sm:w-[320px]">
          <span className="text-gray-400">🔍</span>
          <Input
            type="text"
            placeholder="Search doctor..."
            value={searchQuery || ""}
            onChange={(e) => onSearchQueryChange?.(e.target.value)}
            className="h-full border-0 bg-transparent px-0 text-sm ring-0 outline-none focus-visible:ring-0 focus-visible:ring-offset-0"
          />
        </div>
      </div>

      <div className="flex flex-col gap-4">
        {doctors.length === 0 && !isLoadingMore && !isSearching && (
          <div className="col-span-full flex flex-col items-center justify-center rounded-[32px] border border-dashed border-gray-200 bg-gray-50 py-12 text-center">
            <div className="mb-3 rounded-full bg-gray-100 p-3">
              <span className="text-2xl text-gray-400">👨‍⚕️</span>
            </div>
            <h3 className="text-lg font-semibold text-gray-700">
              No doctor found
            </h3>
            <p className="mt-1 text-sm text-gray-500">
              There are currently no doctors available matching your criteria.
            </p>
          </div>
        )}

        {isSearching && (
          <>
            <DoctorListItemSkeleton />
            <DoctorListItemSkeleton />
            <DoctorListItemSkeleton />
          </>
        )}

        {doctors.map((doctor) => (
          <DoctorListItem key={doctor.id} doctor={doctor} />
        ))}
        {isLoadingMore && <DoctorListItemSkeleton />}
      </div>

      {hasMore && (
        <div className="flex justify-center pt-4">
          <Button
            variant="outline"
            onClick={onLoadMore}
            disabled={isLoadingMore}
            className="w-[180px] rounded-full border-[#4FB3AA] text-[#3D8F87] hover:bg-[#F0FDF4] hover:text-[#2c6e68]"
          >
            {isLoadingMore ? "Loading..." : "Load More Doctors"}
          </Button>
        </div>
      )}
    </div>
  );
}
