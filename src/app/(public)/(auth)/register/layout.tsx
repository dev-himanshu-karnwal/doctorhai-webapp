import { RegistrationWrapper } from "@/modules/auth/components/registration-wrapper";
import type { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return <RegistrationWrapper>{children}</RegistrationWrapper>;
}
