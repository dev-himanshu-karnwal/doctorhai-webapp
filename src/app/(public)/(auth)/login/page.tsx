import { LoginForm, LoginWrapper } from "@/modules/auth";

export const metadata = {
  title: "Login | DoctorHai",
  description: "Sign in to access your DoctorHai dashboard",
};

export default function Login() {
  return (
    <LoginWrapper>
      <LoginForm />
    </LoginWrapper>
  );
}
