// ══════════════════════════════════════════════════════════
// sw.js — Service Worker SupremaGym
// ⚠️ Ce fichier doit être à la RACINE du projet
// Incrémenter CACHE_VERSION à chaque déploiement
// ══════════════════════════════════════════════════════════
const CACHE_VERSION = 'sg-v1';
const ASSETS_TO_CACHE = [
  '/',
  '/index.html',
  '/css/style.css',
  '/js/state.js',
  '/js/data.js',
  '/js/firebase.js',
  '/js/nav.js',
  '/js/home.js',
  '/js/exercises.js',
  '/js/programs.js',
  '/js/session.js',
  '/js/calc.js',
  '/js/progress.js',
  '/js/settings.js',
  '/js/pwa.js',
  '/images/favicon supremagym.png',
  '/manifest.json'
];

// ── Installation : mise en cache des assets ───────────────
self.addEventListener('install', e => {
  e.waitUntil(
    caches.open(CACHE_VERSION).then(cache => {
      return cache.addAll(ASSETS_TO_CACHE);
    }).then(() => self.skipWaiting())
  );
});

// ── Activation : suppression des anciens caches ───────────
self.addEventListener('activate', e => {
  e.waitUntil(
    caches.keys().then(keys =>
      Promise.all(
        keys.filter(k => k !== CACHE_VERSION).map(k => caches.delete(k))
      )
    ).then(() => self.clients.claim())
  );
});

// ── Fetch : réseau en priorité, cache en fallback ─────────
self.addEventListener('fetch', e => {
  // JS et CSS : toujours depuis le réseau (pas de cache)
  if (e.request.url.match(/\.(js|css)(\?.*)?$/)) {
    e.respondWith(
      fetch(e.request).catch(() => caches.match(e.request))
    );
    return;
  }
  // Firebase et APIs externes : réseau uniquement
  if (e.request.url.includes('firebase') ||
      e.request.url.includes('googleapis') ||
      e.request.url.includes('gstatic')) {
    e.respondWith(fetch(e.request));
    return;
  }
  // Reste : réseau en priorité, cache en fallback
  e.respondWith(
    fetch(e.request)
      .then(response => {
        const clone = response.clone();
        caches.open(CACHE_VERSION).then(cache => cache.put(e.request, clone));
        return response;
      })
      .catch(() => caches.match(e.request))
  );
});
