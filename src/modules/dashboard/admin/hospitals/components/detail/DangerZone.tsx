"use client";

import React from "react";
import { TrashIcon } from "@/components/icons";
import { Button } from "@/components/ui";

interface DangerZoneProps {
  onDelete: () => void;
}

export function DangerZone({ onDelete }: DangerZoneProps) {
  return (
    <aside className="hidden lg:block">
      <div
        className="sticky top-6 rounded-2xl border border-[#f1f5f9] bg-white p-6"
        style={{
          boxShadow: "0 1px 3px rgba(0,0,0,0.02), 0 1px 2px rgba(0,0,0,0.01)",
        }}
      >
        <h3 className="mb-1 text-sm font-bold text-[#e11d48]">Danger Zone</h3>
        <p className="mb-5 text-[11px] leading-relaxed text-[#64748b]">
          This action cannot be undone. All data will be permanently wiped.
        </p>
        <Button
          variant="primary"
          className="h-12 w-full bg-[#e11d48] font-bold text-white shadow-lg shadow-red-100 hover:bg-[#be123c]"
          onClick={onDelete}
        >
          <TrashIcon size={16} />
          Permanently Delete Hospital
        </Button>
      </div>
    </aside>
  );
}
