import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";

export interface DoctorStats {
  total_doctor_count: number;
  total_verfied_count: number; // Keeping typo as provided in response
  total_unverified_count: number;
  total_available: number;
  percentage_change?: number;
}

export interface HospitalStats {
  total_hospital_count: number;
  total_verified_count: number;
  total_unverified_count: number;
  percentage_change?: number;
}

export interface DoctorStatsResponse {
  doctorStats: DoctorStats;
}

export interface HospitalStatsResponse {
  hospitalStats: HospitalStats;
}

export const statsService = {
  getDoctorStats: async (
    hospitalId?: string
  ): Promise<ApiResponse<DoctorStatsResponse>> => {
    const response = await axiosInstance.get<ApiResponse<DoctorStatsResponse>>(
      "/doctor-profiles/stats",
      { params: { hospitalId } }
    );
    return response.data;
  },

  getHospitalStats: async (): Promise<ApiResponse<HospitalStatsResponse>> => {
    const response =
      await axiosInstance.get<ApiResponse<HospitalStatsResponse>>(
        "/hospitals/stats"
      );
    return response.data;
  },
};
