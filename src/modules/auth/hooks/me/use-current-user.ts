"use client";

import { useQuery } from "@tanstack/react-query";
import { meService } from "../../services";
import { AUTH_KEYS, AUTH_CONFIG } from "../../constants/auth.constants";
import { User } from "@/types/api.types";

export function useCurrentUser() {
  return useQuery<User>({
    queryKey: AUTH_KEYS.USER,
    queryFn: meService.getCurrentUser,
    retry: false,
    staleTime: AUTH_CONFIG.STALE_TIME,
    enabled: typeof window !== "undefined" && !!localStorage.getItem("token"),
  });
}
