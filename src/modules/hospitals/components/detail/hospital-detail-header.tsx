"use client";

import { HospitalDetail } from "../../types/hospital-detail.types";
import { Button } from "@/components/ui";
import { useShare, useDirections } from "@/hooks";

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
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
              <circle cx="12" cy="10" r="3" />
            </svg>
            <span className="text-[14px]">{h.address}</span>
          </div>
          <div className="flex items-center gap-2 font-medium text-[#4FB3AA]">
            <svg
              width="14"
              height="14"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
            >
              <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
            </svg>
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
          <svg
            width="20"
            height="20"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#2D3748"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="18" cy="5" r="3" />
            <circle cx="6" cy="12" r="3" />
            <circle cx="18" cy="19" r="3" />
            <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
            <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
          </svg>
        </Button>
        <Button
          className="flex h-12 items-center gap-2 rounded-full bg-[#2D3748] px-6 text-[15px] font-bold text-white hover:bg-[#1A2B3D]"
          onClick={() =>
            getDirections(h.location?.latitude, h.location?.longitude)
          }
        >
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M2 12h16" />
            <path d="m14 6 6 6-6 6" />
          </svg>
          Get Directions
        </Button>
      </div>
    </div>
  );
}
