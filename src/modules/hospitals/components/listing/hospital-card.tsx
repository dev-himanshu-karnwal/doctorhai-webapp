"use client";

import Link from "next/link";
import Image from "next/image";
import { Hospital } from "../../types/hospital.types";
import { Button } from "@/components/ui";
import { useDistance } from "@/hooks";

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  const distanceText = useDistance(hospital.location);
  return (
    <div className="flex w-full flex-col rounded-[20px] border border-[#F1F5F9] bg-white p-4 shadow-sm transition-all hover:shadow-md sm:rounded-[24px] sm:p-5">
      <div className="mb-4 flex items-start gap-3">
        <div className="relative h-[48px] w-[48px] flex-shrink-0 overflow-hidden rounded-full border border-gray-100">
          <Image
            src={hospital.coverPhotoUrl ?? "/images/hospital.jpg"}
            alt={hospital.name}
            fill
            className="h-full w-full object-cover"
          />
        </div>
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold text-[#2D3748] sm:text-[18px]">
            {hospital.name}
          </h3>
          <div className="flex items-center gap-1.5 text-[12px] text-[#718096]">
            {hospital.type && (
              <>
                <svg
                  width="12"
                  height="12"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>
                  {distanceText} {hospital.type && `• ${hospital.type}`}
                </span>
              </>
            )}
          </div>
        </div>
      </div>
      {hospital.specialist.length > 0 && (
        <div className="mb-5 space-y-2">
          <p className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase">
            Top Specialties
          </p>
          <div className="flex flex-wrap gap-1.5">
            {hospital.specialist?.slice(0, 3).map((s) => (
              <span
                key={s}
                className="rounded-full bg-[#F1F5F9] px-[10px] py-[4px] text-[12px] leading-[16px] font-medium text-[#475569]"
              >
                {s}
              </span>
            ))}
          </div>
        </div>
      )}

      <Link
        href={`/hospitals/${hospital.id}${hospital.slug ? `?name=${hospital.slug}` : ""}`}
        className="mt-auto"
      >
        <Button
          variant="outline"
          className="group h-[44px] w-full rounded-full font-bold transition-all hover:border-[#2D3748] hover:bg-[#2D3748] hover:text-white active:scale-[0.98]"
        >
          View Details
          <span className="ml-1">→</span>
        </Button>
      </Link>
    </div>
  );
}
