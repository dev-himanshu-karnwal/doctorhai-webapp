import Image from "next/image";
import type {
  DepartmentCategory,
  DoctorEntry,
  HospitalEntry,
} from "../types/landing.types";

type QuickHospitalLookupProps = {
  departments: DepartmentCategory[];
  topHospitals: HospitalEntry[];
  topDoctors: DoctorEntry[];
};

export function QuickHospitalLookup({
  topHospitals,
  topDoctors,
}: QuickHospitalLookupProps) {
  return (
    <section className="col-span-12 flex h-auto min-h-[auto] w-full flex-col justify-between rounded-[24px] bg-[#DDF2F8] p-4 shadow-sm transition-all duration-300 sm:rounded-[32px] sm:p-6 md:rounded-[40px] md:p-8 lg:col-span-3 xl:min-h-[646px]">
      {/* Header */}
      <div className="space-y-1 pb-3 sm:pb-4 md:pb-[16px]">
        <h2 className="text-[16px] leading-[22px] font-bold text-[#2D3748] sm:text-[18px] sm:leading-[24px] md:text-[20px] md:leading-[28px]">
          Quick Hospital Lookup
        </h2>
        <p className="text-[12px] leading-[16px] font-normal text-[#718096] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
          Jump to department listings
        </p>
      </div>

      {/* Departments Grid */}
      <div className="grid grid-cols-2 gap-2 pb-4 sm:gap-3 sm:pb-6 md:gap-4 md:pb-[24px]">
        {/* General Physician */}
        <button className="group flex h-[70px] w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#E6F6F4] transition-colors group-hover:bg-[#cbefe9] sm:h-8 sm:w-8 md:h-10 md:w-10">
            <svg
              width="17"
              height="17"
              viewBox="0 0 17 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M9.58333 16.6667C8.08333 16.6667 6.80556 16.1389 5.75 15.0833C4.69444 14.0278 4.16667 12.75 4.16667 11.25V10.7708C2.97222 10.5764 1.97917 10.0174 1.1875 9.09375C0.395833 8.17014 0 7.08333 0 5.83333V0.833333H2.5V0H4.16667V3.33333H2.5V2.5H1.66667V5.83333C1.66667 6.75 1.99306 7.53472 2.64583 8.1875C3.29861 8.84028 4.08333 9.16667 5 9.16667C5.91667 9.16667 6.70139 8.84028 7.35417 8.1875C8.00694 7.53472 8.33333 6.75 8.33333 5.83333V2.5H7.5V3.33333H5.83333V0H7.5V0.833333H10V5.83333C10 7.08333 9.60417 8.17014 8.8125 9.09375C8.02083 10.0174 7.02778 10.5764 5.83333 10.7708V11.25C5.83333 12.2917 6.19792 13.1771 6.92708 13.9062C7.65625 14.6354 8.54167 15 9.58333 15C10.625 15 11.5104 14.6354 12.2396 13.9062C12.9688 13.1771 13.3333 12.2917 13.3333 11.25V9.85417C12.8472 9.6875 12.4479 9.38889 12.1354 8.95833C11.8229 8.52778 11.6667 8.04167 11.6667 7.5C11.6667 6.80556 11.9097 6.21528 12.3958 5.72917C12.8819 5.24306 13.4722 5 14.1667 5C14.8611 5 15.4514 5.24306 15.9375 5.72917C16.4236 6.21528 16.6667 6.80556 16.6667 7.5C16.6667 8.04167 16.5104 8.52778 16.1979 8.95833C15.8854 9.38889 15.4861 9.6875 15 9.85417V11.25C15 12.75 14.4722 14.0278 13.4167 15.0833C12.3611 16.1389 11.0833 16.6667 9.58333 16.6667ZM14.1667 8.33333C14.4028 8.33333 14.6007 8.25347 14.7604 8.09375C14.9201 7.93403 15 7.73611 15 7.5C15 7.26389 14.9201 7.06597 14.7604 6.90625C14.6007 6.74653 14.4028 6.66667 14.1667 6.66667C13.9306 6.66667 13.7326 6.74653 13.5729 6.90625C13.4132 7.06597 13.3333 7.26389 13.3333 7.5C13.3333 7.73611 13.4132 7.93403 13.5729 8.09375C13.7326 8.25347 13.9306 8.33333 14.1667 8.33333Z"
                fill="#3D8F87"
              />
            </svg>
          </div>
          <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
            General Physician
          </span>
        </button>

        {/* Cardiology */}
        <button className="group flex h-[70px] w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#DBEAFE] transition-colors group-hover:bg-[#c9e8f7] sm:h-8 sm:w-8 md:h-10 md:w-10">
            <svg
              width="19"
              height="16"
              viewBox="0 0 19 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.41667 0C6.13889 0 6.82639 0.152778 7.47917 0.458333C8.13194 0.763889 8.69444 1.19444 9.16667 1.75C9.63889 1.19444 10.2014 0.763889 10.8542 0.458333C11.5069 0.152778 12.1944 0 12.9167 0C14.2222 0 15.3125 0.4375 16.1875 1.3125C17.0625 2.1875 17.5 3.27778 17.5 4.58333C17.5 4.65278 17.4965 4.72222 17.4896 4.79167C17.4826 4.86111 17.4792 4.93056 17.4792 5H15.8125C15.8264 4.93056 15.8333 4.86111 15.8333 4.79167C15.8333 4.72222 15.8333 4.65278 15.8333 4.58333C15.8333 3.75 15.5556 3.05556 15 2.5C14.4444 1.94444 13.75 1.66667 12.9167 1.66667C12.2639 1.66667 11.6597 1.85069 11.1042 2.21875C10.5486 2.58681 10.1667 3.05556 9.95833 3.625H8.375C8.16667 3.05556 7.78472 2.58681 7.22917 2.21875C6.67361 1.85069 6.06944 1.66667 5.41667 1.66667C4.58333 1.66667 3.88889 1.94444 3.33333 2.5C2.77778 3.05556 2.5 3.75 2.5 4.58333C2.5 4.65278 2.5 4.72222 2.5 4.79167C2.5 4.86111 2.50694 4.93056 2.52083 5H0.854167C0.854167 4.93056 0.850694 4.86111 0.84375 4.79167C0.836806 4.72222 0.833333 4.65278 0.833333 4.58333C0.833333 3.27778 1.27083 2.1875 2.14583 1.3125C3.02083 0.4375 4.11111 0 5.41667 0ZM3.58333 10H5.91667C6.36111 10.4306 6.84722 10.8958 7.375 11.3958C7.90278 11.8958 8.5 12.4444 9.16667 13.0417C9.83333 12.4444 10.4306 11.8958 10.9583 11.3958C11.4861 10.8958 11.9722 10.4306 12.4167 10H14.7708C14.2431 10.5833 13.6181 11.2153 12.8958 11.8958C12.1736 12.5764 11.3333 13.3472 10.375 14.2083L9.16667 15.2917L7.95833 14.2083C7 13.3472 6.16319 12.5764 5.44792 11.8958C4.73264 11.2153 4.11111 10.5833 3.58333 10ZM8.375 10.8333C8.55556 10.8333 8.71181 10.7812 8.84375 10.6771C8.97569 10.5729 9.06944 10.4375 9.125 10.2708L10.25 6.875L10.9792 7.95833C11.0486 8.06944 11.1458 8.15972 11.2708 8.22917C11.3958 8.29861 11.5278 8.33333 11.6667 8.33333H18.3333V6.66667H12.1458L10.7083 4.54167C10.625 4.41667 10.5174 4.32292 10.3854 4.26042C10.2535 4.19792 10.1111 4.16667 9.95833 4.16667C9.77778 4.16667 9.62153 4.21875 9.48958 4.32292C9.35764 4.42708 9.26389 4.5625 9.20833 4.72917L8.08333 8.10417L7.375 7.04167C7.30556 6.93056 7.20833 6.84028 7.08333 6.77083C6.95833 6.70139 6.82639 6.66667 6.6875 6.66667H0V8.33333H6.1875L7.625 10.4583C7.70833 10.5833 7.81597 10.6771 7.94792 10.7396C8.07986 10.8021 8.22222 10.8333 8.375 10.8333Z"
                fill="#3B82F6"
              />
            </svg>
          </div>
          <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
            Cardiology
          </span>
        </button>

        {/* Pediatrics */}
        <button className="group flex h-[70px] w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#F3E8FF] transition-colors group-hover:bg-[#ebd9f7] sm:h-8 sm:w-8 md:h-10 md:w-10">
            <svg
              width="9"
              height="17"
              viewBox="0 0 9 17"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0.833333 4.16667C0.597222 4.16667 0.399306 4.08681 0.239583 3.92708C0.0798611 3.76736 0 3.56944 0 3.33333C0 3.09722 0.0798611 2.89931 0.239583 2.73958C0.399306 2.57986 0.597222 2.5 0.833333 2.5H3.33333V0.833333C3.33333 0.597222 3.41319 0.399306 3.57292 0.239583C3.73264 0.0798611 3.93056 0 4.16667 0C4.40278 0 4.60069 0.0798611 4.76042 0.239583C4.92014 0.399306 5 0.597222 5 0.833333V2.5H7.5C7.73611 2.5 7.93403 2.57986 8.09375 2.73958C8.25347 2.89931 8.33333 3.09722 8.33333 3.33333C8.33333 3.56944 8.25347 3.76736 8.09375 3.92708C7.93403 4.08681 7.73611 4.16667 7.5 4.16667H0.833333ZM1.66667 16.6667C1.20833 16.6667 0.815972 16.5035 0.489583 16.1771C0.163194 15.8507 0 15.4583 0 15V7.5C0 6.80556 0.243056 6.21528 0.729167 5.72917C1.21528 5.24306 1.80556 5 2.5 5H5.83333C6.52778 5 7.11806 5.24306 7.60417 5.72917C8.09028 6.21528 8.33333 6.80556 8.33333 7.5V15C8.33333 15.4583 8.17014 15.8507 7.84375 16.1771C7.51736 16.5035 7.125 16.6667 6.66667 16.6667H1.66667ZM1.66667 15H6.66667V7.5C6.66667 7.26389 6.58681 7.06597 6.42708 6.90625C6.26736 6.74653 6.06944 6.66667 5.83333 6.66667H2.5C2.26389 6.66667 2.06597 6.74653 1.90625 6.90625C1.74653 7.06597 1.66667 7.26389 1.66667 7.5V8.33333H3.33333C3.56944 8.33333 3.76736 8.41319 3.92708 8.57292C4.08681 8.73264 4.16667 8.93056 4.16667 9.16667C4.16667 9.40278 4.08681 9.60069 3.92708 9.76042C3.76736 9.92014 3.56944 10 3.33333 10H1.66667V11.6667H3.33333C3.56944 11.6667 3.76736 11.7465 3.92708 11.9062C4.08681 12.066 4.16667 12.2639 4.16667 12.5C4.16667 12.7361 4.08681 12.934 3.92708 13.0938C3.76736 13.2535 3.56944 13.3333 3.33333 13.3333H1.66667V15ZM1.66667 15V7.5C1.66667 7.26389 1.66667 7.06597 1.66667 6.90625C1.66667 6.74653 1.66667 6.66667 1.66667 6.66667C1.66667 6.66667 1.66667 6.74653 1.66667 6.90625C1.66667 7.06597 1.66667 7.26389 1.66667 7.5V8.33333V10V11.6667V13.3333V15Z"
                fill="#A855F7"
              />
            </svg>
          </div>
          <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
            Pediatrics
          </span>
        </button>

        {/* Neurology */}
        <button className="group flex h-[70px] w-full flex-col items-center justify-center gap-[4px] rounded-[20px] bg-white/70 p-[8px] shadow-sm backdrop-blur-[4px] transition-all duration-300 hover:-translate-y-1 hover:bg-white/90 hover:shadow-md sm:h-[80px] sm:gap-[6px] sm:rounded-[24px] sm:p-[10px] md:h-[87px] md:gap-[8px] md:rounded-[32px] md:p-[12px]">
          <div className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-[#FEF9C3] transition-colors group-hover:bg-[#ffefc9] sm:h-8 sm:w-8 md:h-10 md:w-10">
            <svg
              width="15"
              height="15"
              viewBox="0 0 15 15"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M5.625 15C4.91667 15 4.30556 14.7535 3.79167 14.2604C3.27778 13.7674 2.98611 13.1736 2.91667 12.4792C2.08333 12.3681 1.38889 12 0.833333 11.375C0.277778 10.75 0 10.0139 0 9.16667C0 8.875 0.0381944 8.58681 0.114583 8.30208C0.190972 8.01736 0.305556 7.75 0.458333 7.5C0.305556 7.25 0.190972 6.98611 0.114583 6.70833C0.0381944 6.43056 0 6.13889 0 5.83333C0 4.98611 0.277778 4.25347 0.833333 3.63542C1.38889 3.01736 2.07639 2.65278 2.89583 2.54167C2.9375 1.83333 3.22222 1.23264 3.75 0.739583C4.27778 0.246528 4.90278 0 5.625 0C5.98611 0 6.32292 0.0694444 6.63542 0.208333C6.94792 0.347222 7.23611 0.534722 7.5 0.770833C7.75 0.534722 8.03472 0.347222 8.35417 0.208333C8.67361 0.0694444 9.01389 0 9.375 0C10.0972 0 10.7188 0.243056 11.2396 0.729167C11.7604 1.21528 12.0417 1.8125 12.0833 2.52083C12.9028 2.63194 13.5938 3 14.1562 3.625C14.7188 4.25 15 4.98611 15 5.83333C15 6.13889 14.9618 6.43056 14.8854 6.70833C14.809 6.98611 14.6944 7.25 14.5417 7.5C14.6944 7.75 14.809 8.01736 14.8854 8.30208C14.9618 8.58681 15 8.875 15 9.16667C15 10.0278 14.7188 10.7674 14.1562 11.3854C13.5938 12.0035 12.8958 12.3681 12.0625 12.4792C11.9931 13.1736 11.7049 13.7674 11.1979 14.2604C10.691 14.7535 10.0833 15 9.375 15C9.02778 15 8.69097 14.934 8.36458 14.8021C8.03819 14.6701 7.75 14.4861 7.5 14.25C7.23611 14.4861 6.94444 14.6701 6.625 14.8021C6.30556 14.934 5.97222 15 5.625 15ZM8.33333 2.70833V12.2917C8.33333 12.5833 8.43403 12.8299 8.63542 13.0312C8.83681 13.2326 9.08333 13.3333 9.375 13.3333C9.65278 13.3333 9.89236 13.2222 10.0938 13C10.2951 12.7778 10.4028 12.5278 10.4167 12.25C10.125 12.1389 9.85764 11.9896 9.61458 11.8021C9.37153 11.6146 9.15278 11.3889 8.95833 11.125C8.81944 10.9306 8.76736 10.7222 8.80208 10.5C8.83681 10.2778 8.95139 10.0972 9.14583 9.95833C9.34028 9.81944 9.54861 9.76736 9.77083 9.80208C9.99306 9.83681 10.1736 9.95139 10.3125 10.1458C10.4653 10.3681 10.6597 10.5382 10.8958 10.6562C11.1319 10.7743 11.3889 10.8333 11.6667 10.8333C12.125 10.8333 12.5174 10.6701 12.8438 10.3438C13.1701 10.0174 13.3333 9.625 13.3333 9.16667C13.3333 9.09722 13.3299 9.02778 13.3229 8.95833C13.316 8.88889 13.2986 8.81944 13.2708 8.75C13.0347 8.88889 12.7812 8.99306 12.5104 9.0625C12.2396 9.13194 11.9583 9.16667 11.6667 9.16667C11.4306 9.16667 11.2326 9.08681 11.0729 8.92708C10.9132 8.76736 10.8333 8.56944 10.8333 8.33333C10.8333 8.09722 10.9132 7.89931 11.0729 7.73958C11.2326 7.57986 11.4306 7.5 11.6667 7.5C12.125 7.5 12.5174 7.33681 12.8438 7.01042C13.1701 6.68403 13.3333 6.29167 13.3333 5.83333C13.3333 5.375 13.1701 4.98611 12.8438 4.66667C12.5174 4.34722 12.125 4.18056 11.6667 4.16667C11.5139 4.41667 11.316 4.63542 11.0729 4.82292C10.8299 5.01042 10.5625 5.15972 10.2708 5.27083C10.0486 5.35417 9.83333 5.34722 9.625 5.25C9.41667 5.15278 9.27778 4.99306 9.20833 4.77083C9.13889 4.54861 9.14931 4.33333 9.23958 4.125C9.32986 3.91667 9.48611 3.77778 9.70833 3.70833C9.91667 3.63889 10.0868 3.51389 10.2188 3.33333C10.3507 3.15278 10.4167 2.94444 10.4167 2.70833C10.4167 2.41667 10.316 2.17014 10.1146 1.96875C9.91319 1.76736 9.66667 1.66667 9.375 1.66667C9.08333 1.66667 8.83681 1.76736 8.63542 1.96875C8.43403 2.17014 8.33333 2.41667 8.33333 2.70833ZM6.66667 12.2917V2.70833C6.66667 2.41667 6.56597 2.17014 6.36458 1.96875C6.16319 1.76736 5.91667 1.66667 5.625 1.66667C5.33333 1.66667 5.08681 1.76736 4.88542 1.96875C4.68403 2.17014 4.58333 2.41667 4.58333 2.70833C4.58333 2.93056 4.64583 3.13542 4.77083 3.32292C4.89583 3.51042 5.0625 3.63889 5.27083 3.70833C5.49306 3.77778 5.65278 3.91667 5.75 4.125C5.84722 4.33333 5.86111 4.54861 5.79167 4.77083C5.70833 4.99306 5.5625 5.15278 5.35417 5.25C5.14583 5.34722 4.93056 5.35417 4.70833 5.27083C4.41667 5.15972 4.14931 5.01042 3.90625 4.82292C3.66319 4.63542 3.46528 4.41667 3.3125 4.16667C2.86806 4.18056 2.48264 4.35069 2.15625 4.67708C1.82986 5.00347 1.66667 5.38889 1.66667 5.83333C1.66667 6.29167 1.82986 6.68403 2.15625 7.01042C2.48264 7.33681 2.875 7.5 3.33333 7.5C3.56944 7.5 3.76736 7.57986 3.92708 7.73958C4.08681 7.89931 4.16667 8.09722 4.16667 8.33333C4.16667 8.56944 4.08681 8.76736 3.92708 8.92708C3.76736 9.08681 3.56944 9.16667 3.33333 9.16667C3.04167 9.16667 2.76042 9.13194 2.48958 9.0625C2.21875 8.99306 1.96528 8.88889 1.72917 8.75C1.70139 8.81944 1.68403 8.88889 1.67708 8.95833C1.67014 9.02778 1.66667 9.09722 1.66667 9.16667C1.66667 9.625 1.82986 10.0174 2.15625 10.3438C2.48264 10.6701 2.875 10.8333 3.33333 10.8333C3.61111 10.8333 3.86806 10.7743 4.10417 10.6562C4.34028 10.5382 4.53472 10.3681 4.6875 10.1458C4.82639 9.95139 5.00694 9.83681 5.22917 9.80208C5.45139 9.76736 5.65972 9.81944 5.85417 9.95833C6.04861 10.0972 6.16319 10.2778 6.19792 10.5C6.23264 10.7222 6.18056 10.9306 6.04167 11.125C5.84722 11.3889 5.625 11.6181 5.375 11.8125C5.125 12.0069 4.85417 12.1597 4.5625 12.2708C4.57639 12.5486 4.6875 12.7951 4.89583 13.0104C5.10417 13.2257 5.34722 13.3333 5.625 13.3333C5.91667 13.3333 6.16319 13.2326 6.36458 13.0312C6.56597 12.8299 6.66667 12.5833 6.66667 12.2917Z"
                fill="#CA8A04"
              />
            </svg>
          </div>
          <span className="px-1 text-center text-[10px] leading-[12px] font-bold text-[#2D3748] sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[15px]">
            Neurology
          </span>
        </button>
      </div>

      {/* Top Hospitals */}
      <div className="mb-3 flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:mb-4 sm:gap-3 sm:rounded-[24px] sm:p-4 md:mb-[14px] md:gap-[12px] md:rounded-[32px] md:p-[16px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] leading-[12px] font-bold tracking-[0.6px] text-[#718096] uppercase sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[16px]">
            Top Hospitals
          </h3>
          <button className="text-[9px] leading-[12px] font-bold text-[#3D8F87] transition-colors hover:text-[#2c6e67] hover:underline sm:text-[10px] sm:leading-[14px] md:text-[11px] md:leading-[15px]">
            View All
          </button>
        </div>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {topHospitals.slice(0, 2).map((hospital) => (
            <div
              key={hospital.id}
              className="group -mx-1 flex cursor-pointer flex-wrap items-center justify-between rounded-xl p-1 transition-all hover:bg-white/30 sm:flex-nowrap sm:rounded-2xl"
            >
              <div className="flex min-w-[70%] flex-1 items-center gap-2 sm:gap-3 md:gap-4">
                <div className="flex h-[24px] w-[24px] shrink-0 items-center justify-center rounded-full bg-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow group-hover:shadow-md sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]">
                  <svg
                    width="16"
                    height="16"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#A0AEC0"
                    strokeWidth="2.5"
                  >
                    <rect x="3" y="3" width="18" height="18" rx="4" />
                    <line x1="12" y1="8" x2="12" y2="16" />
                    <line x1="8" y1="12" x2="16" y2="12" />
                  </svg>
                </div>
                <div className="w-full min-w-0 flex-1 space-y-0.5 pr-1 sm:space-y-0">
                  <p className="truncate text-[12px] leading-[16px] font-bold text-[#2D3748] transition-colors group-hover:text-[#3D8F87] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
                    {hospital.name}
                  </p>
                  <div className="flex items-center gap-1">
                    <svg
                      width="10"
                      height="10"
                      viewBox="0 0 24 24"
                      fill="#FFC107"
                    >
                      <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" />
                    </svg>
                    <span className="text-[10px] leading-[15px] font-normal text-[#718096]">
                      4.9 (2.1k reviews)
                    </span>
                  </div>
                </div>
              </div>
              <div className="flex shrink-0 items-center gap-[2px] rounded-full bg-[#DCFCE7] px-[4px] py-[2px] transition-transform group-hover:scale-105 sm:gap-[3px] sm:px-[5px] sm:py-[2px] md:gap-[4px] md:px-[8px] md:py-[4px]">
                <div className="h-[4px] w-[4px] animate-pulse rounded-full bg-[#22C55E] sm:h-[5px] sm:w-[5px] md:h-[6px] md:w-[6px]" />
                <span className="text-[8px] leading-[10px] font-bold text-[#15803D] sm:text-[9px] sm:leading-[12px] md:text-[10px] md:leading-[15px]">
                  Live
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Top Doctors */}
      <div className="flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:gap-3 sm:rounded-[24px] sm:p-4 md:gap-[12px] md:rounded-[32px] md:p-[16px]">
        <div className="flex items-center justify-between">
          <h3 className="text-[10px] leading-[12px] font-bold tracking-[0.6px] text-[#718096] uppercase sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[16px]">
            Top Doctors
          </h3>
          <button className="text-[9px] leading-[12px] font-bold text-[#3D8F87] transition-colors hover:text-[#2c6e67] hover:underline sm:text-[10px] sm:leading-[14px] md:text-[11px] md:leading-[15px]">
            Find Doctor
          </button>
        </div>
        <div className="space-y-2 sm:space-y-3 md:space-y-4">
          {topDoctors.slice(0, 2).map((doctor, idx) => (
            <div
              key={doctor.id}
              className="group -mx-1 flex cursor-pointer flex-wrap items-center justify-between rounded-xl p-1 transition-all hover:bg-white/30 sm:flex-nowrap sm:rounded-2xl"
            >
              <div className="flex min-w-[70%] flex-1 items-center gap-2 sm:gap-3 md:gap-4">
                <div className="relative h-[24px] w-[24px] shrink-0 overflow-hidden rounded-full border border-white shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition-shadow group-hover:shadow-md sm:h-[28px] sm:w-[28px] md:h-[32px] md:w-[32px]">
                  <Image
                    src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${doctor.name}&background=%23e0f2fe`}
                    alt={doctor.name}
                    fill
                    className="bg-sky-100 object-cover"
                    unoptimized
                  />
                </div>
                <div className="w-full min-w-0 flex-1 space-y-0.5 pr-1 sm:space-y-0">
                  <p className="truncate text-[12px] leading-[16px] font-bold text-[#2D3748] transition-colors group-hover:text-[#3D8F87] sm:text-[13px] sm:leading-[18px] md:text-[14px] md:leading-[20px]">
                    {doctor.name}
                  </p>
                  <p className="truncate text-[8px] leading-[12px] font-normal text-[#718096] sm:text-[9px] sm:leading-[14px] md:text-[10px] md:leading-[15px]">
                    {doctor.specialty} • {12 - idx * 4} years exp.
                  </p>
                </div>
              </div>
              <span
                className={`shrink-0 text-[10px] font-bold transition-transform group-hover:scale-105 ${
                  idx === 0
                    ? "rounded-full bg-[#F0FDF4] px-[4px] py-[2px] text-[8px] leading-[10px] font-bold text-[#16A34A] sm:px-[5px] sm:py-[2px] sm:text-[9px] sm:leading-[12px] md:px-[8px] md:py-[4px] md:text-[10px] md:leading-[15px]"
                    : "rounded-full bg-[#FEF2F2] px-[4px] py-[2px] text-[8px] leading-[10px] font-bold text-[#EF4444] sm:px-[5px] sm:py-[2px] sm:text-[9px] sm:leading-[12px] md:px-[8px] md:py-[4px] md:text-[10px] md:leading-[15px]"
                }`}
              >
                {idx === 0 ? "Available" : "Busy"}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
