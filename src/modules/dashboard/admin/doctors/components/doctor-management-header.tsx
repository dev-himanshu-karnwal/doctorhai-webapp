import Link from "next/link";
import { ArrowLeftIcon, UsersIcon } from "../icons";
import { useStats } from "@/modules/stats/hooks/use-stats";
import { Skeleton } from "@/components/ui/skeleton";

export function DoctorManagementHeader() {
  const { doctorStats, isLoading } = useStats();

  return (
    <>
      {/* ── Breadcrumb ── */}
      <div className="mb-5 flex items-center gap-2">
        <Link
          href="/dashboard/admin"
          className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          <ArrowLeftIcon className="h-[14px] w-[14px]" />
          Verification Dashboard
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-[13px] text-gray-400">Doctor Management</span>
      </div>

      {/* ── Page Header ── */}
      <div className="mb-7 flex flex-col gap-6 sm:flex-row sm:items-start sm:justify-between">
        <div className="flex-1">
          <h1 className="mb-2 text-[28px] leading-[1.15] font-extrabold tracking-tight text-gray-900 sm:text-[34px]">
            Doctor Management
          </h1>
          <p className="text-[13.5px] leading-relaxed text-gray-500">
            Oversee, edit, and manage doctor profiles across the platform.
          </p>
        </div>

        {/* Right: stat card */}
        <div
          className="flex w-full flex-shrink-0 items-center gap-3 bg-white sm:w-auto"
          style={{
            borderRadius: 18,
            border: "1px solid #F1F2F4",
            boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
            padding: "14px 18px",
          }}
        >
          <div
            className="flex items-center justify-center text-indigo-500"
            style={{
              width: 42,
              height: 42,
              borderRadius: 11,
              background: "#EEF2FF",
            }}
          >
            <UsersIcon className="h-5 w-5" />
          </div>
          <div>
            <p
              className="font-bold text-gray-400 uppercase"
              style={{
                fontSize: "9px",
                letterSpacing: "0.1em",
                marginBottom: 2,
              }}
            >
              Total Doctors
            </p>
            {isLoading ? (
              <Skeleton className="h-7 w-16" />
            ) : (
              <span className="text-[24px] leading-none font-extrabold text-gray-900 sm:text-[28px]">
                {doctorStats?.total_doctor_count?.toLocaleString() || "0"}
              </span>
            )}
          </div>
        </div>
      </div>
    </>
  );
}
