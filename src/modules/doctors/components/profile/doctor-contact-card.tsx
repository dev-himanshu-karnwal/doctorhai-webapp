"use client";

import { Button } from "@/components/ui";

interface DoctorContactCardProps {
  phoneNumber: string;
  availabilityHours: string;
  onCallNow?: () => void;
}

export function DoctorContactCard({
  phoneNumber,
  availabilityHours,
  onCallNow,
}: DoctorContactCardProps) {
  return (
    <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
      <div className="mb-5 flex items-center gap-3 sm:mb-8">
        <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#DCFCE7]">
          <svg
            width="18"
            height="18"
            viewBox="0 0 24 24"
            fill="none"
            stroke="#16A34A"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
          >
            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
          </svg>
        </div>
        <h3 className="text-[18px] font-bold text-[#1A2B3D]">Contact</h3>
      </div>

      <div className="flex h-auto min-h-[160px] flex-1 flex-col items-center justify-center py-6 text-center sm:min-h-[178px]">
        <p className="mb-[6px] text-[11px] leading-[16px] font-semibold tracking-[0.7px] text-[#4E7397] uppercase sm:mb-[8px] sm:text-[14px] sm:leading-[20px]">
          FRONT DESK DIRECT LINE
        </p>
        <h4 className="text-[24px] leading-[32px] font-extrabold tracking-[-0.75px] text-[#0E141B] sm:text-[30px] sm:leading-[36px]">
          {phoneNumber}
        </h4>
        <p className="mt-1.5 text-[12px] leading-[16px] font-normal tracking-[0px] text-[#4E7397]">
          {availabilityHours}
        </p>
      </div>

      <Button
        onClick={onCallNow}
        className="mt-8 h-[48px] w-full gap-2 rounded-[24px] bg-[#4799EB] text-[15px] leading-[22px] font-bold tracking-[0px] text-white shadow-[0_8px_16px_rgba(71,153,235,0.2)] transition-all hover:bg-[#3B86D1] active:scale-[0.98] sm:mt-10 sm:h-[56px] sm:text-[16px] sm:leading-[24px]"
      >
        <svg
          width="20"
          height="20"
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="2.5"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.69 12a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.6 1.27h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 8.91a16 16 0 0 0 6 6l.91-.91a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 21.73 16.92z" />
        </svg>
        Call Now
      </Button>
    </div>
  );
}
