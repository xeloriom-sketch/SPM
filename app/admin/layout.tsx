import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Administration — Taxi Tignieu",
  robots: { index: false, follow: false },
};

export default function AdminLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <link rel="manifest" href="/manifest-admin.json" />
      {children}
    </>
  );
}
