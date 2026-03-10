import { ActivityIcon, GlobeIcon } from "@/components/icons";

export function BottomSectionFeatures() {
  return (
    <article className="flex flex-col justify-center rounded-[32px] bg-[#2D3748] p-8 shadow-lg transition-all duration-300 sm:rounded-[40px] sm:p-10 sm:shadow-xl lg:rounded-[44px] lg:px-[48px] lg:py-[60px]">
      <h2 className="mb-6 text-center text-[26px] leading-[32px] font-bold tracking-tight text-white sm:mb-8 sm:text-left sm:text-[30px] sm:leading-[36px]">
        Designed for Zero Training
      </h2>
      <p className="mb-10 max-w-lg text-center text-[16px] leading-[26px] font-normal text-[#9CA3AF] sm:mb-14 sm:text-left sm:text-[18px] sm:leading-[29.25px]">
        Doctors don&apos;t have time to learn complex software. Our
        &quot;Switchboard&quot; interface takes less than 2 seconds to update.
      </p>

      <div className="flex flex-col gap-4 sm:gap-5">
        <div className="group flex cursor-pointer flex-col items-center gap-4 rounded-[24px] border border-white/5 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl sm:flex-row sm:items-center sm:gap-[16px] sm:rounded-[32px] sm:border-white/10 sm:p-[16px] sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#4FB3AA33] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <ActivityIcon size={20} className="text-white" />
          </div>
          <div>
            <h4 className="text-[16px] leading-[24px] font-bold text-white">
              Lightning Fast
            </h4>
            <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF]">
              One tap global updates.
            </p>
          </div>
        </div>
        <div className="group flex cursor-pointer flex-col items-center gap-4 rounded-[24px] border border-white/5 bg-white/5 p-5 text-center transition-all duration-300 hover:-translate-y-1 hover:bg-white/10 hover:shadow-xl sm:flex-row sm:items-center sm:gap-[16px] sm:rounded-[32px] sm:border-white/10 sm:p-[16px] sm:text-left">
          <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#4FB3AA33] shadow-lg transition-transform duration-300 group-hover:scale-110">
            <GlobeIcon size={20} className="text-white" />
          </div>
          <div>
            <h4 className="text-[16px] leading-[24px] font-bold text-white">
              Any Device
            </h4>
            <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF]">
              iPad, desktop, or mobile.
            </p>
          </div>
        </div>
      </div>
    </article>
  );
}
