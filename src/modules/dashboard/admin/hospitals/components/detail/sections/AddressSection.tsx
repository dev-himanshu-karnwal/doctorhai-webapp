"use client";

import React from "react";
import { UseFormRegister } from "react-hook-form";
import { MapPinIcon } from "@/components/icons";
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

interface AddressSectionProps {
  register: UseFormRegister<HospitalUpdateValues>;
}

export function AddressSection({ register }: AddressSectionProps) {
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
          Address & Location
        </h2>
      </div>

      <div className="flex flex-col gap-5">
        <div>
          <label style={labelStyle}>Street Address</label>
          <Input
            {...register("address.addressLine1")}
            className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
          />
        </div>

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-3">
          <div>
            <label style={labelStyle}>City</label>
            <Input
              {...register("address.city")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>State</label>
            <Input
              {...register("address.state")}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>ZIP Code</label>
            <Input
              {...register("address.pincode")}
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
              {...register("location.latitude", { valueAsNumber: true })}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>Longitude</label>
            <Input
              type="number"
              step="any"
              {...register("location.longitude", { valueAsNumber: true })}
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
          <div>
            <label style={labelStyle}>Hospital Type</label>
            <Input
              {...register("type")}
              placeholder="e.g. Multispeciality"
              className="border-[#f1f5f9] bg-[#f8fafc] focus:ring-emerald-200"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
