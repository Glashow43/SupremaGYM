// ══════════════════════════════════════════════════════════
// js/progress.js — Page Historique / Progression
// ══════════════════════════════════════════════════════════

/**
 * Rend l'historique complet des séances (ordre antéchronologique).
 * Affiche pour chaque séance : date, nom, exercices + volume total.
 */
function renderProgress() {
  const el = document.getElementById('progress-content');

  if (!S.sessions.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📈</div><p>Aucune séance enregistrée</p></div>';
    return;
  }

  el.innerHTML = S.sessions.slice().reverse().map(s => {
    const d = new Date(s.date).toLocaleDateString('fr-FR', {
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
    });
    return `
      <div class="hist-item">
        <div class="hist-date">${d}</div>
        <div class="hist-name">${s.context?.sessionName || 'Séance libre'}</div>
        <div style="font-size:11px;color:var(--text2);margin-bottom:6px;">
          ${s.exercises.length} exercice${s.exercises.length !== 1 ? 's' : ''}
        </div>
        <div class="hist-tags">
          ${s.exercises.map(e => {
            const totalKg = e.sets.reduce((a, s) => a + (parseFloat(s.weight) || 0) * s.reps, 0);
            return `<span class="hist-tag">${e.name}${totalKg ? '  ·  ' + totalKg.toFixed(0) + 'kg total' : ''}</span>`;
          }).join('')}
        </div>
      </div>`;
  }).join('');
}
