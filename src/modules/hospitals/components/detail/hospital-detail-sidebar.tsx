"use client";

import { HospitalDetail } from "../../types/hospital-detail.types";
import { Divider } from "../shared";

import { SidebarSection, SidebarStatCard } from "./sidebar-utils";

export function HospitalDetailSidebar({ h }: { h: HospitalDetail }) {
  return (
    <aside className="w-full flex-col gap-4 lg:flex lg:w-[300px]">
      <div className="rounded-[24px] border border-[#F1F5F9] bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-[16px] font-bold text-[#2d3748]">
          Quick Info
        </h3>
        <Divider className="mb-4" />

        <div className="space-y-4">
          <SidebarSection
            label="Today's Hours"
            value={h.hours}
            badge={h.isOpenNow ? "Open Now" : undefined}
          />
          <Divider />
          <div className="space-y-2">
            <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
              ER Services
            </p>
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-orange-50 text-orange-500">
                🏥
              </div>
              <div>
                <p className="text-[14px] font-bold text-[#2D3748]">
                  ER Available
                </p>
                <p className="text-[12px] text-[#94A3B8]">
                  Wait time: {h.erWaitTime}
                </p>
              </div>
            </div>
          </div>
          <Divider />
          <div className="space-y-2">
            <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
              Facilities
            </p>
            <div className="flex flex-wrap gap-2">
              {h.facilities.map((f) => (
                <span
                  key={f}
                  className="rounded-full bg-[#f8fafc] px-3 py-1 text-[12px] font-medium text-[#475569]"
                >
                  {f}
                </span>
              ))}
            </div>
          </div>
        </div>
      </div>

      <div className="mt-4 grid grid-cols-2 gap-3">
        <SidebarStatCard
          value={h.totalDoctors}
          label="Total Doctors"
          color="text-[#3D8F87]"
        />
        <SidebarStatCard
          value={h.departments}
          label="Departments"
          color="text-[#4C84FF]"
        />
      </div>
    </aside>
  );
}

import { cn } from "@/lib/cn";
