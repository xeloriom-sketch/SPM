#!/usr/bin/env python3
"""
Google Indexing API — SPM Taxi
Usage: python3 scripts/google-index.py
Prérequis: compte de service ajouté comme Propriétaire dans Google Search Console
"""

import json, time, base64, hmac, hashlib, urllib.request, urllib.parse, os, sys

CREDENTIALS_FILE = os.path.join(os.path.dirname(__file__), "..", "spm-taxi-indexing-df03beff6128.json")

URLS = [
    "https://taxispm.fr/",
    "https://taxispm.fr/services/",
    "https://taxispm.fr/tarifs/",
    "https://taxispm.fr/a-propos/",
    "https://taxispm.fr/taxi-conventionne-cpam/",
    "https://taxispm.fr/transfert-aeroport-lyon/",
    "https://taxispm.fr/taxi-longue-distance/",
    "https://taxispm.fr/taxi-remorque-ain/",
    "https://taxispm.fr/taxi-lyon/",
    "https://taxispm.fr/taxi-belley/",
    "https://taxispm.fr/taxi-oyonnax/",
    "https://taxispm.fr/taxi-miribel/",
    "https://taxispm.fr/taxi-villars-les-dombes/",
    "https://taxispm.fr/taxi-perouges/",
    "https://taxispm.fr/taxi-gex/",
    "https://taxispm.fr/taxi-vienne/",
    "https://taxispm.fr/taxi-isle-d-abeau/",
    "https://taxispm.fr/taxi-amberieu-en-bugey/",
    "https://taxispm.fr/taxi-bourg-en-bresse/",
    "https://taxispm.fr/taxi-bourgoin-jallieu/",
    "https://taxispm.fr/taxi-charvieu-chavagneux/",
    "https://taxispm.fr/taxi-cremieu/",
    "https://taxispm.fr/taxi-la-tour-du-pin/",
    "https://taxispm.fr/taxi-lagnieu/",
    "https://taxispm.fr/taxi-meximieux/",
    "https://taxispm.fr/taxi-montluel/",
    "https://taxispm.fr/taxi-pont-de-cheruy/",
    "https://taxispm.fr/taxi-tignieu-jameyzieu/",
    "https://taxispm.fr/taxi-villebois/",
]

def b64url(data):
    if isinstance(data, str):
        data = data.encode()
    return base64.urlsafe_b64encode(data).rstrip(b"=").decode()

def make_jwt(creds):
    now = int(time.time())
    header = b64url(json.dumps({"alg": "RS256", "typ": "JWT"}))
    payload = b64url(json.dumps({
        "iss": creds["client_email"],
        "sub": creds["client_email"],
        "aud": "https://oauth2.googleapis.com/token",
        "scope": "https://www.googleapis.com/auth/indexing",
        "iat": now,
        "exp": now + 3600,
    }))
    msg = f"{header}.{payload}".encode()

    # RSA-SHA256 via openssl subprocess (no external libs needed)
    import subprocess, tempfile
    with tempfile.NamedTemporaryFile(suffix=".pem", delete=False, mode="w") as f:
        f.write(creds["private_key"])
        key_path = f.name
    with tempfile.NamedTemporaryFile(suffix=".bin", delete=False) as f:
        msg_path = f.name
        f.write(msg)
    sig_path = msg_path + ".sig"
    subprocess.run(
        ["openssl", "dgst", "-sha256", "-sign", key_path, "-out", sig_path, msg_path],
        check=True, capture_output=True
    )
    with open(sig_path, "rb") as f:
        sig = f.read()
    os.unlink(key_path); os.unlink(msg_path); os.unlink(sig_path)
    return f"{header}.{payload}.{b64url(sig)}"

def get_access_token(creds):
    jwt = make_jwt(creds)
    data = urllib.parse.urlencode({
        "grant_type": "urn:ietf:params:oauth:grant-type:jwt-bearer",
        "assertion": jwt,
    }).encode()
    req = urllib.request.Request("https://oauth2.googleapis.com/token", data=data)
    with urllib.request.urlopen(req) as r:
        return json.loads(r.read())["access_token"]

def notify_url(token, url):
    body = json.dumps({"url": url, "type": "URL_UPDATED"}).encode()
    req = urllib.request.Request(
        "https://indexing.googleapis.com/v3/urlNotifications:publish",
        data=body,
        headers={
            "Authorization": f"Bearer {token}",
            "Content-Type": "application/json",
        }
    )
    try:
        with urllib.request.urlopen(req) as r:
            result = json.loads(r.read())
            return True, result.get("urlNotificationMetadata", {}).get("latestUpdate", {}).get("url", url)
    except urllib.error.HTTPError as e:
        return False, e.read().decode()

def main():
    with open(CREDENTIALS_FILE) as f:
        creds = json.load(f)

    print("Obtention du token OAuth2...")
    token = get_access_token(creds)
    print(f"Token OK\n")

    ok = 0
    for url in URLS:
        success, info = notify_url(token, url)
        status = "✓" if success else "✗"
        print(f"{status} {url}")
        if not success:
            print(f"  Erreur: {info}")
        ok += success
        time.sleep(0.3)  # éviter rate limit

    print(f"\n{ok}/{len(URLS)} URLs soumises à Google Indexing API")

if __name__ == "__main__":
    main()
