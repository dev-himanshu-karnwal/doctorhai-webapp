"use client";

import { useState, useCallback, useEffect } from "react";
import { useHospital } from "./use-hospital";
import { useDoctors } from "@/modules/doctors/hooks/use-doctors";
import { useDebounce } from "@/hooks/use-debounce";
import { Doctor } from "@/modules/doctors/types";

export function useHospitalDetail(id: string) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  const [accumulatedDoctors, setAccumulatedDoctors] = useState<Doctor[]>([]);

  // 1. Fetch Hospital Info
  const {
    data: hospital,
    isLoading: isHospitalLoading,
    error: hospitalError,
  } = useHospital(id);

  // 2. Fetch Doctors for this Hospital
  const {
    data: doctorsData,
    isFetching: isDoctorsFetching,
    error: doctorsError,
  } = useDoctors({
    page,
    limit: 10,
    search: debouncedSearchQuery,
    hospitalId: id,
    isVerified: true,
  });

  useEffect(() => {
    // Reset page and accumulated doctors when search changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setAccumulatedDoctors([]);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (doctorsData?.doctors) {
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAccumulatedDoctors(doctorsData.doctors);
      } else {
        setAccumulatedDoctors((prev) => {
          const existingIds = new Set(prev.map((d: Doctor) => d.id));
          const newDoctors = doctorsData.doctors.filter(
            (d: Doctor) => !existingIds.has(d.id)
          );
          return [...prev, ...newDoctors];
        });
      }
    }
  }, [doctorsData?.doctors, page]);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const hasMoreDoctors =
    Array.isArray(doctorsData?.doctors) &&
    doctorsData.doctors.length > 0 &&
    accumulatedDoctors.length < (doctorsData?.metadata?.total || 0);

  return {
    hospital,
    doctors: accumulatedDoctors,
    isLoading: isHospitalLoading,
    isFetching: isDoctorsFetching,
    error: hospitalError || doctorsError,
    hasMoreDoctors,
    handleLoadMore,
    searchQuery,
    setSearchQuery,
  };
}
