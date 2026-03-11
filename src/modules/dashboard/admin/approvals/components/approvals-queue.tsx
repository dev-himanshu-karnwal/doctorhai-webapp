import {
  SearchIcon,
  FilterIcon,
  MonitorIcon,
  ClipboardListIcon,
} from "@/components/icons";
import { HospitalCard } from "./hospital-card";
import { Input, Button, Select } from "@/components/ui";
import type { ApprovalsQueueProps } from "../types";

export function ApprovalsQueue({
  hospitals,
  doctors,
  isLoading,
  hasMore,
  onLoadMore,
  searchQuery,
  onSearchChange,
  requestType,
  onRequestTypeChange,
}: ApprovalsQueueProps) {
  return (
    <div className="rounded-[32px] border border-[#F1F5F9] bg-white p-4 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] sm:rounded-[48px] sm:p-8">
      {/* Section header */}
      <div className="mb-5 flex flex-col gap-5 lg:flex-row lg:items-center lg:justify-between">
        <div className="flex flex-col items-start justify-start gap-1">
          <div className="mb-0.5 flex items-center gap-2.5">
            <div className="flex items-center gap-2">
              <div className="flex items-center justify-center rounded-[24px] bg-[#FEFCE8] p-2">
                <ClipboardListIcon className="h-4 w-4 text-amber-600" />
              </div>
              <h2 className="text-[20px] leading-[28px] font-bold text-[#2D3748] sm:text-[24px] sm:leading-[32px]">
                Pending Verification Queue
              </h2>
            </div>
          </div>
          <p className="ml-[4px] font-[Manrope] text-[14px] leading-[20px] font-normal text-[#718096]">
            {hospitals.length + doctors.length} requests require your review
          </p>
        </div>
        <div className="flex flex-col items-stretch gap-2.5 sm:flex-row sm:items-center">
          <div className="relative flex-1 sm:flex-none">
            <SearchIcon className="absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2 text-slate-400" />
            <Input
              type="text"
              placeholder="Search by name, city..."
              value={searchQuery}
              onChange={(e) => onSearchChange(e.target.value)}
              className="h-auto w-full rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] pt-[12px] pr-[16px] pb-[13px] pl-[36px] text-[14px] leading-none font-medium text-[#718096] placeholder-[#718096]/70 transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none sm:w-[260px]"
            />
          </div>

          <Select
            className="sm:w-[160px]"
            icon={<MonitorIcon className="h-4 w-4" />}
            value={requestType}
            onChange={(e) =>
              onRequestTypeChange(
                e.target.value as "all" | "doctor" | "hospital"
              )
            }
            options={[
              { value: "all", label: "All Requests" },
              { value: "doctor", label: "Doctors" },
              { value: "hospital", label: "Hospitals" },
            ]}
          />

          <Select
            className="sm:w-[200px]"
            icon={<FilterIcon className="h-[13px] w-[13px]" />}
            options={[
              { value: "newest", label: "Sort by Date (Newest)" },
              { value: "oldest", label: "Sort by Date (Oldest)" },
            ]}
          />
        </div>
      </div>

      {/* Cards Grid */}
      {hospitals.length === 0 && doctors.length === 0 ? (
        <div className="flex flex-col items-center justify-center py-20 text-center">
          <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#F8FAFC]">
            <ClipboardListIcon className="h-8 w-8 text-[#CBD5E0]" />
          </div>
          <h3 className="text-[18px] font-bold text-[#2D3748]">
            No Requests Found
          </h3>
          <p className="mt-1 max-w-[280px] text-[14px] text-[#718096]">
            {searchQuery
              ? `We couldn't find any results matching "${searchQuery}"`
              : "There are currently no pending requests in this category."}
          </p>
        </div>
      ) : (
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
          {hospitals.map((h) => (
            <HospitalCard
              key={h.id}
              id={h.id}
              type="hospital"
              initial={h.name.charAt(0)}
              name={h.name}
              location={h.addressId || "Location N/A"}
              createdAt={h.createdAt}
              topBorder="#F59E0B"
              avatarBg="#FEF9C3"
              avatarTextColor="#D97706"
              badgeColor="#FBBF24"
              clockColor="#FBBF24"
            />
          ))}

          {doctors.map((d) => (
            <HospitalCard
              key={d.id}
              id={d.id}
              type="doctor"
              initial={d.fullName.charAt(0)}
              name={d.fullName}
              location={d.specialization || "General Physician"}
              createdAt={d.createdAt}
              topBorder="#A78BFA"
              avatarBg="#EDE9FE"
              avatarTextColor="#C4B5FD"
              badgeColor="#A78BFA"
              clockColor="#9CA3AF"
            />
          ))}
        </div>
      )}

      {hasMore && (
        <div className="mt-8 flex justify-center">
          <Button
            onClick={onLoadMore}
            disabled={isLoading}
            className="rounded-full bg-gray-900 px-8 py-2 text-white transition-all hover:bg-gray-800 active:scale-95 disabled:opacity-50"
          >
            {isLoading ? "Loading..." : "Load More Requests"}
          </Button>
        </div>
      )}
    </div>
  );
}
