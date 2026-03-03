"use client";

import React, { useState } from "react";
import Link from "next/link";

// ─── Icons ─────────────────────────────────────────────────────────────────────

const ArrowLeftIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="19" y1="12" x2="5" y2="12" />
    <polyline points="12 19 5 12 12 5" />
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
const TrashIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="3 6 5 6 21 6" />
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6" />
    <path d="M10 11v6M14 11v6M9 6V4h6v2" />
  </svg>
);

// ── Hospital-specific icons (matched exactly to image) ────────────────────────

// Blue: square frame hospital cross (St. Mary's)
const IconHospitalBox = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// Purple: heart with pulse wave (Cedar Sinai)
const IconHeartPulse = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M20.84 4.61a5.5 5.5 0 00-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 00-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 000-7.78z" />
    <polyline points="22 12 18 12 15 20 9 4 6 12 2 12" />
  </svg>
);

// Orange: briefcase/bag with medical cross (Northwest)
const IconMedBag = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="7" width="20" height="14" rx="3" />
    <path d="M16 7V5a2 2 0 00-2-2h-4a2 2 0 00-2 2v2" />
    <line x1="12" y1="11" x2="12" y2="17" />
    <line x1="9" y1="14" x2="15" y2="14" />
  </svg>
);

// Gray: asterisk * (Downtown Clinic – inactive)
const IconAsterisk = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="2" x2="12" y2="22" />
    <line x1="20" y1="7" x2="4" y2="17" />
    <line x1="20" y1="17" x2="4" y2="7" />
  </svg>
);

// Teal: two stethoscopes / medical tools (Unity General)
const IconMedTools = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);

// Violet: hospital cross in rounded square (Kindred)
const IconHospitalCross = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="1.7"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);

// Stat box icon (blue filled grid)
const IconGridFilled = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <rect x="3" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="3" width="7" height="7" rx="1.5" />
    <rect x="14" y="14" width="7" height="7" rx="1.5" />
    <rect x="3" y="14" width="7" height="7" rx="1.5" />
  </svg>
);

// ─── Types ─────────────────────────────────────────────────────────────────────

type HospitalStatus = "OPERATIONAL" | "REVIEWING" | "INACTIVE";
type IconType = "blue" | "purple" | "orange" | "gray" | "teal" | "violet";

interface Hospital {
  id: string;
  name: string;
  address: string;
  status: HospitalStatus;
  totalDoctors: number | null;
  dailyVisits: number | string | null;
  iconType: IconType;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const hospitals: Hospital[] = [
  {
    id: "1",
    name: "St. Mary's General Hospital",
    address: "123 Healthcare Blvd, New York, NY 10001",
    status: "OPERATIONAL",
    totalDoctors: 142,
    dailyVisits: "850+",
    iconType: "blue",
  },
  {
    id: "2",
    name: "Cedar Sinai Medical Center",
    address: "8700 Beverly Blvd, Los Angeles, CA 90048",
    status: "OPERATIONAL",
    totalDoctors: 320,
    dailyVisits: "2.1k",
    iconType: "purple",
  },
  {
    id: "3",
    name: "Northwest Community",
    address: "800 West Central Road, Arlington...",
    status: "REVIEWING",
    totalDoctors: null,
    dailyVisits: null,
    iconType: "orange",
  },
  {
    id: "4",
    name: "Downtown Clinic Annex",
    address: "450 Sutter St, San Francisco, CA 94108",
    status: "INACTIVE",
    totalDoctors: 12,
    dailyVisits: 0,
    iconType: "gray",
  },
  {
    id: "5",
    name: "Unity General",
    address: "55 Fruit St, Boston, MA 02114",
    status: "OPERATIONAL",
    totalDoctors: 54,
    dailyVisits: 320,
    iconType: "teal",
  },
  {
    id: "6",
    name: "Kindred Hospital",
    address: "201 W 67th St, New York, NY 10023",
    status: "OPERATIONAL",
    totalDoctors: 89,
    dailyVisits: 600,
    iconType: "violet",
  },
];

// ─── Icon map ──────────────────────────────────────────────────────────────────

const iconMap: Record<
  IconType,
  { bg: string; color: string; Icon: React.FC<{ className?: string }> }
> = {
  blue: { bg: "#ECF0FF", color: "#4F72EA", Icon: IconHospitalBox },
  purple: { bg: "#F5EEFF", color: "#9B59E8", Icon: IconHeartPulse },
  orange: { bg: "#FFF3E8", color: "#EE8133", Icon: IconMedBag },
  gray: { bg: "#F2F3F5", color: "#9CA3AF", Icon: IconAsterisk },
  teal: { bg: "#E8FBF5", color: "#17C986", Icon: IconMedTools },
  violet: { bg: "#EDEEFF", color: "#6366F1", Icon: IconHospitalCross },
};

// ─── Status config ─────────────────────────────────────────────────────────────

const statusCfg: Record<
  HospitalStatus,
  { label: string; dotCls: string; textColor: string; bgColor: string }
> = {
  OPERATIONAL: {
    label: "OPERATIONAL",
    dotCls: "bg-emerald-500",
    textColor: "#059669",
    bgColor: "#ECFDF5",
  },
  REVIEWING: {
    label: "REVIEWING",
    dotCls: "bg-amber-400",
    textColor: "#D97706",
    bgColor: "#FFFBEB",
  },
  INACTIVE: {
    label: "INACTIVE",
    dotCls: "bg-gray-400",
    textColor: "#6B7280",
    bgColor: "#F3F4F6",
  },
};

// ─── Hospital Card ─────────────────────────────────────────────────────────────

function HospitalCard({ h }: { h: Hospital }) {
  const sc = statusCfg[h.status];
  const ico = iconMap[h.iconType];
  const { Icon } = ico;

  const deleteLabel =
    h.status === "REVIEWING"
      ? "Reject Application"
      : h.status === "INACTIVE"
        ? "Delete Permanently"
        : "Delete Hospital";

  return (
    <div
      className="flex flex-col bg-white transition-shadow duration-200 hover:shadow-lg"
      style={{
        borderRadius: 20,
        boxShadow: "0 1px 8px 0 rgba(0,0,0,0.07)",
        border: "1px solid #F1F2F4",
      }}
    >
      {/* ── Main content area ── */}
      <div className="flex flex-col items-center px-5 pt-4 pb-3">
        {/* Status badge — flush right */}
        <div className="mb-3 flex w-full justify-end">
          <span
            className="inline-flex items-center gap-[5px] font-bold"
            style={{
              fontSize: "9.5px",
              letterSpacing: "0.07em",
              color: sc.textColor,
              background: sc.bgColor,
              padding: "4px 9px",
              borderRadius: 999,
            }}
          >
            <span
              className={`h-[6px] w-[6px] flex-shrink-0 rounded-full ${sc.dotCls}`}
            />
            {sc.label}
          </span>
        </div>

        {/* Hospital icon */}
        <div
          className="mb-4 flex items-center justify-center"
          style={{
            width: 80,
            height: 80,
            borderRadius: 18,
            background: ico.bg,
            color: ico.color,
          }}
        >
          <Icon className="h-9 w-9" />
        </div>

        {/* Name */}
        <h3
          className="mb-1.5 text-center leading-snug font-bold text-gray-900"
          style={{ fontSize: 16 }}
        >
          {h.name}
        </h3>

        {/* Address */}
        <div className="mb-4 flex items-center justify-center gap-[5px]">
          <MapPinIcon className="h-[11px] w-[11px] flex-shrink-0 text-gray-400" />
          <span className="text-center text-[11.5px] leading-tight text-gray-400">
            {h.address}
          </span>
        </div>

        {/* Divider */}
        <div className="mb-3 w-full border-t border-gray-100" />

        {/* Stats */}
        <div className="mb-1 grid w-full grid-cols-2 gap-3">
          <div>
            <p
              className="mb-1.5 font-bold text-gray-400 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.1em" }}
            >
              Total Doctors
            </p>
            <span
              className="leading-none font-extrabold text-gray-900"
              style={{ fontSize: 24 }}
            >
              {h.totalDoctors !== null ? h.totalDoctors : "–"}
            </span>
          </div>
          <div>
            <p
              className="mb-1.5 font-bold text-gray-400 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.1em" }}
            >
              Daily Visits
            </p>
            <span
              className="leading-none font-extrabold text-gray-900"
              style={{ fontSize: 24 }}
            >
              {h.dailyVisits !== null ? h.dailyVisits : "–"}
            </span>
          </div>
        </div>
      </div>

      {/* ── Buttons ── */}
      <div className="mt-1 flex flex-col gap-2 px-4 pb-4">
        {/* Primary row */}
        {h.status === "OPERATIONAL" && (
          <div className="grid grid-cols-2 gap-2">
            <Link
              href={`/dashboard/admin/hospitals/${h.id}`}
              className="bg-white py-2.5 text-center font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                border: "1.5px solid #E5E7EB",
                borderRadius: 12,
              }}
            >
              Edit
            </Link>
            <button
              className="bg-white py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                border: "1.5px solid #E5E7EB",
                borderRadius: 12,
              }}
            >
              Access
            </button>
          </div>
        )}

        {h.status === "REVIEWING" && (
          <div className="grid grid-cols-2 gap-2">
            <button
              className="py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                fontSize: 12.5,
                background: "#3B82F6",
                borderRadius: 12,
              }}
            >
              Approve
            </button>
            <button
              className="bg-white py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                border: "1.5px solid #E5E7EB",
                borderRadius: 12,
              }}
            >
              Docs
            </button>
          </div>
        )}

        {h.status === "INACTIVE" && (
          <div className="grid grid-cols-2 gap-2">
            <button
              className="bg-white py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                border: "1.5px solid #E5E7EB",
                borderRadius: 12,
              }}
            >
              Reactivate
            </button>
            <button
              className="bg-white py-2.5 font-semibold text-gray-700 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                border: "1.5px solid #E5E7EB",
                borderRadius: 12,
              }}
            >
              History
            </button>
          </div>
        )}

        {/* Delete / Reject */}
        <button
          className="flex w-full items-center justify-center gap-[6px] py-2.5 font-semibold transition-opacity hover:opacity-90"
          style={{
            fontSize: 12.5,
            color: "#EF4444",
            background: "#FEF2F2",
            border: "1.5px solid #FEE2E2",
            borderRadius: 12,
          }}
        >
          <TrashIcon className="h-[13px] w-[13px]" />
          {deleteLabel}
        </button>
      </div>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HospitalManagementPage() {
  const [search, setSearch] = useState("");

  const filtered = hospitals.filter(
    (h) =>
      h.name.toLowerCase().includes(search.toLowerCase()) ||
      h.address.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen" style={{ background: "#F0F2F5" }}>
      <div className="mx-auto max-w-6xl px-8 py-7">
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
          <span className="text-[13px] text-gray-400">Hospital Management</span>
        </div>

        {/* ── Page Header ── */}
        <div className="mb-7 flex items-start justify-between">
          {/* Left */}
          <div className="flex-1 pr-8">
            <h1 className="mb-2 text-[34px] leading-[1.15] font-extrabold tracking-tight text-gray-900">
              Hospital Management
            </h1>
            <p className="max-w-[400px] text-[13.5px] leading-relaxed text-gray-500">
              Manage registered hospitals, monitor operational status, and
              configure institutional access levels.
            </p>
          </div>

          {/* Right: stat card */}
          <div
            className="flex-shrink-0 bg-white"
            style={{
              borderRadius: 20,
              border: "1px solid #F1F2F4",
              boxShadow: "0 1px 8px 0 rgba(0,0,0,0.07)",
              padding: "16px 20px",
              minWidth: 220,
            }}
          >
            <div className="mb-2 flex items-center justify-between">
              <div
                className="flex items-center justify-center"
                style={{
                  width: 44,
                  height: 44,
                  borderRadius: 12,
                  background: "#EEF4FF",
                }}
              >
                <IconGridFilled className="h-5 w-5 text-blue-500" />
              </div>
              <span className="text-[11px] font-bold text-emerald-500">
                ↑ 12% Growth
              </span>
            </div>
            <p
              className="mb-1 font-bold text-gray-400 uppercase"
              style={{ fontSize: "9px", letterSpacing: "0.1em" }}
            >
              Total Registered Hospitals
            </p>
            <span className="text-[30px] leading-none font-extrabold text-gray-900">
              1,248
            </span>
          </div>
        </div>

        {/* ── Filter Bar ── */}
        <div className="mb-6 flex items-center gap-3">
          <div className="relative flex-1">
            <SearchIcon className="absolute top-1/2 left-3 h-[15px] w-[15px] -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search hospitals by name, ID or address..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full border border-gray-200 bg-white pr-4 pl-10 text-gray-600 placeholder-gray-400 transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
              style={{
                fontSize: 13,
                padding: "9px 14px 9px 38px",
                borderRadius: 12,
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            />
          </div>
          {["Filter by City", "Status", "Newest First"].map((label) => (
            <button
              key={label}
              className="flex items-center gap-1.5 bg-white font-medium whitespace-nowrap text-gray-600 transition-colors hover:bg-gray-50"
              style={{
                fontSize: 12.5,
                padding: "9px 12px",
                border: "1px solid #E5E7EB",
                borderRadius: 12,
                boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
              }}
            >
              {label}
              <ChevronDownIcon className="h-[14px] w-[14px] text-gray-400" />
            </button>
          ))}
        </div>

        {/* ── Cards Grid ── */}
        <div className="mb-8 grid grid-cols-3 gap-5">
          {filtered.map((hospital) => (
            <HospitalCard key={hospital.id} h={hospital} />
          ))}
          {filtered.length === 0 && (
            <div
              className="col-span-3 py-20 text-center text-gray-400"
              style={{ fontSize: 14 }}
            >
              No hospitals match your search.
            </div>
          )}
        </div>

        {/* ── Load More ── */}
        <div className="flex justify-center">
          <button
            className="flex items-center gap-2 bg-white font-semibold text-gray-700 transition-colors hover:bg-gray-50"
            style={{
              fontSize: 13,
              padding: "11px 28px",
              border: "1px solid #E5E7EB",
              borderRadius: 14,
              boxShadow: "0 1px 3px rgba(0,0,0,0.05)",
            }}
          >
            Load More Hospitals
            <ChevronDownIcon className="h-4 w-4 text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
