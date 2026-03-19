import { CheckCircleIcon, NoSymbolIcon, CoffeeIcon } from "@/components/icons";

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
              <CheckCircleIcon size={25} fill="#15803D" />
            </div>
            <span className="text-[16px] leading-[24px] font-bold text-[#15803D]">
              Available
            </span>
          </div>

          <div className="group flex h-[100px] w-full cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-transparent bg-[#F8FAFC] p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-[#F1F5F9] sm:h-[128px] sm:rounded-[32px] sm:p-4">
            <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px]">
              <NoSymbolIcon size={25} className="text-[#94A3B8]" />
            </div>
            <span className="text-[16px] leading-[24px] font-bold text-[#94A3B8]">
              Busy
            </span>
          </div>

          <div className="group col-span-2 flex h-[90px] w-full cursor-pointer flex-col items-center justify-center rounded-[24px] border-2 border-transparent bg-[#F8FAFC] p-3 transition-all duration-200 hover:scale-[1.02] hover:bg-[#F1F5F9] sm:h-[110px] sm:rounded-[32px] sm:p-4">
            <div className="flex h-[33px] w-[25px] items-center justify-center pb-[8px]">
              <CoffeeIcon size={32} className="text-[#A2AFBD]" />
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
