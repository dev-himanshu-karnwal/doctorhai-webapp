import Image from "next/image";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section className="relative col-span-12 flex min-h-[500px] w-full flex-col overflow-hidden rounded-[24px] bg-[#E6F6F4] shadow-sm transition-all duration-300 sm:min-h-[520px] sm:rounded-[40px] lg:col-span-6">
      {/* Visual Background Element */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden opacity-20 sm:opacity-30 lg:right-0 lg:left-auto lg:w-[58%] lg:opacity-100">
        <div className="absolute inset-y-0 left-0 z-10 hidden w-1/3 bg-gradient-to-r from-[#E6F6F4] to-transparent lg:block" />
        <div className="absolute inset-0 bg-white/10 backdrop-blur-[1px]" />
        <Image
          src="/images/hero-section-immage.png"
          alt="Modern Hospital Corridor"
          fill
          className="object-cover object-center opacity-90 grayscale-[20%]"
          priority
        />
        <div className="absolute inset-y-0 right-0 z-10 hidden w-20 bg-gradient-to-l from-[#E6F6F4] to-transparent lg:block" />
      </div>

      <div className="relative z-20 flex w-full flex-col gap-6 p-6 sm:gap-8 sm:p-10 lg:max-w-[85%] lg:p-[64px] xl:max-w-[75%]">
        {/* Live Badge */}
        <div className="flex w-fit items-center gap-[6px] rounded-full border border-teal-100 bg-white px-3 py-1.5 shadow-sm transition-transform hover:scale-105 sm:gap-[8px] sm:px-[12px] sm:py-[6px]">
          <span className="relative flex h-2 w-2 sm:h-[10px] sm:w-[10px]">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#40C1A6] opacity-75" />
            <span className="relative inline-flex h-2 w-2 rounded-full bg-[#40C1A6] sm:h-[10px] sm:w-[10px]" />
          </span>
          <span className="text-[11px] leading-[14px] font-bold tracking-[0.3px] text-[#3D8F87] sm:text-[12px] sm:leading-[16px]">
            Live Availability Tracking
          </span>
        </div>

        {/* Main Heading */}
        <div className="flex flex-col">
          <h1 className="text-[36px] leading-[1.1] font-bold tracking-tight text-[#2D3748] sm:text-[44px] sm:leading-[1.05] sm:tracking-[-1.5px] md:text-[52px] lg:text-[62px]">
            Know If The <br className="hidden sm:block" /> Doctor Is Available{" "}
            <br className="hidden sm:block" />
            <span className="text-[#4FB3AA]">Before You Visit</span>
          </h1>
        </div>

        {/* Subtitle */}
        <p className="max-w-[420px] text-[15px] leading-[22px] font-medium text-[#718096] sm:text-[16px] sm:leading-[24px] sm:font-normal">
          Skip the waiting room blues. Check real-time status updates from the
          comfort of your home.
        </p>

        {/* Search Bar */}
        <div className="flex w-full max-w-[500px] items-center rounded-full bg-white p-1.5 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.05)] ring-1 ring-black/[0.03] sm:p-[6px]">
          <div className="flex flex-1 items-center gap-2 px-2 sm:gap-2.5 sm:px-3">
            <svg
              width="18"
              height="18"
              viewBox="0 0 18 18"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
            >
              <path
                d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                fill="#4FB3AA"
              />
            </svg>

            <Input
              type="search"
              placeholder="Search for a hospital or clinic..."
              className="h-9 border-0 bg-transparent p-0 text-[13px] font-medium text-[#2D3748] shadow-none placeholder:text-[#A0AEC0] focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-10 sm:text-[14px]"
            />
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full bg-[#4FB3AA] px-[28px] py-[10px] text-[14px] font-bold text-white transition-all hover:bg-[#3d8f87] hover:shadow-lg active:scale-95"
          >
            Find
          </button>
        </div>

        {/* Action Buttons */}
        <div className="flex flex-col flex-wrap items-stretch gap-3 pt-2 sm:flex-row sm:items-center sm:gap-4">
          <button className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-[#2D3748] px-[24px] py-[12px] text-[15px] font-bold text-white shadow-lg transition-all hover:-translate-y-1 hover:bg-[#1e293b] active:scale-95 sm:w-auto sm:px-[32px] sm:py-[14px] sm:text-[16px]">
            Get Started
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="transition-transform group-hover:translate-x-1"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </button>

          <button className="group flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-[24px] py-[12px] text-[15px] font-bold text-[#2D3748] shadow-sm ring-1 ring-black/[0.05] transition-all hover:-translate-y-1 hover:bg-gray-50 hover:shadow-md active:scale-95 sm:w-auto sm:px-[32px] sm:py-[14px] sm:text-[16px]">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 10.875L10.875 7.5L5.625 4.125V10.875ZM7.5 15C6.4625 15 5.4875 14.8031 4.575 14.4094C3.6625 14.0156 2.86875 13.4812 2.19375 12.8062C1.51875 12.1312 0.984375 11.3375 0.590625 10.425C0.196875 9.5125 0 8.5375 0 7.5C0 6.4625 0.196875 5.4875 0.590625 4.575C0.984375 3.6625 1.51875 2.86875 2.19375 2.19375C2.86875 1.51875 3.6625 0.984375 4.575 0.590625C5.4875 0.196875 6.4625 0 7.5 0C8.5375 0 9.5125 0.196875 10.425 0.590625C11.3375 0.984375 12.1312 1.51875 12.8062 2.19375C13.4812 2.86875 14.0156 3.6625 14.4094 4.575C14.8031 5.4875 15 6.4625 15 7.5C15 8.5375 14.8031 9.5125 14.4094 10.425C14.0156 11.3375 13.4812 12.1312 12.8062 12.8062C12.1312 13.4812 11.3375 14.0156 10.425 14.4094C9.5125 14.8031 8.5375 15 7.5 15ZM7.5 13.5C9.175 13.5 10.5938 12.9188 11.7563 11.7563C12.9188 10.5938 13.5 9.175 13.5 7.5C13.5 5.825 12.9188 4.40625 11.7563 3.24375C10.5938 2.08125 9.175 1.5 7.5 1.5C5.825 1.5 4.40625 2.08125 3.24375 3.24375C2.08125 4.40625 1.5 5.825 1.5 7.5C1.5 9.175 2.08125 10.5938 3.24375 11.7563C4.40625 12.9188 5.825 13.5 7.5 13.5Z"
                fill="#4FB3AA"
              />
            </svg>
            View Demo
          </button>
        </div>
      </div>
    </section>
  );
}
