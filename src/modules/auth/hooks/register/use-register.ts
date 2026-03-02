"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { registerService, meService } from "../../services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useRegisterContext } from "../../context";
import { useAuth } from "../../context";
import { AUTH_KEYS } from "../../constants/auth.constants";
import { RegistrationValues } from "../../types/registration.types";
import { AxiosError } from "axios";

export function useRegister() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setRegistrationData } = useRegisterContext();
  const { setUser, setLoading } = useAuth();

  return useMutation({
    mutationFn: (data: RegistrationValues) => registerService.register(data),
    onSuccess: async (response) => {
      const data = response.data.auth;

      // 1. Store token for immediate use by axios interceptors
      localStorage.setItem("token", data.accessToken);

      // 2. Set registration data in context
      setRegistrationData(data);

      // 3. Fetch full user profile and set in AuthContext
      try {
        setLoading(true);
        const user = await meService.getCurrentUser();
        setUser(user);

        // 4. Update React Query cache
        queryClient.setQueryData(AUTH_KEYS.USER, user);

        toast.success("Registration successful! Welcome to DoctorHai.");
        router.push("/");
      } catch (error) {
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
