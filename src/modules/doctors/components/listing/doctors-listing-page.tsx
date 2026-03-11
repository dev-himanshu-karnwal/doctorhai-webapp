"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { DoctorFilters } from "./doctor-filters";
import { DoctorsSearch } from "./doctors-search";
import { DoctorsGrid } from "./doctors-grid";
import { cn } from "@/lib/cn";
import { useDoctorsListing } from "../../hooks";

export function DoctorsListingPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  const {
    items,
    isLoading,
    isSearching,
    isFetchingMore,
    hasMore,
    loadMore,
    searchQuery,
    setSearchQuery,
    error,
  } = useDoctorsListing({ initialIsVerified: true });

  // If there's an error from the API, we won't crash the grid entirely
  // It handles it internally, but the layout remains the same
  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-6">
          <h1 className="text-[24px] font-bold text-[#1e293b] sm:text-[32px]">
            Find a Doctor
          </h1>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div
            className={cn(
              "fixed inset-0 z-50 flex flex-col bg-white/80 p-4 backdrop-blur-md transition-transform lg:static lg:z-auto lg:h-auto lg:w-[280px] lg:translate-x-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
              isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="mb-4 flex justify-end lg:hidden">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-0"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                ✕
              </Button>
            </div>
            <DoctorFilters />
          </div>

          <main className="flex-1">
            <DoctorsSearch
              onFilterToggle={() => setIsMobileFiltersOpen(true)}
              onSearch={setSearchQuery}
              value={searchQuery}
            />

            <DoctorsGrid
              items={items}
              isLoading={isLoading}
              isSearching={isSearching}
              isFetchingMore={isFetchingMore}
            />

            {error && (
              <div className="py-12 text-center text-red-500">
                Failed to load doctors. Please try again later.
              </div>
            )}

            {hasMore && !isLoading && !isSearching && !error && (
              <div className="mt-12 flex justify-center">
                <Button
                  variant="outline"
                  className="h-12 rounded-full border-[#4FB3AA] px-8 font-bold text-[#4FB3AA] hover:bg-[#F0FDF4] disabled:opacity-50"
                  onClick={loadMore}
                  disabled={isFetchingMore}
                >
                  {isFetchingMore ? "Loading..." : "Load More Doctors"}
                </Button>
              </div>
            )}
          </main>
        </div>
      </div>
    </div>
  );
}
