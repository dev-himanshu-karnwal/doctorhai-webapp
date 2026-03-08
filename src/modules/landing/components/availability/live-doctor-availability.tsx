"use client";

import Link from "next/link";
import { useDoctors } from "@/modules/doctors/hooks";
import { LiveDoctorCard } from "./live-doctor-card";
import { LiveDoctorCardSkeletonList } from "./live-doctor-card-skeleton";

type LiveDoctorAvailabilityProps = {
  viewAllHref?: string;
};

export function LiveDoctorAvailability({
  viewAllHref = "/doctors",
}: LiveDoctorAvailabilityProps) {
  const {
    data: doctorsData,
    isLoading,
    error,
  } = useDoctors({ limit: 4, isVerified: true });

  const doctors = doctorsData?.doctors || [];

  return (
    <section className="relative -mx-4 flex flex-col items-center bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-white/0 px-4 py-12 sm:-mx-6 sm:px-6 sm:py-16 lg:-mx-8 lg:px-8">
      <div className="w-full max-w-7xl">
        {/* Header Container */}
        <div className="mb-8 flex flex-col items-start justify-between gap-4 sm:flex-row sm:items-end sm:gap-6">
          <div className="w-full sm:w-auto">
            <div className="mb-2 flex items-center gap-2 sm:mb-3">
              <span className="h-[10px] w-[10px] rounded-full bg-[#4FB3AA] sm:h-[12px] sm:w-[12px]" />
              <span className="text-[12px] leading-[18px] font-bold tracking-[0.7px] text-[#3D8F87] uppercase sm:text-[14px] sm:leading-[20px]">
                Live Status Pulse
              </span>
            </div>
            <h2 className="text-[24px] leading-[30px] font-bold text-[#2D3748] sm:text-[28px] sm:leading-[36px] md:text-[30px]">
              Real-time Doctor Availability
            </h2>
          </div>
          <Link
            href={viewAllHref}
            className="group mb-1 flex items-center gap-1 text-[15px] leading-[22px] font-bold text-[#3D8F87] transition-all hover:text-[#2D3748] sm:mb-2 sm:gap-2 sm:text-[16px] sm:leading-[24px]"
          >
            View All Doctors
            <svg
              width="18"
              height="18"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="3"
              strokeLinecap="round"
              strokeLinejoin="round"
              className="h-[16px] w-[16px] transition-transform group-hover:translate-x-1 sm:h-[18px] sm:w-[18px]"
            >
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>

        {/* Horizontal Scroll with Fade Effect */}
        <div className="relative w-full">
          <div
            className="scrollbar-hide flex gap-4 overflow-x-auto pt-2 pb-6 sm:gap-6 sm:pb-8"
            style={{
              maskImage:
                "linear-gradient(to right, black 85%, transparent 100%)",
              WebkitMaskImage:
                "linear-gradient(to right, black 85%, transparent 100%)",
            }}
          >
            {isLoading ? (
              <LiveDoctorCardSkeletonList count={4} />
            ) : error ? (
              <p className="py-8 text-sm text-[#718096]">
                Could not load doctors. Please try again later.
              </p>
            ) : doctors.length === 0 ? (
              <p className="py-8 text-sm text-[#718096]">No doctors found.</p>
            ) : (
              doctors.map((doctor) => (
                <LiveDoctorCard key={doctor.id} doctor={doctor} />
              ))
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
