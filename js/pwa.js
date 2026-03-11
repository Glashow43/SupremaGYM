// ══════════════════════════════════════════════════════════
// js/pwa.js — PWA : bannière d'installation + Service Worker
// ══════════════════════════════════════════════════════════

let deferredPrompt = null;

// Capture l'événement "Ajouter à l'écran d'accueil"
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').style.display = 'flex';
});

// Masque la bannière une fois l'app installée
window.addEventListener('appinstalled', () => {
  document.getElementById('install-banner').style.display = 'none';
});

/** Déclenche la boîte de dialogue d'installation native */
function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    document.getElementById('install-banner').style.display = 'none';
  }
}

// ── Service Worker (blob URL — compatible GitHub Pages) ───
if ('serviceWorker' in navigator) {
  const swCode = `
    const CACHE = 'sg-v1';
    self.addEventListener('install', e =>
      e.waitUntil(caches.open(CACHE).then(c => c.addAll(['/'])))
    );
    self.addEventListener('fetch', e =>
      e.respondWith(caches.match(e.request).then(r => r || fetch(e.request)))
    );
  `;
  const blob = new Blob([swCode], { type: 'application/javascript' });
  navigator.serviceWorker.register(URL.createObjectURL(blob)).catch(() => {});
}
