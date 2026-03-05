export function ForgotPasswordHeader() {
  return (
    <div className="flex flex-col items-center justify-center space-y-4 text-center">
      <h1 className="text-[32px] font-bold tracking-tight text-[#1E293B] sm:text-[40px]">
        Forgot Password
      </h1>
      <p className="max-w-[360px] text-[16px] leading-[24px] font-medium text-[#64748B]">
        Enter your email address to receive an OTP and reset your password.
      </p>
    </div>
  );
}
