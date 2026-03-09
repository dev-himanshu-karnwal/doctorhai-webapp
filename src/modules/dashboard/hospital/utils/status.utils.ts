import { StatusKind } from "@/types/common.types";
import { StatusBadge } from "../types/hospital.types";

export const getStatusBadge = (status: StatusKind | undefined): StatusBadge => {
  switch (status) {
    case "available":
      return {
        text: "AVAILABLE NOW",
        dotColor: "#22c55e",
        bgColor: "#f0fdf4",
        textColor: "#16a34a",
      };
    case "back_soon":
      return {
        text: "BACK SOON",
        dotColor: "#f97316",
        bgColor: "#fff7ed",
        textColor: "#ea580c",
      };
    case "off_duty":
      return {
        text: "OFF DUTY",
        dotColor: "#94a3b8",
        bgColor: "#f8fafc",
        textColor: "#64748b",
      };
    case "busy":
      return {
        text: "BUSY",
        dotColor: "#ef4444",
        bgColor: "#fef2f2",
        textColor: "#dc2626",
      };
    default:
      return {
        text: "OFF DUTY",
        dotColor: "#94a3b8",
        bgColor: "#f8fafc",
        textColor: "#64748b",
      };
  }
};
