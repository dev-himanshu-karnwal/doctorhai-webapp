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
const UserCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M16 21v-2a4 4 0 00-4-4H6a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <polyline points="16 11 18 13 22 9" />
  </svg>
);
const LockIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="11" width="18" height="11" rx="2" />
    <path d="M7 11V7a5 5 0 0110 0v4" />
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
const HospitalLinkIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="3" width="18" height="18" rx="3" />
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18.84 12.25l1.72-1.71a5.004 5.004 0 00-.12-7.07 5.006 5.006 0 00-6.95 0l-1.72 1.71" />
    <path d="M5.17 11.75l-1.71 1.71a5.004 5.004 0 00.12 7.07 5.006 5.006 0 006.95 0l1.71-1.71" />
    <line x1="8" y1="2" x2="8" y2="5" />
    <line x1="2" y1="8" x2="5" y2="8" />
    <line x1="16" y1="19" x2="16" y2="22" />
    <line x1="19" y1="16" x2="22" y2="16" />
  </svg>
);
const CopyIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="9" y="9" width="13" height="13" rx="2" />
    <path d="M5 15H4a2 2 0 01-2-2V4a2 2 0 012-2h9a2 2 0 012 2v1" />
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
    <path d="M19 6l-1 14a2 2 0 01-2 2H8a2 2 0 01-2-2L5 6M10 11v6M14 11v6M9 6V4h6v2" />
  </svg>
);
const SaveIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M19 21H5a2 2 0 01-2-2V5a2 2 0 012-2h11l5 5v11a2 2 0 01-2 2z" />
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M10.29 3.86L1.82 18a2 2 0 001.71 3h16.94a2 2 0 001.71-3L13.71 3.86a2 2 0 00-3.42 0z" />
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
    strokeWidth="2"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="6 9 12 15 18 9" />
  </svg>
);
const StarIcon = ({ className = "" }: { className?: string }) => (
  <svg className={className} viewBox="0 0 24 24" fill="currentColor">
    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
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
const AsteriskIcon = ({ className = "" }: { className?: string }) => (
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

// ─── Doctor Avatar ──────────────────────────────────────────────────────────────

function DoctorProfileAvatar() {
  return (
    <div className="relative flex-shrink-0" style={{ width: 86, height: 86 }}>
      <div
        className="flex h-full w-full items-end justify-center overflow-hidden rounded-full"
        style={{
          background: "linear-gradient(150deg, #0EA5E9 0%, #0D9488 100%)",
        }}
      >
        <svg
          viewBox="0 0 80 82"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{ width: 76, height: 76 }}
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
            stroke="#374151"
            strokeWidth="1.1"
          />
          {/* glasses - right */}
          <rect
            x="43"
            y="29"
            width="9"
            height="6"
            rx="2.5"
            fill="none"
            stroke="#374151"
            strokeWidth="1.1"
          />
          {/* glasses bridge */}
          <line
            x1="37"
            y1="32"
            x2="43"
            y2="32"
            stroke="#374151"
            strokeWidth="1.1"
          />
          {/* eyes */}
          <circle cx="32.5" cy="32" r="1.5" fill="#374151" />
          <circle cx="47.5" cy="32" r="1.5" fill="#374151" />
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
      {/* AVAILABLE badge */}
      <div
        className="absolute -bottom-1 left-1/2 flex -translate-x-1/2 items-center gap-[4px] font-bold whitespace-nowrap text-white"
        style={{
          fontSize: "8px",
          background: "#10B981",
          padding: "3px 7px",
          borderRadius: 999,
          letterSpacing: "0.07em",
        }}
      >
        <span className="h-[5px] w-[5px] flex-shrink-0 rounded-full bg-white" />
        AVAILABLE
      </div>
    </div>
  );
}

// ─── Shared styles ─────────────────────────────────────────────────────────────

const labelSt: React.CSSProperties = {
  fontSize: "10px",
  fontWeight: 700,
  color: "#9CA3AF",
  textTransform: "uppercase",
  letterSpacing: "0.08em",
  display: "block",
  marginBottom: 5,
};
const inputSt: React.CSSProperties = {
  width: "100%",
  fontSize: 13,
  padding: "8px 11px",
  border: "1.5px solid #E5E7EB",
  borderRadius: 9,
  color: "#374151",
  background: "#fff",
  outline: "none",
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
      dept: "Cardiology Dept",
      iconBg: "#EEF4FF",
      iconCol: "#3B82F6",
      Icon: HospitalLinkIcon,
    },
    {
      name: "City Medical Center",
      dept: "Emergency Unit",
      iconBg: "#F3F4F6",
      iconCol: "#9CA3AF",
      Icon: AsteriskIcon,
    },
    {
      name: "Westside Clinic",
      dept: "Consultant",
      iconBg: "#EEF2FF",
      iconCol: "#6366F1",
      Icon: HospitalLinkIcon,
    },
  ];

  return (
    <div className="min-h-screen" style={{ background: "#F0F2F5" }}>
      <div className="mx-auto max-w-4xl px-6 py-7">
        {/* ── Breadcrumb ── */}
        <div className="mb-4 flex items-center gap-2">
          <Link
            href="/dashboard/admin"
            className="flex items-center gap-1.5 text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-700"
          >
            <ArrowLeftIcon className="h-3.5 w-3.5" />
            Verification Dashboard
          </Link>
          <span className="text-gray-300">/</span>
          <Link
            href="/dashboard/admin/doctors"
            className="text-[13px] font-medium text-gray-500 transition-colors hover:text-gray-700"
          >
            Doctor Management
          </Link>
          <span className="text-gray-300">/</span>
          <span className="text-[13px] text-gray-400">Dr. Sarah Johnson</span>
        </div>

        {/* ═══════════════ BIG OUTER WHITE CARD ═══════════════ */}
        <div
          className="mb-4 bg-white"
          style={{
            borderRadius: 20,
            border: "1px solid #EAECEF",
            boxShadow: "0 2px 16px rgba(0,0,0,0.07)",
          }}
        >
          {/* ── Header section ── */}
          <div className="flex items-start gap-5 px-6 pt-6 pb-5">
            {/* Avatar */}
            <DoctorProfileAvatar />

            {/* Name + subtitle */}
            <div className="flex-1 pt-1">
              <h1 className="mb-0.5 text-[22px] leading-tight font-extrabold text-gray-900">
                Dr. Sarah Johnson
              </h1>
              <p className="text-[13px] text-gray-400">
                Cardiologist &nbsp;·&nbsp; ID: #DOC-8921
              </p>
            </div>

            {/* System Status toggle */}
            <div className="flex flex-col items-end gap-1.5 pt-1">
              <span
                className="font-semibold text-gray-500"
                style={{ fontSize: 12 }}
              >
                System Status
              </span>
              <div className="flex items-center gap-2">
                <button
                  onClick={() => setActive(!active)}
                  style={{
                    width: 46,
                    height: 26,
                    borderRadius: 999,
                    background: active ? "#3B82F6" : "#D1D5DB",
                    position: "relative",
                    transition: "background .2s",
                  }}
                >
                  <span
                    style={{
                      position: "absolute",
                      width: 20,
                      height: 20,
                      background: "white",
                      borderRadius: "50%",
                      top: 3,
                      left: active ? 23 : 3,
                      transition: "left .2s",
                      boxShadow: "0 1px 3px rgba(0,0,0,0.2)",
                    }}
                  />
                </button>
                <span
                  className="font-semibold text-gray-700"
                  style={{ fontSize: 13 }}
                >
                  {active ? "Active" : "Inactive"}
                </span>
              </div>
            </div>
          </div>

          {/* Stats row */}
          <div
            className="flex items-center gap-8 px-6 py-4"
            style={{ borderTop: "1px solid #F1F2F4" }}
          >
            {[
              { label: "Join Date", value: "Oct 12, 2018" },
              { label: "Last Login", value: "Today, 09:41 AM" },
              { label: "Patients", value: "1,204" },
            ].map(({ label, value }) => (
              <div key={label}>
                <p
                  className="mb-0.5 font-bold text-gray-400 uppercase"
                  style={{ fontSize: "9.5px", letterSpacing: "0.1em" }}
                >
                  {label}
                </p>
                <p
                  className="font-semibold text-gray-800"
                  style={{ fontSize: 13 }}
                >
                  {value}
                </p>
              </div>
            ))}
            <div>
              <p
                className="mb-0.5 font-bold text-gray-400 uppercase"
                style={{ fontSize: "9.5px", letterSpacing: "0.1em" }}
              >
                Rating
              </p>
              <div className="flex items-center gap-1">
                <span
                  className="font-semibold text-gray-800"
                  style={{ fontSize: 13 }}
                >
                  4.9
                </span>
                <StarIcon className="h-3.5 w-3.5 text-amber-400" />
              </div>
            </div>
          </div>

          {/* ── Three column grid ── */}
          <div
            className="grid gap-4 p-4"
            style={{
              gridTemplateColumns: "200px 1fr 190px",
              borderTop: "1px solid #F1F2F4",
            }}
          >
            {/* ── LEFT ── */}
            <div className="flex flex-col gap-4">
              {/* Identity Details */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #EAECEF",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: "#EEF2FF",
                    }}
                  >
                    <UserCheckIcon className="h-[12px] w-[12px] text-indigo-500" />
                  </div>
                  <h2
                    className="font-extrabold text-gray-900"
                    style={{ fontSize: 13.5 }}
                  >
                    Identity Details
                  </h2>
                </div>

                <div className="flex flex-col gap-3">
                  <div>
                    <label style={labelSt}>Full Name</label>
                    <input
                      type="text"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      style={inputSt}
                    />
                  </div>
                  <div>
                    <label style={labelSt}>Specialization</label>
                    <div className="relative">
                      <select
                        value={spec}
                        onChange={(e) => setSpec(e.target.value)}
                        className="w-full appearance-none transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                        style={{ ...inputSt, paddingRight: 28 }}
                      >
                        {[
                          "Cardiologist",
                          "Neurologist",
                          "Orthopedic",
                          "Virologist",
                          "Endocrinologist",
                          "Oncologist",
                          "General Surgery",
                        ].map((s) => (
                          <option key={s}>{s}</option>
                        ))}
                      </select>
                      <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-2 h-3.5 w-3.5 -translate-y-1/2 text-gray-400" />
                    </div>
                  </div>
                  <div>
                    <label style={labelSt}>Experience (Years)</label>
                    <div className="relative">
                      <input
                        type="number"
                        value={exp}
                        onChange={(e) => setExp(e.target.value)}
                        className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                        style={{ ...inputSt, paddingRight: 30 }}
                      />
                      <span
                        className="absolute top-1/2 right-3 -translate-y-1/2 font-medium text-gray-400"
                        style={{ fontSize: 11 }}
                      >
                        Yrs
                      </span>
                    </div>
                  </div>
                </div>
              </div>

              {/* Account Access */}
              <div
                className="bg-white p-4"
                style={{
                  borderRadius: 14,
                  border: "1px solid #EAECEF",
                  boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
                }}
              >
                <div className="mb-4 flex items-center gap-2">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: "#FFF7ED",
                    }}
                  >
                    <LockIcon className="h-[12px] w-[12px] text-orange-400" />
                  </div>
                  <h2
                    className="font-extrabold text-gray-900"
                    style={{ fontSize: 13.5 }}
                  >
                    Account Access
                  </h2>
                </div>
                <div className="flex flex-col gap-3">
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
                          color: "#6B7280",
                          paddingRight: 32,
                        }}
                      />
                      <button className="absolute top-1/2 right-2.5 -translate-y-1/2 transition-colors hover:text-gray-600">
                        <CopyIcon className="h-[13px] w-[13px] text-gray-400" />
                      </button>
                    </div>
                  </div>
                  <button
                    className="flex w-full items-center justify-center gap-2 py-2 font-semibold transition-colors hover:bg-gray-200"
                    style={{
                      fontSize: 12.5,
                      color: "#374151",
                      background: "#F3F4F6",
                      borderRadius: 9,
                    }}
                  >
                    <RefreshIcon className="h-3 w-3" />
                    Force Password Reset
                  </button>
                  <p
                    className="text-gray-400"
                    style={{ fontSize: 10.5, lineHeight: 1.55 }}
                  >
                    An email with reset instructions will be sent to the user.
                  </p>
                </div>
              </div>
            </div>

            {/* ── MIDDLE ── */}
            <div
              className="bg-white p-4"
              style={{
                borderRadius: 14,
                border: "1px solid #EAECEF",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div className="mb-4 flex items-center gap-2">
                <div
                  className="flex items-center justify-center"
                  style={{
                    width: 26,
                    height: 26,
                    borderRadius: 7,
                    background: "#FFF7ED",
                  }}
                >
                  <MapPinIcon className="h-[12px] w-[12px] text-orange-400" />
                </div>
                <h2
                  className="font-extrabold text-gray-900"
                  style={{ fontSize: 13.5 }}
                >
                  Contact &amp; Location
                </h2>
              </div>
              <div className="flex flex-col gap-3">
                <div>
                  <label style={labelSt}>Primary Phone</label>
                  <input
                    type="text"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                    style={inputSt}
                  />
                </div>
                <div>
                  <label style={labelSt}>Street Address</label>
                  <input
                    type="text"
                    value={street}
                    onChange={(e) => setStreet(e.target.value)}
                    className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                    style={inputSt}
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelSt}>City</label>
                    <input
                      type="text"
                      value={city}
                      onChange={(e) => setCity(e.target.value)}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      style={inputSt}
                    />
                  </div>
                  <div>
                    <label style={labelSt}>District</label>
                    <input
                      type="text"
                      value={district}
                      onChange={(e) => setDistrict(e.target.value)}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      style={inputSt}
                    />
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label style={labelSt}>State</label>
                    <input
                      type="text"
                      value={state}
                      onChange={(e) => setState(e.target.value)}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      style={inputSt}
                    />
                  </div>
                  <div>
                    <label style={labelSt}>Zip Code</label>
                    <input
                      type="text"
                      value={zip}
                      onChange={(e) => setZip(e.target.value)}
                      className="transition-all focus:border-blue-300 focus:ring-2 focus:ring-blue-100"
                      style={inputSt}
                    />
                  </div>
                </div>
                {/* info note */}
                <div
                  className="flex items-start gap-2 rounded-lg px-3 py-2.5"
                  style={{ background: "#F0F9FF", border: "1px solid #BAE6FD" }}
                >
                  <InfoIcon className="mt-0.5 h-3.5 w-3.5 flex-shrink-0 text-blue-400" />
                  <p
                    className="text-blue-600"
                    style={{ fontSize: 10.5, lineHeight: 1.55 }}
                  >
                    Address changes affect billing and scheduling availability
                    radius.
                  </p>
                </div>
              </div>
            </div>

            {/* ── RIGHT ── */}
            <div
              className="bg-white p-4"
              style={{
                borderRadius: 14,
                border: "1px solid #EAECEF",
                boxShadow: "0 1px 4px rgba(0,0,0,0.05)",
              }}
            >
              <div className="mb-4 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <div
                    className="flex items-center justify-center"
                    style={{
                      width: 26,
                      height: 26,
                      borderRadius: 7,
                      background: "#ECFDF5",
                    }}
                  >
                    <HospitalLinkIcon className="h-[12px] w-[12px] text-emerald-500" />
                  </div>
                  <h2
                    className="font-extrabold text-gray-900"
                    style={{ fontSize: 13.5 }}
                  >
                    Hospital Links
                  </h2>
                </div>
                <button
                  className="flex items-center gap-1 font-semibold text-teal-600 transition-colors hover:text-teal-700"
                  style={{ fontSize: 11.5 }}
                >
                  <PlusIcon className="h-[10px] w-[10px]" />
                  Add Link
                </button>
              </div>
              <div className="flex flex-col gap-3">
                {hospitals.map(({ name, dept, iconBg, iconCol, Icon }) => (
                  <div key={name} className="flex items-center gap-2.5">
                    <div
                      className="flex flex-shrink-0 items-center justify-center"
                      style={{
                        width: 30,
                        height: 30,
                        borderRadius: 8,
                        background: iconBg,
                        color: iconCol,
                      }}
                    >
                      <Icon className="h-[13px] w-[13px]" />
                    </div>
                    <div className="min-w-0 flex-1">
                      <p
                        className="truncate leading-tight font-semibold text-gray-800"
                        style={{ fontSize: 12 }}
                      >
                        {name}
                      </p>
                      <p
                        className="truncate text-gray-400"
                        style={{ fontSize: 10.5 }}
                      >
                        {dept}
                      </p>
                    </div>
                    <button className="flex-shrink-0 transition-colors hover:text-red-400">
                      <UnlinkIcon className="h-[13px] w-[13px] text-gray-300" />
                    </button>
                  </div>
                ))}
              </div>
            </div>
          </div>
          {/* end 3-col grid */}
        </div>
        {/* end big outer card */}

        {/* ═══════════════ BOTTOM ACTION BAR ═══════════════ */}
        <div
          className="flex items-center justify-between bg-white px-6 py-3.5"
          style={{
            borderRadius: 16,
            border: "1px solid #EAECEF",
            boxShadow: "0 1px 8px rgba(0,0,0,0.07)",
          }}
        >
          <div className="flex items-center gap-2">
            <AlertTriangleIcon className="h-4 w-4 flex-shrink-0 text-amber-400" />
            <span className="text-gray-400" style={{ fontSize: 12.5 }}>
              Ensure all details are verified before saving. Deletion is
              irreversible.
            </span>
          </div>
          <div className="flex items-center gap-3">
            <button
              className="flex items-center gap-1.5 font-semibold transition-colors hover:bg-red-50"
              style={{
                fontSize: 12.5,
                color: "#EF4444",
                border: "1.5px solid #FCA5A5",
                borderRadius: 10,
                padding: "8px 16px",
              }}
            >
              <TrashIcon className="h-[12px] w-[12px]" />
              Permanently Delete Doctor
            </button>
            <button
              className="flex items-center gap-1.5 font-semibold text-white transition-opacity hover:opacity-90"
              style={{
                fontSize: 12.5,
                background: "#3B82F6",
                borderRadius: 10,
                padding: "8px 18px",
              }}
            >
              <SaveIcon className="h-[12px] w-[12px]" />
              Save Changes
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
