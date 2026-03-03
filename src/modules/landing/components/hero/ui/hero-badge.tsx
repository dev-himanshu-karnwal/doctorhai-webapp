export function HeroBadge() {
  return (
    <div className="flex w-fit items-center gap-[6px] rounded-full border border-teal-100 bg-white px-3 py-1.5 shadow-sm transition-transform hover:scale-105 sm:gap-[8px] sm:px-[12px] sm:py-[6px]">
      <span className="relative flex h-2 w-2 sm:h-[10px] sm:w-[10px]">
        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#40C1A6] opacity-75" />
        <span className="relative inline-flex h-2 w-2 rounded-full bg-[#40C1A6] sm:h-[10px] sm:w-[10px]" />
      </span>
      <span className="text-[11px] leading-[14px] font-bold tracking-[0.3px] text-[#3D8F87] sm:text-[12px] sm:leading-[16px]">
        Live Availability Tracking
      </span>
    </div>
  );
}
