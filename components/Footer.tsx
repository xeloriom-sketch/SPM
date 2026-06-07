import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Zone", href: "#zone" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="w-full bg-dark px-6 py-16 sm:px-10 lg:px-16">
      <div className="max-w-[1440px] mx-auto">
        <div className="grid grid-cols-1 gap-12 border-b border-white/8 pb-12 lg:grid-cols-[1.8fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
            <a href="#accueil" className="flex items-center gap-2.5 mb-5">
              <div className="grid h-8 w-8 place-items-center rounded-full bg-lime">
                <svg className="h-4 w-4 text-dark" viewBox="0 0 24 24" fill="none">
                  <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
                  <circle cx="7" cy="16" r="1" fill="currentColor"/><circle cx="17" cy="16" r="1" fill="currentColor"/>
                </svg>
              </div>
              <div>
                <span className="font-sans text-sm font-bold text-white">Taxi Tignieu</span>
                <span className="ml-2 rounded-full bg-white/8 px-2 py-0.5 text-[10px] text-white/40">Conventionné</span>
              </div>
            </a>
            <p className="text-sm leading-relaxed text-white/35 max-w-xs">
              Taxi conventionné basé à Tignieu-Jameyzieu. Volkswagen Tiguan 7 places.
              Disponible 7j/7 pour tous vos déplacements.
            </p>
            <div className="mt-6 flex flex-col gap-2.5">
              <a href="tel:0600000000" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                <Phone className="h-3.5 w-3.5 text-lime/60" /> 06 XX XX XX XX
              </a>
              <a href="mailto:contact@taxi-tignieu.fr" className="flex items-center gap-2 text-sm text-white/40 hover:text-white transition-colors">
                <Mail className="h-3.5 w-3.5 text-lime/60" /> contact@taxi-tignieu.fr
              </a>
              <span className="flex items-start gap-2 text-sm text-white/40">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime/60" />
                Tignieu-Jameyzieu · Ain · France
              </span>
            </div>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Navigation</h4>
            <ul className="flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-white/40 hover:text-white transition-colors">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Services</h4>
            <ul className="flex flex-col gap-3 text-sm text-white/40">
              {["Transfert aéroport", "Transfert gare", "Transport médical", "Colis urgents", "Remorque", "Longue distance"].map((s) => (
                <li key={s}>{s}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-xs font-semibold uppercase tracking-widest text-white/30 mb-4">Légal</h4>
            <ul className="flex flex-col gap-3">
              {["Mentions légales", "Politique de confidentialité", "CGV"].map((l) => (
                <li key={l}>
                  <a href="#" className="text-sm text-white/40 hover:text-white transition-colors">{l}</a>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-white/8 p-3 text-xs text-white/25 leading-relaxed">
              Taxi conventionné CPAM<br />
              Carte professionnelle valide<br />
              N° SIRET : XXXXXXXXX
            </div>
          </div>
        </div>

        <div className="mt-8 flex flex-col items-center gap-2 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-white/20">© 2026 Taxi Tignieu. Tous droits réservés.</p>
          <p className="text-xs text-white/20">Tignieu-Jameyzieu · Lyon · Ain · Isère</p>
        </div>
      </div>
    </footer>
  );
}
