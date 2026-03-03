import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import { ResetPasswordRequest } from "../../types/reset-password.types";

export const resetPasswordService = {
  resetPassword: async (
    data: ResetPasswordRequest,
    token: string
  ): Promise<ApiResponse<null>> => {
    const response = await axiosInstance.post<ApiResponse<null>>(
      "/auth/forgot-password/reset",
      data,
      {
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }
    );
    return response.data;
  },
};
