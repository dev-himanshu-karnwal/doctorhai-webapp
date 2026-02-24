import type { FeatureCard as FeatureCardType } from "../types/landing.types";

type FeatureCardsProps = {
  cards: FeatureCardType[];
};

export function FeatureCards({ cards }: FeatureCardsProps) {
  return (
    <section className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
      {/* Card 1: Tired of Waiting? */}
      <article className="h-[316px] w-full max-w-[389.33px] rounded-[40px] border border-[#F1F5F9] bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
        <div className="mb-8 flex h-[45px] w-[56px] items-center justify-center rounded-[32px] bg-[#FEF2F2] pt-[10px] pb-[10px]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FF5252"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
        </div>
        <h3 className="mb-4 text-[20px] leading-[28px] font-bold text-[#2D3748]">
          Tired of Waiting?
        </h3>
        <p className="text-[16px] leading-[26px] font-normal text-[#718096]">
          70% of patients wait more than 45 minutes past their appointment time.
          Let&apos;s fix that.
        </p>
      </article>

      {/* Card 2: Crowded Rooms */}
      <article className="h-[316px] w-full max-w-[389.33px] rounded-[40px] border border-[#F1F5F9] bg-white p-10 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
        <div className="mb-8 flex h-14 w-14 items-center justify-center rounded-full bg-[#FFF8E1]">
          <svg
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#FFB300"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
            <circle cx="9" cy="7" r="4" />
            <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
            <path d="M16 3.13a4 4 0 0 1 0 7.75" />
          </svg>
        </div>
        <h3 className="mb-4 text-[20px] leading-[28px] font-bold text-[#2D3748]">
          Crowded Rooms
        </h3>
        <p className="text-[16px] leading-[26px] font-normal text-[#718096]">
          Nobody likes a packed lobby. Reduce congestion and keep everyone safer
          and happier.
        </p>
      </article>

      {/* Card 3: Highlighted (Green means Go) */}
      <article className="h-[316px] w-full max-w-[389.34px] rounded-[40px] bg-[#FFF4BD] p-[32px] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
        <div className="mb-4">
          <span className="inline-block rounded-full bg-white/80 px-[12px] py-[4px] text-[12px] leading-[16px] font-bold tracking-[0.3px] text-[#CA8A04] uppercase">
            Simple Solution
          </span>
        </div>
        <h3 className="mb-4 text-[24px] leading-[32px] font-bold text-[#2D3748]">
          Green means Go.
        </h3>
        <p className="pr-[13.44px] pb-[24px] text-[16px] leading-[24px] font-normal text-[#2D3748]/80">
          A public status page for every department. Patients check live status
          before leaving home.
        </p>

        <div className="flex flex-col gap-3">
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
    </section>
  );
}
