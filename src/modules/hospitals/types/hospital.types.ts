export type HospitalStatus = "online" | "busy" | "limited";
export type IconType =
  | "building"
  | "heart"
  | "smile"
  | "brain"
  | "tooth"
  | "cross";
export type ListingSpecialtyColor = "default" | "teal" | "purple" | "amber";

export interface HospitalSpecialty {
  name: string;
  color?: ListingSpecialtyColor;
}

export interface Hospital {
  id: string;
  name: string;
  distance: string;
  type: string;
  status: HospitalStatus;
  onlineCount?: number;
  avgWaitTime: string;
  waitTimeMinutes: number;
  specialties: HospitalSpecialty[];
  iconType: IconType;
  iconBgColor: string;
  iconColor: string;
  featured?: boolean;
}
