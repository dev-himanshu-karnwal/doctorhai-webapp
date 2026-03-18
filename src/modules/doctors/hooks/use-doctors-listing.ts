"use client";

import { useState, useCallback, useEffect } from "react";
import { Doctor, DoctorQueryParams } from "../types";
import { useDoctors } from "./use-doctors";
import { useDebounce } from "@/hooks";

export function useDoctorsListing({
  initialSearch = "",
  initialIsVerified,
  hospitalId,
  sortOrder = "asc",
  initialFilters = {},
}: {
  initialSearch?: string;
  initialIsVerified?: boolean;
  hospitalId?: string;
  sortOrder?: "asc" | "desc";
  initialFilters?: DoctorQueryParams;
}) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchQuery, 600);

  const [appliedFilters, setAppliedFilters] =
    useState<DoctorQueryParams>(initialFilters);

  const [items, setItems] = useState<Doctor[]>([]);

  const queryParams: DoctorQueryParams = {
    page,
    limit: 10,
    search: debouncedSearch.trim() || undefined,
    isVerified: initialIsVerified,
    hospitalId,
    sortOrder,
    ...appliedFilters,
  };

  const { data, isLoading, isFetching, isPlaceholderData, error } =
    useDoctors(queryParams);

  // Reset accumulation when filters or search change
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setItems([]);
  }, [debouncedSearch, appliedFilters]);

  // Handle data accumulation
  useEffect(() => {
    const doctorsArray = data?.doctors;

    if (doctorsArray && Array.isArray(doctorsArray) && !isPlaceholderData) {
      if (page === 1) {
        // eslint-disable-next-line react-hooks/set-state-in-effect
        setItems(doctorsArray);
      } else {
        setItems((prev) => {
          const newItems = doctorsArray;
          const currentIds = new Set(prev.map((i) => i.id));
          const additions = newItems.filter((item) => !currentIds.has(item.id));
          return [...prev, ...additions];
        });
      }
    }
  }, [data, page, isPlaceholderData]);

  const loadMore = useCallback(() => setPage((p) => p + 1), []);
  const isFetchingMore = isFetching && items.length > 0;

  const hasMore =
    isFetchingMore ||
    (!isPlaceholderData &&
      items.length > 0 &&
      items.length < (data?.metadata?.total ?? 0) &&
      page < (data?.metadata?.totalPages ?? 0));

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
  }, []);

  const applyFilters = useCallback((filters: DoctorQueryParams) => {
    setAppliedFilters((prev) => ({
      ...prev,
      ...filters,
    }));
  }, []);

  return {
    items,
    isLoading: isLoading && items.length === 0,
    isSearching: isFetching && items.length === 0,
    isFetchingMore,
    hasMore,
    loadMore,
    searchQuery,
    setSearchQuery,
    handleSearch,
    applyFilters,
    appliedFilters,
    error,
  };
}
