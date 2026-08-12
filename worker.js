/**
 * Cloudflare Worker Proxy - Mr Robot & Della Bot
 * المطوّر: ياسين (Mr Robot)
 * التحديث: إضافة حماية Rate Limiting وتقييد طول الرسائل
 */

// ذاكرة مؤقتة لتتبع عدد الطلبات لكل IP (تعمل على مستوى نفس الـ Worker)
const rateLimitMap = new Map();
const LIMIT = 10; // الحد الأقصى للطلبات
const TIME_WINDOW = 60000; // الإطار الزمني: 60 ثانية (دقيقة واحدة)

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

    // --- استخراج الـ IP الخاص بالمستخدم عبر Cloudflare ---
    const ip = request.headers.get("cf-connecting-ip") || "unknown-ip";
    
    // --- تطبيق Rate Limiting ---
    const now = Date.now();
    const userRecord = rateLimitMap.get(ip);

    if (userRecord) {
        if (now - userRecord.startTime < TIME_WINDOW) {
            if (userRecord.count >= LIMIT) {
                return new Response(JSON.stringify({ error: "Trop de requêtes. Veuillez patienter une minute." }), {
                    status: 429, // Too Many Requests
                    headers: { 
                      ...getSecurityHeaders(), 
                      "Content-Type": "application/json",
                      "Retry-After": "60"
                    }
                });
            }
            userRecord.count++;
        } else {
            // إعادة التعيين بعد مرور دقيقة
            rateLimitMap.set(ip, { count: 1, startTime: now });
        }
    } else {
        // تسجيل مستخدم جديد
        rateLimitMap.set(ip, { count: 1, startTime: now });
    }
    
    // تنظيف الذاكرة لمنع استهلاك مساحة Cloudflare Worker
    if(rateLimitMap.size > 1000) rateLimitMap.clear();

    try {
      const clientData = await request.json();

      // --- Input Sanitization: التحقق من طول الرسالة لمنع الاستنزاف ---
      if (clientData.messages && clientData.messages.length > 0) {
          const lastMessage = clientData.messages[clientData.messages.length - 1].content;
          if (lastMessage && lastMessage.length > 250) {
              return new Response(JSON.stringify({ error: "Le message est trop long. Max 250 caractères." }), {
                  status: 400,
                  headers: { ...getSecurityHeaders(), "Content-Type": "application/json" }
              });
          }
      }

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
