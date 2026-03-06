"use client";

import React, { useState } from "react";

// ─── Icons ─────────────────────────────────────────────────────────────────────

// Use a solid ID card
const IdCardIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="16" rx="3" ry="3" />
    <circle cx="8" cy="10" r="2.5" />
    <line x1="13" y1="9" x2="18" y2="9" />
    <line x1="13" y1="13" x2="18" y2="13" />
    <line x1="5" y1="16" x2="18" y2="16" />
  </svg>
);
const UserLockIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <rect x="15" y="11" width="8" height="6" rx="2" />
    <path d="M19 11V9a2 2 0 00-4 0v2" />
  </svg>
);
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
const HospitalLinkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M3 21h18" />
    <path d="M5 21V5a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v16" />
    <path d="M9 21v-4a2 2 0 0 1 2-2h2a2 2 0 0 1 2 2v4" />
    <line x1="10" y1="9" x2="14" y2="9" />
    <line x1="12" y1="7" x2="12" y2="11" />
  </svg>
);
const MedicalCrossIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" ry="3" />
    <line x1="12" y1="8" x2="12" y2="16" />
    <line x1="8" y1="12" x2="16" y2="12" />
  </svg>
);
const UnlinkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.84 12.25l1.72-1.71a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71" />
    <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71" />
    <line x1="8" y1="2" x2="8" y2="5" />
    <line x1="2" y1="8" x2="5" y2="8" />
    <line x1="16" y1="19" x2="16" y2="22" />
    <line x1="19" y1="16" x2="22" y2="16" />
    <line x1="4" y1="4" x2="20" y2="20" />
  </svg>
);
const CopyIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2.5" ry="2.5" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
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
const SaveIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
  </svg>
);
const AlertTriangleIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
    <line x1="12" y1="9" x2="12" y2="13" />
    <line x1="12" y1="17" x2="12.01" y2="17" />
  </svg>
);
const InfoIcon = ({ className = "" }: { className?: string }) => (
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
    <line x1="12" y1="16" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12.01" y2="8" />
  </svg>
);
const ChevronDownIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
const AsteriskIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v16M8 8l8 8M16 8l-8 8M4 12h16" />
  </svg>
);
const CheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="4"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

// ─── Doctor Avatar ──────────────────────────────────────────────────────────────

function DoctorProfileAvatar() {
  return (
    <div className="relative flex-shrink-0" style={{ width: 90, height: 90 }}>
      {/* Circle container for the avatar illustration */}
      <div
        className="flex h-full w-full items-end justify-center overflow-hidden rounded-full border-[3px] border-white shadow-sm"
        style={{
          background: "linear-gradient(150deg, #38bdf8 0%, #0f766e 100%)",
        }}
      >
        <svg
          viewBox="0 0 80 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 80, height: 80 }}
        >
          {/* coat/body */}
          <path
            d="M12 82C12 60 23 52 40 50C57 52 68 60 68 82"
            fill="white"
            opacity="0.95"
          />
          {/* neck */}
          <rect x="35" y="44" width="10" height="8" rx="2" fill="#FDDCB5" />
          {/* head */}
          <ellipse cx="40" cy="31" rx="14" ry="16" fill="#FDDCB5" />
          {/* hair */}
          <path
            d="M26 30C26 14 54 14 54 30C54 21 26 21 26 30Z"
            fill="#1C1008"
            opacity="0.88"
          />
          {/* ears */}
          <ellipse cx="26" cy="32" rx="2.5" ry="3" fill="#F5C49A" />
          <ellipse cx="54" cy="32" rx="2.5" ry="3" fill="#F5C49A" />
          {/* glasses - left */}
          <rect
            x="28"
            y="29"
            width="9"
            height="6"
            rx="2.5"
            fill="none"
            stroke="#1f2937"
            strokeWidth="1.2"
          />
          {/* glasses - right */}
          <rect
            x="43"
            y="29"
            width="9"
            height="6"
            rx="2.5"
            fill="none"
            stroke="#1f2937"
            strokeWidth="1.2"
          />
          {/* glasses bridge */}
          <line
            x1="37"
            y1="32"
            x2="43"
            y2="32"
            stroke="#1f2937"
            strokeWidth="1.2"
          />
          {/* eyes */}
          <circle cx="32.5" cy="32" r="1.5" fill="#1f2937" />
          <circle cx="47.5" cy="32" r="1.5" fill="#1f2937" />
          {/* stethoscope hint on coat */}
          <path
            d="M34 52 Q40 56 46 52"
            stroke="#0D9488"
            strokeWidth="1.5"
            fill="none"
            opacity="0.5"
          />
        </svg>
      </div>

      {/* AVAILABLE badge overlapping nicely at bottom center */}
      <div
        className="absolute -bottom-1.5 left-1/2 flex -translate-x-1/2 items-center gap-1.5 font-bold whitespace-nowrap text-white"
        style={{
          fontSize: "9.5px",
          background: "#10b981", // emerald-500
          padding: "4px 8px 4px 6px",
          borderRadius: 999,
          boxShadow: "0 2px 5px rgba(16,185,129,0.3)",
          letterSpacing: "0.02em",
        }}
      >
        <div className="flex h-3 w-3 items-center justify-center rounded-full bg-white">
          <CheckIcon className="h-2 w-2 text-[#10b981]" />
        </div>
        AVAILABLE
      </div>
    </div>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────────────────

const labelSt: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#64748b", // slate-500
  display: "block",
  marginBottom: 6,
};

const inputSt: React.CSSProperties = {
  width: "100%",
  fontSize: "14px",
  fontWeight: 500,
  padding: "9px 14px",
  border: "1px solid #e2e8f0", // slate-200
  borderRadius: 10,
  color: "#1e293b", // slate-800
  background: "#f8fafc", // slate-50
  outline: "none",
  transition: "all 0.2s",
};

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DoctorDetailPage() {
  const [active, setActive] = useState(true);
  const [fullName, setFullName] = useState("Sarah Johnson");
  const [spec, setSpec] = useState("Cardiologist");
  const [exp, setExp] = useState("12");
  const [phone, setPhone] = useState("+1 (555) 123-4567");
  const [street, setStreet] = useState("45 Medical Plaza Dr.");
  const [city, setCity] = useState("Boston");
  const [district, setDistrict] = useState("Back Bay");
  const [state, setState] = useState("MA");
  const [zip, setZip] = useState("02116");

  const hospitals = [
    {
      name: "General Hospital",
      dept: "Cardiology Dept.",
      iconCol: "#64748b",
      Icon: MedicalCrossIcon,
    },
    {
      name: "City Medical Center",
      dept: "Emergency Unit",
      iconCol: "#94a3b8",
      Icon: AsteriskIcon,
    },
    {
      name: "Westside Clinic",
      dept: "Consultant",
      iconCol: "#64748b",
      Icon: MedicalCrossIcon,
    },
  ];

  return (
    <div className="min-h-screen bg-[#f4f7f9] pt-6 pb-12 font-sans">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* ═══════════════ TOP CARD ═══════════════ */}
        <div
          className="mb-6 shrink-0 bg-white"
          style={{
            borderRadius: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* Header section w/ Avatar & Status */}
          <div className="flex flex-col gap-6 px-4 pt-7 pb-6 sm:px-8 lg:flex-row lg:items-center lg:justify-between">
            <div className="flex flex-col items-center gap-6 text-center sm:flex-row sm:text-left">
              <DoctorProfileAvatar />
              <div>
                <h1 className="mb-1.5 text-[22px] font-bold tracking-tight text-[#0f172a] sm:text-[25px]">
                  Dr. Sarah Johnson
                </h1>
                <p className="text-[14px] font-medium text-[#64748b] sm:text-[14.5px]">
                  Cardiologist &nbsp;·&nbsp; ID: #DOC-8921
                </p>
              </div>
            </div>

            {/* System Status toggle pill */}
            <div className="flex flex-col items-center lg:items-end">
              <div
                className="flex items-center gap-3.5 rounded-[14px]"
                style={{
                  background: "#f8fafc",
                  padding: "7px 16px",
                  border: "1px solid #f1f5f9",
                }}
              >
                <span className="text-[13px] font-medium text-[#64748b]">
                  System Status
                </span>
                <button
                  onClick={() => setActive(!active)}
                  className="flex shrink-0 items-center"
                  style={{
                    width: 44,
                    height: 24,
                    borderRadius: 999,
                    background: active ? "#2563EB" : "#CBD5E1",
                    position: "relative",
                    transition: "background .2s",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: 18,
                      height: 18,
                      background: "white",
                      borderRadius: "50%",
                      top: 3,
                      left: active ? 23 : 3,
                      transition: "left .2s",
                      boxShadow: "0 1px 2px rgba(0,0,0,0.1)",
                    }}
                  />
                </button>
                <span className="w-[38px] text-[13px] font-medium text-[#0f172a]">
                  {active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="flex flex-wrap items-center gap-8 px-4 py-5 sm:gap-24 sm:px-8"
            style={{ borderTop: "1px solid #f1f5f9" }}
          >
            {[
              { label: "JOIN DATE", value: "Oct 12, 2018" },
              { label: "LAST LOGIN", value: "Today, 09:41 AM" },
              { label: "PATIENTS", value: "1,204" },
            ].map(({ label, value }) => (
              <div key={label} className="min-w-[120px] flex-1 sm:flex-none">
                <p className="mb-1 text-[10.5px] font-bold tracking-wider text-[#94a3b8] uppercase">
                  {label}
                </p>
                <p className="text-[14.5px] font-bold text-[#334155]">
                  {value}
                </p>
              </div>
            ))}
            <div className="min-w-[120px] flex-1 sm:flex-none">
              <p className="mb-1 text-[10.5px] font-bold tracking-wider text-[#94a3b8] uppercase">
                RATING
              </p>
              <div className="flex items-center gap-1.5">
                <span className="text-[14.5px] font-bold text-[#334155]">
                  4.9
                </span>
                <StarIcon className="h-4 w-4 fill-current text-[#f59e0b]" />
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════ MAIN CONTENT GRID ═══════════════ */}
        <div className="mb-6 grid grid-cols-1 gap-6 lg:grid-cols-3">
          {/* ── COLUMN 1: Identity & Account ── */}
          <div className="flex flex-col gap-6">
            {/* Identity Details Card */}
            <div
              className="bg-white p-6"
              style={{
                borderRadius: 18,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#eff6ff", // blue-50
                  }}
                >
                  <IdCardIcon className="h-4 w-4 text-[#3b82f6]" />
                </div>
                <h2 className="text-[15px] font-bold text-[#0f172a]">
                  Identity Details
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div>
                  <label style={labelSt}>Full Name</label>
                  <input
                    type="text"
                    value={fullName}
                    onChange={(e) => setFullName(e.target.value)}
                    className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                    style={inputSt}
                  />
                </div>
                <div>
                  <label style={labelSt}>Specialization</label>
                  <div className="relative">
                    <select
                      value={spec}
                      onChange={(e) => setSpec(e.target.value)}
                      className="w-full appearance-none focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={{ ...inputSt, paddingRight: 36 }}
                    >
                      {[
                        "Cardiologist",
                        "Neurologist",
                        "Orthopedic",
                        "Endocrinologist",
                      ].map((s) => (
                        <option key={s}>{s}</option>
                      ))}
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                  </div>
                </div>
                <div>
                  <label style={labelSt}>Experience (Years)</label>
                  <div className="relative">
                    <input
                      type="text"
                      value={exp}
                      onChange={(e) => setExp(e.target.value)}
                      className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={{ ...inputSt, paddingRight: 40 }}
                    />
                    <span className="absolute top-1/2 right-3.5 -translate-y-1/2 text-[14px] font-medium text-[#94a3b8]">
                      Yrs
                    </span>
                  </div>
                </div>
              </div>
            </div>

            {/* Account Access Card */}
            <div
              className="bg-white p-6"
              style={{
                borderRadius: 18,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#faf5ff", // fuchsia-50
                  }}
                >
                  <UserLockIcon className="h-[18px] w-[18px] text-[#c026d3]" />
                </div>
                <h2 className="text-[15px] font-bold text-[#0f172a]">
                  Account Access
                </h2>
              </div>

              <div className="flex flex-col gap-4">
                <div>
                  <label style={labelSt}>Username / Email</label>
                  <div className="relative">
                    <input
                      type="text"
                      defaultValue="s.johnson@medihub.com"
                      readOnly
                      className="focus:outline-none"
                      style={{
                        ...inputSt,
                        color: "#64748b",
                        paddingRight: 40,
                      }}
                    />
                    <button className="absolute top-1/2 right-3.5 -translate-y-1/2 hover:opacity-75">
                      <CopyIcon className="h-4 w-4 text-[#94a3b8]" />
                    </button>
                  </div>
                </div>
                <button
                  className="mt-1 flex w-full items-center justify-center gap-2 py-2.5 font-bold transition-colors hover:bg-gray-100"
                  style={{
                    fontSize: 13.5,
                    color: "#334155",
                    background: "#f8fafc",
                    border: "1px solid #e2e8f0",
                    borderRadius: 10,
                  }}
                >
                  <RefreshIcon className="h-[14px] w-[14px] text-[#475569]" />
                  Force Password Reset
                </button>
                <p className="mx-2 text-center text-[11.5px] leading-relaxed font-medium text-[#94a3b8]">
                  An email with reset instructions will be sent to the user.
                </p>
              </div>
            </div>
          </div>

          {/* ── COLUMN 2: Contact & Location ── */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div
              className="h-full bg-white p-6"
              style={{
                borderRadius: 18,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center gap-3">
                <div
                  className="flex shrink-0 items-center justify-center"
                  style={{
                    width: 34,
                    height: 34,
                    borderRadius: 10,
                    background: "#fff7ed", // orange-50
                  }}
                >
                  <MapPinIcon className="h-[18px] w-[18px] text-[#f97316]" />
                </div>
                <h2 className="text-[15px] font-bold text-[#0f172a]">
                  Contact &amp; Location
                </h2>
              </div>

              <div className="flex flex-col gap-5">
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label style={labelSt}>City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={inputSt}
                    />
                  </div>
                  <div>
                    <label style={labelSt}>District</label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={inputSt}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                  <div>
                    <label style={labelSt}>State</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={inputSt}
                    />
                  </div>
                  <div>
                    <label style={labelSt}>Zip Code</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]"
                      style={inputSt}
                    />
                  </div>
                </div>

                {/* Info Note */}
                <div
                  className="mt-1 flex gap-3.5 rounded-[12px] px-4 py-4"
                  style={{ background: "#f8fafc" }}
                >
                  <div className="mt-[1px] shrink-0">
                    <InfoIcon className="h-4 w-4 text-[#94a3b8]" />
                  </div>
                  <p className="text-[12.5px] leading-[1.5] font-medium text-[#64748b]">
                    Address changes affect billing and scheduling availability
                    radius.
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* ── COLUMN 3: Hospital Links ── */}
          <div className="flex flex-col gap-6 lg:col-span-1">
            <div
              className="h-full bg-white p-6"
              style={{
                borderRadius: 18,
                boxShadow:
                  "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
                border: "1px solid #f1f5f9",
              }}
            >
              <div className="mb-6 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div
                    className="flex shrink-0 items-center justify-center"
                    style={{
                      width: 34,
                      height: 34,
                      borderRadius: 10,
                      background: "#ecfdf5", // emerald-50
                    }}
                  >
                    <HospitalLinkIcon className="h-[18px] w-[18px] text-[#10b981]" />
                  </div>
                  <h2 className="text-[15px] font-bold text-[#0f172a]">
                    Hospital Links
                  </h2>
                </div>
                <button
                  className="flex items-center gap-1.5 font-bold text-[#0ea5e9] transition-colors hover:text-[#0284c7]"
                  style={{ fontSize: 13 }}
                >
                  <PlusIcon className="h-[14px] w-[14px]" />
                  Add Link
                </button>
              </div>

              <div className="flex flex-col gap-3.5">
                {hospitals.map(({ name, dept, iconCol, Icon }, idx) => (
                  <div
                    key={idx}
                    className="flex items-center gap-3.5 rounded-2xl border border-[#f1f5f9] bg-white p-3.5 transition-shadow hover:shadow-sm"
                  >
                    <div
                      className="flex flex-shrink-0 items-center justify-center rounded-[10px]"
                      style={{
                        width: 38,
                        height: 38,
                        background: "#f8fafc",
                        color: iconCol,
                        border: "1px solid #f1f5f9",
                      }}
                    >
                      <Icon className="h-[18px] w-[18px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="mb-0.5 truncate text-[13.5px] font-bold text-[#0f172a]">
                        {name}
                      </p>
                      <p className="truncate text-[12.5px] font-medium text-[#64748b]">
                        {dept}
                      </p>
                    </div>
                    <button className="flex-shrink-0 p-1.5 text-[#cbd5e1] transition-colors hover:text-red-400">
                      <UnlinkIcon className="h-[18px] w-[18px]" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* ═══════════════ BOTTOM ACTION BAR ═══════════════ */}
        <div
          className="flex flex-col gap-6 bg-white px-4 py-5 sm:px-7 md:flex-row md:items-center md:justify-between"
          style={{
            borderRadius: 18,
            boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
            border: "1px solid #f1f5f9",
          }}
        >
          <div className="flex items-start gap-3.5 md:items-center">
            <AlertTriangleIcon className="mt-1 h-[20px] w-[20px] flex-shrink-0 text-[#94a3b8] md:mt-0" />
            <span className="text-[13px] leading-relaxed font-medium text-[#64748b] sm:text-[13.5px]">
              Ensure all details are verified before saving. Deletion is
              irreversible.
            </span>
          </div>
          <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
            <button
              className="flex items-center justify-center gap-2.5 font-bold transition-colors hover:bg-red-50"
              style={{
                fontSize: 13.5,
                color: "#e11d48",
                border: "1px solid #fecdd3",
                backgroundColor: "#fff1f2",
                borderRadius: 10,
                padding: "10px 18px",
              }}
            >
              <TrashIcon className="h-[16px] w-[16px]" />
              Delete Doctor
            </button>
            <button
              className="flex items-center justify-center gap-2 font-bold text-white shadow-sm transition-colors hover:bg-blue-700"
              style={{
                fontSize: 13.5,
                background: "#2563EB",
                borderRadius: 10,
                padding: "10px 22px",
              }}
            >
              <SaveIcon className="h-[16px] w-[16px]" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
