// ══════════════════════════════════════════════════════════
// js/home.js — Dashboard (page Accueil)
// ══════════════════════════════════════════════════════════

/**
 * Rend l'intégralité du dashboard :
 *  - Cartes 1RM (Squat / Bench / Deadlift)
 *  - Total powerlifting
 *  - Programme actif
 *  - Dernière séance
 *  - 5 séances récentes
 */
function renderDash() {
  const squat    = S.rm.squat;
  const bench    = S.rm.bench;
  const deadlift = S.rm.deadlift;

  // ── 1RM
  document.getElementById('rm-squat').textContent    = squat    || '—';
  document.getElementById('rm-bench').textContent    = bench    || '—';
  document.getElementById('rm-deadlift').textContent = deadlift || '—';

  // ── Total
  const total = (squat || 0) + (bench || 0) + (deadlift || 0);
  document.getElementById('home-total').textContent = total ? total + ' kg' : '— kg';

  // ── Programme actif
  const apEl = document.getElementById('home-active-prog');
  if (S.ap) {
    const prog = S.progs.find(p => p.id === S.ap.programId);
    if (prog) {
      apEl.innerHTML = `
        <div class="wcard">
          <div class="wcard-title">Programme actif</div>
          <div style="font-size:15px;font-weight:800;margin-bottom:4px;">${prog.name}</div>
          <div style="font-size:12px;color:var(--text2);">
            Semaine ${S.ap.weekIdx + 1}/${prog.weeks.length} · Séance ${S.ap.sessionIdx + 1}
          </div>
          <span class="bdg g">ACTIF</span>
        </div>`;
    } else {
      apEl.innerHTML = '';
    }
  } else {
    apEl.innerHTML = '';
  }

  // ── Dernière séance
  const lsEl = document.getElementById('home-last-sess');
  if (S.sessions.length) {
    const last = S.sessions[S.sessions.length - 1];
    const d = new Date(last.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short' });
    lsEl.innerHTML = `
      <div class="wcard">
        <div class="wcard-title">Dernière séance</div>
        <div style="font-size:14px;font-weight:700;">${last.context?.sessionName || 'Séance libre'}</div>
        <div style="font-size:11px;color:var(--text2);margin-bottom:8px;">
          ${d} · ${last.exercises.length} exercice${last.exercises.length !== 1 ? 's' : ''}
        </div>
        <div class="hist-tags">
          ${last.exercises.slice(0, 5).map(e => `<span class="hist-tag">${e.name}</span>`).join('')}
        </div>
      </div>`;
  } else {
    lsEl.innerHTML = '';
  }

  // ── Séances récentes (5 dernières)
  const rsEl = document.getElementById('home-recent-sess');
  if (!S.sessions.length) {
    rsEl.innerHTML = `
      <div class="empty">
        <div class="empty-icon">🏋️</div>
        <p>Aucune séance enregistrée<br>Lance ton premier entraînement !</p>
      </div>`;
    return;
  }
  rsEl.innerHTML = S.sessions.slice().reverse().slice(0, 5).map(s => {
    const d = new Date(s.date).toLocaleDateString('fr-FR', { day: '2-digit', month: 'short', year: 'numeric' });
    return `
      <div class="hist-item" style="cursor:pointer;">
        <div class="hist-date">${d}</div>
        <div class="hist-name">${s.context?.sessionName || 'Séance libre'}</div>
        <div class="hist-tags">
          ${s.exercises.slice(0, 4).map(e => `<span class="hist-tag">${e.name}</span>`).join('')}
        </div>
      </div>`;
  }).join('');
}
