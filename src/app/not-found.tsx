import Link from "next/link";
import { Button } from "@/components/ui";

export default function NotFound() {
  return (
    <div className="flex min-h-[80vh] flex-col items-center justify-center px-4 py-12 text-center">
      <div className="relative mb-8">
        <h1 className="text-[120px] leading-none font-black text-[#4DB6AC]/10 sm:text-[180px]">
          404
        </h1>
        <div className="absolute inset-0 flex items-center justify-center">
          <svg
            className="h-24 w-24 text-[#4DB6AC] sm:h-32 sm:w-32"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1.5"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v2m0 4h.01m-6.938 4h13.856c1.54 0 2.502-1.667 1.732-3L13.732 4c-.77-1.333-2.694-1.333-3.464 0L3.34 16c-.77 1.333.192 3 1.732 3z"
            />
          </svg>
        </div>
      </div>

      <h2 className="mb-3 text-[24px] font-bold text-[#1A2B3D] sm:text-[32px]">
        Oops! Page Not Found
      </h2>
      <p className="mb-10 max-w-[480px] text-[16px] text-[#718096] sm:text-[18px]">
        The page you are looking for might have been removed, had its name
        changed, or is temporarily unavailable.
      </p>

      <Link href="/">
        <Button className="h-[52px] rounded-full bg-[#4DB6AC] px-10 text-[16px] font-bold text-white shadow-[0_8px_20px_rgba(77,182,172,0.3)] transition-all hover:bg-[#3DA59B] hover:shadow-[0_12px_24px_rgba(77,182,172,0.4)] active:scale-95">
          Back to Homepage
        </Button>
      </Link>
    </div>
  );
}
