export function SimpleSolutionCard() {
  return (
    <article className="group flex h-auto min-h-[250px] w-full flex-col justify-between rounded-[24px] bg-[#FFF4BD] p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:col-span-2 sm:min-h-[280px] sm:rounded-[32px] sm:p-8 lg:col-span-1 lg:min-h-[316px] lg:rounded-[40px] lg:p-10">
      <div className="flex flex-col">
        <div className="mb-3 sm:mb-4">
          <span className="inline-block rounded-full bg-white/80 px-3 py-1 text-[11px] leading-[14px] font-bold tracking-[0.3px] text-[#CA8A04] uppercase transition-transform duration-300 group-hover:scale-105 sm:px-[12px] sm:py-[4px] sm:text-[12px] sm:leading-[16px]">
            Simple Solution
          </span>
        </div>
        <h3 className="mb-2 text-[20px] leading-[28px] font-bold text-[#2D3748] transition-colors group-hover:text-[#CA8A04] sm:mb-4 sm:text-[24px] sm:leading-[32px]">
          Green means Go.
        </h3>
        <p className="mb-6 pr-0 pb-0 text-[15px] leading-[22px] font-normal text-[#2D3748]/80 sm:mb-0 sm:pr-[13.44px] sm:pb-[24px] sm:text-[16px] sm:leading-[24px]">
          A public status page for every department. Patients check live status
          before leaving home.
        </p>
      </div>

      <div className="flex flex-col gap-2 transition-transform duration-300 group-hover:translate-x-1 sm:gap-3">
        <div className="flex -space-x-4">
          <div className="h-10 w-10 rounded-full border-2 border-[#FFFFFF] bg-[#CBEDEA]" />
          <div className="h-10 w-10 rounded-full border-2 border-[#FFFFFF] bg-[#A8D8EA]" />
          <div className="h-10 w-10 rounded-full border-2 border-[#FFFFFF] bg-[#E0BBE4]" />
          <div className="flex h-10 w-10 items-center justify-center rounded-full border-2 border-[#FFFFFF] bg-white text-[12px] leading-[16px] font-bold text-[#718096]">
            +5k
          </div>
        </div>
        <span className="text-[14px] leading-[20px] font-semibold text-[#2D3748]/60">
          Happy patients daily
        </span>
      </div>
    </article>
  );
}
