"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { MapPinIcon } from "@/components/icons";
import { Input } from "@/components/ui";
import { AddressValues } from "@/modules/address/validators/address.validator";
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

interface AddressSectionProps {
  register: UseFormRegister<AddressValues>;
  hospitalRegister: UseFormRegister<HospitalUpdateValues>;
}

export function AddressSection({
  register,
  hospitalRegister,
}: AddressSectionProps) {
  return (
    <div
      className="bg-white p-7"
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div className="mb-6 flex items-center gap-2.5">
        <MapPinIcon size={16} className="h-4 w-4 text-[#3b82f6]" />
        <h2 className="text-[16px] font-bold text-[#0f172a]">
          Address &amp; Location
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          <div>
            <label style={labelStyle}>Address Line 1</label>
            <Input
              {...register("addressLine1")}
              placeholder="Building name, Street"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>Address Line 2 (Optional)</label>
            <Input
              {...register("addressLine2")}
              placeholder="Area, Landmark"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label style={labelStyle}>City</label>
            <Input
              {...register("city")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>State</label>
            <Input
              {...register("state")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>ZIP Code</label>
            <Input
              {...register("pincode")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
        </div>

        <div className="my-[2px] border-b border-dashed border-[#e2e8f0]" />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label style={labelStyle}>Latitude</label>
            <Input
              type="number"
              step="any"
              {...register("latitude", { valueAsNumber: true })}
              placeholder="e.g. 28.6139"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>Longitude</label>
            <Input
              type="number"
              step="any"
              {...register("longitude", { valueAsNumber: true })}
              placeholder="e.g. 77.2090"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>Hospital Type</label>
            <Input
              {...hospitalRegister("type")}
              placeholder="e.g. Multispeciality"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
