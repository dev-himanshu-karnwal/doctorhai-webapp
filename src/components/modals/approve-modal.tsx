"use client";

import { Modal } from "./modal";
import { Button } from "@/components/ui/button";
import { ShieldCheckIcon } from "@/components/icons";

interface ApproveModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
  loading?: boolean;
}

export function ApproveModal({
  isOpen,
  onClose,
  onConfirm,
  name,
  loading,
}: ApproveModalProps) {
  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-emerald-50">
          <ShieldCheckIcon className="h-8 w-8 text-emerald-500" />
        </div>

        <h2 className="mb-2 text-2xl font-extrabold text-[#0F172A]">
          Confirm Application
        </h2>

        <p className="mb-8 text-[#64748B]">
          Are you sure you want to approve{" "}
          <span className="font-bold text-[#0F172A]">{name}</span>? This will
          grant them full access to the platform.
        </p>

        <div className="grid w-full grid-cols-2 gap-3">
          <Button
            variant="secondary"
            onClick={onClose}
            className="h-12 w-full rounded-xl border-none bg-[#F1F5F9] tracking-wide text-[#475569] hover:bg-[#E2E8F0]"
          >
            Cancel
          </Button>
          <Button
            variant="primary"
            onClick={onConfirm}
            disabled={loading}
            className="h-12 w-full rounded-xl border-none bg-emerald-500 tracking-wide text-white hover:bg-emerald-600"
          >
            {loading ? "Approving..." : "Confirm"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
