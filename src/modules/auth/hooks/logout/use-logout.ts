"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { useRouter } from "next/navigation";
import { toast } from "sonner";
import { authService } from "../../services";
import { AxiosError } from "axios";

export const useLogout = () => {
  const router = useRouter();
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: async () => await authService.logout(),
    onSuccess: () => {
      queryClient.clear();

      toast.success("Logged out successfully");
      router.push("/");

      window.location.reload();
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      toast.error(error?.response?.data?.message || "Logout failed");
    },
  });
};
