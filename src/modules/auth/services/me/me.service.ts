import { axiosInstance } from "@/lib/axios";
import { User, ApiResponse } from "@/types/api.types";

export const meService = {
  getCurrentUser: async (): Promise<User> => {
    const response =
      await axiosInstance.get<ApiResponse<{ user: User }>>("/auth/me");
    return response.data.data.user;
  },
};
