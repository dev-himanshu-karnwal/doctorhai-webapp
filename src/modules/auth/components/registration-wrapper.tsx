"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";

interface RegistrationWrapperProps {
  children: ReactNode;
}

export function RegistrationWrapper({ children }: RegistrationWrapperProps) {
  const pathname = usePathname();
  const isHospital = pathname.includes("/register/hospital");
  const isDoctor = pathname.includes("/register/doctor");

  return (
    <div className="flex min-h-screen items-center justify-center bg-[#F8FAFC] px-4 py-12 sm:px-6 lg:px-8">
      <div className="flex w-full max-w-[700px] flex-col items-center rounded-[32px] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] md:p-12">
        {/* Header */}
        <div className="mb-10 text-center">
          <h1 className="mb-3 text-[36px] leading-[44px] font-bold tracking-[-1px] text-[#0F172A]">
            Bring Real-Time Visibility <br /> to Your Practice
          </h1>
          <p className="text-[17px] font-medium text-[#64748B] opacity-90">
            Join our healthcare network in less than 2 minutes.
          </p>
        </div>

        {/* Toggle Card */}
        <div className="mb-10 flex w-full items-center rounded-[24px] bg-[#F1F5F9] p-1.5">
          <div className="flex-none px-6">
            <span className="text-[15px] font-bold text-[#64748B]">
              I am a:
            </span>
          </div>
          <div className="flex flex-1 gap-1">
            <Link
              href="/register/hospital"
              className={cn(
                "flex-1 rounded-[18px] py-3 text-center text-[15px] font-bold transition-all duration-300",
                isHospital
                  ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  : "text-[#3D8F87] hover:text-[#3D8F87]"
              )}
            >
              Hospital
            </Link>
            <Link
              href="/register/doctor"
              className={cn(
                "flex-1 rounded-[18px] py-3 text-center text-[15px] font-bold transition-all duration-300",
                isDoctor
                  ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
                  : "text-[#3D8F87] hover:text-[#3D8F87]"
              )}
            >
              Doctor
            </Link>
          </div>
        </div>

        {/* Form Content */}
        <div className="w-full">{children}</div>

        {/* Footer Text */}
        <p className="mt-10 max-w-[420px] text-center text-[15px] leading-[22px] font-medium text-[#64748B]">
          Our team will verify your details and reach out within 24 hours to set
          up your account.
        </p>
      </div>
    </div>
  );
}
