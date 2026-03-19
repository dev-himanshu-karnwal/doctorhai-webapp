"use client";

import React from "react";
import { UseFormRegister, Control, useFieldArray } from "react-hook-form";
import { ActivityIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { Button, Input } from "@/components/ui";
import { HospitalUpdateValues } from "@/modules/hospitals/schemas/hospital-update.schema";

interface FacilitiesSectionProps {
  register: UseFormRegister<HospitalUpdateValues>;
  control: Control<HospitalUpdateValues>;
}

export function FacilitiesSection({
  register,
  control,
}: FacilitiesSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "facilities",
  });

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
          <ActivityIcon size={16} className="h-4 w-4 text-[#e11d48]" />
          <h2 className="text-[16px] font-bold text-[#0f172a]">Facilities</h2>
        </div>
        <Button
          type="button"
          onClick={() => append({ value: "" })}
          variant="ghost"
          size="sm"
          className="text-[#3b82f6] hover:bg-blue-50"
        >
          <PlusIcon size={14} className="mr-1" /> Add Facility
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="group relative flex items-center gap-2 rounded-xl border border-[#f1f5f9] bg-[#f8fafc] py-2 pr-2 pl-4 transition-all hover:border-emerald-200 hover:bg-white"
          >
            <Input
              {...register(`facilities.${index}.value`)}
              placeholder="Facility name..."
              className="h-7 border-none bg-transparent p-0 text-[13px] font-bold text-[#0f172a] focus:ring-0"
            />
            <Button
              variant="ghost"
              size="sm"
              type="button"
              onClick={() => remove(index)}
              className="flex h-7 w-7 items-center justify-center rounded-lg p-0 text-[#94a3b8] transition-colors hover:bg-red-50 hover:text-red-500"
            >
              <TrashIcon size={14} />
            </Button>
          </div>
        ))}
        {fields.length === 0 && (
          <div className="col-span-full py-4 text-center">
            <p className="text-xs text-gray-400 italic">
              No facilities added yet.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
