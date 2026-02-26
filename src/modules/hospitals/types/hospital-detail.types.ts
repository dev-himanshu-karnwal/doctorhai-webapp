export type DoctorStatus = "available" | "completing" | "off-duty" | "busy";
export type DoctorSpecialty =
  | "CARDIOLOGY"
  | "PEDIATRICS"
  | "NEUROLOGY"
  | "GENERAL"
  | "SURGERY";
export type SpecialtyColor = "teal" | "purple" | "blue" | "gray" | "pink";

export interface Doctor {
  id: string;
  name: string;
  role: string;
  experience: string;
  specialty: DoctorSpecialty;
  specialtyColor: SpecialtyColor;
  status: DoctorStatus;
  updatedAt: string;
  initials: string;
  avatarBg: string;
  avatarTextColor: string;
}

export interface HospitalDetail {
  id: string;
  name: string;
  availableDoctors: number;
  address: string;
  phone: string;
  hours: string;
  isOpenNow: boolean;
  erAvailable: boolean;
  erWaitTime: string;
  facilities: string[];
  totalDoctors: number;
  departments: number;
  doctors: Doctor[];
}
