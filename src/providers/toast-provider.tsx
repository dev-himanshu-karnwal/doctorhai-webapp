"use client";

import { Toaster } from "sonner";

export function ToastProvider() {
  return (
    <Toaster
      position="top-center"
      richColors
      theme="light"
      toastOptions={{
        style: {
          borderRadius: "12px",
          border: "1px solid #E6F6F4",
        },
        className: "font-sans",
      }}
    />
  );
}
