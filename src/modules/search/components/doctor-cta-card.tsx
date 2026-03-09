import { Button } from "@/components/ui";

export function DoctorCtaCard() {
  return (
    <div className="flex h-full flex-col items-center justify-center rounded-[24px] bg-gradient-to-br from-[#4FB3AA] to-[#3D8F87] p-5 text-center text-white shadow-[0_10px_40px_-10px_rgba(79,179,170,0.15)] sm:rounded-[32px] sm:p-[24px]">
      <div className="mb-3 flex h-[48px] w-[48px] items-center justify-center rounded-[20px] border border-white/20 bg-white/20 backdrop-blur-[4px] sm:mb-4 sm:h-[56px] sm:w-[56px] sm:rounded-[32px]">
        <svg
          width="28"
          height="28"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          className="h-5 w-5 text-white sm:h-7 sm:w-7"
        >
          <rect width="18" height="18" x="3" y="3" rx="2" />
          <path d="M12 8v8" />
          <path d="M8 12h8" />
        </svg>
      </div>

      <h3 className="mb-2 text-[18px] leading-[24px] font-bold tracking-[0px] sm:mb-3 sm:text-[20px] sm:leading-[28px]">
        Are you a Doctor?
      </h3>
      <p className="mb-8 text-[13px] leading-[18px] font-normal tracking-[0px] text-[#E6F6F4] sm:mb-[24px] sm:text-[14px] sm:leading-[20px]">
        Join DocStatus to manage your patient flow efficiently.
      </p>

      <div className="mt-auto w-full">
        <Button className="h-[44px] w-full rounded-[24px] bg-white py-[12px] text-[13px] leading-[20px] font-bold tracking-[0px] text-[#3D8F87] transition-all hover:bg-gray-50 active:scale-95 sm:h-[48px] sm:text-[14px]">
          Join Network
        </Button>
      </div>
    </div>
  );
}
