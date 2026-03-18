"use client";

import { useState, useEffect } from "react";
import { ToggleSwitch, Button, Input, DistanceSlider } from "@/components/ui";
import { Divider } from "@/modules/hospitals/components";
import { DoctorQueryParams } from "../../types";
import { XIcon } from "@/components/icons";

interface DoctorFiltersProps {
  onApply: (filters: DoctorQueryParams) => void;
  initialFilters?: DoctorQueryParams;
}

export function DoctorFilters({ onApply, initialFilters }: DoctorFiltersProps) {
  const [filters, setFilters] = useState<DoctorQueryParams>({
    isAvailable: initialFilters?.isAvailable ?? true,
    specialities: initialFilters?.specialities || [],
    experience: initialFilters?.experience || [],
    distance: initialFilters?.distance ?? 0,
    latitude: initialFilters?.latitude,
    longitude: initialFilters?.longitude,
  });

  const [newSpeciality, setNewSpeciality] = useState("");
  const [newExperience, setNewExperience] = useState("");
  const [isLoadingLocation, setIsLoadingLocation] = useState(false);

  // Sync with initialFilters
  useEffect(() => {
    if (initialFilters) {
      setFilters((prev) => ({
        ...prev,
        ...initialFilters,
        distance: initialFilters.distance ?? 0,
        specialities: initialFilters.specialities || [],
        experience: initialFilters.experience || [],
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

  const handleFilterChange = (key: keyof DoctorQueryParams, value: any) => {
    setFilters((prev) => ({
      ...prev,
      [key]: value,
    }));

    if (key === "distance" && value > 0 && !filters.latitude) {
      handleLocationFetch();
    }
  };

  const handleAddTag = (
    key: "specialities" | "experience",
    newTag: string,
    clearFn: (s: string) => void
  ) => {
    if (!newTag.trim()) return;

    setFilters((prev) => {
      const current = prev[key] || [];
      if (current.includes(newTag.trim())) {
        clearFn("");
        return prev;
      }
      return {
        ...prev,
        [key]: [...current, newTag.trim()],
      };
    });
    clearFn("");
  };

  const handleRemoveTag = (key: "specialities" | "experience", tag: string) => {
    setFilters((prev) => ({
      ...prev,
      [key]: (prev[key] || []).filter((s) => s !== tag),
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
    const resetFilters: DoctorQueryParams = {
      isAvailable: true,
      specialities: [],
      experience: [],
      distance: 0,
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
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <span className="text-sm font-bold text-[#2D3748]">
              Available Now Only
            </span>
            <ToggleSwitch
              enabled={filters.isAvailable === true}
              onChange={(val) => handleFilterChange("isAvailable", val)}
            />
          </div>
          <p className="pr-4 text-xs text-[#718096]">
            Only show doctors currently online.
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

        {/* Specialities Tag UI */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-bold text-[#2D3748]">Specialties</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTag("specialities", newSpeciality, setNewSpeciality);
            }}
            className="flex gap-2"
          >
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
            {filters.specialities?.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 rounded-full bg-[#E6F4F1] px-3 py-1.5 text-[12px] font-medium text-[#3D8F87] transition-all hover:bg-[#D1EBE5]"
              >
                <span>{tag}</span>
                <button
                  onClick={() => handleRemoveTag("specialities", tag)}
                  className="flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-[#3D8F87] hover:text-white"
                >
                  <XIcon size={12} />
                </button>
              </div>
            ))}
          </div>
        </div>

        <Divider className="my-2" />

        {/* Experience Tag UI */}
        <div className="space-y-3">
          <h3 className="text-[14px] font-bold text-[#2D3748]">Experience</h3>
          <form
            onSubmit={(e) => {
              e.preventDefault();
              handleAddTag("experience", newExperience, setNewExperience);
            }}
            className="flex gap-2"
          >
            <Input
              placeholder="Add experience (e.g. 5+ years)..."
              value={newExperience}
              onChange={(e) => setNewExperience(e.target.value)}
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
            {filters.experience?.map((tag) => (
              <div
                key={tag}
                className="flex items-center gap-1.5 rounded-full bg-[#E6F4F1] px-3 py-1.5 text-[12px] font-medium text-[#3D8F87] transition-all hover:bg-[#D1EBE5]"
              >
                <span>{tag}</span>
                <button
                  onClick={() => handleRemoveTag("experience", tag)}
                  className="flex h-4 w-4 items-center justify-center rounded-full transition-colors hover:bg-[#3D8F87] hover:text-white"
                >
                  <XIcon size={12} />
                </button>
              </div>
            ))}
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
