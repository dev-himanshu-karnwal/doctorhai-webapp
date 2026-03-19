import { Doctor, DoctorProfileUI, DoctorStatusUI } from "../types";

export function mapDoctorProfile(dto: Doctor): DoctorProfileUI {
  const initials = dto.fullName
    .split(" ")
    .map((n) => n[0])
    .join("")
    .slice(0, 2)
    .toUpperCase();

  const statusObj: DoctorStatusUI = dto.status
    ? {
        current: dto.status.status,
        expectedAt: dto.status.expectedAt,
        note: dto.status.expectedAtNote,
      }
    : { current: "available" };

  return {
    id: dto.id,
    type: "doctor",
    name: dto.fullName,
    role: dto.designation || "Specialist",
    specialty: dto.specialization || "General",
    avatarUrl: dto.profilePhotoUrl ?? null,
    initials,
    status: statusObj,
    slug: dto.slug ?? "",
    hasExperience: dto.hasExperience ?? "0",
  };
}
