"use client";
import { useEffect, useState } from "react";
import { SearchFilters } from "./search-filters";
import { SearchResults } from "./search-results";
import { SearchSideFilters } from "./search-side-filters";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui";
import { useGlobalSearch } from "../hooks";
import { GlobalFilterQuery } from "../types/global-search.types";
import { useDebounce } from "@/hooks";
import { useRouter } from "next/navigation";

export function SearchPage({ initialSearch = "" }: { initialSearch?: string }) {
  const router = useRouter();

  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);
  const [searchInput, setSearchInput] = useState(initialSearch);
  const debouncedSearchValue = useDebounce(searchInput, 500);

  const [filters, setFilters] = useState<GlobalFilterQuery>({
    limit: 12,
    sortBy: "fullName",
    sortOrder: "asc",
    search: debouncedSearchValue,
  });

  // Sync initialSearch from props to internal state
  const [prevInitialSearch, setPrevInitialSearch] = useState(initialSearch);
  if (initialSearch !== prevInitialSearch) {
    setPrevInitialSearch(initialSearch);
    setSearchInput(initialSearch);
    setFilters((prev) => ({ ...prev, search: initialSearch }));
  }

  // Update filters when debounced value changes (Live preview)
  useEffect(() => {
    setFilters((prev) => ({ ...prev, search: debouncedSearchValue.trim() }));
  }, [debouncedSearchValue]);

  const { data, isLoading, fetchNextPage, hasNextPage, isFetchingNextPage } =
    useGlobalSearch(filters);

  const handleApplyFilters = (newFilters: GlobalFilterQuery) => {
    setFilters((prev) => ({
      ...prev,
      ...newFilters,
      search: searchInput,
    }));
    setIsMobileFiltersOpen(false);
  };

  const handleSortChange = (value: string) => {
    const [sortBy, sortOrder] = value.split("_");
    setFilters((prev) => ({
      ...prev,
      sortBy,
      sortOrder: sortOrder as "asc" | "desc",
    }));
  };

  const handleResetFilters = () => {
    setSearchInput("");
    setFilters({
      limit: 10,
      sortBy: "fullName",
      sortOrder: "asc",
    });
  };

  const handleLoadMore = () => {
    fetchNextPage();
  };

  return (
    <div className="min-h-screen bg-[#F6FAF9] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Header Section */}
        <header className="mb-6 flex flex-col items-center justify-between gap-4 md:flex-row">
          <h1 className="text-[24px] font-bold text-[#1e293b] sm:text-[32px]">
            Global Search
          </h1>
          <div className="w-full max-w-[600px] flex-1 md:w-auto">
            <SearchFilters
              onFilterToggle={() => setIsMobileFiltersOpen(true)}
              searchQuery={searchInput}
              onSearchChange={setSearchInput}
              onSearchSubmit={() => {
                const trimmed = searchInput.trim();
                router.push(`/search?search=${encodeURIComponent(trimmed)}`);
              }}
            />
          </div>
        </header>

        <div className="flex flex-col gap-8 xl:flex-row">
          {/* Sidebar */}
          <div
            className={cn(
              "fixed inset-0 z-50 flex flex-col overflow-y-auto bg-white/80 p-4 backdrop-blur-md transition-transform xl:static xl:z-auto xl:h-auto xl:w-[280px] xl:translate-x-0 xl:bg-transparent xl:p-0 xl:backdrop-blur-none",
              isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="mb-4 flex justify-end xl:hidden">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-0"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                ✕
              </Button>
            </div>
            <SearchSideFilters
              filters={filters}
              onApply={handleApplyFilters}
              onReset={handleResetFilters}
            />
          </div>

          {/* Main Results Area */}
          <main className="flex-1">
            <SearchResults
              pages={data?.pages}
              isLoading={isLoading}
              sortBy={filters.sortBy}
              sortOrder={filters.sortOrder}
              onSortChange={handleSortChange}
              onLoadMore={handleLoadMore}
              hasMore={hasNextPage}
              isFetchingNextPage={isFetchingNextPage}
            />
          </main>
        </div>
      </div>
    </div>
  );
}
