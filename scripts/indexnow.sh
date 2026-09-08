#!/bin/bash
# IndexNow — ping Bing/Yandex/Seznam automatiquement après chaque déploiement
# Usage: bash scripts/indexnow.sh

KEY="436299ec8a437eb4a2de647b1b9a8a7f"
HOST="taxispm.fr"

curl -s -X POST "https://api.indexnow.org/indexnow" \
  -H "Content-Type: application/json; charset=utf-8" \
  -d "{
    \"host\": \"$HOST\",
    \"key\": \"$KEY\",
    \"keyLocation\": \"https://$HOST/$KEY.txt\",
    \"urlList\": [
      \"https://taxispm.fr/\",
      \"https://taxispm.fr/services/\",
      \"https://taxispm.fr/tarifs/\",
      \"https://taxispm.fr/a-propos/\",
      \"https://taxispm.fr/taxi-conventionne-cpam/\",
      \"https://taxispm.fr/transfert-aeroport-lyon/\",
      \"https://taxispm.fr/taxi-longue-distance/\",
      \"https://taxispm.fr/taxi-remorque-ain/\",
      \"https://taxispm.fr/taxi-lyon/\",
      \"https://taxispm.fr/taxi-belley/\",
      \"https://taxispm.fr/taxi-oyonnax/\",
      \"https://taxispm.fr/taxi-miribel/\",
      \"https://taxispm.fr/taxi-villars-les-dombes/\",
      \"https://taxispm.fr/taxi-perouges/\",
      \"https://taxispm.fr/taxi-gex/\",
      \"https://taxispm.fr/taxi-vienne/\",
      \"https://taxispm.fr/taxi-isle-d-abeau/\",
      \"https://taxispm.fr/taxi-amberieu-en-bugey/\",
      \"https://taxispm.fr/taxi-bourg-en-bresse/\",
      \"https://taxispm.fr/taxi-bourgoin-jallieu/\",
      \"https://taxispm.fr/taxi-charvieu-chavagneux/\",
      \"https://taxispm.fr/taxi-cremieu/\",
      \"https://taxispm.fr/taxi-la-tour-du-pin/\",
      \"https://taxispm.fr/taxi-lagnieu/\",
      \"https://taxispm.fr/taxi-meximieux/\",
      \"https://taxispm.fr/taxi-montluel/\",
      \"https://taxispm.fr/taxi-pont-de-cheruy/\",
      \"https://taxispm.fr/taxi-tignieu-jameyzieu/\",
      \"https://taxispm.fr/taxi-villebois/\"
    ]
  }" && echo "IndexNow OK"
