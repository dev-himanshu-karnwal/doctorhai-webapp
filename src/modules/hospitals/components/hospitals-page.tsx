"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MOCK_HOSPITALS } from "../data/mock-hospitals";
import { HospitalCard } from "./hospital-card";
import { HospitalFilters } from "./hospital-filters";
import { cn } from "@/lib/cn";

export function HospitalsPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1200px]">
        {/* Page Header */}
        <div className="mb-6">
          <h1 className="text-[24px] leading-[30px] font-bold tracking-[0px] text-[#2D3748] sm:text-[28px] sm:leading-[36px] md:text-[30px]">
            Find a Hospital
          </h1>
          <p className="mt-1 text-[14px] leading-[20px] font-normal tracking-[0px] text-[#718096] sm:text-[16px] sm:leading-[24px]">
            Live availability status for 142 medical centers near you.
          </p>
        </div>

        <div className="flex flex-col items-start gap-6 lg:flex-row lg:gap-8">
          {/* Mobile Overlay */}
          {isMobileFiltersOpen && (
            <div
              className="fixed inset-0 z-40 bg-black/20 backdrop-blur-[2px] transition-opacity lg:hidden"
              onClick={() => setIsMobileFiltersOpen(false)}
            />
          )}

          {/* Left Sidebar (Sliding Drawer on Mobile / Static on Desktop) */}
          <div
            className={cn(
              "fixed inset-y-0 left-0 z-50 flex h-full w-[310px] flex-col overflow-y-auto bg-transparent p-4 transition-transform duration-300 ease-in-out sm:w-[350px] lg:static lg:z-auto lg:h-auto lg:w-auto lg:transform-none lg:overflow-visible lg:p-0",
              isMobileFiltersOpen
                ? "translate-x-0"
                : "-translate-x-full lg:translate-x-0"
            )}
          >
            <div className="mb-3 flex justify-end lg:hidden">
              <button
                onClick={() => setIsMobileFiltersOpen(false)}
                className="flex h-9 w-9 items-center justify-center rounded-full border border-gray-50 bg-white text-gray-500 shadow-[0_2px_8px_rgba(0,0,0,0.08)] transition-all hover:text-gray-900 active:scale-95"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <line x1="18" y1="6" x2="6" y2="18" />
                  <line x1="6" y1="6" x2="18" y2="18" />
                </svg>
              </button>
            </div>
            <HospitalFilters />
          </div>

          {/* Right Content */}
          <div className="w-full min-w-0 flex-1">
            {/* Search Bar & Mobile Filter Toggle */}
            <div className="mb-6 flex w-full items-center gap-2 sm:gap-3">
              <div className="flex h-[50px] flex-1 items-center overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-1.5 shadow-[0_2px_4px_-1px_rgba(0,0,0,0.02),0_4px_6px_-1px_rgba(0,0,0,0.02)] transition-shadow focus-within:shadow-md sm:h-[56px] sm:rounded-[32px] sm:px-[6px]">
                <div className="flex flex-1 items-center gap-2 pl-3 sm:gap-3 sm:pl-4">
                  <svg
                    width="18"
                    height="18"
                    viewBox="0 0 18 18"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-4 w-4 shrink-0 sm:h-[18px] sm:w-[18px]"
                  >
                    <path
                      d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
                      fill="#4FB3AA"
                    />
                  </svg>

                  <input
                    type="text"
                    placeholder="Search for hospitals, doctors..."
                    className="w-full min-w-0 flex-1 truncate bg-transparent text-[14px] leading-none font-normal tracking-[0px] text-[#2D3748] outline-none placeholder:text-[#718096]/70 sm:text-[16px]"
                  />
                </div>
                <Button className="ml-2 h-[38px] shrink-0 rounded-[20px] bg-[#4FB3AA] px-4 py-2 text-[13px] leading-[20px] font-bold tracking-[0px] text-white transition-all hover:bg-[#3D8F87] active:scale-95 sm:ml-0 sm:h-[40px] sm:rounded-full sm:px-[24px] sm:py-[10px] sm:text-[14px]">
                  Search
                </Button>
              </div>

              {/* Mobile Filters Toggle Button */}
              <Button
                onClick={() => setIsMobileFiltersOpen(true)}
                variant="outline"
                className="flex h-[50px] w-[50px] shrink-0 items-center justify-center rounded-[24px] border border-[#E2E8F0] bg-white p-0 text-[#2D3748] shadow-sm transition-all hover:bg-gray-50 hover:shadow-md active:scale-95 sm:h-[56px] sm:w-[56px] sm:rounded-[32px] lg:hidden"
              >
                <svg
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
                </svg>
              </Button>
            </div>

            {/* Hospital Grid */}
            <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:grid-cols-2 xl:grid-cols-3">
              {MOCK_HOSPITALS.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
              ))}
            </div>

            {/* Load More */}
            <div className="mt-8 flex justify-center sm:mt-12">
              <Button
                variant="outline"
                className="flex h-[44px] w-full items-center justify-center gap-[8px] rounded-full border border-[#E2E8F0] bg-white px-6 text-[13px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all hover:bg-gray-50 active:scale-95 sm:h-[48px] sm:w-auto sm:px-[32px] sm:text-[14px]"
              >
                Load More Hospitals
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="text-[#94A3B8] transition-transform group-hover:translate-y-0.5"
                >
                  <path d="m6 9 6 6 6-6" />
                </svg>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
