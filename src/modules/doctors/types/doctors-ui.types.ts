export type DoctorStatusType =
  | "available"
  | "busy"
  | "off-duty"
  | "on-break"
  | string;

export interface DoctorStatusUI {
  current: DoctorStatusType;
  expectedAt?: string;
  note?: string;
}

export interface DoctorProfileUI {
  id: string;
  name: string;
  role: string;
  specialty: string;
  avatarUrl: string | null;
  initials: string;
  status: DoctorStatusUI;
  slug: string;
  hasExperience: boolean;
  // Base attributes for unified cards
  type: "doctor";
}

export type MedicalListingItem = DoctorProfileUI;
