"use client";

import { useState, useEffect, useCallback } from "react";
import { useHospitals } from "./use-hospitals";
import { Hospital } from "../types/hospital.types";
import { useDebounce } from "@/hooks";

export function useHospitalsListing(initialIsVerified?: boolean) {
  const [page, setPage] = useState(1);
  const [accumulatedHospitals, setAccumulatedHospitals] = useState<Hospital[]>(
    []
  );
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  const { data, isLoading, isFetching, error } = useHospitals({
    page,
    limit: 10,
    search: debouncedSearch,
    isVerified: initialIsVerified,
  });

  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setAccumulatedHospitals([]);
  }, [debouncedSearch]);

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

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

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
    meta: data?.meta,
  };
}
