import { AdminHeader } from "@/components/layout/admin-header";

export default function PrivateLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <>
      <AdminHeader />
      <main>{children}</main>
    </>
  );
}
