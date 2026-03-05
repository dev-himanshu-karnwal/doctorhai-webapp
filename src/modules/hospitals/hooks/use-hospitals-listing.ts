"use client";

import { useState, useEffect, useCallback } from "react";
import { useHospitals } from "./use-hospitals";
import { Hospital } from "../types/hospital.types";
import { useDebounce } from "@/hooks";

export function useHospitalsListing() {
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
    isVerified: true,
  });

  useEffect(() => {
    setPage(1);
    setAccumulatedHospitals([]);
  }, [debouncedSearch]);

  useEffect(() => {
    if (data?.items) {
      if (page === 1) {
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

  const hasMore = (data?.meta?.page ?? 0) < (data?.meta?.totalPages ?? 0);

  return {
    accumulatedHospitals,
    searchQuery,
    isLoading,
    isFetching,
    error,
    hasMore,
    handleLoadMore,
    handleSearch,
    meta: data?.meta,
  };
}
