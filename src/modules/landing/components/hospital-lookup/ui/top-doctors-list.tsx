import Image from "next/image";
import type { DoctorEntry } from "../../../types";
import Link from "next/link";

type TopDoctorsListProps = {
  topDoctors: DoctorEntry[];
};

export function TopDoctorsList({ topDoctors }: TopDoctorsListProps) {
  return (
    <div className="flex flex-col gap-2 rounded-[20px] border border-white/40 bg-white/40 p-3 sm:gap-3 sm:rounded-[24px] sm:p-4 md:gap-[12px] md:rounded-[32px] md:p-[16px]">
      <div className="flex items-center justify-between">
        <h3 className="text-[10px] leading-[12px] font-bold tracking-[0.6px] text-[#718096] uppercase sm:text-[11px] sm:leading-[14px] md:text-[12px] md:leading-[16px]">
          Top Doctors
        </h3>
        <Link
          href="/doctors"
          className="h-auto p-0 text-[9px] leading-[12px] font-bold text-[#3D8F87] transition-colors hover:text-[#2c6e67] hover:underline sm:text-[10px] sm:leading-[14px] md:text-[11px] md:leading-[15px]"
        >
          Find Doctor
        </Link>
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
                  {doctor.name ?? "N/A"}
                </p>
                <p className="truncate text-[8px] leading-[12px] font-normal text-[#718096] sm:text-[9px] sm:leading-[14px] md:text-[10px] md:leading-[15px]">
                  {doctor.specialty ?? "N/A"} • {doctor.hasExperience ?? "0"}{" "}
                  years exp.
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
  );
}
