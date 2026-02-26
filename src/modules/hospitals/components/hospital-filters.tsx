"use client";

import { useState } from "react";
import { cn } from "@/lib/cn";

interface FilterCheckboxProps {
  label: string;
  checked?: boolean;
}

function FilterCheckbox({ label, checked = false }: FilterCheckboxProps) {
  const [isChecked, setIsChecked] = useState(checked);

  return (
    <label className="flex cursor-pointer items-center gap-2.5">
      <input
        type="checkbox"
        className="hidden"
        checked={isChecked}
        onChange={() => setIsChecked(!isChecked)}
      />
      <div
        className={cn(
          "flex h-[22px] w-[22px] shrink-0 items-center justify-center rounded-[8px] border transition-all",
          isChecked
            ? "border-[#4FB3AA] bg-[#4FB3AA]"
            : "border-[#CBD5E1] bg-white"
        )}
      >
        {isChecked && (
          <svg width="13" height="10" viewBox="0 0 11 9" fill="none">
            <path
              d="M1 4L4 7L10 1"
              stroke="white"
              strokeWidth="1.8"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        )}
      </div>
      <span className="text-[14px] leading-[20px] font-normal tracking-[0px] text-[#2D3748]">
        {label}
      </span>
    </label>
  );
}

function SectionDivider() {
  return <div className="my-5 h-[1px] w-full bg-[#F1F5F9]" />;
}

export function HospitalFilters() {
  const [isAvailableNow, setIsAvailableNow] = useState(true);

  return (
    <aside className="w-full shrink-0 rounded-[24px] border border-[#F1F5F9] bg-white px-[20px] pt-[20px] pb-[32px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:px-[24px] sm:pt-[24px] sm:pb-[40px] lg:w-[280px] lg:rounded-[48px]">
      {/* Header */}
      <div className="flex items-center justify-between">
        <h2 className="text-[18px] leading-[28px] font-bold tracking-[0px] text-[#2D3748]">
          Filters
        </h2>
        <button className="text-[12px] leading-[16px] font-bold tracking-[0px] text-[#3D8F87] transition-colors hover:text-[#2D6E68]">
          Reset
        </button>
      </div>

      <SectionDivider />

      {/* Available Now Toggle */}
      <div>
        <div className="mb-2 flex items-center justify-between">
          <span className="text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748]">
            Available Now Only
          </span>
          {/* Toggle switch */}
          <div
            onClick={() => setIsAvailableNow(!isAvailableNow)}
            className={cn(
              "relative h-[22px] w-[40px] cursor-pointer rounded-full transition-colors",
              isAvailableNow ? "bg-[#4DB6AC]" : "bg-[#CBD5E1]"
            )}
          >
            <div
              className={cn(
                "absolute top-[3px] h-[16px] w-[16px] rounded-full bg-white shadow-sm transition-all duration-300",
                isAvailableNow ? "left-[21px]" : "left-[3px]"
              )}
            />
          </div>
        </div>
        <p className="text-[12px] leading-[16px] font-normal tracking-[0px] text-[#718096]">
          Only show hospitals with doctors currently online.
        </p>
      </div>

      <SectionDivider />

      {/* Distance */}
      <div>
        <div className="mb-3 flex items-center justify-between">
          <span className="text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748]">
            Distance
          </span>
          <span className="flex h-[24px] items-center rounded-[6px] bg-[#F2F9F8] px-[8px] py-[4px] text-[12px] leading-[16px] font-bold tracking-[0px] text-[#3D8F87]">
            Within 15km
          </span>
        </div>
        {/* Slider track */}
        <div className="relative mb-1">
          <div className="h-[4px] w-full overflow-hidden rounded-full bg-[#E2E8F0]">
            <div className="h-full w-[28%] rounded-full bg-[#4DB6AC]" />
          </div>
          {/* thumb */}
          <div
            className="absolute top-1/2 h-[14px] w-[14px] -translate-y-1/2 cursor-pointer rounded-full border-2 border-[#4DB6AC] bg-white shadow-md"
            style={{ left: "calc(28% - 7px)" }}
          />
        </div>
        <div className="mt-2 flex justify-between">
          <span className="text-[10px] leading-[15px] font-medium tracking-[0px] text-[#718096]">
            1km
          </span>
          <span className="text-[10px] leading-[15px] font-medium tracking-[0px] text-[#718096]">
            50km
          </span>
        </div>
      </div>

      <SectionDivider />

      {/* Departments */}
      <div>
        <h3 className="mb-3 text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748]">
          Departments
        </h3>
        <div className="flex flex-col gap-3">
          <FilterCheckbox label="General Physician" checked />
          <FilterCheckbox label="Cardiology" checked />
          <FilterCheckbox label="Pediatrics" />
          <FilterCheckbox label="Neurology" />
          <FilterCheckbox label="Orthopedics" />
        </div>
      </div>

      <SectionDivider />

      {/* Hospital Type */}
      <div>
        <h3 className="mb-3 text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748]">
          Hospital Type
        </h3>
        <div className="flex flex-col gap-3">
          <FilterCheckbox label="Public Hospital" />
          <FilterCheckbox label="Private Clinic" checked />
          <FilterCheckbox label="Specialty Center" />
        </div>
      </div>
    </aside>
  );
}
