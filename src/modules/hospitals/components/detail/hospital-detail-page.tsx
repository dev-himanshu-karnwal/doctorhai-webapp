"use client";

import Link from "next/link";
import { useParams } from "next/navigation";
import { HospitalDetailHeader } from "./hospital-detail-header";
import { HospitalDetailSidebar } from "./hospital-detail-sidebar";
import { HospitalDoctorAvailability } from "./hospital-doctor-availability";
import { useHospitalDetail, useIncrementHospitalView } from "../../hooks";
import { mapHospital } from "../../utils/hospital-mappers";
import { HospitalDetailSkeleton } from "../shared";
import { useEffect } from "react";

export function HospitalDetailPage() {
  const params = useParams<{ id: string }>();
  const id = params?.id || "";

  const { incrementView } = useIncrementHospitalView();

  useEffect(() => {
    if (id) {
      incrementView(id);
    }
  }, [id, incrementView]);

  const {
    hospital,
    doctors,
    isLoading,
    error,
    hasMoreDoctors,
    handleLoadMore,
    isFetching,
    searchQuery,
    setSearchQuery,
  } = useHospitalDetail(id);

  if (isLoading) {
    return <HospitalDetailSkeleton />;
  }

  if (error || !hospital) {
    return (
      <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-8">
        <div className="mx-auto max-w-[1160px] pt-20 text-center text-gray-500">
          Failed to load hospital details.
        </div>
      </div>
    );
  }

  const h = mapHospital(hospital, doctors || []);

  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Link
          href="/hospitals"
          className="mb-6 flex items-center gap-2 text-sm font-medium text-[#4FB3AA] hover:text-[#3D8F87]"
        >
          <span>←</span> Back to Directory
        </Link>

        <HospitalDetailHeader h={h} />

        <div className="flex flex-col gap-8 lg:flex-row">
          <HospitalDetailSidebar h={h} />
          <HospitalDoctorAvailability
            doctors={h.doctors}
            hasMore={hasMoreDoctors}
            onLoadMore={handleLoadMore}
            isLoadingMore={isFetching && doctors.length > 0}
            isSearching={isFetching && doctors.length === 0}
            searchQuery={searchQuery}
            onSearchQueryChange={setSearchQuery}
          />
        </div>
      </div>
    </div>
  );
}
