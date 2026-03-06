"use client";

import React, { useState } from "react";

// ─── Pixel-Perfect Inline SVG Icons ──────────────────────────────────────────
const SettingsIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M12.22 2h-.44a2 2 0 0 0-2 2v.18a2 2 0 0 1-1 1.73l-.43.25a2 2 0 0 1-2 0l-.15-.08a2 2 0 0 0-2.73.73l-.22.38a2 2 0 0 0 .73 2.73l.15.1a2 2 0 0 1 1 1.72v.51a2 2 0 0 1-1 1.74l-.15.09a2 2 0 0 0-.73 2.73l.22.38a2 2 0 0 0 2.73.73l.15-.08a2 2 0 0 1 2 0l.43.25a2 2 0 0 1 1 1.73V20a2 2 0 0 0 2 2h.44a2 2 0 0 0 2-2v-.18a2 2 0 0 1 1-1.73l.43-.25a2 2 0 0 1 2 0l.15.08a2 2 0 0 0 2.73-.73l.22-.39a2 2 0 0 0-.73-2.73l-.15-.08a2 2 0 0 1-1-1.74v-.5a2 2 0 0 1 1-1.74l.15-.09a2 2 0 0 0 .73-2.73l-.22-.38a2 2 0 0 0-2.73-.73l-.15.08a2 2 0 0 1-2 0l-.43-.25a2 2 0 0 1-1-1.73z" />
    <circle cx="12" cy="12" r="3" />
  </svg>
);

const CheckIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="3.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const StethoscopeIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M4.8 2.3A.3.3 0 1 0 5 2h0a2 2 0 0 0-2 2v12a6 6 0 0 0 6 6 6 6 0 0 0 6-6V4a2 2 0 0 0-2-2h0a.3.3 0 1 0 .2.3" />
    <path d="M9 16V2" />
    <circle cx="18" cy="12" r="4" />
    <circle cx="18" cy="12" r="1.5" />
  </svg>
);

const BackSoonIcon = ({ className = "" }) => (
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
    <circle cx="12" cy="12" r="1" />
  </svg>
);

const OffDutyIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="12" r="10" />
    <line x1="4.93" y1="4.93" x2="19.07" y2="19.07" />
    <path d="M12 7v5" />
  </svg>
);

const TimerIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <circle cx="12" cy="13" r="8" />
    <path d="M12 9v4l2 2" />
    <path d="M10 2h4" />
  </svg>
);

const LogOutIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M9 21H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h4" />
    <polyline points="16 17 21 12 16 7" />
    <line x1="21" y1="12" x2="9" y2="12" />
  </svg>
);

const LogInIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M15 3h4a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2h-4" />
    <polyline points="10 17 15 12 10 7" />
    <line x1="15" y1="12" x2="3" y2="12" />
  </svg>
);

const ExternalLinkIcon = ({ className = "" }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6" />
    <polyline points="15 3 21 3 21 9" />
    <line x1="10" y1="14" x2="21" y2="3" />
  </svg>
);

export default function DoctorDashboard() {
  const [currentStatus, setCurrentStatus] = useState("ready");
  const [isSettingsOpen, setIsSettingsOpen] = useState(false);

  const statusOptions = [
    {
      id: "ready",
      title: "Ready",
      subtext: "Available Now",
      icon: <CheckIcon className="h-6 w-6" />,
      iconColor: "#10b981",
      iconBg: "#f0fdf4",
    },
    {
      id: "busy",
      title: "Busy",
      subtext: "With Patient",
      icon: <StethoscopeIcon className="h-6 w-6" />,
      iconColor: "#f97316",
      iconBg: "#fff7ed",
    },
    {
      id: "back_soon",
      title: "Back Soon",
      subtext: "Set Time",
      icon: <BackSoonIcon className="h-5 w-5" />,
      iconColor: "#eab308",
      iconBg: "#fefce8",
    },
    {
      id: "off_duty",
      title: "Off Duty",
      subtext: "Clock Out",
      icon: <OffDutyIcon className="h-6 w-6" />,
      iconColor: "#8b5cf6",
      iconBg: "#f5f3ff",
    },
  ];

  return (
    <div className="min-h-screen bg-[#fcfdfe] font-sans tracking-tight text-[#1e293b]">
      {/* ─── HEADER ─── */}
      <header className="flex items-center justify-between px-5 py-5 sm:px-10 lg:px-16">
        <div className="flex items-center gap-3 sm:gap-4">
          <div className="h-10 w-10 shrink-0 overflow-hidden rounded-full border-2 border-white bg-slate-100 shadow-md sm:h-11 sm:w-11">
            <img
              src="https://images.pexels.com/photos/5452293/pexels-photo-5452293.jpeg?auto=compress&cs=tinysrgb&w=150"
              alt="Dr. Sarah Smith"
              className="h-full w-full object-cover"
            />
          </div>
          <div className="flex flex-col">
            <h1 className="text-[13.5px] leading-tight font-bold text-[#0f172a] sm:text-[15px]">
              Dr. Sarah Smith
            </h1>
            <p className="text-[10.5px] font-medium text-[#64748b] sm:text-[12px]">
              Cardiology Dept.
            </p>
          </div>
        </div>

        <div className="relative">
          <button
            onClick={() => setIsSettingsOpen(!isSettingsOpen)}
            className="flex h-9 w-9 shrink-0 items-center justify-center rounded-xl bg-[#eff6ff] text-[#3b82f6] shadow-sm transition-all hover:bg-white active:scale-95 sm:h-10 sm:w-10"
          >
            <SettingsIcon className="h-5 w-5 sm:h-[21px] sm:w-[21px]" />
          </button>

          {/* Settings Dropdown */}
          {isSettingsOpen && (
            <>
              <div
                className="fixed inset-0 z-40"
                onClick={() => setIsSettingsOpen(false)}
              />
              <div className="animate-in fade-in zoom-in-95 absolute right-0 z-50 mt-3 w-48 origin-top-right rounded-2xl bg-white p-2 shadow-[0_10px_40px_-12px_rgba(0,0,0,0.15)] ring-1 ring-black/5 duration-200">
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#64748b] transition-colors hover:bg-emerald-50 hover:text-[#10b981]">
                  <LogInIcon className="h-4.5 w-4.5" />
                  <span>Login</span>
                </button>
                <button className="flex w-full items-center gap-3 rounded-xl px-4 py-3 text-left text-[14px] font-bold text-[#ef4444] transition-colors hover:bg-red-50">
                  <LogOutIcon className="h-4.5 w-4.5" />
                  <span>Logout</span>
                </button>
              </div>
            </>
          )}
        </div>
      </header>

      <main className="mx-auto flex max-w-[850px] flex-col items-center px-5 pt-8 pb-32 sm:px-8 sm:pt-14 lg:pt-20">
        {/* ─── CURRENT STATUS SECTION ─── */}
        <div className="mb-6 text-[10px] font-[900] tracking-[0.16em] text-[#cbd5e1] uppercase sm:mb-10 sm:text-[11px]">
          Current Status
        </div>

        {/* Status Big Indicator */}
        <div className="relative mb-20 flex items-center justify-center sm:mb-28">
          {/* Subtle Outer Glow */}
          <div className="absolute h-[280px] w-[280px] rounded-full bg-emerald-400/[0.04] blur-[40px] sm:h-[340px] sm:w-[340px]" />

          <div className="relative flex h-[220px] w-[220px] flex-col items-center justify-center rounded-full bg-white shadow-[0_25px_60px_-15px_rgba(0,0,0,0.08)] sm:h-[260px] sm:w-[260px]">
            {/* Outer mint border layer */}
            <div className="absolute -inset-3 flex items-center justify-center rounded-full border border-emerald-500/[0.04] bg-emerald-500/[0.01] sm:-inset-4" />

            {/* Inner mint ring */}
            <div className="absolute inset-2 rounded-full border-[8px] border-[#f0fdf4] sm:inset-2.5 sm:border-[10px]" />

            {/* Center Check Icon */}
            <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#10b981] text-white shadow-[0_8px_20px_rgba(16,185,129,0.3)] sm:h-16 sm:w-16">
              <CheckIcon className="h-6 w-6 sm:h-8 sm:w-8" />
            </div>

            <h2 className="mt-4 text-[24px] font-bold tracking-tight text-[#0f172a] sm:mt-5 sm:text-[32px]">
              Ready
            </h2>
            <p className="mt-0.5 text-[12.5px] font-medium text-[#64748b] sm:text-[14.5px]">
              Accepting Patients
            </p>

            {/* Timer Pill */}
            <div className="absolute -bottom-5 left-1/2 -translate-x-1/2 sm:-bottom-6">
              <div className="flex items-center justify-center rounded-full border border-[#f1f5f9] bg-white px-4 py-1.5 shadow-[0_4px_12px_rgba(0,0,0,0.03)] sm:px-5 sm:py-2">
                <span className="text-[10.5px] font-bold text-[#94a3b8] sm:text-[12px]">
                  Active for 12m
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* ─── STATUS GRID ─── */}
        <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 sm:gap-6 lg:max-w-[720px]">
          {statusOptions.map((status) => (
            <button
              key={status.id}
              onClick={() => setCurrentStatus(status.id)}
              className={`group relative flex flex-col items-center justify-center gap-3 overflow-hidden rounded-[32px] p-7 transition-all active:scale-[0.98] sm:rounded-[40px] sm:p-10 ${
                currentStatus === status.id
                  ? "bg-[#f0fdf4] shadow-[0_12px_30px_-5px_rgba(16,185,129,0.08)]"
                  : "bg-white shadow-[0_8px_30px_-5px_rgba(0,0,0,0.02)] hover:shadow-md"
              }`}
            >
              {/* Active Indicator Dot */}
              {currentStatus === status.id && (
                <div className="absolute top-5 right-5 h-2 w-2 rounded-full bg-[#10b981] sm:top-6 sm:right-6" />
              )}

              <div
                className="flex h-[48px] w-[48px] items-center justify-center rounded-[20px] transition-transform duration-300 group-hover:scale-110 sm:h-[56px] sm:w-[56px] sm:rounded-[24px]"
                style={{
                  backgroundColor: status.iconBg,
                  color: status.iconColor,
                }}
              >
                {status.icon}
              </div>

              <div className="text-center">
                <h3 className="text-[16px] font-bold text-[#0f172a] sm:text-[18px]">
                  {status.title}
                </h3>
                <p className="mt-0.5 text-[12.5px] font-medium text-[#94a3b8] sm:text-[14px]">
                  {status.subtext}
                </p>
              </div>
            </button>
          ))}
        </div>

        {/* ─── QUICK RETURN TIMES ─── */}
        <div className="mt-10 w-full rounded-[32px] bg-white p-7 shadow-[0_12px_40px_-10px_rgba(0,0,0,0.04)] sm:mt-14 sm:rounded-[40px] sm:p-10 lg:max-w-[720px]">
          <div className="mb-6 flex items-center gap-3 sm:mb-8">
            <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-amber-50 text-amber-500 sm:h-9 sm:w-9 sm:rounded-xl">
              <TimerIcon className="h-4.5 w-4.5 stroke-[3] sm:h-5 sm:w-5" />
            </div>
            <h4 className="text-[14px] font-bold tracking-tight text-[#0f172a] sm:text-[16px]">
              Quick Return Times
            </h4>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 sm:gap-4">
            {["5m", "10m", "15m", "30m"].map((time) => (
              <button
                key={time}
                className="rounded-[18px] bg-[#f8fafc] py-3.5 text-[13.5px] font-bold text-[#64748b] transition-all hover:bg-[#eff6ff] hover:text-[#3b82f6] active:scale-95 sm:rounded-[22px] sm:py-5 sm:text-[14.5px]"
              >
                {time}
              </button>
            ))}
          </div>
        </div>
      </main>

      {/* ─── FOOTER ─── */}
      <footer className="fixed bottom-0 left-0 flex w-full items-center justify-between border-t border-[#f1f5f9] bg-white px-5 py-4 active:backdrop-blur-xl sm:px-10 lg:px-16">
        <div className="flex items-center gap-2 text-[#10b981] sm:gap-2.5">
          <div className="h-1.5 w-1.5 rounded-full bg-[#10b981] shadow-[0_0_8px_rgba(16,185,129,0.5)] sm:h-2 sm:w-2" />
          <span className="text-[9.5px] font-[900] tracking-widest uppercase sm:text-[11px]">
            System Online
          </span>
        </div>

        <button className="flex items-center gap-1.5 text-[#94a3b8] transition-all hover:text-[#0f172a] sm:gap-2">
          <span className="text-[9.5px] font-[900] tracking-widest uppercase sm:text-[11px]">
            View Public Page
          </span>
          <ExternalLinkIcon className="h-3 w-3 sm:h-[14px] sm:w-[14px]" />
        </button>
      </footer>
    </div>
  );
}
