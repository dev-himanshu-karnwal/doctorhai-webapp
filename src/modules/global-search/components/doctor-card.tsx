import { Doctor } from "../types/search.types";
import { Button } from "@/components/ui";
import Image from "next/image";
import { cn } from "@/lib/cn";
import Link from "next/link";
import { getStatusBadge } from "@/modules/dashboard/hospital/utils/status.utils";
import { StatusKind } from "@/types/common.types";

interface DoctorCardProps {
  doctor: Doctor;
}

export function DoctorCard({ doctor }: DoctorCardProps) {
  const statusStr =
    typeof doctor.status === "string"
      ? doctor.status
      : (doctor.status as any)?.status;
  const config = getStatusBadge(statusStr as StatusKind);

  return (
    <div className="group relative flex flex-col rounded-[24px] border border-gray-50 bg-white p-5 shadow-[0_4px_20px_rgba(0,0,0,0.03)] transition-all hover:shadow-[0_20px_40px_rgba(0,0,0,0.06)] sm:rounded-[32px] sm:p-6">
      {/* Top Section: Avatar and Status Badge */}
      <div className="flex items-start justify-between">
        <div className="relative h-[60px] w-[60px] shrink-0 overflow-hidden rounded-full ring-2 ring-gray-50 sm:h-[72px] sm:w-[72px]">
          <Image
            src={
              doctor.image && doctor.image !== "string"
                ? doctor.image
                : "https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150"
            }
            alt={doctor.name}
            fill
            className="object-cover"
          />
        </div>

        {/* Status Badge */}
        <div
          className={cn(
            "flex h-[24px] items-center gap-[6px] rounded-full border px-[10px] py-[2px] text-[11px] leading-[16px] font-bold tracking-[0px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all sm:h-[26px] sm:px-[12px] sm:py-[4px] sm:text-[12px]"
          )}
          style={{
            backgroundColor: config.bgColor,
            color: config.textColor,
            borderColor: config.dotColor + "40",
          }}
        >
          <div
            className="h-1.5 w-1.5 rounded-full"
            style={{ backgroundColor: config.dotColor }}
          />
          {doctor.statusDetail || config.text}
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
      </div>

      {/* Action Button */}
      <div className="mt-auto pt-6 sm:mt-10 sm:pt-0">
        <Link href={`/doctors/${doctor.id}`} className="block w-full">
          <Button
            variant="outline"
            className="h-[44px] w-full rounded-[24px] border-2 border-[#F1F5F9] bg-white text-[13px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] transition-all hover:border-gray-200 hover:bg-gray-50 active:scale-95 sm:h-[48px] sm:text-[14px]"
          >
            View Details
          </Button>
        </Link>
      </div>
    </div>
  );
}
