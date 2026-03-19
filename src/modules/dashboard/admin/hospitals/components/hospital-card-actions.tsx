"use client";
import { useState } from "react";
import { TrashIcon } from "@/components/icons";
import { useVerifyAccount, useDeleteAccount } from "@/modules/accounts/hooks";
import { Button } from "@/components/ui/button";
import { ApproveModal, DeleteModal } from "@/components/modals";

interface HospitalCardActionsProps {
  id: string;
  accountId: string;
  name: string;
  isVerified: boolean;
}

export function HospitalCardActions({
  id,
  accountId,
  name,
  isVerified,
}: HospitalCardActionsProps) {
  const [showApproveModal, setShowApproveModal] = useState(false);
  const [showDeleteModal, setShowDeleteModal] = useState(false);

  const { mutate: verifyAccount, isPending: isVerifying } = useVerifyAccount();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();

  const handleApprove = () => setShowApproveModal(true);
  const handleDelete = () => setShowDeleteModal(true);

  const confirmApprove = () => {
    verifyAccount(
      { id: accountId, payload: { isVerified: true } },
      {
        onSuccess: () => setShowApproveModal(false),
      }
    );
  };

  const confirmDelete = () => {
    deleteAccount(accountId, {
      onSuccess: () => setShowDeleteModal(false),
    });
  };

  return (
    <div className="mt-1 flex flex-col gap-2 px-4 pb-4">
      <div className="grid grid-cols-2 gap-2">
        {isVerified ? (
          <Button
            variant="primary"
            disabled
            className="w-full cursor-default border-none bg-[#10B981] tracking-wide text-white disabled:bg-[#10B981] disabled:opacity-100"
          >
            Approved
          </Button>
        ) : (
          <Button
            variant="primary"
            onClick={handleApprove}
            className="w-full border-none bg-blue-500 tracking-wide text-white hover:bg-blue-600"
          >
            Approve
          </Button>
        )}
        <Button
          variant="secondary"
          href={`/dashboard/admin/hospitals/${id}?verified=${isVerified}`}
          className="w-full border-none bg-[#F1F5F9] tracking-wide text-gray-700 hover:bg-[#E2E8F0]"
        >
          Edit
        </Button>
      </div>

      <Button
        variant="outline"
        onClick={handleDelete}
        className="mt-1 w-full border-red-100 bg-red-50 tracking-wide text-red-500 transition-colors hover:border-red-200 hover:bg-red-100 hover:text-red-600"
      >
        <TrashIcon className="mr-1 h-[14px] w-[14px]" />
        {isVerified ? "Delete" : "Reject"} Application
      </Button>

      <ApproveModal
        isOpen={showApproveModal}
        onClose={() => setShowApproveModal(false)}
        onConfirm={confirmApprove}
        name={name}
        loading={isVerifying}
      />

      <DeleteModal
        isOpen={showDeleteModal}
        onClose={() => setShowDeleteModal(false)}
        onConfirm={confirmDelete}
        name={name}
        isVerified={isVerified}
        loading={isDeleting}
      />
    </div>
  );
}
