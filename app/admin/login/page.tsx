"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { Eye, EyeOff, LogIn } from "lucide-react";
import { Suspense } from "react";
import { sitePath } from "@/lib/site-path";
import { getSupabase } from "@/lib/supabase-browser";

function LoginForm() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPw, setShowPw] = useState(false);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function onSubmit(e: React.FormEvent) {
    e.preventDefault();
    setError("");
    setLoading(true);
    const { error } = await getSupabase().auth.signInWithPassword({ email, password });
    setLoading(false);
    if (error) {
      setError("Email ou mot de passe incorrect.");
    } else {
      router.push("/admin/dashboard");
    }
  }

  return (
    <div className="min-h-screen bg-[#f8f9fa] flex items-center justify-center px-4">
      <div className="w-full max-w-sm">
        {/* Wordmark */}
        <div className="flex flex-col items-center mb-10">
          <div className="flex flex-col items-center gap-[3px] mb-3">
            <div className="h-[11px] w-[22px] rounded-t-full border-t-[2px] border-x-[2px] border-black/70" />
            <div className="h-[11px] w-[22px] rounded-b-full border-b-[2px] border-x-[2px] border-black/70" />
            <span className="text-[7px] font-black tracking-[0.35em] uppercase text-black/55">SPM</span>
          </div>
          <p className="text-xs text-black/35 tracking-[0.2em] uppercase font-medium">Espace Administration</p>
        </div>

        <div className="rounded-3xl border border-black/[0.07] bg-white p-7 shadow-sm">
          <h1 className="text-xl font-semibold tracking-tight text-black mb-1">Connexion</h1>
          <p className="text-sm text-black/40 mb-6">Accès réservé à l&apos;administrateur.</p>

          <form onSubmit={onSubmit} className="flex flex-col gap-4">
            <div>
              <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/35" htmlFor="email">Email</label>
              <input
                id="email" type="email" required autoComplete="email"
                value={email} onChange={(e) => setEmail(e.target.value)}
                placeholder="admin@spm-taxi.fr"
                className="w-full rounded-xl border border-black/[0.08] bg-[#f8f9fa] px-4 py-2.5 text-sm outline-none transition placeholder:text-black/20 focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"
              />
            </div>

            <div>
              <label className="mb-1.5 block text-[10px] font-bold tracking-wider uppercase text-black/35" htmlFor="password">Mot de passe</label>
              <div className="relative">
                <input
                  id="password" type={showPw ? "text" : "password"} required autoComplete="current-password"
                  value={password} onChange={(e) => setPassword(e.target.value)}
                  placeholder="••••••••"
                  className="w-full rounded-xl border border-black/[0.08] bg-[#f8f9fa] px-4 py-2.5 pr-10 text-sm outline-none transition placeholder:text-black/20 focus:border-black/30 focus:bg-white focus:ring-2 focus:ring-black/5"
                />
                <button type="button" onClick={() => setShowPw(!showPw)} className="absolute right-3 top-1/2 -translate-y-1/2 text-black/30 hover:text-black transition-colors">
                  {showPw ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                </button>
              </div>
            </div>

            {error && (
              <p className="rounded-xl bg-red-50 border border-red-100 px-4 py-2.5 text-sm text-red-600">{error}</p>
            )}

            <button
              type="submit" disabled={loading}
              className="flex items-center justify-center gap-2 rounded-full bg-black py-2.5 text-sm font-semibold text-white transition hover:bg-black/85 disabled:opacity-60 mt-1"
            >
              {loading ? <><svg className="h-4 w-4 animate-spin" viewBox="0 0 24 24" fill="none"><circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="3" strokeDasharray="30 70" strokeLinecap="round"/></svg>Connexion…</> : <><LogIn className="h-4 w-4" />Se connecter</>}
            </button>
          </form>
        </div>

        <a href={sitePath("/")} className="mt-6 block text-center text-xs text-black/30 hover:text-black transition-colors">
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
