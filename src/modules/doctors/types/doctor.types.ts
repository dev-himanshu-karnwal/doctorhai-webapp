import type { StatusKind } from "@/types/common.types";

export type DoctorStatus = {
  status: StatusKind;
  expectedAt?: string;
  expectedAtNote?: string;
  updatedAt?: string;
};

export type Doctor = {
  id: string;
  accountId?: string;
  fullName: string;
  designation: string | null;
  specialization: string | null;
  phone: string | null;
  email: string | null;
  slug: string | null;
  profilePhotoUrl: string | null;
  public_view_count?: number;
  hasExperience: string | null;
  bio?: string | null;
  isVerified: boolean;
  status: DoctorStatus | null;
  createdAt?: string;
  addressId?: string;
  address?: {
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
  };
};

export interface DoctorQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  isAvailable?: boolean;
  hospitalId?: string;
  specialities?: string[];
  experience?: string[];
  latitude?: number;
  longitude?: number;
  distance?: number;
  isVerified?: boolean;
  sortOrder?: "asc" | "desc";
}
