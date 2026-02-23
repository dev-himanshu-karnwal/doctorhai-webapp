import Image from "next/image";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function HeroSection() {
  return (
    <section
      className="relative col-span-9 min-h-[420px] overflow-hidden rounded-3xl border border-teal-100/60 bg-[#e8f7f4] lg:col-span-6"
      style={{ fontFamily: "var(--font-manrope)" }}
    >
      <div className="pointer-events-none absolute inset-y-0 right-0 w-[55%]">
        <div className="absolute inset-y-0 left-0 z-10 w-2/5 bg-gradient-to-r from-[#e8f7f4] to-transparent" />
        <Image
          src="/images/hero-section-immage.png"
          alt="Hospital corridor"
          fill
          className="object-cover object-center opacity-90"
          priority
        />
      </div>

      <div className="relative z-20 flex max-w-[73%] flex-col gap-5 p-8 md:p-10">
        <div className="flex w-fit items-center gap-2 rounded-full border border-gray-200 bg-white px-[16px] py-[6px]">
          <span className="relative flex h-2.5 w-2.5">
            <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
            <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-green-500" />
          </span>
          <span className="text-[14px] leading-[20px] font-bold tracking-[0px] text-[#3D8F87]">
            Live Availability Tracking
          </span>
        </div>

        <h1 className="text-[60px] leading-[60px] font-extrabold tracking-[-1.5px] text-gray-900">
          Know If The Doctor Is Available{" "}
          <span className="text-[60px] leading-[100%] font-extrabold tracking-[0px] text-teal-500">
            Before You Visit
          </span>
        </h1>

        <p className="max-w-sm text-[16px] leading-[28px] font-normal tracking-[0px] text-[#718096]">
          Skip the waiting room blues. Check real-time status updates from the
          comfort of your home.
        </p>

        <div className="flex w-full max-w-sm items-center overflow-hidden rounded-full border border-gray-200 bg-white pr-1 shadow-sm">
          <div className="flex flex-1 items-center gap-2 px-4">
            <svg
              className="shrink-0 text-gray-400"
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <circle cx="11" cy="11" r="8" />
              <path d="m21 21-4.35-4.35" />
            </svg>
            <Input
              type="search"
              placeholder="Search for a hospital or clinic..."
              className="h-10 border-0 bg-transparent p-0 text-sm shadow-none placeholder:text-gray-400 focus-visible:ring-0 focus-visible:ring-offset-0"
            />
          </div>
          <button
            type="button"
            className="shrink-0 rounded-full bg-teal-500 px-5 py-2 text-sm font-semibold text-white transition-colors hover:bg-teal-600 active:bg-teal-700"
          >
            Find
          </button>
        </div>

        <div>
          <Button
            size="lg"
            className="gap-2 rounded-full bg-gray-900 px-7 font-semibold text-white hover:bg-gray-800"
          >
            Get Started
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Button>
        </div>
      </div>
    </section>
  );
}
