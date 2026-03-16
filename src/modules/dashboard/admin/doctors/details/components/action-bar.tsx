import { useState } from "react";
import { useRouter } from "next/navigation";
import { AlertTriangleIcon, TrashIcon, SaveIcon } from "../icons";
import { Button } from "@/components/ui/button";
import { DeleteModal } from "@/components/modals";
import { useDeleteAccount } from "@/modules/accounts/hooks";

interface ActionBarProps {
  onSave?: () => void;
  isLoading?: boolean;
  doctorName?: string;
  accountId?: string;
}

export const ActionBar = ({
  onSave,
  isLoading,
  doctorName,
  accountId,
}: ActionBarProps) => {
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const router = useRouter();
  const { mutate: deleteAccount, isPending: isDeleting } = useDeleteAccount();

  const handleDeleteConfirm = () => {
    if (accountId) {
      deleteAccount(accountId, {
        onSuccess: () => {
          setIsDeleteModalOpen(false);
          router.push("/dashboard/admin/doctors");
        },
      });
    }
  };

  return (
    <>
      <div
        className="flex flex-col gap-6 bg-white px-4 py-5 sm:px-7 md:flex-row md:items-center md:justify-between"
        style={{
          borderRadius: 18,
          boxShadow: "0 1px 3px rgba(0,0,0,0.03), 0 1px 2px rgba(0,0,0,0.02)",
          border: "1px solid #f1f5f9",
        }}
      >
        <div className="flex items-start gap-3.5 md:items-center">
          <AlertTriangleIcon className="mt-1 h-[20px] w-[20px] flex-shrink-0 text-[#94a3b8] md:mt-0" />
          <span className="text-[13px] leading-relaxed font-medium text-[#64748b] sm:text-[13.5px]">
            Ensure all details are verified before saving. Deletion is
            irreversible.
          </span>
        </div>
        <div className="flex flex-col items-stretch gap-3 sm:flex-row sm:items-center sm:gap-4">
          <Button
            className="h-auto border-[#fecdd3] bg-[#fff1f2] px-[18px] py-[10px] text-[13.5px] font-bold text-[#e11d48] hover:bg-red-50"
            variant="secondary"
            onClick={() => setIsDeleteModalOpen(true)}
            type="button"
          >
            <TrashIcon className="h-[16px] w-[16px]" />
            Delete Doctor
          </Button>
          <Button
            className="h-auto bg-[#2563EB] px-[22px] py-[10px] text-[13.5px] font-bold text-white hover:bg-blue-700"
            onClick={onSave}
            disabled={isLoading || isDeleting}
            type={onSave ? "button" : "submit"}
          >
            {isLoading ? (
              <div className="mr-2 h-4 w-4 animate-spin rounded-full border-2 border-white border-t-transparent" />
            ) : (
              <SaveIcon className="h-[16px] w-[16px]" />
            )}
            {isLoading ? "Saving..." : "Save Changes"}
          </Button>
        </div>
      </div>

      <DeleteModal
        isOpen={isDeleteModalOpen}
        onClose={() => setIsDeleteModalOpen(false)}
        onConfirm={handleDeleteConfirm}
        name={doctorName || "this doctor"}
        isVerified={true}
        loading={isDeleting}
      />
    </>
  );
};
