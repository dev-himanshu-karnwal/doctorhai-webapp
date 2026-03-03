import { Input } from "@/components/ui/input";
import { Button } from "@/components/ui/button";

export function HeroSearchBar() {
  return (
    <div className="flex w-full max-w-[500px] items-center rounded-full bg-white p-1.5 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.05)] ring-1 ring-black/[0.03] sm:p-[6px]">
      <div className="flex flex-1 items-center gap-2 px-2 sm:gap-2.5 sm:px-3">
        <svg
          width="18"
          height="18"
          viewBox="0 0 18 18"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          className="h-4 w-4 sm:h-[18px] sm:w-[18px]"
        >
          <path
            d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
            fill="#4FB3AA"
          />
        </svg>

        <Input
          type="search"
          placeholder="Search for a hospital or clinic..."
          className="h-9 border-0 bg-transparent p-0 text-[13px] font-medium text-[#2D3748] shadow-none placeholder:text-[#A0AEC0] focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-10 sm:text-[14px]"
        />
      </div>
      <Button
        type="button"
        className="shrink-0 rounded-full bg-[#4FB3AA] px-[28px] py-[10px] text-[14px] font-bold text-white transition-all hover:bg-[#3d8f87] hover:shadow-lg active:scale-95"
      >
        Find
      </Button>
    </div>
  );
}
