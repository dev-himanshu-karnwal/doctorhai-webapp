import { StatusIndicator } from "@/components/ui/status-indicator";
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
    <section>
      <div className="mb-4 flex flex-wrap items-center justify-between gap-2">
        <div>
          <div className="mb-1 flex items-center gap-2">
            <StatusIndicator status="available" size="sm" />
            <span className="text-sm font-medium text-gray-600">
              Live Status Pulse
            </span>
          </div>
          <h2 className="text-2xl font-bold text-gray-900">
            Real-time Doctor Availability
          </h2>
        </div>
        <a
          href={viewAllHref}
          className="text-sm font-medium text-teal-600 hover:underline"
        >
          View All Departments →
        </a>
      </div>
      <div className="flex gap-4 overflow-x-auto pb-2">
        {doctors.map((doctor) => (
          <DoctorStatusCard key={doctor.id} doctor={doctor} />
        ))}
      </div>
    </section>
  );
}
