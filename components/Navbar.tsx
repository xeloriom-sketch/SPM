"use client";

import { useEffect, useState } from "react";
import { motion, useScroll, useTransform } from "framer-motion";
import { Phone } from "lucide-react";

const links = [
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Zone", href: "#zone" },
  { label: "Contact", href: "#contact" },
];

export default function Navbar() {
  const [isHeroVisible, setIsHeroVisible] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const onScroll = () => {
      const vh = window.innerHeight;
      const scrollY = window.scrollY;
      const docH = document.documentElement.scrollHeight - vh;
      setProgress(docH > 0 ? (scrollY / docH) * 100 : 0);
      setIsHeroVisible(scrollY < vh * 0.85);
      setScrolled(scrollY > 30);
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const isLight = !isHeroVisible;

  return (
    <>
      {/* Progress bar */}
      <div
        className="fixed top-0 left-0 h-[2px] z-[70] transition-[width] duration-100"
        style={{ width: `${progress}%`, background: isLight ? "#080808" : "#e8ff3d" }}
      />

      <motion.header
        className="fixed top-0 left-0 right-0 z-50"
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.7, delay: 1.5, ease: [0.16, 1, 0.3, 1] }}
      >
        <nav
          className={`flex items-center justify-between px-6 py-4 transition-all duration-500 sm:px-10 lg:px-16 ${
            scrolled
              ? isLight
                ? "bg-white/90 backdrop-blur-xl border-b border-borderc/50 shadow-sm"
                : "bg-dark/60 backdrop-blur-xl border-b border-white/5"
              : "bg-transparent"
          }`}
        >
          {/* Logo */}
          <a href="#accueil" className="flex items-center gap-2.5 group">
            <div className={`grid h-8 w-8 place-items-center rounded-full transition-colors duration-300 ${isLight ? "bg-dark" : "bg-white"}`}>
              <svg className={`h-4 w-4 ${isLight ? "text-white" : "text-dark"}`} viewBox="0 0 24 24" fill="none">
                <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                <circle cx="7" cy="16" r="1" fill="currentColor"/>
                <circle cx="17" cy="16" r="1" fill="currentColor"/>
              </svg>
            </div>
            <div>
              <span className={`font-sans text-sm font-bold tracking-tight transition-colors duration-300 ${isLight ? "text-dark" : "text-white"}`}>
                Taxi Tignieu
              </span>
            </div>
          </a>

          {/* Desktop nav */}
          <div className="hidden items-center gap-8 text-sm md:flex">
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`relative font-medium transition-colors duration-300 after:absolute after:left-0 after:bottom-[-4px] after:h-px after:w-0 after:transition-[width] after:duration-300 hover:after:w-full ${
                  isLight
                    ? "text-dark/50 hover:text-dark after:bg-dark"
                    : "text-white/50 hover:text-white after:bg-white"
                }`}
              >
                {l.label}
              </a>
            ))}
          </div>

          {/* CTA */}
          <a
            href="tel:0600000000"
            className={`group relative flex items-center gap-2 overflow-hidden rounded-full px-5 py-2.5 text-sm font-bold transition-all duration-300 ${
              isLight
                ? "bg-dark text-white hover:bg-dark/90"
                : "bg-white text-dark hover:bg-white/90"
            }`}

          >
            <Phone className="h-3.5 w-3.5" />
            <span className="hidden sm:inline">Appeler</span>
          </a>
        </nav>
      </motion.header>
    </>
  );
}
