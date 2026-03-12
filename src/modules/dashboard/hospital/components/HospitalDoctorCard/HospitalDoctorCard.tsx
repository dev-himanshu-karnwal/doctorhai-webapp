import React from "react";
import { useRouter } from "next/navigation";
import { HospitalDoctorCardProps } from "../../types/hospital.types";
import { Button } from "@/components/ui";
import Image from "next/image";

const HospitalDoctorCard: React.FC<HospitalDoctorCardProps> = ({
  doctor,
  themeColor,
  onUpdate,
  onEdit,
}) => {
  const router = useRouter();

  const handleCardClick = () => {
    router.push(`/doctors/${doctor.id}`);
  };

  return (
    <div
      onClick={handleCardClick}
      className="group flex cursor-pointer flex-col gap-5 bg-white px-5 py-6 transition-all duration-200 hover:shadow-lg active:scale-[0.98] active:shadow-sm sm:px-7 lg:grid lg:grid-cols-[1fr_minmax(150px,200px)_minmax(150px,200px)_auto] lg:items-center lg:gap-6"
      style={{ border: "1px solid #f1f5f9", borderRadius: 28 }}
    >
      {/* Column 1: Profile */}
      <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center">
        {/* Avatar & Online Dot */}
        <div className="relative flex-shrink-0">
          {/* eslint-disable-next-line @next/next/no-img-element */}
          <Image
            src={doctor.avatar}
            alt={doctor.name}
            fill
            className="h-[50px] w-[50px] rounded-full border-2 border-white object-cover shadow-sm sm:h-[56px] sm:w-[56px]"
          />
          <span
            className="absolute right-0 bottom-0 h-3 w-3 rounded-full border-[2px] border-white ring-1 ring-black/5 sm:h-3.5 sm:w-3.5"
            style={{ backgroundColor: doctor.statusBadge.dotColor }}
          />
        </div>

        {/* Info & Pill */}
        <div className="flex flex-col justify-center">
          <p className="mb-[2px] text-[16px] leading-tight font-bold text-[#1e293b] sm:text-[16.5px]">
            {doctor.name}
          </p>
          <p className="mb-2 text-[12px] leading-tight font-medium text-[#94a3b8] sm:text-[12.5px]">
            {doctor.subtext}
          </p>
          <div
            className="inline-flex w-max items-center gap-1.5 rounded-md px-2 py-[2px] shadow-sm"
            style={{
              backgroundColor: doctor.statusBadge.bgColor,
              color: doctor.statusBadge.textColor,
            }}
          >
            <span
              className="h-[6px] w-[6px] rounded-full"
              style={{ backgroundColor: doctor.statusBadge.dotColor }}
            />
            <span className="mt-[0.5px] text-[9px] font-extrabold tracking-widest uppercase">
              {doctor.statusBadge.text}
            </span>
          </div>
        </div>
      </div>

      {/* Column 2 & 3: Info row for mobile/tablet */}
      <div className="xs:grid-cols-2 grid grid-cols-1 gap-4 lg:contents lg:gap-0">
        <div className="xs:bg-transparent xs:p-0 xs:text-left flex flex-col justify-center rounded-2xl bg-[#fbfcfd] p-3 text-center transition-colors hover:bg-gray-50/50">
          <span className="mb-1 text-[9px] font-extrabold tracking-wider text-[#cbd5e1] uppercase sm:text-[10px]">
            {doctor.col1.label}
          </span>
          <span className="text-[13px] font-medium text-[#475569] sm:text-[13.5px]">
            {doctor.col1.value}
          </span>
        </div>

        <div className="xs:bg-transparent xs:p-0 xs:text-left flex flex-col justify-center rounded-2xl bg-[#fbfcfd] p-3 text-center transition-colors hover:bg-gray-50/50">
          <span className="mb-1 text-[9px] font-extrabold tracking-wider text-[#cbd5e1] uppercase sm:text-[10px]">
            {doctor.col2.label}
          </span>
          <span className="text-[13px] font-medium text-[#475569] sm:text-[13.5px]">
            {doctor.col2.value}
          </span>
        </div>
      </div>

      {/* Column 4: Actions */}
      <div className="xs:flex-nowrap mt-2 flex w-full flex-wrap items-center gap-2.5 border-t border-[#f1f5f9] pt-5 lg:mt-0 lg:w-auto lg:border-t-0 lg:pt-0">
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onUpdate(doctor);
          }}
          className="flex-1 rounded-full px-6 font-bold shadow-sm"
          style={{ backgroundColor: themeColor }}
        >
          Update
        </Button>
        <Button
          onClick={(e) => {
            e.stopPropagation();
            onEdit(doctor);
          }}
          variant="secondary"
          className="flex-1 rounded-full px-6 font-bold text-[#475569]"
        >
          Edit
        </Button>
      </div>
    </div>
  );
};

export default HospitalDoctorCard;
