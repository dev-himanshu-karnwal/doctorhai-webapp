import { axiosInstance } from "@/lib/axios";
import { HospitalDetailResponse, HospitalDetailDto } from "../types";
import { HospitalUpdatePayload } from "../schemas/hospital-update.schema";

export interface HospitalDetailQueryParams {
  page?: number;
  limit?: number;
  search?: string;
}

export const hospitalDetailService = {
  getHospitalById: async (id: string) => {
    const response = await axiosInstance.get<HospitalDetailResponse>(
      `/hospitals/${id}`
    );
    return response.data;
  },
  updateHospital: async (id: string, data: HospitalUpdatePayload) => {
    const response = await axiosInstance.patch<HospitalDetailResponse>(
      `/hospitals/${id}`,
      data
    );
    return response.data;
  },
};
