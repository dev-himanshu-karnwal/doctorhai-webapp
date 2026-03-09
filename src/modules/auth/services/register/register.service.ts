import { axiosInstance } from "@/lib/axios";
import { ApiResponse, LoginResponse } from "@/types/api.types";
import { RegistrationValues } from "../../types/registration.types";

export const registerService = {
  register: async (
    data: RegistrationValues
  ): Promise<ApiResponse<{ auth: LoginResponse }>> => {
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    const { confirmPassword: _confirmPassword, ...payload } = data;

    const response = await axiosInstance.post<
      ApiResponse<{ auth: LoginResponse }>
    >("/auth/register", payload);
    return response.data;
  },
  checkUsername: async (
    username: string
  ): Promise<
    ApiResponse<{ availability: { username: string; available: boolean } }>
  > => {
    const response = await axiosInstance.post<
      ApiResponse<{ availability: { username: string; available: boolean } }>
    >("/auth/check-username", { username });
    return response.data;
  },
};
