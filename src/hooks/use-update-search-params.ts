"use client";

import { usePathname, useRouter, useSearchParams } from "next/navigation";
import { useCallback } from "react";

/**
 * Custom hook to update URL search parameters without page reloads.
 * Useful for keeping UI state (like search queries or filters) in sync with the URL.
 */
export function useUpdateSearchParams() {
  const router = useRouter();
  const pathname = usePathname();
  const searchParams = useSearchParams();

  /**
   * Updates a single search parameter.
   * If value is undefined or null, the parameter is removed.
   */
  const updateSearchParam = useCallback(
    (key: string, value: string | undefined | null) => {
      // Use window.location.search to get fresh params without triggering re-renders of this function
      const params = new URLSearchParams(window.location.search);
      const current = params.get(key);
      const newVal = value?.trim() || "";

      if (newVal === current) return;

      if (newVal) {
        params.set(key, newVal);
      } else {
        params.delete(key);
      }

      router.replace(`${pathname}?${params.toString()}`, { scroll: false });
    },
    [pathname, router]
  );

  /**
   * Updates multiple search parameters at once.
   */
  const updateMultipleParams = useCallback(
    (updates: Record<string, string | undefined | null>) => {
      const params = new URLSearchParams(window.location.search);
      let hasChanged = false;

      Object.entries(updates).forEach(([key, value]) => {
        const current = params.get(key);
        const newVal = value?.trim() || "";

        if (newVal !== current) {
          if (newVal) {
            params.set(key, newVal);
          } else {
            params.delete(key);
          }
          hasChanged = true;
        }
      });

      if (hasChanged) {
        router.replace(`${pathname}?${params.toString()}`, { scroll: false });
      }
    },
    [pathname, router]
  );

  return {
    updateSearchParam,
    updateMultipleParams,
    searchParams,
    pathname,
  };
}
