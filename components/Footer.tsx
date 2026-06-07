import { Phone, Mail, MapPin } from "lucide-react";

const navLinks = [
  { label: "Accueil", href: "#accueil" },
  { label: "Services", href: "#services" },
  { label: "Véhicule", href: "#vehicule" },
  { label: "Zone de couverture", href: "#zone" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
];

const legalLinks = [
  { label: "Mentions légales", href: "#" },
  { label: "Politique de confidentialité", href: "#" },
  { label: "CGV", href: "#" },
];

export default function Footer() {
  return (
    <footer className="mt-24 border-t border-borderc">
      <div className="max-w-[1240px] mx-auto px-4 sm:px-6 py-14">
        <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.6fr_1fr_1fr_1fr]">
          {/* Brand */}
          <div>
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
                <span className="font-display text-base font-bold tracking-tight">Taxi Tignieu</span>
                <span className="text-[10px] text-mutedc">Conventionné</span>
              </div>
            </a>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-mutedc">
              Taxi conventionné basé à Tignieu-Jameyzieu. Transport de personnes, colis urgents,
              transferts gare & aéroport. Volkswagen Tiguan 7 places. Remorque disponible.
            </p>
            <div className="mt-5 flex flex-col gap-2.5">
              <a href="tel:0600000000" className="flex items-center gap-2 text-sm text-mutedc transition-colors hover:text-lime">
                <Phone className="h-3.5 w-3.5 text-lime" /> 06 XX XX XX XX
              </a>
              <a href="mailto:contact@taxi-tignieu.fr" className="flex items-center gap-2 text-sm text-mutedc transition-colors hover:text-lime">
                <Mail className="h-3.5 w-3.5 text-lime" /> contact@taxi-tignieu.fr
              </a>
              <span className="flex items-start gap-2 text-sm text-mutedc">
                <MapPin className="mt-0.5 h-3.5 w-3.5 shrink-0 text-lime" />
                Tignieu-Jameyzieu, Ain (01)<br />Lyon · Isère · France
              </span>
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h4 className="text-sm font-semibold">Navigation</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {navLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-mutedc transition-colors hover:text-lime">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-sm font-semibold">Services</h4>
            <ul className="mt-4 flex flex-col gap-3 text-sm text-mutedc">
              <li>Transfert aéroport</li>
              <li>Transfert gare</li>
              <li>Transport médical</li>
              <li>Colis urgents</li>
              <li>Remorque</li>
              <li>Longue distance</li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="text-sm font-semibold">Légal</h4>
            <ul className="mt-4 flex flex-col gap-3">
              {legalLinks.map((l) => (
                <li key={l.href}>
                  <a href={l.href} className="text-sm text-mutedc transition-colors hover:text-lime">
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
            <div className="mt-5 rounded-xl border border-borderc/50 bg-surface2 p-3 text-xs text-mutedc leading-relaxed">
              Taxi conventionné agrée CPAM<br />
              Carte professionnelle en cours<br />
              N° SIRET : XXXXXXXXX
            </div>
          </div>
        </div>

        <div className="mt-10 flex flex-col items-center gap-2 border-t border-borderc pt-6 text-center sm:flex-row sm:justify-between">
          <p className="text-xs text-mutedc">© 2026 Taxi Tignieu. Tous droits réservés.</p>
          <p className="text-xs text-mutedc">
            Tignieu-Jameyzieu · Lyon · Ain · Isère · France
          </p>
        </div>
      </div>
    </footer>
  );
}
