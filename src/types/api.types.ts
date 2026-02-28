export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

export type Role = "doctor" | "hospital" | "admin";

export interface Address {
  id: string;
  addressLine1: string;
  addressLine2?: string | null;
  city: string;
  state: string;
  pincode: string;
  latitude?: number | null;
  longitude?: number | null;
}

export interface Account {
  id: string;
  loginType: string;
  email: string;
  username: string;
  roles: Role[];
  isActive: boolean;
  createdAt: string;
  updatedAt: string;
}

export interface Hospital {
  id: string;
  name: string;
  slug: string;
  phone: string;
  email: string;
  coverPhotoUrl?: string | null;
  isActive: boolean;
  address: Address;
  createdAt: string;
  updatedAt: string;
}

export interface Doctor {
  id: string;
  fullName: string;
  designation: string;
  specialization: string;
  phone: string;
  email: string;
  slug: string;
  bio?: string | null;
  profilePhotoUrl?: string | null;
  hospitalId?: string | null;
  address: Address;
  createdAt: string;
  updatedAt: string;
}

export interface User {
  account: Account;
  hospital?: Hospital | null;
  doctor?: Doctor | null;
}

export interface LoginResponse {
  accessToken: string;
  accountId: string;
  loginType: string;
  email: string;
  username: string;
}
