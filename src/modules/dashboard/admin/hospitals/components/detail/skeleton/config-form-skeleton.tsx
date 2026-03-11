import { Skeleton } from "@/components/ui/skeleton";

export function ConfigFormSkeleton() {
  return (
    <div className="flex flex-col gap-6">
      {[1, 2, 3, 4].map((i) => (
        <div
          key={i}
          className="rounded-[16px] border border-[#f1f5f9] bg-white p-7"
        >
          <div className="mb-6 flex items-center gap-2.5">
            <Skeleton className="h-5 w-5 rounded-md" />
            <Skeleton className="h-5 w-48 rounded-md" />
          </div>
          <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24 rounded-md" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
            <div className="flex flex-col gap-2">
              <Skeleton className="h-3 w-24 rounded-md" />
              <Skeleton className="h-10 w-full rounded-lg" />
            </div>
          </div>
        </div>
      ))}
    </div>
  );
}
