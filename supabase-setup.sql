-- Exécuter ce SQL dans Supabase > SQL Editor

CREATE TABLE IF NOT EXISTS contact_messages (
  id TEXT PRIMARY KEY DEFAULT gen_random_uuid()::text,
  name TEXT NOT NULL,
  phone TEXT NOT NULL,
  email TEXT NOT NULL,
  service TEXT NOT NULL,
  date TEXT,
  message TEXT,
  read BOOLEAN DEFAULT false,
  created_at TIMESTAMPTZ DEFAULT now()
);

CREATE TABLE IF NOT EXISTS settings (
  key TEXT PRIMARY KEY,
  value TEXT NOT NULL
);

-- Désactiver RLS pour ces tables (accès interne uniquement)
ALTER TABLE contact_messages DISABLE ROW LEVEL SECURITY;
ALTER TABLE settings DISABLE ROW LEVEL SECURITY;

-- Données initiales pour le contenu éditable
INSERT INTO settings (key, value) VALUES
  ('contact_phone', '"06 XX XX XX XX"'),
  ('contact_email', '"contact@taxi-tignieu.fr"'),
  ('contact_address', '"Tignieu-Jameyzieu, Ain (01)"'),
  ('hero_badge', '"Disponible 7j/7 — 24h/24"'),
  ('hero_title', '"Taxi Conventionné<br />Lyon · Ain · Isère"'),
  ('hero_subtitle', '"Taxi conventionné de Tignieu-Jameyzieu. Transferts gare & aéroport, transport de colis urgents, remorque à disposition. Volkswagen Tiguan 7 places."')
ON CONFLICT (key) DO NOTHING;
