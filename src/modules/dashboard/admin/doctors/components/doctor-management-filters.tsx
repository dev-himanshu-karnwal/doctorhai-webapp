import { Input, Button } from "@/components/ui";
import { SearchIcon } from "../icons";
import { SlidersIcon } from "../icons";
import type { DoctorFilterTab } from "../types";

interface DoctorManagementFiltersProps {
  search: string;
  setSearch: (value: string) => void;
  activeTab: DoctorFilterTab;
  setActiveTab: (tab: DoctorFilterTab) => void;
  sortOrder: "asc" | "desc";
  setSortOrder: (order: "asc" | "desc") => void;
}

export function DoctorManagementFilters({
  search,
  setSearch,
  activeTab,
  setActiveTab,
  sortOrder,
  setSortOrder,
}: DoctorManagementFiltersProps) {
  const tabs: DoctorFilterTab[] = ["All", "Verified", "Unverified"];

  const toggleSortOrder = () => {
    setSortOrder(sortOrder === "asc" ? "desc" : "asc");
  };

  return (
    <div
      className="mb-6 flex flex-col gap-4 bg-white p-[16px] xl:flex-row xl:items-center"
      style={{
        borderRadius: 16,
        border: "1px solid #F1F5F9",
        boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
      }}
    >
      {/* Search */}
      <div className="relative flex-1">
        <SearchIcon className="absolute top-1/2 left-[14px] z-10 h-[14px] w-[14px] -translate-y-1/2 text-gray-400" />
        <Input
          type="text"
          placeholder="Search doctors..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full pl-11 text-gray-600 placeholder-gray-400 focus:outline-none"
          style={{
            fontSize: 13,
            background: "#F8FAFC",
            borderRadius: 12,
            border: "1px solid transparent",
            paddingTop: 14,
            paddingBottom: 14,
            paddingRight: 16,
          }}
        />
      </div>

      {/* Tabs + Sort */}
      <div className="flex flex-col gap-3 md:flex-row md:items-center">
        <div className="no-scrollbar flex items-center gap-1 overflow-x-auto rounded-[12px] bg-[#F8FAFC] p-[5px]">
          {tabs.map((tab) => (
            <Button
              key={tab}
              variant={activeTab === tab ? "primary" : "ghost"}
              onClick={() => setActiveTab(tab)}
              className="px-4 py-2 font-semibold transition-all"
              style={{
                fontSize: 12.5,
                borderRadius: 9,
                height: "auto",
                background: activeTab === tab ? "#1e293b" : "transparent",
                color: activeTab === tab ? "#ffffff" : "#64748b",
                whiteSpace: "nowrap",
                border: "none",
                boxShadow:
                  activeTab === tab ? "0 4px 12px rgba(30,41,59,0.15)" : "none",
              }}
            >
              {tab}
            </Button>
          ))}
        </div>

        <Button
          variant="ghost"
          onClick={toggleSortOrder}
          className="flex h-auto items-center justify-between gap-2 rounded-[12px] bg-[#F8FAFC] px-[14px] py-[11px] transition-colors hover:bg-gray-100 md:justify-start"
          style={{ border: "none" }}
        >
          <div className="flex items-center gap-2">
            <SlidersIcon className="h-[13px] w-[13px] flex-shrink-0 text-gray-400" />
            <span
              className="font-medium whitespace-nowrap text-gray-600"
              style={{ fontSize: 12.5 }}
            >
              Sort: {sortOrder.toUpperCase()}
            </span>
          </div>
        </Button>
      </div>
    </div>
  );
}
