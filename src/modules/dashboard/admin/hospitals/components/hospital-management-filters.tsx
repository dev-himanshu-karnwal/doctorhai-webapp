import { SearchIcon, FilterIcon, ClockIcon } from "@/components/icons";
import { Input, Select } from "@/components/ui";
import { HospitalQueryParams } from "@/modules/hospitals/types/hospital.types";

interface HospitalManagementFiltersProps {
  search?: string;
  setSearch: (val: string) => void;
  onSearchSubmit: () => void;
  appliedFilters: HospitalQueryParams;
  onApplyFilters: (filters: HospitalQueryParams) => void;
}

export function HospitalManagementFilters({
  search,
  setSearch,
  onSearchSubmit,
  appliedFilters,
  onApplyFilters,
}: HospitalManagementFiltersProps) {
  const statusValue =
    appliedFilters.isVerified === true
      ? "verified"
      : appliedFilters.isVerified === false
        ? "unverified"
        : "all";

  const sortValue =
    appliedFilters.sortBy === "name"
      ? appliedFilters.sortOrder === "asc"
        ? "name-asc"
        : "name-desc"
      : appliedFilters.sortOrder === "asc"
        ? "oldest"
        : "newest";

  return (
    <div
      className="mb-6 flex flex-col gap-2 rounded-[16px] bg-white/90 p-2 backdrop-blur-[12px] md:flex-row md:items-center"
      style={{
        border: "1px solid rgba(226,232,240,0.6)",
        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
      }}
    >
      <div className="relative flex-1">
        <SearchIcon className="absolute top-1/2 left-3 z-10 h-[15px] w-[15px] -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search hospitals..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onKeyDown={(e) => e.key === "Enter" && onSearchSubmit()}
          className="h-11 w-full rounded-xl border-none bg-[#F8FAFC] pl-11 text-[13px] text-gray-600 placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-wrap gap-2 md:flex-nowrap">
        <Select
          className="flex-1 md:w-[140px] md:flex-none"
          icon={<FilterIcon className="h-[14px] w-[14px]" />}
          value={statusValue}
          options={[
            { value: "all", label: "All Status" },
            { value: "verified", label: "Verified Only" },
            { value: "unverified", label: "Unverified" },
          ]}
          onChange={(e) => {
            const val = e.target.value;
            onApplyFilters({
              isVerified:
                val === "verified"
                  ? true
                  : val === "unverified"
                    ? false
                    : undefined,
            });
          }}
        />

        <Select
          className="flex-1 md:w-[160px] md:flex-none"
          icon={<ClockIcon className="h-[14px] w-[14px]" />}
          value={sortValue}
          options={[
            { value: "newest", label: "Newest First" },
            { value: "oldest", label: "Oldest First" },
            { value: "name-asc", label: "Name (A-Z)" },
            { value: "name-desc", label: "Name (Z-A)" },
          ]}
          onChange={(e) => {
            const val = e.target.value;
            const updates: HospitalQueryParams = {};
            if (val === "name-asc") {
              updates.sortBy = "name";
              updates.sortOrder = "asc";
            } else if (val === "name-desc") {
              updates.sortBy = "name";
              updates.sortOrder = "desc";
            } else if (val === "oldest") {
              updates.sortBy = "createdAt";
              updates.sortOrder = "asc";
            } else {
              updates.sortBy = "createdAt";
              updates.sortOrder = "desc";
            }
            onApplyFilters(updates);
          }}
        />
      </div>
    </div>
  );
}
