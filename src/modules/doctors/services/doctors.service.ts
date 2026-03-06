import { axiosInstance } from "@/lib/axios";
import { DoctorQueryParams, DoctorsPaginatedResponse } from "../types";

export const doctorsService = {
  getDoctors: async (params?: DoctorQueryParams) => {
    const response = await axiosInstance.get<DoctorsPaginatedResponse>(
      "/doctor-profiles",
      { params }
    );
    return response.data?.data?.entity;
  },
};
