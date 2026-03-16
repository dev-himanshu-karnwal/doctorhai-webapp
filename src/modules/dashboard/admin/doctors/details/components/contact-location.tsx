import React from "react";
import { MapPinIcon, InfoIcon } from "../icons";
import { Input } from "@/components/ui/input";

import { UseFormRegister } from "react-hook-form";
import { DoctorProfileValues } from "@/modules/dashboard/doctor/validators";

interface ContactLocationProps {
  register: UseFormRegister<DoctorProfileValues>;
}

const labelSt: React.CSSProperties = {
  fontSize: "13px",
  fontWeight: 500,
  color: "#64748b",
  display: "block",
  marginBottom: 6,
};

const inputClasses =
  "h-[40px] rounded-[10px] border-[#e2e8f0] bg-[#f8fafc] text-[14px] font-medium text-[#1e293b] transition-all focus:border-[#93c5fd] focus:ring-1 focus:ring-[#93c5fd]";

export const ContactLocation = ({ register }: ContactLocationProps) => {
  return (
    <div
      className="h-full bg-white p-6"
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
            background: "#fff7ed",
          }}
        >
          <MapPinIcon className="h-[18px] w-[18px] text-[#f97316]" />
        </div>
        <h2 className="text-[15px] font-bold text-[#0f172a]">
          Contact & Location
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label style={labelSt}>Address Line 1</label>
          <Input
            {...register("addressLine1")}
            className={inputClasses}
            placeholder="House no, Building, Street name"
          />
        </div>
        <div>
          <label style={labelSt}>Address Line 2 (Optional)</label>
          <Input
            {...register("addressLine2")}
            className={inputClasses}
            placeholder="Area, Landmark"
          />
        </div>
        <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
          <div>
            <label style={labelSt}>City</label>
            <Input {...register("city")} className={inputClasses} />
          </div>
          <div>
            <label style={labelSt}>State</label>
            <Input {...register("state")} className={inputClasses} />
          </div>
        </div>
        <div>
          <label style={labelSt}>Pincode</label>
          <Input
            {...register("pincode")}
            className={inputClasses}
            placeholder="6-digit pincode"
          />
        </div>

        {/* Info Note */}
        <div
          className="mt-1 flex gap-3.5 rounded-[12px] px-4 py-4"
          style={{ background: "#f8fafc" }}
        >
          <div className="mt-[1px] shrink-0">
            <InfoIcon className="h-4 w-4 text-[#94a3b8]" />
          </div>
          <p className="text-[12.5px] leading-[1.5] font-medium text-[#64748b]">
            Address changes affect billing and scheduling availability radius.
          </p>
        </div>
      </div>
    </div>
  );
};
