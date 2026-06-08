"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Zone", href: "#zone" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const pageLinks = [
  { label: "Nos Services",  href: "/services" },
  { label: "Tarifs",        href: "/tarifs" },
  { label: "À Propos",      href: "/a-propos" },
];

const seoLinks = [
  { label: "Transfert Aéroport Lyon", href: "/transfert-aeroport-lyon" },
  { label: "Taxi Conventionné CPAM",  href: "/taxi-conventionné-cpam" },
  { label: "Longue Distance",         href: "/taxi-longue-distance" },
  { label: "Remorque & Colis",        href: "/taxi-remorque-ain" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "#" },
  { label: "Politique de Confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

export default function Footer() {
  return (
      <footer className="w-full bg-black text-white pt-14 sm:pt-20 pb-6 overflow-hidden font-sans relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

          {/* ── LIGNE SUPÉRIEURE : MARQUE & ACTIONS DISCRÈTES ── */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-12">
            {/* Logo et Identité à Gauche */}
            <a href="#accueil" className="flex items-center gap-3 group">
              <div className="grid h-7 w-7 place-items-center rounded-full bg-white text-black transition-transform duration-300 group-hover:scale-105">
                <svg className="h-4 w-4" viewBox="0 0 24 24" fill="none">
                  <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-sm font-medium tracking-widest uppercase">Taxi SPM</span>
                <span className="text-[9px] tracking-wider uppercase text-white/40">CPAM</span>
              </div>
            </a>

            {/* Coordonnées / Réseaux à Droite (Comme les icônes de l'image_49bac8.png) */}
            <div className="flex items-center gap-6 text-white/60">
              <a href="tel:0767751898" className="hover:text-white transition-colors" title="Téléphone">
                <Phone className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="mailto:contact@taxi-tignieu.fr" className="hover:text-white transition-colors" title="Email">
                <Mail className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Facebook className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="#" className="hover:text-white transition-colors">
                <Instagram className="h-4 w-4 stroke-[1.5]" />
              </a>
            </div>
          </div>

          {/* ── BLOC CENTRAL : NAVIGATION SYMÉTRIQUE ── */}
          <div className="flex flex-col items-center justify-center pt-10 sm:pt-16 pb-14 sm:pb-20 text-center">

            {/* Liens Principaux Horizontaux */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-3 sm:gap-x-8 sm:gap-y-4 mb-6">
              {navLinks.map((link) => (
                  <li key={link.href}>
                    <a
                        href={link.href}
                        className="text-sm sm:text-base text-white/80 font-normal hover:text-white transition-colors tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
              ))}
            </ul>

            {/* Pages */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-3">
              {pageLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[12px] text-white/60 font-medium hover:text-white transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Pages SEO */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
              {seoLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    className="text-[11px] text-white/40 font-normal hover:text-white/70 transition-colors tracking-wide"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>

            {/* Liens Légaux Secondaires Fins */}
            <ul className="flex flex-wrap items-center justify-center gap-x-6 gap-y-2 mb-4">
              {legalLinks.map((link, idx) => (
                  <li key={idx}>
                    <a
                        href={link.href}
                        className="text-[11px] text-white/40 font-normal hover:text-white/70 transition-colors tracking-wide"
                    >
                      {link.label}
                    </a>
                  </li>
              ))}
            </ul>

            {/* Notes administratives discrètes */}
            <p className="text-[10px] text-white/20 tracking-wider uppercase font-light">
              SIRET : XXXXXXXXXXXXXX · Véhicule Tiguan 7 Places
            </p>
          </div>

          {/* ── LIGNE DE COPYRIGHT INFÉRIEURE ── */}
          <div className="flex flex-col sm:flex-row items-center justify-between border-t border-white/5 pt-6 text-[11px] text-white/30 font-light tracking-wide">
            <p>© 2026 Taxi SPM. Tous droits réservés.</p>
            <p className="flex items-center gap-1">
              <MapPin className="h-3 w-3 stroke-[1.5]" /> Villebois · Ain (01)
            </p>
          </div>

          {/* ── MOT GEANT EN ARRIÈRE-PLAN (Fidèle à l'effet EMPOWER de l'image_49bac8.png) ── */}
          <div className="absolute inset-x-0 bottom-0 flex justify-center pointer-events-none select-none z-0 translate-y-6 sm:translate-y-12 lg:translate-y-16">
          <span className="text-[16vw] font-black tracking-widest text-white/[0.025] leading-none uppercase font-sans">
            Villebois
          </span>
          </div>

        </div>
      </footer>
  );
}