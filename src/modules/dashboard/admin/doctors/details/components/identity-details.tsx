import React from "react";
import { IdCardIcon } from "../icons";
import { Input } from "@/components/ui/input";

import { UseFormRegister, FieldErrors } from "react-hook-form";
import { DoctorProfileValues } from "@/modules/dashboard/doctor/validators";

interface IdentityDetailsProps {
  register: UseFormRegister<DoctorProfileValues>;
  errors?: FieldErrors<DoctorProfileValues>;
}

const labelSt: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#64748b",
  display: "block",
  marginBottom: 6,
};

// Custom styles to match the specific "DoctorHai" look while using global component
const inputClasses =
  "h-[40px] rounded-[10px] border-[#e2e8f0] bg-[#f8fafc] text-[14px] font-medium text-[#1e293b] transition-all focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]";

export const IdentityDetails = ({ register, errors }: IdentityDetailsProps) => {
  return (
    <div
      className="bg-white p-6"
      style={{
        borderRadius: 18,
        boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div className="mb-6 flex items-center gap-3">
        <div
          className="flex shrink-0 items-center justify-center"
          style={{
            width: 34,
            height: 34,
            borderRadius: 10,
            background: "#eff6ff",
          }}
        >
          <IdCardIcon className="h-4 w-4 text-[#3b82f6]" />
        </div>
        <h2 className="text-[15px] font-bold text-[#0f172a]">
          Identity Details
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label style={labelSt}>Full Name</label>
            <Input {...register("fullName")} className={inputClasses} />
            {errors?.fullName && (
              <p className="mt-1 text-xs text-red-500">
                {errors.fullName.message as string}
              </p>
            )}
          </div>
          <div>
            <label style={labelSt}>Designation</label>
            <Input
              {...register("designation")}
              className={inputClasses}
              placeholder="e.g. Senior Consultant"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label style={labelSt}>Specialization</label>
            <Input
              {...register("specialization")}
              className={inputClasses}
              placeholder="e.g. Cardiologist"
            />
          </div>
          <div>
            <label style={labelSt}>Experience (Years)</label>
            <div className="relative">
              <Input
                {...register("hasExperience")}
                className={`${inputClasses} pr-[40px]`}
              />
              <span className="absolute top-1/2 right-3.5 -translate-y-1/2 text-[14px] font-medium text-[#94a3b8]">
                Yrs
              </span>
            </div>
          </div>
        </div>

        <div>
          <label style={labelSt}>Professional Bio</label>
          <textarea
            {...register("bio")}
            className={`min-h-[100px] w-full p-3 outline-none ${inputClasses} h-auto resize-none border border-[#e2e8f0]`}
            placeholder="Write a brief bio about the doctor..."
          />
        </div>
      </div>
    </div>
  );
};
