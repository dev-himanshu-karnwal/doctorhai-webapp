import type { StatusKind } from "@/types/common.types";

export type DoctorStatus = {
  status: StatusKind;
  expectedAt?: string;
  expectedAtNote?: string;
  updatedAt?: string;
};

export type Doctor = {
  id: string;
  fullName: string;
  designation: string | null;
  specialization: string | null;
  phone: string | null;
  email: string | null;
  slug: string | null;
  profilePhotoUrl: string | null;
  public_view_count?: number;
  hasExperience: boolean | null;
  bio?: string | null;
  status: DoctorStatus | null;
  createdAt?: string;
};

export interface DoctorQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  isVerified?: boolean;
  specialty?: string;
  isAvailableNow?: boolean;
}
