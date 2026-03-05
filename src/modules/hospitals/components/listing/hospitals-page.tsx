"use client";

import { useState } from "react";
import { Button } from "@/components/ui/button";
import { MOCK_HOSPITALS } from "../../data/mock-hospitals";
import { HospitalCard } from "./hospital-card";
import { HospitalFilters } from "./hospital-filters";
import { HospitalsSearch } from "./hospitals-search";
import { cn } from "@/lib/cn";

export function HospitalsPage() {
  const [isMobileFiltersOpen, setIsMobileFiltersOpen] = useState(false);

  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 py-6 sm:px-6 sm:py-8">
      <div className="mx-auto max-w-[1200px]">
        <header className="mb-6">
          <h1 className="text-[24px] font-bold text-[#1e293b] sm:text-[32px]">
            Find a Hospital
          </h1>
        </header>

        <div className="flex flex-col gap-8 lg:flex-row">
          <div
            className={cn(
              "fixed inset-0 z-50 flex flex-col bg-white/80 p-4 backdrop-blur-md transition-transform lg:static lg:z-auto lg:h-auto lg:w-[280px] lg:translate-x-0 lg:bg-transparent lg:p-0 lg:backdrop-blur-none",
              isMobileFiltersOpen ? "translate-x-0" : "-translate-x-full"
            )}
          >
            <div className="mb-4 flex justify-end lg:hidden">
              <Button
                variant="ghost"
                className="h-10 w-10 rounded-full p-0"
                onClick={() => setIsMobileFiltersOpen(false)}
              >
                ✕
              </Button>
            </div>
            <HospitalFilters />
          </div>

          <main className="flex-1">
            <HospitalsSearch
              onFilterToggle={() => setIsMobileFiltersOpen(true)}
            />
            <div className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3">
              {MOCK_HOSPITALS.map((hospital) => (
                <HospitalCard key={hospital.id} hospital={hospital} />
              ))}
            </div>
            <div className="mt-12 flex justify-center">
              <Button
                variant="outline"
                className="h-12 rounded-full px-8 font-bold"
              >
                Load More Hospitals
              </Button>
            </div>
          </main>
        </div>
      </div>
    </div>
  );
}
