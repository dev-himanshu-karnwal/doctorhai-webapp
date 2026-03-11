import { Skeleton } from "@/components/ui/skeleton";

export function TableSkeleton() {
  return (
    <div className="rounded-[20px] border border-[#f1f5f9] bg-white p-7">
      <div className="mb-6 flex flex-col gap-4 sm:flex-row sm:items-center sm:justify-between">
        <div className="flex items-center gap-2.5">
          <Skeleton className="h-6 w-6 rounded-md" />
          <Skeleton className="h-6 w-48 rounded-md" />
        </div>
        <Skeleton className="h-10 w-64 rounded-lg" />
      </div>
      <div className="flex flex-col gap-1 overflow-hidden rounded-[16px] border border-[#f1f5f9]">
        <div className="grid grid-cols-[1fr_100px_80px] gap-4 border-b border-[#f1f5f9] bg-white px-6 py-4">
          <Skeleton className="h-4 w-32 rounded-md" />
          <Skeleton className="h-4 w-12 rounded-md" />
          <Skeleton className="h-4 w-12 rounded-md" />
        </div>
        {[1, 2, 3, 4, 5].map((i) => (
          <div
            key={i}
            className="grid grid-cols-[1fr_100px_80px] items-center gap-4 border-b border-[#f1f5f9] px-6 py-4 last:border-0"
          >
            <div className="flex items-center gap-3.5">
              <Skeleton className="h-[42px] w-[42px] rounded-full" />
              <div className="flex flex-col gap-1.5">
                <Skeleton className="h-4 w-32 rounded-md" />
                <Skeleton className="h-3 w-24 rounded-md" />
              </div>
            </div>
            <Skeleton className="h-6 w-20 rounded-full" />
            <div className="flex gap-2">
              <Skeleton className="h-8 w-8 rounded-md" />
              <Skeleton className="h-8 w-8 rounded-md" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
