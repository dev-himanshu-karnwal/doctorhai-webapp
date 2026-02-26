import {
  Doctor,
  DoctorStatus,
  SpecialtyColor,
} from "../types/hospital-detail.types";
import { MOCK_HOSPITAL_DETAIL } from "../data/mock-hospital-detail";
import Link from "next/link";
import { cn } from "@/lib/cn";

// ─── Status helpers ─────────────────────────────────────────────────────────

function getStatusDotColor(status: DoctorStatus): string {
  const map: Record<DoctorStatus, string> = {
    available: "bg-[#22C55E]",
    completing: "bg-[#F59E0B]",
    "off-duty": "bg-[#94A3B8]",
    busy: "bg-[#EF4444]",
  };
  return map[status];
}

function getStatusBadge(status: DoctorStatus) {
  const map: Record<DoctorStatus, { label: string; cls: string }> = {
    available: { label: "Available Now", cls: "bg-[#F0FDF4] text-[#16A34A]" },
    completing: {
      label: "Completing Visit",
      cls: "bg-[#FFF7ED] text-[#D97706]",
    },
    "off-duty": { label: "Off Duty", cls: "bg-[#F1F5F9] text-[#64748B]" },
    busy: { label: "Busy", cls: "bg-[#FEF2F2] text-[#DC2626]" },
  };
  return map[status];
}

function getSpecialtyCls(color: SpecialtyColor): string {
  const map: Record<SpecialtyColor, string> = {
    teal: "bg-[#E0F2F1] text-[#00796B]",
    purple: "bg-[#EDE7F6] text-[#6D28D9]",
    blue: "bg-[#DBEAFE] text-[#1D4ED8]",
    gray: "bg-[#F1F5F9] text-[#475569]",
    pink: "bg-[#FCE4EC] text-[#9D174D]",
  };
  return map[color];
}

// ─── Divider ─────────────────────────────────────────────────────────────────

function Divider() {
  return <div className="h-[1px] w-full bg-[#F1F5F9]" />;
}

// ─── Doctor Row ──────────────────────────────────────────────────────────────

function DoctorRow({ doctor, isLast }: { doctor: Doctor; isLast: boolean }) {
  const badge = getStatusBadge(doctor.status);
  const dotCls = getStatusDotColor(doctor.status);
  const specialtyCls = getSpecialtyCls(doctor.specialtyColor);

  return (
    <div
      className={cn(
        "flex items-center gap-4 py-[20px]",
        !isLast && "border-b border-[#F1F5F9]"
      )}
    >
      {/* Avatar with status dot */}
      <div className="relative shrink-0">
        <div
          className="flex h-[52px] w-[52px] items-center justify-center rounded-full text-[15px] font-bold"
          style={{
            backgroundColor: doctor.avatarBg,
            color: doctor.avatarTextColor,
          }}
        >
          {doctor.initials}
        </div>
        <span
          className={cn(
            "absolute right-[1px] bottom-[1px] block h-[13px] w-[13px] rounded-full border-2 border-white",
            dotCls
          )}
        />
      </div>

      {/* Info */}
      <div className="flex flex-1 flex-col gap-[3px]">
        <div className="flex items-center gap-[8px]">
          <span className="text-[15px] leading-[22px] font-bold tracking-[0px] text-[#2D3748]">
            {doctor.name}
          </span>
          <span
            className={cn(
              "rounded-[4px] px-[7px] py-[2px] text-[10px] font-bold tracking-[0.5px] uppercase",
              specialtyCls
            )}
          >
            {doctor.specialty}
          </span>
        </div>
        <span className="text-[13px] leading-[18px] font-normal tracking-[0px] text-[#718096]">
          {doctor.role} • {doctor.experience}
        </span>
        <div className="flex items-center gap-[5px]">
          {/* Clock icon */}
          <svg
            width="12"
            height="12"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#94A3B8"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <circle cx="12" cy="12" r="10" />
            <polyline points="12 6 12 12 16 14" />
          </svg>
          <span className="text-[12px] leading-[16px] font-normal tracking-[0px] text-[#94A3B8]">
            {doctor.updatedAt}
          </span>
        </div>
      </div>

      {/* Status badge */}
      <div
        className={cn(
          "flex shrink-0 items-center gap-[5px] rounded-full px-[12px] py-[5px] text-[12px] leading-[18px] font-semibold",
          badge.cls
        )}
      >
        <span className="text-[9px]">●</span>
        <span>{badge.label}</span>
      </div>
    </div>
  );
}

export function HospitalDetailPage() {
  const h = MOCK_HOSPITAL_DETAIL;

  return (
    <div className="min-h-screen bg-[#F4F7F5] px-4 pt-4 pb-8 sm:px-6 sm:pt-6 sm:pb-10 md:px-8">
      <div className="mx-auto max-w-[1160px]">
        <Link
          href="/hospitals"
          className="mb-5 flex w-fit items-center gap-[6px] text-[13px] leading-[18px] font-medium text-[#4FB3AA] transition-colors hover:text-[#3D8F87]"
        >
          <svg
            width="14"
            height="14"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2.5"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="m15 18-6-6 6-6" />
          </svg>
          Back to Directory
        </Link>

        <div className="mb-8 flex flex-col items-start justify-between gap-6 md:flex-row">
          <div className="w-full flex-1 sm:w-auto">
            <div className="mb-2 flex flex-col items-start gap-2 sm:mb-3 sm:flex-row sm:flex-wrap sm:items-center sm:gap-3">
              <h1 className="max-w-full text-[28px] leading-[34px] font-bold tracking-[-0.5px] break-words text-[#1A2B3D] sm:text-[32px] sm:leading-[40px] lg:text-[36px] lg:leading-[44px]">
                {h.name}
              </h1>
              {/* Doctors available badge */}
              <div className="flex w-fit shrink-0 items-center gap-[6px] rounded-full bg-[#F0FDF4] px-[12px] py-[5px]">
                <span className="text-[10px] text-[#16A34A]">●</span>
                <span className="text-[11px] font-bold tracking-[0.6px] text-[#16A34A] uppercase">
                  {h.availableDoctors} Doctors Available
                </span>
              </div>
            </div>
            {/* Address + Phone */}
            <div className="mt-3 flex flex-col flex-wrap gap-2 sm:mt-0 lg:flex-row lg:items-center lg:gap-5">
              <div className="flex w-full items-start gap-[6px] lg:w-auto">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="mt-[2px] shrink-0 sm:mt-1"
                >
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0Z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span className="text-[13px] leading-tight font-normal whitespace-normal text-[#718096] sm:text-[14px] sm:leading-normal">
                  {h.address}
                </span>
              </div>
              <div className="flex w-full items-center gap-[6px] lg:w-auto">
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#4FB3AA"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="shrink-0"
                >
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
                </svg>
                <span className="text-[14px] font-medium break-words whitespace-normal text-[#4FB3AA]">
                  {h.phone}
                </span>
              </div>
            </div>
          </div>

          {/* Right: Share + Get Directions */}
          <div className="mt-4 flex w-full shrink-0 items-center gap-3 sm:mt-0 sm:w-auto">
            {/* Share button */}
            <button className="flex h-[44px] w-[44px] shrink-0 items-center justify-center rounded-full border border-[#E2E8F0] bg-white text-[#475569] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)] transition-all hover:bg-[#F8FAFC] sm:h-[48px] sm:w-[48px]">
              <svg
                width="17"
                height="17"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="18" cy="5" r="3" />
                <circle cx="6" cy="12" r="3" />
                <circle cx="18" cy="19" r="3" />
                <line x1="8.59" y1="13.51" x2="15.42" y2="17.49" />
                <line x1="15.41" y1="6.51" x2="8.59" y2="10.49" />
              </svg>
            </button>
            {/* Get Directions */}
            <button className="flex h-[44px] flex-1 items-center justify-center gap-[8px] rounded-full bg-[#1A2B3D] px-[20px] text-[14px] leading-[20px] font-bold text-white transition-all hover:bg-[#2D3748] active:scale-95 sm:h-[48px] sm:flex-none sm:px-[24px]">
              <svg
                width="15"
                height="15"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
                className="shrink-0"
              >
                <polygon points="3 11 22 2 13 21 11 13 3 11" />
              </svg>
              Get Directions
            </button>
          </div>
        </div>

        {/* ── Body: two columns ─────────────────────────────── */}
        <div className="flex flex-col items-start gap-5 lg:flex-row lg:gap-6">
          {/* ── LEFT: Quick Info + Stats ─────────────── */}
          <div className="flex w-full shrink-0 flex-col gap-4 lg:w-[272px]">
            {/* Quick Info card */}
            <div className="rounded-[24px] border border-[#F1F5F9] bg-white p-[20px] shadow-[0_1px_2px_0_rgba(0,0,0,0.05)]">
              {/* Header */}
              <div className="mb-4 flex items-center gap-[8px]">
                <div className="flex h-[26px] w-[26px] items-center justify-center rounded-full border border-[#B2DFDB] bg-[#E0F2F1]">
                  <svg
                    width="13"
                    height="13"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#4FB3AA"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10" />
                    <line x1="12" y1="8" x2="12" y2="12" />
                    <line x1="12" y1="16" x2="12.01" y2="16" strokeWidth="3" />
                  </svg>
                </div>
                <span className="text-[16px] leading-[24px] font-bold tracking-[0px] text-[#2D3748]">
                  Quick Info
                </span>
              </div>

              <Divider />

              {/* Today's Hours */}
              <div className="py-[14px]">
                <p className="mb-[8px] text-[10px] font-bold tracking-[0.8px] text-[#94A3B8] uppercase">
                  Today's Hours
                </p>
                <div className="flex items-center justify-between">
                  <span className="text-[15px] leading-[22px] font-bold text-[#2D3748]">
                    {h.hours}
                  </span>
                  {h.isOpenNow && (
                    <span className="rounded-full bg-[#F0FDF4] px-[10px] py-[4px] text-[12px] font-semibold text-[#16A34A]">
                      Open Now
                    </span>
                  )}
                </div>
              </div>

              <Divider />

              {/* Emergency Services */}
              <div className="py-[14px]">
                <p className="mb-[10px] text-[10px] font-bold tracking-[0.8px] text-[#94A3B8] uppercase">
                  Emergency Services
                </p>
                <div className="flex items-start gap-[10px]">
                  {/* ER icon */}
                  <div className="flex h-[38px] w-[38px] shrink-0 items-center justify-center rounded-full bg-[#FFF3E0]">
                    <svg
                      width="18"
                      height="18"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="#F97316"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    >
                      <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                      <polyline points="9 22 9 12 15 12 15 22" />
                    </svg>
                  </div>
                  <div>
                    <p className="text-[14px] leading-[20px] font-bold text-[#2D3748]">
                      ER Available
                    </p>
                    <p className="text-[12px] leading-[16px] font-normal text-[#94A3B8]">
                      Wait time: {h.erWaitTime}
                    </p>
                  </div>
                </div>
              </div>

              <Divider />

              {/* Facilities */}
              <div className="pt-[14px]">
                <p className="mb-[10px] text-[10px] font-bold tracking-[0.8px] text-[#94A3B8] uppercase">
                  Facilities
                </p>
                <div className="flex flex-wrap gap-[6px]">
                  {h.facilities.map((f) => (
                    <span
                      key={f}
                      className="rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-[10px] py-[4px] text-[12px] font-medium text-[#475569]"
                    >
                      {f}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {/* Stats card */}
            <div className="grid grid-cols-2 gap-3 rounded-[24px] bg-[#F0FDFB] p-2.5 lg:rounded-[32px] lg:p-3">
              <div className="flex flex-col items-center justify-center rounded-[20px] bg-white py-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] lg:rounded-[26px] lg:py-[20px]">
                <span className="text-[32px] leading-[38px] font-bold tracking-[-0.5px] text-[#3D8F87]">
                  {h.totalDoctors}
                </span>
                <span className="mt-[2px] text-[10px] font-bold tracking-[0.5px] text-[#718096] uppercase">
                  Total Doctors
                </span>
              </div>
              <div className="flex flex-col items-center justify-center rounded-[20px] bg-white py-[16px] shadow-[0_2px_12px_rgba(0,0,0,0.03)] lg:rounded-[26px] lg:py-[20px]">
                <span className="text-[32px] leading-[38px] font-bold tracking-[-0.5px] text-[#4C84FF]">
                  {h.departments}
                </span>
                <span className="mt-[2px] text-[10px] font-bold tracking-[0.5px] text-[#718096] uppercase">
                  Departments
                </span>
              </div>
            </div>
          </div>

          {/* RIGHT: Doctor Availability */}
          <div className="w-full min-w-0 flex-1 rounded-[24px] border border-[#F1F5F9] bg-white p-4 shadow-[0_2px_20px_rgba(0,0,0,0.02)] sm:p-6 lg:rounded-[40px] lg:p-[32px]">
            {/* Section header */}
            <div className="mb-4 flex flex-col justify-between gap-4 sm:flex-row sm:items-center lg:mb-6">
              <h2 className="text-[20px] leading-[28px] font-bold tracking-[-0.5px] text-[#2D3748] lg:text-[24px] lg:leading-[32px]">
                Doctor Availability
              </h2>
              {/* Search */}
              <div className="flex h-[44px] w-full shrink-0 items-center gap-[10px] rounded-full border border-[#E2E8F0] bg-[#F8FAFC] px-[16px] sm:w-[280px] lg:w-[320px]">
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#94A3B8"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <circle cx="11" cy="11" r="8" />
                  <path d="m21 21-4.3-4.3" />
                </svg>
                <input
                  type="text"
                  placeholder="Search doctor or specialty..."
                  className="flex-1 bg-transparent text-[14px] font-normal text-[#2D3748] outline-none placeholder:text-[#CBD5E1]"
                />
              </div>
            </div>

            {/* Doctor cards list */}
            <div className="flex flex-col gap-4">
              {h.doctors.map((doctor) => {
                const badge = getStatusBadge(doctor.status);
                const dotCls = getStatusDotColor(doctor.status);
                const specialtyCls = getSpecialtyCls(doctor.specialtyColor);

                return (
                  <div
                    key={doctor.id}
                    className="flex flex-col gap-4 rounded-[24px] border border-[#F1F5F9] bg-white p-4 shadow-[0_2px_8px_rgba(0,0,0,0.02)] transition-all hover:shadow-[0_4px_16px_rgba(0,0,0,0.04)] sm:flex-row sm:items-center sm:gap-5 sm:rounded-[32px] sm:px-6 sm:py-5"
                  >
                    {/* Top row on mobile, avatar + badge */}
                    <div className="flex items-center justify-between sm:block">
                      {/* Avatar */}
                      <div className="relative shrink-0">
                        <div
                          className="flex h-[48px] w-[48px] items-center justify-center rounded-full text-[14px] font-bold sm:h-[56px] sm:w-[56px] sm:text-[16px]"
                          style={{
                            backgroundColor: doctor.avatarBg,
                            color: doctor.avatarTextColor,
                          }}
                        >
                          {doctor.initials}
                        </div>
                        <span
                          className={cn(
                            "absolute right-[1px] bottom-[1px] block h-[12px] w-[12px] rounded-full border-2 border-white sm:h-[14px] sm:w-[14px]",
                            dotCls
                          )}
                        />
                      </div>
                      {/* Status badge - Mobile only */}
                      <div
                        className={cn(
                          "flex shrink-0 items-center gap-1.5 rounded-full px-[12px] py-[4px] text-[11px] font-bold sm:hidden",
                          badge.cls
                        )}
                      >
                        <span className="text-[8px] leading-none">●</span>
                        <span>{badge.label}</span>
                      </div>
                    </div>

                    {/* Info */}
                    <div className="flex flex-1 flex-col gap-[2px]">
                      <div className="flex flex-wrap items-center gap-2 sm:gap-2.5">
                        <span className="text-[16px] leading-[22px] font-bold tracking-[0px] text-[#2D3748]">
                          {doctor.name}
                        </span>
                        <span
                          className={cn(
                            "rounded-[4px] px-[8px] py-[2px] text-[10px] font-bold tracking-[0.5px] uppercase",
                            specialtyCls
                          )}
                        >
                          {doctor.specialty}
                        </span>
                      </div>
                      <p className="text-[14px] leading-[20px] font-normal text-[#718096]">
                        {doctor.role} • {doctor.experience}
                      </p>
                      <div className="mt-1 flex items-center gap-1.5">
                        <svg
                          width="14"
                          height="14"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="#94A3B8"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <circle cx="12" cy="12" r="10" />
                          <polyline points="12 6 12 12 16 14" />
                        </svg>
                        <span className="text-[12px] font-normal text-[#94A3B8]">
                          {doctor.updatedAt}
                        </span>
                      </div>
                    </div>

                    {/* Status badge - Desktop only */}
                    <div
                      className={cn(
                        "hidden shrink-0 items-center gap-1.5 rounded-full px-[14px] py-[6px] text-[13px] font-bold sm:flex",
                        badge.cls
                      )}
                    >
                      <span className="text-[10px] leading-none">●</span>
                      <span>{badge.label}</span>
                    </div>
                  </div>
                );
              })}
            </div>

            {/* View all */}
            <div className="mt-8 flex justify-center">
              <button className="text-[15px] font-bold text-[#4FB3AA] transition-all hover:text-[#3D8F87]">
                View all {h.totalDoctors} doctors
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
