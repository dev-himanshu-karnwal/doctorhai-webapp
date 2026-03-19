"use client";

import React from "react";
import { UseFormRegister, FieldErrors } from "react-hook-form";
import { SettingsIcon } from "@/components/icons";
import { Input } from "@/components/ui";
import { HospitalUpdateValues } from "@/modules/hospitals/schemas/hospital-update.schema";

const labelStyle: React.CSSProperties = {
  fontSize: "9.5px",
  letterSpacing: "0.06em",
  fontWeight: 700,
  color: "#64748b",
  textTransform: "uppercase",
  marginBottom: 6,
  display: "block",
};

interface BasicInfoSectionProps {
  register: UseFormRegister<HospitalUpdateValues>;
  errors: FieldErrors<HospitalUpdateValues>;
}

export function BasicInfoSection({ register, errors }: BasicInfoSectionProps) {
  return (
    <div
      className="bg-white p-7"
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div className="mb-6 flex items-center justify-between">
        <div className="flex items-center gap-2.5">
          <SettingsIcon size={16} className="h-4 w-4 text-[#10b981]" />
          <h2 className="text-[16px] font-bold text-[#0f172a]">
            Hospital Configuration
          </h2>
        </div>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label style={labelStyle}>Primary Contact Email</label>
            <Input
              {...register("email")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
            {errors.email && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.email.message}
              </p>
            )}
          </div>
          <div>
            <label style={labelStyle}> Phone No</label>
            <Input
              {...register("phone")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
            {errors.phone && (
              <p className="mt-1 text-[10px] text-red-500">
                {errors.phone.message}
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
