"use client";

import React from "react";
import Link from "next/link";

// ─── Icons ────────────────────────────────────────────────────────────────────

const ShieldCheckIcon = ({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    className={className}
    style={color ? { color } : undefined}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const HospitalSquareIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const StethoscopeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);
const ClockIcon = ({
  className = "",
  color,
}: {
  className?: string;
  color?: string;
}) => (
  <svg
    className={className}
    style={color ? { color } : undefined}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const DownloadIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 15v4a2 2 0 01-2 2H5a2 2 0 01-2-2v-4" />
    <polyline points="7 10 12 15 17 10" />
    <line x1="12" y1="15" x2="12" y2="3" />
  </svg>
);
const SearchIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const FilterIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="6" x2="20" y2="6" />
    <line x1="8" y1="12" x2="16" y2="12" />
    <line x1="11" y1="18" x2="13" y2="18" />
  </svg>
);
const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const MapPinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const MonitorIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const ClipboardListIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2" />
    <rect x="9" y="3" width="6" height="4" rx="1" />
    <line x1="9" y1="12" x2="15" y2="12" />
    <line x1="9" y1="16" x2="12" y2="16" />
  </svg>
);
const HospitalPlusIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 9l9-7 9 7v11a2 2 0 01-2 2H5a2 2 0 01-2-2z" />
    <polyline points="9 22 9 12 15 12 15 22" />
    <line x1="12" y1="8" x2="12" y2="4" />
    <line x1="10" y1="6" x2="14" y2="6" />
  </svg>
);

// ─── Hospital Card Component ───────────────────────────────────────────────────

interface HospitalCardProps {
  initial: string;
  name: string;
  location: string;
  timeLabel: string;
  topBorder: string;
  avatarBg: string;
  avatarTextColor: string;
  badgeColor: string;
  clockColor: string;
  timeColor: string;
}

function HospitalCard({
  initial,
  name,
  location,
  timeLabel,
  topBorder,
  avatarBg,
  avatarTextColor,
  badgeColor,
  clockColor,
  timeColor,
}: HospitalCardProps) {
  return (
    <div
      className="flex flex-col overflow-hidden rounded-3xl bg-white shadow-sm"
      style={{
        border: "1px solid #F1F5F9",
        borderTop: `4px solid ${topBorder}`,
      }}
    >
      {/* Card body — avatar, name, location */}
      <div className="flex flex-1 flex-col items-center px-6 pt-8 pb-6 text-center">
        {/* Avatar */}
        <div className="relative mb-4 h-[90px] w-[90px]">
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{ backgroundColor: avatarBg }}
          >
            <span
              className="text-[38px] leading-none font-extrabold"
              style={{ color: avatarTextColor }}
            >
              {initial}
            </span>
          </div>
          {/* Shield badge */}
          <div className="absolute right-0 bottom-0 flex h-7 w-7 items-center justify-center rounded-full bg-white shadow-md">
            <ShieldCheckIcon className="h-4 w-4" color={badgeColor} />
          </div>
        </div>

        {/* Name */}
        <h3 className="mb-1 text-[20px] font-bold text-[#1A202C]">{name}</h3>

        {/* Location */}
        <div className="flex items-center justify-center gap-1 text-gray-400">
          <MapPinIcon className="h-[13px] w-[13px]" />
          <span className="text-[13px]">{location}</span>
        </div>
      </div>

      {/* Divider */}
      <div className="mx-5 border-t border-gray-100" />

      {/* Time in Queue */}
      <div className="flex flex-col items-center px-5 py-5">
        <p
          className="mb-3 font-bold tracking-widest text-gray-400 uppercase"
          style={{ fontSize: "9px", letterSpacing: "0.18em" }}
        >
          Time in Queue
        </p>
        <div className="flex items-center gap-2 rounded-full border border-gray-200 bg-white px-5 py-2 whitespace-nowrap shadow-[0px_1px_3px_0px_rgba(0,0,0,0.08)]">
          <ClockIcon
            className="h-[15px] w-[15px] flex-shrink-0"
            color={clockColor}
          />
          <span className="text-[13px] font-bold text-[#1A202C]">
            {timeLabel}
          </span>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-5 pb-5">
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-full bg-[#1A202C] py-3 text-[13px] font-bold text-white transition-colors hover:bg-gray-800">
          <MonitorIcon className="h-[14px] w-[14px]" />
          Review Application
        </button>
      </div>
    </div>
  );
}

// ─── Page ─────────────────────────────────────────────────────────────────────

export default function AdminDashboardPage() {
  return (
    <div className="min-h-screen bg-[#F2F2ED]">
      <div className="mx-auto max-w-6xl px-8 py-7">
        {/* Breadcrumb */}
        <div className="mb-2 flex items-center gap-2">
          <span
            className="rounded-full bg-[#E6F6F4] px-3 py-1 font-bold text-[#3D8F87] uppercase"
            style={{
              fontSize: "12px",
              lineHeight: "16px",
              letterSpacing: "0.6px",
            }}
          >
            Requests Queue
          </span>
          <span className="text-[14px] leading-[20px] font-normal text-[#718096]">
            •
          </span>
          <span className="text-[14px] leading-[20px] font-medium text-[#718096]">
            Pending Approvals
          </span>
        </div>

        {/* Page Header */}
        <div className="mb-7 flex items-center justify-between">
          <h1
            className="text-[36px] leading-[40px] font-extrabold text-[#2D3748]"
            style={{ letterSpacing: "-0.9px" }}
          >
            Verification Dashboard
          </h1>
          <div className="flex items-center gap-2.5">
            <button className="flex h-[48px] items-center gap-2 rounded-[24px] border border-[#E2E8F0] bg-white px-6 font-[Manrope] text-[14px] leading-[20px] font-bold text-[#2D3748] shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)] transition-colors hover:bg-gray-50">
              <ClockIcon className="h-[15px] w-[15px] text-gray-500" />
              Audit Log
            </button>
            <button className="flex h-[48px] items-center gap-2 rounded-[24px] bg-gray-900 px-6 font-[Manrope] text-[14px] leading-[20px] font-bold text-white shadow-[0px_4px_6px_-4px_rgba(0,0,0,0.10),0px_10px_15px_-3px_rgba(0,0,0,0.10)] transition-colors hover:bg-gray-800">
              <DownloadIcon className="h-[15px] w-[15px]" />
              Export Report
            </button>
          </div>
        </div>

        {/* Stats Row */}
        <div className="mb-7 grid grid-cols-3 gap-4">
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

        {/* ── Pending Verification Queue ── */}
        <div className="rounded-[48px] border border-[#F1F5F9] bg-white p-8 shadow-[0px_1px_2px_0px_rgba(0,0,0,0.05)]">
          {/* Section header */}
          <div className="mb-5 flex items-center justify-between">
            <div className="flex flex-col items-start justify-start gap-1">
              <div className="mb-0.5 flex items-center gap-2.5">
                <div className="flex items-center gap-2">
                  <div className="flex items-center justify-center rounded-[24px] bg-[#FEFCE8] p-2">
                    <ClipboardListIcon className="h-4 w-4 text-amber-600" />
                  </div>
                  <h2 className="text-[24px] leading-[32px] font-bold text-[#2D3748]">
                    Pending Verification Queue
                  </h2>
                </div>
              </div>
              <p className="ml-[4px] font-[Manrope] text-[14px] leading-[20px] font-normal text-[#718096]">
                3 new hospital requests require your immediate review
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2.5">
              <div className="relative">
                <SearchIcon className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Hospital, City or Date..."
                  className="w-[320px] rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] pt-[12px] pr-[16px] pb-[13px] pl-[36px] text-[14px] leading-none font-medium text-[#718096] placeholder-[#718096]/70 transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none"
                />
              </div>
              <button className="flex h-[46px] items-center gap-1.5 rounded-[24px] border border-[#E2E8F0] bg-[#F8FAFC] p-[6px] text-[14px] leading-[20px] font-bold whitespace-nowrap text-[#2D3748] transition-colors hover:bg-gray-100">
                <FilterIcon className="h-[13px] w-[13px] text-gray-500" />
                Sort by Date (Newest)
                <ChevronDownIcon className="h-[13px] w-[13px] text-gray-400" />
              </button>
            </div>
          </div>

          {/* Cards Grid */}
          <div className="grid grid-cols-4 gap-4">
            <HospitalCard
              initial="H"
              name="Hope Valley"
              location="Austin, TX"
              timeLabel="Requested 2h ago"
              topBorder="#F59E0B"
              avatarBg="#FEF9C3"
              avatarTextColor="#D97706"
              badgeColor="#FBBF24"
              clockColor="#FBBF24"
              timeColor="#92400E"
            />

            <HospitalCard
              initial="R"
              name="Riverdale Com."
              location="Portland, OR"
              timeLabel="Requested 5h ago"
              topBorder="#93C5FD"
              avatarBg="#DBEAFE"
              avatarTextColor="#7BA6E8"
              badgeColor="#60A5FA"
              clockColor="#60A5FA"
              timeColor="#1D4ED8"
            />

            <HospitalCard
              initial="L"
              name="Lakeside Ctr"
              location="Chicago, IL"
              timeLabel="Requested 1d ago"
              topBorder="#A78BFA"
              avatarBg="#EDE9FE"
              avatarTextColor="#C4B5FD"
              badgeColor="#A78BFA"
              clockColor="#9CA3AF"
              timeColor="#374151"
            />

            {/* Invite Hospital — dashed */}
            <div className="group flex cursor-pointer flex-col items-center justify-center rounded-2xl border-2 border-dashed border-gray-300 p-6 text-center transition-all hover:border-gray-400 hover:bg-white/50">
              <div
                className="mb-3 flex h-[80px] w-[80px] items-center justify-center rounded-[16px] bg-white transition-colors group-hover:bg-white/90"
                style={{
                  boxShadow:
                    "0px 4px 6px -4px rgba(0,0,0,0.10), 0px 10px 15px -3px rgba(0,0,0,0.10)",
                }}
              >
                <HospitalPlusIcon className="h-8 w-8 text-gray-400" />
              </div>
              <h3 className="mb-1.5 text-[14px] font-bold text-gray-700">
                Invite Hospital
              </h3>
              <p className="max-w-[115px] text-[11px] leading-[1.65] text-gray-400">
                Send an invitation link manually to onboard a new partner.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
