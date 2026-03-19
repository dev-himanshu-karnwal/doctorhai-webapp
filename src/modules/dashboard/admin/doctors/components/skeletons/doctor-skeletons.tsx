import { Skeleton } from "@/components/ui/skeleton";

export const DoctorCardSkeleton = () => (
  <div
    className="flex flex-col bg-white"
    style={{
      borderRadius: 18,
      border: "1px solid #F1F2F4",
      boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
    }}
  >
    <div className="flex flex-col items-center px-4 pt-4 pb-3">
      <div className="mb-2 flex w-full justify-end">
        <Skeleton className="h-[9px] w-[9px] rounded-full" />
      </div>
      <Skeleton className="mb-3 h-[100px] w-[100px] rounded-full" />
      <Skeleton className="mb-2 h-4 w-3/4" />
      <Skeleton className="mb-2 h-3 w-1/2" />
      <Skeleton className="h-3 w-1/3" />
    </div>
    <div style={{ borderTop: "1px solid #F3F4F6" }} />
    <div className="grid grid-cols-3 divide-x divide-gray-100">
      <Skeleton className="h-10 rounded-none bg-gray-50/50" />
      <Skeleton className="h-10 rounded-none bg-gray-50/50" />
      <Skeleton className="h-10 rounded-none bg-gray-50/50" />
    </div>
  </div>
);

export const StatsSkeleton = () => (
  <div className="mb-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
    <Skeleton className="h-24 rounded-2xl border border-gray-100 bg-white" />
  </div>
);
