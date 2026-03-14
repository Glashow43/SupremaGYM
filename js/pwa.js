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

// ── Service Worker avec version — ne cache jamais les JS/CSS ──
if ('serviceWorker' in navigator) {
  const CACHE_VERSION = 'sg-v11';
  const swCode = `
    const CACHE = '${CACHE_VERSION}';
    self.addEventListener('install', e => {
      e.waitUntil(
        caches.keys().then(keys =>
          Promise.all(keys.map(k => caches.delete(k)))
        ).then(() => caches.open(CACHE).then(c => c.addAll(['/'])))
      );
      self.skipWaiting();
    });
    self.addEventListener('activate', e => {
      e.waitUntil(
        caches.keys().then(keys =>
          Promise.all(keys.filter(k => k !== CACHE).map(k => caches.delete(k)))
        )
      );
      self.clients.claim();
    });
    self.addEventListener('fetch', e => {
      if (e.request.url.match(/\\.(js|css)$/)) {
        e.respondWith(fetch(e.request));
        return;
      }
      e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)));
    });
  `;
  const blob = new Blob([swCode], { type: 'application/javascript' });
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => {});
}
