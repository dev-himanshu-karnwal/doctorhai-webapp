"use client";

import { Modal } from "./modal";
import { Button } from "@/components/ui/button";
import { TrashIcon } from "@/components/icons";

interface DeleteModalProps {
  isOpen: boolean;
  onClose: () => void;
  onConfirm: () => void;
  name: string;
  isVerified: boolean;
  loading?: boolean;
}

export function DeleteModal({
  isOpen,
  onClose,
  onConfirm,
  name,
  isVerified,
  loading,
}: DeleteModalProps) {
  const title = isVerified ? "Delete Hospital" : "Reject Application";
  const description = isVerified
    ? `Are you sure you want to delete ${name}? This action cannot be undone.`
    : `Are you sure you want to reject the application from ${name}?`;

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <div className="flex flex-col items-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-red-50">
          <TrashIcon className="h-8 w-8 text-red-500" />
        </div>

        <h2 className="mb-2 text-2xl font-extrabold text-[#0F172A]">{title}</h2>

        <p className="mb-8 text-[#64748B]">{description}</p>

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
            className="h-12 w-full rounded-xl border-none bg-red-500 tracking-wide text-white hover:bg-red-600"
          >
            {loading
              ? isVerified
                ? "Deleting..."
                : "Rejecting..."
              : isVerified
                ? "Delete"
                : "Reject"}
          </Button>
        </div>
      </div>
    </Modal>
  );
}
