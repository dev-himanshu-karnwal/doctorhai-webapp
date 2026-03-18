"use client";

import { useState, useEffect } from "react";
import { ToggleSwitch, Button, Input, Select } from "@/components/ui";
import { DistanceSlider } from "./distance-slider";
import { Divider } from "../shared";
import { HospitalQueryParams } from "../../types/hospital.types";
import { XIcon } from "@/components/icons";

interface HospitalFiltersProps {
  onApply: (filters: HospitalQueryParams) => void;
  initialFilters?: HospitalQueryParams;
}

export function HospitalFilters({
  onApply,
  initialFilters,
}: HospitalFiltersProps) {
  const [filters, setFilters] = useState<HospitalQueryParams>({
    name: initialFilters?.name || "",
    isAvailable: initialFilters?.isAvailable || "false",
    isActive: initialFilters?.isActive || "true",
    specialities: initialFilters?.specialities || [],
    distance: initialFilters?.distance ?? 0,
    sortBy: initialFilters?.sortBy,
    sortOrder: initialFilters?.sortOrder || "asc",
    latitude: initialFilters?.latitude,
    longitude: initialFilters?.longitude,
  });

  const [newSpeciality, setNewSpeciality] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Sync with initialFilters if they change externally
  useEffect(() => {
    if (initialFilters) {
      setFilters((prev) => ({
        ...prev,
        ...initialFilters,
        distance: initialFilters.distance ?? 0,
        specialities: initialFilters.specialities || [],
        sortOrder: initialFilters.sortOrder || "asc",
      }));
    }
  }, [initialFilters]);

  const handleLocationFetch = () => {
    if (!navigator.geolocation) return;

    setIsLoadingLocation(true);
    navigator.geolocation.getCurrentPosition(
      (position) => {
        setFilters((prev) => ({
          ...prev,
          latitude: position.coords.latitude,
          longitude: position.coords.longitude,
        }));
        setIsLoadingLocation(false);
      },
      (error) => {
        console.error("Error fetching location:", error);
        setIsLoadingLocation(false);
      }
    );
  };

  const handleFilterChange = (key: keyof HospitalQueryParams, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    // If distance is explicitly adjusted, ensure we have location
    if (key === "distance" && value > 0 && !filters.latitude) {
      handleLocationFetch();
    }
  };

  const handleAddSpeciality = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (!newSpeciality.trim()) return;

    setFilters((prev) => {
      const current = prev.specialities || [];
      if (current.includes(newSpeciality.trim())) {
        setNewSpeciality("");
        return prev;
      }
      return {
        ...prev,
        specialities: [...current, newSpeciality.trim()],
      };
    });
    setNewSpeciality("");
  };

  const handleRemoveSpeciality = (speciality: string) => {
    setFilters((prev) => ({
      ...prev,
      specialities: (prev.specialities || []).filter((s) => s !== speciality),
    }));
  };

  const handleApply = () => {
    const finalFilters = { ...filters };
    if (finalFilters.distance === 0) {
      finalFilters.distance = undefined;
      finalFilters.latitude = undefined;
      finalFilters.longitude = undefined;
    }
    onApply(finalFilters);
  };

  const handleReset = () => {
    const resetFilters: HospitalQueryParams = {
      search: "",
      name: "",
      isAvailable: "false",
      isActive: "true",
      specialities: [],
      distance: 0,
      sortBy: undefined,
      sortOrder: "asc",
      latitude: undefined,
      longitude: undefined,
    };
    setFilters(resetFilters);
    onApply(resetFilters);
  };

  return (
    <aside className="w-full shrink-0 rounded-[24px] border border-[#F1F5F9] bg-white px-[20px] pt-[20px] pb-[32px] shadow-sm sm:rounded-[48px] lg:w-[280px]">
      <div className="mb-5 flex items-center justify-between">
        <h2 className="text-lg font-bold text-[#2D3748]">Filters</h2>
        <Button
          variant="ghost"
          onClick={handleReset}
          className="h-auto p-0 text-xs font-bold text-[#3D8F87] hover:bg-transparent hover:text-[#2D6E68]"
        >
          Reset
        </Button>
      </div>

      <div className="space-y-4">
        {/* Hospital Name */}
        <div className="space-y-2">
          <label className="text-sm font-bold text-[#2D3748]">
            Hospital Name
          </label>
          <Input
            placeholder="Enter name..."
            value={filters.name}
            onChange={(e) => handleFilterChange("name", e.target.value)}
            className="h-10 rounded-xl border-[#E2E8F0] text-sm focus:border-[#4FB3AA] focus:ring-[#4FB3AA]"
          />
        </div>

        <Divider className="my-2" />

        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#2D3748]">
              Available Now
            </span>
            <ToggleSwitch
              enabled={filters.isAvailable === "true"}
              onChange={(val) =>
                handleFilterChange("isAvailable", val ? "true" : "false")
              }
            />
          </div>
          <p className="pr-4 text-xs text-[#718096]">
            Show hospitals with doctors online.
          </p>
        </div>

        <Divider className="my-2" />

        <DistanceSlider
          value={filters.distance || 0}
          onChange={(val) => handleFilterChange("distance", val)}
        />
        {isLoadingLocation && (
          <p className="animate-pulse text-[10px] text-[#4FB3AA]">
            Fetching your location...
          </p>
        )}

        <Divider className="my-2" />

        {/* Sorting Section */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-bold text-[#2D3748]">Sort By</h3>
          <div className="grid grid-cols-1 gap-2">
            <Select
              value={filters.sortBy || ""}
              onChange={(e) =>
                handleFilterChange("sortBy", e.target.value || undefined)
              }
              options={[
                { value: "", label: "No Sorting" },
                { value: "name", label: "Name" },
                { value: "createdAt", label: "Recently Added" },
              ]}
              className="h-9 rounded-lg border-[#E2E8F0] text-xs"
            />
            {filters.sortBy && (
              <Select
                value={filters.sortOrder || "asc"}
                onChange={(e) =>
                  handleFilterChange("sortOrder", e.target.value)
                }
                options={[
                  { value: "asc", label: "Ascending" },
                  { value: "desc", label: "Descending" },
                ]}
                className="h-9 rounded-lg border-[#E2E8F0] text-xs"
              />
            )}
          </div>
        </div>

        <Divider className="my-2" />

        {/* Specialities Tag UI */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-bold text-[#2D3748]">Specialities</h3>

          <form onSubmit={handleAddSpeciality} className="flex gap-2">
            <Input
              placeholder="Add speciality..."
              value={newSpeciality}
              onChange={(e) => setNewSpeciality(e.target.value)}
              className="h-9 flex-1 rounded-lg border-[#E2E8F0] text-xs focus:border-[#4FB3AA] focus:ring-[#4FB3AA]"
            />
            <Button
              type="submit"
              className="h-9 rounded-lg bg-[#F1F5F9] px-3 text-xs font-bold text-[#2D3748] transition-all hover:bg-[#E2E8F0] active:scale-95"
            >
              Add
            </Button>
          </form>

          <div className="flex flex-wrap gap-2 pt-1">
            {filters.specialities?.map((speciality) => (
              <div
                key={speciality}
                className="flex items-center gap-1.5 rounded-full bg-[#E6F4F1] px-3 py-1.5 text-[12px] font-medium text-[#3D8F87] transition-all hover:bg-[#D1EBE5]"
              >
                <span>{speciality}</span>
                <button
                  onClick={() => handleRemoveSpeciality(speciality)}
                  className="flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-[#3D8F87] hover:text-white"
                >
                  <XIcon size={12} />
                </button>
              </div>
            ))}
            {filters.specialities?.length === 0 && (
              <p className="text-[12px] text-[#94A3B8] italic">
                No specialities added yet.
              </p>
            )}
          </div>
        </div>

        <div className="pt-4">
          <Button
            onClick={handleApply}
            className="h-12 w-full rounded-2xl bg-[#4FB3AA] font-bold text-white shadow-lg shadow-[#4FB3AA]/20 transition-all hover:bg-[#3D8F87] active:scale-95"
          >
            Apply Filters
          </Button>
        </div>
      </div>
    </aside>
  );
}
