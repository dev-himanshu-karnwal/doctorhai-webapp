"use client";

import React, { useEffect } from "react";
import { useCurrentUser, useAuth } from "@/modules/auth";

export function AuthInitializer({ children }: { children: React.ReactNode }) {
  const { setUser, setLoading } = useAuth();
  const { data, isSuccess, isError } = useCurrentUser();

  useEffect(() => {
    if (isSuccess && data && "account" in data) {
      setUser(data);
      setLoading(false);
    } else if (isSuccess && data) {
      // Case where data is success but doesn't match User shape
      console.warn("User data received but missing 'account' property", data);
      setLoading(false);
    }

    if (isError) {
      setLoading(false);
    }
  }, [isSuccess, isError, data, setUser, setLoading]);

  return <>{children}</>;
}
