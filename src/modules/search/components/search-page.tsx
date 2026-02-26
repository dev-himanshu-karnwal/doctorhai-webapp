import { SearchFilters } from "./search-filters";
import { SearchResults } from "./search-results";

export function SearchPage() {
  return (
    <div className="min-h-screen bg-[#F6FAF9] pt-6 pb-16 sm:pt-10 sm:pb-20">
      <SearchFilters />
      <SearchResults />
    </div>
  );
}
