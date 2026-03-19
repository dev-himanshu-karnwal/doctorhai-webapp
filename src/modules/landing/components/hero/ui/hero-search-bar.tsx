"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { Input } from "@/components/ui";
import { Button } from "@/components/ui";
import { SearchIcon } from "@/components/icons";

export function HeroSearchBar() {
  const [search, setSearch] = useState("");
  const router = useRouter();

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    if (search.trim()) {
      router.push(`/search?search=${encodeURIComponent(search.trim())}`);
    } else {
      router.push("/search");
    }
  };

  return (
    <form
      onSubmit={handleSearch}
      className="flex w-full max-w-[500px] items-center rounded-full bg-white p-1.5 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.05)] ring-1 ring-black/[0.03] sm:p-[6px]"
    >
      <div className="flex flex-1 items-center gap-2 px-2 sm:gap-2.5 sm:px-3">
        <SearchIcon
          size={18}
          className="h-4 w-4 text-[#4FB3AA] sm:h-[18px] sm:w-[18px]"
        />

        <Input
          type="search"
          placeholder="Search for a hospital or clinic..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="h-9 border-0 bg-transparent p-0 text-[13px] font-medium text-[#2D3748] shadow-none placeholder:text-[#A0AEC0] focus-visible:ring-0 focus-visible:ring-offset-0 sm:h-10 sm:text-[14px]"
        />
      </div>
      <Button
        type="submit"
        className="shrink-0 rounded-full bg-[#4FB3AA] px-[28px] py-[10px] text-[14px] font-bold text-white transition-all hover:bg-[#3d8f87] hover:shadow-lg active:scale-95"
      >
        Find
      </Button>
    </form>
  );
}
