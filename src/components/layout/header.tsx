import { Button } from "@/components/ui/button";
import { ROUTES } from "@/config/routes";
import Link from "next/link";

export function Header() {
  return (
    <header className="flex items-center justify-between px-6 py-4">
      <Link href={ROUTES.home} className="flex items-center gap-2">
        <span className="flex h-8 w-8 items-center justify-center rounded bg-teal-600 text-lg text-white">
          +
        </span>
        <span className="text-xl font-semibold text-gray-900">DocStatus</span>
      </Link>
      <nav className="flex items-center gap-3">
        <Button variant="secondary" href={ROUTES.login}>
          Login
        </Button>
        <Button variant="primary" href={ROUTES.register}>
          Register
        </Button>
      </nav>
    </header>
  );
}
