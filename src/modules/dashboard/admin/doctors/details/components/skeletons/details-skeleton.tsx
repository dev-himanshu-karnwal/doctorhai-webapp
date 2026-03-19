import { Skeleton } from "@/components/ui/skeleton";

export const DetailsSkeleton = () => {
  return (
    <div className="min-h-screen bg-[#f4f7f9] pt-6 pb-12 font-sans">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* TOP CARD SKELETON */}
        <div
          className="mb-6 bg-white p-6 sm:p-8"
          style={{
            borderRadius: 18,
            border: "1px solid #f1f5f9",
          }}
        >
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center">
            <Skeleton className="h-[120px] w-[120px] rounded-2xl" />
            <div className="flex flex-1 flex-col gap-3">
              <Skeleton className="h-8 w-[250px]" />
              <Skeleton className="h-5 w-[180px]" />
            </div>
          </div>
        </div>

        {/* MAIN CONTENT GRID SKELETON */}
        <div className="mb-6 flex flex-col gap-6 lg:flex-row">
          {/* COLUMN 1 */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="rounded-[18px] border border-[#f1f5f9] bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-6 w-32" />
              </div>
              <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
                {[1, 2, 3, 4].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-20" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                  </div>
                ))}
              </div>
              <div className="mt-5 flex flex-col gap-2">
                <Skeleton className="h-4 w-32" />
                <Skeleton className="h-24 w-full rounded-lg" />
              </div>
            </div>
            <div className="rounded-[18px] border border-[#f1f5f9] bg-white p-6">
              <Skeleton className="h-8 w-full rounded-lg" />
            </div>
          </div>

          {/* COLUMN 2 */}
          <div className="flex w-full flex-col gap-6 lg:w-1/2">
            <div className="rounded-[18px] border border-[#f1f5f9] bg-white p-6">
              <div className="mb-6 flex items-center gap-3">
                <Skeleton className="h-8 w-8 rounded-lg" />
                <Skeleton className="h-6 w-40" />
              </div>
              <div className="flex flex-col gap-5">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex flex-col gap-2">
                    <Skeleton className="h-4 w-24" />
                    <Skeleton className="h-10 w-full rounded-lg" />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ACTION BAR SKELETON */}
        <div className="flex items-center justify-between rounded-[18px] border border-[#f1f5f9] bg-white p-5">
          <Skeleton className="h-6 w-64" />
          <div className="flex gap-4">
            <Skeleton className="h-10 w-32 rounded-lg" />
            <Skeleton className="h-10 w-32 rounded-lg" />
          </div>
        </div>
      </div>
    </div>
  );
};
