"use client";

import { useState, useEffect } from "react";
import { Input, Button, ToggleSwitch } from "@/components/ui";
import { GlobalFilterQuery } from "../types/global-search.types";

interface SearchSideFiltersProps {
  filters: GlobalFilterQuery;
  onApply: (filters: GlobalFilterQuery) => void;
  onReset: () => void;
}

export function SearchSideFilters({
  filters,
  onApply,
  onReset,
}: SearchSideFiltersProps) {
  const [localFilters, setLocalFilters] = useState<GlobalFilterQuery>(filters);

  useEffect(() => {
    setLocalFilters(filters);
  }, [filters]);

  const handleChange = (
    key: keyof GlobalFilterQuery,
    value: string | number | undefined
  ) => {
    setLocalFilters((prev) => ({ ...prev, [key]: value }));
  };

  const handleApply = () => {
    onApply(localFilters);
  };

  return (
    <aside className="w-full shrink-0 rounded-[24px] border border-[#F1F5F9] bg-white px-[20px] pt-[20px] pb-[32px] shadow-sm sm:rounded-[48px] lg:w-[280px]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2D3748]">Filters</h2>
        <Button
          variant="ghost"
          onClick={onReset}
          className="h-auto p-0 text-xs font-bold text-[#3D8F87] hover:bg-transparent hover:text-[#2D6E68]"
        >
          Reset All
        </Button>
      </div>

      <div className="space-y-5">
        {/* City Filter */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#718096]">City</label>
          <Input
            value={localFilters.city || ""}
            onChange={(e) => handleChange("city", e.target.value)}
            placeholder="E.g. Delhi"
            className="h-11 rounded-xl border-none bg-[#F8FAFC] text-[14px] shadow-none placeholder:text-gray-400"
          />
        </div>

        {/* State Filter */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#718096]">State</label>
          <Input
            value={localFilters.state || ""}
            onChange={(e) => handleChange("state", e.target.value)}
            placeholder="E.g. Delhi"
            className="h-11 rounded-xl border-none bg-[#F8FAFC] text-[14px] shadow-none placeholder:text-gray-400"
          />
        </div>

        {/* Speciality Filter */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#718096]">
            Speciality
          </label>
          <Input
            value={localFilters.speciality || ""}
            onChange={(e) => handleChange("speciality", e.target.value)}
            placeholder="E.g. Cardiology"
            className="h-11 rounded-xl border-none bg-[#F8FAFC] text-[14px] shadow-none placeholder:text-gray-400"
          />
        </div>

        {/* Designation Filter */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#718096]">
            Designation
          </label>
          <Input
            value={localFilters.designation || ""}
            onChange={(e) => handleChange("designation", e.target.value)}
            placeholder="E.g. Surgeon"
            className="h-11 rounded-xl border-none bg-[#F8FAFC] text-[14px] shadow-none placeholder:text-gray-400"
          />
        </div>

        {/* Experience Filter */}
        <div className="space-y-2">
          <label className="text-[13px] font-bold text-[#718096]">
            Minimum Experience
          </label>
          <Input
            type="number"
            value={localFilters.experience || ""}
            onChange={(e) => handleChange("experience", e.target.value)}
            placeholder="E.g. 5"
            className="h-11 rounded-xl border-none bg-[#F8FAFC] text-[14px] shadow-none placeholder:text-gray-400"
          />
        </div>

        {/* Status Filter */}
        <div className="flex items-center justify-between rounded-xl bg-[#F8FAFC] px-4 py-3">
          <label className="text-[14px] font-semibold text-[#475569]">
            Available Only
          </label>
          <ToggleSwitch
            enabled={localFilters.status === "available"}
            onChange={(enabled) =>
              handleChange("status", enabled ? "available" : "")
            }
          />
        </div>
      </div>

      <Button
        onClick={handleApply}
        className="mt-8 h-[48px] w-full rounded-2xl bg-[#4DB6AC] text-[15px] font-bold text-white shadow-[0_4px_14px_0_rgba(79,179,170,0.39)] transition-all hover:bg-[#3DA59B] active:scale-95"
      >
        Apply Filters
      </Button>
    </aside>
  );
}
