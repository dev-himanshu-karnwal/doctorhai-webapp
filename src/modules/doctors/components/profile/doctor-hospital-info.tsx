"use client";

import { Button } from "@/components/ui";
import { HomeIcon, ChevronRightIcon } from "@/components/icons";

interface HospitalInfo {
  name: string;
  street: string;
  city: string;
  district: string;
  state: string;
  zipcode: string;
}

interface DoctorHospitalInfoProps {
  hospital: HospitalInfo;
  onGetDirections?: () => void;
}

export function DoctorHospitalInfo({
  hospital,
  onGetDirections,
}: DoctorHospitalInfoProps) {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
      <div className="mb-5 flex items-center gap-3 sm:mb-8">
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#E0F2FE]">
          <HomeIcon size={18} className="text-[#0284C7]" />
        </div>
        <h3 className="text-[18px] font-bold text-[#1A2B3D]">Hospital Info</h3>
      </div>

      <div className="mb-5 flex-1 rounded-[16px] border border-[#E7EDF3] bg-[#F6F7F8] p-[16px] sm:mb-8 sm:rounded-[24px]">
        <p className="mb-3 text-[11px] leading-[16px] font-bold tracking-[0.6px] text-[#4E7397] uppercase sm:mb-4 sm:text-[12px]">
          {hospital.name}
        </p>
        <div className="flex flex-col gap-[10px] sm:gap-[12px]">
          {[
            { label: "Street:", value: hospital.street },
            { label: "City:", value: hospital.city },
            { label: "District:", value: hospital.district },
            { label: "State:", value: hospital.state },
            { label: "Zipcode:", value: hospital.zipcode },
          ].map((item) => (
            <div key={item.label} className="grid grid-cols-[80px_1fr]">
              <span className="text-[14px] leading-[20px] font-medium tracking-[0px] text-[#4E7397]">
                {item.label}
              </span>
              <span className="text-[14px] leading-[20px] font-medium tracking-[0px] text-[#0E141B]">
                {item.value}
              </span>
            </div>
          ))}
        </div>
      </div>

      <Button
        onClick={onGetDirections}
        className="h-[46px] w-full gap-2 rounded-[16px] border border-[#E7EDF3] bg-[#F6F7F8] px-[16px] text-[14px] leading-[20px] font-bold tracking-[0px] text-[#0E141B] shadow-none hover:bg-[#E2E8F0]"
      >
        <ChevronRightIcon size={18} />
        Get Directions
      </Button>
    </div>
  );
}
