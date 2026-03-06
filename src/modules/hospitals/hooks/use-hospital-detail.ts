"use client";

import { useState, useCallback, useEffect } from "react";
import { useQuery, keepPreviousData } from "@tanstack/react-query";
import { hospitalDetailService } from "../services/hospital-detail.service";
import { Doctor } from "@/modules/doctors/types";
import { useDebounce } from "@/hooks/use-debounce";

export function useHospitalDetail(id: string) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearchQuery = useDebounce(searchQuery, 400);

  const [accumulatedDoctors, setAccumulatedDoctors] = useState<Doctor[]>([]);

  const { data, isLoading, isFetching, isPlaceholderData, error } = useQuery({
    queryKey: ["hospital", id, page, debouncedSearchQuery],
    queryFn: () =>
      hospitalDetailService.getHospitalById(id, {
        page,
        limit: 10,
        search: debouncedSearchQuery,
      }),
    enabled: !!id,
    placeholderData: keepPreviousData,
  });

  useEffect(() => {
    // Reset page and accumulated doctors when search changes
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setAccumulatedDoctors([]);
  }, [debouncedSearchQuery]);

  useEffect(() => {
    if (data?.doctors?.items && !isPlaceholderData) {
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAccumulatedDoctors(data.doctors.items);
      } else {
        setAccumulatedDoctors((prev) => {
          const existingIds = new Set(prev.map((d: Doctor) => d.id));
          const newDoctors = data.doctors.items.filter(
            (d: Doctor) => !existingIds.has(d.id)
          );
          return [...prev, ...newDoctors];
        });
      }
    }
  }, [data?.doctors?.items, page, isPlaceholderData]);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const hasMoreDoctors =
    Array.isArray(data?.doctors?.items) &&
    data.doctors.items.length > 0 &&
    accumulatedDoctors.length < (data?.doctors?.meta?.total ?? 0);

  return {
    hospital: data,
    doctors: accumulatedDoctors,
    isLoading,
    isFetching,
    error,
    hasMoreDoctors,
    handleLoadMore,
    searchQuery,
    setSearchQuery,
  };
}
