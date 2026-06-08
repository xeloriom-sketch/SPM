"use client";

import { signOut } from "next-auth/react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  LayoutDashboard,
  MessageSquare,
  Settings,
  LogOut,
  ExternalLink,
} from "lucide-react";
import { sitePath } from "@/lib/site-path";

const navItems = [
  { href: "/admin/dashboard", icon: LayoutDashboard, label: "Tableau de bord" },
  { href: "/admin/messages", icon: MessageSquare, label: "Messages" },
  { href: "/admin/content", icon: Settings, label: "Contenu du site" },
];

export default function AdminShell({
  children,
  unread = 0,
}: {
  children: React.ReactNode;
  unread?: number;
}) {
  const pathname = usePathname();

  return (
    <div className="min-h-screen bg-background flex">
      {/* Sidebar */}
      <aside className="hidden w-60 shrink-0 border-r border-borderc bg-surface flex-col lg:flex">
        <div className="p-5 border-b border-borderc">
          <div className="flex items-center gap-2.5">
            <svg className="h-6 w-6" viewBox="0 0 24 24" fill="none">
              <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7" cy="16" r="1" fill="currentColor"/><circle cx="17" cy="16" r="1" fill="currentColor"/>
            </svg>
            <div>
              <p className="text-sm font-bold font-display">Taxi Tignieu</p>
              <p className="text-[10px] text-mutedc">Admin</p>
            </div>
          </div>
        </div>

        <nav className="flex flex-col gap-1 p-3 flex-1">
          {navItems.map(({ href, icon: Icon, label }) => {
            const active = pathname?.startsWith(href) ?? false;
            return (
              <Link
                key={href}
                href={href}
                className={`flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm transition-all ${
                  active
                    ? "bg-black text-white font-medium"
                    : "text-mutedc hover:bg-surface2 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
                {label === "Messages" && unread > 0 && (
                  <span className="ml-auto rounded-full bg-black text-white px-2 py-0.5 text-[10px] font-bold">
                    {unread}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-borderc flex flex-col gap-1">
          <a
            href={sitePath("/")}
            target="_blank"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc hover:bg-surface2 hover:text-foreground transition-all"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            Voir le site
          </a>
          <button
            onClick={() => signOut({ callbackUrl: sitePath("/admin/login") })}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc hover:bg-black/5 hover:text-black transition-all"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile bottom nav */}
      <nav className="fixed bottom-0 left-0 right-0 z-40 flex items-center justify-around border-t border-borderc bg-white px-2 pb-safe lg:hidden" style={{ paddingBottom: "max(0.75rem, env(safe-area-inset-bottom))" }}>
        {navItems.map(({ href, icon: Icon, label }) => {
          const active = pathname?.startsWith(href) ?? false;
          return (
            <Link
              key={href}
              href={href}
              className={`flex flex-col items-center gap-1 px-4 py-2 rounded-xl transition-colors ${active ? "text-black" : "text-mutedc"}`}
            >
              <div className={`relative grid h-8 w-8 place-items-center rounded-xl transition-colors ${active ? "bg-black/[0.07]" : ""}`}>
                <Icon className="h-4 w-4" />
                {label === "Messages" && unread > 0 && (
                  <span className="absolute -top-1 -right-1 h-4 w-4 rounded-full bg-black text-white text-[9px] font-bold grid place-items-center">
                    {unread > 9 ? "9+" : unread}
                  </span>
                )}
              </div>
              <span className="text-[10px] font-medium">{label.split(" ")[0]}</span>
            </Link>
          );
        })}
        <button
          onClick={() => signOut({ callbackUrl: sitePath("/admin/login") })}
          className="flex flex-col items-center gap-1 px-4 py-2 rounded-xl text-mutedc transition-colors"
        >
          <div className="grid h-8 w-8 place-items-center rounded-xl">
            <LogOut className="h-4 w-4" />
          </div>
          <span className="text-[10px] font-medium">Quitter</span>
        </button>
      </nav>

      {/* Main */}
      <main className="flex-1 overflow-y-auto pb-20 lg:pb-0">
        {children}
      </main>
    </div>
  );
}
