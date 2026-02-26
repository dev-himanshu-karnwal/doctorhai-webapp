import { Button } from "@/components/ui/button";

export function SearchFilters() {
  return (
    <div className="mx-auto w-full max-w-[1216px] space-y-[14px] px-4">
      {/* Search Input Area */}
      <div className="relative mx-auto flex h-[56px] max-w-[768px] items-center overflow-hidden rounded-[28px] border border-gray-100 bg-white p-1.5 shadow-[0_10px_40px_-10px_rgba(79,179,170,0.15)] sm:h-[68px] sm:rounded-[32px] sm:px-[8px]">
        <div className="flex flex-1 items-center gap-2 pl-3 sm:gap-4 sm:pl-[14px]">
          <svg
            width="22"
            height="22"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#4FB3AA"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-5 w-5 sm:h-[22px] sm:w-[22px]"
          >
            <circle cx="11" cy="11" r="8" />
            <path d="m21 21-4.3-4.3" />
          </svg>
          <input
            type="text"
            placeholder="Search for doctors..."
            className="min-w-0 flex-1 truncate bg-transparent text-[15px] font-semibold text-[#1A2B3D] outline-none placeholder:text-gray-300 sm:text-[18px]"
          />
        </div>
        <Button className="ml-2 h-[44px] w-[80px] min-w-0 shrink-0 rounded-full bg-[#4DB6AC] p-0 text-[14px] font-bold text-white shadow-[0_2px_4px_-2px_rgba(79,179,170,0.2),0_4px_6px_-1px_rgba(79,179,170,0.2)] transition-all hover:bg-[#3DA59B] hover:shadow-lg active:scale-95 sm:ml-0 sm:h-[52px] sm:w-[118.66px] sm:text-[16px]">
          Search
        </Button>
      </div>

      {/* Filter Row */}
      <div className="hide-scrollbar flex flex-wrap items-center justify-start gap-2 overflow-x-auto pb-2 sm:justify-center sm:gap-3 sm:pb-0">
        <Button
          variant="outline"
          className="h-[34px] flex-none gap-1.5 rounded-full border-[#F1F5F9] bg-white px-3 text-[13px] font-bold text-[#1A2B3D] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] hover:bg-gray-50 sm:h-[38px] sm:gap-2 sm:px-4 sm:text-[15px]"
        >
          <svg
            width="14"
            height="9"
            viewBox="0 0 14 9"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="h-2 w-[10px] sm:h-auto sm:w-auto"
          >
            <path
              d="M5.25 9V7.5H8.25V9H5.25ZM2.25 5.25V3.75H11.25V5.25H2.25ZM0 1.5V0H13.5V1.5H0Z"
              fill="#2D3748"
            />
          </svg>
          Filters
        </Button>

        <div className="mx-1 hidden h-4 w-[1px] bg-gray-200 sm:mx-2 sm:block sm:h-6" />

        {/* Active Filter */}
        <div className="flex h-[34px] flex-none items-center gap-1.5 rounded-full border border-[#CBEDEA] bg-[#E6F6F4] px-3 text-[13px] font-bold text-[#3D8F87] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] sm:h-[42px] sm:gap-2 sm:px-4 sm:text-[14px]">
          Specialty: Cardiology
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="h-3 w-3 cursor-pointer transition-colors hover:text-[#2D3748] sm:h-3.5 sm:w-3.5"
          >
            <path d="M18 6 6 18" />
            <path d="m6 6 12 12" />
          </svg>
        </div>

        {/* Dropdown Filters */}
        <FilterDropdown label="Location" />
        <FilterDropdown label="Available Now" />
        <FilterDropdown label="Insurance" />
      </div>
    </div>
  );
}

function FilterDropdown({ label }: { label: string }) {
  return (
    <button className="flex h-[34px] flex-none items-center gap-1.5 rounded-full border border-[#F1F5F9] bg-white px-3 text-[13px] font-bold text-gray-500 shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all hover:bg-gray-50 sm:h-[42px] sm:gap-2 sm:px-4 sm:text-[14px]">
      {label}
      <svg
        width="14"
        height="14"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        strokeWidth="2.5"
        strokeLinecap="round"
        strokeLinejoin="round"
        className="h-3 w-3 text-gray-400 sm:h-3.5 sm:w-3.5"
      >
        <path d="m6 9 6 6 6-6" />
      </svg>
    </button>
  );
}
