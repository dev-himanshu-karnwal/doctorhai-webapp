import { DoctorProfileAvatar } from "./doctor-profile-avatar";
import { DoctorStatusDto } from "@/modules/doctors/types/doctors-api.types";
import { StatusKind } from "@/types/common.types";

interface ProfileHeaderProps {
  name: string;
  designation?: string;
  specialization?: string;
  status?: DoctorStatusDto;
}

export const ProfileHeader = ({
  name,
  designation,
  specialization,
  status,
}: ProfileHeaderProps) => {
  return (
    <div className="flex flex-col gap-6 px-4 pt-7 pb-6 sm:px-8 lg:flex-row lg:items-start lg:justify-between">
      <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
        <DoctorProfileAvatar status={status} />
        <div className="flex flex-col gap-3">
          <div>
            <h1 className="mb-0.5 text-[22px] font-bold tracking-tight text-[#0f172a] sm:text-[25px]">
              {name}
            </h1>
            <div className="flex items-center gap-2 text-[14px] font-medium text-[#64748b]">
              <span>{designation || "General Doctor"}</span>
              {specialization && (
                <>
                  <span className="h-1 w-1 rounded-full bg-[#cbd5e1]" />
                  <span className="text-[#3b82f6]">{specialization}</span>
                </>
              )}
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center gap-2 lg:items-end">
        {status?.expectedAt && (
          <div className="flex items-center gap-2 rounded-lg border border-[#f1f5f9] bg-[#f8fafc] px-3 py-2">
            <span className="text-[12px] font-medium text-[#64748b]">
              Expected at:
            </span>
            <span className="text-[12px] font-bold text-[#0f172a]">
              {new Date(status.expectedAt).toLocaleTimeString([], {
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
        )}
        {status?.expectedAtNote && (
          <div className="max-w-[200px] text-right text-[11px] text-[#94a3b8] italic">
            "{status.expectedAtNote}"
          </div>
        )}
      </div>
    </div>
  );
};
