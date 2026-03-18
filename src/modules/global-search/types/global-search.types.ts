export interface GlobalFilterQuery {
  search?: string;
  city?: string;
  state?: string;
  speciality?: string;
  designation?: string;
  experience?: string;
  status?: string;
  page?: number;
  limit?: number;
  sortBy?: string;
  sortOrder?: "asc" | "desc";
}

export interface DoctorStatus {
  status: string;
  expectedAt: string;
  expectedAtNote: string;
  updatedAt: string;
}

export interface DoctorSearchResult {
  id: string;
  fullName: string;
  designation: string;
  specialization: string;
  bio: string;
  phone: string;
  email: string;
  slug: string;
  profilePhotoUrl: string;
  hasExperience: boolean;
  accountId: string;
  hospitalId: string;
  public_view_count: number;
  addressId: string;
  isVerified: boolean;
  latitude: number;
  longitude: number;
  status: DoctorStatus;
}

export interface HospitalSearchResult {
  id: string;
  accountId: string;
  addressId: string;
  name: string;
  slug: string;
  coverPhotoUrl: string;
  isActive: boolean;
  isVerified: boolean;
  location: {
    latitude: number;
    longitude: number;
  };
  type: string;
  specialist: string[];
  public_view_count: number;
}

export interface PaginationData {
  totalDoctors: number;
  totalHospitals: number;
  page: number;
  limit: number;
  totalPagesDoctors: number;
  totalPagesHospitals: number;
}

export interface GlobalSearchData {
  doctor: DoctorSearchResult[];
  hospital: HospitalSearchResult[];
  pagination: PaginationData;
}
