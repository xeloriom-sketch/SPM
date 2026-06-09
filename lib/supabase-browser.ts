import { createClient } from "@supabase/supabase-js";

let _client: ReturnType<typeof createClient> | null = null;

export function getSupabase() {
  if (!_client) {
    _client = createClient(
      process.env.NEXT_PUBLIC_SUPABASE_URL!,
      process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY!,
      {
        auth: {
          persistSession: true,      // stocke la session dans localStorage
          autoRefreshToken: true,    // renouvelle le JWT avant expiration (même après fermeture)
          detectSessionInUrl: false, // pas nécessaire ici (pas de magic link)
          storageKey: "spm-admin",   // clé dédiée pour éviter les conflits
        },
      }
    );
  }
  return _client;
}
