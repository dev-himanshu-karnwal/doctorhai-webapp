import { SearchIcon, ChevronDownIcon } from "@/components/icons";

import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

interface HospitalManagementFiltersProps {
  search: string;
  setSearch: (val: string) => void;
}

export function HospitalManagementFilters({
  search,
  setSearch,
}: HospitalManagementFiltersProps) {
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
          className="h-11 w-full rounded-xl border-none bg-[#F8FAFC] pl-11 text-[13px] text-gray-600 placeholder:text-gray-400"
        />
      </div>
      <div className="flex flex-wrap gap-2 md:flex-nowrap">
        {["Filter by City", "Status", "Newest First"].map((label) => (
          <Button
            key={label}
            variant="secondary"
            className="flex h-[46px] min-w-[120px] flex-1 items-center justify-between gap-1.5 rounded-xl border-transparent bg-[#F8FAFC] px-3 font-medium whitespace-nowrap text-gray-600 hover:bg-[#F1F5F9] md:w-[160px] md:flex-none"
            style={{ fontSize: 12.5 }}
          >
            {label}
            <ChevronDownIcon className="h-[14px] w-[14px] text-gray-400" />
          </Button>
        ))}
      </div>
    </div>
  );
}
