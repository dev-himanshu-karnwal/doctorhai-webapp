import Image from "next/image";
import Link from "next/link";
import type { Doctor } from "../../types";
import { getStatusConfig } from "./doctor-status-config";
import { Button } from "@/components/ui";

type DoctorStatusCardProps = {
  doctor: Doctor;
};

export function DoctorStatusCard({ doctor }: DoctorStatusCardProps) {
  const config = getStatusConfig(doctor.status?.status ?? "available");

  // Format the expected time natively, or fallback to exactly "0" when null, as requested
  const formatTime = (isoString?: string | null) => {
    if (!isoString) return "0";
    try {
      const date = new Date(isoString);
      return date.toLocaleTimeString([], {
        hour: "numeric",
        minute: "2-digit",
      });
    } catch {
      return "0";
    }
  };

  return (
    <article className="flex h-full flex-col justify-between gap-5 rounded-[32px] bg-white p-6 shadow-sm ring-1 ring-gray-100 transition-all hover:shadow-md">
      {/* Top Section */}
      <div className="flex items-start justify-between">
        <div className="relative h-[68px] w-[68px] flex-shrink-0 overflow-hidden rounded-full ring-4 ring-rose-50 ring-offset-0">
          <Image
            src={
              doctor.profilePhotoUrl ||
              `https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.fullName}&background=%23f0fdf4`
            }
            alt={doctor.fullName}
            fill
            className="bg-teal-50 object-cover"
            unoptimized
          />
        </div>
        <div
          className={`flex items-center gap-1.5 rounded-full px-3 py-1.5 text-[12px] font-bold ${config.barBg} ${config.barText}`}
        >
          {config.footerIcon}
          <span>{config.label}</span>
        </div>
      </div>

      {/* Middle Section */}
      <div className="mt-2 text-left">
        <h3 className="text-[20px] font-bold tracking-tight text-[#2D3748]">
          {doctor.fullName}
        </h3>
        <p className="mt-1 text-[14px] font-medium text-[#4FB3AA]">
          {doctor.specialization || "General"} •{" "}
          {doctor.hasExperience ? "10+" : "0"} years exp.
        </p>

        <div className="mt-5 flex items-center gap-2 rounded-2xl bg-[#F8FAFC] px-4 py-3 text-left">
          <svg
            width="16"
            height="16"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="shrink-0"
          >
            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
            <circle cx="12" cy="10" r="3" />
          </svg>
          <span className="truncate text-[13px] font-medium text-[#718096]">
            {doctor.designation || "General Hospital"}
          </span>
        </div>
      </div>

      {/* Bottom Section */}
      <div className="mt-auto flex flex-col gap-3">
        <div className="flex w-full items-center justify-center rounded-2xl bg-[#F8FAFC] py-3.5 text-[14px] font-bold text-[#64748B]">
          Available at: {formatTime(doctor.status?.expectedAt)}
        </div>

        <Link
          href={`/doctors/${doctor.id}${doctor.slug ? `?name=${doctor.slug}` : ""}`}
          className="block w-full"
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
    </article>
  );
}
