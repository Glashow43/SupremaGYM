// ══════════════════════════════════════════════════════════
// js/nav.js — Navigation entre pages, notifications, modals
// ══════════════════════════════════════════════════════════

/**
 * Affiche la page demandée et met à jour les navs haute et basse.
 * Déclenche aussi le render de la page cible.
 *
 * @param {string} id  - ID de la page sans le préfixe "page-" (ex: 'home')
 * @param {number} ni  - index du bouton dans la botnav (0–6)
 */
function showPage(id, ni) {
  // Désactiver toutes les pages et navs
  document.querySelectorAll('.page').forEach(p => p.classList.remove('active'));
  document.querySelectorAll('.bnb').forEach(b  => b.classList.remove('active'));
  document.querySelectorAll('.tnl').forEach(b  => b.classList.remove('active'));

  // Activer la page et le bouton cible
  document.getElementById('page-' + id).classList.add('active');
  document.querySelectorAll('.bnb')[ni]?.classList.add('active');
  document.querySelectorAll('.tnl')[ni]?.classList.add('active');

  // Render spécifique à chaque page
  if (id === 'home')     renderDash();
  if (id === 'exercises') setTimeout(renderExPage, 0);
  if (id === 'programs') renderProgList();
  if (id === 'train')    renderTrain();
  if (id === 'session')  renderSess();
  if (id === 'progress') renderProgress();
  if (id === 'calc')     renderCalc();
  if (id === 'settings') renderSettings();

  window.scrollTo(0, 0);
}

// ── Notification toast ────────────────────────────────────
let _notifTimer = null;

/**
 * Affiche un toast en haut de l'écran pendant 2,4s.
 * Si un toast est déjà affiché, le timer est réinitialisé.
 * @param {string} m - message à afficher
 */
function notify(m) {
  const e = document.getElementById('notif');
  e.textContent = m;
  e.classList.add('show');
  clearTimeout(_notifTimer);
  _notifTimer = setTimeout(() => e.classList.remove('show'), 2400);
}

// ── Modals génériques ─────────────────────────────────────

/** Ouvre un modal par son ID */
function openModal(id)  { document.getElementById(id).classList.add('open'); }

/** Ferme un modal par son ID */
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
