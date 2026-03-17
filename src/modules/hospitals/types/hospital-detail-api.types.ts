import { HospitalLocation, HospitalAddress } from "./hospital.types";
import { Doctor } from "@/modules/doctors/types";

export interface HospitalBrandImage {
  id: string;
  url: string;
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
  isVerified: boolean;
  location: HospitalLocation;
  type: string | null;
  public_view_count?: number;
  timeline: HospitalTimelineItem[] | null;
  facilities: string[] | null;
  createdAt: string;
  updatedAt: string;
  addressId: string;
  address: HospitalAddress | null;
}

export interface HospitalDetailResponse {
  status: string;
  message: string;
  data: {
    hospital: HospitalDetailDto;
  };
}
