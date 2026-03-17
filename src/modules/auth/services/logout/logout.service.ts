import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";

export const logoutService = {
  logout: async (): Promise<ApiResponse<null>> => {
    const response =
      await axiosInstance.post<ApiResponse<null>>("/auth/logout");
    return response.data;
  },
};
