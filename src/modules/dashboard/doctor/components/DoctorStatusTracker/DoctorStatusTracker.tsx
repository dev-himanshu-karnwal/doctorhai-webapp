import { cloneElement } from "react";
import { statusOptions } from "../../data";

interface DoctorStatusTrackerProps {
  currentStatus: string;
}

export const DoctorStatusTracker = ({
  currentStatus,
}: DoctorStatusTrackerProps) => {
  const activeStatus =
    statusOptions.find((s) => s.id === currentStatus) || statusOptions[0];

  return (
    <>
      <div className="mb-6 text-[10px] font-[900] tracking-[0.16em] text-[#cbd5e1] uppercase sm:mb-10 sm:text-[11px]">
        Current Status
      </div>

      <div className="relative mb-20 flex items-center justify-center sm:mb-28">
        <div
          className="absolute h-[320px] w-[320px] rounded-full blur-[50px] transition-colors duration-500 sm:h-[380px] sm:w-[380px]"
          style={{ backgroundColor: activeStatus.iconColor, opacity: 0.15 }}
        />

        <div
          className="relative flex h-[260px] w-[260px] flex-col items-center justify-center rounded-full border-[4px] border-white shadow-[0_20px_50px_-10px_rgba(0,0,0,0.05),0_0_80px_rgba(0,0,0,0.02)] transition-colors duration-500 sm:h-[300px] sm:w-[300px]"
          style={{
            backgroundColor: activeStatus.iconBg,
            boxShadow: `0 25px 60px -15px ${activeStatus.iconColor}15, 0 0 80px ${activeStatus.iconColor}10`,
          }}
        >
          <div
            className="absolute inset-[10px] rounded-full border-[8px] transition-colors duration-500 sm:inset-[12px] sm:border-[10px]"
            style={{ borderColor: "rgba(255, 255, 255, 0.6)" }}
          />

          <div className="z-10 mt-2 flex items-center justify-center">
            {cloneElement(
              activeStatus.icon as React.ReactElement<{ className?: string }>,
              {
                className: "h-20 w-20 sm:h-24 sm:w-24",
              }
            )}
          </div>

          <h2 className="z-10 mt-5 text-[28px] font-bold tracking-tight text-[#0f172a] sm:mt-6 sm:text-[36px]">
            {activeStatus.title}
          </h2>
          <p className="z-10 mt-0.5 text-[14px] font-medium text-[#64748b] sm:text-[16px]">
            {activeStatus.subtext}
          </p>
        </div>
      </div>
    </>
  );
};

export default DoctorStatusTracker;
