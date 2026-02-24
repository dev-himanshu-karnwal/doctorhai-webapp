import type { DoctorEntry } from "../types/landing.types";

type DoctorStatusCardProps = {
  doctor: DoctorEntry;
};

export function DoctorStatusCard({ doctor }: DoctorStatusCardProps) {
  const getStatusConfig = () => {
    switch (doctor.status) {
      case "available":
        return {
          barBg: "bg-[#F0FDF4]",
          barText: "text-[#16A34A]",
          label: "Available Now",
          footerIcon: (
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-[#16A34A] bg-white text-[#16A34A]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
          ),
          topIcon: (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#EAFAF0]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#22C55E"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M12 20v-2" />
                <path d="M7 18.667c.667-2 4-3.333 5-3.333s4.333 1.333 5 3.333" />
                <path d="M12 12a4 4 0 1 0 0-8 4 4 0 0 0 0 8Z" />
                <path d="M12 12v3" />
                <path d="M7.757 7.757a6 6 0 0 1 8.486 0" />
                <path d="M5.636 5.636a9 9 0 0 1 12.728 0" />
              </svg>
            </div>
          ),
        };
      case "busy":
        return {
          barBg: "bg-[#FEF2F2]",
          barText: "text-[#EF4444]",
          label: "Busy (Surgery)",
          footerIcon: (
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-[#EF4444] bg-white text-[#EF4444]">
              <svg
                width="12"
                height="12"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="4"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <line x1="18" y1="12" x2="6" y2="12" />
              </svg>
            </div>
          ),
          topIcon: (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FEF2F2]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#EF4444"
                strokeWidth="2.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <circle cx="12" cy="12" r="9" />
                <polyline points="12 7 12 12 15 15" />
              </svg>
            </div>
          ),
        };
      case "on-break":
        return {
          barBg: "bg-[#FFF7ED]",
          barText: "text-[#F97316]",
          label: "On Break (15m)",
          footerIcon: (
            <div className="flex h-6 w-6 items-center justify-center rounded-full border-[1.5px] border-[#F97316] bg-white text-[#F97316]">
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
                <path d="M5 22h14" />
                <path d="M5 2h14" />
                <path d="M17 22v-4.172a2 2 0 0 0-.586-1.414L12 12l-4.414 4.414A2 2 0 0 0 7 17.828V22" />
                <path d="M7 2v4.172a2 2 0 0 0 .586 1.414L12 12l4.414-4.414A2 2 0 0 0 17 6.172V2" />
              </svg>
            </div>
          ),
          topIcon: (
            <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#FFF7ED]">
              <svg
                width="20"
                height="20"
                viewBox="0 0 24 24"
                fill="none"
                stroke="#F97316"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M17 8h1a4 4 0 1 1 0 8h-1" />
                <path d="M3 8h14v9a4 4 0 0 1-4 4H7a4 4 0 0 1-4-4V8z" />
              </svg>
            </div>
          ),
        };
      default:
        return {
          barBg: "bg-gray-100",
          barText: "text-gray-500",
          label: "Offline",
          footerIcon: null,
          topIcon: null,
        };
    }
  };

  const config = getStatusConfig();

  return (
    <article className="flex min-w-[325.34px] flex-shrink-0 flex-col gap-5 rounded-[32px] bg-white p-6 shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-all hover:shadow-md">
      {/* Top Section */}
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="h-14 w-14 overflow-hidden rounded-full ring-2 ring-[#F1F5F9] ring-offset-1">
            <img
              src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}`}
              alt={doctor.name}
              className="h-full w-full bg-teal-50 object-cover"
            />
          </div>
          <div>
            <h3 className="text-[18px] font-bold tracking-tight text-[#2D3748]">
              {doctor.name}
            </h3>
            <p className="text-[12px] leading-[16px] font-medium text-[#718096]">
              {doctor.specialty}
            </p>
          </div>
        </div>
        {config.topIcon}
      </div>

      <div className="flex items-center gap-2 px-1">
        <svg
          width="14"
          height="14"
          viewBox="0 0 24 24"
          fill="none"
          stroke="#718096"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z" />
          <circle cx="12" cy="10" r="3" />
        </svg>
        <span className="text-[12px] leading-[16px] font-normal text-[#718096]">
          {doctor.hospitalName || "General Hospital"}
        </span>
      </div>

      {/* Status Bar */}
      <div
        className={`flex items-center justify-between rounded-full ${config.barBg} px-4 py-[10px] transition-transform active:scale-[0.98]`}
      >
        <span className={`text-[14px] font-bold ${config.barText}`}>
          {config.label}
        </span>
        {config.footerIcon}
      </div>
    </article>
  );
}
