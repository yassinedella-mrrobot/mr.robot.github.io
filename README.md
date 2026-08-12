# 🤖 Mr Robot — Site Web & Assistant Della

Site vitrine professionnel et **hautement sécurisé** pour **Mr Robot**, entreprise de services techniques et d'ingénierie basée à Oran (Algérie).

---

## 📁 Structure du projet
- `index.html` : Structure HTML5 & UI Cyberpunk (Sécurisé).
- `app.js` : Scripts client, logique du Bot Della & Obfuscation dynamique.
- `worker-v2.js` : Proxy Cloudflare Worker (Rate Limiting, Sanitization & Headers).
- `SECURITY.md` : Politique de divulgation responsable et signalement de vulnérabilités.
- `README.md` : Documentation de l'architecture du projet.
  
## 🚀 Architecture & Sécurité Défensive

Ce projet intègre des mécanismes de défense avancés contre les attaques web courantes (OWASP Top 10), démontrant l'expertise technique de l'équipe :

- **Content Security Policy (CSP) Stricte :** 
  - Verrouillage total des scripts (`script-src 'self'`).
  - Suppression des `nonce` statiques ou factices pour interdire l'exécution de tout code JavaScript tiers ou injecté (Protection anti-XSS absolue).
  - Injection sécurisée des données SEO (JSON-LD) via le DOM sans scripts en ligne.

- **Protection Anti-Scraping (Obfuscation Dynamique) :** 
  - Les données de contact sensibles (Téléphone, WhatsApp, Email) ne figurent jamais en clair dans le code source.
  - Utilisation d'un chiffrement Base64 couplé à un déchiffrement dynamique à l'exécution (Runtime Decryption) pour bloquer les robots d'extraction de données.

- **Proxy Cloudflare Worker & Rate Limiting (Protection API) :**
  - **Masquage des clés API :** La clé NVIDIA API est isolée côté serveur.
  - **Rate Limiting :** Implémentation d'un système de limitation par adresse IP (10 requêtes / minute) géré via une `Map` en mémoire pour prévenir les attaques par déni de service (DoS) et l'épuisement des quotas.
  - **Input Sanitization :** Rejet automatique des payloads (messages) dépassant 250 caractères pour éviter les attaques d'épuisement de ressources (Billing/Spam attacks).

- **En-têtes de Sécurité HTTP :**
  - `X-Frame-Options: DENY` (Protection anti-Clickjacking).
  - `X-Content-Type-Options: nosniff`.
  - `Strict-Transport-Security` (HSTS).
  - Restriction stricte des requêtes cross-origin (CORS) au seul domaine officiel.

---

## 📞 Contact

- **Site Web** : [mrrobot.qd.je](https://mrrobot.qd.je)
- **Localisation** : Oran, Miramar — Près du Lycée Lotfi
- **Sécurité** : Pour signaler une vulnérabilité, veuillez consulter le fichier `SECURITY.md`.

© 2026 Mr Robot Systems — Tous droits réservés.
