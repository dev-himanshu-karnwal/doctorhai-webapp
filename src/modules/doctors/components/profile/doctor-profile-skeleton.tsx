export function DoctorProfileSkeleton() {
  return (
    <div className="min-h-screen animate-pulse bg-[#F4F7F5] p-4 font-sans sm:p-6 lg:p-10">
      <div className="mx-auto max-w-[1100px] space-y-4 sm:space-y-6">
        {/* Top Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
          {/* Profile Card Skeleton */}
          <div className="w-full shrink-0 rounded-[20px] bg-white p-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-8 lg:w-[320px]">
            <div className="mx-auto mb-5 h-[120px] w-[120px] rounded-full bg-slate-200 sm:mb-6 sm:h-[140px] sm:w-[140px]" />
            <div className="mx-auto h-6 w-3/4 rounded-md bg-slate-200 sm:h-8" />
            <div className="mx-auto mt-2 h-4 w-1/2 rounded-md bg-slate-200" />
          </div>

          {/* Availability Card Skeleton */}
          <div className="relative flex flex-1 flex-col items-center justify-center rounded-[24px] bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-10">
            <div className="mb-4 h-[64px] w-[64px] rounded-full bg-slate-200 sm:mb-6 sm:h-[80px] sm:w-[80px]" />
            <div className="h-10 w-2/3 rounded-md bg-slate-200 sm:h-14" />
            <div className="mt-4 h-4 w-1/2 rounded-md bg-slate-200" />
            <div className="absolute right-4 bottom-4 h-6 w-24 rounded-full bg-slate-100 sm:right-6 sm:bottom-6" />
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
          {/* Hospital Info Skeleton */}
          <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
              <div className="h-9 w-9 rounded-full bg-slate-200" />
              <div className="h-6 w-32 rounded-md bg-slate-200" />
            </div>
            <div className="mb-5 flex-1 rounded-[16px] bg-[#F6F7F8] p-[16px] sm:mb-8 sm:rounded-[24px]">
              <div className="mb-4 h-3 w-40 rounded-md bg-slate-200" />
              <div className="space-y-3">
                {[1, 2, 3, 4, 5].map((i) => (
                  <div key={i} className="flex gap-4">
                    <div className="h-4 w-20 rounded-md bg-slate-200" />
                    <div className="h-4 flex-1 rounded-md bg-slate-200" />
                  </div>
                ))}
              </div>
            </div>
            <div className="h-[46px] w-full rounded-[16px] bg-slate-200" />
          </div>

          {/* Professional Info Skeleton */}
          <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
              <div className="h-9 w-9 rounded-full bg-slate-200" />
              <div className="h-6 w-40 rounded-md bg-slate-200" />
            </div>
            <div className="space-y-4">
              <div className="h-24 w-full rounded-[20px] bg-[#F6F7F8] sm:h-28 sm:rounded-[24px]" />
              <div className="h-24 w-full rounded-[20px] bg-[#F6F7F8] sm:h-28 sm:rounded-[24px]" />
            </div>
          </div>

          {/* Contact Card Skeleton */}
          <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
              <div className="h-9 w-9 rounded-full bg-slate-200" />
              <div className="h-6 w-24 rounded-md bg-slate-200" />
            </div>
            <div className="flex h-auto min-h-[160px] flex-1 flex-col items-center justify-center py-6 sm:min-h-[178px]">
              <div className="mb-2 h-4 w-40 rounded-md bg-slate-200" />
              <div className="h-10 w-3/4 rounded-md bg-slate-200 sm:h-12" />
              <div className="mt-2 h-4 w-1/2 rounded-md bg-slate-200" />
            </div>
            <div className="mt-8 h-[48px] w-full rounded-[24px] bg-slate-200 sm:mt-10 sm:h-[56px]" />
          </div>
        </div>
      </div>
    </div>
  );
}
