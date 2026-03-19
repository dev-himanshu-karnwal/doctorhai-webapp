import { AdminLoginForm, LoginWrapper } from "@/modules/auth";
import { ShieldAlertIcon } from "@/components/icons";

export const metadata = {
  title: "Admin Login | DoctorHai",
  description: "Secure access for DoctorHai administrators",
};

export default function AdminLoginPage() {
  return (
    <LoginWrapper>
      <div className="mb-4 flex w-full flex-col items-center">
        <div className="mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-[#3D8F87]/10 text-[#3D8F87]">
          <ShieldAlertIcon size={32} strokeWidth={2.5} />
        </div>
        <h2 className="text-[24px] font-bold text-[#1E293B]">Admin Console</h2>
        <p className="mt-2 text-[15px] text-[#64748B]">
          Please enter your credentials to access the management portal
        </p>
      </div>
      <AdminLoginForm />
    </LoginWrapper>
  );
}
