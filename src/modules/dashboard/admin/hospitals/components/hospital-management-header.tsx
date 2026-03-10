import Link from "next/link";
import { ArrowLeftIcon, GridFilledIcon } from "@/components/icons";
import { HospitalManagementStatsSkeleton } from "./skeletons";

interface HospitalManagementHeaderProps {
  totalHospitals: number;
  percentageChange?: number;
  isLoading?: boolean;
}

export function HospitalManagementHeader({
  totalHospitals,
  percentageChange,
  isLoading,
}: HospitalManagementHeaderProps) {
  return (
    <>
      <div className="mb-5 flex items-center gap-2">
        <Link
          href="/dashboard/admin"
          className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-700"
        >
          <ArrowLeftIcon className="h-[14px] w-[14px]" />
          Verification Dashboard
        </Link>
        <span className="text-gray-300">/</span>
        <span className="text-[13px] text-gray-400">Hospital Management</span>
      </div>

      <div className="mb-7 flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
        <div className="flex-1 lg:pr-8">
          <h1
            className="mb-2 font-[Manrope] text-[32px] leading-[36px] font-extrabold text-[#0F172A] sm:text-[40px] sm:leading-[44px] md:text-[48px] md:leading-[48px]"
            style={{ letterSpacing: "-1.2px" }}
          >
            Hospital Management
          </h1>
          <p className="max-w-[600px] text-[16px] leading-[24px] font-medium text-[#64748B] sm:text-[18px] sm:leading-[28px]">
            Manage registered hospitals, monitor operational status, and
            configure institutional access levels.
          </p>
        </div>

        {isLoading ? (
          <HospitalManagementStatsSkeleton />
        ) : (
          <div
            className="flex w-full flex-shrink-0 flex-col justify-between bg-white lg:w-[384px]"
            style={{
              minHeight: 186,
              borderRadius: 24,
              border: "1px solid #F1F2F4",
              boxShadow: "0px 4px 24px -4px rgba(0,0,0,0.04)",
              padding: "20px 24px",
            }}
          >
            <div className="flex items-center justify-between">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 56,
                  height: 56,
                  borderRadius: 16,
                  background: "#EEF4FF",
                  boxShadow:
                    "0px 4px 6px -4px rgba(25,127,230,0.20), 0px 10px 15px -3px rgba(25,127,230,0.20)",
                }}
              >
                <GridFilledIcon className="h-6 w-6 text-blue-500" />
              </div>
              {percentageChange !== undefined && (
                <span className="rounded-full bg-[#ECFDF5] px-3 py-[6px] text-[12px] leading-[16px] font-bold text-[#059669]">
                  ↑ {percentageChange}% Growth
                </span>
              )}
            </div>
            <div>
              <p
                className="mb-1 leading-[20px] font-bold text-[#94A3B8] uppercase"
                style={{ fontSize: "14px", letterSpacing: "0.7px" }}
              >
                Total Registered Hospitals
              </p>
              <span className="text-[36px] leading-[40px] font-extrabold text-[#0F172A]">
                {totalHospitals.toLocaleString()}
              </span>
            </div>
          </div>
        )}
      </div>
    </>
  );
}
