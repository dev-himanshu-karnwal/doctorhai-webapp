"use client";

import { useForm, type FieldErrors } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, type LoginValues } from "../../schemas";
import { FormInput } from "../shared/form-input";
import { MailIcon, LockIcon } from "@/components/icons";
import { AuthSubmitIcon } from "@/modules/auth/icons";
import { Button } from "@/components/ui";
import Link from "next/link";
import { useLogin } from "../../hooks";

export function AdminLoginForm() {
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      loginType: "email",
      email: "",
      password: "",
    } as LoginValues,
  });

  const fieldErrors = errors as FieldErrors<{
    email?: string;
    password?: string;
  }>;

  return (
    <div className="w-full">
      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="w-full space-y-6"
      >
        <input type="hidden" {...register("loginType")} value="email" />

        <FormInput
          label="Admin Email"
          {...register("email")}
          placeholder="admin@doctorhai.com"
          icon={<MailIcon size={20} className="text-[#94A3B8]" />}
          error={fieldErrors.email?.message}
        />

        <FormInput
          label="Password"
          {...register("password")}
          type="password"
          placeholder="••••••••"
          icon={<LockIcon size={20} className="text-[#94A3B8]" />}
          error={fieldErrors.password?.message}
        />

        <div className="-mt-2 flex justify-end">
          <Link
            href="/forgot-password"
            className="text-[14px] font-bold text-[#3D8F87] transition-colors hover:text-[#2D6F69]"
          >
            Forgot Password?
          </Link>
        </div>

        <Button
          type="submit"
          disabled={isPending}
          loading={isPending}
          className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(61,143,135,0.3),0_10px_15px_-3px_rgba(61,143,135,0.3)] transition-all hover:bg-[#2D6F69] active:scale-[0.98]"
        >
          <span>{isPending ? "Authenticating..." : "Admin Sign In"}</span>
          {!isPending && <AuthSubmitIcon size={16} className="text-white" />}
        </Button>

        <div className="text-center text-[15px] font-medium text-[#64748B]">
          System Administrator Portal
        </div>
      </form>
    </div>
  );
}
