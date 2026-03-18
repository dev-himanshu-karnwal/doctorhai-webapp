"use client";

import { useState, useCallback, useEffect } from "react";
import { Doctor, DoctorQueryParams } from "../types";
import { useDoctors } from "./use-doctors";
import { useDebounce, useUpdateSearchParams } from "@/hooks";

export function useDoctorsListing({
  initialIsVerified,
  hospitalId,
  sortOrder = "asc",
}: {
  initialIsVerified?: boolean;
  hospitalId?: string;
  sortOrder?: "asc" | "desc";
}) {
  const { searchParams, updateSearchParam } = useUpdateSearchParams();
  const initialSearch = searchParams.get("search") || "";

  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(initialSearch);
  const debouncedSearch = useDebounce(searchQuery, 400);

  useEffect(() => {
    updateSearchParam("search", debouncedSearch.trim());
  }, [debouncedSearch, updateSearchParam]);

  useEffect(() => {
    if (initialSearch !== searchQuery) {
      setSearchQuery(initialSearch);
    }
  }, [initialSearch]);

  const [items, setItems] = useState<Doctor[]>([]);

  const queryParams: DoctorQueryParams = {
    page,
    limit: 10,
    search: debouncedSearch.trim() || undefined,
    isVerified: initialIsVerified,
    hospitalId,
    sortOrder,
  };

  const { data, isLoading, isFetching, isPlaceholderData, error } =
    useDoctors(queryParams);

  // Reset accumulation when search changes
  useEffect(() => {
    // eslint-disable-next-line react-hooks/set-state-in-effect
    setPage(1);
    setItems([]);
  }, [debouncedSearch]);

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
          // Combine carefully to avoid duplicates
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
    setPage(1);
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
    error,
  };
}
