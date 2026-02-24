import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import Link from "next/link";
import { cn } from "@/lib/cn";
import Image from "next/image";

export function Header() {
  return (
    <div className="w-full px-4 pt-6 md:px-8">
      <header className="mx-auto max-w-7xl">
        <div className="flex h-[72px] items-center justify-between rounded-full border border-gray-50 bg-white px-6 shadow-[0_8px_30px_rgb(0,0,0,0.04)]">
          <Link
            href={ROUTES.home}
            className="flex items-center transition-transform hover:scale-[1.02] active:scale-95"
          >
            <div className="relative h-10 w-[140px]">
              <Image
                src="/images/logo.png"
                alt="DoctorHai Logo"
                fill
                className="object-contain object-left"
                priority
              />
            </div>
          </Link>

          <nav className="flex items-center gap-8">
            <Link
              href={ROUTES.login}
              className="text-[15px] font-bold text-[#1A2B3D] transition-colors hover:text-[#4DB6AC]"
            >
              Login
            </Link>
            <Link
              href={ROUTES.register}
              className="flex h-11 items-center justify-center rounded-full bg-[#4DB6AC] px-7 text-[15px] font-bold text-white shadow-[0_4px_12px_rgba(77,182,172,0.3)] transition-all hover:bg-[#3DA59B] hover:shadow-[0_6px_16px_rgba(77,182,172,0.4)] active:scale-95"
            >
              Register
            </Link>
          </nav>
        </div>
      </header>
    </div>
  );
}
