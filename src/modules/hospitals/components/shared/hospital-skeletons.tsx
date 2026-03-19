import { Skeleton } from "@/components/ui/skeleton";

export function HospitalDetailSkeleton() {
  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Skeleton className="mb-6 h-4 w-32" />
        <div className="mb-8 space-y-4">
          <Skeleton className="h-10 w-2/3" />
          <Skeleton className="h-6 w-1/2" />
        </div>
        <div className="flex flex-col gap-8 lg:flex-row">
          <Skeleton className="h-[500px] w-full rounded-[24px] lg:w-[300px]" />
          <div className="mt-6 flex-1 space-y-4 lg:mt-0">
            <Skeleton className="mb-6 h-10 w-48" />
            <DoctorListItemSkeleton />
            <DoctorListItemSkeleton />
            <DoctorListItemSkeleton />
          </div>
        </div>
      </div>
    </div>
  );
}

export function DoctorListItemSkeleton() {
  return (
    <div className="flex flex-col gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-sm sm:flex-row sm:items-center">
      <Skeleton className="h-14 w-14 shrink-0 rounded-full" />
      <div className="flex-1 space-y-2">
        <Skeleton className="h-5 w-48" />
        <Skeleton className="h-4 w-64" />
        <Skeleton className="mt-2 h-3 w-32" />
      </div>
      <Skeleton className="h-[30px] w-[120px] rounded-full" />
    </div>
  );
}
