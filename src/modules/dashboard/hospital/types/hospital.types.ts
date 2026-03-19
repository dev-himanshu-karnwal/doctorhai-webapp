import { DoctorProfileValues } from "../../doctor/validators";

export interface StatusBadge {
  text: string;
  dotColor: string;
  bgColor: string;
  textColor: string;
}

export interface Doctor extends Partial<DoctorProfileValues> {
  id: string;
  name: string;
  subtext: string;
  avatar: string;
  statusBadge: StatusBadge;
  rawStatus?: string;
  expectedAt?: string;
  expectedAtNote?: string;
  col1: { label: string; value: string };
  col2: { label: string; value: string };
  fullName: string;
  designation: string;
  specialization: string;
  hasExperience: string;
  bio: string;
}

export interface HospitalHeaderProps {
  hospitalName: string;
  address: string;
  availableCount: number;
  totalCount: number;
  themeColor: string;
  lastUpdated?: string;
}

export interface HospitalDoctorCardProps {
  doctor: Doctor;
  themeColor: string;
  onUpdate: (doctor: Doctor) => void;
  onEdit: (doctor: Doctor) => void;
}

export interface HospitalDoctorListProps {
  doctors: Doctor[];
  searchQuery: string;
  onSearchChange: (query: string) => void;
  themeColor: string;
  onUpdateDoctor: (doctor: Doctor) => void;
  onEditDoctor: (doctor: Doctor) => void;
  // Pagination
  currentPage: number;
  totalPages: number;
  onPageChange: (page: number) => void;
  isLoading: boolean;
  onAddDoctor: () => void;
}

export interface UpdateAvailabilityModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctor: Doctor | null;
  themeColor: string;
}
