"use client";

import { useState, useEffect } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { FormInput } from "../shared/form-input";
import { Button } from "@/components/ui/button";
import { Icons } from "../shared/icons";
import Link from "next/link";
import { useRouter } from "next/navigation";
import {
  forgotPasswordRequestSchema,
  forgotPasswordVerifySchema,
  ForgotPasswordRequestValues,
  ForgotPasswordVerifyValues,
} from "../../schemas/forgot-password";
import {
  useForgotPasswordRequest,
  useForgotPasswordVerify,
} from "../../hooks/forgot-password";
import { toast } from "sonner";

export function ForgotPasswordForm() {
  const [step, setStep] = useState<"email" | "otp">("email");
  const [resendTimer, setResendTimer] = useState(0);
  const router = useRouter();

  useEffect(() => {
    if (resendTimer <= 0) return;
    const interval = setInterval(() => {
      setResendTimer((prev) => Math.max(0, prev - 1));
    }, 1000);
    return () => clearInterval(interval);
  }, [resendTimer]);

  const isResendDisabled = resendTimer > 0;

  const { mutate: requestOtp, isPending: isRequestingOtp } =
    useForgotPasswordRequest();
  const { mutate: verifyOtp, isPending: isVerifyingOtp } =
    useForgotPasswordVerify();

  const emailForm = useForm<ForgotPasswordRequestValues>({
    resolver: zodResolver(forgotPasswordRequestSchema),
    defaultValues: { email: "" },
  });

  const otpForm = useForm<ForgotPasswordVerifyValues>({
    resolver: zodResolver(forgotPasswordVerifySchema),
    defaultValues: { email: "", otp: "" },
  });

  const onEmailSubmit = (data: ForgotPasswordRequestValues) => {
    requestOtp(data, {
      onSuccess: () => {
        toast.success("OTP sent to your email!");
        otpForm.setValue("email", data.email);
        setResendTimer(60);
        setStep("otp");
      },
    });
  };

  const handleResendOtp = () => {
    const email = otpForm.getValues("email");
    if (!email) return;
    requestOtp(
      { email },
      {
        onSuccess: () => {
          toast.success("OTP resent successfully!");
          setResendTimer(60);
        },
      }
    );
  };

  const onOtpSubmit = (data: ForgotPasswordVerifyValues) => {
    verifyOtp(data, {
      onSuccess: () => {
        toast.success("OTP Verified! Redirecting...");
        router.push("/reset-password");
      },
    });
  };

  if (step === "email") {
    return (
      <div className="w-full">
        <form
          onSubmit={emailForm.handleSubmit(onEmailSubmit)}
          className="w-full space-y-6"
        >
          <FormInput
            label="Email Address"
            {...emailForm.register("email")}
            placeholder="name@example.com"
            icon={<Icons.Email />}
            type="email"
            error={emailForm.formState.errors.email?.message}
          />

          <div className="-mt-2 flex justify-end">
            <Link
              href="/login"
              className="text-[14px] font-bold text-[#4FB3AA] transition-colors hover:text-[#3D8F87]"
            >
              Back to Login
            </Link>
          </div>

          <Button
            type="submit"
            disabled={isRequestingOtp}
            loading={isRequestingOtp}
            className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
          >
            <span>
              {isRequestingOtp
                ? "Sending Code..."
                : "Sending verification code"}
            </span>
          </Button>
        </form>
      </div>
    );
  }

  return (
    <div className="w-full">
      <form
        onSubmit={otpForm.handleSubmit(onOtpSubmit)}
        className="w-full space-y-6"
      >
        <div className="mb-6 rounded-[16px] border border-[#CCFBF1] bg-[#F0FDFA] p-4 text-center">
          <p className="text-[14px] font-medium text-[#0F766E]">
            OTP has been sent to
          </p>
          <p className="text-[15px] font-bold text-[#115E59]">
            {otpForm.getValues("email")}
          </p>
        </div>

        <FormInput
          label="Enter OTP"
          {...otpForm.register("otp")}
          placeholder="6-digit code"
          icon={<Icons.Lock />}
          type="text"
          maxLength={6}
          error={otpForm.formState.errors.otp?.message}
        />

        <div className="-mt-2 flex items-center justify-between">
          <Button
            variant="ghost"
            type="button"
            disabled={isRequestingOtp || isResendDisabled}
            onClick={handleResendOtp}
            className="h-auto p-0 text-[14px] font-bold text-[#64748B] transition-colors hover:bg-transparent hover:text-[#4FB3AA]"
          >
            {isRequestingOtp
              ? "Sending..."
              : isResendDisabled
                ? `Resend code in 00:${resendTimer.toString().padStart(2, "0")}`
                : "Resend OTP"}
          </Button>
          <Button
            variant="ghost"
            type="button"
            disabled={isVerifyingOtp}
            onClick={() => setStep("email")}
            className="h-auto p-0 text-[14px] font-bold text-[#4FB3AA] transition-colors hover:bg-transparent hover:text-[#3D8F87]"
          >
            Change Email
          </Button>
        </div>

        <Button
          type="submit"
          disabled={isVerifyingOtp}
          loading={isVerifyingOtp}
          className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
        >
          <span>
            {isVerifyingOtp ? "Verifying..." : "Go to Reset Password"}
          </span>
          {!isVerifyingOtp && <Icons.Check />}
        </Button>
      </form>
    </div>
  );
}
