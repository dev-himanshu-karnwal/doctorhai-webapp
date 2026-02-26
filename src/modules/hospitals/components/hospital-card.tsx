import { Hospital, IconType, SpecialtyColor } from "../types/hospital.types";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/cn";
import Link from "next/link";

interface HospitalCardProps {
  hospital: Hospital;
}

function HospitalIcon({
  type,
  color,
  bgColor,
}: {
  type: IconType;
  color: string;
  bgColor: string;
}) {
  const icons: Record<IconType, React.ReactNode> = {
    building: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="2" />
        <path d="M9 3v18" />
        <path d="M3 9h18" />
        <path d="M12 6v3" />
        <path d="M12 12v3" />
        <path d="M6 12h3" />
        <path d="M15 12h3" />
      </svg>
    ),
    heart: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill={color}
        stroke={color}
        strokeWidth="1.5"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z" />
      </svg>
    ),
    smile: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <circle cx="12" cy="12" r="10" />
        <path d="M8 14s1.5 2 4 2 4-2 4-2" />
        <line x1="9" y1="9" x2="9.01" y2="9" strokeWidth="3" />
        <line x1="15" y1="9" x2="15.01" y2="9" strokeWidth="3" />
      </svg>
    ),
    brain: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 5C8.5 5 6 7.5 6 10c0 1.5.5 2.8 1.5 3.8" />
        <path d="M12 5c3.5 0 6 2.5 6 5 0 1.5-.5 2.8-1.5 3.8" />
        <path d="M8 10c0-2.2 1.8-4 4-4s4 1.8 4 4" />
        <path d="M8 10c-1.1 0-2 .9-2 2s.9 2 2 2" />
        <path d="M16 10c1.1 0 2 .9 2 2s-.9 2-2 2" />
        <path d="M12 19v-5" />
        <path d="M8 14c0 2.8 1.8 5 4 5s4-2.2 4-5" />
      </svg>
    ),
    tooth: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M12 4C9 4 6 6 6 9c0 1.5.5 2.5 1 3.5L8 19c.3 1.1 1 2 2 2s1.7-.9 2-2l.5-3 .5 3c.3 1.1 1 2 2 2s1.7-.9 2-2l1-6.5c.5-1 1-2 1-3.5C19 6 16 4 12 4z" />
        <path d="M9 4c0-1.1.9-2 2-2" />
        <path d="M13 2c1.1 0 2 .9 2 2" />
      </svg>
    ),
    cross: (
      <svg
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke={color}
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <rect x="3" y="3" width="18" height="18" rx="3" />
        <path d="M12 8v8" />
        <path d="M8 12h8" />
      </svg>
    ),
  };

  return (
    <div
      className="flex h-[48px] w-[48px] shrink-0 items-center justify-center rounded-[32px]"
      style={{ backgroundColor: bgColor }}
    >
      {icons[type]}
    </div>
  );
}

function SpecialtyPill({
  name,
  color = "default",
}: {
  name: string;
  color?: SpecialtyColor;
}) {
  const colorMap: Record<SpecialtyColor, string> = {
    default: "bg-[#F1F5F9] text-[#475569]",
    teal: "bg-[#CCFBF1] text-[#0D9488]",
    purple: "bg-[#EDE9FE] text-[#7C3AED]",
    amber: "bg-[#FEF3C7] text-[#B45309]",
  };
  return (
    <span
      className={cn(
        "rounded-full px-[10px] py-[4px] text-[12px] leading-[16px] font-medium",
        colorMap[color]
      )}
    >
      {name}
    </span>
  );
}

function getWaitTimeColor(minutes: number): string {
  if (minutes <= 20) return "text-[#3D8F87]";
  if (minutes <= 35) return "text-[#D97706]";
  return "text-[#DC2626]";
}

function getWaitTimeBg(minutes: number): string {
  if (minutes <= 20) return "bg-[#F2F9F8]";
  if (minutes <= 35) return "bg-[#FFF7ED]";
  return "bg-[#FEF2F2]";
}

function getProgressColor(minutes: number): string {
  if (minutes <= 20) return "bg-[#22C55E]";
  if (minutes <= 35) return "bg-[#F59E0B]";
  return "bg-[#EF4444]";
}

function getProgressWidth(minutes: number): string {
  const pct = Math.min((minutes / 50) * 100, 100);
  if (pct === 0) return "4%";
  return `${pct}%`;
}

export function HospitalCard({ hospital }: HospitalCardProps) {
  const waitColor = getWaitTimeColor(hospital.waitTimeMinutes);
  const waitBg = getWaitTimeBg(hospital.waitTimeMinutes);
  const progressColor = getProgressColor(hospital.waitTimeMinutes);
  const progressWidth = getProgressWidth(hospital.waitTimeMinutes);

  return (
    <div className="flex w-full flex-col rounded-[20px] border border-[#F1F5F9] bg-white p-4 shadow-[0_2px_12px_rgba(0,0,0,0.04)] transition-all hover:shadow-[0_8px_24px_rgba(0,0,0,0.08)] sm:rounded-[24px] sm:p-5">
      {/* Header */}
      <div className="mb-3 flex items-start justify-between gap-2 sm:mb-4">
        <div className="flex items-start gap-2 sm:items-center sm:gap-3">
          <div className="mt-0.5 sm:mt-0">
            <HospitalIcon
              type={hospital.iconType}
              color={hospital.iconColor}
              bgColor={hospital.iconBgColor}
            />
          </div>
          <div>
            <h3 className="line-clamp-2 text-[16px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] sm:line-clamp-none sm:text-[18px] sm:leading-[22.5px]">
              {hospital.name}
            </h3>
            <div className="mt-1 flex flex-wrap items-center gap-1 sm:mt-0.5">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#94A3B8"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0 sm:h-[13px] sm:w-[13px]"
              >
                <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                <circle cx="12" cy="10" r="3" />
              </svg>
              <span className="max-w-[120px] truncate text-[11px] leading-[14px] font-normal tracking-[0px] text-[#718096] sm:max-w-none sm:text-[12px] sm:leading-[16px]">
                {hospital.distance} • {hospital.type}
              </span>
            </div>
          </div>
        </div>

        {/* Status Badge */}
        {/* {hospital.status === "online" && hospital.onlineCount && (
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#F0FDF4] px-[10px] py-[4px] text-[11px] font-bold text-[#16A34A]">
            <span className="text-[16px] leading-none">●</span>
            <span>{hospital.onlineCount}</span>
            <span>Online</span>
          </div>
        )} */}
        {/* {hospital.status === "busy" && (
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#FEF2F2] px-[10px] py-[4px] text-[11px] font-bold text-[#DC2626]">
            <span className="text-[14px] leading-none">●</span>
            <span>Busy</span>
          </div>
        )}
        {hospital.status === "limited" && (
          <div className="flex shrink-0 items-center gap-1 rounded-full bg-[#FFF7ED] px-[10px] py-[4px] text-[11px] font-bold text-[#D97706]">
            <span className="text-[14px] leading-none">●</span>
            <span>Limited</span>
          </div>
        )} */}
      </div>

      {/* Wait Time */}
      <div className="mb-3 sm:mb-4">
        <div className="mb-2 flex flex-wrap items-center justify-between gap-2 sm:flex-nowrap">
          <span className="text-[13px] leading-[18px] font-normal tracking-[0px] text-[#718096] sm:text-[14px] sm:leading-[20px]">
            Avg. Wait Time
          </span>
          <span
            className={cn(
              "flex h-[22px] items-center rounded-[8px] px-[8px] py-[2px] text-[13px] leading-[18px] font-bold tracking-[0px] sm:h-[24px] sm:text-[14px] sm:leading-[20px]",
              waitColor,
              waitBg
            )}
          >
            {hospital.avgWaitTime}
          </span>
        </div>
        <div className="h-[6px] w-full overflow-hidden rounded-full bg-[#F1F5F9]">
          <div
            className={cn("h-full rounded-full transition-all", progressColor)}
            style={{ width: progressWidth }}
          />
        </div>
      </div>

      {/* Specialties */}
      <div className="mb-5">
        <p className="mb-2 text-[12px] leading-[16px] font-bold tracking-[0.3px] text-[#2D3748] uppercase">
          Top Specialties Available
        </p>
        <div className="flex flex-wrap gap-1.5">
          {hospital.specialties.map((s) => (
            <SpecialtyPill key={s.name} name={s.name} color={s.color} />
          ))}
        </div>
      </div>

      {/* Action Button */}
      {hospital.featured ? (
        <Link href={`/hospitals/${hospital.id}`} className="w-full">
          <Button className="h-[44px] w-full rounded-[24px] bg-[#2D3748] py-[12px] text-[14px] leading-[20px] font-bold tracking-[0px] text-white transition-all hover:bg-[#374151] active:scale-95">
            View Details →
          </Button>
        </Link>
      ) : (
        <Link href={`/hospitals/${hospital.id}`} className="w-full">
          <Button
            variant="outline"
            className="h-[44px] w-full rounded-[24px] border border-[#E2E8F0] bg-white text-[14px] leading-[20px] font-bold tracking-[0px] text-[#2D3748] transition-all hover:bg-gray-50 active:scale-95"
          >
            View Details
          </Button>
        </Link>
      )}
    </div>
  );
}
