import { Doctor } from "../types/search.types";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import { cn } from "@/lib/cn";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const isAvailable = doctor.status === "available";
  const isBusy = doctor.status === "busy";
  const isOnBreak = doctor.status === "on-break";

  return (
    <div className="group relative flex flex-col rounded-[24px] border border-gray-50 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-6">
      {/* Top Section: Avatar and Status Badge */}
      <div className="flex items-start justify-between">
        <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full ring-2 ring-gray-50 sm:h-[72px] sm:w-[72px]">
          <Image
            src={doctor.image}
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Status Badge */}
        <div
          className={cn(
            "flex h-[24px] items-center gap-[6px] rounded-full border px-[10px] py-[2px] text-[11px] leading-[16px] font-bold tracking-[0px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all sm:h-[26px] sm:px-[12px] sm:py-[4px] sm:text-[12px]",
            isAvailable && "border-[#BBF7D0] bg-[#DCFCE7] text-[#15803D]",
            isBusy && "border-[#FEE2E2] bg-[#FEF2F2] text-[#DC2626]",
            isOnBreak && "border-[#FFEDD5] bg-[#FFF7ED] text-[#EA580C]"
          )}
        >
          <div
            className={cn(
              "h-1.5 w-1.5 rounded-full",
              isAvailable && "bg-[#15803D]",
              isBusy && "bg-[#DC2626]",
              isOnBreak && "bg-[#EA580C]"
            )}
          />
          {doctor.statusDetail ||
            doctor.status.charAt(0).toUpperCase() +
              doctor.status.slice(1).replace("-", " ")}
        </div>
      </div>

      {/* Doctor Info */}
      <div className="mt-3 flex flex-col sm:mt-4">
        <h3 className="line-clamp-2 text-[18px] leading-[24px] font-bold tracking-[0px] text-[#2D3748] sm:text-[20px] sm:leading-[28px]">
          {doctor.name}
        </h3>
        <p className="mb-[10px] text-[13px] leading-[18px] font-medium tracking-[0px] text-[#3D8F87] sm:mb-[12px] sm:text-[14px] sm:leading-[20px]">
          {doctor.specialty} • {doctor.experience} years exp.
        </p>

        {/* Location Pill */}
        <div className="mb-[12px] flex h-[36px] w-full items-center gap-[6px] rounded-[20px] bg-[#F8FAFC] px-[10px] py-[8px] sm:mb-[16px] sm:h-[40px] sm:gap-[8px] sm:rounded-[24px] sm:py-[10px]">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#A0AEC0"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0 sm:h-[18px] sm:w-[18px]"
          >
            <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="truncate text-[13px] leading-[18px] font-normal tracking-[0px] text-[#718096] sm:text-[14px] sm:leading-[20px]">
            {doctor.location}
          </span>
        </div>
      </div>

      {/* Action Button */}
      <div className="mt-auto pt-6 sm:mt-10 sm:pt-0">
        {isAvailable ? (
          <Button className="h-[44px] w-full rounded-[24px] bg-[#2D3748] px-[32px] py-[12px] text-[14px] leading-[20px] font-bold tracking-[0px] text-white shadow-lg transition-all hover:bg-[#1e293b] active:scale-95 sm:px-[55px]">
            Book Appointment
          </Button>
        ) : (
          <Button
            disabled
            className="h-[44px] w-full cursor-not-allowed rounded-[24px] bg-gray-100 px-[32px] py-[12px] text-[14px] leading-[20px] font-bold tracking-[0px] text-gray-400 sm:px-[55px]"
          >
            {isBusy ? "Next: 12:45 PM" : "On Break"}
          </Button>
        )}
      </div>
    </div>
  );
}
