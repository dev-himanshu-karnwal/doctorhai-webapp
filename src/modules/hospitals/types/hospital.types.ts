export interface HospitalLocation {
  latitude: number;
  longitude: number;
}

export interface HospitalAddress {
  id: string;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  pincode: string;
}

export interface Hospital {
  id: string;
  accountId: string;
  addressId: string;
  name: string;
  slug: string;
  coverPhotoUrl: string;
  imageUrl?: string; // For UI consistency
  address?: HospitalAddress | string; // For UI consistency
  isActive: boolean;
  isVerified: boolean;
  public_view_count?: number;
  location: HospitalLocation;
  type: string;
  specialist: string[];
  createdAt: string;
  status?: "pending" | "approved" | "rejected"; // For UI consistency
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
