// ══════════════════════════════════════════════════════════
// js/pwa.js — PWA : installation Android + iOS
// ══════════════════════════════════════════════════════════
// ── Android / Chrome : bannière d'installation ────────────
let deferredPrompt = null;
window.addEventListener('beforeinstallprompt', e => {
  e.preventDefault();
  deferredPrompt = e;
  document.getElementById('install-banner').style.display = 'flex';
});
window.addEventListener('appinstalled', () => {
  document.getElementById('install-banner').style.display = 'none';
  deferredPrompt = null;
});
function installApp() {
  if (deferredPrompt) {
    deferredPrompt.prompt();
    deferredPrompt.userChoice.then(() => { deferredPrompt = null; });
    document.getElementById('install-banner').style.display = 'none';
  }
}
// ── iOS : détecter Safari et afficher les instructions ────
function isIOS() {
  return /iphone|ipad|ipod/i.test(navigator.userAgent);
}
function isInStandaloneMode() {
  return window.navigator.standalone === true;
}
function showIOSInstallHint() {
  if (isIOS() && !isInStandaloneMode()) {
    var hint = document.getElementById('ios-install-hint');
    if (hint) hint.style.display = 'flex';
  }
}
window.addEventListener('load', showIOSInstallHint);
// ── Retour arrière-plan Android : restaurer l'état ────────
document.addEventListener('visibilitychange', () => {
  if (document.visibilityState !== 'visible') return;

  // Si une séance est en cours, s'assurer qu'on est sur la bonne page
  // et que le timer tourne toujours
  if (S.cur && S.cur.length > 0) {
    var pageSession = document.getElementById('page-session');
    if (pageSession && pageSession.classList.contains('active')) {
      // On est déjà sur la page session — juste relancer le timer si mort
      if (!sessTimerInterval && localStorage.getItem('sessTimerStart')) {
        resumeSessTimer();
      }
    }
  }
});
// ── Service Worker ────────────────────────────────────────
if ('serviceWorker' in navigator) {
  window.addEventListener('load', () => {
    navigator.serviceWorker.register('/SupremaGYM/sw.js')
      .then(reg => console.log('SW enregistré :', reg.scope))
      .catch(err => console.error('SW erreur :', err));
  });
}
