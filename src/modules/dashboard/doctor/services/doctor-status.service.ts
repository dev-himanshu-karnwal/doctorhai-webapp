import { axiosInstance } from "@/lib/axios";
import { DoctorStatusUpdateData } from "../types";

class DoctorStatusService {
  async updateDoctorStatus(id: string, data: DoctorStatusUpdateData) {
    const response = await axiosInstance.patch(
      `/doctor-statuses/${id}/status`,
      data
    );
    return response.data;
  }
}

export const doctorStatusService = new DoctorStatusService();
