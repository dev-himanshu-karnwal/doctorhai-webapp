import { Skeleton } from "@/components/ui";

export function LiveDoctorCardSkeleton() {
  return (
    <article className="flex min-w-[325.34px] flex-shrink-0 flex-col gap-5 rounded-[32px] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)]">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <Skeleton className="h-14 w-14 rounded-full" />
          <div className="space-y-2">
            <Skeleton className="h-5 w-32 rounded-md" />
            <Skeleton className="h-3 w-24 rounded-md" />
          </div>
        </div>
        <Skeleton className="h-6 w-6 rounded-full" />
      </div>

      <div className="flex items-center gap-2 px-1">
        <Skeleton className="h-4 w-4 rounded-full" />
        <Skeleton className="h-4 w-40 rounded-md" />
      </div>

      {/* Status Bar */}
      <Skeleton className="h-[44px] w-full rounded-full" />
    </article>
  );
}

export function LiveDoctorCardSkeletonList({ count = 4 }: { count?: number }) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <LiveDoctorCardSkeleton key={i} />
      ))}
    </>
  );
}
