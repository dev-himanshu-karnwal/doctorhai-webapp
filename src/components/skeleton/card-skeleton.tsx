import { Skeleton } from "@/components/ui";

export function CardSkeleton() {
  return (
    <div className="flex w-full flex-col rounded-[20px] border border-[#F1F5F9] bg-white p-4 shadow-sm sm:rounded-[24px] sm:p-5">
      <div className="mb-4 flex items-start gap-3">
        {/* Logo/Icon Circle */}
        <Skeleton className="h-[48px] w-[48px] flex-shrink-0 rounded-full" />

        <div className="min-w-0 flex-1 space-y-2 pt-1">
          {/* Hospital Name */}
          <Skeleton className="h-5 w-3/4 rounded-md" />
          {/* Distance & Type */}
          <Skeleton className="h-3 w-1/2 rounded-md" />
        </div>
      </div>

      <div className="mb-5 space-y-2">
        {/* Specialties Title */}
        <Skeleton className="h-3 w-24 rounded-md" />
        <div className="flex flex-wrap gap-1.5">
          {/* Specialty Tags */}
          <Skeleton className="h-6 w-16 rounded-full" />
          <Skeleton className="h-6 w-20 rounded-full" />
          <Skeleton className="h-6 w-14 rounded-full" />
        </div>
      </div>

      <div className="mt-auto">
        {/* View Details Button */}
        <Skeleton className="h-[44px] w-full rounded-full" />
      </div>
    </div>
  );
}

export function CardSkeletonList({ count = 3 }: { count?: number }) {
  return (
    <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
      {Array.from({ length: count }).map((_, i) => (
        <CardSkeleton key={i} />
      ))}
    </div>
  );
}
