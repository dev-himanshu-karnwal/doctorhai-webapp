"use client";

import React, { useState } from "react";

// ─── Icons ─────────────────────────────────────────────────────────────────────

const MapPinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);
const GlobeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="2" y1="12" x2="22" y2="12" />
    <path d="M12 2a15.3 15.3 0 014 10 15.3 15.3 0 01-4 10 15.3 15.3 0 01-4-10A15.3 15.3 0 0112 2z" />
  </svg>
);
const StethoscopeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 105 2H4a2 2 0 00-2 2v5a6 6 0 006 6 6 6 0 006-6V4a2 2 0 00-2-2h-1a.2.2 0 10.3.3" />
    <path d="M8 15v1a6 6 0 006 6 6 6 0 006-6v-4" />
    <circle cx="20" cy="10" r="2" />
  </svg>
);
const MonitorIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="2" y="3" width="20" height="14" rx="2" />
    <line x1="8" y1="21" x2="16" y2="21" />
    <line x1="12" y1="17" x2="12" y2="21" />
  </svg>
);
const CalendarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" />
    <line x1="16" y1="2" x2="16" y2="6" />
    <line x1="8" y1="2" x2="8" y2="6" />
    <line x1="3" y1="10" x2="21" y2="10" />
  </svg>
);
const ShieldCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <polyline points="9 12 11 14 15 10" />
  </svg>
);
const SettingsIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="3" />
    <path d="M19.4 15a1.65 1.65 0 00.33 1.82l.06.06a2 2 0 010 2.83 2 2 0 01-2.83 0l-.06-.06a1.65 1.65 0 00-1.82-.33 1.65 1.65 0 00-1 1.51V21a2 2 0 01-4 0v-.09A1.65 1.65 0 009 19.4a1.65 1.65 0 00-1.82.33l-.06.06a2 2 0 01-2.83-2.83l.06-.06A1.65 1.65 0 004.68 15a1.65 1.65 0 00-1.51-1H3a2 2 0 010-4h.09A1.65 1.65 0 004.6 9a1.65 1.65 0 00-.33-1.82l-.06-.06a2 2 0 012.83-2.83l.06.06A1.65 1.65 0 009 4.68a1.65 1.65 0 001-1.51V3a2 2 0 014 0v.09a1.65 1.65 0 001 1.51 1.65 1.65 0 001.82-.33l.06-.06a2 2 0 012.83 2.83l-.06.06A1.65 1.65 0 0019.4 9a1.65 1.65 0 001.51 1H21a2 2 0 010 4h-.09a1.65 1.65 0 00-1.51 1z" />
  </svg>
);
const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87M16 3.13a4 4 0 010 7.75" />
  </svg>
);
const SearchIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="11" cy="11" r="8" />
    <line x1="21" y1="21" x2="16.65" y2="16.65" />
  </svg>
);
const PlusIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);
const PencilIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 20h9" />
    <path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z" />
  </svg>
);
const BanIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
  </svg>
);
const RefreshIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 12a9 9 0 1 0 9-9 9.75 9.75 0 0 0-6.74 2.74L3 8" />
    <path d="M3 3v5h5" />
  </svg>
);
const TrashIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 6h18" />
    <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2" />
    <line x1="10" y1="11" x2="10" y2="17" />
    <line x1="14" y1="11" x2="14" y2="17" />
  </svg>
);
const HospitalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);

const AdminControlsIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />
    <circle cx="12" cy="11" r="3" />
  </svg>
);

// ─── Shared SVG Components ───────────────────────────────────────────────────

const StatusDot = ({ active }: { active: boolean }) => (
  <svg
    className="h-[6px] w-[6px] shrink-0 fill-current"
    style={{ color: active ? "#10b981" : "#f59e0b" }}
    viewBox="0 0 8 8"
  >
    <circle cx="4" cy="4" r="4" />
  </svg>
);

const TrendUpIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="19" x2="12" y2="5" />
    <polyline points="5 12 12 5 19 12" />
  </svg>
);

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function HospitalDetailPage() {
  const [operational, setOperational] = useState(true);
  const [url, setUrl] = useState("stmarys-health.org");
  const [email, setEmail] = useState("admin@stmarys.org");
  const [phone, setPhone] = useState("+1 (212) 555-0199");
  const [street, setStreet] = useState("123 Healthcare Blvd");
  const [city, setCity] = useState("New York");
  const [district, setDistrict] = useState("Manhattan");
  const [state, setState] = useState("New York");
  const [zip, setZip] = useState("10001");
  const [doctorSearch, setDoctorSearch] = useState("");

  const doctors = [
    {
      initials: "",
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiology • Chief",
      status: "Active",
      avatarBg: "#e2e8f0",
      avatarColor: "#64748b",
    },
    {
      initials: "MJ",
      name: "Dr. Michael Johnson",
      specialty: "Neurology",
      status: "On Leave",
      avatarBg: "#e0e7ff",
      avatarColor: "#4f46e5",
    },
    {
      initials: "EL",
      name: "Dr. Emily Larson",
      specialty: "Pediatrics",
      status: "Active",
      avatarBg: "#fce7f3",
      avatarColor: "#db2777",
    },
  ];

  const labelStyle: React.CSSProperties = {
    fontSize: "9.5px",
    letterSpacing: "0.06em",
    fontWeight: 700,
    color: "#64748b", // slate-500
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "none",
    borderRadius: 8,
    padding: "10px 14px",
    fontSize: 13,
    fontWeight: 500,
    color: "#334155", // slate-700
    outline: "none",
    background: "#f8fafc", // slate-50
    borderWidth: "1px",
    borderColor: "#f1f5f9",
  };

  return (
    <div className="min-h-screen bg-[#f1fcf8] pt-6 pb-12 font-sans">
      <div className="mx-auto max-w-[1040px] px-8">
        {/* ── Hospital Header Card ── */}
        <div
          className="mb-6 flex items-center justify-between bg-white p-7"
          style={{
            borderRadius: 16,
            boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
            border: "1px solid #f1f5f9",
          }}
        >
          <div className="flex items-center gap-5">
            {/* Icon */}
            <div
              className="flex flex-shrink-0 items-center justify-center text-[#10b981]" // emerald-500
              style={{
                width: 60,
                height: 60,
                borderRadius: 14,
                background: "#ecfdf5", // emerald-50
                border: "1px solid #d1fae5",
              }}
            >
              <HospitalIcon className="h-7 w-7" />
            </div>

            {/* Info */}
            <div className="min-w-0 flex-1">
              <div className="mb-1.5 flex flex-wrap items-center gap-3">
                <h1 className="text-[22px] leading-tight font-bold tracking-tight text-[#0f172a]">
                  St. Mary&apos;s General Hospital
                </h1>
                <span
                  className="rounded-[6px] bg-[#eff6ff] px-2.5 py-1 font-bold text-[#3b82f6]"
                  style={{ fontSize: "10px", letterSpacing: "0.02em" }}
                >
                  ID: HOSP-8821
                </span>
              </div>
              <div className="flex flex-wrap items-center gap-3">
                <div className="flex items-center gap-1.5 text-gray-500">
                  <MapPinIcon className="h-3.5 w-3.5 text-[#94a3b8]" />
                  <span className="text-[13px] font-medium text-[#64748b]">
                    123 Healthcare Blvd, New York, NY 10001
                  </span>
                </div>
                <span className="text-[#cbd5e1]">•</span>
                <div className="flex items-center gap-1.5 text-gray-500">
                  <GlobeIcon className="h-3.5 w-3.5 text-[#94a3b8]" />
                  <span className="text-[13px] font-medium text-[#64748b]">
                    www.stmarys-health.org
                  </span>
                </div>
              </div>
            </div>
          </div>

          {/* Operational toggle wrapper */}
          <div className="flex flex-shrink-0">
            <div className="flex items-center gap-4 rounded-[12px] border border-[#f1f5f9] bg-[#f8fafc] px-4 py-2.5">
              {/* Toggle */}
              <button
                onClick={() => setOperational(!operational)}
                className="relative inline-flex shrink-0 items-center transition-colors duration-200 focus:outline-none"
                style={{
                  width: 44,
                  height: 24,
                  borderRadius: 999,
                  background: operational ? "#e2e8f0" : "#d1d5db",
                }}
              >
                <span
                  className="absolute rounded-full bg-white shadow-sm transition-transform duration-200"
                  style={{
                    width: 18,
                    height: 18,
                    top: 3,
                    left: operational ? 3 : 23,
                  }}
                />
              </button>
              <div className="flex flex-col">
                <p
                  className="font-bold text-[#0f172a]"
                  style={{ fontSize: "11px", letterSpacing: "0.02em" }}
                >
                  {operational ? "OPERATIONAL" : "INACTIVE"}
                </p>
                <p
                  className="font-medium text-[#64748b]"
                  style={{ fontSize: "10px" }}
                >
                  {operational
                    ? "Accepting new patients"
                    : "Not accepting patients"}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* ── Stats Row ── */}
        <div className="mb-6 grid grid-cols-4 gap-4">
          {/* Total Doctors */}
          <div
            className="flex flex-col justify-between bg-white p-5"
            style={{
              borderRadius: 16,
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
              border: "1px solid #f1f5f9",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex items-center justify-center text-[#3b82f6]" // blue-500
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#eff6ff", // blue-50
                }}
              >
                <StethoscopeIcon className="h-4 w-4" />
              </div>
              <div
                className="flex items-center gap-1 rounded-[6px] bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981]"
                style={{ fontSize: 10 }}
              >
                <TrendUpIcon className="h-2.5 w-2.5" />
                4%
              </div>
            </div>
            <div>
              <p
                className="mb-1.5 font-bold text-[#94a3b8] uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Total Doctors
              </p>
              <span className="text-[28px] leading-tight font-black text-[#0f172a]">
                142
              </span>
            </div>
          </div>

          {/* Active Sessions */}
          <div
            className="flex flex-col justify-between bg-white p-5"
            style={{
              borderRadius: 16,
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
              border: "1px solid #f1f5f9",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex items-center justify-center text-[#9333ea]" // purple-600
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#faf5ff", // fuchsia-50/purple-50
                }}
              >
                <MonitorIcon className="h-4 w-4" />
              </div>
              <div
                className="flex items-center gap-1 rounded-[6px] bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981]"
                style={{ fontSize: 10 }}
              >
                <TrendUpIcon className="h-2.5 w-2.5" />
                12%
              </div>
            </div>
            <div>
              <p
                className="mb-1.5 font-bold text-[#94a3b8] uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Active Sessions
              </p>
              <span className="text-[28px] leading-tight font-black text-[#0f172a]">
                58
              </span>
            </div>
          </div>

          {/* Monthly Visits */}
          <div
            className="flex flex-col justify-between bg-white p-5"
            style={{
              borderRadius: 16,
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
              border: "1px solid #f1f5f9",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex items-center justify-center text-[#f59e0b]" // amber-500
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#fffbeb", // amber-50
                }}
              >
                <CalendarIcon className="h-4 w-4" />
              </div>
              <div
                className="flex items-center rounded-[6px] bg-[#f1f5f9] px-2 py-0.5 font-bold text-[#64748b]"
                style={{ fontSize: 10 }}
              >
                Stable
              </div>
            </div>
            <div>
              <p
                className="mb-1.5 font-bold text-[#94a3b8] uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Monthly Visits
              </p>
              <span className="text-[28px] leading-tight font-black text-[#0f172a]">
                24.5k
              </span>
            </div>
          </div>

          {/* Verification Status */}
          <div
            className="flex flex-col justify-between bg-white p-5"
            style={{
              borderRadius: 16,
              boxShadow:
                "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
              border: "1px solid #f1f5f9",
            }}
          >
            <div className="mb-4 flex items-center justify-between">
              <div
                className="flex items-center justify-center text-[#10b981]" // emerald-500
                style={{
                  width: 32,
                  height: 32,
                  borderRadius: 8,
                  background: "#ecfdf5", // emerald-50
                }}
              >
                <ShieldCheckIcon className="h-4 w-4" />
              </div>
              <div
                className="flex items-center rounded-[6px] bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981]"
                style={{ fontSize: 10 }}
              >
                Verified
              </div>
            </div>
            <div>
              <p
                className="mb-1.5 font-bold text-[#94a3b8] uppercase"
                style={{ fontSize: "10px", letterSpacing: "0.08em" }}
              >
                Verification Status
              </p>
              <span className="text-[16px] leading-tight font-bold text-[#0f172a]">
                Fully Compliant
              </span>
            </div>
          </div>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-[1fr_310px] gap-6">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-6">
            {/* ── Hospital Configuration ── */}
            <div
              className="bg-white p-7"
              style={{
                borderRadius: 16,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <SettingsIcon className="h-4 w-4 text-[#10b981]" />
                  <h2 className="text-[16px] font-bold text-[#0f172a]">
                    Hospital Configuration
                  </h2>
                </div>
                <button className="text-[12.5px] font-bold text-[#059669] transition-colors hover:text-[#047857]">
                  Save Changes
                </button>
              </div>

              <div className="flex flex-col gap-5">
                {/* Public URL */}
                <div>
                  <label style={labelStyle}>Public URL</label>
                  <div
                    className="flex"
                    style={{
                      background: "#f8fafc",
                      borderRadius: 8,
                      overflow: "hidden",
                      border: "1px solid #f1f5f9",
                    }}
                  >
                    <span
                      className="flex items-center px-3.5 text-[#94a3b8]"
                      style={{ fontSize: 13, fontWeight: 500 }}
                    >
                      https://
                    </span>
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 focus:ring-1 focus:ring-emerald-200 focus:outline-none"
                      style={{
                        ...inputStyle,
                        background: "transparent",
                        paddingLeft: 0,
                        border: "none",
                      }}
                    />
                  </div>
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>Primary Contact Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      className="focus:ring-1 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Emergency Phone</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={inputStyle}
                      className="focus:ring-1 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                {/* Divider Line */}
                <div className="my-[2px] border-b border-dashed border-[#e2e8f0]" />

                {/* Street Address */}
                <div>
                  <label style={labelStyle}>Street Address</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    style={inputStyle}
                    className="focus:ring-1 focus:ring-emerald-200"
                  />
                </div>

                {/* City + District row */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={inputStyle}
                      className="focus:ring-1 focus:ring-emerald-200"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>District / Borough</label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      style={inputStyle}
                      className="focus:ring-1 focus:ring-emerald-200"
                    />
                  </div>
                </div>

                {/* State + ZIP row */}
                <div className="grid grid-cols-2 gap-5">
                  <div>
                    <label style={labelStyle}>State</label>
                    <div className="relative">
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full appearance-none focus:ring-1 focus:ring-emerald-200"
                        style={{ ...inputStyle, paddingRight: 36 }}
                      >
                        <option>New York</option>
                        <option>California</option>
                        <option>Texas</option>
                        <option>Florida</option>
                        <option>Illinois</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3.5 h-[14px] w-[14px] -translate-y-1/2 text-[#94a3b8]" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>ZIP Code</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      style={inputStyle}
                      className="focus:ring-1 focus:ring-emerald-200"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Doctor Management ── */}
            <div
              className="bg-white p-7"
              style={{
                borderRadius: 20,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
                border: "1px solid #f1f5f9",
              }}
            >
              {/* Header */}
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <UsersIcon className="h-5 w-5 text-[#0f766e]" />
                  <h2 className="text-[18px] font-bold text-[#0f172a]">
                    Doctor Management
                  </h2>
                </div>
                <div className="flex items-center gap-3">
                  <div className="relative">
                    <SearchIcon className="absolute top-1/2 left-3 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                    <input
                      type="text"
                      placeholder="Search doctors..."
                      value={doctorSearch}
                      onChange={(e) => setDoctorSearch(e.target.value)}
                      className="pr-3 pl-[34px] placeholder-[#94a3b8] focus:ring-1 focus:ring-emerald-200"
                      style={{
                        background: "#ffffff",
                        border: "1px solid #e2e8f0",
                        borderRadius: 8,
                        color: "#334155",
                        outline: "none",
                        paddingTop: "9px",
                        paddingBottom: "9px",
                        width: 220,
                        fontSize: "13px",
                        fontWeight: 500,
                      }}
                    />
                  </div>
                  <button
                    className="flex items-center justify-center gap-1.5 px-4 py-2 font-bold text-white hover:opacity-90"
                    style={{
                      fontSize: 13,
                      background: "#0f766e",
                      borderRadius: 8,
                    }}
                  >
                    <PlusIcon className="h-3.5 w-3.5" />
                    New
                  </button>
                </div>
              </div>

              {/* Table Container */}
              <div className="flex flex-col overflow-hidden rounded-[16px] border border-[#f1f5f9]">
                {/* Table header */}
                <div className="grid grid-cols-[1fr_100px_80px] gap-4 border-b border-[#f1f5f9] bg-white px-6 py-4">
                  {["Name & Specialty", "Status", "Actions"].map((h) => (
                    <span
                      key={h}
                      className="font-bold text-[#64748b] uppercase"
                      style={{ fontSize: "10.5px", letterSpacing: "0.06em" }}
                    >
                      {h}
                    </span>
                  ))}
                </div>

                {/* Rows */}
                <div className="flex flex-col bg-white">
                  {doctors
                    .filter((d) =>
                      d.name.toLowerCase().includes(doctorSearch.toLowerCase())
                    )
                    .map((doc, i) => (
                      <div
                        key={i}
                        className="grid grid-cols-[1fr_100px_80px] items-center gap-4 border-b border-[#f1f5f9] px-6 py-4 transition-colors last:border-0"
                      >
                        {/* Name + specialty */}
                        <div className="flex items-center gap-3.5">
                          <div
                            className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full font-bold"
                            style={{
                              background: doc.avatarBg,
                              color: doc.avatarColor,
                              fontSize: 13.5,
                            }}
                          >
                            {doc.initials}
                          </div>
                          <div>
                            <p
                              className="mb-0.5 font-bold text-[#0f172a]"
                              style={{ fontSize: 13.5 }}
                            >
                              {doc.name}
                            </p>
                            <p
                              className="font-medium text-[#64748b]"
                              style={{ fontSize: 12.5 }}
                            >
                              {doc.specialty}
                            </p>
                          </div>
                        </div>

                        {/* Status */}
                        <div>
                          <span
                            className="inline-flex items-center gap-1.5 font-bold"
                            style={{
                              fontSize: "11px",
                              letterSpacing: "0.02em",
                              color:
                                doc.status === "Active" ? "#10b981" : "#d97706",
                              background:
                                doc.status === "Active" ? "#ecfdf5" : "#fef3c7",
                              padding: "5px 10px",
                              borderRadius: 999,
                            }}
                          >
                            <StatusDot active={doc.status === "Active"} />
                            {doc.status}
                          </span>
                        </div>

                        {/* Actions */}
                        <div className="flex items-center gap-4">
                          <button className="text-[#94a3b8] transition-colors hover:text-[#0f172a]">
                            <PencilIcon className="h-[18px] w-[18px]" />
                          </button>
                          <button className="text-[#94a3b8] transition-colors hover:text-[#ef4444]">
                            <BanIcon className="h-[18px] w-[18px]" />
                          </button>
                        </div>
                      </div>
                    ))}
                </div>
              </div>

              {/* View All */}
              <div className="mt-6 text-center">
                <button className="text-[14px] font-bold text-[#64748b] transition-colors hover:text-[#0f172a]">
                  View All Doctors
                </button>
              </div>
            </div>
          </div>
          {/* end left col */}

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col gap-6">
            {/* ── Admin Controls ── */}
            <div
              className="bg-white p-7"
              style={{
                borderRadius: 16,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center gap-2.5 pb-2">
                <AdminControlsIcon className="h-[18px] w-[18px] text-[#ef4444]" />
                <h2 className="text-[16px] font-bold text-[#0f172a]">
                  Admin Controls
                </h2>
              </div>

              {/* Suspend Account */}
              <div className="mb-6">
                <div className="rounded-xl border border-[#f1f5f9] bg-white p-5">
                  <p
                    className="mb-1.5 font-bold text-[#0f172a]"
                    style={{ fontSize: 13 }}
                  >
                    Suspend Account
                  </p>
                  <p
                    className="mb-4 leading-[1.6] font-medium text-[#64748b]"
                    style={{ fontSize: 11.5 }}
                  >
                    Temporarily disable all access for this hospital. Data is
                    preserved but users cannot log in.
                  </p>
                  <button
                    className="flex w-full items-center justify-center gap-2 py-2.5 font-bold transition-opacity hover:opacity-90"
                    style={{
                      fontSize: 12.5,
                      color: "#b45309", // amber-700
                      background: "#fef3c7", // amber-100
                      borderRadius: 8,
                    }}
                  >
                    <BanIcon className="h-[14px] w-[14px]" />
                    Suspend Access
                  </button>
                </div>
              </div>

              {/* Security Reset */}
              <div className="mb-7">
                <div className="rounded-xl border border-[#f1f5f9] bg-white p-5">
                  <p
                    className="mb-1.5 font-bold text-[#0f172a]"
                    style={{ fontSize: 13 }}
                  >
                    Security Reset
                  </p>
                  <p
                    className="mb-4 leading-[1.6] font-medium text-[#64748b]"
                    style={{ fontSize: 11.5 }}
                  >
                    Force a password reset for the main hospital administrator
                    account.
                  </p>
                  <button
                    className="flex w-full items-center justify-center gap-2 py-2.5 font-bold transition-colors hover:bg-[#e2e8f0]"
                    style={{
                      fontSize: 12.5,
                      color: "#334155", // slate-700
                      background: "#e2e8f0", // slate-200
                      borderRadius: 8,
                    }}
                  >
                    <RefreshIcon className="h-[14px] w-[14px]" />
                    Reset Password
                  </button>
                </div>
              </div>

              {/* Danger Zone */}
              <div className="pt-2">
                <p
                  className="mb-1.5 font-bold text-[#ef4444]"
                  style={{ fontSize: 13 }}
                >
                  Danger Zone
                </p>
                <p
                  className="mb-4 leading-[1.6] font-medium text-[#64748b]"
                  style={{ fontSize: 11.5 }}
                >
                  This action cannot be undone. All data will be permanently
                  wiped.
                </p>
                <button
                  className="flex w-full items-center justify-center gap-2 py-2.5 font-bold text-white shadow-sm transition-colors hover:bg-red-600"
                  style={{
                    fontSize: 12.5,
                    background: "#dc2626", // red-600
                    borderRadius: 8,
                  }}
                >
                  <TrashIcon className="h-[14px] w-[14px]" />
                  Permanently Delete Hospital
                </button>
              </div>
            </div>
          </div>
          {/* end right col */}
        </div>
      </div>
    </div>
  );
}
