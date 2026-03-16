import { axiosInstance } from "@/lib/axios";
import { DoctorProfileValues, DoctorProfileBaseValues } from "../validators";

class DoctorProfileService {
  async updateProfile(id: string, data: DoctorProfileBaseValues) {
    const response = await axiosInstance.patch(`/doctor-profiles/${id}`, data);
    return response.data;
  }
}

export const doctorProfileService = new DoctorProfileService();
