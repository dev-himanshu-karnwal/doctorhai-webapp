export interface DoctorStatusDto {
  status: string;
  expectedAt?: string;
  expectedAtNote?: string;
  updatedAt: string;
}

export interface DoctorProfileDto {
  id: string;
  accountId?: string;
  fullName: string;
  designation: string;
  specialization: string;
  phone: string;
  email: string;
  slug: string;
  profilePhotoUrl: string | null;
  hasExperience: number | null;
  bio: string | null;
  hospitalId?: string;
  status?: DoctorStatusDto;
  addressId?: string;
  address?: {
    addressLine1: string;
    addressLine2?: string | null;
    city: string;
    state: string;
    pincode: string;
  };
}

export interface SingleDoctorResponse {
  status: string;
  message: string;
  data: {
    doctor: DoctorProfileDto;
  };
}

export interface DoctorsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  specialty?: string;
  isAvailableNow?: boolean;
  isVerified?: boolean;
  hospitalId?: string;
}

export interface DoctorsPaginatedMetadata {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface DoctorsPaginatedResponse {
  status: string;
  message: string;
  data: {
    entity: {
      doctors: import("./doctor.types").Doctor[];
      paginatedmetadata: DoctorsPaginatedMetadata;
    };
  };
}
