import { ApprovalCardSkeleton } from "./approval-card-skeleton";
import { Skeleton } from "@/components/ui/skeleton";

export function ApprovalsQueueSkeleton() {
  return (
    <div className="rounded-[32px] border border-[#F1F5F9] bg-white p-4 shadow-sm sm:rounded-[48px] sm:p-8">
      {/* Header Skeleton */}
      <div className="mb-8 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="space-y-2">
          <Skeleton className="h-8 w-64" />
          <Skeleton className="h-4 w-48" />
        </div>
        <div className="flex flex-wrap gap-3">
          <Skeleton className="h-[46px] w-full rounded-full sm:w-[260px]" />
          <Skeleton className="h-[46px] w-[160px] rounded-full" />
          <Skeleton className="h-[46px] w-[200px] rounded-full" />
        </div>
      </div>

      {/* Grid Skeleton */}
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {[1, 2, 3, 4, 5, 6, 7, 8].map((i) => (
          <ApprovalCardSkeleton key={i} />
        ))}
      </div>
    </div>
  );
}
