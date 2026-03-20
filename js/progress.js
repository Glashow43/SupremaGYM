// ══════════════════════════════════════════════════════════
// js/progress.js — Page Historique / Progression
// ══════════════════════════════════════════════════════════

function renderProgress() {
  const el = document.getElementById('progress-content');
  if (!S.sessions.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📈</div><p>Aucune séance enregistrée</p></div>';
    return;
  }
  el.innerHTML = S.sessions.slice().reverse().map((s, i) => {
    const idx = S.sessions.length - 1 - i;
    const d = new Date(s.date).toLocaleDateString('fr-FR', {
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
    });
    const totalVol = s.exercises.reduce((a, e) =>
      a + e.sets.reduce((b, st) => b + (parseFloat(st.weight) || 0) * (st.reps || 0), 0), 0
    );
    const totalSets = s.exercises.reduce((a, e) => a + e.sets.length, 0);
    return `
      <div class="hist-item" onclick="openSessDetail(${idx})" style="cursor:pointer;">
        <div style="display:flex;align-items:center;justify-content:space-between;">
          <div>
            <div class="hist-date">${d}</div>
            <div class="hist-name">${s.context?.sessionName || 'Séance libre'}</div>
            <div style="font-size:11px;color:var(--text2);margin-top:2px;">
              ${s.exercises.length} exercice${s.exercises.length !== 1 ? 's' : ''} · ${totalSets} séries · ${totalVol.toFixed(0)} kg
            </div>
          </div>
          <span style="font-size:18px;color:var(--text3);">›</span>
        </div>
      </div>`;
  }).join('');
}

// ════════════════════════════════════════════════════════
// DÉTAIL D'UNE SÉANCE
// ════════════════════════════════════════════════════════

function openSessDetail(idx) {
  const s = S.sessions[idx];
  if (!s) return;

  const d = new Date(s.date).toLocaleDateString('fr-FR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });

  // Récapitulatif global
  const totalExs  = s.exercises.length;
  const totalSets = s.exercises.reduce((a, e) => a + e.sets.length, 0);
  const totalReps = s.exercises.reduce((a, e) => a + e.sets.reduce((b, st) => b + (st.reps || 0), 0), 0);
  const totalVol  = s.exercises.reduce((a, e) =>
    a + e.sets.reduce((b, st) => b + (parseFloat(st.weight) || 0) * (st.reps || 0), 0), 0
  );

  // HTML de chaque exercice
  const exsHTML = s.exercises.map(e => {
    const exVol  = e.sets.reduce((a, st) => a + (parseFloat(st.weight) || 0) * (st.reps || 0), 0);
    const exReps = e.sets.reduce((a, st) => a + (st.reps || 0), 0);
    const exMax  = Math.max(...e.sets.map(st => parseFloat(st.weight) || 0));

    const setsHTML = e.sets.map((st, si) => `
      <div class="det-set-row">
        <span class="det-set-num">${si + 1}</span>
        <span class="det-set-val">${parseFloat(st.weight) || '—'} kg</span>
        <span class="det-set-val">${st.reps || '—'} reps</span>
        <span class="det-set-vol">${((parseFloat(st.weight) || 0) * (st.reps || 0)).toFixed(0)} kg</span>
      </div>`).join('');

    return `
      <div class="det-ex">
        <div class="det-ex-name">${e.name}</div>
        <div class="det-set-hdr">
          <span>Série</span><span>Poids</span><span>Reps</span><span>Volume</span>
        </div>
        ${setsHTML}
        <div class="det-ex-total">
          Total · ${exReps} reps · max ${exMax} kg · ${exVol.toFixed(0)} kg volume
        </div>
      </div>`;
  }).join('');

  // Injection dans l'overlay
  document.getElementById('sess-detail-date').textContent  = d;
  document.getElementById('sess-detail-name').textContent  = s.context?.sessionName || 'Séance libre';
  document.getElementById('sess-detail-prog').textContent  = s.context?.progName    || '';
  document.getElementById('sess-detail-body').innerHTML    = exsHTML;
  document.getElementById('sess-detail-exs').textContent   = totalExs;
  document.getElementById('sess-detail-sets').textContent  = totalSets;
  document.getElementById('sess-detail-reps').textContent  = totalReps;
  document.getElementById('sess-detail-vol').textContent   = totalVol.toFixed(0) + ' kg';

  document.getElementById('sess-detail-overlay').classList.add('open');
}

function closeSessDetail() {
  document.getElementById('sess-detail-overlay').classList.remove('open');
}
