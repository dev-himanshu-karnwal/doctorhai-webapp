import { StatusIndicator } from "@/components/ui/status-indicator";
import type {
  DepartmentCategory,
  DoctorEntry,
  HospitalEntry,
} from "../types/landing.types";

type QuickHospitalLookupProps = {
  departments: DepartmentCategory[];
  topHospitals: HospitalEntry[];
  topDoctors: DoctorEntry[];
};

export function QuickHospitalLookup({
  departments,
  topHospitals,
  topDoctors,
}: QuickHospitalLookupProps) {
  return (
    <section className="rounded-2xl border border-gray-100 bg-sky-50/80 p-6">
      <h2 className="mb-4 text-lg font-semibold text-gray-900">
        Quick Hospital Lookup
      </h2>

      <div className="mb-6 grid grid-cols-2 gap-2 sm:grid-cols-3">
        {departments.map((dept) => (
          <button
            key={dept.id}
            type="button"
            className="rounded-lg border border-gray-200 bg-white p-3 text-left text-sm font-medium text-gray-700 shadow-sm transition hover:bg-white hover:shadow"
          >
            {dept.label}
          </button>
        ))}
      </div>

      <div className="space-y-4">
        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Top Hospitals
          </h3>
          <ul className="space-y-2">
            {topHospitals.map((hospital) => (
              <li
                key={hospital.id}
                className="flex items-center justify-between rounded-lg bg-white px-3 py-2"
              >
                <span className="text-sm font-medium text-gray-900">
                  {hospital.name}
                </span>
                <StatusIndicator status={hospital.status} showLabel />
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h3 className="mb-2 text-sm font-semibold text-gray-700">
            Top Doctors
          </h3>
          <ul className="space-y-2">
            {topDoctors.map((doctor) => (
              <li
                key={doctor.id}
                className="flex items-center justify-between gap-3 rounded-lg bg-white px-3 py-2"
              >
                <div className="flex items-center gap-2">
                  <span className="flex h-8 w-8 items-center justify-center rounded-full bg-gray-200 text-xs text-gray-600">
                    {doctor.name.charAt(2)}
                  </span>
                  <div>
                    <p className="text-sm font-medium text-gray-900">
                      {doctor.name}
                    </p>
                    <p className="text-xs text-gray-500">{doctor.specialty}</p>
                  </div>
                </div>
                <StatusIndicator status={doctor.status} showLabel />
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}
