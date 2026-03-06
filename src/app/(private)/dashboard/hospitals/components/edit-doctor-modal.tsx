import React, { useState } from "react";

// ─── Shared Icons ─────────────────────────────────────────────────────────────

const FaceSmileIcon = ({ className = "" }: { className?: string }) => (
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
    <path d="M8 14s1.5 2 4 2 4-2 4-2" />
    <line x1="9" y1="9" x2="9.01" y2="9" />
    <line x1="15" y1="9" x2="15.01" y2="9" />
  </svg>
);

const IdBadgeIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2.5"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
    <line x1="12" y1="2" x2="12" y2="6" />
    <path d="M8 10h8" />
    <path d="M8 14h8" />
    <path d="M8 18h4" />
    <path d="M10 2h4" />
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

const ClockIcon = ({ className = "" }: { className?: string }) => (
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
    <polyline points="12 6 12 12 16 14" />
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

const CameraIcon = ({ className = "" }: { className?: string }) => (
  <svg
    className={className}
    viewBox="0 0 24 24"
    fill="none"
    stroke="currentColor"
    strokeWidth="2"
    strokeLinecap="round"
    strokeLinejoin="round"
  >
    <path d="M23 19a2 2 0 0 1-2 2H3a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h4l2-3h6l2 3h4a2 2 0 0 1 2 2z" />
    <circle cx="12" cy="13" r="4" />
    <line x1="21" y1="10" x2="21.01" y2="10" />
    <line x1="19" y1="8" x2="19" y2="12" />
    <line x1="17" y1="10" x2="21" y2="10" />
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

// ─── Modal Component ──────────────────────────────────────────────────────────

interface EditDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  doctorName?: string;
}

export default function EditDoctorModal({
  isOpen,
  onClose,
}: EditDoctorModalProps) {
  const [showOnBoard, setShowOnBoard] = useState(true);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="animate-in slide-in-from-right relative z-10 h-full w-full max-w-[500px] overflow-y-auto bg-[#f8f9fa] shadow-2xl duration-300">
        <div className="p-6 sm:p-8">
          <div className="mb-8">
            <h2 className="mb-1 text-[24px] font-bold tracking-tight text-[#1e293b] sm:text-[26px]">
              Doctor Profile
            </h2>
            <p className="text-[13.5px] leading-relaxed text-[#64748b] sm:text-[14px]">
              Update the details that patients will see on the live board.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* CARD 1: Profile Photo */}
            <div className="rounded-[28px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-6 flex items-center gap-2">
                <FaceSmileIcon className="h-5 w-5 text-[#4ab4a5]" />
                <h3 className="text-[15px] font-bold text-[#1e293b]">
                  Profile Photo
                </h3>
              </div>

              <div className="flex flex-col items-center gap-6 sm:flex-row">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]">
                    <CameraIcon className="h-8 w-8 text-[#cbd5e1]" />
                  </div>
                  <div
                    className="absolute right-0 bottom-0 flex h-7 w-7 cursor-pointer items-center justify-center rounded-full border-2 border-white shadow-sm transition-colors"
                    style={{ backgroundColor: "#4ab4a5" }}
                  >
                    <PencilIcon className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div className="text-center sm:text-left">
                  <h4 className="mb-1 text-[14px] font-bold text-[#1e293b]">
                    Upload a photo
                  </h4>
                  <p className="mb-1.5 text-[12px] text-[#94a3b8]">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                  <button
                    className="text-[13px] font-bold transition-colors hover:opacity-80"
                    style={{ color: "#4ab4a5" }}
                  >
                    Choose File
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2: Basic Information */}
            <div className="rounded-[28px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IdBadgeIcon className="h-5 w-5 text-[#4ab4a5]" />
                  <h3 className="text-[15px] font-bold text-[#1e293b]">
                    Basic Information
                  </h3>
                </div>
                <button className="flex items-center gap-1.5 text-[12px] font-bold text-[#ef4444] transition-colors hover:text-red-600">
                  <TrashIcon className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>

              <div className="grid grid-cols-1 gap-x-4 gap-y-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
                <div className="col-span-1 flex flex-col gap-1.5 sm:col-span-2">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Specialty / Department
                  </label>
                  <div className="relative">
                    <select
                      className="h-[46px] w-full appearance-none rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                      defaultValue=""
                    >
                      <option value="" disabled className="text-[#94a3b8]">
                        Select a department
                      </option>
                      <option value="cardiology">Cardiology</option>
                      <option value="pediatrics">Pediatrics</option>
                      <option value="neurology">Neurology</option>
                    </select>
                    <ChevronDownIcon className="pointer-events-none absolute top-1/2 right-3.5 h-4 w-4 -translate-y-1/2 text-[#94a3b8]" />
                  </div>
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Primary Room
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Room 304"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 years"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3: Default Availability */}
            <div className="rounded-[28px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-5 flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-[#4ab4a5]" />
                <h3 className="text-[15px] font-bold text-[#1e293b]">
                  Default Availability
                </h3>
              </div>

              <div className="mb-5 flex items-center justify-between rounded-[20px] border border-[#eff3f8] bg-[#fbfcfd] p-4">
                <div className="flex items-center gap-3.5">
                  <div
                    className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#e8f6f3]"
                    style={{ color: "#4ab4a5" }}
                  >
                    <CheckCircleIcon className="h-6 w-6" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[13.5px] font-bold text-[#1e293b]">
                      Show on Public Board
                    </p>
                    <p className="text-[11.5px] font-medium text-[#94a3b8]">
                      Visible to patients immediately
                    </p>
                  </div>
                </div>
                {/* Toggle switch visual */}
                <button
                  onClick={() => setShowOnBoard(!showOnBoard)}
                  className="relative flex h-[24px] w-[44px] cursor-pointer items-center rounded-full px-1 transition-colors duration-200 focus:outline-none"
                  style={{
                    backgroundColor: showOnBoard ? "#4ab4a5" : "#cbd5e1",
                  }}
                >
                  <div
                    className="h-[18px] w-[18px] rounded-full bg-white shadow-sm transition-transform duration-200"
                    style={{
                      transform: showOnBoard
                        ? "translateX(18px)"
                        : "translateX(0)",
                    }}
                  />
                </button>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Typical Start Time
                  </label>
                  <input
                    type="text"
                    placeholder="09:00 AM"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11px] font-bold tracking-wide text-[#94a3b8] uppercase sm:text-[11.5px]">
                    Typical End Time
                  </label>
                  <input
                    type="text"
                    placeholder="05:00 PM"
                    className="h-[46px] rounded-[14px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#cbd5e1] focus:border-[#4ab4a5] focus:ring-2 focus:ring-[#4ab4a5]/10"
                  />
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="mt-4 flex flex-col gap-3 sm:flex-row">
              <button
                className="flex flex-1 items-center justify-center gap-2 rounded-[16px] py-4 font-bold text-white shadow-md transition-all active:scale-[0.98]"
                style={{ backgroundColor: "#4ab4a5" }}
              >
                <SaveIcon className="h-5 w-5" />
                <span className="text-[14.5px]">Save Profile</span>
              </button>
              <button
                className="rounded-[16px] border border-[#e2e8f0] bg-white px-8 py-4 font-bold text-[#475569] shadow-sm transition-colors hover:bg-[#f8fafc] active:scale-[0.98]"
                onClick={onClose}
              >
                <span className="text-[14.5px]">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
