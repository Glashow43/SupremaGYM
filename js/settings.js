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

// ════════════════════════════════════════════════════════
// IMPORT
// ════════════════════════════════════════════════════════

/**
 * Crée en exercices perso tous les exercices des programmes donnés
 * qui n'existent pas encore dans la bibliothèque (intégrés + ExerciseDB + perso).
 * Comparaison insensible à la casse et aux accents.
 * @param {Array} programs
 * @returns {number} nombre d'exercices créés
 */
function createMissingExercises(programs) {
  function norm(s) {
    return (s || '').toLowerCase().normalize('NFD').replace(/[\u0300-\u036f]/g, '').trim();
  }
  var catByLift = { squat: 'Jambes', bench: 'Pectoraux', deadlift: 'Dos' };

  var known = {};
  getAllExercises().forEach(function (e) { known[norm(e.name)] = true; });

  var custom  = ld('customExercises', []) || [];
  var created = 0;

  (programs || []).forEach(function (p) {
    (p.weeks || []).forEach(function (w) {
      (w.sessions || []).forEach(function (s) {
        (s.exercises || []).forEach(function (ex) {
          var key = norm(ex.name);
          if (!key || known[key]) return;
          known[key] = true;
          custom.push({
            name:          ex.name,
            desc:          'Importé avec le programme ' + p.name,
            cat:           catByLift[ex.liftType] || 'Personnalisé',
            lift:          ex.liftType || '',
            defaultWeight: 0,
            image:         '',
            custom:        true
          });
          created++;
        });
      });
    });
  });

  if (created) sv('customExercises', custom);
  return created;
}

/**
 * Importe des données depuis un fichier JSON.
 * - Sauvegarde complète (sessions/oneRMs présents) → restauration totale (avec confirmation)
 * - Fichier "programmes seuls" → fusion avec les programmes existants (mise à jour si même id)
 * Dans les deux cas, les exercices absents de la bibliothèque sont créés en exercices perso.
 * @param {Event} e - événement onChange de l'input file
 */
function importData(e) {
  const file = e.target.files[0];
  if (!file) return;
  const reader = new FileReader();
  reader.onload = ev => {
    try {
      const d = JSON.parse(ev.target.result);
      const isFullBackup = !!(d.sessions || d.oneRMs);

      if (isFullBackup) {
        if (!confirm('Ce fichier est une sauvegarde complète : elle va remplacer toutes tes données. Continuer ?')) {
          e.target.value = '';
          return;
        }
        if (d.sessions)                    S.sessions = d.sessions;
        if (d.oneRMs)                      S.rm       = d.oneRMs;
        if (d.programs)                    S.progs    = d.programs;
        if (d.activeProgram !== undefined) S.ap       = d.activeProgram;
        sv('sessions',      S.sessions);
        sv('oneRMs',        S.rm);
        sv('programs',      S.progs);
        sv('activeProgram', S.ap);
        const nbEx = createMissingExercises(S.progs);
        renderDash();
        notify('✅ Sauvegarde restaurée !' + (nbEx ? ' (' + nbEx + ' exercice(s) créé(s))' : ''));

      } else if (Array.isArray(d.programs) && d.programs.length) {
        let added = 0, updated = 0;
        const imported = [];
        d.programs.forEach(p => {
          if (!p || !p.name || !Array.isArray(p.weeks)) return;
          if (!p.id) p.id = Date.now() + added;
          const idx = S.progs.findIndex(x => x.id === p.id);
          if (idx === -1) { S.progs.push(p); added++; }
          else            { S.progs[idx] = p; updated++; }
          imported.push(p);
        });
        if (!added && !updated) { notify('❌ Aucun programme valide'); return; }
        sv('programs', S.progs);
        const nbEx = createMissingExercises(imported);
        renderDash();
        notify('✅ ' + added + ' ajouté(s), ' + updated + ' mis à jour'
          + (nbEx ? ', ' + nbEx + ' exercice(s) créé(s)' : ''));

      } else {
        notify('❌ Fichier invalide');
      }
    } catch (err) {
      console.error('Import :', err);
      notify('❌ Fichier invalide');
    }
    e.target.value = '';
  };
  reader.readAsText(file);
}

// ════════════════════════════════════════════════════════
// RESET
// ════════════════════════════════════════════════════════

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
