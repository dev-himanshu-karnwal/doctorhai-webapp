"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerService, meService } from "../../services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context";
import { AUTH_KEYS } from "../../constants/auth.constants";
import { RegistrationValues } from "../../types/registration.types";
import { AxiosError } from "axios";

export function useRegister() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser, setLoading } = useAuth();

  return useMutation({
    mutationFn: async (data: RegistrationValues) =>
      await registerService.register(data),
    onSuccess: async () => {
      try {
        setLoading(true);
        const user = await meService.getCurrentUser();
        setUser(user);
        queryClient.setQueryData(AUTH_KEYS.USER, user);
      } catch {
        toast.error("Failed to fetch user after registration");
        router.push("/login");
      } finally {
        setLoading(false);
      }
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message =
        error?.response?.data?.message ||
        "Registration failed. Please try again.";
      toast.error(message);
    },
  });
}
