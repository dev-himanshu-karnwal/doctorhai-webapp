import { axiosInstance } from "@/lib/axios";
import { ApiResponse, LoginResponse } from "@/types/api.types";
import { LoginValues } from "../../schemas/login/login.schema";

// Note: This is an architectural placeholder for login service
export const loginService = {
  login: async (
    credentials: LoginValues
  ): Promise<ApiResponse<{ auth: LoginResponse }>> => {
    const response = await axiosInstance.post<
      ApiResponse<{ auth: LoginResponse }>
    >("/auth/login", credentials);
    return response.data;
  },
};
