import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import { DoctorRegistrationValues } from "@/modules/auth/types/registration.types";

export const hospitalService = {
  addDoctor: async (
    data: DoctorRegistrationValues
  ): Promise<ApiResponse<null>> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const {
      confirmPassword: _confirmPassword,
      registrationType: _registrationType,
      name,
      ...rest
    } = data;

    const response = await axiosInstance.post<ApiResponse<null>>(
      "/doctor-profiles/by-hospital",
      { ...rest, fullName: name }
    );
    return response.data;
  },
};
