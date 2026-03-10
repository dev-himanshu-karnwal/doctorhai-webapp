import {
  CheckIcon,
  StethoscopeIcon,
  BackSoonIcon,
  OffDutyIcon,
} from "@/components/icons";
import type { StatusOption } from "../types";

export const statusOptions: StatusOption[] = [
  {
    id: "available",
    title: "Ready",
    subtext: "Available Now",
    icon: <CheckIcon className="h-6 w-6" />,
    iconColor: "#10b981",
    iconBg: "#f0fdf4",
  },
  {
    id: "busy",
    title: "Busy",
    subtext: "With Patient",
    icon: <StethoscopeIcon className="h-6 w-6" />,
    iconColor: "#f97316",
    iconBg: "#fff7ed",
  },
  {
    id: "back_soon",
    title: "Back Soon",
    subtext: "Set Time",
    icon: <BackSoonIcon className="h-5 w-5" />,
    iconColor: "#eab308",
    iconBg: "#fefce8",
  },
  {
    id: "off_duty",
    title: "Off Duty",
    subtext: "Clock Out",
    icon: <OffDutyIcon className="h-6 w-6" />,
    iconColor: "#8b5cf6",
    iconBg: "#f5f3ff",
  },
];
