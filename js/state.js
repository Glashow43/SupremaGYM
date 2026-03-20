// ══════════════════════════════════════════════════════════
// js/state.js — État global de l'application + helpers localStorage
// ══════════════════════════════════════════════════════════

// ── Helpers localStorage ──────────────────────────────────
function ld(k, d) {
  try { return JSON.parse(localStorage.getItem(k)) ?? d; }
  catch { return d; }
}

function sv(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
  scheduleSyncToCloud();
}

// ── IDs des programmes prédéfinis (verrouillés) ───────────
const PRESET_PROGRAM_IDS = [1001];

function isPreset(pid) {
  return PRESET_PROGRAM_IDS.includes(pid);
}

// ── État global S ─────────────────────────────────────────
let S = {
  rm:       ld('oneRMs',                { squat: null, bench: null, deadlift: null }),
  sessions: ld('sessions',              []),
  cur:      ld('currentSession',        []),
  progs:    ld('programs',              []),
  ap:       ld('activeProgram',         null),
  ctx:      ld('currentSessionContext', null)
};

let xid = 0;

// ── Réinitialisation du programme par défaut ─────────────
// Remplace le programme prédéfini par sa version à jour depuis data.js
// Appelé au démarrage pour s'assurer que le preset est toujours à jour
function resetDefaultProgram() {
  var def  = getDefaultProgram();
  var idx  = S.progs.findIndex(function(p) { return p.id === def.id; });
  if (idx >= 0) {
    S.progs[idx] = def;
  } else {
    S.progs.unshift(def);
  }
  sv('programs', S.progs);
}
