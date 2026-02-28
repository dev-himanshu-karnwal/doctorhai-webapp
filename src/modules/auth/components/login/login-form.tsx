"use client";

import { useState } from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { loginSchema, LoginValues } from "../../schemas";
import { FormInput } from "../shared/form-input";
import { Button } from "@/components/ui/button";
import Link from "next/link";
import { useLogin } from "../../hooks";
import { LoginToggle } from "./toggle";
import { Icons } from "../shared/icons";

export function LoginForm() {
  const [loginType, setLoginType] = useState<"doctor" | "hospital">("doctor");
  const { mutate, isPending } = useLogin();

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<LoginValues>({
    resolver: zodResolver(loginSchema),
    defaultValues: { loginType: "doctor", username: "", password: "" } as any,
  });

  const handleToggle = (type: "doctor" | "hospital") => {
    setLoginType(type);
    reset({
      loginType: type,
      ...(type === "doctor" ? { username: "" } : { email: "" }),
      password: "",
    } as any);
  };

  return (
    <div className="w-full">
      <LoginToggle type={loginType} onChange={handleToggle} />

      <form
        onSubmit={handleSubmit((data) => mutate(data))}
        className="w-full space-y-6"
      >
        {loginType === "doctor" ? (
          <FormInput
            label="Username"
            {...register("username" as any)}
            placeholder="dr_arora12"
            icon={<Icons.User />}
            error={(errors as any)?.username?.message}
          />
        ) : (
          <FormInput
            label="Email Address"
            {...register("email" as any)}
            placeholder="admin@hospital.com"
            icon={<Icons.Email />}
            error={(errors as any)?.email?.message}
          />
        )}

        <FormInput
          label="Password"
          {...register("password" as any)}
          type="password"
          placeholder="••••••••"
          icon={<Icons.Lock />}
          error={(errors as any)?.password?.message}
        />

        <Button
          type="submit"
          disabled={isPending}
          className="group mt-6 h-[64px] w-full rounded-[18px] bg-[#3D8F87] text-[18px] font-bold text-white shadow-[0_4px_6px_-4px_rgba(79,179,170,0.3),0_10px_15px_-3px_rgba(79,179,170,0.3)] transition-all active:scale-[0.98]"
        >
          <span>Sign In</span>
          <Icons.Check />
        </Button>

        <div className="text-center text-[15px] font-medium text-[#64748B]">
          Don't have an account?{" "}
          <Link
            href={`/register/${loginType}`}
            className="font-bold text-[#3D8F87] hover:underline"
          >
            Register as {loginType}
          </Link>
        </div>
      </form>
    </div>
  );
}
