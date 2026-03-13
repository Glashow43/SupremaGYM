/ ══════════════════════════════════════════════════════════
// js/programs.js — Gestion des programmes + Éditeur de séance
// ══════════════════════════════════════════════════════════

// ── ID du programme affiché en détail ────────────────────
let dpid = null;

// ════════════════════════════════════════════════════════
// LISTE DES PROGRAMMES
// ════════════════════════════════════════════════════════

/** Rend la liste de tous les programmes */
function renderProgList() {
  const el = document.getElementById('prog-list-content');
  if (!S.progs.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📋</div><p>Aucun programme</p></div>';
    return;
  }
  el.innerHTML = S.progs.map(p => {
    const isActive = S.ap && S.ap.programId === p.id;
    return `
      <div class="prog-item${isActive ? ' active-prog' : ''}" onclick="openProgDetail(${p.id})">
        <div class="prog-icon" style="background:rgba(139,108,247,0.15);">📋</div>
        <div class="prog-info">
          <div class="prog-name">${p.name}</div>
          <div class="prog-meta">${p.weeks.length} semaines · ${p.weeks[0]?.sessions.length || 0} séances/sem</div>
          ${isActive ? '<span class="bdg g">ACTIF</span>' : ''}
        </div>
        ${!isActive ? `<button class="btn g sm" onclick="event.stopPropagation();activateProgram(${p.id})">Activer</button>` : ''}
      </div>`;
  }).join('');
}

/** Affiche la sous-page liste (masque la sous-page détail) */
function showProgList() {
  document.getElementById('prog-list').classList.add('active');
  document.getElementById('prog-detail').classList.remove('active');
}

/** Affiche la sous-page détail d'un programme */
function openProgDetail(pid) {
  dpid = pid;
  document.getElementById('prog-list').classList.remove('active');
  document.getElementById('prog-detail').classList.add('active');
  renderProgDetail();
}

/** Rend le détail d'un programme (semaines, séances, boutons Éditer/Lancer) */
function renderProgDetail() {
  const prog = S.progs.find(p => p.id === dpid);
  if (!prog) return;
  document.getElementById('detail-prog-name').textContent = prog.name;
  const el = document.getElementById('detail-weeks-content');
  el.innerHTML = prog.weeks.map((w, wi) => `
    <div class="wcard" style="margin-bottom:10px;padding:0;overflow:hidden;">
      <div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;cursor:pointer;user-select:none;" onclick="toggleProgWeek(this)">
        <div style="display:flex;align-items:center;gap:8px;">
          <span style="font-size:14px;color:var(--text2);display:inline-block;transition:transform 0.2s;">›</span>
          <span style="font-size:13px;font-weight:800;color:var(--purple);">Semaine ${w.weekNum}</span>
          <span style="font-size:11px;color:var(--text2);">${w.sessions.length} séance${w.sessions.length !== 1 ? 's' : ''}</span>
        </div>
        <button class="btn r sm" onclick="event.stopPropagation();deleteWeek(${wi})">🗑 Supprimer</button>
      </div>
      <div style="display:none;padding:0 14px 12px;">
        ${w.sessions.map((s, si) => `
          <div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:var(--surface2);border-radius:8px;margin-bottom:6px;margin-top:6px;">
            <div>
              <div style="font-size:13px;font-weight:700;">${s.name}</div>
              <div style="font-size:11px;color:var(--text2);">${s.exercises.length} exercice${s.exercises.length !== 1 ? 's' : ''}</div>
            </div>
            <div style="display:flex;gap:6px;">
              <button class="btn b sm" onclick="openExEditor(${dpid},${wi},${si})">✏️ Éditer</button>
              <button class="btn r sm" onclick="deleteSess(${wi},${si})">🗑</button>
            </div>
          </div>
        `).join('')}
        <button onclick="addSessToWeek(${dpid},${wi})" style="width:100%;padding:7px;background:none;border:1.5px dashed var(--border);border-radius:8px;color:var(--blue);font-size:12px;font-weight:700;cursor:pointer;font-family:'Inter',sans-serif;margin-top:4px;">＋ Ajouter une séance</button>
      </div>
    </div>
  `).join('');
}

// ── CRUD Programmes ───────────────────────────────────────

/** Crée un nouveau programme vide à partir du modal */
function createProgram() {
  const name = document.getElementById('prog-name-input').value.trim();
  const nw   = parseInt(document.getElementById('prog-weeks-input').value) || 4;
  const ns   = parseInt(document.getElementById('prog-sessions-input').value) || 4;
  if (!name) { notify('Entre un nom'); return; }

  S.progs.push({
    id: Date.now(),
    name,
    weeks: Array(nw).fill(null).map((_, wi) => ({
      weekNum: wi + 1,
      sessions: Array(ns).fill(null).map((_, si) => ({
        id:        Date.now() + wi * 100 + si,
        name:      `Séance ${si + 1}`,
        exercises: []
      }))
    }))
  });
  sv('programs', S.progs);
  closeModal('modal-create-prog');
  document.getElementById('prog-name-input').value = '';
  renderProgList();
  openProgDetail(S.progs[S.progs.length - 1].id);
  notify('Programme créé ! 🎉');
}

/** Ajoute une semaine vide au programme affiché */
function addWeek() {
  const p = S.progs.find(p => p.id === dpid);
  if (!p) return;
  p.weeks.push({
    weekNum: p.weeks.length + 1,
    sessions: [{ id: Date.now(), name: 'Séance 1', exercises: [] }]
  });
  sv('programs', S.progs);
  renderProgDetail();
}

/** Ajoute une séance à une semaine donnée */
function addSessToWeek(pid, wi) {
  const p = S.progs.find(p => p.id === pid);
  if (!p) return;
  p.weeks[wi].sessions.push({
    id:        Date.now(),
    name:      `Séance ${p.weeks[wi].sessions.length + 1}`,
    exercises: []
  });
  sv('programs', S.progs);
  renderProgDetail();
}

/**
 * Active un programme : remet le compteur à Sem1 / Séance1.
 * @param {number} pid - ID du programme
 */
function activateProgram(pid) {
  S.ap = { programId: pid, weekIdx: 0, sessionIdx: 0 };
  sv('activeProgram', S.ap);
  renderProgList();
  notify('Programme activé ! 💪');
}

/** Toggle l'accordéon d'une semaine dans le détail programme */
function toggleProgWeek(hdr) {
  const body    = hdr.nextElementSibling;
  const chevron = hdr.querySelector('span');
  const open    = body.style.display === 'block';
  body.style.display      = open ? 'none' : 'block';
  chevron.style.transform = open ? '' : 'rotate(90deg)';
}

/** Supprime une semaine entière (avec confirmation) */
function deleteWeek(wi) {
  const p = S.progs.find(p => p.id === dpid);
  if (!p) return;
  if (!confirm(`Supprimer la semaine ${wi + 1} et toutes ses séances ?`)) return;
  p.weeks.splice(wi, 1);
  // Renumérote les semaines
  p.weeks.forEach((w, i) => w.weekNum = i + 1);
  sv('programs', S.progs);
  renderProgDetail();
}

/** Supprime une séance d'une semaine (avec confirmation) */
function deleteSess(wi, si) {
  const p = S.progs.find(p => p.id === dpid);
  if (!p) return;
  const sessName = p.weeks[wi].sessions[si].name;
  if (!confirm(`Supprimer "${sessName}" ?`)) return;
  p.weeks[wi].sessions.splice(si, 1);
  sv('programs', S.progs);
  renderProgDetail();
}


function deleteProgram(pid) {
  if (!confirm('Supprimer ce programme ?')) return;
  S.progs = S.progs.filter(p => p.id !== pid);
  if (S.ap && S.ap.programId === pid) { S.ap = null; sv('activeProgram', null); }
  sv('programs', S.progs);
  showProgList();
  renderProgList();
}

// ════════════════════════════════════════════════════════
// ÉDITEUR DE SÉANCE (overlay plein écran)
// ════════════════════════════════════════════════════════

/**
 * État de l'éditeur de séance.
 * pid, wi, si : localisation dans S.progs
 * exs : copie profonde des exercices en cours d'édition
 */
let eeState = { pid: null, wi: null, si: null, exs: [] };

/**
 * Normalise un exercice : s'assure qu'il a au moins une série.
 * @param {object} ex
 */
function normEx(ex) {
  if (!ex.series || !ex.series.length)
    ex.series = [{ reps: 5, pct: null, weight: null, rpe: null, rest: 180 }];
  return ex;
}

/**
 * Ouvre l'éditeur pour la séance [wi][si] du programme pid.
 */
function openExEditor(pid, wi, si) {
  const prog = S.progs.find(p => p.id === pid);
  if (!prog) return;
  const sess = prog.weeks[wi].sessions[si];
  eeState = {
    pid, wi, si,
    exs: sess.exercises.map(ex => normEx(JSON.parse(JSON.stringify(ex))))
  };
  document.getElementById('ee-title').textContent = `${prog.name} · S${wi + 1}.${si + 1} — ${sess.name}`;
  renderExEditor();
  document.getElementById('ex-editor').classList.add('open');
}

/** Ferme l'éditeur */
function closeExEditor() {
  document.getElementById('ex-editor').classList.remove('open');
}

/** Rend le corps de l'éditeur (tous les exercices et leurs séries) */
function renderExEditor() {
  const el = document.getElementById('ee-body');
  if (!eeState.exs.length) {
    el.innerHTML = '<div class="empty" style="margin-top:20px;"><p>Aucun exercice<br>Ajouter avec le bouton + Exercice</p></div>';
    return;
  }
  el.innerHTML = eeState.exs.map((ex, ei) => `
    <div class="ee-ex-item">
      <div class="ee-ex-hdr">
        <div class="ee-ex-name">${ex.name}</div>
        <div style="display:flex;gap:6px;">
          <button class="btn g sm" onclick="addSetToEE(${ei})">＋ Série</button>
          <button class="btn r sm" onclick="removeExFromEE(${ei})">✕</button>
        </div>
      </div>
      <div class="ee-hdr-labels">
        <span class="ee-lbl">#</span>
        <span class="ee-lbl">Reps</span>
        <span class="ee-lbl">%1RM</span>
        <span class="ee-lbl">Poids</span>
        <span class="ee-lbl">RPE</span>
        <span class="ee-lbl"></span>
      </div>
      ${ex.series.map((s, si) => `
        <div class="ee-set-row">
          <span class="ee-set-num">${si + 1}</span>
          <input class="ee-inp" type="number" value="${s.reps  || ''}" placeholder="5" oninput="eeUpdate(${ei},${si},'reps',this.value)">
          <input class="ee-inp" type="number" value="${s.pct   || ''}" placeholder="—" oninput="eeUpdate(${ei},${si},'pct',this.value)">
          <input class="ee-inp" type="number" value="${s.weight|| ''}" placeholder="—" oninput="eeUpdate(${ei},${si},'weight',this.value)">
          <input class="ee-inp" type="number" value="${s.rpe   || ''}" placeholder="—" oninput="eeUpdate(${ei},${si},'rpe',this.value)">
          <button onclick="removeSetFromEE(${ei},${si})" style="background:none;border:none;color:var(--red);font-size:16px;cursor:pointer;">✕</button>
        </div>
      `).join('')}
    </div>
  `).join('');
}

/** Met à jour une valeur dans eeState */
function eeUpdate(ei, si, key, val) {
  eeState.exs[ei].series[si][key] = val === '' ? null : parseFloat(val) || parseInt(val) || val;
}

/** Ajoute une série (copie la dernière) */
function addSetToEE(ei) {
  const last = eeState.exs[ei].series.slice(-1)[0] || {};
  eeState.exs[ei].series.push({
    reps: last.reps || 5, pct: last.pct || null,
    weight: last.weight || null, rpe: last.rpe || null, rest: 180
  });
  renderExEditor();
}

/** Supprime une série */
function removeSetFromEE(ei, si) { eeState.exs[ei].series.splice(si, 1); renderExEditor(); }

/** Supprime un exercice de l'éditeur */
function removeExFromEE(ei) { eeState.exs.splice(ei, 1); renderExEditor(); }

/** Sauvegarde les modifications dans S.progs et ferme l'éditeur */
function saveExEditor() {
  const prog = S.progs.find(p => p.id === eeState.pid);
  if (!prog) return;
  prog.weeks[eeState.wi].sessions[eeState.si].exercises = eeState.exs;
  sv('programs', S.progs);
  closeExEditor();
  renderProgDetail();
  notify('✅ Séance sauvegardée !');
}
