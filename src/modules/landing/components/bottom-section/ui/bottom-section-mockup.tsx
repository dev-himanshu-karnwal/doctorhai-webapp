export function BottomSectionMockup() {
  return (
    <article className="flex min-h-[400px] w-full items-center justify-center rounded-[32px] bg-[#CBEDEA] p-6 transition-all duration-300 sm:rounded-[40px] sm:p-8 lg:p-[32px]">
      <div className="relative flex w-full max-w-[384px] flex-col gap-6 rounded-[32px] bg-white p-5 shadow-[0_20px_50px_-10px_rgba(0,0,0,0.1)] transition-all duration-300 hover:-translate-y-1 hover:shadow-xl sm:gap-[32px] sm:rounded-[48px] sm:p-[24px] sm:shadow-[0_50px_100px_-20px_rgba(0,0,0,0.1)]">
        <div className="flex items-center justify-between border-b border-[#F1F5F9] pb-4 sm:pb-[16px]">
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
          <div className="h-3.5 w-3.5 rounded-full bg-[#2ECC71] shadow-[0_0_15px_rgba(46,204,113,0.5)]" />
        </div>

        <div className="grid grid-cols-2 gap-3 sm:gap-4">
          <div className="group flex h-[100px] w-full cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-[#22C55E] bg-[#F0FDF4] p-3 shadow-[0_10px_25px_-5px_rgba(34,197,94,0.1)] transition-all duration-200 hover:scale-[1.02] hover:bg-[#dcfce7] sm:h-[128px] sm:rounded-[32px] sm:p-4">
            <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px] text-[#22C55E]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
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

          <div className="group flex h-[100px] w-full cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-transparent bg-[#F8FAFC] p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-[#F1F5F9] sm:h-[128px] sm:rounded-[32px] sm:p-4">
            <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px]">
              <svg width="25" height="25" viewBox="0 0 25 25" fill="none">
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

          <div className="group col-span-2 flex h-[90px] w-full cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-transparent bg-[#F8FAFC] p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-[#F1F5F9] sm:h-[110px] sm:rounded-[32px] sm:p-4">
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
  );
}
