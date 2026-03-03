"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { resetPasswordService } from "../../services/reset-password";
import { meService } from "../../services";
import { toast } from "sonner";
import { AxiosError } from "axios";
import { ResetPasswordRequest } from "../../types/reset-password.types";
import { ApiResponse } from "@/types/api.types";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context";
import { AUTH_KEYS } from "../../constants/auth.constants";

export function useResetPassword() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser, setLoading } = useAuth();

  return useMutation<
    ApiResponse<null>,
    AxiosError<{ message?: string }>,
    ResetPasswordRequest
  >({
    mutationFn: (data: ResetPasswordRequest) => {
      const token = localStorage.getItem("resetToken");
      if (!token) {
        throw new Error("Reset token not found");
      }
      return resetPasswordService.resetPassword(data, token);
    },
    onSuccess: async () => {
      try {
        setLoading(true);
        const user = await meService.getCurrentUser();
        setUser(user);

        // Update React Query cache
        queryClient.setQueryData(AUTH_KEYS.USER, user);

        toast.success("Password reset successfully! Welcome back.");
        localStorage.removeItem("resetToken");
        localStorage.removeItem("resetProfiles");
        localStorage.removeItem("resetEmail");
        router.push("/");
      } catch (error) {
        console.error("Failed to fetch user after password reset:", error);
        toast.success("Password reset successfully! Please login.");
        localStorage.removeItem("resetToken");
        localStorage.removeItem("resetProfiles");
        localStorage.removeItem("resetEmail");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    },
    onError: (error) => {
      const message =
        error?.response?.data?.message ||
        error.message ||
        "Failed to reset password. Please try again.";
      toast.error(message);
    },
  });
}
