"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useSettings } from "@/lib/settings-context";
import Logo from "@/components/Logo";

const mainLinks = [
  { label: "Accueil",    href: "/",          title: "SPM Taxi — Accueil" },
  { label: "Services",   href: "/services",  title: "Services SPM Taxi" },
  { label: "Tarifs",     href: "/tarifs",    title: "Tarifs SPM Taxi — Devis gratuit" },
  { label: "À Propos",   href: "/a-propos",  title: "À propos de SPM Taxi" },
  { label: "FAQ",        href: "/#faq",      title: "Questions fréquentes — SPM Taxi" },
  { label: "Contact",    href: "/#contact",  title: "Contacter SPM Taxi" },
];

const serviceLinks = [
  { label: "Transfert Aéroport Lyon", href: "/transfert-aeroport-lyon",  title: "Transfert taxi aéroport Lyon Saint-Exupéry" },
  { label: "Taxi Conventionné CPAM",  href: "/taxi-conventionné-cpam",   title: "Taxi conventionné CPAM — Transport médical remboursé" },
  { label: "Longue Distance",         href: "/taxi-longue-distance",     title: "Taxi longue distance France entière" },
  { label: "Taxi avec Remorque",      href: "/taxi-remorque-ain",        title: "Taxi avec remorque et transport colis urgent" },
];

export default function Footer() {
  const s = useSettings();

  return (
    <footer className="w-full bg-black text-white pt-14 sm:pt-20 pb-6 overflow-hidden font-sans relative">
      <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

        {/* ── TOP : LOGO + CONTACT ── */}
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-12">
          <a href="/" title="SPM Taxi — Accueil" className="group">
            <Logo variant="dark" size="md" />
          </a>
          <div className="flex items-center gap-6 text-white/60">
            <a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`} className="hover:text-white transition-colors" title="Appeler SPM Taxi">
              <Phone className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a href={`mailto:${s.contact_email}`} className="hover:text-white transition-colors" title="Email SPM Taxi">
              <Mail className="h-4 w-4 stroke-[1.5]" />
            </a>
          </div>
        </div>

        {/* ── CENTRE : NAVIGATION ── */}
        <div className="flex flex-col items-center justify-center pt-10 sm:pt-16 pb-14 sm:pb-20 text-center">

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 mb-6">
            {mainLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.title}
                  className="text-sm sm:text-base text-white/80 font-normal hover:text-white transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

          <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
            {serviceLinks.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  title={link.title}
                  className="text-[11px] text-white/40 font-normal hover:text-white/70 transition-colors tracking-wide"
                >
                  {link.label}
                </a>
              </li>
            ))}
          </ul>

        </div>

        {/* ── BAS : COPYRIGHT ── */}
        <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 text-[11px] text-white/30 font-light tracking-wide">
          <p>© 2026 SPM Taxi. Tous droits réservés.</p>
          <div className="flex items-center gap-4">
            <p className="flex items-center gap-1">
              <MapPin className="h-3 w-3 stroke-[1.5]" /> Villebois · Ain (01)
            </p>
            <a
              href="https://www.alhambra-web.com"
              target="_blank"
              rel="noopener noreferrer"
              title="Site créé par Alhambra Web"
              className="hover:text-white/60 transition-colors"
            >
              Créé par Alhambra Web
            </a>
          </div>
        </div>

      </div>

      {/* ── MOT GÉANT FOND ── */}
      <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 translate-y-6 sm:translate-y-12 lg:translate-y-16">
        <span className="text-[16vw] font-black tracking-widest text-white/[0.025] leading-none uppercase font-sans">
          Villebois
        </span>
      </div>
    </footer>
  );
}
