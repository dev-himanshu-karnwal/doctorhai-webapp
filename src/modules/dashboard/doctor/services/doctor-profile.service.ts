import { axiosInstance } from "@/lib/axios";
import { DoctorProfileValues } from "../validators";

class DoctorProfileService {
  async updateProfile(id: string, data: DoctorProfileValues) {
    const response = await axiosInstance.patch(`/doctor-profiles/${id}`, data);
    return response.data;
  }
}

export const doctorProfileService = new DoctorProfileService();
