import { Doctor as GlobalDoctor } from "@/modules/doctors/types";

export type DoctorStatus = "available" | "busy" | "back_soon" | "off_duty";

export type DoctorFilterTab = "All" | "Verified" | "Unverified";

export type Doctor = GlobalDoctor;
