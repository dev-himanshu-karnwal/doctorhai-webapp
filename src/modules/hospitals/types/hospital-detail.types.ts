import { Doctor } from "@/modules/doctors/types";
import { HospitalTimelineItem } from "./hospital-detail-api.types";

export interface HospitalDetail {
  id: string;
  name: string;
  availableDoctors: number;
  address: string;
  location?: { latitude: number; longitude: number };
  phone: string;
  hours: string;
  timeline: HospitalTimelineItem[] | null;
  isOpenNow: boolean;
  erAvailable: boolean;
  facilities: string[];
  totalDoctors: number;
  doctors: Doctor[];
}
