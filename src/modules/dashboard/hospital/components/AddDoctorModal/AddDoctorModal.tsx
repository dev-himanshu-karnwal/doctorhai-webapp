import React from "react";
import { Modal } from "@/components/modals/modal";
import { AddDoctorForm } from "./AddDoctorForm";
import { DoctorRegistrationValues } from "@/modules/auth/types/registration.types";

interface AddDoctorModalProps {
  isOpen: boolean;
  onClose: () => void;
  onSubmit: (data: DoctorRegistrationValues) => void;
  isLoading?: boolean;
  themeColor?: string;
}

const AddDoctorModal: React.FC<AddDoctorModalProps> = ({
  isOpen,
  onClose,
  onSubmit,
  isLoading,
}) => {
  return (
    <Modal
      isOpen={isOpen}
      onClose={onClose}
      className="max-w-[580px] p-6 text-left sm:p-8"
    >
      <div className="mb-6">
        <h2 className="text-2xl font-black tracking-tight text-[#1e293b] sm:text-[28px]">
          Add New Doctor
        </h2>
        <p className="mt-1 text-[14px] font-medium text-[#64748b]">
          Register a new doctor for your hospital.
        </p>
      </div>

      <AddDoctorForm onSubmit={onSubmit} isLoading={isLoading} />
    </Modal>
  );
};

export default AddDoctorModal;
