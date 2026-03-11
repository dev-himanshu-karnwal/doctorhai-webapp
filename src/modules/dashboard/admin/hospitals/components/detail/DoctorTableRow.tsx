"use client";

import { PencilIcon, TrashIcon } from "@/components/icons";
import { Button } from "@/components/ui";
import { Doctor } from "@/modules/doctors/types";
import { getStatusConfig } from "@/modules/doctors/components/cards/doctor-status-config";
import { StatusKind } from "@/types/common.types";

interface DoctorTableRowProps {
  doc: Doctor;
  onEdit: (doc: Doctor) => void;
  onDelete: (doc: Doctor) => void;
}

export function DoctorTableRow({ doc, onEdit, onDelete }: DoctorTableRowProps) {
  const config = getStatusConfig(
    (doc.status?.status?.toLowerCase() as StatusKind) || "off-duty"
  );

  return (
    <div className="grid grid-cols-[1fr_100px_80px] items-center gap-4 border-b border-[#f1f5f9] px-6 py-4 transition-colors last:border-0">
      <div className="flex items-center gap-3.5">
        <div
          className="flex h-[42px] w-[42px] flex-shrink-0 items-center justify-center rounded-full font-bold"
          style={{
            background: doc.profilePhotoUrl
              ? `url(${doc.profilePhotoUrl})`
              : "#e2e8f0",
            backgroundSize: "cover",
            color: "#64748b",
            fontSize: 13.5,
          }}
        >
          {!doc.profilePhotoUrl && doc.fullName.charAt(0)}
        </div>
        <div>
          <p
            className="mb-0.5 font-bold text-[#0f172a]"
            style={{ fontSize: 13.5 }}
          >
            {doc.fullName}
          </p>
          <p className="font-medium text-[#64748b]" style={{ fontSize: 12.5 }}>
            {doc.specialization}
          </p>
        </div>
      </div>

      <div>
        <span
          className={`inline-flex items-center gap-1.5 rounded-full px-3 py-1 text-[11px] font-bold ${config.barBg} ${config.barText}`}
        >
          {config.label}
        </span>
      </div>

      <div className="flex items-center gap-1">
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-[#94a3b8] transition-colors hover:text-[#0f172a]"
          onClick={() => onEdit(doc)}
        >
          <PencilIcon size={16} className="h-4 w-4" />
        </Button>
        <Button
          variant="ghost"
          size="sm"
          className="h-8 w-8 p-0 text-[#94a3b8] transition-colors hover:text-[#ef4444]"
          onClick={() => onDelete(doc)}
        >
          <TrashIcon size={16} className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
}
