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
const PRESET_PROGRAM_IDS = [1001, 1002, 1003, 1004, 1005, 1006];

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
