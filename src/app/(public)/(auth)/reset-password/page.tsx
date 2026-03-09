import {
  ResetPasswordForm,
  ResetPasswordWrapper,
} from "@/modules/auth/components/reset-password";
import { Suspense } from "react";

export const metadata = {
  title: "Reset Password | DoctorHai",
  description: "Create a new password for your DoctorHai account",
};

export default function ResetPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen"></div>}>
      <ResetPasswordWrapper>
        <ResetPasswordForm />
      </ResetPasswordWrapper>
    </Suspense>
  );
}
