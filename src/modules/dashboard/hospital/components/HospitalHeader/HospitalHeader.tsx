import React from "react";
import { HospitalHeaderProps } from "../../types/hospital.types";
import { MapPinIcon } from "@/components/icons";

const HospitalHeader: React.FC<HospitalHeaderProps> = ({
  hospitalName,
  address,
  availableCount,
  totalCount,
  themeColor,
  lastUpdated = "Just now",
}) => {
  return (
    <div
      className="mb-6 flex flex-col items-center justify-between gap-8 bg-white px-5 py-7 sm:px-6 md:mb-8 md:flex-row md:gap-0 md:px-10 md:py-8"
      style={{
        borderRadius: 32,
        boxShadow: "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      {/* Left Side: Hospital Info */}
      <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
        <div className="flex items-center">
          <div
            className="flex items-center justify-center rounded-full px-3 py-1 font-bold tracking-wider uppercase"
            style={{
              backgroundColor: "#e8f6f3",
              color: themeColor,
              fontSize: "9px",
            }}
          >
            DASHBOARD
          </div>
          <div className="mx-3 text-[14px] text-[#cbd5e1]">•</div>
          <div className="text-[12px] font-medium text-[#94a3b8]">
            Last updated: {lastUpdated}
          </div>
        </div>

        <h1 className="mt-1 text-[26px] leading-tight font-bold tracking-tight text-[#1e293b] sm:text-[28px] md:text-[34px]">
          {hospitalName}
        </h1>

        <div className="mt-2 flex flex-col items-center gap-1.5 text-[#64748b] md:flex-row">
          <MapPinIcon className="h-4 w-4 shrink-0 text-[#4ab4a5]" />
          <span className="text-[13px] font-medium text-[#94a3b8] sm:text-[13.5px]">
            {address}
          </span>
        </div>
      </div>

      {/* Right Side: Stats */}
      <div className="flex w-full justify-center gap-4 md:w-auto">
        {/* Doctors Available */}
        <div
          className="flex h-[100px] flex-1 flex-col items-center justify-center gap-1 sm:h-[130px] md:w-[150px]"
          style={{ backgroundColor: "#eef8f6", borderRadius: 28 }}
        >
          <span
            className="text-[32px] leading-none font-bold tracking-tight sm:text-[44px]"
            style={{ color: themeColor }}
          >
            {availableCount}
          </span>
          <span className="mt-1 px-2 text-center text-[8px] font-extrabold tracking-widest text-[#79a69d] uppercase sm:text-[9px]">
            Doctors Available
          </span>
        </div>
        {/* Total Doctors */}
        <div
          className="flex h-[100px] flex-1 flex-col items-center justify-center gap-1 sm:h-[130px] md:w-[150px]"
          style={{ backgroundColor: "#f8fafc", borderRadius: 28 }}
        >
          <span className="text-[32px] leading-none font-bold tracking-tight text-[#1e293b] sm:text-[44px]">
            {totalCount}
          </span>
          <span className="mt-1 text-[8px] font-extrabold tracking-widest text-[#94a3b8] uppercase sm:text-[9px]">
            Total Doctors
          </span>
        </div>
      </div>
    </div>
  );
};

export default HospitalHeader;
