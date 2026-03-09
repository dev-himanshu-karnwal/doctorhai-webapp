import type { Hospital } from "@/modules/hospitals/types/hospital.types";
import type { Doctor } from "@/modules/doctors/types";

export interface ApprovalsQueueProps {
  hospitals: Hospital[];
  doctors: Doctor[];
  isLoading: boolean;
  hasMore: boolean;
  onLoadMore: () => void;
  searchQuery: string;
  onSearchChange: (query: string) => void;
  requestType: "all" | "doctor" | "hospital";
  onRequestTypeChange: (type: "all" | "doctor" | "hospital") => void;
}
