import { ClockIcon } from "@/components/icons";

export function WaitingCard() {
  return (
    <article className="group flex h-auto min-h-[250px] w-full flex-col rounded-[24px] border border-[#F1F5F9] bg-white p-6 shadow-[0_4px_20px_-10px_rgba(0,0,0,0.05)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:min-h-[280px] sm:rounded-[32px] sm:p-8 lg:min-h-[316px] lg:rounded-[40px] lg:p-10">
      <div className="mb-6 flex h-[46px] w-[46px] items-center justify-center rounded-[16px] bg-[#FEF2F2] transition-transform duration-300 group-hover:scale-110 sm:mb-8 sm:h-[45px] sm:w-[56px] sm:rounded-[32px]">
        <ClockIcon size={24} className="text-[#FF5252]" strokeWidth={2.5} />
      </div>
      <h3 className="mb-3 text-[18px] leading-[24px] font-bold text-[#2D3748] transition-colors group-hover:text-[#FF5252] sm:mb-4 sm:text-[20px] sm:leading-[28px]">
        Tired of Waiting?
      </h3>
      <p className="text-[15px] leading-[24px] font-normal text-[#718096] sm:text-[16px] sm:leading-[26px]">
        70% of patients wait more than 45 minutes past their appointment time.
        Let&apos;s fix that.
      </p>
    </article>
  );
}
