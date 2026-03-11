// ══════════════════════════════════════════════════════════
// js/state.js — État global de l'application + helpers localStorage
// ══════════════════════════════════════════════════════════

// ── Helpers localStorage ──────────────────────────────────

/**
 * Charge une valeur depuis localStorage.
 * @param {string} k  - clé
 * @param {*}      d  - valeur par défaut
 */
function ld(k, d) {
  try { return JSON.parse(localStorage.getItem(k)) ?? d; }
  catch { return d; }
}

/**
 * Sauvegarde une valeur dans localStorage ET planifie une sync cloud.
 * @param {string} k - clé
 * @param {*}      v - valeur
 */
function sv(k, v) {
  localStorage.setItem(k, JSON.stringify(v));
  scheduleSyncToCloud();  // défini dans firebase.js
}

// ── État global S ─────────────────────────────────────────
/**
 * Objet central de l'application.
 *
 * S.rm      — records 1RM  : { squat, bench, deadlift }
 * S.sessions — historique des séances terminées
 * S.cur      — séance en cours (sets en live)
 * S.progs    — liste des programmes
 * S.ap       — programme actif  : { programId, weekIdx, sessionIdx } | null
 * S.ctx      — contexte séance  : { progId, weekIdx, sessionIdx, progName, sessionName } | null
 */
let S = {
  rm:       ld('oneRMs',               { squat: null, bench: null, deadlift: null }),
  sessions: ld('sessions',             []),
  cur:      ld('currentSession',       []),
  progs:    ld('programs',             []),
  ap:       ld('activeProgram',        null),
  ctx:      ld('currentSessionContext', null)
};

/** Compteur auto-incrémenté pour les IDs d'exercices en séance */
let xid = 0;
