// ══════════════════════════════════════════════════════════
// js/session.js — Page Train + Logger de séance
// ══════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// WAKE LOCK — empêche l'écran de s'éteindre pendant la séance
// ════════════════════════════════════════════════════════
let wakeLock = null;

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {}
}
async function releaseWakeLock() {
  if (wakeLock) { await wakeLock.release(); wakeLock = null; }
}
// Ré-acquiert le wake lock si l'onglet revient au premier plan
document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') await requestWakeLock();
});

// ════════════════════════════════════════════════════════
// PAGE TRAIN — liste les programmes + séance suggérée
// ════════════════════════════════════════════════════════

function renderTrain() {
  const el    = document.getElementById('train-prog-list');
  const sugEl = document.getElementById('train-suggestion');
  sugEl.innerHTML = '';

  if (!S.progs.length) {
    el.innerHTML = `
      <div class="wcard" style="text-align:center;">
        <div class="empty-icon">📋</div>
        <p>Aucun programme</p>
        <button class="btn p" style="margin-top:10px;" onclick="showPage('programs',2)">Créer un programme</button>
      </div>`;
    return;
  }

  // ── Séance suggérée (programme actif)
  if (S.ap) {
    const prog = S.progs.find(p => p.id === S.ap.programId);
    if (prog) {
      const w = prog.weeks[S.ap.weekIdx];
      const s = w?.sessions[S.ap.sessionIdx];
      if (s) {
        sugEl.innerHTML = `
          <div class="wcard" style="background:linear-gradient(135deg,#28a745,#20c997);color:#fff;margin-bottom:10px;">
            <div style="font-size:11px;font-weight:800;opacity:0.8;margin-bottom:4px;">SÉANCE SUGGÉRÉE</div>
            <div style="font-size:16px;font-weight:800;margin-bottom:2px;">${s.name}</div>
            <div style="font-size:12px;opacity:0.85;margin-bottom:10px;">
              ${prog.name} · Sem ${S.ap.weekIdx + 1} · ${s.exercises.length} exercice${s.exercises.length !== 1 ? 's' : ''}
            </div>
            <button class="btn out" onclick="startSess(${prog.id},${S.ap.weekIdx},${S.ap.sessionIdx})">▶ Lancer maintenant</button>
          </div>`;
      }
    }
  }

  // ── Liste complète (arbre collapsible par programme)
  el.innerHTML = S.progs.map(p => {
    const isActive = S.ap && S.ap.programId === p.id;
    return `
      <div class="train-prog">
        <div class="train-prog-hdr" onclick="toggleTrainProg(this)">
          <span>📋</span>
          <span style="flex:1;">${p.name}</span>
          ${isActive ? '<span class="bdg g">ACTIF</span>' : ''}
          <span class="chevron">›</span>
        </div>
        <div class="train-prog-body">
          ${p.weeks.map((w, wi) => `
            <div style="margin-bottom:8px;">
              <div style="font-size:11px;font-weight:800;color:var(--purple);text-transform:uppercase;margin:8px 0 4px;">Semaine ${w.weekNum}</div>
              ${w.sessions.map((s, si) => {
                const isSug = isActive && S.ap.weekIdx === wi && S.ap.sessionIdx === si;
                return `
                  <div class="sess-item${isSug ? ' suggested' : ''}">
                    <div class="sess-item-info">
                      <div class="sess-item-name">${s.name}${isSug ? ' 📌' : ''}</div>
                      <div class="sess-item-meta">${s.exercises.length} exercice${s.exercises.length !== 1 ? 's' : ''}</div>
                    </div>
                    <button class="btn g sm" onclick="startSess(${p.id},${wi},${si})">▶ Lancer</button>
                  </div>`;
              }).join('')}
            </div>
          `).join('')}
        </div>
      </div>`;
  }).join('');
}

/** Toggle l'arbre d'un programme dans la page Train */
function toggleTrainProg(hdr) {
  hdr.classList.toggle('open');
  hdr.nextElementSibling.classList.toggle('open');
}

// ════════════════════════════════════════════════════════
// LANCEMENT DE SÉANCE
// ════════════════════════════════════════════════════════

/**
 * Lance une séance depuis un programme.
 * Charge les exercices dans S.cur, sauvegarde le contexte S.ctx.
 * NE fait PAS avancer le compteur (il n'avance qu'à la fin dans saveSession).
 *
 * @param {number} pid - ID du programme
 * @param {number} wi  - index de la semaine
 * @param {number} si  - index de la séance dans la semaine
 */
function startSess(pid, wi, si) {
  const prog = S.progs.find(p => p.id === pid);
  if (!prog) return;
  const sess = prog.weeks[wi].sessions[si];

  S.ctx = { progId: pid, weekIdx: wi, sessionIdx: si, progName: prog.name, sessionName: sess.name };
  S.cur = sess.exercises.map(ex => ({
    id:       ++xid,
    name:     ex.name,
    liftType: ex.liftType || ex.lift || '',
    sets:     (ex.series || [{ reps: 5, weight: null }]).map(s => ({
      reps:   s.reps || 5,
      weight: s.weight ? String(s.weight) : '',
      done:   false
    }))
  }));

  sv('currentSession',        S.cur);
  sv('currentSessionContext', S.ctx);
  requestWakeLock();
  showPage('session', 3);
}

// ════════════════════════════════════════════════════════
// LOGGER DE SÉANCE (page-session)
// ════════════════════════════════════════════════════════

/** Rend la liste des exercices de la séance en cours */
function renderSess() {
  const titleEl = document.getElementById('sess-title');
  const subEl   = document.getElementById('sess-subtitle');
  const exEl    = document.getElementById('sess-exercises');

  if (!S.cur || !S.cur.length) {
    titleEl.textContent = 'Séance en cours';
    subEl.textContent   = '';
    exEl.innerHTML      = '<div class="empty"><p>Aucun exercice · Utilise le bouton + pour ajouter</p></div>';
    return;
  }

  if (S.ctx) {
    titleEl.textContent = S.ctx.sessionName || 'Séance';
    subEl.textContent   = S.ctx.progName    || '';
  }

  exEl.innerHTML = S.cur.map((ex, ei) => `
    <div class="sess-ex">
      <div class="sess-ex-hdr">
        <div class="sess-ex-name">${ex.name}</div>
        <div style="display:flex;gap:6px;">
          <button class="btn g sm" onclick="addSetToSess(${ei})">＋</button>
          <button class="btn r sm" onclick="removeExFromSess(${ei})">✕</button>
        </div>
      </div>
      <div style="display:grid;grid-template-columns:28px 1fr 1fr 1fr 32px;gap:6px;padding:4px 12px 2px;background:var(--surface2);">
        <span class="set-lbl">#</span>
        <span class="set-lbl">Reps</span>
        <span class="set-lbl">Poids (kg)</span>
        <span class="set-lbl">RPE</span>
        <span class="set-lbl">✓</span>
      </div>
      ${ex.sets.map((s, si) => `
        <div class="sess-set-row">
          <span class="set-num">${si + 1}</span>
          <input class="set-inp" type="number" value="${s.reps}"    oninput="sessUpdate(${ei},${si},'reps',this.value)"   placeholder="5">
          <input class="set-inp" type="number" value="${s.weight}"  oninput="sessUpdate(${ei},${si},'weight',this.value)" placeholder="kg">
          <input class="set-inp" type="number" value="${s.rpe||''}" oninput="sessUpdate(${ei},${si},'rpe',this.value)"    placeholder="—" step="0.5">
          <button class="set-done${s.done ? ' done' : ''}" onclick="toggleDone(${ei},${si})">${s.done ? '✓' : ''}</button>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/** Met à jour un champ d'une série en live */
function sessUpdate(ei, si, key, val) {
  S.cur[ei].sets[si][key] = val;
  sv('currentSession', S.cur);
}

/** Toggle le checkmark "série faite" */
function toggleDone(ei, si) {
  S.cur[ei].sets[si].done = !S.cur[ei].sets[si].done;
  sv('currentSession', S.cur);
  renderSess();
}

/** Ajoute une série (copie la dernière) à un exercice */
function addSetToSess(ei) {
  const last = S.cur[ei].sets.slice(-1)[0] || { reps: 5, weight: '' };
  S.cur[ei].sets.push({ reps: last.reps, weight: last.weight, done: false });
  sv('currentSession', S.cur);
  renderSess();
}

/** Supprime un exercice de la séance en cours */
function removeExFromSess(ei) {
  S.cur.splice(ei, 1);
  sv('currentSession', S.cur);
  renderSess();
}

// ── Ajout rapide via picker ───────────────────────────────
let pendingPickedEx = null;

/**
 * Confirme l'ajout d'un exercice depuis le modal de configuration (séries/reps).
 * pendingPickedEx est défini dans exercises.js::pickExercise().
 */
function confirmQuickEx() {
  if (!pendingPickedEx) return;
  const sets = parseInt(document.getElementById('qex-sets').value) || 4;
  const reps = parseInt(document.getElementById('qex-reps').value) || 5;
  S.cur.push({
    id:       ++xid,
    name:     pendingPickedEx.name,
    liftType: pendingPickedEx.lift || '',
    sets:     Array(sets).fill(null).map(() => ({ reps, weight: '', done: false }))
  });
  sv('currentSession', S.cur);
  document.getElementById('modal-quick-ex').classList.remove('open');
  pendingPickedEx = null;
  renderSess();
}

// ════════════════════════════════════════════════════════
// TERMINER / ANNULER UNE SÉANCE
// ════════════════════════════════════════════════════════

/**
 * Sauvegarde la séance dans l'historique.
 * Met à jour les 1RM si un PR est détecté.
 * Avance le compteur du programme actif (uniquement ici, pas au lancement).
 */
function saveSession() {
  const sess = {
    id:        Date.now(),
    date:      new Date().toISOString(),
    context:   S.ctx,
    exercises: S.cur.map(ex => ({
      name:     ex.name,
      liftType: ex.liftType,
      sets:     ex.sets.filter(s => s.weight || s.done)
    })).filter(e => e.sets.length > 0)
  };

  if (!sess.exercises.length && !confirm('Aucune série enregistrée. Sauvegarder quand même ?')) return;

  S.sessions.push(sess);

  // ── Mise à jour des 1RM (formule d'Epley)
  const prs = [];
  sess.exercises.forEach(ex => {
    if (!ex.liftType) return;
    ex.sets.forEach(s => {
      if (!s.weight) return;
      const est = s.reps === 1
        ? +s.weight
        : +(parseFloat(s.weight) / (1.0278 - 0.0278 * s.reps)).toFixed(1);
      if (!S.rm[ex.liftType] || est > S.rm[ex.liftType]) {
        S.rm[ex.liftType] = est;
        prs.push(`${ex.liftType}: ${est}kg`);
      }
    });
  });

  // Réinitialiser la séance
  S.cur = []; S.ctx = null;
  sv('sessions',             S.sessions);
  sv('oneRMs',               S.rm);
  sv('currentSession',       S.cur);
  sv('currentSessionContext', S.ctx);

  // ── Avancer le compteur du programme actif (seulement maintenant)
  if (S.ap && S.ap.programId === sess.context?.progId) {
    const prog = S.progs.find(p => p.id === S.ap.programId);
    if (prog) {
      let wi2 = S.ap.weekIdx;
      let si2 = S.ap.sessionIdx + 1;
      if (si2 >= prog.weeks[wi2].sessions.length) { wi2++; si2 = 0; }
      if (wi2 >= prog.weeks.length)                { wi2 = 0; si2 = 0; }
      S.ap = { programId: S.ap.programId, weekIdx: wi2, sessionIdx: si2 };
      sv('activeProgram', S.ap);
    }
  }

  releaseWakeLock();
  if (prs.length) notify('🏆 Nouveau PR ! ' + prs.join(', '));
  else            notify('✅ Séance sauvegardée !');
  showPage('home', 0);
}

/**
 * Annule la séance en cours (avec confirmation).
 * Ne fait PAS avancer le compteur de programme.
 */
function clearSession() {
  if (!confirm('Annuler la séance ? Les données seront perdues.')) return;
  S.cur = []; S.ctx = null;
  sv('currentSession',       S.cur);
  sv('currentSessionContext', S.ctx);
  releaseWakeLock();
  showPage('train', 3);
}
