"use client";

import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, Menu, X } from "lucide-react";

const leftLinks = [
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
];

const rightLinks = [
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [onHero,    setOnHero]    = useState(true);
  const [scrolled,  setScrolled]  = useState(false);
  const [progress,  setProgress]  = useState(0);
  const [menuOpen,  setMenuOpen]  = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const vh   = window.innerHeight;
      const y    = window.scrollY;
      const docH = document.documentElement.scrollHeight - vh;
      setProgress(docH > 0 ? (y / docH) * 100 : 0);
      setOnHero(y < vh * 0.85);
      setScrolled(y > 24);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !onHero;

  const linkClass = `relative text-[11px] font-semibold tracking-[0.18em] uppercase transition-colors duration-300
    after:absolute after:-bottom-px after:left-0 after:h-px after:w-0 after:bg-current
    after:transition-[width] after:duration-300 hover:after:w-full ${
    isLight ? "text-black/45 hover:text-black" : "text-white/45 hover:text-white"
  }`;

  return (
    <>
      {/* Barre de progression */}
      <div
        className="fixed left-0 top-0 z-[70] h-[2px] transition-[width] duration-75"
        style={{ width: `${progress}%`, background: isLight ? "#111" : "#e8ff3d" }}
      />

      <motion.header
        className="fixed left-0 right-0 top-0 z-50 w-full"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.85, delay: 2.6, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={`flex items-center px-6 py-4 transition-all duration-500 md:px-10 ${
            scrolled
              ? isLight
                ? "border-b border-black/5 bg-white/93 shadow-[0_1px_0_0_rgba(0,0,0,0.03)] backdrop-blur-xl"
                : "border-b border-white/6 bg-[#1a1c1e]/85 backdrop-blur-xl"
              : "bg-transparent"
          }`}
        >
          {/* ── GAUCHE : liens serrés près du logo ── */}
          <div className="hidden items-center justify-end gap-6 md:flex md:flex-1 md:pr-8">
            {leftLinks.map((l) => (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
          </div>

          {/* ── CENTRE : logo (dans le flux, pas absolu) ── */}
          <a
            href="#accueil"
            className="flex shrink-0 flex-col items-center gap-[3px] mx-auto md:mx-0"
          >
            <div className={`h-[11px] w-[22px] rounded-t-full border-t-[2px] border-x-[2px] transition-colors duration-300 ${
              isLight ? "border-black/70" : "border-white/75"
            }`} />
            <div className={`h-[11px] w-[22px] rounded-b-full border-b-[2px] border-x-[2px] transition-colors duration-300 ${
              isLight ? "border-black/70" : "border-white/75"
            }`} />
            <span className={`text-[7px] font-black tracking-[0.35em] uppercase transition-colors duration-300 ${
              isLight ? "text-black/55" : "text-white/55"
            }`}>
              SPM
            </span>
          </a>

          {/* ── DROITE : liens + CTA serrés près du logo ── */}
          <div className="hidden items-center justify-start gap-6 md:flex md:flex-1 md:pl-8">
            {rightLinks.map((l) => (
              <a key={l.href} href={l.href} className={linkClass}>
                {l.label}
              </a>
            ))}
            <a
              href="tel:0600000000"
              className={`ml-3 flex items-center gap-2 rounded-full border px-4 py-1.5 text-[11px] font-semibold tracking-[0.18em] uppercase transition-all duration-300 ${
                isLight
                  ? "border-black/22 text-black hover:bg-black hover:text-white"
                  : "border-white/15 text-white hover:bg-white hover:text-black"
              }`}
            >
              <Phone className="h-3 w-3" /> Appeler
            </a>
          </div>

          {/* ── MOBILE : phone + burger ── */}
          <div className="flex items-center gap-2 md:hidden">
            <a
              href="tel:0600000000"
              className={`flex h-8 w-8 items-center justify-center rounded-full border transition-all duration-300 ${
                isLight ? "border-black/18 text-black" : "border-white/15 text-white"
              }`}
            >
              <Phone className="h-3.5 w-3.5" />
            </a>
            <button
              className={`grid h-8 w-8 place-items-center rounded-full border transition-colors duration-300 ${
                isLight ? "border-black/15 text-black" : "border-white/15 text-white"
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

        {/* ── MENU MOBILE ── */}
        <AnimatePresence>
          {menuOpen && (
            <motion.div
              className={`border-b md:hidden backdrop-blur-xl overflow-hidden ${
                isLight ? "border-black/5 bg-white/96" : "border-white/5 bg-[#1a1c1e]/96"
              }`}
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.32, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="flex flex-col gap-0.5 px-5 py-5">
                {[...leftLinks, ...rightLinks].map((l, i) => (
                  <motion.a
                    key={l.href}
                    href={l.href}
                    className={`rounded-xl px-4 py-3.5 text-sm font-medium tracking-wide transition-colors ${
                      isLight
                        ? "text-black/65 hover:bg-black/4 hover:text-black"
                        : "text-white/65 hover:bg-white/5 hover:text-white"
                    }`}
                    onClick={() => setMenuOpen(false)}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.06, duration: 0.28 }}
                  >
                    {l.label}
                  </motion.a>
                ))}
                <motion.a
                  href="tel:0600000000"
                  className="mt-2 flex items-center gap-2.5 rounded-xl bg-black px-5 py-4 text-sm font-semibold text-white"
                  onClick={() => setMenuOpen(false)}
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.24, duration: 0.28 }}
                >
                  <Phone className="h-4 w-4" /> Appeler maintenant
                </motion.a>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.header>
    </>
  );
}
