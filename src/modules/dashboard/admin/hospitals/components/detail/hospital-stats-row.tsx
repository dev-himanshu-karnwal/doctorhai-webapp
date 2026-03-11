"use client";

import { StethoscopeIcon, ShieldCheckIcon } from "@/components/icons";
import { TrendUpIcon } from "../../icons";
import { DoctorStats } from "@/modules/stats/services/stats.service";
import { StatCard } from "./StatCard";

interface HospitalStatsRowProps {
  stats: DoctorStats | undefined;
  isLoading: boolean;
  public_view_count?: number;
}

export function HospitalStatsRow({
  stats,
  isLoading,
  public_view_count,
}: HospitalStatsRowProps) {
  const statsList = [
    {
      title: "Total Doctors",
      value: stats?.total_doctor_count.toString() || "0",
      icon: <StethoscopeIcon size={16} className="h-4 w-4" />,
      iconBg: "#eff6ff",
      iconColor: "#3b82f6",
      badge: (
        <div
          className="flex items-center gap-1 rounded-[6px] bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981]"
          style={{ fontSize: 10 }}
        >
          <TrendUpIcon className="h-2.5 w-2.5" />
          {stats?.percentage_change || 0}%
        </div>
      ),
    },
    {
      title: "Verified Doctors",
      value: stats?.total_verfied_count.toString() || "0",
      icon: <ShieldCheckIcon size={16} className="h-4 w-4" />,
      iconBg: "#ecfdf5",
      iconColor: "#10b981",
      badge: (
        <div
          className="flex items-center rounded-[6px] bg-[#ecfdf5] px-2 py-0.5 font-bold text-[#10b981]"
          style={{ fontSize: 10 }}
        >
          Verified
        </div>
      ),
    },
    {
      title: "Unverified Doctors",
      value: stats?.total_unverified_count.toString() || "0",
      icon: <ShieldCheckIcon size={16} className="h-4 w-4" />,
      iconBg: "#fffbeb",
      iconColor: "#f59e0b",
      badge: (
        <div
          className="flex items-center rounded-[6px] bg-[#fff1f2] px-2 py-0.5 font-bold text-[#e11d48]"
          style={{ fontSize: 10 }}
        >
          Pending
        </div>
      ),
    },
    {
      title: "Total Views",
      value: public_view_count?.toString() || "0",
      icon: <TrendUpIcon size={16} className="h-4 w-4" />,
      iconBg: "#f0fdf4",
      iconColor: "#16a34a",
      badge: (
        <div
          className="flex items-center rounded-[6px] bg-[#f1f5f9] px-2 py-0.5 font-bold text-[#64748b]"
          style={{ fontSize: 10 }}
        >
          Public
        </div>
      ),
    },
  ];

  return (
    <div className="mb-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
      {statsList.map((stat, index) => (
        <StatCard key={index} {...stat} isLoading={isLoading} />
      ))}
    </div>
  );
}
