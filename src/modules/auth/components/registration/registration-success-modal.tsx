"use client";

import { Modal } from "@/components/modals";
import { Button } from "@/components/ui/button";
import { useRouter } from "next/navigation";
import { Icons } from "../shared/icons";

interface RegistrationSuccessModalProps {
  isOpen: boolean;
}

export function RegistrationSuccessModal({
  isOpen,
}: RegistrationSuccessModalProps) {
  const router = useRouter();

  return (
    <Modal isOpen={isOpen}>
      <div className="mx-auto mb-6 flex h-[72px] w-[72px] items-center justify-center rounded-full bg-[#E5F7F1]">
        <Icons.CheckCircle className="h-8 w-8 text-[#00E599]" />
      </div>
      <h3 className="mb-3 text-[22px] font-bold text-[#1A2B3D]">
        Request Submitted Successfully
      </h3>
      <p className="mb-8 text-[15px] leading-relaxed text-[#64748B]">
        Thank you for joining DocStatus. Our team will verify your details and
        reach out within 24 hours to finalize your account setup.
      </p>
      <Button
        onClick={() => router.push("/")}
        className="h-[56px] w-full rounded-[14px] bg-[#4285F4] text-[16px] font-bold text-white shadow-[0_4px_12px_rgba(66,133,244,0.3)] transition-all hover:bg-[#3367D6] active:scale-[0.98]"
      >
        Back to Home
      </Button>
    </Modal>
  );
}
