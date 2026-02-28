import type { ReactNode } from "react";
import { RegistrationToggle } from "./toggle";
import { RegistrationHeader } from "./header";

export function RegistrationWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="flex w-full max-w-[700px] flex-col items-center rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] md:p-12">
        <RegistrationHeader />
        <RegistrationToggle />
        <div className="w-full">{children}</div>
        <p className="mt-10 max-w-[420px] text-center text-[15px] leading-[22px] font-medium text-[#64748B]">
          Our team will verify your details and reach out within 24 hours to set
          up your account.
        </p>
      </div>
    </div>
  );
}
