"use client";

import { Phone, Mail, MapPin } from "lucide-react";
import { useSettings } from "@/lib/settings-context";
import Logo from "@/components/Logo";

// Remplir avec les URLs réels une fois les comptes créés. Mettre "" pour masquer.
const SOCIAL_LINKS = {
  facebook:  "", // ex: "https://www.facebook.com/SPMTaxi"
  instagram: "", // ex: "https://www.instagram.com/SPMTaxi"
};

const mainLinks = [
  { label: "Accueil",    href: "/",          title: "SPM Taxi — Accueil" },
  { label: "Services",   href: "/services",  title: "Services SPM Taxi" },
  { label: "Tarifs",     href: "/tarifs",    title: "Tarifs SPM Taxi — Devis gratuit" },
  { label: "À Propos",   href: "/a-propos",  title: "À propos de SPM Taxi" },
  { label: "FAQ",        href: "/#faq",      title: "Questions fréquentes — SPM Taxi" },
  { label: "Contact",    href: "/#contact",  title: "Contacter SPM Taxi" },
];

const serviceLinks = [
  { label: "Transfert Aéroport Lyon", href: "/transfert-aeroport-lyon",    title: "Transfert taxi aéroport Lyon Saint-Exupéry" },
  { label: "Taxi Conventionné CPAM",  href: "/taxi-conventionné-cpam",     title: "Taxi conventionné CPAM — Transport médical remboursé" },
  { label: "Longue Distance",         href: "/taxi-longue-distance",       title: "Taxi longue distance France entière" },
  { label: "Taxi avec Remorque",      href: "/taxi-remorque-ain",          title: "Taxi avec remorque et transport colis urgent" },
  { label: "Taxi Tignieu-Jameyzieu",  href: "/taxi-tignieu-jameyzieu",     title: "Taxi à Tignieu-Jameyzieu — SPM Taxi" },
  { label: "Taxi Lyon",               href: "/taxi-lyon",                  title: "Taxi Lyon depuis l'Ain et l'Isère — SPM Taxi" },
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
          <div className="flex items-center gap-5 text-white/60">
            <a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`} className="hover:text-white transition-colors" title="Appeler SPM Taxi">
              <Phone className="h-4 w-4 stroke-[1.5]" />
            </a>
            <a href={`mailto:${s.contact_email}`} className="hover:text-white transition-colors" title="Email SPM Taxi">
              <Mail className="h-4 w-4 stroke-[1.5]" />
            </a>
            {SOCIAL_LINKS.facebook && (
              <a href={SOCIAL_LINKS.facebook} target="_blank" rel="noopener noreferrer" title="SPM Taxi sur Facebook" className="hover:text-white transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"/>
                </svg>
              </a>
            )}
            {SOCIAL_LINKS.instagram && (
              <a href={SOCIAL_LINKS.instagram} target="_blank" rel="noopener noreferrer" title="SPM Taxi sur Instagram" className="hover:text-white transition-colors">
                <svg className="h-4 w-4" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/>
                </svg>
              </a>
            )}
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
