import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Page introuvable — SPM Taxi",
  description: "Cette page n'existe pas. Retournez sur le site de SPM Taxi, taxi conventionné CPAM à Villebois (Ain 01).",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <div className="min-h-screen bg-[#0d0d0d] flex flex-col items-center justify-center px-6 text-white font-sans">
      {/* Fond grain */}
      <div
        className="pointer-events-none fixed inset-0 opacity-[0.03]"
        style={{
          backgroundImage:
            "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E\")",
          backgroundSize: "160px",
        }}
      />

      <div className="relative z-10 text-center max-w-lg">
        {/* Numéro */}
        <p
          className="font-black leading-none tracking-[-0.05em] text-white/[0.06] select-none"
          style={{ fontSize: "clamp(8rem, 25vw, 18rem)" }}
          aria-hidden="true"
        >
          404
        </p>

        {/* Contenu */}
        <div className="-mt-8 sm:-mt-14">
          {/* Badge */}
          <span className="inline-block rounded-full border border-white/10 px-4 py-1.5 text-[10px] font-semibold tracking-[0.3em] uppercase text-white/40 mb-6">
            Page introuvable
          </span>

          <h1 className="text-2xl sm:text-3xl font-semibold tracking-tight mb-4">
            Cette page n&apos;existe pas
          </h1>

          <p className="text-sm text-white/45 leading-relaxed mb-10 max-w-sm mx-auto">
            La page que vous cherchez a peut-être été déplacée ou supprimée.
            Retournez à l&apos;accueil ou contactez SPM Taxi directement.
          </p>

          {/* CTAs */}
          <div className="flex flex-wrap justify-center gap-3">
            <Link
              href="/"
              title="Retour à l'accueil SPM Taxi"
              className="inline-flex items-center gap-2 rounded-full bg-white text-black px-6 py-3 text-sm font-semibold hover:bg-white/90 transition-colors"
            >
              ← Retour à l&apos;accueil
            </Link>
            <a
              href="tel:+33767751898"
              title="Appeler SPM Taxi"
              className="inline-flex items-center gap-2 rounded-full border border-white/20 text-white px-6 py-3 text-sm font-semibold hover:border-white/40 transition-colors"
            >
              07 67 75 18 98
            </a>
          </div>
        </div>

        {/* Lime accent line */}
        <div className="mt-16 h-px w-16 bg-[#b6f000] mx-auto opacity-60" />

        <p className="mt-5 text-[10px] tracking-[0.25em] uppercase text-white/20">
          SPM Taxi · Villebois · Ain (01)
        </p>
      </div>
    </div>
  );
}
