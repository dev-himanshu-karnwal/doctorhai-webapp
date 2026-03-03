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
      className="flex flex-col rounded-2xl bg-white shadow-sm"
      style={{
        border: "1px solid #F3F4F6",
        borderTop: `3px solid ${topBorder}`,
      }}
    >
      {/* Card body */}
      <div className="flex flex-1 flex-col items-center px-5 pt-7 pb-4 text-center">
        {/* Avatar */}
        <div className="relative h-[74px] w-[74px]">
          <div
            className="flex h-full w-full items-center justify-center rounded-full"
            style={{ backgroundColor: avatarBg }}
          >
            <span
              className="text-[28px] leading-none font-extrabold"
              style={{ color: avatarTextColor }}
            >
              {initial}
            </span>
          </div>
          {/* Shield badge */}
          <div className="absolute right-0 bottom-0 flex h-5 w-5 items-center justify-center rounded-full bg-white shadow-md">
            <ShieldCheckIcon className="h-3 w-3" color={badgeColor} />
          </div>
        </div>

        {/* Name */}
        <h3 className="mt-3 mb-0.5 text-[15px] font-bold text-gray-900">
          {name}
        </h3>

        {/* Location */}
        <div className="mb-5 flex items-center justify-center gap-1">
          <MapPinIcon className="h-[11px] w-[11px] text-gray-400" />
          <span className="text-[11px] text-gray-400">{location}</span>
        </div>

        {/* Time in Queue */}
        <div className="w-full">
          <p
            className="mb-1.5 font-bold text-gray-400 uppercase"
            style={{ fontSize: "9px", letterSpacing: "0.12em" }}
          >
            Time in Queue
          </p>
          <div className="flex items-center justify-center gap-1.5">
            <ClockIcon className="h-[13px] w-[13px]" color={clockColor} />
            <span
              className="text-[12px] font-semibold"
              style={{ color: timeColor }}
            >
              {timeLabel}
            </span>
          </div>
        </div>
      </div>

      {/* CTA Button */}
      <div className="px-4 pb-4">
        <button className="flex w-full cursor-pointer items-center justify-center gap-2 rounded-[14px] bg-gray-900 py-[10px] text-[12px] font-bold text-white transition-colors hover:bg-gray-800">
          <MonitorIcon className="h-[13px] w-[13px]" />
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
            className="rounded-md border border-teal-200 bg-teal-50 px-2.5 py-[3px] font-bold text-teal-700 uppercase"
            style={{ fontSize: "10px", letterSpacing: "0.1em" }}
          >
            Requests Queue
          </span>
          <span className="text-xs text-gray-400">•</span>
          <span className="text-[13px] font-medium text-gray-500">
            Pending Approvals
          </span>
        </div>

        {/* Page Header */}
        <div className="mb-7 flex items-center justify-between">
          <h1 className="text-[34px] font-extrabold tracking-tight text-gray-900">
            Verification Dashboard
          </h1>
          <div className="flex items-center gap-2.5">
            <button className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-4 py-2 text-[13px] font-medium text-gray-700 shadow-sm transition-colors hover:bg-gray-50">
              <ClockIcon className="h-[15px] w-[15px] text-gray-500" />
              Audit Log
            </button>
            <button className="flex items-center gap-1.5 rounded-xl bg-gray-900 px-4 py-2 text-[13px] font-semibold text-white shadow-sm transition-colors hover:bg-gray-800">
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
            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-teal-200 hover:shadow-md hover:ring-1 hover:ring-teal-100"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#E6F7F6] transition-colors group-hover:bg-teal-100">
              <HospitalSquareIcon className="h-[22px] w-[22px] text-teal-600" />
            </div>
            <div>
              <p
                className="mb-0.5 font-bold text-gray-400 uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Total Hospitals
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[30px] leading-none font-extrabold text-gray-900">
                  142
                </span>
                <span className="text-[12px] font-bold text-emerald-500">
                  ↑12%
                </span>
              </div>
            </div>
          </Link>

          {/* Total Doctors */}
          <Link
            href="/dashboard/admin/doctors"
            className="group flex cursor-pointer items-center gap-4 rounded-2xl border border-gray-100 bg-white p-5 shadow-sm transition-all hover:border-indigo-200 hover:shadow-md hover:ring-1 hover:ring-indigo-100"
          >
            <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-[#EEF2FF] transition-colors group-hover:bg-indigo-100">
              <StethoscopeIcon className="h-[22px] w-[22px] text-indigo-500" />
            </div>
            <div>
              <p
                className="mb-0.5 font-bold text-gray-400 uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Total Doctors
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[30px] leading-none font-extrabold text-gray-900">
                  3,850
                </span>
                <span className="text-[12px] font-bold text-emerald-500">
                  ↑5%
                </span>
              </div>
            </div>
          </Link>

          {/* Active Doctors */}
          <div
            className="flex items-center gap-4 rounded-2xl border border-violet-100 p-5 shadow-sm"
            style={{
              background: "linear-gradient(135deg, #FAF5FF 0%, #EDE9FE 100%)",
            }}
          >
            <div className="relative flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-xl bg-white/70">
              <ShieldCheckIcon className="h-[22px] w-[22px] text-violet-500" />
              <span className="absolute -top-[5px] -right-[5px] h-[10px] w-[10px] rounded-full border-2 border-white bg-violet-500" />
            </div>
            <div>
              <p
                className="mb-0.5 font-bold text-violet-400 uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Active Doctors
              </p>
              <div className="flex items-baseline gap-2">
                <span className="text-[30px] leading-none font-extrabold text-gray-900">
                  1,204
                </span>
                <span className="rounded-full bg-violet-100 px-1.5 py-0.5 text-[11px] font-bold text-violet-600">
                  Live
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ── Pending Verification Queue ── */}
        <div className="rounded-2xl border border-gray-200 bg-[#F7F7F2] p-6">
          {/* Section header */}
          <div className="mb-5 flex items-start justify-between">
            <div>
              <div className="mb-0.5 flex items-center gap-2.5">
                <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-amber-100">
                  <ClipboardListIcon className="h-4 w-4 text-amber-600" />
                </div>
                <h2 className="text-[19px] font-extrabold text-gray-900">
                  Pending Verification Queue
                </h2>
              </div>
              <p className="ml-[42px] text-[13px] text-gray-500">
                3 new hospital requests require your immediate review
              </p>
            </div>
            <div className="flex flex-shrink-0 items-center gap-2.5">
              <div className="relative">
                <SearchIcon className="absolute top-1/2 left-3 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search by Hospital, City or Date..."
                  className="w-60 rounded-xl border border-gray-200 bg-white py-[7px] pr-3 pl-9 text-[12px] text-gray-600 placeholder-gray-400 transition-all focus:border-violet-300 focus:ring-2 focus:ring-violet-100 focus:outline-none"
                />
              </div>
              <button className="flex items-center gap-1.5 rounded-xl border border-gray-200 bg-white px-3 py-[7px] text-[12px] font-medium whitespace-nowrap text-gray-600 transition-colors hover:bg-gray-50">
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
              <div className="mb-3 flex h-11 w-11 items-center justify-center rounded-xl bg-gray-100 transition-colors group-hover:bg-gray-200">
                <HospitalPlusIcon className="h-5 w-5 text-gray-400" />
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
