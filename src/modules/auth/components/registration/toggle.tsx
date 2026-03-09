"use client";

import { cn } from "@/lib/cn";
import Link from "next/link";
import { usePathname } from "next/navigation";

export function RegistrationToggle() {
  const pathname = usePathname();
  const isHospital = pathname.includes("/register/hospital");
  const isDoctor = pathname.includes("/register/doctor");

  const linkClass = (active: boolean) =>
    cn(
      "flex-1 rounded-[18px] py-3 text-center text-[15px] font-bold transition-all duration-300",
      active
        ? "bg-white text-[#3D8F87] shadow-[0_4px_12px_rgba(0,0,0,0.08)]"
        : "text-[#3D8F87]"
    );

  return (
    <div className="mb-10 flex w-full items-center rounded-[24px] bg-[#F1F5F9] p-1.5">
      <div className="flex-none px-6">
        <span className="text-[15px] font-bold text-[#64748B]">I am a:</span>
      </div>
      <div className="flex flex-1 gap-1">
        <Link href="/register/hospital" className={linkClass(isHospital)}>
          Hospital
        </Link>
        <Link href="/register/doctor" className={linkClass(isDoctor)}>
          Doctor
        </Link>
      </div>
    </div>
  );
}
