import { axiosInstance } from "@/lib/axios";
import { ApiResponse } from "@/types/api.types";
import {
  ForgotPasswordRequest,
  ForgotPasswordVerifyRequest,
  ForgotPasswordVerifyResponse,
} from "../../types/forgot-password.types";

export const forgotPasswordService = {
  requestOtp: async (
    data: ForgotPasswordRequest
  ): Promise<ApiResponse<null>> => {
    const response = await axiosInstance.post<ApiResponse<null>>(
      "/auth/forgot-password/request",
      data
    );
    return response.data;
  },

  verifyOtp: async (
    data: ForgotPasswordVerifyRequest
  ): Promise<ApiResponse<ForgotPasswordVerifyResponse>> => {
    const response = await axiosInstance.post<
      ApiResponse<ForgotPasswordVerifyResponse>
    >("/auth/forgot-password/verify", data);
    return response.data;
  },
};
