import Link from "next/link";
import { Button } from "@/components/ui/button";

const ShieldAlertIcon = ({ size = 48 }: { size?: number }) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <path d="M12 8v4" />
    <path d="M12 16h.01" />
  </svg>
);

const HomeIcon = ({
  size = 20,
  className,
}: {
  size?: number;
  className?: string;
}) => (
  <svg
    width={size}
    height={size}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
    className={className}
  >
    <path d="m3 9 9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
  </svg>
);

export default function UnauthorizedPage() {
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-[#fcfdfe] p-6 text-center">
      {/* Background Decoration */}
      <div className="pointer-events-none absolute inset-0 overflow-hidden">
        <div className="absolute -top-[10%] -left-[10%] h-[40%] w-[40%] rounded-full bg-[#4ab4a5]/5 blur-[120px]" />
        <div className="absolute -right-[10%] -bottom-[10%] h-[40%] w-[40%] rounded-full bg-[#3D8F87]/5 blur-[120px]" />
      </div>

      <div className="relative z-10 w-full max-w-[500px] rounded-[40px] border border-[#f1f5f9] bg-white p-8 shadow-[0_20px_50px_rgba(0,0,0,0.04)] sm:p-12">
        {/* Icon Container */}
        <div className="mx-auto mb-8 flex h-24 w-24 items-center justify-center rounded-[32px] bg-red-50 text-red-500 shadow-inner">
          <ShieldAlertIcon size={48} />
        </div>

        {/* Text Content */}
        <h1 className="mb-4 text-[28px] leading-tight font-bold text-[#1e293b] sm:text-[32px]">
          Unauthorized Access
        </h1>
        <p className="mb-10 text-[15px] leading-relaxed font-medium text-[#64748b] sm:text-[16px]">
          It looks like you don&apos;t have permission to access this page.
          Please make sure you are logged in with the correct account.
        </p>

        {/* Actions */}
        <div className="flex flex-col gap-3">
          <Link href="/" className="w-full">
            <Button className="h-14 w-full rounded-2xl bg-[#3D8F87] text-[16px] font-bold text-white shadow-lg shadow-[#3D8F87]/20 transition-all hover:bg-[#2d6d67] active:scale-[0.98]">
              <HomeIcon size={20} className="mr-2" />
              <span className="ml-2">Return Home</span>
            </Button>
          </Link>
        </div>
      </div>

      {/* Footer Support Info */}
      <p className="relative z-10 mt-8 text-[13px] font-medium text-[#94a3b8]">
        Need help? Contact our support at{" "}
        <span className="cursor-pointer text-[#3D8F87] hover:underline">
          support@doctorhai.com
        </span>
      </p>
    </div>
  );
}
