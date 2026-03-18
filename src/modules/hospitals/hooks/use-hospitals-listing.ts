"use client";

import { useState, useEffect, useCallback } from "react";
import { useHospitals } from "./use-hospitals";
import { Hospital, HospitalQueryParams } from "../types/hospital.types";
import { useDebounce } from "@/hooks";

export function useHospitalsListing(
  initialSearch?: string,
  initialIsVerified?: boolean
) {
  const [page, setPage] = useState(1);
  const [accumulatedHospitals, setAccumulatedHospitals] = useState<Hospital[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState(initialSearch || "");
  const debouncedSearch = useDebounce(searchQuery, 600);
  const [appliedFilters, setAppliedFilters] = useState<HospitalQueryParams>({
    isVerified: initialIsVerified,
  });

  const { data, isLoading, isFetching, error } = useHospitals({
    page,
    limit: 10,
    ...appliedFilters,
    search: debouncedSearch,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setAccumulatedHospitals([]);
  }, [appliedFilters, debouncedSearch]);

  useEffect(() => {
    if (data?.items) {
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setAccumulatedHospitals(data.items);
      } else {
        setAccumulatedHospitals((prev) => {
          const existingIds = new Set(prev.map((h) => h.id));
          const newItems = data.items.filter((h) => !existingIds.has(h.id));
          return [...prev, ...newItems];
        });
      }
    }
  }, [data, page]);

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleApplyFilters = useCallback((filters: HospitalQueryParams) => {
    setAppliedFilters((prev) => ({
      ...prev,
      ...filters,
    }));
    setPage(1);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const handleSearchSubmit = useCallback(() => {
    setAppliedFilters((prev) => ({ ...prev, search: searchQuery }));
    setPage(1);
  }, [searchQuery]);

  const hasMore =
    (data?.meta?.page ?? 0) > 0 &&
    (data?.meta?.page ?? 0) < (data?.meta?.totalPages ?? 0);

  return {
    accumulatedHospitals,
    searchQuery,
    isLoading: isLoading && accumulatedHospitals.length === 0,
    isSearching: isFetching && accumulatedHospitals.length === 0,
    isFetchingMore: isFetching && accumulatedHospitals.length > 0,
    error,
    hasMore,
    handleLoadMore,
    handleSearch,
    handleSearchSubmit,
    handleApplyFilters,
    appliedFilters,
    meta: data?.meta,
  };
}
