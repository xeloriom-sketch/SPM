"use client";

import { useEffect, useState } from "react";
import { Phone } from "lucide-react";

const links = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [active, setActive] = useState("accueil");

  useEffect(() => {
    const onScroll = () => {
      const h = document.documentElement.scrollHeight - window.innerHeight;
      setProgress(h > 0 ? (window.scrollY / h) * 100 : 0);
      setScrolled(window.scrollY > 40);

      const sections = links.map((l) => l.href.replace("#", ""));
      for (const id of [...sections].reverse()) {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) {
          setActive(id);
          break;
        }
      }
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <>
      {/* Scroll progress */}
      <div
        className="fixed top-0 left-0 h-[3px] bg-lime z-[70] transition-[width] duration-100"
        style={{ width: `${progress}%` }}
      />

      <div className="fixed top-0 left-0 right-0 z-50 flex justify-center pt-4 px-4">
        <header
          className={`w-full max-w-[1240px] transition-all duration-300 ${
            scrolled ? "scale-[0.99]" : ""
          }`}
        >
          <nav className="nav-blur flex items-center justify-between rounded-2xl border border-borderc/70 bg-surface/70 px-4 py-3 sm:px-6">
            {/* Logo */}
            <a href="#accueil" className="flex items-center gap-2.5">
              <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
                <path
                  d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5"
                  stroke="#b6f000"
                  strokeWidth="1.8"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <circle cx="7" cy="16" r="1" fill="#b6f000" />
                <circle cx="17" cy="16" r="1" fill="#b6f000" />
              </svg>
              <div className="flex flex-col leading-none">
                <span className="font-display text-base font-bold tracking-tight">
                  Taxi Tignieu
                </span>
                <span className="text-[10px] text-mutedc">Conventionné</span>
              </div>
            </a>

            {/* Desktop nav */}
            <div className="hidden items-center gap-6 rounded-full border border-borderc/60 bg-background/60 px-6 py-2.5 text-sm text-mutedc md:flex">
              {links.map((l) => (
                <a
                  key={l.href}
                  href={l.href}
                  className={`relative transition-colors duration-200 hover:text-foreground pb-0.5
                    after:absolute after:left-0 after:bottom-[-6px] after:h-[2px] after:rounded-full after:bg-lime after:transition-[width] after:duration-200
                    ${
                      active === l.href.replace("#", "")
                        ? "text-foreground after:w-full"
                        : "after:w-0"
                    }
                  `}
                >
                  {l.label}
                </a>
              ))}
            </div>

            {/* CTA */}
            <a
              href="tel:0600000000"
              className="flex items-center gap-2 rounded-full bg-lime px-4 py-2.5 text-sm font-semibold text-black transition-all duration-200 hover:-translate-y-0.5 hover:brightness-105 hover:shadow-[0_10px_30px_-8px_rgba(182,240,0,0.5)]"
            >
              <Phone className="h-4 w-4" />
              <span className="hidden sm:inline">Appeler</span>
            </a>
          </nav>
        </header>
      </div>
    </>
  );
}
