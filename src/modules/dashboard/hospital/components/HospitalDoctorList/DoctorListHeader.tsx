import React from "react";
import { UsersIcon, SearchIcon, PlusIcon } from "../HospitalIcons";
import { Input, Button } from "@/components/ui";

interface DoctorListHeaderProps {
  searchQuery: string;
  onSearchChange: (query: string) => void;
  themeColor: string;
  onAddDoctor: () => void;
}

const DoctorListHeader: React.FC<DoctorListHeaderProps> = ({
  searchQuery,
  onSearchChange,
  themeColor,
  onAddDoctor,
}) => {
  return (
    <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-center xl:gap-0">
      <div className="flex items-center gap-3">
        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f6f3]">
          <UsersIcon className="h-5 w-5 text-[#4ab4a5]" />
        </div>
        <h2 className="text-[20px] font-bold text-[#1e293b] sm:text-[22px]">
          Manage Doctors
        </h2>
      </div>

      <div className="flex w-full flex-col items-center gap-4 sm:flex-row xl:w-auto">
        {/* Search Bar */}
        <div className="relative w-full sm:w-auto sm:flex-1 md:w-[320px]">
          <div className="pointer-events-none absolute inset-y-0 left-0 flex items-center pl-4">
            <SearchIcon className="h-4 w-4 text-[#94a3b8]" />
          </div>
          <Input
            type="text"
            placeholder="Search doctor..."
            value={searchQuery}
            onChange={(e) => onSearchChange(e.target.value)}
            className="rounded-full border-[#e2e8f0] bg-[#fbfcfd] pl-11 placeholder:text-[#cbd5e1]"
          />
        </div>

        {/* Add Doctor Button */}
        <Button
          onClick={onAddDoctor}
          className="w-full rounded-full px-6 font-bold shadow-sm sm:w-auto"
          style={{ backgroundColor: themeColor }}
        >
          <PlusIcon className="h-4 w-4" />
          <span>Add Doctor</span>
        </Button>
      </div>
    </div>
  );
};

export default DoctorListHeader;
