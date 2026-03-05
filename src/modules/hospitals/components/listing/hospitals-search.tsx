"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui";

interface HospitalsSearchProps {
  onFilterToggle: () => void;
  onSearch: (value: string) => void;
  value?: string;
}

export function HospitalsSearch({
  onFilterToggle,
  onSearch,
  value = "",
}: HospitalsSearchProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    onSearch(inputValue);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex w-full items-center gap-2 sm:gap-3"
    >
      <div className="flex h-[50px] flex-1 items-center overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-1.5 shadow-sm transition-shadow focus-within:shadow-md sm:h-[56px] sm:rounded-[32px] sm:px-[6px]">
        <div className="flex flex-1 items-center gap-2 pl-3 sm:gap-3 sm:pl-4">
          <svg width="18" height="18" viewBox="0 0 18 18" fill="none">
            <path
              d="M16.6 18L10.3 11.7C9.8 12.1 9.225 12.4167 8.575 12.65C7.925 12.8833 7.23333 13 6.5 13C4.68333 13 3.14583 12.3708 1.8875 11.1125C0.629167 9.85417 0 8.31667 0 6.5C0 4.68333 0.629167 3.14583 1.8875 1.8875C3.14583 0.629167 4.68333 0 6.5 0C8.31667 0 9.85417 0.629167 11.1125 1.8875C12.3708 3.14583 13 4.68333 13 6.5C13 7.23333 12.8833 7.925 12.65 8.575C12.4167 9.225 12.1 9.8 11.7 10.3L18 16.6L16.6 18ZM6.5 11C7.75 11 8.8125 10.5625 9.6875 9.6875C10.5625 8.8125 11 7.75 11 6.5C11 5.25 10.5625 4.1875 9.6875 3.3125C8.8125 2.4375 7.75 2 6.5 2C5.25 2 4.1875 2.4375 3.3125 3.3125C2.4375 4.1875 2 5.25 2 6.5C2 7.75 2.4375 8.8125 3.3125 9.6875C4.1875 10.5625 5.25 11 6.5 11Z"
              fill="#4FB3AA"
            />
          </svg>
          <Input
            type="text"
            placeholder="Search for hospitals ..."
            value={inputValue}
            required
            onChange={(e) => {
              const newValue = e.target.value;
              setInputValue(newValue);
              onSearch(newValue);
            }}
            className="h-full w-full min-w-0 flex-1 truncate border-0 bg-transparent p-0 text-[14px] text-[#2D3748] ring-0 outline-none placeholder:text-[#718096]/70 focus-visible:ring-0 focus-visible:ring-offset-0 sm:text-[16px]"
          />
        </div>
        <Button
          type="submit"
          value={inputValue}
          className="h-[38px] rounded-[20px] bg-[#4FB3AA] px-4 font-bold text-white hover:bg-[#3D8F87] sm:h-[40px] sm:rounded-full"
        >
          Search
        </Button>
      </div>

      <Button
        onClick={onFilterToggle}
        type="button"
        variant="outline"
        className="flex h-[50px] w-[50px] items-center justify-center rounded-[24px] border border-[#E2E8F0] bg-white p-0 text-[#2D3748] shadow-sm hover:bg-gray-50 lg:hidden"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <polygon points="22 3 2 3 10 12.46 10 19 14 21 14 12.46 22 3" />
        </svg>
      </Button>
    </form>
  );
}
