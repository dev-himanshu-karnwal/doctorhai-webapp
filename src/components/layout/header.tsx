"use client";
import Link from "next/link";
import Image from "next/image";
import { useAuth } from "@/modules/auth/context";
import { Skeleton } from "@/components/ui";

export function Header() {
  const { user, loading } = useAuth();
  const isActive = user?.account?.isVerified;
  const role = user?.account?.roles?.[0];

  const getDashboardHref = () => {
    if (role === "doctor") return "/dashboard/doctor";
    if (role === "hospital") return "/dashboard/hospitals";
    if (role === "super_admin") return "/dashboard/admin";
    return "/";
  };
  return (
    <div className="w-full bg-[#F8FAFC] px-3 pt-4 pb-3 sm:px-4 sm:pt-6 sm:pb-4 md:px-8">
      <header className="mx-auto max-w-7xl">
        <div className="flex h-[60px] items-center justify-between rounded-full border border-gray-50 bg-white px-4 shadow-[0_8px_30px_rgb(0,0,0,0.04)] sm:h-[72px] sm:px-6">
          <Link
            href={"/"}
            className="flex items-center transition-transform hover:scale-[1.02] active:scale-95"
          >
            <div className="relative h-8 w-[110px] sm:h-10 sm:w-[140px]">
              <Image
                src="/images/logo.png"
                alt="DoctorHai Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="flex items-center gap-4 sm:gap-8">
            {loading ? (
              <Skeleton className="h-9 w-9 rounded-full sm:h-11 sm:w-11" />
            ) : (
              <>
                {isActive && (
                  <Link
                    href={getDashboardHref()}
                    className="flex h-9 items-center justify-center rounded-full bg-[#4DB6AC] px-5 text-[14px] font-bold text-white shadow-[0_4px_12px_rgba(77,182,172,0.3)] transition-all hover:bg-[#3DA59B] hover:shadow-[0_6px_16px_rgba(77,182,172,0.4)] active:scale-95 sm:h-11 sm:px-7 sm:text-[15px]"
                  >
                    Dashboard
                  </Link>
                )}
                {!user && (
                  <>
                    <Link
                      href={"/login"}
                      className="text-[14px] font-bold text-[#1A2B3D] transition-colors hover:text-[#4DB6AC] sm:text-[15px]"
                    >
                      Login
                    </Link>
                    <Link
                      href={"/register"}
                      className="flex h-9 items-center justify-center rounded-full bg-[#4DB6AC] px-5 text-[13px] font-bold text-white shadow-[0_4px_12px_rgba(77,182,172,0.3)] transition-all hover:bg-[#3DA59B] hover:shadow-[0_6px_16px_rgba(77,182,172,0.4)] active:scale-95 sm:h-11 sm:px-7 sm:text-[15px]"
                    >
                      Register
                    </Link>
                  </>
                )}
              </>
            )}
          </nav>
        </div>
      </header>
    </div>
  );
}
