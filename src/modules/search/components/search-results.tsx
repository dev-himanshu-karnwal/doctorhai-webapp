import { MOCK_SEARCH_RESULTS } from "../data/mock-results";
import { DoctorCard } from "./doctor-card";
import { ClinicCard } from "./clinic-card";
import { DoctorCtaCard } from "./doctor-cta-card";
import { Button } from "@/components/ui";

export function SearchResults() {
  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:py-8 md:px-8">
      {/* Search Stats Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-10 sm:flex-row sm:items-end">
        <div>
          <h2 className="text-[20px] leading-[28px] font-bold text-[#2D3748] sm:text-[24px] sm:leading-[32px]">
            Search Results{" "}
            <span className="ml-1 text-[14px] leading-[20px] font-normal text-[#718096] sm:ml-2 sm:text-[18px] sm:leading-[28px]">
              (12 found)
            </span>
          </h2>
        </div>
        <div className="flex w-full items-center justify-between gap-2 sm:w-auto sm:justify-start">
          <span className="text-[13px] leading-[20px] font-bold text-[#718096] sm:text-[14px]">
            Sort by:
          </span>
          <button className="flex items-center gap-1.5 text-[14px] leading-[20px] font-bold text-[#3D8F87] sm:text-[16px] sm:leading-[24px]">
            Relevance
            <svg
              width="16"
              height="16"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2.5"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-3.5 w-3.5 sm:h-4 sm:w-4"
            >
              <path d="m6 9 6 6 6-6" />
            </svg>
          </button>
        </div>
      </div>

      {/* Results Grid */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-4">
        {MOCK_SEARCH_RESULTS.map((result, index) => {
          if (result.type === "doctor") {
            return <DoctorCard key={index} doctor={result.data} />;
          }
          if (result.type === "clinic") {
            return <ClinicCard key={index} clinic={result.data} />;
          }
          if (result.type === "cta") {
            return <DoctorCtaCard key={index} />;
          }
          return null;
        })}
      </div>

      {/* Load More Button */}
      <div className="mt-10 flex justify-center sm:mt-16">
        <Button
          variant="outline"
          className="h-[48px] w-full gap-[8px] rounded-full border border-[#E2E8F0] bg-white px-[24px] py-[12px] text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all hover:border-gray-200 hover:bg-gray-50 sm:h-[58px] sm:w-auto sm:px-[32px] sm:py-[16px] sm:text-[16px] sm:leading-[24px]"
        >
          Load More Results
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="text-gray-400"
          >
            <path d="m6 9 6 6 6-6" />
          </svg>
        </Button>
      </div>
    </div>
  );
}
