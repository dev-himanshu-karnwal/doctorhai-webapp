import { Skeleton } from "@/components/ui/skeleton";

export function ApprovalCardSkeleton() {
  return (
    <div className="flex flex-col overflow-hidden rounded-3xl border border-t-4 border-[#F1F5F9] border-t-gray-100 bg-white shadow-sm">
      {/* Card body */}
      <div className="flex flex-1 flex-col items-center px-6 pt-8 pb-6 text-center">
        {/* Avatar */}
        <div className="relative mb-4 h-[90px] w-[90px]">
          <Skeleton className="h-full w-full rounded-full" />
        </div>

        {/* Name */}
        <Skeleton className="mb-2 h-7 w-3/4 rounded-lg" />

        {/* Location */}
        <Skeleton className="h-4 w-1/2 rounded-md" />
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />

      {/* Time in Queue */}
      <div className="flex flex-col items-center px-5 py-5">
        <Skeleton className="mb-3 h-3 w-20 rounded" />
        <Skeleton className="h-9 w-32 rounded-full" />
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5">
        <Skeleton className="h-[46px] w-full rounded-full" />
      </div>
    </div>
  );
}
