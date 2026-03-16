import { JSX } from "react";
import { DoctorProfileBaseValues } from "../validators";

export interface EditDoctorSliderProps {
  isOpen: boolean;
  onClose: () => void;
  initialData?: Partial<DoctorProfileBaseValues>;
  onSave: (data: DoctorProfileBaseValues) => void;
  isPending?: boolean;
}

export interface StatusOption {
  id: string;
  title: string;
  subtext: string;
  icon: JSX.Element;
  iconColor: string;
  iconBg: string;
}

export interface DoctorStatusOptionsProps {
  currentStatus: string;
  setCurrentStatus: (status: string) => void;
}

export interface DoctorStatusUpdateData {
  status?: "available" | "busy" | "back_soon" | "off_duty";
  expectedAt?: string | null;
  expectedAtNote?: string | null;
}
