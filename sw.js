/**
 * Service Worker - Mr Robot Systems (v3.3)
 * Stratégie : Network-First pour HTML/CSS/JS (mise à jour instantanée sans Ctrl+F5)
 * Fallback Cache pour le mode hors-ligne PWA
 */

const CACHE_NAME = 'mrrobot-cache-v3.3';

const PRECACHE_ASSETS = [
  '/',
  '/index.html',
  '/style.css?v=3.3',
  '/app.js?v=3.3',
  '/favicon.ico',
  '/favicon.svg',
  '/manifest.webmanifest',
  '/images/logo.webp',
  '/images/og-cover.jpg',
  '/images/soudure.webp',
  '/images/soudure-avant.webp',
  '/images/reseau.webp',
  '/images/reseau-avant.webp',
  '/images/cctv.webp',
  '/images/cctv-avant.webp'
];

// 1. Installation immédiate du nouveau Service Worker
self.addEventListener('install', (event) => {
  self.skipWaiting();
  event.waitUntil(
    caches.open(CACHE_NAME).then((cache) => {
      return cache.addAll(PRECACHE_ASSETS).catch((err) => {
        console.warn('Erreur de pré-cachement SW (non bloquante):', err);
      });
    })
  );
});

// 2. Activation & suppression instantanée de tous les anciens caches
self.addEventListener('activate', (event) => {
  event.waitUntil(
    caches.keys().then((keys) => {
      return Promise.all(
        keys.map((key) => {
          if (key !== CACHE_NAME) {
            console.log('[SW] Suppression ancien cache obsolète:', key);
            return caches.delete(key);
          }
        })
      );
    }).then(() => self.clients.claim())
  );
});

// 3. Interception réseau intelligente
self.addEventListener('fetch', (event) => {
  if (event.request.method !== 'GET') return;

  const url = new URL(event.request.url);

  // Ignorer les requêtes externes hors de notre domaine (Google Maps, Fonts, Worker Della)
  if (url.origin !== self.location.origin) return;

  const isHtml = event.request.mode === 'navigate' || 
                 event.request.destination === 'document' || 
                 (event.request.headers.get('accept') && event.request.headers.get('accept').includes('text/html'));

  const isCode = event.request.destination === 'style' || 
                 event.request.destination === 'script' || 
                 url.pathname.endsWith('.css') || 
                 url.pathname.endsWith('.js');

  // STRATÉGIE 1 : Pour le HTML, le CSS et le JS -> NETWORK-FIRST (Toujours la version fraîche en ligne)
  if (isHtml || isCode) {
    event.respondWith(
      fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => {
          // En cas d'absence de connexion internet : fallback sur le cache
          return caches.match(event.request).then((cached) => {
            if (cached) return cached;
            if (isHtml) return caches.match('/index.html') || caches.match('/');
            return new Response('Offline', { status: 503, statusText: 'Service Unavailable' });
          });
        })
    );
    return;
  }

  // STRATÉGIE 2 : Pour les images et fichiers statiques -> STALE-WHILE-REVALIDATE
  event.respondWith(
    caches.match(event.request).then((cachedResponse) => {
      const fetchPromise = fetch(event.request)
        .then((networkResponse) => {
          if (networkResponse && networkResponse.status === 200) {
            const copy = networkResponse.clone();
            caches.open(CACHE_NAME).then((cache) => cache.put(event.request, copy));
          }
          return networkResponse;
        })
        .catch(() => cachedResponse);

      return cachedResponse || fetchPromise;
    })
  );
});

// Écouteur de message pour forcer la bascule de version
self.addEventListener('message', (event) => {
  if (event.data && event.data.type === 'SKIP_WAITING') {
    self.skipWaiting();
  }
});
