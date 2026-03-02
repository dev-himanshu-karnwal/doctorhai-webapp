import type { DoctorEntry } from "../../types";
import {
  IconBreakFooter,
  IconBreakTop,
  IconBusyFooter,
  IconBusyTop,
  IconOnlineFooter,
  IconOnlineTop,
} from "./doctor-status-icons";

export const getStatusConfig = (status: DoctorEntry["status"]) => {
  switch (status) {
    case "available":
      return {
        barBg: "bg-[#F0FDF4]",
        barText: "text-[#16A34A]",
        label: "Available Now",
        footerIcon: <IconOnlineFooter />,
        topIcon: <IconOnlineTop />,
      };
    case "busy":
      return {
        barBg: "bg-[#FEF2F2]",
        barText: "text-[#EF4444]",
        label: "Busy (Surgery)",
        footerIcon: <IconBusyFooter />,
        topIcon: <IconBusyTop />,
      };
    case "on-break":
      return {
        barBg: "bg-[#FFF7ED]",
        barText: "text-[#F97316]",
        label: "On Break (15m)",
        footerIcon: <IconBreakFooter />,
        topIcon: <IconBreakTop />,
      };
    default:
      return {
        barBg: "bg-gray-100",
        barText: "text-gray-500",
        label: "Offline",
        footerIcon: null,
        topIcon: null,
      };
  }
};
