import {
  ForgotPasswordForm,
  ForgotPasswordWrapper,
} from "@/modules/auth/components/forgot-password";
import { Suspense } from "react";

export const metadata = {
  title: "Forgot Password | DoctorHai",
  description: "Reset your DoctorHai account password",
};

export default function ForgotPasswordPage() {
  return (
    <Suspense fallback={<div className="min-h-screen"></div>}>
      <ForgotPasswordWrapper>
        <ForgotPasswordForm />
      </ForgotPasswordWrapper>
    </Suspense>
  );
}
