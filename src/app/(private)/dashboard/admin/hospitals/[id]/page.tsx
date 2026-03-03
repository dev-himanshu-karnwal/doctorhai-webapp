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
const GlobeIcon = ({ className = "" }: { className?: string }) => (
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2"
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
    strokeWidth="2.5"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M11 4H4a2 2 0 00-2 2v14a2 2 0 002 2h14a2 2 0 002-2v-7" />
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4 9.5-9.5z" />
  </svg>
);
const ClockIcon = ({ className = "" }: { className?: string }) => (
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
    <polyline points="12 6 12 12 16 14" />
  </svg>
);
const AlertOctagonIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="7.86 2 16.14 2 22 7.86 22 16.14 16.14 22 7.86 22 2 16.14 2 7.86 7.86 2" />
    <line x1="12" y1="8" x2="12" y2="12" />
    <line x1="12" y1="16" x2="12.01" y2="16" />
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
const HospitalIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="4" />
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const RefreshIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="1 4 1 10 7 10" />
    <path d="M3.51 15a9 9 0 102.13-9.36L1 10" />
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
      initials: "S",
      name: "Dr. Sarah Jenkins",
      specialty: "Cardiology • Chief",
      status: "Active",
      avatarBg: "#E0F2FE",
      avatarColor: "#0284C7",
    },
    {
      initials: "MJ",
      name: "Dr. Michael Johnson",
      specialty: "Neurology",
      status: "On Leave",
      avatarBg: "#1E293B",
      avatarColor: "#FFFFFF",
    },
    {
      initials: "EL",
      name: "Dr. Emily Larson",
      specialty: "Pediatrics",
      status: "Active",
      avatarBg: "#EDE9FE",
      avatarColor: "#7C3AED",
    },
  ];

  const labelStyle: React.CSSProperties = {
    fontSize: "10px",
    letterSpacing: "0.08em",
    fontWeight: 700,
    color: "#9CA3AF",
    textTransform: "uppercase",
    marginBottom: 6,
    display: "block",
  };

  const inputStyle: React.CSSProperties = {
    width: "100%",
    border: "1.5px solid #E5E7EB",
    borderRadius: 10,
    padding: "9px 12px",
    fontSize: 13,
    color: "#374151",
    outline: "none",
    background: "#FFFFFF",
  };

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
          <Link
            href="/dashboard/admin/hospitals"
            className="text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-700"
          >
            Hospital Management
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[13px] text-gray-400">
            St. Mary&apos;s General Hospital
          </span>
        </div>

        {/* ── Two-column layout ── */}
        <div className="grid grid-cols-[1fr_300px] gap-5">
          {/* ════ LEFT COLUMN ════ */}
          <div className="flex flex-col gap-5">
            {/* ── Hospital Header Card ── */}
            <div
              className="flex items-center gap-4 bg-white p-5"
              style={{
                borderRadius: 18,
                border: "1px solid #F1F2F4",
                boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
              }}
            >
              {/* Icon */}
              <div
                className="flex flex-shrink-0 items-center justify-center text-emerald-600"
                style={{
                  width: 60,
                  height: 60,
                  borderRadius: 14,
                  background: "#E8FDF5",
                }}
              >
                <HospitalIcon className="h-7 w-7" />
              </div>

              {/* Info */}
              <div className="min-w-0 flex-1">
                <div className="mb-1 flex flex-wrap items-center gap-2">
                  <h1 className="text-[20px] leading-tight font-extrabold text-gray-900">
                    St. Mary&apos;s General Hospital
                  </h1>
                  <span
                    className="rounded-md bg-blue-50 px-2 py-0.5 font-bold text-blue-600"
                    style={{ fontSize: "11px", letterSpacing: "0.04em" }}
                  >
                    ID: HOSP-8821
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-3">
                  <div className="flex items-center gap-1">
                    <MapPinIcon className="h-[11px] w-[11px] text-gray-400" />
                    <span className="text-[12px] text-gray-400">
                      123 Healthcare Blvd, New York, NY 10001
                    </span>
                  </div>
                  <span className="text-gray-300">•</span>
                  <div className="flex items-center gap-1">
                    <GlobeIcon className="h-[11px] w-[11px] text-gray-400" />
                    <span className="text-[12px] text-gray-400">
                      www.stmarys-health.org
                    </span>
                  </div>
                </div>
              </div>

              {/* Operational toggle */}
              <div className="flex flex-shrink-0 flex-col items-end gap-1">
                <div className="flex items-center gap-2">
                  {/* Toggle */}
                  <button
                    onClick={() => setOperational(!operational)}
                    className="relative inline-flex items-center transition-colors duration-200 focus:outline-none"
                    style={{
                      width: 44,
                      height: 24,
                      borderRadius: 999,
                      background: operational ? "#10B981" : "#D1D5DB",
                    }}
                  >
                    <span
                      className="absolute rounded-full bg-white shadow transition-transform duration-200"
                      style={{
                        width: 18,
                        height: 18,
                        top: 3,
                        left: operational ? 23 : 3,
                      }}
                    />
                  </button>
                </div>
                <div className="text-right">
                  <p
                    className="font-bold text-gray-700"
                    style={{ fontSize: 11 }}
                  >
                    {operational ? "OPERATIONAL" : "INACTIVE"}
                  </p>
                  <p className="text-gray-400" style={{ fontSize: 10 }}>
                    {operational
                      ? "Accepting new patients"
                      : "Not accepting patients"}
                  </p>
                </div>
              </div>
            </div>

            {/* ── Stats Row ── */}
            <div className="grid grid-cols-4 gap-3">
              {/* Total Doctors */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #F1F2F4",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "#EEF2FF",
                    }}
                  >
                    <StethoscopeIcon className="h-[14px] w-[14px] text-indigo-500" />
                  </div>
                  <span
                    className="font-bold text-emerald-500"
                    style={{ fontSize: 11 }}
                  >
                    ↑4%
                  </span>
                </div>
                <p
                  className="mb-1 font-bold text-gray-400 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  Total Doctors
                </p>
                <span className="text-[26px] leading-none font-extrabold text-gray-900">
                  142
                </span>
              </div>

              {/* Active Sessions */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #F1F2F4",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "#FEF3C7",
                    }}
                  >
                    <MonitorIcon className="h-[14px] w-[14px] text-amber-500" />
                  </div>
                  <span
                    className="font-bold text-emerald-500"
                    style={{ fontSize: 11 }}
                  >
                    ↑12%
                  </span>
                </div>
                <p
                  className="mb-1 font-bold text-gray-400 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  Active Sessions
                </p>
                <span className="text-[26px] leading-none font-extrabold text-gray-900">
                  58
                </span>
              </div>

              {/* Monthly Visits */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #F1F2F4",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "#FFF7ED",
                    }}
                  >
                    <CalendarIcon className="h-[14px] w-[14px] text-orange-500" />
                  </div>
                  <span
                    className="font-bold text-gray-400"
                    style={{ fontSize: 11 }}
                  >
                    Stable
                  </span>
                </div>
                <p
                  className="mb-1 font-bold text-gray-400 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  Monthly Visits
                </p>
                <span className="text-[26px] leading-none font-extrabold text-gray-900">
                  24.5k
                </span>
              </div>

              {/* Verification Status */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #F1F2F4",
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                }}
              >
                <div className="mb-2 flex items-center justify-between">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 30,
                      height: 30,
                      borderRadius: 8,
                      background: "#ECFDF5",
                    }}
                  >
                    <ShieldCheckIcon className="h-[14px] w-[14px] text-emerald-500" />
                  </div>
                  <span
                    className="font-bold text-emerald-500"
                    style={{ fontSize: 11 }}
                  >
                    Verified
                  </span>
                </div>
                <p
                  className="mb-1 font-bold text-gray-400 uppercase"
                  style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                >
                  Verification Status
                </p>
                <span className="text-[15px] leading-tight font-extrabold text-gray-900">
                  Fully Compliant
                </span>
              </div>
            </div>

            {/* ── Hospital Configuration ── */}
            <div
              className="bg-white p-5"
              style={{
                borderRadius: 18,
                border: "1px solid #F1F2F4",
                boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
              }}
            >
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <SettingsIcon className="h-4 w-4 text-gray-500" />
                  <h2 className="text-[15px] font-extrabold text-gray-900">
                    Hospital Configuration
                  </h2>
                </div>
                <button className="text-[12.5px] font-semibold text-emerald-600 transition-colors hover:text-emerald-700">
                  Save Changes
                </button>
              </div>

              <div className="flex flex-col gap-4">
                {/* Public URL */}
                <div>
                  <label style={labelStyle}>Public URL</label>
                  <div
                    className="flex"
                    style={{
                      border: "1.5px solid #E5E7EB",
                      borderRadius: 10,
                      overflow: "hidden",
                    }}
                  >
                    <span
                      className="flex items-center border-r border-gray-200 bg-gray-50 px-3 text-gray-400"
                      style={{ fontSize: 13, whiteSpace: "nowrap" }}
                    >
                      https://
                    </span>
                    <input
                      type="text"
                      value={url}
                      onChange={(e) => setUrl(e.target.value)}
                      className="flex-1 px-3 focus:outline-none"
                      style={{
                        fontSize: 13,
                        color: "#374151",
                        padding: "9px 12px",
                      }}
                    />
                  </div>
                </div>

                {/* Email + Phone row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>Primary Contact Email</label>
                    <input
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      style={inputStyle}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>Emergency Phone</label>
                    <input
                      type="text"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      style={inputStyle}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                  </div>
                </div>

                {/* Street Address */}
                <div>
                  <label style={labelStyle}>Street Address</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    style={inputStyle}
                    className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                  />
                </div>

                {/* City + District row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      style={inputStyle}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                  </div>
                  <div>
                    <label style={labelStyle}>District / Borough</label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      style={inputStyle}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                  </div>
                </div>

                {/* State + ZIP row */}
                <div className="grid grid-cols-2 gap-4">
                  <div>
                    <label style={labelStyle}>State</label>
                    <div className="relative">
                      <select
                        value={state}
                        onChange={(e) => setState(e.target.value)}
                        className="w-full appearance-none transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                        style={{ ...inputStyle, paddingRight: 36 }}
                      >
                        <option>New York</option>
                        <option>California</option>
                        <option>Texas</option>
                        <option>Florida</option>
                        <option>Illinois</option>
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3 h-4 w-4 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label style={labelStyle}>ZIP Code</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      style={inputStyle}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                    />
                  </div>
                </div>
              </div>
            </div>

            {/* ── Doctor Management ── */}
            <div
              className="bg-white p-5"
              style={{
                borderRadius: 18,
                border: "1px solid #F1F2F4",
                boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
              }}
            >
              {/* Header */}
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <UsersIcon className="h-4 w-4 text-gray-500" />
                  <h2 className="text-[15px] font-extrabold text-gray-900">
                    Doctor Management
                  </h2>
                </div>
                <div className="flex items-center gap-2">
                  <div className="relative">
                    <SearchIcon className="absolute top-1/2 left-2.5 h-[13px] w-[13px] -translate-y-1/2 text-gray-400" />
                    <input
                      type="text"
                      placeholder="Search doctors..."
                      value={doctorSearch}
                      onChange={(e) => setDoctorSearch(e.target.value)}
                      className="pr-3 pl-8 text-gray-600 placeholder-gray-400 transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100 focus:outline-none"
                      style={{
                        fontSize: 12.5,
                        padding: "7px 12px 7px 30px",
                        border: "1.5px solid #E5E7EB",
                        borderRadius: 10,
                      }}
                    />
                  </div>
                  <button
                    className="flex items-center gap-1.5 px-3 py-2 font-semibold text-white transition-opacity hover:opacity-90"
                    style={{
                      fontSize: 12.5,
                      background: "#059669",
                      borderRadius: 10,
                    }}
                  >
                    <PlusIcon className="h-[13px] w-[13px]" />
                    New
                  </button>
                </div>
              </div>

              {/* Table header */}
              <div className="mb-1 grid grid-cols-[1fr_120px_80px] gap-3 border-b border-gray-100 pb-2">
                {["Name & Specialty", "Status", "Actions"].map((h) => (
                  <span
                    key={h}
                    className="font-bold text-gray-400 uppercase"
                    style={{ fontSize: "9px", letterSpacing: "0.1em" }}
                  >
                    {h}
                  </span>
                ))}
              </div>

              {/* Rows */}
              {doctors
                .filter((d) =>
                  d.name.toLowerCase().includes(doctorSearch.toLowerCase())
                )
                .map((doc, i) => (
                  <div
                    key={i}
                    className="grid grid-cols-[1fr_120px_80px] items-center gap-3 border-b border-gray-50 py-3 last:border-0"
                  >
                    {/* Name + specialty */}
                    <div className="flex items-center gap-3">
                      <div
                        className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full font-bold"
                        style={{
                          background: doc.avatarBg,
                          color: doc.avatarColor,
                          fontSize: 12,
                        }}
                      >
                        {doc.initials}
                      </div>
                      <div>
                        <p
                          className="font-semibold text-gray-900"
                          style={{ fontSize: 13 }}
                        >
                          {doc.name}
                        </p>
                        <p className="text-gray-400" style={{ fontSize: 11 }}>
                          {doc.specialty}
                        </p>
                      </div>
                    </div>

                    {/* Status */}
                    <div>
                      <span
                        className="inline-flex items-center gap-1.5 font-bold"
                        style={{
                          fontSize: "10px",
                          letterSpacing: "0.06em",
                          color:
                            doc.status === "Active" ? "#059669" : "#D97706",
                          background:
                            doc.status === "Active" ? "#ECFDF5" : "#FFFBEB",
                          padding: "4px 10px",
                          borderRadius: 999,
                        }}
                      >
                        <span
                          className="h-[5px] w-[5px] rounded-full"
                          style={{
                            background:
                              doc.status === "Active" ? "#10B981" : "#F59E0B",
                          }}
                        />
                        {doc.status}
                      </span>
                    </div>

                    {/* Actions */}
                    <div className="flex items-center gap-2">
                      <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200">
                        <PencilIcon className="h-[13px] w-[13px] text-gray-500" />
                      </button>
                      <button className="flex h-7 w-7 items-center justify-center rounded-lg bg-gray-100 transition-colors hover:bg-gray-200">
                        <ClockIcon className="h-[13px] w-[13px] text-gray-500" />
                      </button>
                    </div>
                  </div>
                ))}

              {/* View All */}
              <div className="mt-3 text-center">
                <button className="text-[12.5px] font-semibold text-gray-500 transition-colors hover:text-gray-700">
                  View All Doctors
                </button>
              </div>
            </div>
          </div>
          {/* end left col */}

          {/* ════ RIGHT COLUMN ════ */}
          <div className="flex flex-col gap-5">
            {/* ── Admin Controls ── */}
            <div
              className="bg-white p-5"
              style={{
                borderRadius: 18,
                border: "1px solid #F1F2F4",
                boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
              }}
            >
              <div className="mb-5 flex items-center gap-2">
                <AlertOctagonIcon className="h-4 w-4 text-red-500" />
                <h2 className="text-[15px] font-extrabold text-gray-900">
                  Admin Controls
                </h2>
              </div>

              {/* Suspend Account */}
              <div className="mb-4">
                <p
                  className="mb-1 font-bold text-gray-800"
                  style={{ fontSize: 13 }}
                >
                  Suspend Account
                </p>
                <p
                  className="mb-3 leading-relaxed text-gray-400"
                  style={{ fontSize: 11.5 }}
                >
                  Temporarily disable all access for this hospital. Data is
                  preserved but users cannot log in.
                </p>
                <button
                  className="flex w-full items-center justify-center gap-2 py-2.5 font-semibold transition-opacity hover:opacity-90"
                  style={{
                    fontSize: 12.5,
                    color: "#D97706",
                    background: "#FEF9C3",
                    border: "1.5px solid #FDE68A",
                    borderRadius: 12,
                  }}
                >
                  <AlertOctagonIcon className="h-[13px] w-[13px]" />
                  Suspend Access
                </button>
              </div>

              {/* Divider */}
              <div className="my-4 border-t border-gray-100" />

              {/* Security Reset */}
              <div className="mb-5">
                <p
                  className="mb-1 font-bold text-gray-800"
                  style={{ fontSize: 13 }}
                >
                  Security Reset
                </p>
                <p
                  className="mb-3 leading-relaxed text-gray-400"
                  style={{ fontSize: 11.5 }}
                >
                  Force a password reset for the main hospital administrator
                  account.
                </p>
                <button
                  className="flex w-full items-center justify-center gap-2 py-2.5 font-semibold transition-colors hover:bg-gray-100"
                  style={{
                    fontSize: 12.5,
                    color: "#374151",
                    background: "#F9FAFB",
                    border: "1.5px solid #E5E7EB",
                    borderRadius: 12,
                  }}
                >
                  <RefreshIcon className="h-[13px] w-[13px]" />
                  Reset Password
                </button>
              </div>

              {/* Danger Zone */}
              <div className="border-t border-red-100 pt-4">
                <p
                  className="mb-1 font-bold text-red-500"
                  style={{ fontSize: 13 }}
                >
                  Danger Zone
                </p>
                <p
                  className="mb-3 leading-relaxed text-gray-400"
                  style={{ fontSize: 11.5 }}
                >
                  This action cannot be undone. All data will be permanently
                  wiped.
                </p>
                <button
                  className="flex w-full items-center justify-center gap-2 py-2.5 font-semibold text-white transition-opacity hover:opacity-90"
                  style={{
                    fontSize: 12.5,
                    background: "#EF4444",
                    borderRadius: 12,
                  }}
                >
                  <TrashIcon className="h-[13px] w-[13px]" />
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
