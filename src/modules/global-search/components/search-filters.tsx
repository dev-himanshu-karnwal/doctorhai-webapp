import { Button, Input } from "@/components/ui";
import { SearchIcon, FilterIcon } from "@/components/icons";

interface SearchFiltersProps {
  onFilterToggle?: () => void;
  searchQuery: string;
  onSearchChange: (value: string) => void;
  onSearchSubmit: () => void;
}

export function SearchFilters({
  onFilterToggle,
  searchQuery,
  onSearchChange,
  onSearchSubmit,
}: SearchFiltersProps) {
  return (
    <div className="flex w-full items-center gap-2">
      <div className="relative flex h-[48px] flex-1 items-center overflow-hidden rounded-[24px] border border-gray-100 bg-white p-1 shadow-[0_4px_20px_-10px_rgba(79,179,170,0.15)] sm:h-[56px] sm:rounded-[28px] sm:px-[6px]">
        <div className="flex flex-1 items-center gap-2 pl-3 sm:gap-3 sm:pl-[12px]">
          <SearchIcon
            size={20}
            className="h-[18px] w-[18px] text-[#4FB3AA] sm:h-[20px] sm:w-[20px]"
            strokeWidth={2.5}
          />
          <Input
            type="text"
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            onKeyDown={(e) => e.key === "Enter" && onSearchSubmit()}
            placeholder="Search by name or title..."
            className="h-full min-w-0 flex-1 truncate border-none bg-transparent px-0 py-0 text-[14px] font-semibold text-[#1A2B3D] shadow-none outline-none placeholder:text-gray-300 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px]"
          />
        </div>
        <Button
          onClick={onSearchSubmit}
          className="ml-1 h-[38px] w-[70px] min-w-0 shrink-0 rounded-full bg-[#4DB6AC] p-0 text-[13px] font-bold text-white shadow-sm transition-all hover:bg-[#3DA59B] hover:shadow-md active:scale-95 sm:ml-0 sm:h-[44px] sm:w-[90px] sm:text-[15px]"
        >
          Search
        </Button>
      </div>

      {/* Mobile Filter Toggle */}
      <Button
        variant="outline"
        className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[24px] border-none bg-white p-0 shadow-sm xl:hidden"
        onClick={onFilterToggle}
      >
        <FilterIcon size={20} className="text-[#3D8F87]" />
      </Button>
    </div>
  );
}
