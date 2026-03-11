"use client";

import { useState } from "react";
import { HospitalDetail } from "../../types/hospital-detail.types";
import { Divider } from "../shared";

import { SidebarStatCard } from "./sidebar-utils";

function HospitalTimelineDropdown({
  timeline,
  isOpenNow,
}: {
  timeline: HospitalDetail["timeline"];
  isOpenNow: boolean;
}) {
  const [isExpanded, setIsExpanded] = useState(false);

  // Find today's timeline
  const todayStr = new Date().toLocaleDateString("en-US", { weekday: "long" });
  const todayTimeline = timeline?.find(
    (t) => t.day.toLowerCase() === todayStr.toLowerCase()
  );

  if (!timeline || timeline.length === 0 || !todayTimeline) {
    return (
      <div className="space-y-1">
        <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
          Today&apos;s Hours
        </p>
        <div className="flex items-center justify-between">
          <span className="text-[15px] font-bold text-[#2D3748]">
            No timeline found
          </span>
        </div>
      </div>
    );
  }

  const todayText = `${todayTimeline.opentime} - ${todayTimeline.closetime}`;

  return (
    <div className="space-y-2">
      <div className="space-y-1">
        <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
          Today&apos;s Hours
        </p>
        <button
          onClick={() => setIsExpanded(!isExpanded)}
          className="flex w-full items-center justify-between transition-opacity outline-none hover:opacity-80"
        >
          <div className="flex items-center gap-2">
            <span className="text-[15px] font-bold text-[#2D3748]">
              {todayText}
            </span>
            {isOpenNow && (
              <span className="rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-bold text-[#16A34A]">
                Open Now
              </span>
            )}
          </div>
          <span className="text-[10px] text-[#94A3B8]">
            {isExpanded ? "▲" : "▼"}
          </span>
        </button>
      </div>

      {isExpanded && (
        <div className="mt-3 space-y-2.5 rounded-xl border border-gray-100 bg-gray-50 p-3">
          {timeline.map((item, i) => {
            const isToday = item.day.toLowerCase() === todayStr.toLowerCase();
            return (
              <div
                key={i}
                className="flex items-center justify-between text-[13px]"
              >
                <span
                  className={`font-semibold ${isToday ? "text-[#3D8F87]" : "text-gray-600"}`}
                >
                  {item.day}
                  {isToday ? " (Today)" : ""}
                </span>
                <span
                  className={`font-medium ${isToday ? "text-[#2D3748]" : "text-gray-500"}`}
                >
                  {item.opentime} - {item.closetime}
                </span>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export function HospitalDetailSidebar({
  h,
  doctorStats,
}: {
  h: HospitalDetail;
  doctorStats?: {
    total_verfied_count: number;
    total_available: number;
  };
}) {
  return (
    <aside className="w-full flex-col gap-4 lg:flex lg:w-[300px]">
      <div className="rounded-[24px] border border-[#F1F5F9] bg-white p-5 shadow-sm">
        <h3 className="mb-4 text-[16px] font-bold text-[#2d3748]">
          Quick Info
        </h3>
        <Divider className="mb-4" />

        <div className="space-y-4">
          <HospitalTimelineDropdown
            timeline={h.timeline}
            isOpenNow={h.isOpenNow}
          />
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
          value={doctorStats?.total_verfied_count || 0}
          label="Verified Doctors"
          color="text-[#3B82F6]"
        />
        <SidebarStatCard
          value={doctorStats?.total_available || 0}
          label="Available Doctors"
          color="text-[#10B981]"
        />
      </div>
    </aside>
  );
}
