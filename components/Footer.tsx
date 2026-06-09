"use client";

import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from "lucide-react";
import { useSettings } from "@/lib/settings-context";
import Logo from "@/components/Logo";

const navLinks = [
  { label: "Accueil",   href: "#accueil",  title: "Retour en haut de page — SPM Taxi" },
  { label: "Services",  href: "#services", title: "Services SPM Taxi — Aéroport, CPAM, Colis, Remorque" },
  { label: "Véhicule",  href: "#vehicule", title: "Notre véhicule — Volkswagen Tiguan 7 places" },
  { label: "Zone",      href: "#zone",     title: "Zone de couverture — Ain, Lyon, Isère, France" },
  { label: "FAQ",       href: "#faq",      title: "Questions fréquentes — SPM Taxi" },
  { label: "Contact",   href: "#contact",  title: "Contacter SPM Taxi — Demander un devis" },
];

const pageLinks = [
  { label: "Nos Services",  href: "/services",  title: "Services taxi SPM — Aéroport, CPAM, Colis, Remorque" },
  { label: "Tarifs",        href: "/tarifs",    title: "Tarifs taxi SPM — Devis gratuit" },
  { label: "À Propos",      href: "/a-propos",  title: "À propos de SPM Taxi — Chauffeur conventionné Villebois" },
];

const seoLinks = [
  { label: "Transfert Aéroport Lyon", href: "/transfert-aeroport-lyon",    title: "Transfert taxi aéroport Lyon Saint-Exupéry depuis l'Ain" },
  { label: "Taxi Conventionné CPAM",  href: "/taxi-conventionné-cpam",     title: "Taxi conventionné CPAM — Transport médical remboursé Ain" },
  { label: "Longue Distance",         href: "/taxi-longue-distance",       title: "Taxi longue distance France entière — SPM Ain" },
  { label: "Remorque & Colis",        href: "/taxi-remorque-ain",          title: "Taxi avec remorque et transport colis urgent — Ain" },
];

const legalLinks = [
  { label: "Mentions Légales", href: "#" },
  { label: "Politique de Confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

export default function Footer() {
  const s = useSettings();

  return (
      <footer className="w-full bg-black text-white pt-14 sm:pt-20 pb-6 overflow-hidden font-sans relative">
        <div className="max-w-[1440px] mx-auto px-6 sm:px-12 lg:px-20 relative z-10">

          {/* ── LIGNE SUPÉRIEURE : MARQUE & ACTIONS DISCRÈTES ── */}
          <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between border-b border-white/10 pb-12">
            {/* Logo et Identité à Gauche */}
            <a href="#accueil" title="SPM Taxi — Retour en haut" className="group">
              <Logo variant="dark" size="md" />
            </a>

            {/* Coordonnées / Réseaux à Droite (Comme les icônes de l'image_49bac8.png) */}
            <div className="flex items-center gap-6 text-white/60">
              <a href={`tel:${s.contact_phone.replace(/[\s.-]/g, "")}`} className="hover:text-white transition-colors" title="Téléphone">
                <Phone className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href={`mailto:${s.contact_email}`} className="hover:text-white transition-colors" title="Email">
                <Mail className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="#" title="SPM Taxi sur Facebook" className="hover:text-white transition-colors">
                <Facebook className="h-4 w-4 stroke-[1.5]" />
              </a>
              <a href="#" title="SPM Taxi sur Instagram" className="hover:text-white transition-colors">
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
                        title={link.title}
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
                    title={link.title}
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
                    title={link.title}
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
            <div className="flex items-center gap-4">
              <p className="flex items-center gap-1">
                <MapPin className="h-3 w-3 stroke-[1.5]" /> Villebois · Ain (01)
              </p>
              <a
                href="https://www.alhambra-web.com"
                target="_blank"
                rel="noopener noreferrer"
                title="Site créé par Alhambra Web — Agence web"
                className="hover:text-white/60 transition-colors"
              >
                Créé par Alhambra Web
              </a>
            </div>
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
