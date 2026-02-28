import { axiosInstance } from "@/lib/axios";
import { ApiResponse, LoginResponse } from "@/types/api.types";
import { RegistrationValues } from "../../types/registration.types";

export const registerService = {
  register: async (
    data: RegistrationValues
  ): Promise<ApiResponse<LoginResponse>> => {
    const response = await axiosInstance.post<ApiResponse<LoginResponse>>(
      "/auth/register",
      data
    );
    return response.data;
  },
};
