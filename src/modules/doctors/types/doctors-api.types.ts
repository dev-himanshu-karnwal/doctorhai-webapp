export interface DoctorStatusDto {
  status: string;
  expectedAt?: string;
  expectedAtNote?: string;
  updatedAt: string;
}

export interface DoctorProfileDto {
  id: string;
  fullName: string;
  designation: string;
  specialization: string;
  phone: string;
  email: string;
  slug: string;
  profilePhotoUrl: string | null;
  hasExperience: boolean;
  status?: DoctorStatusDto;
}

export interface DoctorsQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  specialty?: string;
  isAvailableNow?: boolean;
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
