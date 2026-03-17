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
    mutationFn: async (data: LoginValues) => await loginService.login(data),
    onSuccess: async () => {
      // 1. Fetch user profile to sync AuthContext
      try {
        setLoading(true);
        const user = await meService.getCurrentUser();
        setUser(user);

        // 3. Update React Query cache
        queryClient.setQueryData(AUTH_KEYS.USER, user);

        const role = user.account?.roles?.[0];

        toast.success("Login successful! Welcome back.");

        // 4. Role-based redirection
        if (role === "doctor") {
          router.push("/dashboard/doctor");
        } else if (role === "hospital") {
          router.push("/dashboard/hospitals");
        } else if (role === "super_admin") {
          router.push("/dashboard/admin");
        } else {
          router.push("/");
        }
      } catch (error) {
        console.error("Failed to fetch user after login text:", error);
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
