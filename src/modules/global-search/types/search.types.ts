import { StatusKind } from "@/types/common.types";

export interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: number;
  rating?: number;
  reviewsCount?: number;
  location: string;
  status: StatusKind;
  statusDetail?: string; // e.g. "Busy (Surgery)", "Back in 10 mins"
  image: string;
}

export interface Clinic {
  id: string;
  name: string;
  type: string;
  hours: string;
  doctorsCount: number;
  doctorsSpecialty: string;
  specialists?: string[];
  waitTime?: string;
  status: "available" | "busy" | "live" | "offline" | string;
  image?: string;
}

export type SearchResult =
  | { type: "doctor"; data: Doctor }
  | { type: "clinic"; data: Clinic }
  | { type: "cta" };
