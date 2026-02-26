import React from "react";
import { cn } from "@/lib/cn";
import { Button } from "@/components/ui/button";

export function DoctorProfilePage() {
  return (
    <div className="min-h-screen bg-[#F4F7F5] p-4 font-sans sm:p-6 lg:p-10">
      <div className="mx-auto max-w-[1100px] space-y-4 sm:space-y-6">
        {/* Top Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
          {/* Profile Card */}
          <div className="w-full shrink-0 rounded-[20px] bg-white p-5 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-8 lg:w-[320px]">
            <div className="relative mx-auto mb-5 h-[120px] w-[120px] sm:mb-6 sm:h-[140px] sm:w-[140px]">
              <div className="h-full w-full overflow-hidden rounded-full border-4 border-[#F8FAFC]">
                <img
                  src="https://images.unsplash.com/photo-1559839734-2b71f1536783?auto=format&fit=crop&q=80&w=200&h=200"
                  alt="Dr. Sarah Jenkins"
                  className="h-full w-full object-cover"
                />
              </div>
            </div>
            <h1 className="text-[20px] font-bold text-[#1A2B3D] sm:text-[24px]">
              Dr. Sarah Jenkins
            </h1>
            <p className="mt-1 text-[14px] font-semibold text-[#4FB3AA] sm:text-[16px]">
              Cardiologist
            </p>
            <div className="mt-4 flex flex-wrap justify-center gap-2">
              <span className="rounded-[6px] bg-[#F1F5F9] px-[8px] py-[3px] text-[12px] font-bold text-[#94A3B8]">
                MD
              </span>
              <span className="rounded-[6px] bg-[#F1F5F9] px-[8px] py-[3px] text-[12px] font-bold text-[#94A3B8]">
                Lic. #49281
              </span>
            </div>
          </div>

          {/* Availability Card */}
          <div className="relative flex flex-1 flex-col items-center justify-center overflow-hidden rounded-[24px] bg-white p-8 text-center shadow-[0_4px_24px_rgba(0,0,0,0.04)] sm:rounded-[32px] sm:p-10">
            <div className="mb-4 flex h-[64px] w-[64px] shrink-0 items-center justify-center rounded-full bg-[#22C55E] text-white shadow-[0_8px_20px_rgba(34,197,94,0.3)] sm:mb-6 sm:h-[80px] sm:w-[80px]">
              <svg
                width="40"
                height="40"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="3.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <polyline points="20 6 9 17 4 12" />
              </svg>
            </div>
            <h2 className="text-[32px] leading-tight font-bold text-[#1A2B3D] sm:text-[48px]">
              Available Now
            </h2>
            <p className="mt-3 max-w-[450px] text-[14px] leading-[20px] text-[#718096] sm:mt-4 sm:text-[16px] sm:leading-[24px]">
              Currently accepting walk-ins at the clinic. Please proceed to
              reception.
            </p>
            <div className="absolute right-4 bottom-4 flex items-center gap-[6px] rounded-full border border-[#F1F5F9] bg-[#F8FAFC] px-[10px] py-[4px] sm:right-6 sm:bottom-6 sm:px-[12px] sm:py-[5px]">
              <span className="h-[6px] w-[6px] rounded-full bg-[#22C55E]" />
              <span className="text-[11px] font-semibold text-[#94A3B8] sm:text-[12px]">
                Live Updated
              </span>
            </div>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col gap-4 sm:gap-6 lg:flex-row">
          {/* Hospital Info */}
          <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#E0F2FE]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#0284C7"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z" />
                  <polyline points="9 22 9 12 15 12 15 22" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#1A2B3D]">
                Hospital Info
              </h3>
            </div>

            <div className="mb-5 flex-1 rounded-[16px] border border-[#E7EDF3] bg-[#F6F7F8] p-[16px] sm:mb-8 sm:rounded-[24px]">
              <p className="mb-3 text-[11px] leading-[16px] font-bold tracking-[0.6px] text-[#4E7397] uppercase sm:mb-4 sm:text-[12px]">
                ST. MARY'S GENERAL HOSPITAL
              </p>
              <div className="flex flex-col gap-[10px] sm:gap-[12px]">
                {[
                  { label: "Street:", value: "4500 Medical Center Drive" },
                  { label: "City:", value: "Springfield" },
                  { label: "District:", value: "Sangamon District" },
                  { label: "State:", value: "IL" },
                  { label: "Zipcode:", value: "62702" },
                ].map((item) => (
                  <div key={item.label} className="grid grid-cols-[80px_1fr]">
                    <span className="text-[14px] leading-[20px] font-medium tracking-[0px] text-[#4E7397]">
                      {item.label}
                    </span>
                    <span className="text-[14px] leading-[20px] font-medium tracking-[0px] text-[#0E141B]">
                      {item.value}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            <Button className="h-[46px] w-full gap-2 rounded-[16px] border border-[#E7EDF3] bg-[#F6F7F8] px-[16px] text-[14px] leading-[20px] font-bold tracking-[0px] text-[#0E141B] shadow-none hover:bg-[#E2E8F0]">
              <svg
                width="18"
                height="18"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
                strokeLinejoin="round"
              >
                <path d="M9 18l6-6-6-6" />
              </svg>
              Get Directions
            </Button>
          </div>

          {/* Professional Info */}
          <div className="flex w-full flex-col rounded-[20px] bg-white p-5 shadow-[0_4px_20px_-2px_rgba(0,0,0,0.05)] sm:rounded-[32px] sm:p-8 lg:w-0 lg:flex-1">
            <div className="mb-5 flex items-center gap-3 sm:mb-8">
              <div className="flex h-[36px] w-[36px] items-center justify-center rounded-full bg-[#FEF3C7]">
                <svg
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#D97706"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M22 10v6M2 10l10-5 10 5-10 5z" />
                  <path d="M6 12v5c3 3 9 3 12 0v-5" />
                </svg>
              </div>
              <h3 className="text-[18px] font-bold text-[#1A2B3D]">
                Professional Info
              </h3>
            </div>

            <div className="space-y-4">
              <div className="rounded-[20px] border border-[#E7EDF3] bg-[#F6F7F8] p-[16px] sm:rounded-[24px] sm:p-[20px]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#4FB3AA]">
                    <svg
                      width="28"
                      height="23"
                      viewBox="0 0 28 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M8.125 0C9.20833 0 10.2396 0.229167 11.2188 0.6875C12.1979 1.14583 13.0417 1.79167 13.75 2.625C14.4583 1.79167 15.3021 1.14583 16.2812 0.6875C17.2604 0.229167 18.2917 0 19.375 0C21.3333 0 22.9688 0.65625 24.2812 1.96875C25.5938 3.28125 26.25 4.91667 26.25 6.875C26.25 6.97917 26.2448 7.08333 26.2344 7.1875C26.224 7.29167 26.2188 7.39583 26.2188 7.5H23.7188C23.7396 7.39583 23.75 7.29167 23.75 7.1875C23.75 7.08333 23.75 6.97917 23.75 6.875C23.75 5.625 23.3333 4.58333 22.5 3.75C21.6667 2.91667 20.625 2.5 19.375 2.5C18.3958 2.5 17.4896 2.77604 16.6562 3.32812C15.8229 3.88021 15.25 4.58333 14.9375 5.4375H12.5625C12.25 4.58333 11.6771 3.88021 10.8438 3.32812C10.0104 2.77604 9.10417 2.5 8.125 2.5C6.875 2.5 5.83333 2.91667 5 3.75C4.16667 4.58333 3.75 5.625 3.75 6.875C3.75 6.97917 3.75 7.08333 3.75 7.1875C3.75 7.29167 3.76042 7.39583 3.78125 7.5H1.28125C1.28125 7.39583 1.27604 7.29167 1.26562 7.1875C1.25521 7.08333 1.25 6.97917 1.25 6.875C1.25 4.91667 1.90625 3.28125 3.21875 1.96875C4.53125 0.65625 6.16667 0 8.125 0ZM5.375 15H8.875C9.54167 15.6458 10.2708 16.3438 11.0625 17.0938C11.8542 17.8438 12.75 18.6667 13.75 19.5625C14.75 18.6667 15.6458 17.8438 16.4375 17.0938C17.2292 16.3438 17.9583 15.6458 18.625 15H22.1562C21.3646 15.875 20.4271 16.8229 19.3438 17.8438C18.2604 18.8646 17 20.0208 15.5625 21.3125L13.75 22.9375L11.9375 21.3125C10.5 20.0208 9.24479 18.8646 8.17188 17.8438C7.09896 16.8229 6.16667 15.875 5.375 15ZM12.5625 16.25C12.8333 16.25 13.0677 16.1719 13.2656 16.0156C13.4635 15.8594 13.6042 15.6562 13.6875 15.4062L15.375 10.3125L16.4688 11.9375C16.5729 12.1042 16.7188 12.2396 16.9062 12.3438C17.0938 12.4479 17.2917 12.5 17.5 12.5H27.5V10H18.2188L16.0625 6.8125C15.9375 6.625 15.776 6.48438 15.5781 6.39062C15.3802 6.29688 15.1667 6.25 14.9375 6.25C14.6667 6.25 14.4323 6.32812 14.2344 6.48438C14.0365 6.64062 13.8958 6.84375 13.8125 7.09375L12.125 12.1562L11.0625 10.5625C10.9583 10.3958 10.8125 10.2604 10.625 10.1562C10.4375 10.0521 10.2396 10 10.0312 10H0V12.5H9.28125L11.4375 15.6875C11.5625 15.875 11.724 16.0156 11.9219 16.1094C12.1198 16.2031 12.3333 16.25 12.5625 16.25Z"
                        fill="#4E7397"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] leading-[16px] font-normal tracking-[0.6px] text-[#4E7397] uppercase">
                      SPECIALTY
                    </p>
                    <span className="text-[16px] leading-[24px] font-bold tracking-[0px] text-[#0E141B] sm:text-[18px] sm:leading-[28px]">
                      Cardiology & Heart Surgery
                    </span>
                  </div>
                </div>
              </div>

              <div className="rounded-[20px] border border-[#E7EDF3] bg-[#F6F7F8] p-[16px] sm:rounded-[24px] sm:p-[20px]">
                <div className="flex items-center gap-2 sm:gap-3">
                  <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#1A2B3D]">
                    <svg
                      width="23"
                      height="23"
                      viewBox="0 0 23 23"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
                    >
                      <path
                        d="M11.25 22.5C8.375 22.5 5.86979 21.5469 3.73438 19.6406C1.59896 17.7344 0.375 15.3542 0.0625 12.5H2.625C2.91667 14.6667 3.88021 16.4583 5.51562 17.875C7.15104 19.2917 9.0625 20 11.25 20C13.6875 20 15.7552 19.151 17.4531 17.4531C19.151 15.7552 20 13.6875 20 11.25C20 8.8125 19.151 6.74479 17.4531 5.04688C15.7552 3.34896 13.6875 2.5 11.25 2.5C9.8125 2.5 8.46875 2.83333 7.21875 3.5C5.96875 4.16667 4.91667 5.08333 4.0625 6.25H7.5V8.75H0V1.25H2.5V4.1875C3.5625 2.85417 4.85938 1.82292 6.39062 1.09375C7.92188 0.364583 9.54167 0 11.25 0C12.8125 0 14.276 0.296875 15.6406 0.890625C17.0052 1.48438 18.1927 2.28646 19.2031 3.29688C20.2135 4.30729 21.0156 5.49479 21.6094 6.85938C22.2031 8.22396 22.5 9.6875 22.5 11.25C22.5 12.8125 22.2031 14.276 21.6094 15.6406C21.0156 17.0052 20.2135 18.1927 19.2031 19.2031C18.1927 20.2135 17.0052 21.0156 15.6406 21.6094C14.276 22.2031 12.8125 22.5 11.25 22.5ZM14.75 16.5L10 11.75V5H12.5V10.75L16.5 14.75L14.75 16.5Z"
                        fill="#4E7397"
                      />
                    </svg>
                  </div>
                  <div>
                    <p className="mb-1 text-[12px] leading-[16px] font-normal tracking-[0.6px] text-[#4E7397] uppercase">
                      EXPERIENCE
                    </p>

                    <div className="mt-0.5 flex flex-wrap items-baseline gap-1 sm:flex-nowrap sm:gap-1.5">
                      <span className="text-[16px] leading-[24px] font-bold text-[#0E141B] sm:text-[18px] sm:leading-[28px]">
                        15
                      </span>
                      <span className="text-[13px] leading-[18px] font-medium tracking-[0px] text-[#4E7397] sm:text-[14px] sm:leading-[20px]">
                        Years Clinical Practice
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Contact Card */}
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
                +1 (555) 123-4567
              </h4>
              <p className="mt-1.5 text-[12px] leading-[16px] font-normal tracking-[0px] text-[#4E7397]">
                Available Mon-Fri, 9am - 5pm
              </p>
            </div>

            <Button className="mt-8 h-[48px] w-full gap-2 rounded-[24px] bg-[#4799EB] text-[15px] leading-[22px] font-bold tracking-[0px] text-white shadow-[0_8px_16px_rgba(71,153,235,0.2)] transition-all hover:bg-[#3B86D1] active:scale-[0.98] sm:mt-10 sm:h-[56px] sm:text-[16px] sm:leading-[24px]">
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
        </div>
      </div>
    </div>
  );
}
