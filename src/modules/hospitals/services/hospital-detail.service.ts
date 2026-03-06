import { axiosInstance } from "@/lib/axios";
import { HospitalDetailResponse } from "../types";

export interface HospitalDetailQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const hospitalDetailService = {
  getHospitalById: async (id: string, params?: HospitalDetailQueryParams) => {
    const response = await axiosInstance.get<HospitalDetailResponse>(
      `/hospitals/${id}`,
      { params }
    );
    return response.data.data.hospital;
  },
};
