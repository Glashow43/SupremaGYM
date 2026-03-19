// ══════════════════════════════════════════════════════════
// js/pwa.js — PWA : bannière d'installation + Service Worker
// ══════════════════════════════════════════════════════════
let deferredPrompt = null;

window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').style.display = 'flex';
});

window.addEventListener('appinstalled', () => {
  document.getElementById('install-banner').style.display = 'none';
});

function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    document.getElementById('install-banner').style.display = 'none';
  }
}

// ── Service Worker — ne cache JAMAIS les JS/CSS ───────────
if ('serviceWorker' in navigator) {
  const CACHE_VERSION = 'sg-v20'; // ← incrémente à chaque déploiement
  const swCode = `
    const CACHE = '${CACHE_VERSION}';
    self.addEventListener('install', e => {
      e.waitUntil(
        caches.keys().then(keys =>
          Promise.all(keys.map(k => caches.delete(k)))
        )
      );
      self.skipWaiting();
    });
    self.addEventListener('activate', e => {
      e.waitUntil(self.clients.claim());
    });
    self.addEventListener('fetch', e => {
      // Ne jamais cacher JS, CSS — toujours depuis le réseau
      if (e.request.url.match(/\\.(js|css)(\?.*)?$/)) {
        e.respondWith(fetch(e.request));
        return;
      }
      // Pour le reste, réseau en priorité
      e.respondWith(
        fetch(e.request).catch(() => caches.match(e.request))
      );
    });
  `;
  const blob = new Blob([swCode], { type: 'application/javascript' });
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => {});
}
