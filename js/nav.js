// ══════════════════════════════════════════════════════════
// js/nav.js — Navigation, drawer, notifications, modals
// ══════════════════════════════════════════════════════════

function showPage(id, ni) {
  document.querySelectorAll('.page').forEach(function(p) { p.classList.remove('active'); });
  document.getElementById('page-' + id).classList.add('active');
  // Mettre à jour le drawer
  document.querySelectorAll('.drawer-item').forEach(function(b, i) {
    b.classList.toggle('active', i === ni);
  });
  // Render spécifique
  if (id === 'home')      renderDash();
  if (id === 'exercises') setTimeout(renderExPage, 0);
  if (id === 'programs')  renderProgList();
  if (id === 'train')     renderTrain();
  if (id === 'session')   renderSess();
  if (id === 'progress')  renderProgress();
  if (id === 'calc')      renderCalc();
  if (id === 'settings')  renderSettings();
  window.scrollTo(0, 0);
}

// ── Drawer ────────────────────────────────────────────────
function openDrawer() {
  document.getElementById('drawer').classList.add('open');
  document.getElementById('drawer-overlay').classList.add('open');
}

function closeDrawer() {
  document.getElementById('drawer').classList.remove('open');
  document.getElementById('drawer-overlay').classList.remove('open');
}

function navTo(id, ni) {
  closeDrawer();
  showPage(id, ni);
}

// ── Notification toast ────────────────────────────────────
var _notifTimer = null;

function notify(m) {
  var e = document.getElementById('notif');
  e.textContent = m;
  e.classList.add('show');
  clearTimeout(_notifTimer);
  _notifTimer = setTimeout(function() { e.classList.remove('show'); }, 2400);
}

// ── Modals génériques ─────────────────────────────────────
function openModal(id)  { document.getElementById(id).classList.add('open'); }
function closeModal(id) { document.getElementById(id).classList.remove('open'); }
