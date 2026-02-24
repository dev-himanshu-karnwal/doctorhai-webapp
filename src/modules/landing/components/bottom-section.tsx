// Last Updated: 2026-02-24 12:12
export function BottomSection() {
  return (
    <section className="grid gap-12 py-16 lg:grid-cols-2">
      {/* Left Column: Dark Feature Card */}
      <article className="flex flex-col justify-center rounded-[44px] bg-[#2D3748] px-[48px] pt-[60.63px] pb-[60.62px]">
        <h2 className="mb-8 text-[30px] leading-[36px] font-bold tracking-tight text-white">
          Designed for Zero Training
        </h2>
        <p className="mb-14 max-w-lg text-[18px] leading-[29.25px] font-normal text-[#9CA3AF]">
          Doctors don&apos;t have time to learn complex software. Our
          &quot;Switchboard&quot; interface takes less than 2 seconds to update.
        </p>

        <div className="flex flex-col gap-5">
          {/* Feature 1: Lightning Fast (Gauge/Speedometer) */}
          <div className="flex items-center gap-[16px] rounded-[32px] border border-white/10 bg-white/5 p-[16px] transition-all hover:bg-white/10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#4FB3AA33] shadow-lg">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M8.45 11.5C8.85 11.9 9.36667 12.0958 10 12.0875C10.6333 12.0792 11.1 11.85 11.4 11.4L17 3L8.6 8.6C8.15 8.9 7.9125 9.35833 7.8875 9.975C7.8625 10.5917 8.05 11.1 8.45 11.5ZM10 0C10.9833 0 11.9292 0.1375 12.8375 0.4125C13.7458 0.6875 14.6 1.1 15.4 1.65L13.5 2.85C12.95 2.56667 12.3792 2.35417 11.7875 2.2125C11.1958 2.07083 10.6 2 10 2C7.78333 2 5.89583 2.77917 4.3375 4.3375C2.77917 5.89583 2 7.78333 2 10C2 10.7 2.09583 11.3917 2.2875 12.075C2.47917 12.7583 2.75 13.4 3.1 14H16.9C17.2833 13.3667 17.5625 12.7083 17.7375 12.025C17.9125 11.3417 18 10.6333 18 9.9C18 9.3 17.9292 8.71667 17.7875 8.15C17.6458 7.58333 17.4333 7.03333 17.15 6.5L18.35 4.6C18.85 5.38333 19.2458 6.21667 19.5375 7.1C19.8292 7.98333 19.9833 8.9 20 9.85C20.0167 10.8 19.9083 11.7083 19.675 12.575C19.4417 13.4417 19.1 14.2667 18.65 15.05C18.4667 15.35 18.2167 15.5833 17.9 15.75C17.5833 15.9167 17.25 16 16.9 16H3.1C2.75 16 2.41667 15.9167 2.1 15.75C1.78333 15.5833 1.53333 15.35 1.35 15.05C0.916667 14.3 0.583333 13.5042 0.35 12.6625C0.116667 11.8208 0 10.9333 0 10C0 8.61667 0.2625 7.32083 0.7875 6.1125C1.3125 4.90417 2.02917 3.84583 2.9375 2.9375C3.84583 2.02917 4.90833 1.3125 6.125 0.7875C7.34167 0.2625 8.63333 0 10 0Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[16px] leading-[24px] font-bold text-white">
                Lightning Fast
              </h4>
              <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF]">
                One tap global updates.
              </p>
            </div>
          </div>

          {/* Feature 2: Any Device (Monitor + Phone) */}
          <div className="flex items-center gap-[16px] rounded-[32px] border border-white/10 bg-white/5 p-[16px] transition-all hover:bg-white/10">
            <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-full border border-white/10 bg-[#4FB3AA33] shadow-lg">
              <svg
                width="20"
                height="16"
                viewBox="0 0 20 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0 16V14H10V16H0ZM3 13C2.45 13 1.97917 12.8042 1.5875 12.4125C1.19583 12.0208 1 11.55 1 11V2C1 1.45 1.19583 0.979167 1.5875 0.5875C1.97917 0.195833 2.45 0 3 0H17C17.55 0 18.0208 0.195833 18.4125 0.5875C18.8042 0.979167 19 1.45 19 2H3V11H10V13H3ZM18 14V6H14V14H18ZM13.5 16C13.0833 16 12.7292 15.8542 12.4375 15.5625C12.1458 15.2708 12 14.9167 12 14.5V5.5C12 5.08333 12.1458 4.72917 12.4375 4.4375C12.7292 4.14583 13.0833 4 13.5 4H18.5C18.9167 4 19.2708 4.14583 19.5625 4.4375C19.8542 4.72917 20 5.08333 20 5.5V14.5C20 14.9167 19.8542 15.2708 19.5625 15.5625C19.2708 15.8542 18.9167 16 18.5 16H13.5ZM16 8.5C16.2167 8.5 16.3958 8.425 16.5375 8.275C16.6792 8.125 16.75 7.95 16.75 7.75C16.75 7.53333 16.6792 7.35417 16.5375 7.2125C16.3958 7.07083 16.2167 7 16 7C15.8 7 15.625 7.07083 15.475 7.2125C15.325 7.35417 15.25 7.53333 15.25 7.75C15.25 7.95 15.325 8.125 15.475 8.275C15.625 8.425 15.8 8.5 16 8.5Z"
                  fill="white"
                />
              </svg>
            </div>
            <div>
              <h4 className="text-[16px] leading-[24px] font-bold text-white">
                Any Device
              </h4>
              <p className="text-[14px] leading-[20px] font-normal text-[#9CA3AF]">
                iPad, desktop, or mobile.
              </p>
            </div>
          </div>
        </div>
      </article>

      {/* Right Column: Mobile App Interface */}
      <article className="flex min-h-[400px] items-center justify-center rounded-[40px] bg-[#CBEDEA] p-[32px]">
        <div className="relative flex w-full max-w-[384px] flex-col gap-[32px] rounded-[48px] bg-white p-[24px] shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
          {/* Header */}
          <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-[16px]">
            <div className="flex items-center gap-4">
              <div className="flex h-14 w-14 items-center justify-center overflow-hidden rounded-full border border-gray-50 bg-[#F8FAFC] shadow-inner">
                <span className="text-xl font-black text-gray-200">S</span>
              </div>
              <div>
                <h3 className="text-[16px] leading-[24px] font-bold tracking-tight text-[#2D3748]">
                  My Status
                </h3>
                <p className="text-[12px] leading-[16px] font-normal text-[#718096]">
                  Dr. Sarah Smith
                </p>
              </div>
            </div>
            {/* Green Status indicator */}
            <div className="h-3.5 w-3.5 rounded-full bg-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.5)]" />
          </div>

          {/* Action Buttons Grid */}
          <div className="grid grid-cols-2 gap-4">
            {/* Available (Selected/Active) */}
            <div className="flex h-[128px] w-[160px] flex-col items-center justify-center rounded-[32px] border-2 border-[#22C55E] bg-[#F0FDF4] px-[43.08px] shadow-[0_10px_25px_-5px_rgba(34,197,94,0.1)]">
              <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px] text-[#22C55E]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M10.75 18.25L19.5625 9.4375L17.8125 7.6875L10.75 14.75L7.1875 11.1875L5.4375 12.9375L10.75 18.25ZM12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25ZM12.5 22.5C15.2917 22.5 17.6562 21.5312 19.5938 19.5938C21.5312 17.6562 22.5 15.2917 22.5 12.5C22.5 9.70833 21.5312 7.34375 19.5938 5.40625C17.6562 3.46875 15.2917 2.5 12.5 2.5C9.70833 2.5 7.34375 3.46875 5.40625 5.40625C3.46875 7.34375 2.5 9.70833 2.5 12.5C2.5 15.2917 3.46875 17.6562 5.40625 19.5938C7.34375 21.5312 9.70833 22.5 12.5 22.5Z"
                    fill="#15803D"
                  />
                </svg>
              </div>
              <span className="text-[16px] leading-[24px] font-bold text-[#15803D]">
                Available
              </span>
            </div>

            {/* Busy */}
            <div className="flex h-[128px] w-[160px] flex-col items-center justify-center rounded-[32px] border-2 border-transparent bg-[#F8FAFC] px-[59.3px]">
              <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px]">
                <svg
                  width="25"
                  height="25"
                  viewBox="0 0 25 25"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M12.5 25C10.7708 25 9.14583 24.6719 7.625 24.0156C6.10417 23.3594 4.78125 22.4688 3.65625 21.3438C2.53125 20.2188 1.64062 18.8958 0.984375 17.375C0.328125 15.8542 0 14.2292 0 12.5C0 10.7708 0.328125 9.14583 0.984375 7.625C1.64062 6.10417 2.53125 4.78125 3.65625 3.65625C4.78125 2.53125 6.10417 1.64062 7.625 0.984375C9.14583 0.328125 10.7708 0 12.5 0C14.2292 0 15.8542 0.328125 17.375 0.984375C18.8958 1.64062 20.2188 2.53125 21.3438 3.65625C22.4688 4.78125 23.3594 6.10417 24.0156 7.625C24.6719 9.14583 25 10.7708 25 12.5C25 14.2292 24.6719 15.8542 24.0156 17.375C23.3594 18.8958 22.4688 20.2188 21.3438 21.3438C20.2188 22.4688 18.8958 23.3594 17.375 24.0156C15.8542 24.6719 14.2292 25 12.5 25ZM12.5 22.5C13.625 22.5 14.7083 22.3177 15.75 21.9531C16.7917 21.5885 17.75 21.0625 18.625 20.375L4.625 6.375C3.9375 7.25 3.41146 8.20833 3.04688 9.25C2.68229 10.2917 2.5 11.375 2.5 12.5C2.5 15.2917 3.46875 17.6562 5.40625 19.5938C7.34375 21.5312 9.70833 22.5 12.5 22.5ZM20.375 18.625C21.0625 17.75 21.5885 16.7917 21.9531 15.75C22.3177 14.7083 22.5 13.625 22.5 12.5C22.5 9.70833 21.5312 7.34375 19.5938 5.40625C17.6562 3.46875 15.2917 2.5 12.5 2.5C11.375 2.5 10.2917 2.68229 9.25 3.04688C8.20833 3.41146 7.25 3.9375 6.375 4.625L20.375 18.625Z"
                    fill="#94A3B8"
                  />
                </svg>
              </div>

              <span className="text-[16px] leading-[24px] font-bold text-[#94A3B8]">
                Busy
              </span>
            </div>

            {/* On Break (Full width) */}
            <div className="col-span-2 flex h-[128px] flex-col items-center justify-center rounded-[32px] border-2 border-transparent bg-[#F8FAFC] px-[131.58px]">
              <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px]">
                <svg
                  width="32"
                  height="32"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#A2AFBD"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M18 8h1a4 4 0 0 1 0 8h-1" />
                  <path d="M2 8h16v9a4 4 0 0 1-4 4H6a4 4 0 0 1-4-4V8z" />
                  <line x1="6" y1="1" x2="6" y2="4" />
                  <line x1="10" y1="1" x2="10" y2="4" />
                  <line x1="14" y1="1" x2="14" y2="4" />
                </svg>
              </div>
              <span className="text-[16px] leading-[24px] font-bold text-[#A2AFBD]">
                On Break
              </span>
            </div>
          </div>
        </div>
      </article>
    </section>
  );
}
