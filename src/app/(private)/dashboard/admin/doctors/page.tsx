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
const ChevronLeftIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
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
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="9 18 15 12 9 6" />
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
    <path d="M18.5 2.5a2.121 2.121 0 013 3L12 15l-4 1 1-4z" />
  </svg>
);
const EyeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z" />
    <circle cx="12" cy="12" r="3" />
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
const SlidersIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <line x1="4" y1="21" x2="4" y2="14" />
    <line x1="4" y1="10" x2="4" y2="3" />
    <line x1="12" y1="21" x2="12" y2="12" />
    <line x1="12" y1="8" x2="12" y2="3" />
    <line x1="20" y1="21" x2="20" y2="16" />
    <line x1="20" y1="12" x2="20" y2="3" />
    <line x1="1" y1="14" x2="7" y2="14" />
    <line x1="9" y1="8" x2="15" y2="8" />
    <line x1="17" y1="16" x2="23" y2="16" />
  </svg>
);

// ─── Doctor Avatar SVG ──────────────────────────────────────────────────────────

function DoctorAvatar({
  color,
  grayscale = false,
}: {
  color: string;
  grayscale?: boolean;
}) {
  return (
    <div
      className="relative flex flex-shrink-0 items-end justify-center overflow-hidden"
      style={{
        width: 100,
        height: 100,
        borderRadius: "50%",
        background: grayscale
          ? "linear-gradient(160deg, #d1d5db 0%, #e5e7eb 100%)"
          : `linear-gradient(160deg, ${color} 0%, ${color}99 100%)`,
      }}
    >
      {/* Doctor silhouette */}
      <svg
        viewBox="0 0 80 80"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: 72, height: 72, position: "absolute", bottom: 0 }}
      >
        {/* Body / coat */}
        <path
          d="M16 80 C16 60 25 52 40 50 C55 52 64 60 64 80"
          fill={grayscale ? "#9CA3AF" : "white"}
          opacity={grayscale ? 0.9 : 0.95}
        />
        {/* Collar / stethoscope */}
        <path
          d="M35 50 L37 60 L40 62 L43 60 L45 50"
          fill={grayscale ? "#6B7280" : color}
          opacity={0.4}
        />
        {/* Head */}
        <ellipse
          cx="40"
          cy="30"
          rx="13"
          ry="15"
          fill={grayscale ? "#D1D5DB" : "#FDDCB5"}
        />
        {/* Hair */}
        <path
          d="M27 28 C27 16 53 16 53 28 C53 22 27 22 27 28"
          fill={grayscale ? "#6B7280" : "#3B1F0A"}
          opacity={grayscale ? 0.7 : 0.9}
        />
        {/* Glasses (for some doctors) */}
      </svg>
    </div>
  );
}

// ─── Types ─────────────────────────────────────────────────────────────────────

type DoctorStatus = "Active" | "Pending" | "Suspended";

interface Doctor {
  id: string;
  name: string;
  specialty: string;
  experience: string;
  status: DoctorStatus;
  avatarColor: string;
  specialtyColor: string;
  grayscale?: boolean;
}

// ─── Data ──────────────────────────────────────────────────────────────────────

const allDoctors: Doctor[] = [
  {
    id: "1",
    name: "Dr. Sarah Johnson",
    specialty: "Cardiologist",
    experience: "12 Years Experience",
    status: "Active",
    avatarColor: "#0D9488",
    specialtyColor: "#0D9488",
  },
  {
    id: "2",
    name: "Dr. Emily Chen",
    specialty: "Neurologist",
    experience: "8 Years Experience",
    status: "Pending",
    avatarColor: "#4F46E5",
    specialtyColor: "#4F46E5",
  },
  {
    id: "3",
    name: "Dr. Mark Roberts",
    specialty: "Orthopedic",
    experience: "15 Years Experience",
    status: "Active",
    avatarColor: "#0D9488",
    specialtyColor: "#0D9488",
  },
  {
    id: "4",
    name: "Dr. Albert Wesker",
    specialty: "Virologist",
    experience: "20 Years Experience",
    status: "Suspended",
    avatarColor: "#7C3AED",
    specialtyColor: "#7C3AED",
    grayscale: true,
  },
  {
    id: "5",
    name: "Dr. Lisa Cuddy",
    specialty: "Endocrinologist",
    experience: "18 Years Experience",
    status: "Active",
    avatarColor: "#0D9488",
    specialtyColor: "#EA580C",
  },
  {
    id: "6",
    name: "Dr. James Wilson",
    specialty: "Oncologist",
    experience: "16 Years Experience",
    status: "Active",
    avatarColor: "#059669",
    specialtyColor: "#EA580C",
  },
  {
    id: "7",
    name: "Dr. Meredith Grey",
    specialty: "General Surgery",
    experience: "19 Years Experience",
    status: "Active",
    avatarColor: "#0891B2",
    specialtyColor: "#0D9488",
  },
];

// ─── Status dot config ─────────────────────────────────────────────────────────

const statusDot: Record<DoctorStatus, string> = {
  Active: "#10B981",
  Pending: "#F59E0B",
  Suspended: "#EF4444",
};

// ─── Doctor Card ───────────────────────────────────────────────────────────────

function DoctorCard({ doc }: { doc: Doctor }) {
  return (
    <div
      className="flex flex-col bg-white transition-shadow duration-200 hover:shadow-md"
      style={{
        borderRadius: 18,
        border: "1px solid #F1F2F4",
        boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
      }}
    >
      <div className="flex flex-col items-center px-4 pt-4 pb-3">
        {/* Status dot */}
        <div className="mb-2 flex w-full justify-end">
          <span
            className="h-[9px] w-[9px] flex-shrink-0 rounded-full"
            style={{ background: statusDot[doc.status] }}
          />
        </div>

        {/* Avatar */}
        <div className="mb-3">
          <DoctorAvatar color={doc.avatarColor} grayscale={doc.grayscale} />
        </div>

        {/* Name */}
        <h3
          className="mb-0.5 text-center leading-tight font-bold text-gray-900"
          style={{ fontSize: 14.5 }}
        >
          {doc.name}
        </h3>

        {/* Specialty */}
        <p
          className="mb-1 text-center font-semibold"
          style={{ fontSize: 12, color: doc.specialtyColor }}
        >
          {doc.specialty}
        </p>

        {/* Experience */}
        <p className="text-center text-gray-400" style={{ fontSize: 11 }}>
          {doc.experience}
        </p>
      </div>

      {/* Divider */}
      <div style={{ borderTop: "1px solid #F3F4F6" }} />

      {/* Action buttons */}
      <div className="grid grid-cols-3 divide-x divide-gray-100">
        {/* Edit */}
        <Link
          href={`/dashboard/admin/doctors/${doc.id}`}
          className="flex flex-col items-center gap-1 py-2.5 transition-colors hover:bg-gray-50"
          style={{ borderRadius: "0 0 0 18px" }}
        >
          <PencilIcon className="h-[13px] w-[13px] text-gray-400" />
          <span
            className="font-medium text-gray-500"
            style={{ fontSize: 10.5 }}
          >
            Edit
          </span>
        </Link>
        {/* Status */}
        <button className="flex flex-col items-center gap-1 py-2.5 transition-colors hover:bg-gray-50">
          <EyeIcon className="h-[13px] w-[13px] text-gray-400" />
          <span
            className="font-medium text-gray-500"
            style={{ fontSize: 10.5 }}
          >
            Status
          </span>
        </button>
        {/* Delete */}
        <button
          className="flex flex-col items-center gap-1 py-2.5 transition-colors hover:bg-red-50"
          style={{ borderRadius: "0 0 18px 0" }}
        >
          <TrashIcon className="h-[13px] w-[13px] text-gray-400" />
          <span
            className="font-medium text-gray-500"
            style={{ fontSize: 10.5 }}
          >
            Delete
          </span>
        </button>
      </div>
    </div>
  );
}

// ─── Add Doctor Card (dashed) ─────────────────────────────────────────────────

function AddDoctorCard() {
  return (
    <div
      className="group flex cursor-pointer flex-col items-center justify-center p-6 text-center transition-all hover:bg-white hover:shadow-sm"
      style={{
        border: "2px dashed #D1D5DB",
        borderRadius: 18,
        minHeight: 260,
      }}
    >
      <div
        className="mb-3 flex items-center justify-center transition-colors group-hover:bg-indigo-100"
        style={{
          width: 44,
          height: 44,
          borderRadius: 12,
          background: "#F3F4F6",
        }}
      >
        <PlusIcon className="h-5 w-5 text-gray-400 transition-colors group-hover:text-indigo-500" />
      </div>
      <h3 className="mb-1.5 font-bold text-gray-700" style={{ fontSize: 14 }}>
        Add New Doctor
      </h3>
      <p
        className="leading-relaxed text-gray-400"
        style={{ fontSize: 11.5, maxWidth: 130 }}
      >
        Manually onboard a new specialist to the platform.
      </p>
    </div>
  );
}

// ─── Page ──────────────────────────────────────────────────────────────────────

export default function DoctorManagementPage() {
  const [search, setSearch] = useState("");
  const [activeTab, setActiveTab] = useState<
    "All" | "Active" | "Pending" | "Suspended"
  >("All");
  const [page, setPage] = useState(1);

  const filtered = allDoctors.filter((d) => {
    const matchSearch =
      d.name.toLowerCase().includes(search.toLowerCase()) ||
      d.specialty.toLowerCase().includes(search.toLowerCase());
    const matchTab = activeTab === "All" || d.status === activeTab;
    return matchSearch && matchTab;
  });

  const tabs: Array<"All" | "Active" | "Pending" | "Suspended"> = [
    "All",
    "Active",
    "Pending",
    "Suspended",
  ];

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
          <span className="text-[13px] text-gray-400">Doctor Management</span>
        </div>

        {/* ── Page Header ── */}
        <div className="mb-7 flex items-start justify-between">
          {/* Left */}
          <div className="flex-1 pr-8">
            <h1 className="mb-2 text-[34px] leading-[1.15] font-extrabold tracking-tight text-gray-900">
              Doctor Management
            </h1>
            <p className="text-[13.5px] leading-relaxed text-gray-500">
              Oversee, edit, and manage doctor profiles across the platform.
            </p>
          </div>

          {/* Right: stat card */}
          <div
            className="flex flex-shrink-0 items-center gap-3 bg-white"
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
                Total Doctors Onboarded
              </p>
              <span className="text-[28px] leading-none font-extrabold text-gray-900">
                1,248
              </span>
            </div>
          </div>
        </div>

        {/* ── Filter / Search Bar ── */}
        <div
          className="mb-6 flex items-center gap-4 bg-white p-[16px]"
          style={{
            borderRadius: 16,
            border: "1px solid #F1F5F9",
            boxShadow: "0px 1px 2px 0px rgba(0,0,0,0.05)",
          }}
        >
          {/* Search — takes remaining space */}
          <div className="relative flex-1">
            <SearchIcon className="absolute top-1/2 left-[14px] h-[14px] w-[14px] -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search by Name, Specialty, or Hospital..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="w-full text-gray-600 placeholder-gray-400 focus:outline-none"
              style={{
                fontSize: 13,
                background: "#F8FAFC",
                borderRadius: 12,
                border: "1px solid transparent",
                paddingTop: 14,
                paddingBottom: 14,
                paddingRight: 16,
                paddingLeft: 44,
              }}
            />
          </div>

          {/* Right side: Tabs + Sort grouped */}
          <div className="flex flex-shrink-0 items-center gap-3">
            {/* Tabs pill */}
            <div className="flex items-center gap-0.5 rounded-[12px] bg-[#F8FAFC] p-[5px]">
              {tabs.map((tab) => (
                <button
                  key={tab}
                  onClick={() => setActiveTab(tab)}
                  className="px-3 py-[9px] font-semibold transition-all"
                  style={{
                    fontSize: 12.5,
                    borderRadius: 8,
                    background: activeTab === tab ? "#1e293b" : "transparent",
                    color: activeTab === tab ? "#ffffff" : "#6B7280",
                    whiteSpace: "nowrap",
                  }}
                >
                  {tab}
                </button>
              ))}
            </div>

            {/* Sort pill */}
            <div className="flex items-center gap-2 rounded-[12px] bg-[#F8FAFC] px-[14px] py-[11px]">
              <SlidersIcon className="h-[13px] w-[13px] flex-shrink-0 text-gray-400" />
              <button
                className="flex items-center gap-1.5 font-medium whitespace-nowrap text-gray-600"
                style={{ fontSize: 12.5 }}
              >
                Sort by: Experience
                <ChevronDownIcon className="h-[13px] w-[13px] text-gray-400" />
              </button>
            </div>
          </div>
        </div>

        {/* ── Cards Grid ── */}
        <div className="mb-7 grid grid-cols-4 gap-4">
          {filtered.map((doc) => (
            <DoctorCard key={doc.id} doc={doc} />
          ))}
          {/* Add New Doctor card — always shown last */}
          <AddDoctorCard />
          {filtered.length === 0 && (
            <div
              className="col-span-3 py-10 text-center text-gray-400"
              style={{ fontSize: 14 }}
            >
              No doctors match your search.
            </div>
          )}
        </div>

        {/* ── Pagination ── */}
        <div className="flex items-center justify-center gap-2">
          {/* Prev */}
          <button
            onClick={() => setPage(Math.max(1, page - 1))}
            className="flex items-center justify-center bg-white transition-colors hover:bg-gray-50"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "1px solid #E2E8F0",
            }}
          >
            <ChevronLeftIcon className="h-[18px] w-[18px] text-gray-500" />
          </button>

          {/* Page numbers */}
          {[1, 2, 3].map((p) => (
            <button
              key={p}
              onClick={() => setPage(p)}
              className="flex items-center justify-center font-semibold transition-all"
              style={{
                width: 44,
                height: 44,
                borderRadius: 12,
                fontSize: 14,
                background: page === p ? "#3B82F6" : "#ffffff",
                color: page === p ? "#ffffff" : "#374151",
                border: page === p ? "none" : "1px solid #E2E8F0",
                boxShadow:
                  page === p ? "0 2px 8px rgba(59,130,246,0.25)" : "none",
              }}
            >
              {p}
            </button>
          ))}

          {/* Dots */}
          <span
            className="flex items-center justify-center font-medium text-gray-400"
            style={{ width: 44, height: 44, fontSize: 14 }}
          >
            ...
          </span>

          {/* Last page */}
          <button
            onClick={() => setPage(12)}
            className="flex items-center justify-center bg-white font-semibold transition-all hover:bg-gray-50"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              fontSize: 14,
              color: "#374151",
              border: "1px solid #E2E8F0",
            }}
          >
            12
          </button>

          {/* Next */}
          <button
            onClick={() => setPage(Math.min(12, page + 1))}
            className="flex items-center justify-center bg-white transition-colors hover:bg-gray-50"
            style={{
              width: 44,
              height: 44,
              borderRadius: 12,
              border: "1px solid #E2E8F0",
            }}
          >
            <ChevronRightIcon className="h-[18px] w-[18px] text-gray-500" />
          </button>
        </div>
      </div>
    </div>
  );
}
