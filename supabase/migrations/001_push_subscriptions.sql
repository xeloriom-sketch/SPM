-- Table pour stocker les abonnements push Web Push (VAPID)
create table if not exists push_subscriptions (
  id          uuid primary key default gen_random_uuid(),
  endpoint    text unique not null,
  p256dh      text not null,
  auth        text not null,
  created_at  timestamptz default now()
);

-- Sécurité : seul le service role (server-side) peut lire/écrire
alter table push_subscriptions enable row level security;
create policy "Service role only" on push_subscriptions using (false);
