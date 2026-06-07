"use client";

import { useState } from "react";
import { signIn } from "next-auth/react";
import { useRouter, useSearchParams } from "next/navigation";
import { Eye, EyeOff, LogIn, Loader2 } from "lucide-react";
import { Suspense } from "react";

function LoginForm() {
  const router = useRouter();
  const params = useSearchParams();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(params.get("error") ? "Identifiants incorrects." : "");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const res = await signIn("credentials", {
      email,
      password,
      redirect: false,
    });
    setLoading(false);
    if (res?.error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      router.push("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Logo */}
        <div className="flex items-center gap-2.5 mb-10">
          <svg className="h-7 w-7" viewBox="0 0 24 24" fill="none">
            <path d="M3 13.5L5.2 6.8C5.5 5.7 6.5 5 7.6 5h8.8c1.1 0 2.1.7 2.4 1.8L21 13.5M3 13.5h18M3 13.5v4.5c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-1.5h10V18c0 .6.4 1 1 1h2c.6 0 1-.4 1-1v-4.5" stroke="#b6f000" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round"/>
            <circle cx="7" cy="16" r="1" fill="#b6f000"/><circle cx="17" cy="16" r="1" fill="#b6f000"/>
          </svg>
          <div>
            <p className="font-display text-base font-bold">Taxi Tignieu</p>
            <p className="text-[10px] text-mutedc">Espace Administration</p>
          </div>
        </div>

        <div className="rounded-3xl border border-borderc bg-surface p-7">
          <h1 className="font-display text-xl font-bold mb-1">Connexion</h1>
          <p className="text-sm text-mutedc mb-6">Accès réservé à l'administrateur.</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="email">
                Email
              </label>
              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@taxi-tignieu.fr"
                className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 text-sm outline-none focus:border-lime/50 focus:ring-1 focus:ring-lime/20 transition"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-xs font-medium text-mutedc" htmlFor="password">
                Mot de passe
              </label>
              <div className="relative">
                <input
                  id="password"
                  type={showPw ? "text" : "password"}
                  required
                  autoComplete="current-password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-borderc bg-surface2 px-4 py-2.5 pr-10 text-sm outline-none focus:border-lime/50 focus:ring-1 focus:ring-lime/20 transition"
                />
                <button
                  type="button"
                  onClick={() => setShowPw(!showPw)}
                  className="absolute right-3 top-1/2 -translate-y-1/2 text-mutedc hover:text-foreground transition-colors"
                >
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-500/10 border border-red-500/20 px-4 py-2.5 text-sm text-red-400">
                {error}
              </p>
            )}

            <button
              type="submit"
              disabled={loading}
              className="flex items-center justify-center gap-2 rounded-full bg-lime py-2.5 text-sm font-semibold text-black transition-all hover:brightness-105 disabled:opacity-60 mt-1"
            >
              {loading ? <Loader2 className="h-4 w-4 animate-spin" /> : <LogIn className="h-4 w-4" />}
              {loading ? "Connexion…" : "Se connecter"}
            </button>
          </form>
        </div>

        <a href="/" className="mt-6 block text-center text-xs text-mutedc hover:text-foreground transition-colors">
          ← Retour au site
        </a>
      </div>
    </div>
  );
}

export default function LoginPage() {
  return (
    <Suspense>
      <LoginForm />
    </Suspense>
  );
}
