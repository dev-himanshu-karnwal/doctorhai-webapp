import { Skeleton } from "@/components/ui";

export function DoctorStatusCardSkeleton() {
  return (
    <div className="flex h-full flex-col justify-between gap-5 rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-gray-100">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <Skeleton className="h-[68px] w-[68px] flex-shrink-0 rounded-full" />
        <Skeleton className="h-7 w-[100px] rounded-full" />
      </div>

      {/* Middle Section */}
      <div className="mt-2 flex flex-col items-start gap-2">
        <Skeleton className="h-6 w-[180px] rounded-md" />
        <Skeleton className="h-4 w-[140px] rounded-md" />
        <Skeleton className="mt-5 h-[42px] w-full rounded-2xl" />
      </div>

      {/* Bottom Section */}
      <div className="mt-auto flex flex-col gap-3 pt-2">
        <Skeleton className="h-[44px] w-full rounded-2xl" />
        <Skeleton className="h-[44px] w-full rounded-full" />
      </div>
    </div>
  );
}

export function DoctorStatusCardSkeletonList({
  count = 4,
}: {
  count?: number;
}) {
  return (
    <>
      {Array.from({ length: count }).map((_, i) => (
        <DoctorStatusCardSkeleton key={i} />
      ))}
    </>
  );
}
