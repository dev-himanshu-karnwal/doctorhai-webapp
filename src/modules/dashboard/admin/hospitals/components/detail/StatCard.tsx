"use client";

import React from "react";

interface StatCardProps {
  title: string;
  value: string;
  icon: React.ReactNode;
  iconBg: string;
  iconColor: string;
  badge: React.ReactNode;
  isLoading: boolean;
}

export function StatCard({
  title,
  value,
  icon,
  iconBg,
  iconColor,
  badge,
  isLoading,
}: StatCardProps) {
  return (
    <div
      className={`flex flex-col justify-between bg-white p-5 ${isLoading ? "animate-pulse" : ""}`}
      style={{
        borderRadius: 16,
        boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        border: "1px solid #f1f5f9",
      }}
    >
      <div className="mb-4 flex items-center justify-between">
        <div
          className="flex items-center justify-center"
          style={{
            width: 32,
            height: 32,
            borderRadius: 8,
            background: iconBg,
            color: iconColor,
          }}
        >
          {icon}
        </div>
        {badge}
      </div>
      <div>
        <p
          className="mb-1.5 font-bold text-[#94a3b8] uppercase"
          style={{ fontSize: "10px", letterSpacing: "0.08em" }}
        >
          {title}
        </p>
        <span className="text-[28px] leading-tight font-black text-[#0f172a]">
          {isLoading ? "..." : value}
        </span>
      </div>
    </div>
  );
}
