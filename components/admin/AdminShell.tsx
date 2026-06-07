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
              <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="#b6f000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
              <circle cx="7" cy="16" r="1" fill="#b6f000"/><circle cx="17" cy="16" r="1" fill="#b6f000"/>
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
                    ? "bg-lime/10 text-lime font-medium"
                    : "text-mutedc hover:bg-surface2 hover:text-foreground"
                }`}
              >
                <Icon className="h-4 w-4 shrink-0" />
                {label}
                {label === "Messages" && unread > 0 && (
                  <span className="ml-auto rounded-full bg-lime px-2 py-0.5 text-[10px] font-bold text-black">
                    {unread}
                  </span>
                )}
              </Link>
            );
          })}
        </nav>

        <div className="p-3 border-t border-borderc flex flex-col gap-1">
          <a
            href="/"
            target="_blank"
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc hover:bg-surface2 hover:text-foreground transition-all"
          >
            <ExternalLink className="h-4 w-4 shrink-0" />
            Voir le site
          </a>
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="flex items-center gap-3 rounded-xl px-3 py-2.5 text-sm text-mutedc hover:bg-red-500/10 hover:text-red-400 transition-all"
          >
            <LogOut className="h-4 w-4 shrink-0" />
            Déconnexion
          </button>
        </div>
      </aside>

      {/* Mobile top bar */}
      <div className="fixed top-0 left-0 right-0 z-40 flex items-center justify-between border-b border-borderc bg-surface px-4 py-3 lg:hidden">
        <div className="flex items-center gap-2">
          <svg className="h-5 w-5" viewBox="0 0 24 24" fill="none">
            <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="#b6f000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="7" cy="16" r="1" fill="#b6f000"/><circle cx="17" cy="16" r="1" fill="#b6f000"/>
          </svg>
          <span className="text-sm font-bold">Admin</span>
        </div>
        <div className="flex items-center gap-2">
          {navItems.map(({ href, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className={`grid h-8 w-8 place-items-center rounded-lg transition-colors ${pathname?.startsWith(href) ?? false ? "bg-lime/10 text-lime" : "text-mutedc"}`}
            >
              <Icon className="h-4 w-4" />
            </Link>
          ))}
          <button
            onClick={() => signOut({ callbackUrl: "/admin/login" })}
            className="grid h-8 w-8 place-items-center rounded-lg text-mutedc hover:text-red-400 transition-colors"
          >
            <LogOut className="h-4 w-4" />
          </button>
        </div>
      </div>

      {/* Main */}
      <main className="flex-1 overflow-y-auto pt-14 lg:pt-0">
        {children}
      </main>
    </div>
  );
}
