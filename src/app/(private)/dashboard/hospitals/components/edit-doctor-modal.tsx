import React from "react";

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
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[60] flex justify-end font-sans">
      {/* Backdrop */}
      <div
        className="absolute inset-0 bg-slate-900/30 backdrop-blur-[1px] transition-opacity"
        onClick={onClose}
      />

      {/* Drawer */}
      <div className="animate-in slide-in-from-right relative z-10 h-full w-full max-w-[500px] overflow-y-auto bg-[#f4f5f7] shadow-2xl duration-300">
        <div className="p-8">
          {/* Header */}
          <div className="mb-7">
            <h2 className="mb-1 text-[26px] font-bold tracking-tight text-[#1e293b]">
              Doctor Profile
            </h2>
            <p className="text-[14px] text-[#64748b]">
              Update the details that patients will see on the live board.
            </p>
          </div>

          <div className="flex flex-col gap-5">
            {/* CARD 1: Profile Photo */}
            <div className="rounded-[20px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-6 flex items-center gap-2">
                <FaceSmileIcon className="h-5 w-5 text-[#3b82f6]" />
                <h3 className="text-[15px] font-bold text-[#1e293b]">
                  Profile Photo
                </h3>
              </div>

              <div className="flex items-center gap-6">
                <div className="relative">
                  <div className="flex h-24 w-24 items-center justify-center rounded-full border-2 border-dashed border-[#e2e8f0] bg-[#f8fafc]">
                    <CameraIcon className="h-8 w-8 text-[#cbd5e1]" />
                  </div>
                  <div className="absolute right-0 bottom-0 flex h-6 w-6 cursor-pointer items-center justify-center rounded-full border-2 border-white bg-[#3b82f6] shadow-sm transition-colors hover:bg-blue-600">
                    <PencilIcon className="h-3 w-3 text-white" />
                  </div>
                </div>
                <div>
                  <h4 className="mb-1 text-[14px] font-bold text-[#1e293b]">
                    Upload a friendly photo
                  </h4>
                  <p className="mb-1.5 text-[12px] text-[#94a3b8]">
                    JPG, PNG or GIF. Max 2MB.
                  </p>
                  <button className="text-[13px] font-bold text-[#3b82f6] transition-colors hover:text-blue-700">
                    Choose File
                  </button>
                </div>
              </div>
            </div>

            {/* CARD 2: Basic Information */}
            <div className="rounded-[20px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-5 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <IdBadgeIcon className="h-5 w-5 text-[#3b82f6]" />
                  <h3 className="text-[15px] font-bold text-[#1e293b]">
                    Basic Information
                  </h3>
                </div>
                <button className="flex items-center gap-1.5 text-[12px] font-bold text-[#ef4444] transition-colors hover:text-red-600">
                  <TrashIcon className="h-3.5 w-3.5" />
                  Delete
                </button>
              </div>

              <div className="grid grid-cols-2 gap-x-4 gap-y-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    First Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Sarah"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Last Name
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Smith"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
                <div className="col-span-2 flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Specialty
                  </label>
                  <div className="relative">
                    <select
                      className="h-[44px] w-full appearance-none rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
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
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Primary Room / Office
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. Room 304, West Wing"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Experience
                  </label>
                  <input
                    type="text"
                    placeholder="e.g. 12 years"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
              </div>
            </div>

            {/* CARD 3: Default Availability */}
            <div className="rounded-[20px] border border-[#f1f5f9] bg-white p-6 shadow-[0_2px_10px_rgba(0,0,0,0.01)]">
              <div className="mb-5 flex items-center gap-2">
                <ClockIcon className="h-5 w-5 text-[#3b82f6]" />
                <h3 className="text-[15px] font-bold text-[#1e293b]">
                  Default Availability
                </h3>
              </div>

              <div className="mb-5 flex items-center justify-between rounded-[12px] border border-[#eff3f8] bg-[#fbfcfd] p-3.5">
                <div className="flex items-center gap-3">
                  <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-[#dcfce7] text-[#22c55e]">
                    <CheckCircleIcon className="h-5 w-5" />
                  </div>
                  <div>
                    <p className="mb-0.5 text-[13px] font-bold text-[#1e293b]">
                      Show on Public Board
                    </p>
                    <p className="text-[11px] font-medium text-[#94a3b8]">
                      Visible to patients immediately
                    </p>
                  </div>
                </div>
                {/* Toggle switch visual */}
                <div className="relative flex h-[24px] w-[42px] cursor-pointer items-center rounded-full bg-[#3b82f6] px-1 transition-colors">
                  <div className="h-[18px] w-[18px] translate-x-[16px] rounded-full bg-white shadow-sm transition-transform" />
                </div>
              </div>

              <div className="grid grid-cols-2 gap-x-4">
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Typical Start Time
                  </label>
                  <input
                    type="text"
                    placeholder="09:00 AM"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
                <div className="flex flex-col gap-1.5">
                  <label className="text-[11.5px] font-bold text-[#475569]">
                    Typical End Time
                  </label>
                  <input
                    type="text"
                    placeholder="05:00 PM"
                    className="h-[44px] rounded-[10px] border border-[#e2e8f0] bg-[#fbfcfd] px-3.5 text-[13.5px] text-[#0f172a] transition-all outline-none placeholder:text-[#94a3b8] focus:border-[#3b82f6] focus:ring-1 focus:ring-[#3b82f6]"
                  />
                </div>
              </div>
            </div>

            {/* ACTION FOOTER */}
            <div className="mt-2 flex gap-3">
              <button className="flex flex-1 items-center justify-center gap-2 rounded-[12px] bg-[#3b82f6] py-3.5 font-bold text-white shadow-md transition-colors hover:bg-blue-600">
                <SaveIcon className="h-5 w-5" />
                <span className="text-[14px]">Save Profile</span>
              </button>
              <button
                className="rounded-[12px] border border-[#e2e8f0] bg-white px-8 py-3.5 font-bold text-[#475569] shadow-sm transition-colors hover:bg-[#f8fafc]"
                onClick={onClose}
              >
                <span className="text-[14px]">Cancel</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
