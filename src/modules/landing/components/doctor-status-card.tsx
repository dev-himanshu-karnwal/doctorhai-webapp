import { StatusIndicator } from "@/components/ui/status-indicator";
import type { DoctorEntry } from "../types/landing.types";

type DoctorStatusCardProps = {
  doctor: DoctorEntry;
};

export function DoctorStatusCard({ doctor }: DoctorStatusCardProps) {
  return (
    <article className="flex min-w-[260px] flex-col gap-3 rounded-xl border border-gray-100 bg-white p-4 shadow-sm">
      <div className="flex items-center gap-3">
        <span className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full bg-gray-200 text-sm font-medium text-gray-600">
          {doctor.name.replace("Dr. ", "").charAt(0)}
        </span>
        <div className="min-w-0">
          <p className="truncate font-semibold text-gray-900">{doctor.name}</p>
          <p className="truncate text-sm text-gray-500">{doctor.specialty}</p>
        </div>
      </div>
      {doctor.hospitalName && (
        <p className="text-sm text-gray-600">{doctor.hospitalName}</p>
      )}
      <StatusIndicator status={doctor.status} showLabel />
    </article>
  );
}
