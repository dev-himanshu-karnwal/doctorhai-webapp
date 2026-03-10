"use client";

import { HospitalDetail } from "../../types/hospital-detail.types";
import { Button } from "@/components/ui";
import { useShare, useDirections } from "@/hooks";
import {
  MapPinIcon,
  PhoneIcon,
  ShareIcon,
  ArrowRightIcon,
} from "@/components/icons";

export function HospitalDetailHeader({ h }: { h: HospitalDetail }) {
  const { shareContent } = useShare();
  const { getDirections } = useDirections();

  const onShareClick = () => {
    shareContent(
      h.name,
      `Check out ${h.name} on DoctorHai`,
      window.location.href
    );
  };

  return (
    <div className="mb-8 items-start justify-between gap-6 space-y-4 md:flex md:space-y-0">
      <div className="flex-1">
        <div className="flex flex-wrap items-center gap-3">
          <h1 className="text-[28px] font-bold text-[#1A2B3D] sm:text-[36px]">
            {h.name}
          </h1>
          {/* <div className="flex items-center gap-1.5 rounded-full bg-[#F0FDF4] px-3 py-1">
            <span className="text-[10px] text-[#16A34A]">●</span>
            <span className="text-[11px] font-bold text-[#16A34A] uppercase">
              {h.availableDoctors} Available
            </span>
          </div> */}
        </div>
        <div className="mt-4 flex flex-col gap-4 text-[#718096] sm:flex-row sm:items-center">
          <div className="flex items-center gap-2">
            <MapPinIcon size={14} />
            <span className="text-[14px]">{h.address}</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#4FB3AA]">
            <PhoneIcon size={14} />
            <span className="text-[14px]">{h.phone}</span>
          </div>
        </div>
      </div>
      <div className="flex gap-3">
        <Button
          variant="outline"
          onClick={onShareClick}
          className="flex h-12 w-12 items-center justify-center rounded-full border border-gray-200 bg-white p-0 shadow-sm hover:bg-gray-50"
        >
          <ShareIcon size={20} className="text-[#2D3748]" />
        </Button>
        <Button
          className="flex h-12 items-center gap-2 rounded-full bg-[#2D3748] px-6 text-[15px] font-bold text-white hover:bg-[#1A2B3D]"
          onClick={() =>
            getDirections(h.location?.latitude, h.location?.longitude)
          }
        >
          <ArrowRightIcon size={18} strokeWidth={2.5} />
          Get Directions
        </Button>
      </div>
    </div>
  );
}
