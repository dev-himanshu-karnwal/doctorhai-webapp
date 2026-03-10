"use client";

import { useMutation } from "@tanstack/react-query";
import { registerService } from "../../services";
import { AxiosError } from "axios";
import { useEffect, useState, useMemo } from "react";
import { UseFormSetError, UseFormClearErrors } from "react-hook-form";
import { DoctorRegistrationValues } from "../../types/registration.types";
import { SpinnerIcon, CheckCircleIcon, XCircleIcon } from "@/components/icons";

export function useCheckUsername() {
  return useMutation({
    mutationFn: (username: string) => registerService.checkUsername(username),
    onSuccess: (response) => {
      return response.data;
    },
    onError: (error: AxiosError<{ message?: string }>) => {
      console.error("Username check failed", error);
    },
  });
}

export function useDebouncedUsernameCheck(
  username: string,
  setError: UseFormSetError<DoctorRegistrationValues>,
  clearErrors: UseFormClearErrors<DoctorRegistrationValues>
) {
  const { mutate: checkUsername } = useCheckUsername();
  const [usernameStatus, setUsernameStatus] = useState<
    "idle" | "checking" | "available" | "unavailable"
  >("idle");
  const [prevUsername, setPrevUsername] = useState(username);

  // Synchronously adjust state during render when props change to avoid useEffect warning
  if (username !== prevUsername) {
    setPrevUsername(username);
    setUsernameStatus(!username || username.length < 3 ? "idle" : "checking");
  }

  useEffect(() => {
    if (!username || username.length < 3) {
      return;
    }

    const timer = setTimeout(() => {
      checkUsername(username, {
        onSuccess: (response) => {
          if (response.data?.availability?.available) {
            setUsernameStatus("available");
            clearErrors("username");
          } else {
            setUsernameStatus("unavailable");
            setError("username", {
              type: "manual",
              message: "Username is already taken",
            });
          }
        },
        onError: () => {
          setUsernameStatus("idle");
        },
      });
    }, 500);

    return () => clearTimeout(timer);
  }, [username, checkUsername, setError, clearErrors]);

  const usernameStatusIcon = useMemo(() => {
    switch (usernameStatus) {
      case "checking":
        return <SpinnerIcon className="h-5 w-5 animate-spin text-[#3D8F87]" />;
      case "available":
        return <CheckCircleIcon className="h-5 w-5 text-emerald-500" />;
      case "unavailable":
        return <XCircleIcon className="h-5 w-5 text-red-500" />;
      default:
        return null;
    }
  }, [usernameStatus]);

  return { usernameStatus, usernameStatusIcon };
}
