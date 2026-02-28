"use client";

import { createContext, useContext, useState, ReactNode } from "react";
import { LoginResponse } from "@/types/api.types";

interface RegisterContextType {
  registrationData: LoginResponse | null;
  setRegistrationData: (data: LoginResponse | null) => void;
}

const RegisterContext = createContext<RegisterContextType | undefined>(
  undefined
);

export function RegisterProvider({ children }: { children: ReactNode }) {
  const [registrationData, setRegistrationData] =
    useState<LoginResponse | null>(null);

  return (
    <RegisterContext.Provider value={{ registrationData, setRegistrationData }}>
      {children}
    </RegisterContext.Provider>
  );
}

export function useRegisterContext() {
  const context = useContext(RegisterContext);
  if (context === undefined) {
    throw new Error(
      "useRegisterContext must be used within a RegisterProvider"
    );
  }
  return context;
}
