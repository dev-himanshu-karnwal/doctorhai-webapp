import { RegistrationWrapper } from "@/modules/auth";
import type { ReactNode } from "react";

export default function RegisterLayout({ children }: { children: ReactNode }) {
  return <RegistrationWrapper>{children}</RegistrationWrapper>;
}
