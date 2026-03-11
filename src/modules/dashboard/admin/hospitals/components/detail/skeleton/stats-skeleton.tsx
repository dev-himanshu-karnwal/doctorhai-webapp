import { Skeleton } from "@/components/ui/skeleton";

export function StatsSkeleton() {
  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="flex flex-col justify-between rounded-[16px] border border-[#f1f5f9] bg-white p-5"
        >
          <div className="mb-4 flex items-center justify-between">
            <Skeleton className="h-8 w-8 rounded-lg" />
            <Skeleton className="h-5 w-16 rounded-[6px]" />
          </div>
          <div className="flex flex-col gap-2">
            <Skeleton className="h-3 w-24 rounded-md" />
            <Skeleton className="h-8 w-12 rounded-md" />
          </div>
        </div>
      ))}
    </div>
  );
}
