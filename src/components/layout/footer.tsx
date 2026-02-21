import Link from "next/link";
import { ROUTES } from "@/config/routes";

export function Footer() {
  return (
    <footer className="border-t border-gray-200 bg-gray-50 px-6 py-8">
      <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-4 sm:flex-row">
        <p className="text-sm text-gray-600">
          © {new Date().getFullYear()} DocStatus. All rights reserved.
        </p>
        <nav className="flex gap-6 text-sm">
          <Link
            href={ROUTES.home}
            className="text-gray-600 hover:text-gray-900"
          >
            Home
          </Link>
          <Link
            href={ROUTES.login}
            className="text-gray-600 hover:text-gray-900"
          >
            Login
          </Link>
          <Link
            href={ROUTES.register}
            className="text-gray-600 hover:text-gray-900"
          >
            Register
          </Link>
        </nav>
      </div>
    </footer>
  );
}
