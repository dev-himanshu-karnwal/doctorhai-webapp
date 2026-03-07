import { useMutation } from "@tanstack/react-query";
import { forgotPasswordService } from "../../services/forgot-password";
import { toast } from "sonner";
import { AxiosError } from "axios";
import {
  ForgotPasswordRequest,
  ForgotPasswordVerifyRequest,
  ForgotPasswordVerifyResponse,
} from "../../types/forgot-password.types";
import { ApiResponse } from "@/types/api.types";

export function useForgotPasswordRequest() {
  return useMutation<
    ApiResponse<null>,
    AxiosError<{ message?: string }>,
    ForgotPasswordRequest
  >({
    mutationFn: async (data: ForgotPasswordRequest) =>
      await forgotPasswordService.requestOtp(data),
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        "Failed to send OTP. Please try again.";
      toast.error(message);
    },
  });
}

export function useForgotPasswordVerify() {
  return useMutation<
    ApiResponse<ForgotPasswordVerifyResponse>,
    AxiosError<{ message?: string }>,
    ForgotPasswordVerifyRequest
  >({
    mutationFn: (data: ForgotPasswordVerifyRequest) =>
      forgotPasswordService.verifyOtp(data),
    onSuccess: (response, variables) => {
      if (response.data && response.data.reset?.resetToken) {
        localStorage.setItem("resetToken", response.data.reset.resetToken);
        localStorage.setItem("resetEmail", variables.email);
        localStorage.setItem(
          "resetProfiles",
          JSON.stringify(response.data.reset.profiles)
        );
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message || "Invalid OTP. Please try again.";
      toast.error(message);
    },
  });
}
