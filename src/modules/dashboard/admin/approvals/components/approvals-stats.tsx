import Link from "next/link";
import { HospitalSquareIcon, StethoscopeIcon, ShieldCheckIcon } from "./icons";

export function ApprovalsStats() {
  return (
    <div className="mb-7 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {/* Total Hospitals — clickable */}
      <Link
        href="/dashboard/admin/hospitals"
        className="group flex min-h-[90px] cursor-pointer items-center gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all hover:border-teal-200 hover:shadow-md hover:ring-1 hover:ring-teal-100"
      >
        <div className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[24px] bg-[#E6F6F4] transition-colors group-hover:bg-teal-100">
          <HospitalSquareIcon className="h-[22px] w-[22px] text-teal-600" />
        </div>
        <div>
          <p
            className="mb-0.5 leading-[16px] font-bold text-[#718096] uppercase"
            style={{ fontSize: "12px", letterSpacing: "0.3px" }}
          >
            Total Hospitals
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] leading-[24px] font-extrabold text-[#2D3748]">
              142
            </span>
            <span className="rounded-[8px] bg-[#F0FDF4] px-[6px] py-[2px] font-[Manrope] text-[12px] leading-[16px] font-bold text-[#16A34A]">
              ↑12%
            </span>
          </div>
        </div>
      </Link>

      {/* Total Doctors */}
      <Link
        href="/dashboard/admin/doctors"
        className="group flex min-h-[90px] cursor-pointer items-center gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all hover:border-indigo-200 hover:shadow-md hover:ring-1 hover:ring-indigo-100"
      >
        <div className="flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[24px] bg-[#EEF2FF] transition-colors group-hover:bg-indigo-100">
          <StethoscopeIcon className="h-[22px] w-[22px] text-indigo-500" />
        </div>
        <div>
          <p
            className="mb-0.5 leading-[16px] font-bold text-[#718096] uppercase"
            style={{ fontSize: "12px", letterSpacing: "0.3px" }}
          >
            Total Doctors
          </p>
          <div className="flex items-baseline gap-2">
            <span className="text-[24px] leading-[24px] font-extrabold text-[#2D3748]">
              3,850
            </span>
            <span className="rounded-[8px] bg-[#F0FDF4] px-[6px] py-[2px] font-[Manrope] text-[12px] leading-[16px] font-bold text-[#16A34A]">
              ↑5%
            </span>
          </div>
        </div>
      </Link>

      {/* Active Doctors */}
      <div className="flex min-h-[90px] cursor-pointer items-center gap-4 rounded-[32px] border border-[#F1F5F9] bg-white p-5 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-all hover:border-[#FAF5FF] hover:shadow-md hover:ring-1 hover:ring-[#FAF5FF]">
        <div className="relative flex h-[48px] w-[48px] flex-shrink-0 items-center justify-center rounded-[24px] bg-[#FAF5FF]">
          <ShieldCheckIcon className="h-[22px] w-[22px] text-violet-500" />
          <span className="absolute -top-[-2px] -right-[2px] h-[10px] w-[10px] rounded-full border-2 border-white bg-violet-500" />
        </div>
        <div>
          <p
            className="mb-0.5 leading-[16px] font-bold text-[#718096] uppercase"
            style={{ fontSize: "12px", letterSpacing: "0.3px" }}
          >
            Active Doctors
          </p>
          <div className="flex items-center gap-2">
            <span className="text-[24px] leading-[24px] font-extrabold text-[#2D3748]">
              1,204
            </span>
            <span className="rounded-[8px] bg-[#FAF5FF] px-[6px] py-[2px] font-[Manrope] text-[12px] leading-[16px] font-bold text-[#9333EA]">
              Live
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}
