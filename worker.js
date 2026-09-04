/**
 * Cloudflare Worker Proxy - Mr Robot & Della Bot (Gemini 1.5 Flash Edition)
 * Notifications Telegram en temps réel & Distributed KV Rate Limiting
 * Développeur : Yassin Della (Mr Robot Systems)
 */

const LIMIT = 10;          // Nombre max de requêtes par IP
const TIME_WINDOW_SEC = 60; // Fenêtre de temps en secondes

export default {
  async fetch(request, env, ctx) {
    // 1. Gestion des requêtes CORS Preflight
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getSecurityHeaders(request)
      });
    }

    // 2. Traitement des requêtes GET (Vérification d'état en navigateur)
    if (request.method === "GET") {
      return new Response(JSON.stringify({ 
        status: "online",
        service: "Della AI Proxy — Mr Robot Systems (Oran)",
        engine: "Gemini 3.6 Flash + Realtime Web Search",
        message: "🟢 Le Worker Cloudflare est actif et fonctionnel !"
      }), {
        status: 200,
        headers: { 
          ...getSecurityHeaders(request), 
          "Content-Type": "application/json; charset=utf-8" 
        }
      });
    }

    // Blocage des autres méthodes (PUT, DELETE, etc.)
    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Méthode non autorisée. Seul POST est accepté pour l'IA." }), {
        status: 405,
        headers: { 
          ...getSecurityHeaders(request), 
          "Content-Type": "application/json; charset=utf-8" 
        }
      });
    }

    // 3. Identification de l'adresse IP cliente
    const ip = request.headers.get("cf-connecting-ip") || "unknown-ip";
    const kvKey = `rl:${ip}`;

    try {
      // 4. Rate Limiting via Cloudflare KV
      if (env.RATE_LIMIT_KV) {
        let currentCount = await env.RATE_LIMIT_KV.get(kvKey);
        let count = currentCount ? parseInt(currentCount, 10) : 0;

        if (count >= LIMIT) {
          return new Response(JSON.stringify({ 
            error: "Trop de requêtes. Veuillez patienter une minute." 
          }), {
            status: 429,
            headers: { 
              ...getSecurityHeaders(request), 
              "Content-Type": "application/json",
              "Retry-After": "60"
            }
          });
        }

        await env.RATE_LIMIT_KV.put(kvKey, (count + 1).toString(), {
          expirationTtl: TIME_WINDOW_SEC
        });
      }

      // 5. Lecture du corps de la requête
      const clientData = await request.json();

      if (!clientData.messages || !Array.isArray(clientData.messages) || clientData.messages.length === 0) {
        return new Response(JSON.stringify({ error: "Format de message invalide" }), {
          status: 400,
          headers: { ...getSecurityHeaders(request), "Content-Type": "application/json" }
        });
      }

      // 6. Validation et Sanitization stricte
      const isPayloadSafe = clientData.messages.every(
        msg => msg && typeof msg.content === "string" && msg.content.trim().length > 0 && (msg.role === "system" ? msg.content.length <= 2000 : msg.content.length <= 1000)
      );

      if (!isPayloadSafe) {
        return new Response(JSON.stringify({ 
          error: "Chaque message utilisateur doit contenir entre 1 et 1000 caractères." 
        }), {
          status: 400,
          headers: { ...getSecurityHeaders(request), "Content-Type": "application/json" }
        });
      }

      // 7. Conversion du format des messages pour Google Gemini
      let systemInstruction = "";
      const geminiContents = [];

      for (const msg of clientData.messages) {
        if (msg.role === "system") {
          systemInstruction = msg.content;
        } else {
          geminiContents.push({
            role: msg.role === "assistant" ? "model" : "user",
            parts: [{ text: msg.content }]
          });
        }
      }

      const geminiPayload = {
        contents: geminiContents,
        generationConfig: {
          temperature: 0.6,
          maxOutputTokens: 800
        }
      };

      if (systemInstruction) {
        geminiPayload.systemInstruction = {
          parts: [{ text: systemInstruction }]
        };
      }

      // 8. Appel Gemini — Cascade de 3 modèles (du plus léger au plus puissant)
      const geminiApiKey = env.GEMINI_API_KEY;
      if (!geminiApiKey) {
        return new Response(JSON.stringify({ error: "Clé API manquante. Configurez GEMINI_API_KEY dans les variables d'environnement Cloudflare." }), {
          status: 500,
          headers: { ...getSecurityHeaders(request), "Content-Type": "application/json" }
        });
      }
      const BASE = `https://generativelanguage.googleapis.com/v1beta/models`;
      const MODELS = [
        "gemini-2.0-flash-lite",       // Rapide, gratuit, peu de quota
        "gemini-1.5-flash-latest",     // Alias stable de la version 1.5
        "gemini-2.0-flash"             // Plus puissant, quota plus limité
      ];

      let data = null;
      let apiOk = false;

      for (const model of MODELS) {
        try {
          const url = `${BASE}/${model}:generateContent?key=${geminiApiKey}`;
          const apiResponse = await fetch(url, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify(geminiPayload)
          });
          const json = await apiResponse.json();
          if (apiResponse.ok && json.candidates?.[0]?.content?.parts) {
            data = json;
            apiOk = true;
            break;
          }
        } catch (e) {
          // Essai modèle suivant
        }
      }

      if (!apiOk || !data) {
        throw new Error("Tous les modèles Gemini sont indisponibles en ce moment. Veuillez réessayer dans 1 minute.");
      }

      const textPart = data.candidates?.[0]?.content?.parts?.find(p => p.text);
      const reply = textPart?.text?.trim() || "Aucune réponse générée.";
      const lastUserMsg = clientData.messages[clientData.messages.length - 1]?.content || "";

      // 9. Envoi de la notification sur Telegram en tâche de fond (Non-bloquant)
      const botToken = env.TELEGRAM_BOT_TOKEN;
      const chatId = env.TELEGRAM_CHAT_ID;

      if (botToken && chatId) {
        const textLog = `🤖 *Mr Robot — Della (Gemini)*\n🌐 *IP :* \`${ip}\`\n\n👤 *Client :*\n${lastUserMsg}\n\n🤖 *Della :*\n${reply}`;

        ctx.waitUntil(
          fetch(`https://api.telegram.org/bot${botToken}/sendMessage`, {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({
              chat_id: chatId,
              text: textLog,
              parse_mode: "Markdown"
            })
          }).catch(err => console.error("Erreur Telegram:", err))
        );
      }

      // 10. Réponse au format standard compatible avec app.js
      const standardResponse = {
        choices: [
          {
            message: {
              role: "assistant",
              content: reply
            }
          }
        ]
      };

      return new Response(JSON.stringify(standardResponse), {
        status: 200,
        headers: { 
          ...getSecurityHeaders(request), 
          "Content-Type": "application/json" 
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: error.message || "Erreur interne du proxy" }), {
        status: 500,
        headers: { 
          ...getSecurityHeaders(request), 
          "Content-Type": "application/json" 
        }
      });
    }
  }
};

function getSecurityHeaders(request) {
  const origin = request?.headers?.get("Origin") || "";
  const isAllowed = origin.includes("mrrobot.qd.je") || origin.includes("github.io") || origin.includes("localhost") || origin.includes("127.0.0.1");
  return {
    "Access-Control-Allow-Origin": isAllowed ? origin : "https://mrrobot.qd.je",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  };
}
