/**
 * Cloudflare Worker Proxy - Mr Robot & Della Bot
 * المطوّر: ياسين (Mr Robot)
 */

export default {
  async fetch(request, env, ctx) {
    if (request.method === "OPTIONS") {
      return new Response(null, {
        status: 204,
        headers: getSecurityHeaders()
      });
    }

    if (request.method !== "POST") {
      return new Response(JSON.stringify({ error: "Méthode non autorisée" }), {
        status: 405,
        headers: { 
          ...getSecurityHeaders(), 
          "Content-Type": "application/json" 
        }
      });
    }

    try {
      const clientData = await request.json();

      const apiResponse = await fetch("https://integrate.api.nvidia.com/v1/chat/completions", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          "Authorization": `Bearer ${env.NVIDIA_API_KEY}`
        },
        body: JSON.stringify({
          model: clientData.model || "meta/llama-3.1-8b-instruct",
          messages: clientData.messages || [],
          temperature: 0.5,
          max_tokens: 250
        })
      });

      const data = await apiResponse.json();

      return new Response(JSON.stringify(data), {
        status: apiResponse.status,
        headers: { 
          ...getSecurityHeaders(), 
          "Content-Type": "application/json" 
        }
      });

    } catch (error) {
      return new Response(JSON.stringify({ error: "Erreur interne du proxy sécurisé" }), {
        status: 500,
        headers: { 
          ...getSecurityHeaders(), 
          "Content-Type": "application/json" 
        }
      });
    }
  }
};

function getSecurityHeaders() {
  return {
    "Access-Control-Allow-Origin": "https://mrrobot.qd.je",
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type",
    "X-Frame-Options": "DENY",
    "X-Content-Type-Options": "nosniff",
    "Referrer-Policy": "strict-origin-when-cross-origin",
    "Permissions-Policy": "camera=(), microphone=(), geolocation=()",
    "Strict-Transport-Security": "max-age=31536000; includeSubDomains"
  };
}
