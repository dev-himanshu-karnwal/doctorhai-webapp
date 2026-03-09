import { axiosInstance } from "@/lib/axios";
import {
  PaginatedResponse,
  Hospital,
  HospitalQueryParams,
} from "../types/hospital.types";

interface HospitalsResponse {
  status: string;
  message: string;
  data: {
    hospitals: PaginatedResponse<Hospital>;
  };
}

export const hospitalsService = {
  getHospitals: async (params?: HospitalQueryParams) => {
    const response = await axiosInstance.get<HospitalsResponse>("/hospitals", {
      params,
    });
    return response.data.data.hospitals;
  },
};
