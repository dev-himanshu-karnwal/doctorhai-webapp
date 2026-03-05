import { DoctorStatus } from "../types/hospital-detail.types";

export function getStatusDotColor(status: DoctorStatus): string {
  const map: Record<DoctorStatus, string> = {
    available: "bg-[#22C55E]",
    completing: "bg-[#F59E0B]",
    "off-duty": "bg-[#94A3B8]",
    busy: "bg-[#EF4444]",
  };
  return map[status];
}

export function getStatusBadge(status: DoctorStatus) {
  const map: Record<DoctorStatus, { label: string; cls: string }> = {
    available: { label: "Available Now", cls: "bg-[#F0FDF4] text-[#16A34A]" },
    completing: {
      label: "Completing Visit",
      cls: "bg-[#FFF7ED] text-[#D97706]",
    },
    "off-duty": { label: "Off Duty", cls: "bg-[#F1F5F9] text-[#64748B]" },
    busy: { label: "Busy", cls: "bg-[#FEF2F2] text-[#DC2626]" },
  };
  return map[status];
}
