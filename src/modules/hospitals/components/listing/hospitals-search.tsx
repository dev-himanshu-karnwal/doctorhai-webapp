"use client";
import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { SearchIcon, FilterIcon } from "@/components/icons";
import { Input } from "@/components/ui";

interface HospitalsSearchProps {
  onFilterToggle: () => void;
  onSearch: (value: string) => void;
  onSubmit?: () => void;
  value?: string;
}

export function HospitalsSearch({
  onFilterToggle,
  onSearch,
  onSubmit,
  value = "",
}: HospitalsSearchProps) {
  const [inputValue, setInputValue] = useState(value);

  useEffect(() => {
    setInputValue(value);
  }, [value]);

  const handleSubmit = (e?: React.FormEvent) => {
    e?.preventDefault();
    if (onSubmit) {
      onSubmit();
    } else {
      onSearch(inputValue);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="mb-6 flex w-full items-center gap-2 sm:gap-3"
    >
      <div className="flex h-[50px] flex-1 items-center overflow-hidden rounded-[24px] border border-[#E2E8F0] bg-white p-1.5 shadow-sm transition-shadow focus-within:shadow-md sm:h-[56px] sm:rounded-[32px] sm:px-[6px]">
        <div className="flex flex-1 items-center gap-2 pl-3 sm:gap-3 sm:pl-4">
          <SearchIcon size={18} className="text-[#4FB3AA]" />
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
        <FilterIcon size={20} strokeWidth={2.5} />
      </Button>
    </form>
  );
}
