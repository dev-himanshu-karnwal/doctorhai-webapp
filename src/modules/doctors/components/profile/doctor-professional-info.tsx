import { AwardIcon, HeartPulseIcon, ClockIcon } from "@/components/icons";

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
          <AwardIcon size={18} className="text-[#D97706]" />
        </div>
        <h3 className="text-[18px] font-bold text-[#1A2B3D]">
          Professional Info
        </h3>
      </div>

      <div className="space-y-4">
        <div className="rounded-[20px] border border-[#E7EDF3] bg-[#F6F7F8] p-[16px] sm:rounded-[24px] sm:p-[20px]">
          <div className="flex items-center gap-2 sm:gap-3">
            <div className="flex h-[40px] w-[40px] shrink-0 items-center justify-center text-[#4FB3AA]">
              <HeartPulseIcon size={28} className="text-[#4E7397]" />
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
              <ClockIcon size={23} className="text-[#4E7397]" />
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
