# SPM Taxi — spm-taxi.fr

Site vitrine + espace admin pour un taxi conventionné basé à Tignieu-Jameyzieu (Ain 01).

---

## Stack technique

| Couche | Technologie |
|--------|-------------|
| Framework | Next.js 14 (App Router) |
| Langage | TypeScript |
| Style | Tailwind CSS |
| Animations | Framer Motion + Lenis (smooth scroll) |
| Auth admin | NextAuth.js (credentials JWT) |
| DB locale | Prisma + SQLite (`dev.db`) |
| DB production | Supabase (messages, push subscriptions, realtime) |
| Notifications push | Web Push API + Supabase Edge Function (`send-push`) |
| Hébergement | IONOS — serveur Apache mutualisé (export statique) |

---

## Architecture

Le site est exporté en **HTML statique** (`next export`) puis uploadé en FTP sur IONOS.  
Il n'y a **pas de serveur Node.js en production** — Apache sert les fichiers du dossier `out/`.

Les fonctionnalités dynamiques passent par **Supabase** (côté client) :
- Messages de contact → table `contact_messages` Supabase
- Notifications push → table `push_subscriptions` + Edge Function `send-push`
- Dashboard admin → Supabase Realtime pour les mises à jour en temps réel

L'authentification admin (`/admin/`) repose sur NextAuth en mode JWT — compatible avec l'export statique.

```
Client (navigateur)
  │
  ├── Pages statiques (HTML/CSS/JS)  ←─ servis par Apache IONOS
  │
  ├── Supabase JS (browser)          ←─ messages, realtime, push subscriptions
  │
  └── Supabase Edge Function         ←─ send-push (notifications Web Push)
```

---

## Déploiement — IONOS (production)

> **Ne jamais faire `git push` pour déployer.** Le dépôt GitHub est un backup de code, pas un pipeline CI/CD actif. Le déploiement est **manuel via SFTP/lftp**.

### Credentials SFTP

| Paramètre | Valeur |
|-----------|--------|
| Host | `access-5020649434.webspace-host.com` |
| User | `su639093` |
| Port | `22` (SFTP) |
| Mot de passe | dans `.env` → `FTPPASSWORD` |

### Étapes

```bash
# 1. Build statique production (génère le dossier out/)
NEXT_PUBLIC_STATIC=prod npm run build

# 2. Upload en deux passes : _next/ d'abord (assets hashés JS/CSS),
#    puis le reste (HTML) — évite les 404 CSS pendant le transfert
lftp -u su639093,MOTDEPASSE sftp://access-5020649434.webspace-host.com:22 \
  -e "set sftp:auto-confirm yes; mirror -R out/_next public_html/_next; quit"

lftp -u su639093,MOTDEPASSE sftp://access-5020649434.webspace-host.com:22 \
  -e "set sftp:auto-confirm yes; mirror -R out public_html; quit"
```

> Le chemin racine SFTP est le home du compte. La racine web Apache est **`public_html/`** (et non `httpdocs/`).

### Ce que fait le build prod

- `output: "export"` → génère `out/` (HTML statique)
- `trailingSlash: true` → chaque page devient un dossier `/page/index.html` (compatible Apache `DirectoryIndex`)
- Images non optimisées (`unoptimized: true`) — pas de serveur image Next.js
- Le `.htaccess` dans `out/` est copié vers `public_html/.htaccess` au moment de l'upload

---

## Structure du serveur IONOS (état au 11 juin 2025)

Connexion : `sftp://su639093@access-5020649434.webspace-host.com:22`

```
/ (home SFTP su639093)
├── public/               ← vide (non utilisé, dossier IONOS par défaut)
└── public_html/          ← RACINE WEB Apache (= contenu du dossier out/)
    ├── .htaccess         ← config Apache (HTTPS, cache, sécurité, rewrite)
    ├── index.html        ← page d'accueil (188 Ko)
    ├── index.txt         ← version texte (utilisé par llms.txt / IA)
    ├── sitemap.xml
    ├── robots.txt
    ├── llms.txt
    ├── sw.js             ← Service Worker (notifications push)
    ├── manifest.json     ← PWA manifest site principal
    ├── manifest-admin.json ← PWA manifest admin (start_url: /admin/dashboard)
    ├── favicon.svg / favicon-16.png / favicon-32.png / apple-touch-icon.png
    ├── og-image.jpeg
    ├── 404.html / 500.html
    │
    ├── _next/            ← assets Next.js (JS/CSS hashés, ~50 chunks)
    │   └── static/       ← chunks JS/CSS + media
    │       ├── chunks/   ← code JS splitté par page
    │       ├── css/      ← feuilles de style compilées
    │       └── media/    ← fonts, SVGs inline
    │
    ├── image/            ← images du site (webp optimisés + PNG originaux)
    │   ├── tiguan-hero.webp / tiguan-front.webp / tiguan-side.webp …
    │   ├── airport-terminal.webp / medical-transport.webp …
    │   └── volkswagen-tiguan-r-line.webp
    │
    ├── videos/           ← vidéos (hébergées sur serveur, pas CDN)
    │   ├── hero.mp4 (8,4 Mo) / hero-web.mp4 (6,3 Mo)
    │   ├── 11661703-uhd_3840_2160_24fps.mp4 (25 Mo) / 11661703-web.mp4 (3,3 Mo)
    │   ├── 7440442-hd_1920_1080_25fps.mp4 (11 Mo) / 7440442-web.mp4 (1,3 Mo)
    │   └── (chaque vidéo a une version -web.mp4 allégée pour mobile)
    │
    ├── admin/            ← espace admin (protégé par NextAuth JWT)
    │   ├── index.html    ← redirect vers /admin/login
    │   ├── login/        ← page de connexion
    │   ├── dashboard/    ← tableau de bord + push notifs
    │   ├── messages/     ← liste des messages clients (Supabase Realtime)
    │   └── content/      ← éditeur de contenu
    │
    ├── a-propos/         ← page + répertoire (trailingSlash)
    ├── services/
    ├── tarifs/
    ├── carte-de-visite/
    ├── taxi-tignieu-jameyzieu/
    ├── taxi-lyon/
    ├── taxi-conventionné-cpam/
    ├── taxi-longue-distance/
    ├── taxi-remorque-ain/
    └── transfert-aeroport-lyon/
```

### Observations importantes sur l'état du serveur

- **Fichiers mixtes datés** : certaines pages HTML à la racine (`a-propos.html`, `services.html`…) datent du 9 juin tandis que les dossiers (`admin/`, `taxi-lyon/`…) datent du 11 juin. Cela vient de l'historique des déploiements partiels — ces `.html` à la racine sont des **artefacts d'anciens builds** sans `trailingSlash`, ils ne sont plus servis activement (Apache utilise `DirectoryIndex index.html` dans le sous-dossier).
- **Les `.txt` à la racine** (`index.txt`, `a-propos.txt`…) sont les pages brutes sans HTML générées par Next.js — référencées dans `llms.txt` pour les IA.
- **`_next/` contient ~50 dossiers** de chunks hashés correspondant à plusieurs builds successifs — seul le build le plus récent est actif, les anciens chunks sont ignorés mais occupent de l'espace.
- **`public/`** (au niveau SFTP) est vide — c'est un dossier IONOS par défaut, ne pas confondre avec `public_html/`.

### Serveur Apache IONOS — points clés du `.htaccess`

- Redirection HTTP → HTTPS (301)
- Suppression du `www` (redirect vers domaine nu `spm-taxi.fr`)
- Fallback URL : `/page` → `/page.html` si le fichier `.html` existe (rétrocompat)
- Headers sécurité (HSTS 1 an, X-Frame-Options, X-XSS-Protection…)
- Cache navigateur : 1 an immutable sur JS/CSS, 1 an sur images/vidéos, pas de cache sur HTML
- Compression Gzip via `mod_deflate`
- Pages d'erreur : `404.html`, `500.html`
- Fichiers sensibles bloqués (`.env`, `package.json`, `tsconfig.json`)

---

## Développement local

### Prérequis

- Node.js 20+
- Un projet Supabase (pour l'admin et les push notifs)

### Installation

```bash
npm install
cp .env.example .env
# Remplir .env avec les vraies valeurs
npx prisma migrate dev   # crée dev.db
npm run dev              # http://localhost:3000
```

### Variables d'environnement

| Variable | Description |
|----------|-------------|
| `DATABASE_URL` | Chemin SQLite local (`file:./dev.db`) |
| `SUPABASE_URL` | URL du projet Supabase |
| `SUPABASE_ANON_KEY` | Clé publique Supabase |
| `SUPABASE_SERVICE_ROLE_KEY` | Clé service Supabase (admin uniquement) |
| `NEXTAUTH_URL` | URL du site (`http://localhost:3000` en dev) |
| `NEXTAUTH_SECRET` | Secret JWT NextAuth (`openssl rand -base64 32`) |
| `ADMIN_EMAIL` | Email de connexion admin |
| `ADMIN_PASSWORD` | Mot de passe admin (texte brut ou hash bcrypt) |
| `SMTP_HOST` / `SMTP_PORT` / `SMTP_USER` / `SMTP_PASS` | Config email sortant |
| `SMTP_FROM` / `CONTACT_EMAIL` | Expéditeur et destinataire des formulaires |

---

## Modes de build

| Commande | Usage |
|----------|-------|
| `npm run build` | Build standard Next.js (mode serveur, pour tests locaux) |
| `NEXT_PUBLIC_STATIC=prod npm run build` | **Build IONOS** — export statique sans basePath |
| `NEXT_PUBLIC_STATIC=1 npm run build` | Build GitHub Pages — basePath `/SPM` |

---

## Structure des dossiers

```
app/                  Pages Next.js (App Router)
  admin/              Espace admin protégé (NextAuth)
  actions/            Server Actions (contact, messages, settings)
  (pages SEO)/        Pages de contenu (taxi-lyon, tarifs, etc.)
components/           Composants React
  admin/              Composants dashboard admin
  pages/              Contenu des sous-pages
  ui/                 UI générique
lib/                  Utilitaires (auth, db, supabase, push…)
public/               Assets statiques (images, vidéos, manifests, sw.js)
out/                  Build statique produit par next export → à uploader en FTP
supabase/
  functions/send-push  Edge Function Deno pour Web Push
  migrations/          Migrations SQL Supabase
prisma/               Schéma + migrations SQLite (dev local uniquement)
```

---

## Pages du site

| Route | Description |
|-------|-------------|
| `/` | Accueil — hero vidéo, services, tarifs, témoignages |
| `/a-propos` | À propos du chauffeur |
| `/services` | Détail des prestations |
| `/tarifs` | Grille tarifaire |
| `/taxi-tignieu-jameyzieu` | Page SEO locale |
| `/taxi-lyon` | Page SEO Lyon (fort volume) |
| `/taxi-conventionné-cpam` | Transport médical CPAM |
| `/taxi-longue-distance` | Longues distances |
| `/taxi-remorque-ain` | Remorquage Ain |
| `/transfert-aeroport-lyon` | Aéroports Lyon |
| `/carte-de-visite` | Carte de visite digitale |
| `/admin/` | Dashboard admin (protégé) |

---

## Notifications push (admin)

1. Le chauffeur ouvre `/admin/dashboard` sur iPhone et accepte les notifications
2. La subscription est stockée dans `push_subscriptions` (Supabase)
3. Quand un client soumet le formulaire de contact, l'action appelle la Supabase Edge Function `send-push`
4. L'Edge Function envoie une notification Web Push à toutes les subscriptions actives
5. Les subscriptions expirées (404/410) sont nettoyées automatiquement
