import React from "react";

interface Stat {
  label: string;
  value: string;
}

interface StatsRowProps {
  stats: Stat[];
}

export const StatsRow = ({ stats }: StatsRowProps) => {
  return (
    <div
      className="flex flex-wrap items-center gap-x-12 gap-y-4 px-4 py-5 sm:px-8"
      style={{ borderTop: "1px solid #f1f5f9" }}
    >
      {stats.map((stat, idx) => (
        <div key={idx} className="flex flex-col gap-1">
          <span className="text-[11px] font-bold tracking-wider text-[#64748b] uppercase">
            {stat.label}
          </span>
          <span className="text-[14px] font-bold text-[#0f172a]">
            {stat.value}
          </span>
        </div>
      ))}
    </div>
  );
};
