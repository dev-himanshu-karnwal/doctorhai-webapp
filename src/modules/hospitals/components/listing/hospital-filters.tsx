"use client";

import { useState } from "react";
import { ToggleSwitch } from "./toggle-switch";
import { FilterCheckbox } from "./filter-checkbox";
import { DistanceSlider } from "./distance-slider";
import { Divider } from "../shared";

export function HospitalFilters() {
  const [isAvailableNow, setIsAvailableNow] = useState(true);

  return (
    <aside className="w-full shrink-0 rounded-[24px] border border-[#F1F5F9] bg-white px-[20px] pt-[20px] pb-[32px] shadow-sm sm:rounded-[48px] lg:w-[280px]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2D3748]">Filters</h2>
        <button className="text-xs font-bold text-[#3D8F87] hover:text-[#2D6E68]">
          Reset
        </button>
      </div>

      <div className="space-y-2">
        <div className="flex items-center justify-between">
          <span className="text-sm font-bold text-[#2D3748]">
            Available Now Only
          </span>
          <ToggleSwitch enabled={isAvailableNow} onChange={setIsAvailableNow} />
        </div>
        <p className="pr-4 text-xs text-[#718096]">
          Only show hospitals with doctors currently online.
        </p>
      </div>

      <Divider className="my-5" />

      <DistanceSlider />

      <Divider className="my-5" />

      {/* Departments */}
      <div className="space-y-3">
        <h3 className="text-[14px] font-bold text-[#2D3748]">Departments</h3>
        <div className="flex flex-col gap-3">
          <FilterCheckbox label="General Physician" checked />
          <FilterCheckbox label="Cardiology" checked />
          <FilterCheckbox label="Pediatrics" />
          <FilterCheckbox label="Neurology" />
          <FilterCheckbox label="Orthopedics" />
        </div>
      </div>

      <Divider className="my-5" />

      {/* Hospital Type */}
      <div className="space-y-3">
        <h3 className="text-[14px] font-bold text-[#2D3748]">Hospital Type</h3>
        <div className="flex flex-col gap-3">
          <FilterCheckbox label="Public Hospital" />
          <FilterCheckbox label="Private Clinic" checked />
          <FilterCheckbox label="Specialty Center" />
        </div>
      </div>
    </aside>
  );
}
