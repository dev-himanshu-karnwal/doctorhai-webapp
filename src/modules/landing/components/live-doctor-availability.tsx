import { DoctorStatusCard } from "./doctor-status-card";
import type { DoctorEntry } from "../types/landing.types";

type LiveDoctorAvailabilityProps = {
  doctors: DoctorEntry[];
  viewAllHref?: string;
};

export function LiveDoctorAvailability({
  doctors,
  viewAllHref = "#",
}: LiveDoctorAvailabilityProps) {
  return (
    <section className="relative -mx-4 bg-gradient-to-br from-[#FAF5FF] via-[#EFF6FF] to-white/0 px-4 py-16 lg:-mx-8 lg:px-8">
      {/* Header Container */}
      <div className="mb-10 flex flex-wrap items-end justify-between gap-6">
        <div>
          <div className="mb-3 flex items-center gap-2">
            <span className="h-[12px] w-[12px] rounded-full bg-[#4FB3AA]" />
            <span className="text-[14px] leading-[20px] font-bold tracking-[0.7px] text-[#3D8F87] uppercase">
              Live Status Pulse
            </span>
          </div>
          <h2 className="text-[30px] leading-[36px] font-bold text-[#2D3748]">
            Real-time Doctor Availability
          </h2>
        </div>
        <a
          href={viewAllHref}
          className="group mb-2 flex items-center gap-2 text-[16px] leading-[24px] font-bold text-[#3D8F87] transition-all hover:text-[#2D3748]"
        >
          View All Departments
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="3"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="transition-transform group-hover:translate-x-1"
          >
            <path d="M5 12h14M12 5l7 7-7 7" />
          </svg>
        </a>
      </div>

      {/* Horizontal Scroll with Fade Effect */}
      <div className="relative">
        <div
          className="scrollbar-hide -mx-4 flex gap-6 overflow-x-auto px-4 pb-8 lg:-mx-8 lg:px-8"
          style={{
            maskImage: "linear-gradient(to right, black 85%, transparent 100%)",
            WebkitMaskImage:
              "linear-gradient(to right, black 85%, transparent 100%)",
          }}
        >
          {doctors.map((doctor) => (
            <DoctorStatusCard key={doctor.id} doctor={doctor} />
          ))}
        </div>
      </div>
    </section>
  );
}
