import React from "react";
import AdminNav from "@/components/admin/AdminNav";
import AdminHeader from "@/components/admin/AdminHeader";

export const metadata = {
  title: "Admin | Das Gästehaus",
};

export default function AdminLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="flex min-h-screen bg-neutral-950 text-neutral-100">
      <AdminNav />
      <div className="flex-1 flex flex-col">
        <AdminHeader />
        <main className="flex-1 p-6 md:p-8 overflow-auto">{children}</main>
      </div>
    </div>
  );
}
