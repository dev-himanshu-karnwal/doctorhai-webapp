"use client";

import { cn } from "@/lib/cn";

interface SidebarSectionProps {
  label: string;
  value: string;
  badge?: string;
}

export function SidebarSection({ label, value, badge }: SidebarSectionProps) {
  return (
    <div className="space-y-1">
      <p className="text-[10px] font-bold tracking-widest text-[#94A3B8] uppercase">
        {label}
      </p>
      <div className="flex items-center justify-between">
        <span className="text-[15px] font-bold text-[#2D3748]">{value}</span>
        {badge && (
          <span className="rounded-full bg-[#F0FDF4] px-2 py-0.5 text-[11px] font-bold text-[#16A34A]">
            {badge}
          </span>
        )}
      </div>
    </div>
  );
}

interface SidebarStatCardProps {
  value: number;
  label: string;
  color: string;
}

export function SidebarStatCard({ value, label, color }: SidebarStatCardProps) {
  return (
    <div className="flex flex-col items-center justify-center rounded-[20px] bg-white py-4 shadow-sm">
      <span className={cn("text-[28px] font-bold", color)}>{value}</span>
      <span className="text-[9px] font-bold tracking-wider text-[#94A3B8] uppercase">
        {label}
      </span>
    </div>
  );
}
