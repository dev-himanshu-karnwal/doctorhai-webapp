import type { ReactNode } from "react";
import { ResetPasswordHeader } from "./header";

export function ResetPasswordWrapper({ children }: { children: ReactNode }) {
  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12 font-sans sm:px-6 lg:px-8">
      <div className="flex w-full max-w-[600px] flex-col items-center rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] md:p-12">
        <ResetPasswordHeader />
        <div className="mt-10 flex w-full flex-col items-center">
          {children}
        </div>
      </div>
    </div>
  );
}
