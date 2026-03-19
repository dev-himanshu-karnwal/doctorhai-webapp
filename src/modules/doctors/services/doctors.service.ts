import { axiosInstance } from "@/lib/axios";
import {
  DoctorQueryParams,
  DoctorsPaginatedResponse,
  SingleDoctorResponse,
} from "../types";

export const doctorsService = {
  getDoctors: async (params?: DoctorQueryParams) => {
    const response = await axiosInstance.get<DoctorsPaginatedResponse>(
      "/doctor-profiles",
      { params }
    );
    return response.data?.data?.entity;
  },

  getDoctor: async (id: string) => {
    const response = await axiosInstance.get<SingleDoctorResponse>(
      `/doctor-profiles/${id}`
    );
    return response.data?.data?.doctor;
  },
};
