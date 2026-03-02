import Image from "next/image";
import { HeroSearchBar } from "./hero-search-bar";
import { HeroActionButtons } from "./hero-action-buttons";
import { HeroBadge } from "./hero-badge";

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
        <HeroBadge />

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

        <HeroSearchBar />
        <HeroActionButtons />
      </div>
    </section>
  );
}
