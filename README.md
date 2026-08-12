# 🤖 Mr Robot — Site Web & Assistant Della

Site vitrine professionnel sécurisé pour **Mr Robot**, entreprise de services techniques basée à Oran (Algérie).

---

## 🚀 Architecture & Sécurité

- **Front-end** : HTML5, CSS3, Vanilla JS avec thème Cyberpunk / Dark.
- **Sécurisation OWASP Top 10** :
  - **Content Security Policy Stricte** (suppression complète de `unsafe-inline` avec `nonce`).
  - **Protection Anti-Scraping** : Obfuscation dynamique du numéro de téléphone et de l'adresse email.
  - **Isolation Chatbot Della** : Protection XSS basateur de DOM via manipulation sécurisée par des éléments texte stricts.
  - **Proxy Cloudflare Worker** : Masquage serveur des clés API NVIDIA et en-têtes HTTP anti-Clickjacking.

---

## 📞 Contact

- **Site Web** : [mrrobot.qd.je](https://mrrobot.qd.je)
- **Localisation** : Oran, Miramar — Près du Lycée Lotfi

© 2026 Mr Robot — Tous droits réservés.
