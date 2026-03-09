import { Doctor as ApiDoctor } from "@/modules/doctors/types/doctor.types";
import { Doctor as UIDoctor } from "../types/hospital.types";
import { getStatusBadge } from "./status.utils";
import { StatusKind } from "@/types/common.types";

export const mapApiDoctorToUI = (doc: ApiDoctor): UIDoctor => ({
  id: doc.id,
  name: doc.fullName,
  subtext:
    `${doc.designation || ""} ${doc.specialization ? `• ${doc.specialization}` : ""}`.trim(),
  avatar:
    doc.profilePhotoUrl ||
    `https://ui-avatars.com/api/?name=${encodeURIComponent(doc.fullName)}&background=random`,
  statusBadge: getStatusBadge(doc.status?.status as StatusKind),
  col1: { label: "SHIFT", value: "-" },
  col2: { label: "ROOM", value: "-" },
  // Fields for EditDoctorSlider
  fullName: doc.fullName || "",
  designation: doc.designation || "",
  specialization: doc.specialization || "",
  hasExperience: doc.hasExperience ? doc.hasExperience.toString() : "0",
  bio: doc.bio || "",
});
