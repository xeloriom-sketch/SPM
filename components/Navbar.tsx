"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { Phone, Menu, X } from "lucide-react";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Services",  href: "/services",  title: "Nos services taxi — Aéroport, CPAM, Colis, Remorque" },
  { label: "Tarifs",    href: "/tarifs",    title: "Tarifs taxi SPM — Devis gratuit" },
  { label: "À propos",  href: "/a-propos",  title: "À propos de SPM Taxi — Chauffeur conventionné CPAM" },
  { label: "Contact",   href: "/#contact",  title: "Contacter SPM Taxi — Demander un devis" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const isHome    = pathname === "/";

  const [scrolled,  setScrolled]  = useState(false);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const handle = () => setScrolled(window.scrollY > 30);
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  useEffect(() => { setMenuOpen(false); }, [pathname]);

  const linkCls = (href: string) => {
    const active = !href.startsWith("/#") && pathname === href;
    return [
      "relative text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300",
      "after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-white",
      "after:transition-[width] after:duration-300 hover:after:w-full",
      active ? "after:!w-full !text-white" : "text-white/55 hover:text-white",
    ].join(" ");
  };

  return (
    <>
      <header className={`fixed left-0 right-0 top-0 z-50 w-full ${isHome ? "nav-enter-home" : "nav-enter"}`}>
        <nav className={`flex items-center px-6 py-4 md:px-12 border-b transition-all duration-500 ${
          scrolled
            ? "border-white/[0.07] bg-black/90 backdrop-blur-xl"
            : "border-transparent bg-transparent"
        }`}>

          {/* Left links */}
          <div className="hidden items-center justify-end gap-10 md:flex md:flex-1 md:pr-10">
            {navLinks.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)} title={l.title}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="shrink-0 mx-auto md:mx-0" aria-label="SPM Taxi — Accueil">
            <Logo variant="dark" size="sm" />
          </Link>

          {/* Right links */}
          <div className="hidden items-center justify-start gap-10 md:flex md:flex-1 md:pl-10">
            {navLinks.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)} title={l.title}>
                {l.label}
              </Link>
            ))}
            <a
              href="tel:+33767751898"
              title="Appeler SPM Taxi"
              className="ml-4 flex items-center gap-2 rounded-full border border-white/22 text-white px-5 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 hover:bg-white hover:text-black hover:scale-[1.04] active:scale-95"
            >
              <Phone className="h-3 w-3" /> Appeler
            </a>
          </div>

          {/* Mobile buttons */}
          <div className="flex items-center gap-2.5 md:hidden">
            <a
              href="tel:+33767751898"
              title="Appeler SPM Taxi"
              className="flex h-9 w-9 items-center justify-center rounded-full border border-white/22 text-white active:scale-90 transition-transform"
            >
              <Phone className="h-3.5 w-3.5" />
            </a>
            <button
              className="grid h-9 w-9 place-items-center rounded-full border border-white/22 text-white"
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label={menuOpen ? "Fermer le menu" : "Ouvrir le menu"}
            >
              <span className={`transition-all duration-200 ${menuOpen ? "rotate-90 scale-90" : "rotate-0 scale-100"}`}>
                {menuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
              </span>
            </button>
          </div>
        </nav>

        {/* Mobile menu — CSS grid trick for height:auto animation */}
        <div
          className="md:hidden border-b border-white/[0.06] bg-black/95 backdrop-blur-xl overflow-hidden transition-[grid-template-rows] duration-[380ms] ease-[cubic-bezier(0.16,1,0.3,1)]"
          style={{ display: "grid", gridTemplateRows: menuOpen ? "1fr" : "0fr" }}
        >
          <div className="overflow-hidden">
            <div className="flex flex-col gap-1 px-4 py-4">
              {navLinks.map((l, i) => {
                const active = !l.href.startsWith("/#") && pathname === l.href;
                return (
                  <Link
                    key={l.href}
                    href={l.href}
                    title={l.title}
                    className={`flex items-center justify-between rounded-2xl px-5 py-4 text-[13px] font-medium tracking-wide transition-colors text-white/70 hover:bg-white/[0.05] hover:text-white${active ? " bg-white/[0.07] !text-white" : ""}`}
                    onClick={() => setMenuOpen(false)}
                  >
                    <span>{l.label}</span>
                    <span className="text-[10px] font-bold tracking-[0.25em] uppercase text-white/20">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                  </Link>
                );
              })}
              <div className="mt-2 pt-2 border-t border-white/[0.06]">
                <a
                  href="tel:+33767751898"
                  title="Appeler SPM Taxi"
                  className="flex items-center gap-3 rounded-2xl bg-white px-5 py-4 text-[13px] font-semibold text-black active:bg-white/90"
                  onClick={() => setMenuOpen(false)}
                >
                  <div className="grid h-7 w-7 place-items-center rounded-full bg-black">
                    <Phone className="h-3.5 w-3.5 text-white" />
                  </div>
                  <span>Appeler maintenant</span>
                </a>
              </div>
            </div>
          </div>
        </div>
      </header>
    </>
  );
}
