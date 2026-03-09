import { Doctor } from "../../types";
import { DoctorStatusCard } from "../cards";
import { DoctorStatusCardSkeleton } from "../cards";

interface DoctorsGridProps {
  items: Doctor[];
  isLoading: boolean;
  isSearching: boolean;
  isFetchingMore: boolean;
}

export function DoctorsGrid({
  items,
  isLoading,
  isSearching,
  isFetchingMore,
}: DoctorsGridProps) {
  if (isLoading || isSearching) {
    return (
      <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
        {Array.from({ length: 6 }).map((_, i) => (
          <div key={i} className="h-full">
            <DoctorStatusCardSkeleton />
          </div>
        ))}
      </div>
    );
  }

  if (items.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-20 text-gray-500">
        <span className="mb-4 text-4xl">🔍</span>
        <h3 className="text-xl font-semibold text-gray-800">
          No doctors found
        </h3>
        <p className="mt-2">Try adjusting your search or filters.</p>
      </div>
    );
  }

  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div key={item.id} className="h-full">
          <DoctorStatusCard doctor={item} />
        </div>
      ))}

      {isFetchingMore &&
        Array.from({ length: 3 }).map((_, i) => (
          <div key={`loading-${i}`} className="h-full">
            <DoctorStatusCardSkeleton />
          </div>
        ))}
    </div>
  );
}
