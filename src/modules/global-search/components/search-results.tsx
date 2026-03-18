import { DoctorCard } from "./doctor-card";
import { ClinicCard } from "./clinic-card";
import { DoctorCtaCard } from "./doctor-cta-card";
import { Button, Select, Skeleton } from "@/components/ui";
import { ChevronDownIcon } from "@/components/icons";
import { GlobalSearchData } from "../types/global-search.types";
import { ApiResponse } from "@/types/api.types";

interface SearchResultsProps {
  pages?: ApiResponse<GlobalSearchData>[];
  isLoading: boolean;
  sortBy: string | undefined;
  sortOrder: "asc" | "desc" | undefined;
  onSortChange: (value: string) => void;
  onLoadMore?: () => void;
  hasMore?: boolean;
  isFetchingNextPage?: boolean;
}

function CardSkeleton() {
  return (
    <div className="flex flex-col rounded-[24px] border border-gray-50 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] sm:rounded-[32px] sm:p-6">
      <div className="flex items-start justify-between">
        <Skeleton className="h-[60px] w-[60px] rounded-full sm:h-[72px] sm:w-[72px]" />
        <Skeleton className="h-[24px] w-[80px] rounded-full sm:h-[26px]" />
      </div>
      <div className="mt-3 flex flex-col sm:mt-4">
        <Skeleton className="mb-2 h-[24px] w-3/4 sm:h-[28px]" />
        <Skeleton className="mb-[10px] h-[18px] w-1/2 sm:mb-[12px] sm:h-[20px]" />
        <Skeleton className="mb-[12px] h-[36px] w-full rounded-[20px] sm:mb-[16px] sm:h-[40px] sm:rounded-[24px]" />
      </div>
      <div className="mt-auto pt-6 sm:mt-10 sm:pt-0">
        <Skeleton className="h-[44px] w-full rounded-[24px] sm:h-[48px]" />
      </div>
    </div>
  );
}

export function SearchResults({
  pages,
  isLoading,
  sortBy,
  sortOrder,
  onSortChange,
  onLoadMore,
  hasMore,
  isFetchingNextPage,
}: SearchResultsProps) {
  // Map API items to format expected by cards to preserve styling
  const results: any[] = [{ type: "cta" }];
  let totalFound = 0;

  if (pages) {
    // Only grab total from the first page
    if (pages[0]) {
      totalFound =
        (pages[0].data?.pagination?.totalDoctors || 0) +
        (pages[0].data?.pagination?.totalHospitals || 0);
    }

    pages.forEach((page) => {
      const data = page.data;
      if (data?.doctor) {
        results.push(
          ...data.doctor.map((d) => ({
            type: "doctor",
            data: {
              id: d.id,
              name: d.fullName,
              specialty: d.specialization || d.designation || "Doctor",
              experience: d.hasExperience ? Number(d.hasExperience) : 0,
              status: d.status?.status || "available",
              statusDetail: d.status?.status || "Available",
              image: d.profilePhotoUrl,
              location: "Delhi, India",
            },
          }))
        );
      }

      if (data?.hospital) {
        results.push(
          ...data.hospital.map((h) => ({
            type: "clinic",
            data: {
              id: h.id,
              name: h.name,
              type: h.type || "Hospital",
              hours: "9 AM - 5 PM",
              doctorsCount: h.specialist?.length || 0,
              doctorsSpecialty: h.specialist?.[0] || "Specialist",
              specialists: h.specialist || [],
              status: h.isActive ? "available" : "off_duty",
              image: h.coverPhotoUrl,
            },
          }))
        );
      }
    });
  }

  return (
    <div className="mx-auto w-full max-w-7xl px-4 py-6 sm:py-8 md:px-8">
      {/* Search Stats & Sort Header */}
      <div className="mb-6 flex flex-col items-start justify-between gap-4 sm:mb-8 sm:flex-row sm:items-center">
        <div>
          <h2 className="flex items-center text-[20px] leading-[28px] font-bold text-[#2D3748] sm:text-[24px] sm:leading-[32px]">
            Search Results
            {isLoading ? (
              <Skeleton className="ml-2 h-6 w-20 rounded-md sm:ml-3 sm:h-7" />
            ) : (
              <span className="ml-1 text-[14px] leading-[20px] font-normal text-[#718096] sm:ml-2 sm:text-[18px] sm:leading-[28px]">
                ({totalFound} found)
              </span>
            )}
          </h2>
        </div>

        <div className="flex w-full items-center justify-between gap-3 sm:w-auto">
          <span className="text-[14px] font-bold text-[#718096]">Sort by:</span>
          <div className="relative flex-1 sm:w-[170px]">
            <Select
              className="h-10 w-full rounded-lg border border-gray-200 bg-white pr-8 pl-3 text-[14px] font-bold text-[#3D8F87] outline-none hover:border-[#3D8F87]/50"
              value={`${sortBy}_${sortOrder}`}
              onChange={(e) => onSortChange(e.target.value)}
              options={[
                { value: "fullName_asc", label: "Name (A-Z)" },
                { value: "fullName_desc", label: "Name (Z-A)" },
              ]}
            />
          </div>
        </div>
      </div>

      {isLoading && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[...Array(6)].map((_, i) => (
            <CardSkeleton key={i} />
          ))}
        </div>
      )}

      {!isLoading && results.length === 1 && (
        <div className="flex h-64 items-center justify-center rounded-2xl border border-dashed border-gray-300">
          <p className="font-medium text-gray-500">
            No results found matching your criteria.
          </p>
        </div>
      )}

      {/* Results Grid */}
      {!isLoading && results.length > 1 && (
        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {results.map((result, index) => {
            if (result.type === "doctor") {
              return (
                <DoctorCard
                  key={`${index}-${result.data.id}`}
                  doctor={result.data}
                />
              );
            }
            if (result.type === "clinic") {
              return (
                <ClinicCard
                  key={`${index}-${result.data.id}`}
                  clinic={result.data}
                />
              );
            }
            if (result.type === "cta") {
              return <DoctorCtaCard key="cta-card" />;
            }
            return null;
          })}
        </div>
      )}

      {/* Load More Button */}
      {!isLoading && hasMore && (
        <div className="mt-10 flex justify-center sm:mt-16">
          <Button
            variant="outline"
            onClick={onLoadMore}
            disabled={isFetchingNextPage}
            className="h-[48px] w-full gap-[8px] rounded-full border border-[#E2E8F0] bg-white px-[24px] py-[12px] text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all hover:border-gray-200 hover:bg-gray-50 sm:h-[58px] sm:w-auto sm:px-[32px] sm:py-[16px] sm:text-[16px] sm:leading-[24px]"
          >
            {isFetchingNextPage ? (
              <>
                <svg
                  className="h-5 w-5 animate-spin text-gray-500"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <circle
                    className="opacity-25"
                    cx="12"
                    cy="12"
                    r="10"
                    stroke="currentColor"
                    strokeWidth="4"
                  ></circle>
                  <path
                    className="opacity-75"
                    fill="currentColor"
                    d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"
                  ></path>
                </svg>
                Loading...
              </>
            ) : (
              <>
                Load More Results
                <ChevronDownIcon size={20} className="text-gray-400" />
              </>
            )}
          </Button>
        </div>
      )}
    </div>
  );
}
