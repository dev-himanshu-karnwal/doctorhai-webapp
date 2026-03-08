interface DoctorProfessionalInfoProps {
  specialty: string;
  experienceYears: number;
}

export function DoctorProfessionalInfo({
  specialty,
  experienceYears,
}: DoctorProfessionalInfoProps) {
  return (
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
                {specialty ?? "N/A"}
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
                  {experienceYears}
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
  );
}
