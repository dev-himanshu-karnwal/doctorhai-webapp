"use client";

import { useMutation, useQueryClient } from "@tanstack/react-query";
import { loginService, meService } from "../../services";
import { toast } from "sonner";
import { useRouter } from "next/navigation";
import { useAuth } from "../../context";
import { AUTH_KEYS } from "../../constants/auth.constants";
import { LoginValues } from "../../schemas/login/login.schema";
import { AxiosError } from "axios";

export function useLogin() {
  const router = useRouter();
  const queryClient = useQueryClient();
  const { setUser, setLoading } = useAuth();

  return useMutation({
    mutationFn: (data: LoginValues) => loginService.login(data),
    onSuccess: async () => {
      // 1. Fetch user profile to sync AuthContext
      try {
        setLoading(true);
        const user = await meService.getCurrentUser();
        setUser(user);

        // 3. Update React Query cache
        queryClient.setQueryData(AUTH_KEYS.USER, user);

        toast.success("Login successful! Welcome back.");
        router.push("/");
      } catch (error) {
        console.error("Failed to fetch user after login:", error);
        toast.success("Login successful! Redirecting...");
        router.push("/");
      } finally {
        setLoading(false);
      }
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      const message =
        error?.response?.data?.message ||
        "Login failed. Please check your credentials.";
      toast.error(message);
    },
  });
}
