import { useRouter } from "next/navigation";
import {
  ShieldCheckIcon,
  MapPinIcon,
  ClockIcon,
  MonitorIcon,
} from "@/components/icons";
import { Button } from "@/components/ui";
import { useTimeAgo } from "@/hooks/use-time-ago";

interface HospitalCardProps {
  id: string;
  type: "hospital" | "doctor";
  initial: string;
  name: string;
  location: string;
  createdAt?: string;
  topBorder: string;
  avatarBg: string;
  avatarTextColor: string;
  badgeColor: string;
  clockColor: string;
}

export function HospitalCard({
  id,
  type,
  initial,
  name,
  location,
  createdAt,
  topBorder,
  avatarBg,
  avatarTextColor,
  badgeColor,
  clockColor,
}: HospitalCardProps) {
  const timeAgo = useTimeAgo(createdAt);
  const router = useRouter();

  const handleReviewClick = () => {
    const path =
      type === "hospital"
        ? `/dashboard/admin/hospitals/${id}`
        : `/dashboard/admin/doctors/${id}`;
    router.push(path);
  };
  return (
    <div
      className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
      style={{
        border: "1px solid #F1F5F9",
        borderTop: `4px solid ${topBorder}`,
      }}
    >
      {/* Card body — avatar, name, location */}
      <div className="flex flex-1 flex-col items-center px-6 pt-8 pb-6 text-center">
        {/* Avatar */}
        <div className="relative mb-4 h-[90px] w-[90px]">
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{ backgroundColor: avatarBg }}
          >
            <span
              className="text-[38px] leading-none font-extrabold"
              style={{ color: avatarTextColor }}
            >
              {initial}
            </span>
          </div>
          {/* Shield badge */}
          <div className="absolute right-0 bottom-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
            <ShieldCheckIcon className="h-4 w-4" color={badgeColor} />
          </div>
        </div>

        {/* Name */}
        <h3 className="mb-1 text-[20px] font-bold text-[#1A202C]">{name}</h3>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-gray-400">
          <MapPinIcon className="h-[13px] w-[13px]" />
          <span className="text-[13px]">{location}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />

      {/* Time in Queue */}
      <div className="flex flex-col items-center px-5 py-5">
        <p
          className="mb-3 font-bold tracking-widest text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.18em" }}
        >
          Time in Queue
        </p>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 whitespace-nowrap shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]">
          <ClockIcon
            className="h-[15px] w-[15px] flex-shrink-0"
            color={clockColor}
          />
          <span className="text-[13px] font-bold text-[#1A202C]">
            {timeAgo}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5">
        <Button
          onClick={handleReviewClick}
          className="flex h-auto w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1A202C] py-3 text-[13px] font-bold text-white transition-all hover:bg-gray-800 active:scale-95"
        >
          <MonitorIcon className="h-[14px] w-[14px]" />
          Review Application
        </Button>
      </div>
    </div>
  );
}
