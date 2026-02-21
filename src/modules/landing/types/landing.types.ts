import type { StatusKind } from "@/types/common.types";

export type { StatusKind };

export type DepartmentCategory = {
  id: string;
  label: string;
  icon?: string;
};

export type HospitalEntry = {
  id: string;
  name: string;
  status: StatusKind;
};

export type DoctorEntry = {
  id: string;
  name: string;
  specialty: string;
  imageUrl?: string;
  status: StatusKind;
  hospitalName?: string;
};

export type FeatureCard = {
  id: string;
  title: string;
  description: string;
  icon?: string;
  highlight?: string;
};

export type WorkflowStep = {
  id: string;
  stepNumber: number;
  title: string;
  description: string;
  icon?: string;
};
