"use client";

import { Hospital } from "../../types/hospital.types";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { HospitalIcon } from "./hospital-icon";
import { SpecialtyPill } from "./specialty-pill";

export function HospitalCard({ hospital }: { hospital: Hospital }) {
  return (
    <div className="flex w-full flex-col rounded-[20px] border border-[#F1F5F9] bg-white p-4 shadow-sm transition-all hover:shadow-md sm:rounded-[24px] sm:p-5">
      <div className="mb-4 flex items-start gap-3">
        <HospitalIcon
          type={hospital.iconType}
          color={hospital.iconColor}
          bgColor={hospital.iconBgColor}
        />
        <div className="min-w-0 flex-1">
          <h3 className="text-[16px] font-bold text-[#2D3748] sm:text-[18px]">
            {hospital.name}
          </h3>
          <div className="flex items-center gap-1.5 text-[12px] text-[#718096]">
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
            <span className="truncate">
              {hospital.distance} • {hospital.type}
            </span>
          </div>
        </div>
      </div>
      <div className="mb-5 space-y-2">
        <p className="text-[11px] font-bold tracking-wider text-[#94A3B8] uppercase">
          Top Specialties
        </p>
        <div className="flex flex-wrap gap-1.5">
          {hospital.specialties.map((s) => (
            <SpecialtyPill key={s.name} name={s.name} color={s.color} />
          ))}
        </div>
      </div>

      <Link href={`/hospitals/${hospital.id}`} className="mt-auto">
        <Button
          variant={hospital.featured ? "primary" : "outline"}
          className="group h-[44px] w-full rounded-full font-bold transition-all hover:border-[#2D3748] hover:bg-[#2D3748] hover:text-white active:scale-[0.98]"
          style={
            hospital.featured
              ? {
                  backgroundColor: "#2D3748",
                  borderColor: "#2D3748",
                  color: "white",
                }
              : {}
          }
        >
          View Details{" "}
          <span
            className={
              hospital.featured ? "ml-1" : "ml-1 hidden group-hover:inline"
            }
          >
            →
          </span>
        </Button>
      </Link>
    </div>
  );
}
