"use client";

import React from "react";

import { QueryProvider } from "@/providers/query-provider";
import { ToastProvider } from "@/providers/toast-provider";
import { AuthProvider } from "@/modules/auth";
import { AuthInitializer } from "@/providers/auth-initializer";

export function AppProviders({ children }: { children: React.ReactNode }) {
  return (
    <QueryProvider>
      <AuthProvider>
        <AuthInitializer>
          {children}
          <ToastProvider />
        </AuthInitializer>
      </AuthProvider>
    </QueryProvider>
  );
}
