"use client";

import React from "react";
import { UseFormRegister, Control, useFieldArray } from "react-hook-form";
import { ClockIcon, PlusIcon, TrashIcon } from "@/components/icons";
import { Button, Input } from "@/components/ui";
import { HospitalUpdateValues } from "@/modules/hospitals/schemas/hospital-update.schema";

interface TimelineSectionProps {
  register: UseFormRegister<HospitalUpdateValues>;
  control: Control<HospitalUpdateValues>;
}

export function TimelineSection({ register, control }: TimelineSectionProps) {
  const { fields, append, remove } = useFieldArray({
    control,
    name: "timeline",
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
          <ClockIcon size={16} className="h-4 w-4 text-[#f59e0b]" />
          <h2 className="text-[16px] font-bold text-[#0f172a]">
            Working Hours
          </h2>
        </div>
        <Button
          type="button"
          onClick={() =>
            append({ day: "", opentime: "09:00", closetime: "18:00" })
          }
          variant="ghost"
          size="sm"
          className="text-[#3b82f6] hover:bg-blue-50"
        >
          <PlusIcon size={14} className="mr-1" /> Add Day
        </Button>
      </div>

      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {fields.map((field, index) => (
          <div
            key={field.id}
            className="flex flex-col gap-2 rounded-xl border border-[#f1f5f9] bg-[#f8fafc] p-4 transition-all hover:border-emerald-200 hover:bg-white"
          >
            <div className="flex items-center justify-between">
              <Input
                {...register(`timeline.${index}.day`)}
                placeholder="Day (e.g. Monday)"
                className="h-7 border-none bg-transparent p-0 font-bold text-[#0f172a] focus:ring-0"
              />
              <Button
                type="button"
                onClick={() => remove(index)}
                variant="ghost"
                size="sm"
                className="h-7 w-7 rounded-lg p-0 text-[#94a3b8] hover:bg-red-50 hover:text-red-500"
              >
                <TrashIcon size={14} />
              </Button>
            </div>
            <div className="mt-2 flex gap-3">
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black tracking-wider text-[#94a3b8] uppercase">
                  Opens
                </label>
                <Input
                  type="time"
                  {...register(`timeline.${index}.opentime`)}
                  className="h-9 border-[#f1f5f9] bg-[#f8fafc] px-1 text-[12px] font-bold"
                />
              </div>
              <div className="flex flex-col gap-1.5">
                <label className="text-[9px] font-black tracking-wider text-[#94a3b8] uppercase">
                  Closes
                </label>
                <Input
                  type="time"
                  {...register(`timeline.${index}.closetime`)}
                  className="h-9 border-[#f1f5f9] bg-[#f8fafc] px-1 text-[12px] font-bold"
                />
              </div>
            </div>
          </div>
        ))}
        {fields.length === 0 && (
          <div className="col-span-full py-4 text-center">
            <p className="text-xs text-gray-400 italic">
              No working hours configured.
            </p>
          </div>
        )}
      </div>
    </div>
  );
}
