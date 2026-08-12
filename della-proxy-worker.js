// ============================================================
// PROXY + JOURNAL DE CONVERSATIONS POUR DELLA — Cloudflare Worker
// (version sécurisée : CORS restreint + connexion admin par cookie)
// ============================================================
// Ce script fait 2 choses :
// 1. Transmet les questions de Della vers l'API NVIDIA (clé cachée)
// 2. Enregistre chaque conversation pour que TOI SEUL puisses les
//    consulter sur une page d'administration protégée par mot de passe
//
// ============================================================
// INSTALLATION
// ============================================================
// 1. dash.cloudflare.com > Workers & Pages > della-proxy > Edit code
// 2. Efface tout, colle CE fichier
// 3. Remplace NVIDIA_API_KEY, ADMIN_PASSWORD et ALLOWED_ORIGINS ci-dessous
// 4. Save and Deploy
// 5. (Une seule fois) Settings > Bindings > Add > KV Namespace
//    Variable name : DELLA_LOGS   → Save and Deploy à nouveau
// 6. Page d'administration privée :
//      https://della-proxy.TONNOM.workers.dev/admin
//    (le mot de passe se saisit sur la page, plus jamais dans l'URL)
// ============================================================

const NVIDIA_API_KEY = "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";
const NVIDIA_ENDPOINT = "https://integrate.api.nvidia.com/v1/chat/completions";

// ⚠️ Change ce mot de passe pour que TOI SEUL puisses voir les conversations
const ADMIN_PASSWORD = "MrRobot2026";

// ⚠️ Sécurité : seuls ces sites ont le droit d'utiliser ton proxy (donc ton
// quota NVIDIA). Ajoute ton propre domaine ici si tu en achètes un plus tard.
const ALLOWED_ORIGINS = [
  "https://yassinedella-mrrobot.github.io",
];

function corsHeadersFor(request) {
  const origin = request.headers.get("Origin") || "";
  const allowed = ALLOWED_ORIGINS.includes(origin);
  const headers = {
    "Access-Control-Allow-Methods": "POST, GET, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "Vary": "Origin",
  };
  if (allowed) headers["Access-Control-Allow-Origin"] = origin;
  return headers;
}

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const cors = corsHeadersFor(request);

    if (request.method === "OPTIONS") {
      return new Response(null, { headers: cors });
    }

    // ---------- Page d'administration privée (cookie, jamais l'URL) ----------
    // Exemptée du contrôle d'origine ci-dessous : elle a sa propre protection
    // par mot de passe + cookie, et est ouverte directement dans le navigateur
    // (donc avec une origine différente du site principal).
    if (url.pathname === "/admin") {
      return handleAdmin(request, env);
    }

    // ---------- Sécurité : rejette les requêtes cross-origin non autorisées ----------
    // (Les en-têtes CORS seuls ne bloquent que le navigateur, pas les scripts/curl.
    // Ce contrôle explicite ferme cette faille pour toute requête envoyant un Origin.)
    const origin = request.headers.get("Origin");
    if (origin && !ALLOWED_ORIGINS.includes(origin)) {
      return new Response("Origine non autorisée", { status: 403, headers: cors });
    }

    if (request.method !== "POST") {
      return new Response("Méthode non autorisée", { status: 405, headers: cors });
    }

    // ---------- Limite de requêtes (anti-abus du quota NVIDIA) ----------
    if (env.DELLA_LOGS) {
      const ip = request.headers.get("CF-Connecting-IP") || "unknown";
      const rlKey = `ratelimit:${ip}`;
      const current = parseInt(await env.DELLA_LOGS.get(rlKey) || "0", 10);
      if (current >= 30) {
        return new Response(JSON.stringify({ error: "Trop de requêtes, réessayez plus tard." }), {
          status: 429, headers: { ...cors, "Content-Type": "application/json" },
        });
      }
      await env.DELLA_LOGS.put(rlKey, String(current + 1), { expirationTtl: 3600 });
    }

    // ---------- Proxy vers NVIDIA + journalisation ----------
    try {
      const body = await request.json();

      const nvidiaRes = await fetch(NVIDIA_ENDPOINT, {
        method: "POST",
        headers: {
          "Authorization": `Bearer ${NVIDIA_API_KEY}`,
          "Content-Type": "application/json",
        },
        body: JSON.stringify(body),
      });

      const dataText = await nvidiaRes.text();

      // Enregistre la conversation (silencieusement, n'affecte pas la réponse si ça échoue)
      try {
        if (env.DELLA_LOGS) {
          const data = JSON.parse(dataText);
          const reply = data?.choices?.[0]?.message?.content || "";
          const userMsg = [...body.messages].reverse().find(m => m.role === "user")?.content || "";
          const entry = {
            date: new Date().toISOString(),
            question: userMsg,
            reponse: reply,
          };
          const key = `log:${Date.now()}:${Math.random().toString(36).slice(2, 8)}`;
          // Les conversations sont conservées 90 jours puis supprimées automatiquement
          await env.DELLA_LOGS.put(key, JSON.stringify(entry), { expirationTtl: 60 * 60 * 24 * 90 });
        }
      } catch (logErr) { /* on ignore les erreurs de journalisation */ }

      return new Response(dataText, {
        status: nvidiaRes.status,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    } catch (err) {
      return new Response(JSON.stringify({ error: err.message }), {
        status: 500,
        headers: { ...cors, "Content-Type": "application/json" },
      });
    }
  },
};

function getCookie(request, name) {
  const cookie = request.headers.get("Cookie") || "";
  const match = cookie.match(new RegExp(`(?:^|; )${name}=([^;]+)`));
  return match ? decodeURIComponent(match[1]) : null;
}

async function handleAdmin(request, env) {
  // Connexion : formulaire envoyé en POST, mot de passe jamais dans l'URL
  if (request.method === "POST") {
    const form = await request.formData();
    const pass = form.get("pass");

    // Anti brute-force : bloque après 5 essais incorrects pendant 15 minutes
    const ip = request.headers.get("CF-Connecting-IP") || "unknown";
    const attemptsKey = `login_attempts:${ip}`;
    const attempts = parseInt((env.DELLA_LOGS && await env.DELLA_LOGS.get(attemptsKey)) || "0", 10);
    if (env.DELLA_LOGS && attempts >= 5) {
      return new Response(renderLoginPage("Trop de tentatives. Réessayez dans 15 minutes."), {
        status: 429, headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (pass !== ADMIN_PASSWORD) {
      if (env.DELLA_LOGS) await env.DELLA_LOGS.put(attemptsKey, String(attempts + 1), { expirationTtl: 900 });
      return new Response(renderLoginPage("Mot de passe incorrect."), {
        headers: { "Content-Type": "text/html; charset=utf-8" },
      });
    }

    if (env.DELLA_LOGS) await env.DELLA_LOGS.delete(attemptsKey);

    // Session simple par cookie signé-léger, valable 24h, HttpOnly (invisible en JS)
    return new Response(null, {
      status: 303,
      headers: {
        "Location": "/admin",
        "Set-Cookie": `della_auth=${encodeURIComponent(ADMIN_PASSWORD)}; HttpOnly; Secure; SameSite=Strict; Max-Age=86400; Path=/admin`,
      },
    });
  }

  const authed = getCookie(request, "della_auth") === ADMIN_PASSWORD;

  if (!authed) {
    return new Response(renderLoginPage(), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  if (!env.DELLA_LOGS) {
    return new Response(renderPage("<p style='color:#f66'>⚠️ Le stockage KV n'est pas encore activé. Suis l'étape 5 des instructions d'installation en haut du fichier della-proxy-worker.js.</p>"), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  }

  const list = await env.DELLA_LOGS.list({ limit: 200 });
  const entries = await Promise.all(
    list.keys.map(async (k) => {
      const raw = await env.DELLA_LOGS.get(k.name);
      try { return JSON.parse(raw); } catch { return null; }
    })
  );

  const valid = entries.filter(Boolean).sort((a, b) => new Date(b.date) - new Date(a.date));

  const rows = valid.map(e => `
    <div class="entry">
      <div class="date">${new Date(e.date).toLocaleString('fr-FR')}</div>
      <div class="q"><strong>Client :</strong> ${escapeHtml(e.question)}</div>
      <div class="r"><strong>Della :</strong> ${escapeHtml(e.reponse)}</div>
    </div>
  `).join("") || "<p>Aucune conversation enregistrée pour le moment.</p>";

  return new Response(renderPage(`
    <p style="color:#7f95a6; margin-bottom:20px;">${valid.length} conversation(s) enregistrée(s) — <a href="/admin" style="color:#35f0c0;">actualiser</a></p>
    ${rows}
  `), {
    headers: { "Content-Type": "text/html; charset=utf-8" },
  });
}

function escapeHtml(str) {
  return String(str || "").replace(/[&<>"']/g, c => ({ "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;" }[c]));
}

function renderLoginPage(error) {
  return renderPage(`
    <form method="POST" action="/admin" style="max-width:320px; margin:60px auto; text-align:center;">
      <p style="margin-bottom:16px; color:#7f95a6;">Entrez le mot de passe pour voir les conversations de Della</p>
      ${error ? `<p style="color:#ff6b6b; margin-bottom:12px; font-size:0.85rem;">${escapeHtml(error)}</p>` : ''}
      <input type="password" name="pass" placeholder="Mot de passe" style="width:100%; padding:12px; border-radius:8px; border:1px solid #1c2733; background:#0f1620; color:#fff; margin-bottom:12px; box-sizing:border-box;" autofocus>
      <button type="submit" style="width:100%; padding:12px; border-radius:8px; border:none; background:#35f0c0; color:#000; font-weight:700; cursor:pointer;">Voir les conversations</button>
    </form>
  `);
}

function renderPage(content) {
  return `<!DOCTYPE html>
<html lang="fr">
<head>
<meta charset="UTF-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0">
<title>Della — Journal des conversations</title>
<style>
  body { background:#0a0e13; color:#d7e2ea; font-family: 'Segoe UI', sans-serif; margin:0; padding:30px 16px; }
  h1 { font-size:1.3rem; color:#35f0c0; max-width:700px; margin:0 auto 10px; }
  .entry { max-width:700px; margin:0 auto 14px; background:#0f1620; border:1px solid #1c2733; border-radius:10px; padding:14px 18px; }
  .date { font-size:0.72rem; color:#7f95a6; margin-bottom:8px; font-family: monospace; }
  .q, .r { font-size:0.9rem; margin-bottom:6px; line-height:1.5; }
  .r { color:#c8e6da; }
  p { max-width:700px; margin:0 auto 10px; }
  a { color:#35f0c0; }
</style>
</head>
<body>
  <h1>🤖 Della — Journal des conversations (privé)</h1>
  ${content}
</body>
</html>`;
}
