"use client";

import { useState, useRef, useCallback } from "react";
import { useHospitals } from "./use-hospitals";
import { Hospital } from "../types/hospital.types";
import { useDebounce } from "@/hooks";

export function useHospitalsListing() {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 500);

  // Track previous search to detect changes during render (React docs pattern)
  const prevSearchRef = useRef(debouncedSearch);
  const accumulatedRef = useRef<Hospital[]>([]);

  // Reset accumulated list during render when search changes (not in an effect)
  if (prevSearchRef.current !== debouncedSearch) {
    prevSearchRef.current = debouncedSearch;
    accumulatedRef.current = [];
  }

  const { data, isLoading, isFetching, error } = useHospitals({
    page,
    limit: 10,
    search: debouncedSearch,
    isVerified: true,
  });

  // Accumulate hospitals during render (no effect, no cascading setState)
  if (data?.items) {
    if (page === 1) {
      accumulatedRef.current = data.items;
    } else {
      const existingIds = new Set(accumulatedRef.current.map((h) => h.id));
      const newItems = data.items.filter((h) => !existingIds.has(h.id));
      if (newItems.length > 0) {
        accumulatedRef.current = [...accumulatedRef.current, ...newItems];
      }
    }
  }

  const handleLoadMore = useCallback(() => {
    setPage((prev) => prev + 1);
  }, []);

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

  const hasMore = (data?.meta?.page ?? 0) < (data?.meta?.totalPages ?? 0);

  return {
    accumulatedHospitals: accumulatedRef.current,
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
