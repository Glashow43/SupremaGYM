// ══════════════════════════════════════════════════════════
// js/settings.js — Page Réglages (export / import / reset / thème)
// ══════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// THÈME
// ════════════════════════════════════════════════════════

function initTheme() {
  var dark = localStorage.getItem('theme') !== 'light';
  applyTheme(dark);
}

function applyTheme(dark) {
  document.documentElement.setAttribute('data-theme', dark ? 'dark' : 'light');
  localStorage.setItem('theme', dark ? 'dark' : 'light');
  var btn = document.getElementById('theme-toggle-btn');
  if (btn) btn.textContent = dark ? '☀️ Thème clair' : '🌙 Thème sombre';
}

function toggleTheme() {
  var isDark = document.documentElement.getAttribute('data-theme') !== 'light';
  applyTheme(!isDark);
}

// ════════════════════════════════════════════════════════
// RÉGLAGES
// ════════════════════════════════════════════════════════

function renderSettings() {
  document.getElementById('settings-info').innerHTML = `
    <div class="wcard-title">Statistiques</div>
    <div style="font-size:13px;color:var(--text2);">${S.sessions.length} séances · ${S.progs.length} programmes</div>
    ${currentUser ? `<div style="font-size:12px;color:var(--text2);margin-top:4px;">Connecté : ${currentUser.email}</div>` : ''}
  `;
}

function exportData() {
  const data = { oneRMs: S.rm, sessions: S.sessions, programs: S.progs, activeProgram: S.ap };
  const blob = new Blob([JSON.stringify(data, null, 2)], { type: 'application/json' });
  const a = document.createElement('a');
  a.href = URL.createObjectURL(blob);
  a.download = `supremagym-backup-${new Date().toISOString().slice(0, 10)}.json`;
  a.click();
  notify('✅ Export OK !');
}

function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      if (d.sessions)                    S.sessions = d.sessions;
      if (d.oneRMs)                      S.rm       = d.oneRMs;
      if (d.programs)                    S.progs    = d.programs;
      if (d.activeProgram !== undefined) S.ap       = d.activeProgram;
      sv('sessions',      S.sessions);
      sv('oneRMs',        S.rm);
      sv('programs',      S.progs);
      sv('activeProgram', S.ap);
      renderDash();
      notify('✅ Import OK !');
    } catch (err) {
      notify('❌ Fichier invalide');
    }
  };
  reader.readAsText(file);
}

function clearAllData() {
  if (!confirm('Effacer TOUTES les données ? Irréversible !')) return;
  if (!confirm('Vraiment tout effacer ?')) return;
  S = {
    rm:       { squat: null, bench: null, deadlift: null },
    sessions: [],
    cur:      [],
    progs:    [],
    ap:       null,
    ctx:      null
  };
  ['oneRMs','sessions','programs','activeProgram','currentSession','currentSessionContext','customExercises']
    .forEach(k => localStorage.removeItem(k));
  syncToCloud();
  renderDash();
  notify('🗑️ Données effacées');
}
