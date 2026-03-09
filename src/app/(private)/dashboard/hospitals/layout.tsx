import { AdminHeader } from "@/components/layout/admin-header";

export default function HospitalsLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
    </>
  );
}
