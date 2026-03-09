"use client";

import { useState, useCallback, useEffect } from "react";
import { Doctor, DoctorQueryParams } from "../types";
import { useDoctors } from "./use-doctors";
import { useDebounce } from "@/hooks";

export function useDoctorsListing(initialIsVerified = true) {
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState("");
  const debouncedSearch = useDebounce(searchQuery, 400);

  const [items, setItems] = useState<Doctor[]>([]);

  const queryParams: DoctorQueryParams = {
    page,
    limit: 10,
    search: debouncedSearch || undefined,
    isVerified: initialIsVerified,
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
  // Only allow loadMore if the total array length is less than the total available on the server.
  const hasMore = items.length < (data?.metadata?.total ?? 0);

  const handleSearch = useCallback((value: string) => {
    setSearchQuery(value);
    setPage(1);
  }, []);

  return {
    items,
    isLoading: isLoading && items.length === 0,
    isSearching: isFetching && items.length === 0,
    isFetchingMore: isFetching && items.length > 0,
    hasMore,
    loadMore,
    searchQuery,
    setSearchQuery,
    handleSearch,
    error,
  };
}
