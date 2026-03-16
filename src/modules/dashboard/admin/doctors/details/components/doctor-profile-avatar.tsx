import { DoctorAvatarIllustration } from "../icons";
import { DoctorStatusDto } from "@/modules/doctors/types/doctors-api.types";
import { getStatusBadge } from "@/modules/dashboard/hospital/utils/status.utils";
import { StatusKind } from "@/types/common.types";

interface DoctorProfileAvatarProps {
  status?: DoctorStatusDto;
}

export const DoctorProfileAvatar = ({ status }: DoctorProfileAvatarProps) => {
  const statusKind = (status?.status || "off_duty") as StatusKind;
  const badge = getStatusBadge(statusKind);

  return (
    <div className="relative flex-shrink-0" style={{ width: 90, height: 90 }}>
      {/* Circle container for the avatar illustration */}
      <div
        className="flex h-full w-full items-end justify-center overflow-hidden rounded-full border-[3px] border-white shadow-sm"
        style={{
          background: `linear-gradient(150deg, #38bdf8 0%, ${badge.dotColor} 100%)`,
        }}
      >
        <DoctorAvatarIllustration />
      </div>

      {/* Status dynamic badge overlapping nicely at bottom center */}
      <div
        className="absolute -bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 font-bold whitespace-nowrap"
        style={{
          fontSize: "9.5px",
          background: badge.bgColor,
          color: badge.textColor,
          padding: "4px 10px",
          borderRadius: 999,
          boxShadow: "0 2px 5px rgba(0,0,0,0.05)",
          letterSpacing: "0.02em",
          border: `1px solid ${badge.dotColor}20`,
        }}
      >
        <div
          className="h-1.5 w-1.5 rounded-full"
          style={{ backgroundColor: badge.dotColor }}
        />
        {badge.text}
      </div>
    </div>
  );
};
