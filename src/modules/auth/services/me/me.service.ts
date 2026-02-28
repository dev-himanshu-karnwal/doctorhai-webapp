import { axiosInstance } from "@/lib/axios";
import { User, ApiResponse } from "@/types/api.types";

export const meService = {
  getCurrentUser: async (): Promise<User> => {
    const response = await axiosInstance.get<ApiResponse<User>>("/auth/me");
    console.log("Current user response:", response);
    return response.data.data;
  },
};
