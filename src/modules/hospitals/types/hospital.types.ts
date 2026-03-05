export interface HospitalLocation {
  latitude: number;
  longitude: number;
}

export interface Hospital {
  id: string;
  accountId: string;
  addressId: string;
  name: string;
  slug: string;
  coverPhotoUrl: string;
  isActive: boolean;
  location: HospitalLocation;
  type: string;
  specialist: string[];
}

export interface PaginatedMeta {
  total: number;
  page: number;
  limit: number;
  totalPages: number;
}

export interface PaginatedResponse<T> {
  items: T[];
  meta: PaginatedMeta;
}

export type ListingSpecialtyColor = "default" | "teal" | "purple" | "amber";

export interface HospitalQueryParams {
  page?: number;
  limit?: number;
  search?: string;
  isAvailableNow?: boolean;
  distance?: number;
  departments?: string[];
  type?: string[];
  isVerified?: boolean;
}
