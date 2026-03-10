export function HospitalCardSkeleton() {
  return (
    <div
      className="flex animate-pulse flex-col bg-white"
      style={{
        borderRadius: 20,
        boxShadow: "0 1px 8px 0 rgba(0,0,0,0.07)",
        border: "1px solid #F1F2F4",
      }}
    >
      <div className="flex flex-col items-center px-5 pt-4 pb-3">
        {/* Status Badge Skeleton */}
        <div className="mb-3 flex w-full justify-end">
          <div className="h-5 w-20 rounded-full bg-gray-100" />
        </div>

        {/* Image Skeleton */}
        <div
          className="mb-4 bg-gray-50"
          style={{
            width: 80,
            height: 80,
            borderRadius: 18,
            border: "1px solid #F1F5F9",
          }}
        />

        {/* Name Skeleton */}
        <div className="flex w-full flex-col items-center gap-2">
          <div className="h-6 w-3/4 rounded bg-gray-100" />
        </div>
      </div>

      {/* Actions Skeleton */}
      <div className="mt-1 flex flex-col gap-2 px-4 pb-4">
        <div className="grid grid-cols-2 gap-2">
          <div className="h-10 rounded-xl bg-gray-100" />
          <div className="h-10 rounded-xl bg-gray-100" />
        </div>
        <div className="mt-1 h-10 w-full rounded-xl bg-gray-50" />
      </div>
    </div>
  );
}
