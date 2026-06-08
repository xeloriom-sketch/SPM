"use client";

import { useEffect, useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const navLinks = [
  { label: "Services",  href: "/services" },
  { label: "Tarifs",    href: "/tarifs" },
  { label: "À propos",  href: "/a-propos" },
  { label: "Contact",   href: "/#contact" },
];

export default function Navbar() {
  const pathname  = usePathname();
  const isHome    = pathname === "/";

  const [onHero,   setOnHero]   = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [menuOpen, setMenuOpen] = useState(false);

  // Reset state on navigation (client-side nav resets scroll to 0)
  useEffect(() => {
    const y = window.scrollY;
    setOnHero(y < window.innerHeight * 0.85);
    setScrolled(y > 24);
    setMenuOpen(false);
  }, [pathname]);

  useEffect(() => {
    const handle = () => {
      const vh   = window.innerHeight;
      const y    = window.scrollY;
      const docH = document.documentElement.scrollHeight - vh;
      setProgress(docH > 0 ? (y / docH) * 100 : 0);
      setOnHero(y < vh * 0.85);
      setScrolled(y > 24);
    };
    handle();
    window.addEventListener("scroll", handle, { passive: true });
    return () => window.removeEventListener("scroll", handle);
  }, []);

  const isLight = !onHero;
  const showBg  = scrolled;

  const linkCls = (href: string) => {
    const active = !href.startsWith("/#") && pathname === href;
    return [
      "relative text-[11px] font-semibold tracking-[0.22em] uppercase transition-colors duration-300",
      "after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-current",
      "after:transition-[width] after:duration-300 hover:after:w-full",
      active ? "after:!w-full" : "",
      isLight ? "text-black/50 hover:text-black" : "text-white/55 hover:text-white",
      active ? (isLight ? "!text-black" : "!text-white") : "",
    ].join(" ");
  };

  return (
    <>
      {/* Scroll progress bar */}
      <div
        className="fixed left-0 top-0 z-[70] h-[2px] transition-[width] duration-75"
        style={{ width: `${progress}%`, background: isLight ? "#111" : "#e8ff3d" }}
      />

      <motion.header
        className="fixed left-0 right-0 top-0 z-50 w-full"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay: isHome ? 2.6 : 0.15, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav className={`flex items-center px-6 py-4 transition-all duration-500 md:px-12 ${
          showBg
            ? isLight
              ? "border-b border-black/5 bg-white/94 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-xl"
              : "border-b border-white/6 bg-black/75 backdrop-blur-xl"
            : "bg-transparent"
        }`}>

          {/* Left links */}
          <div className="hidden items-center justify-end gap-10 md:flex md:flex-1 md:pr-10">
            {navLinks.slice(0, 2).map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)}>
                {l.label}
              </Link>
            ))}
          </div>

          {/* Logo */}
          <Link href="/" className="flex shrink-0 flex-col items-center gap-[3px] mx-auto md:mx-0">
            <div className={`h-[11px] w-[22px] rounded-t-full border-t-[2px] border-x-[2px] transition-colors duration-300 ${
              isLight ? "border-black/70" : "border-white/80"
            }`} />
            <div className={`h-[11px] w-[22px] rounded-b-full border-b-[2px] border-x-[2px] transition-colors duration-300 ${
              isLight ? "border-black/70" : "border-white/80"
            }`} />
            <span className={`text-[7px] font-black tracking-[0.35em] uppercase transition-colors duration-300 ${
              isLight ? "text-black/55" : "text-white/60"
            }`}>
              SPM
            </span>
          </Link>

          {/* Right links */}
          <div className="hidden items-center justify-start gap-10 md:flex md:flex-1 md:pl-10">
            {navLinks.slice(2).map((l) => (
              <Link key={l.href} href={l.href} className={linkCls(l.href)}>
                {l.label}
              </Link>
            ))}
            <motion.a
              href="tel:+33767751898"
              className={`ml-4 flex items-center gap-2 rounded-full border px-5 py-2 text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300 ${
                isLight
                  ? "border-black/22 text-black hover:bg-black hover:text-white"
                  : "border-white/20 text-white hover:bg-white hover:text-black"
              }`}
              whileHover={{ scale: 1.04 }}
              whileTap={{ scale: 0.95 }}
              transition={{ type: "spring", stiffness: 400, damping: 22 }}
            >
              <Phone className="h-3 w-3" /> Appeler
            </motion.a>
          </div>

          {/* Mobile */}
          <div className="flex items-center gap-2.5 md:hidden">
            <motion.a
              href="tel:+33767751898"
              className={`flex h-9 w-9 items-center justify-center rounded-full border transition-all duration-300 ${
                isLight ? "border-black/18 text-black" : "border-white/20 text-white"
              }`}
              whileTap={{ scale: 0.9 }}
            >
              <Phone className="h-3.5 w-3.5" />
            </motion.a>
            <button
              className={`grid h-9 w-9 place-items-center rounded-full border transition-colors duration-300 ${
                isLight ? "border-black/15 text-black" : "border-white/20 text-white"
              }`}
              onClick={() => setMenuOpen(!menuOpen)}
              aria-label="Menu"
            >
              <AnimatePresence mode="wait" initial={false}>
                <motion.div
                  key={menuOpen ? "x" : "m"}
                  initial={{ opacity: 0, rotate: -90, scale: 0.6 }}
                  animate={{ opacity: 1, rotate: 0, scale: 1 }}
                  exit={{ opacity: 0, rotate: 90, scale: 0.6 }}
                  transition={{ duration: 0.2 }}
                >
                  {menuOpen ? <X className="h-3.5 w-3.5" /> : <Menu className="h-3.5 w-3.5" />}
                </motion.div>
              </AnimatePresence>
            </button>
          </div>
        </nav>

        {/* Mobile menu */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`border-b md:hidden backdrop-blur-xl overflow-hidden ${
                isLight ? "border-black/5 bg-white/97" : "border-white/5 bg-[#0f1011]/97"
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.38, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-1 px-4 py-4">
                {navLinks.map((l, i) => {
                  const active = !l.href.startsWith("/#") && pathname === l.href;
                  return (
                    <motion.div
                      key={l.href}
                      initial={{ opacity: 0, x: -12 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.06, duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
                    >
                      <Link
                        href={l.href}
                        className={`flex items-center justify-between rounded-2xl px-5 py-4 text-[13px] font-medium tracking-wide transition-colors ${
                          isLight
                            ? `text-black/70 hover:bg-black/[0.04] hover:text-black${active ? " bg-black/[0.06] text-black" : ""}`
                            : `text-white/70 hover:bg-white/[0.05] hover:text-white${active ? " bg-white/[0.07] text-white" : ""}`
                        }`}
                        onClick={() => setMenuOpen(false)}
                      >
                        <span>{l.label}</span>
                        <span className={`text-[10px] font-bold tracking-[0.25em] uppercase ${isLight ? "text-black/20" : "text-white/20"}`}>
                          {String(i + 1).padStart(2, "0")}
                        </span>
                      </Link>
                    </motion.div>
                  );
                })}
                <motion.div
                  className="mt-2 pt-2 border-t border-black/[0.06]"
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.28, duration: 0.3 }}
                >
                  <a
                    href="tel:+33767751898"
                    className="flex items-center gap-3 rounded-2xl bg-black px-5 py-4 text-[13px] font-semibold text-white active:bg-black/80"
                    onClick={() => setMenuOpen(false)}
                  >
                    <div className="grid h-7 w-7 place-items-center rounded-full bg-white/10">
                      <Phone className="h-3.5 w-3.5" />
                    </div>
                    <span>Appeler maintenant</span>
                  </a>
                </motion.div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
