"use client";

import React, { useState } from "react";
import EditDoctorModal from "./components/edit-doctor-modal";

// ─── Shared Icons ─────────────────────────────────────────────────────────────

const MapPinIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z" />
    <circle cx="12" cy="10" r="3" />
  </svg>
);

const UsersIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2" />
    <circle cx="9" cy="7" r="4" />
    <path d="M23 21v-2a4 4 0 00-3-3.87" />
    <path d="M16 3.13a4 4 0 010 7.75" />
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
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const ChevronLeftIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRightIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

const XIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="18" y1="6" x2="6" y2="18" />
    <line x1="6" y1="6" x2="18" y2="18" />
  </svg>
);

const CheckCircleIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M22 11.08V12a10 10 0 1 1-5.93-9.14" />
    <polyline points="22 4 12 14.01 9 11.01" />
  </svg>
);

const DocumentCheckIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" />
    <polyline points="14 2 14 8 20 8" />
    <polyline points="16 13 18 13" />
    <polyline points="9 15 11 17 15 13" />
  </svg>
);

const StatusAsteriskIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12 4v16M6 8l12 8M18 8l-12 8" />
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
    <path d="M19 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11l5 5v11a2 2 0 0 1-2 2z" />
    <polyline points="17 21 17 13 7 13 7 21" />
    <polyline points="7 3 7 8 15 8" />
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

const CoffeeOffIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="2" y1="2" x2="22" y2="22" />
    <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
    <path d="M2.5 2.5a2 2 0 0 1 1.5-.5h15" />
    <path d="M6 10v3c0 3.866 3.134 7 7 7 1.258 0 2.438-.33 3.447-.9" />
    <path d="M6 2v4M10 2v4M14 2v1" />
  </svg>
);

// ─── Data Configuration ───────────────────────────────────────────────────────

const DOCTORS_DATA = [
  {
    name: "Dr. Sarah Jenkins",
    subtext: "Cardiology • 12 years exp.",
    avatar: "https://i.pravatar.cc/150?u=sarahj",
    statusBadge: {
      text: "AVAILABLE NOW",
      dotColor: "#22c55e",
      bgColor: "#f0fdf4",
      textColor: "#16a34a",
    },
    col1: { label: "SHIFT", value: "08:00 AM - 04:00 PM" },
    col2: { label: "ROOM", value: "304 (ICU Wing)" },
  },
  {
    name: "Dr. Michael Chen",
    subtext: "Pediatrics • 15 years exp.",
    avatar: "https://i.pravatar.cc/150?u=michaelc",
    statusBadge: {
      text: "COMPLETING VISIT",
      dotColor: "#f97316",
      bgColor: "#fff7ed",
      textColor: "#ea580c",
    },
    col1: { label: "SHIFT", value: "09:00 AM - 05:00 PM" },
    col2: { label: "ROOM", value: "201 (Pediatrics)" },
  },
  {
    name: "Dr. Emily Rose",
    subtext: "Neurology • 8 years exp.",
    avatar: "https://i.pravatar.cc/150?u=emilyr",
    statusBadge: {
      text: "AVAILABLE NOW",
      dotColor: "#22c55e",
      bgColor: "#f0fdf4",
      textColor: "#16a34a",
    },
    col1: { label: "SHIFT", value: "07:00 AM - 03:00 PM" },
    col2: { label: "ROOM", value: "410 (Neuro Lab)" },
  },
  {
    name: "Dr. James Wilson",
    subtext: "General • 20 years exp.",
    avatar: "https://i.pravatar.cc/150?u=jamesw",
    statusBadge: {
      text: "OFF DUTY",
      dotColor: "#94a3b8",
      bgColor: "#f8fafc",
      textColor: "#64748b",
    },
    col1: { label: "SHIFT", value: "Off Today" },
    col2: { label: "LAST ACTIVE", value: "Yesterday, 5 PM" },
  },
  {
    name: "Dr. Linda Kim",
    subtext: "Cardiology • 10 years exp.",
    avatar: "https://i.pravatar.cc/150?u=lindak",
    statusBadge: {
      text: "BUSY",
      dotColor: "#ef4444",
      bgColor: "#fef2f2",
      textColor: "#dc2626",
    },
    col1: { label: "SHIFT", value: "10:00 AM - 06:00 PM" },
    col2: { label: "STATUS NOTE", value: "In Surgery (est. 1h)" },
  },
];

// ─── Main Component ────────────────────────────────────────────────────────────

export default function HospitalDoctorsDashboard() {
  const [searchQuery, setSearchQuery] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState<string | null>(null);
  const [editingDoctor, setEditingDoctor] = useState<string | null>(null);
  const [statusSelection, setStatusSelection] = useState<string>("available");

  const themeColor = "#4ab4a5"; // exact soft teal color from design

  return (
    <div className="min-h-screen bg-[#f8f9fa] pt-6 pb-16 font-sans text-[#0f172a] sm:pt-8">
      <div className="mx-auto max-w-[1200px] px-4 sm:px-6">
        {/* ═══════════════ HEADER WIDGET ═══════════════ */}
        <div
          className="mb-6 flex flex-col items-center justify-between gap-8 bg-white px-5 py-7 sm:px-6 md:mb-8 md:flex-row md:gap-0 md:px-10 md:py-8"
          style={{
            borderRadius: 32,
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* Left Side: Hospital Info */}
          <div className="flex flex-col items-center gap-3 text-center md:items-start md:text-left">
            <div className="flex items-center">
              <div
                className="flex items-center justify-center rounded-full px-3 py-1 font-bold tracking-wider uppercase"
                style={{
                  backgroundColor: "#e8f6f3",
                  color: themeColor,
                  fontSize: "9px",
                }}
              >
                DASHBOARD
              </div>
              <div className="mx-3 text-[14px] text-[#cbd5e1]">•</div>
              <div className="text-[12px] font-medium text-[#94a3b8]">
                Last updated: Just now
              </div>
            </div>

            <h1 className="mt-1 text-[26px] leading-tight font-bold tracking-tight text-[#1e293b] sm:text-[28px] md:text-[34px]">
              City General Hospital
            </h1>

            <div className="mt-2 flex flex-col items-center gap-1.5 text-[#64748b] md:flex-row">
              <MapPinIcon className="h-4 w-4 shrink-0 text-[#4ab4a5]" />
              <span className="text-[13px] font-medium text-[#94a3b8] sm:text-[13.5px]">
                123 Medical Park Blvd, Downtown, Metropolis
              </span>
            </div>
          </div>

          {/* Right Side: Stats */}
          <div className="flex w-full justify-center gap-4 md:w-auto">
            {/* Doctors Available */}
            <div
              className="flex h-[100px] flex-1 flex-col items-center justify-center gap-1 sm:h-[130px] md:w-[150px]"
              style={{ backgroundColor: "#eef8f6", borderRadius: 28 }}
            >
              <span
                className="text-[32px] leading-none font-bold tracking-tight sm:text-[44px]"
                style={{ color: themeColor }}
              >
                12
              </span>
              <span className="mt-1 px-2 text-center text-[8px] font-extrabold tracking-widest text-[#79a69d] uppercase sm:text-[9px]">
                Doctors Available
              </span>
            </div>
            {/* Total Doctors */}
            <div
              className="flex h-[100px] flex-1 flex-col items-center justify-center gap-1 sm:h-[130px] md:w-[150px]"
              style={{ backgroundColor: "#f8fafc", borderRadius: 28 }}
            >
              <span className="text-[32px] leading-none font-bold tracking-tight text-[#1e293b] sm:text-[44px]">
                45
              </span>
              <span className="mt-1 text-[8px] font-extrabold tracking-widest text-[#94a3b8] uppercase sm:text-[9px]">
                Total Doctors
              </span>
            </div>
          </div>
        </div>

        {/* ═══════════════ MAIN CONTENT WIDGET ═══════════════ */}
        <div
          className="bg-white px-4 py-6 sm:px-8 sm:py-9 md:px-10 md:py-10"
          style={{
            borderRadius: 32,
            boxShadow:
              "0 2px 10px rgba(0,0,0,0.02), 0 4px 24px rgba(0,0,0,0.01)",
            border: "1px solid #f1f5f9",
          }}
        >
          {/* Main Title & Tools */}
          <div className="mb-8 flex flex-col justify-between gap-6 xl:flex-row xl:items-center xl:gap-0">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f6f3]">
                <UsersIcon className="h-5 w-5 text-[#4ab4a5]" />
              </div>
              <h2 className="text-[20px] font-bold text-[#1e293b] sm:text-[22px]">
                Manage Doctors
              </h2>
            </div>

            <div className="flex w-full flex-col items-center gap-4 sm:flex-row xl:w-auto">
              {/* Search Bar */}
              <div
                className="group flex w-full items-center gap-2.5 rounded-full px-5 py-3 transition-all focus-within:ring-2 focus-within:ring-[#4ab4a5]/10 sm:w-auto sm:flex-1 md:w-[320px] md:py-2.5"
                style={{
                  backgroundColor: "#fbfcfd",
                  border: "1px solid #e2e8f0",
                }}
              >
                <SearchIcon className="h-4 w-4 text-[#94a3b8] transition-colors group-focus-within:text-[#4ab4a5]" />
                <input
                  type="text"
                  placeholder="Search doctor..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full bg-transparent text-[13.5px] font-medium text-[#334155] outline-none placeholder:text-[#cbd5e1]"
                />
              </div>

              {/* Add Doctor Button */}
              <button
                className="flex w-full items-center justify-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-sm transition-all hover:opacity-90 active:scale-[0.98] sm:w-auto md:py-2.5"
                style={{ backgroundColor: themeColor, fontSize: 13.5 }}
              >
                <PlusIcon className="h-4 w-4" />
                <span>Add Doctor</span>
              </button>
            </div>
          </div>

          {/* Doctors List */}
          <div className="flex flex-col gap-4">
            {DOCTORS_DATA.map((doc, idx) => (
              <div
                key={idx}
                className="flex flex-col gap-5 px-5 py-6 transition-shadow hover:shadow-sm sm:px-7 lg:grid lg:grid-cols-[1fr_minmax(150px,200px)_minmax(150px,200px)_auto] lg:items-center lg:gap-6"
                style={{ border: "1px solid #f1f5f9", borderRadius: 28 }}
              >
                {/* Column 1: Profile */}
                <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
                  {/* Avatar & Online Dot */}
                  <div className="relative flex-shrink-0">
                    {/* eslint-disable-next-line @next/next/no-img-element */}
                    <img
                      src={doc.avatar}
                      alt={doc.name}
                      className="h-[50px] w-[50px] rounded-full bg-gray-100 object-cover sm:h-[56px] sm:w-[56px]"
                    />
                    <span
                      className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-[2px] border-white sm:h-3.5 sm:w-3.5 sm:border-[2.5px]"
                      style={{ backgroundColor: doc.statusBadge.dotColor }}
                    />
                  </div>

                  {/* Info & Pill */}
                  <div className="flex flex-col justify-center">
                    <p className="mb-[2px] text-[16px] leading-tight font-bold text-[#1e293b] sm:text-[16.5px]">
                      {doc.name}
                    </p>
                    <p className="mb-2 text-[12px] leading-tight font-medium text-[#94a3b8] sm:text-[12.5px]">
                      {doc.subtext}
                    </p>
                    <div
                      className="inline-flex w-max items-center gap-1.5 rounded-md px-2 py-[2px]"
                      style={{
                        backgroundColor: doc.statusBadge.bgColor,
                        color: doc.statusBadge.textColor,
                      }}
                    >
                      <span
                        className="h-[6px] w-[6px] rounded-full"
                        style={{ backgroundColor: doc.statusBadge.dotColor }}
                      />
                      <span className="mt-[0.5px] text-[9px] font-extrabold tracking-widest uppercase">
                        {doc.statusBadge.text}
                      </span>
                    </div>
                  </div>
                </div>

                {/* Column 2 & 3: Info row for mobile/tablet */}
                <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 lg:contents lg:gap-0">
                  {/* Column 2: Shift Info */}
                  <div className="xs:bg-transparent xs:p-0 xs:text-left flex flex-col justify-center rounded-2xl bg-[#fbfcfd] p-3 text-center">
                    <span className="mb-1 text-[9px] font-extrabold tracking-wider text-[#cbd5e1] uppercase sm:text-[10px]">
                      {doc.col1.label}
                    </span>
                    <span className="text-[13px] font-medium text-[#475569] sm:text-[13.5px]">
                      {doc.col1.value}
                    </span>
                  </div>

                  {/* Column 3: Room Info */}
                  <div className="xs:bg-transparent xs:p-0 xs:text-left flex flex-col justify-center rounded-2xl bg-[#fbfcfd] p-3 text-center">
                    <span className="mb-1 text-[9px] font-extrabold tracking-wider text-[#cbd5e1] uppercase sm:text-[10px]">
                      {doc.col2.label}
                    </span>
                    <span className="text-[13px] font-medium text-[#475569] sm:text-[13.5px]">
                      {doc.col2.value}
                    </span>
                  </div>
                </div>

                {/* Column 4: Actions */}
                <div className="xs:flex-nowrap mt-2 flex w-full flex-wrap items-center gap-2.5 border-t border-[#f1f5f9] pt-5 lg:mt-0 lg:w-auto lg:border-t-0 lg:pt-0">
                  <button
                    onClick={() => setSelectedDoctor(doc.name)}
                    className="xs:py-2.5 flex-1 justify-center rounded-full px-5 py-3.5 text-center font-bold text-white shadow-sm transition-all hover:opacity-90 active:scale-[0.98] lg:px-6 lg:py-2"
                    style={{ backgroundColor: themeColor, fontSize: 13 }}
                  >
                    Update
                  </button>
                  <button
                    onClick={() => setEditingDoctor(doc.name)}
                    className="xs:py-2.5 flex-1 justify-center rounded-full border border-[#e2e8f0] bg-white px-5 py-3.5 text-center font-bold text-[#475569] transition-all hover:bg-[#f1f5f9] active:scale-[0.98] lg:px-6 lg:py-2"
                    style={{ fontSize: 13 }}
                  >
                    Edit
                  </button>
                </div>
              </div>
            ))}
          </div>

          {/* ═══════════════ PAGINATION ═══════════════ */}
          <div className="mt-10 flex items-center justify-center gap-2 sm:gap-3">
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] text-[#94a3b8] transition-all hover:bg-[#f1f5f9] active:scale-95">
              <ChevronLeftIcon className="h-4 w-4" />
            </button>
            <div className="flex items-center gap-2">
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full font-bold text-white shadow-md transition-all active:scale-95"
                style={{ backgroundColor: themeColor, fontSize: 14 }}
              >
                1
              </button>
              <button
                className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] font-bold text-[#64748b] transition-all hover:bg-[#f1f5f9] active:scale-95 sm:flex"
                style={{ fontSize: 14 }}
              >
                2
              </button>
              <button
                className="hidden h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] font-bold text-[#64748b] transition-all hover:bg-[#f1f5f9] active:scale-95 sm:flex"
                style={{ fontSize: 14 }}
              >
                3
              </button>
            </div>
            <button className="flex h-10 w-10 items-center justify-center rounded-full border border-[#e2e8f0] text-[#94a3b8] transition-all hover:bg-[#f1f5f9] active:scale-95">
              <ChevronRightIcon className="h-4 w-4" />
            </button>
          </div>
        </div>
      </div>

      {/* ═══════════════ MODAL OVERLAY ═══════════════ */}
      {selectedDoctor && (
        <div className="fixed inset-0 z-50 flex items-center justify-center">
          {/* Backdrop */}
          <div
            className="absolute inset-0 bg-[#0f172a]/40 backdrop-blur-[2px]"
            onClick={() => setSelectedDoctor(null)}
          />

          {/* Modal Box */}
          <div className="relative z-10 w-[min(calc(100vw-2rem),480px)] rounded-[28px] bg-white p-6 shadow-2xl sm:p-8">
            {/* Header */}
            <div className="mb-6 flex items-start justify-between">
              <div>
                <h3 className="text-[19px] font-bold tracking-tight text-[#1e293b]">
                  Update Availability
                </h3>
                <p className="mt-[2px] text-[13.5px] font-medium text-[#64748b]">
                  {selectedDoctor}
                </p>
              </div>
              <button
                onClick={() => setSelectedDoctor(null)}
                className="rounded-full p-2 text-[#94a3b8] transition-colors hover:bg-[#f1f5f9] hover:text-[#475569]"
              >
                <XIcon className="h-[20px] w-[20px]" />
              </button>
            </div>

            {/* Status Grid */}
            <div className="mb-6">
              <p className="mb-3 text-[10.5px] font-extrabold tracking-widest text-[#94a3b8] uppercase">
                SELECT NEW STATUS
              </p>
              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                {/* Option 1: Available */}
                <button
                  onClick={() => setStatusSelection("available")}
                  className={`flex flex-col items-center justify-center gap-2.5 rounded-[20px] p-5 transition-shadow hover:shadow-sm ${
                    statusSelection === "available"
                      ? "border border-[#bbf7d0] bg-[#f0fdf4]"
                      : "border border-[#f1f5f9] bg-white"
                  }`}
                >
                  <div
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                    style={{ backgroundColor: "#dcfce7", color: "#22c55e" }}
                  >
                    <CheckCircleIcon className="h-[20px] w-[20px]" />
                  </div>
                  <span
                    className={`text-[12px] font-bold ${
                      statusSelection === "available"
                        ? "text-[#166534]"
                        : "text-[#334155]"
                    }`}
                  >
                    Available Now
                  </span>
                </button>

                {/* Option 2: Completing */}
                <button
                  onClick={() => setStatusSelection("completing")}
                  className={`flex flex-col items-center justify-center gap-2.5 rounded-[20px] p-5 transition-shadow hover:shadow-sm ${
                    statusSelection === "completing"
                      ? "border border-[#fed7aa] bg-[#fff7ed]"
                      : "border border-[#f1f5f9] bg-white"
                  }`}
                >
                  <div
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                    style={{ backgroundColor: "#ffedd5", color: "#f97316" }}
                  >
                    <DocumentCheckIcon className="h-[20px] w-[20px]" />
                  </div>
                  <span
                    className={`text-[12px] font-bold ${
                      statusSelection === "completing"
                        ? "text-[#9a3412]"
                        : "text-[#334155]"
                    }`}
                  >
                    Completing Visit
                  </span>
                </button>

                {/* Option 3: Off Duty */}
                <button
                  onClick={() => setStatusSelection("off_duty")}
                  className={`flex flex-col items-center justify-center gap-2.5 rounded-[20px] p-5 transition-shadow hover:shadow-sm ${
                    statusSelection === "off_duty"
                      ? "border border-[#cbd5e1] bg-[#f8fafc]"
                      : "border border-[#f1f5f9] bg-white"
                  }`}
                >
                  <div
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                    style={{ backgroundColor: "#f1f5f9", color: "#64748b" }}
                  >
                    <CoffeeOffIcon className="h-[20px] w-[20px]" />
                  </div>
                  <span
                    className={`text-[12px] font-bold ${
                      statusSelection === "off_duty"
                        ? "text-[#334155]"
                        : "text-[#334155]"
                    }`}
                  >
                    Off Duty
                  </span>
                </button>

                {/* Option 4: Surgery / Emergency */}
                <button
                  onClick={() => setStatusSelection("surgery")}
                  className={`flex flex-col items-center justify-center gap-2.5 rounded-[20px] p-5 transition-shadow hover:shadow-sm ${
                    statusSelection === "surgery"
                      ? "border border-[#fca5a5] bg-[#fef2f2]"
                      : "border border-[#f1f5f9] bg-white"
                  }`}
                >
                  <div
                    className="flex h-[36px] w-[36px] items-center justify-center rounded-full"
                    style={{ backgroundColor: "#fee2e2", color: "#ef4444" }}
                  >
                    <StatusAsteriskIcon className="h-[22px] w-[22px]" />
                  </div>
                  <span
                    className={`text-[12px] font-bold ${
                      statusSelection === "surgery"
                        ? "text-[#991b1b]"
                        : "text-[#334155]"
                    }`}
                  >
                    Surgery / Emergency
                  </span>
                </button>
              </div>
            </div>

            {/* Divider */}
            <div className="my-6 border-t border-[#f1f5f9]" />

            {/* Return Time */}
            <div className="mb-9">
              <p className="mb-3 text-[10.5px] font-extrabold tracking-widest text-[#94a3b8] uppercase">
                RETURN TIME (OPTIONAL)
              </p>
              <div
                className="flex items-center gap-3 rounded-[20px] px-4 py-3.5"
                style={{
                  backgroundColor: "#f8fafc",
                  border: "1px solid #e2e8f0",
                }}
              >
                <ClockIcon className="h-[18px] w-[18px] text-[#94a3b8]" />
                <input
                  type="text"
                  placeholder="--:--"
                  className="w-full bg-transparent text-[13.5px] font-medium text-[#0f172a] outline-none placeholder:text-[#94a3b8]"
                />
              </div>
            </div>

            {/* Actions Footer */}
            <div className="flex items-center justify-between">
              <button
                onClick={() => setSelectedDoctor(null)}
                className="px-2 text-[13.5px] font-bold text-[#64748b] transition-colors hover:text-[#0f172a]"
              >
                Cancel
              </button>
              <button
                className="flex items-center gap-2 rounded-full px-6 py-3 font-bold text-white shadow-md transition-opacity hover:opacity-90"
                style={{ backgroundColor: themeColor, fontSize: 13.5 }}
                onClick={() => setSelectedDoctor(null)}
              >
                <SaveIcon className="h-[18px] w-[18px]" />
                Save Status
              </button>
            </div>
          </div>
        </div>
      )}

      {/* ═══════════════ EDIT DOCTOR MODAL ═══════════════ */}
      <EditDoctorModal
        isOpen={!!editingDoctor}
        onClose={() => setEditingDoctor(null)}
        doctorName={editingDoctor || undefined}
      />
    </div>
  );
}
