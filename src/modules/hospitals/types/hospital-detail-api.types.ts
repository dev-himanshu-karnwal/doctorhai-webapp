import { HospitalLocation } from "./hospital.types";
import { Doctor } from "@/modules/doctors/types";

export interface HospitalBrandImage {
  id: string;
  url: string;
}

export interface HospitalAddress {
  id: string;
  addressLine1: string;
  addressLine2?: string;
  city: string;
  state: string;
  pincode: string;
}

export interface HospitalDetailDoctorPaginated {
  items: Doctor[];
  meta: {
    total: number;
    page: number;
    limit: number;
    totalPages: number;
  };
}

export interface HospitalTimelineItem {
  day: string;
  opentime: string;
  closetime: string;
}

export interface HospitalDetailDto {
  id: string;
  accountId: string;
  name: string;
  slug: string;
  phone: string;
  email: string;
  coverPhotoUrl: string | null;
  isActive: boolean;
  location: HospitalLocation;
  type: string | null;
  timeline: HospitalTimelineItem[] | null;
  facilities: string[] | null;
  createdAt: string;
  updatedAt: string;
  address: HospitalAddress | null;
}

export interface HospitalDetailResponse {
  status: string;
  message: string;
  data: {
    hospital: HospitalDetailDto;
  };
}
