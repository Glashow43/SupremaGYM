// ══════════════════════════════════════════════════════════
// js/programs.js — Gestion des programmes + Éditeur de séance
// ══════════════════════════════════════════════════════════

let dpid = null;

// ════════════════════════════════════════════════════════
// MAPPING CATÉGORIE → 1RM
// ════════════════════════════════════════════════════════

// Retourne le liftType associé à une catégorie d'exercice
function getLiftForCat(cat) {
  if (cat === 'Jambes')    return 'squat';
  if (cat === 'Pectoraux') return 'bench';
  if (cat === 'Dos')       return 'deadlift';
  return null;
}

// Retourne le 1RM en kg pour un liftType donné (ou null)
function get1RMForLift(liftType) {
  if (!liftType || !S.rm) return null;
  var val = S.rm[liftType];
  return (val && val > 0) ? val : null;
}

// ════════════════════════════════════════════════════════
// LISTE DES PROGRAMMES
// ════════════════════════════════════════════════════════

function renderProgList() {
  const el = document.getElementById('prog-list-content');
  if (!S.progs.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📋</div><p>Aucun programme</p></div>';
    return;
  }
  el.innerHTML = S.progs.map(function(p) {
    var isActive = S.ap && S.ap.programId === p.id;
    return '<div class="prog-item" onclick="openProgDetail(' + p.id + ')">'
      + '<div class="prog-icon" style="background:rgba(139,108,247,0.15);">📋</div>'
      + '<div class="prog-info">'
      + '<div class="prog-name">' + p.name + '</div>'
      + '<div class="prog-meta">' + p.weeks.length + ' semaines · ' + (p.weeks[0] && p.weeks[0].sessions.length || 0) + ' séances/sem</div>'
      + '</div>'
      + '<button class="btn r sm" onclick="event.stopPropagation();deleteProgram(' + p.id + ')">🗑</button>'
      + '</div>';
  }).join('');
}

function showProgList() {
  document.getElementById('prog-list').classList.add('active');
  document.getElementById('prog-detail').classList.remove('active');
}

function openProgDetail(pid) {
  dpid = pid;
  document.getElementById('prog-list').classList.remove('active');
  document.getElementById('prog-detail').classList.add('active');
  renderProgDetail();
}

function renderProgDetail() {
  const prog = S.progs.find(function(p) { return p.id === dpid; });
  if (!prog) return;
  document.getElementById('detail-prog-name').textContent = prog.name;
  const el = document.getElementById('detail-weeks-content');
  el.innerHTML = prog.weeks.map(function(w, wi) {
    const sessHTML = w.sessions.map(function(s, si) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:var(--surface2);border-radius:8px;margin-bottom:6px;margin-top:6px;">'
        + '<div>'
        + '<div style="font-size:13px;font-weight:700;">' + s.name + '</div>'
        + '<div style="font-size:11px;color:var(--text2);">' + s.exercises.length + ' exercice' + (s.exercises.length !== 1 ? 's' : '') + '</div>'
        + '</div>'
        + '<div style="display:flex;gap:6px;">'
        + '<button class="btn b sm" onclick="openExEditor(' + dpid + ',' + wi + ',' + si + ')">✏️ Éditer</button>'
        + '<button class="btn r sm" onclick="deleteSess(' + wi + ',' + si + ')">🗑</button>'
        + '</div>'
        + '</div>';
    }).join('');
    return '<div class="wcard" style="margin-bottom:10px;padding:0;overflow:hidden;">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;cursor:pointer;user-select:none;" onclick="toggleProgWeek(this)">'
      + '<div style="display:flex;align-items:center;gap:8px;">'
      + '<span style="font-size:14px;color:var(--text2);display:inline-block;transition:transform 0.2s;">›</span>'
      + '<span style="font-size:13px;font-weight:800;color:var(--purple);">Semaine ' + w.weekNum + '</span>'
      + '<span style="font-size:11px;color:var(--text2);">' + w.sessions.length + ' séance' + (w.sessions.length !== 1 ? 's' : '') + '</span>'
      + '</div>'
      + '<button class="btn r sm" onclick="event.stopPropagation();deleteWeek(' + wi + ')">🗑 Supprimer</button>'
      + '</div>'
      + '<div style="display:none;padding:0 14px 12px;">'
      + sessHTML
      + '<button onclick="addSessToWeek(' + dpid + ',' + wi + ')" style="width:100%;padding:7px;background:none;border:1.5px dashed var(--border);border-radius:8px;color:var(--blue);font-size:12px;font-weight:700;cursor:pointer;font-family:\'Inter\',sans-serif;margin-top:4px;">＋ Ajouter une séance</button>'
      + '</div>'
      + '</div>';
  }).join('');
}

// ── CRUD ─────────────────────────────────────────────────

function createProgram() {
  var name = document.getElementById('prog-name-input').value.trim();
  var nw   = parseInt(document.getElementById('prog-weeks-input').value) || 4;
  var ns   = parseInt(document.getElementById('prog-sessions-input').value) || 4;
  if (!name) { notify('Entre un nom'); return; }
  var weeks = [];
  for (var wi = 0; wi < nw; wi++) {
    var sessions = [];
    for (var si = 0; si < ns; si++) {
      sessions.push({ id: Date.now() + wi * 100 + si, name: 'Séance ' + (si + 1), exercises: [] });
    }
    weeks.push({ weekNum: wi + 1, sessions: sessions });
  }
  S.progs.push({ id: Date.now(), name: name, weeks: weeks });
  sv('programs', S.progs);
  closeModal('modal-create-prog');
  document.getElementById('prog-name-input').value = '';
  renderProgList();
  openProgDetail(S.progs[S.progs.length - 1].id);
  notify('Programme créé ! 🎉');
}

function addWeek() {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p) return;
  p.weeks.push({ weekNum: p.weeks.length + 1, sessions: [{ id: Date.now(), name: 'Séance 1', exercises: [] }] });
  sv('programs', S.progs);
  renderProgDetail();
}

function addSessToWeek(pid, wi) {
  var p = S.progs.find(function(p) { return p.id === pid; });
  if (!p) return;
  p.weeks[wi].sessions.push({ id: Date.now(), name: 'Séance ' + (p.weeks[wi].sessions.length + 1), exercises: [] });
  sv('programs', S.progs);
  renderProgDetail();
}

function toggleProgWeek(hdr) {
  var body    = hdr.nextElementSibling;
  var chevron = hdr.querySelector('span');
  var open    = body.style.display === 'block';
  body.style.display      = open ? 'none' : 'block';
  chevron.style.transform = open ? '' : 'rotate(90deg)';
}

function deleteWeek(wi) {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p) return;
  if (!confirm('Supprimer la semaine ' + (wi + 1) + ' et toutes ses séances ?')) return;
  p.weeks.splice(wi, 1);
  p.weeks.forEach(function(w, i) { w.weekNum = i + 1; });
  sv('programs', S.progs);
  renderProgDetail();
}

function deleteSess(wi, si) {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p) return;
  var sessName = p.weeks[wi].sessions[si].name;
  if (!confirm('Supprimer "' + sessName + '" ?')) return;
  p.weeks[wi].sessions.splice(si, 1);
  sv('programs', S.progs);
  renderProgDetail();
}

function deleteProgram(pid) {
  if (!confirm('Supprimer ce programme ?')) return;
  S.progs = S.progs.filter(function(p) { return p.id !== pid; });
  if (S.ap && S.ap.programId === pid) { S.ap = null; sv('activeProgram', null); }
  sv('programs', S.progs);
  showProgList();
  renderProgList();
}

// ════════════════════════════════════════════════════════
// ÉDITEUR DE SÉANCE
// ════════════════════════════════════════════════════════

var eeState = { pid: null, wi: null, si: null, exs: [] };

function normEx(ex) {
  if (!ex.series || !ex.series.length)
    ex.series = [{ reps: 5, pct: null, weight: null, rpe: null, rest: 180 }];
  return ex;
}

function openExEditor(pid, wi, si) {
  var prog = S.progs.find(function(p) { return p.id === pid; });
  if (!prog) return;
  var sess = prog.weeks[wi].sessions[si];
  eeState = { pid: pid, wi: wi, si: si, exs: sess.exercises.map(function(ex) { return normEx(JSON.parse(JSON.stringify(ex))); }) };
  document.getElementById('ee-title').textContent = prog.name + ' · S' + (wi + 1) + '.' + (si + 1) + ' — ' + sess.name;
  renderExEditor();
  document.getElementById('ex-editor').classList.add('open');
}

function closeExEditor() {
  document.getElementById('ex-editor').classList.remove('open');
}

function renderExEditor() {
  var el = document.getElementById('ee-body');
  if (!eeState.exs.length) {
    el.innerHTML = '<div class="empty" style="margin-top:20px;"><p>Aucun exercice<br>Ajouter avec le bouton + Exercice</p></div>';
    return;
  }
  var allEx = getAllExercises();
  var html = '';
  for (var ei = 0; ei < eeState.exs.length; ei++) {
    var ex    = eeState.exs[ei];
    var found = allEx.find(function(e) { return e.name.toLowerCase() === ex.name.toLowerCase(); });
    var cat   = (found && found.cat) || 'Personnalisé';
    var icon  = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];

    // Détermine si cette catégorie a un 1RM associé
    var liftForCat = getLiftForCat(cat);
    var rm         = get1RMForLift(liftForCat);
    var hasRm      = rm !== null;

    // Indicateur 1RM affiché dans le header de l'exercice
    var rmBadge = hasRm
      ? '<span style="font-size:10px;background:rgba(139,108,247,0.2);color:var(--purple2);border-radius:6px;padding:2px 7px;font-weight:700;margin-left:6px;">1RM ' + rm + ' kg</span>'
      : '';

    var rows = '';
    for (var si = 0; si < ex.series.length; si++) {
      var s = ex.series[si];
      rows += '<div class="ee-set-row">'
        + '<span class="ee-set-num">' + (si + 1) + '</span>'
        + '<input class="ee-inp" type="number" value="' + (s.reps   || '') + '" placeholder="5"   oninput="eeUpdate(' + ei + ',' + si + ',\'reps\',this.value)">'
        + '<input class="ee-inp" type="number" value="' + (s.pct    || '') + '" placeholder="—"   oninput="eeUpdatePct(' + ei + ',' + si + ',this.value,\'' + cat + '\')" step="0.5">'
        + '<input class="ee-inp" type="number" value="' + (s.weight !== null && s.weight !== undefined ? s.weight : '') + '" placeholder="—" oninput="eeUpdateWeight(' + ei + ',' + si + ',this.value,\'' + cat + '\')" step="0.5">'
        + '<input class="ee-inp" type="number" value="' + (s.rpe    || '') + '" placeholder="—"   oninput="eeUpdate(' + ei + ',' + si + ',\'rpe\',this.value)">'
        + '<button onclick="removeSetFromEE(' + ei + ',' + si + ')" style="background:none;border:none;color:var(--red);font-size:16px;cursor:pointer;">✕</button>'
        + '</div>';
    }

    html += '<div class="ee-ex-item">'
      + '<div class="ee-ex-hdr">'
      + '<div style="display:flex;align-items:center;gap:10px;">'
      + '<div style="width:36px;height:36px;border-radius:9px;overflow:hidden;flex-shrink:0;">'
      + (found && found.image
        ? '<img src="' + found.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentElement.innerHTML=\'<div style=width:36px;height:36px;border-radius:9px;background:' + icon.bg + ';display:flex;align-items:center;justify-content:center;font-size:20px;>' + icon.emoji + '</div>\'">'
        : '<div style="width:36px;height:36px;border-radius:9px;background:' + icon.bg + ';display:flex;align-items:center;justify-content:center;font-size:20px;">' + icon.emoji + '</div>')
      + '</div>'
      + '<div>'
      + '<div style="display:flex;align-items:center;flex-wrap:wrap;gap:4px;">'
      + '<div class="ee-ex-name">' + ex.name + '</div>'
      + rmBadge
      + '</div>'
      + '<div style="font-size:10px;color:' + icon.color + ';font-weight:600;">' + cat + '</div>'
      + '</div>'
      + '</div>'
      + '<div style="display:flex;gap:4px;">'
      + '<button class="btn out sm" onclick="moveExInEE(' + ei + ',-1)" style="padding:4px 8px;" ' + (ei === 0 ? 'disabled style="opacity:0.3;padding:4px 8px;"' : '') + '>↑</button>'
      + '<button class="btn out sm" onclick="moveExInEE(' + ei + ',1)"  style="padding:4px 8px;" ' + (ei === eeState.exs.length - 1 ? 'disabled style="opacity:0.3;padding:4px 8px;"' : '') + '>↓</button>'
      + '<button class="btn r sm" onclick="removeExFromEE(' + ei + ')">✕</button>'
      + '</div>'
      + '</div>'
      + '<div class="ee-hdr-labels">'
      + '<span class="ee-lbl">#</span>'
      + '<span class="ee-lbl">Reps</span>'
      + '<span class="ee-lbl">%1RM</span>'
      + '<span class="ee-lbl">Poids</span>'
      + '<span class="ee-lbl">RPE</span>'
      + '<span class="ee-lbl"></span>'
      + '</div>'
      + rows
      + '<div style="padding:8px 10px;">'
      + '<button class="btn g sm full" onclick="addSetToEE(' + ei + ')">＋ Série</button>'
      + '</div>'
      + '</div>';
  }
  el.innerHTML = html;
}

// ── Mise à jour générique ─────────────────────────────────
function eeUpdate(ei, si, key, val) {
  eeState.exs[ei].series[si][key] = val === '' ? null : parseFloat(val) || parseInt(val) || val;
}

// ── Saisie du % → calcule le poids si 1RM dispo ──────────
function eeUpdatePct(ei, si, val, cat) {
  var pct  = val === '' ? null : parseFloat(val);
  eeState.exs[ei].series[si].pct = pct;

  var liftType = getLiftForCat(cat);
  var rm       = get1RMForLift(liftType);
  if (rm && pct) {
    var computed = Math.round((rm * pct / 100) * 4) / 4; // arrondi au 0.25 kg
    eeState.exs[ei].series[si].weight = computed;
    // Mettre à jour le champ poids dans le DOM sans re-render complet
    var rows = document.querySelectorAll('.ee-set-row');
    var idx  = _eeRowIndex(ei, si);
    if (rows[idx]) {
      var weightInp = rows[idx].querySelectorAll('.ee-inp')[2];
      if (weightInp) weightInp.value = computed;
    }
  }
}

// ── Saisie du poids → calcule le % si 1RM dispo ──────────
function eeUpdateWeight(ei, si, val, cat) {
  var weight = val === '' ? null : parseFloat(val);
  eeState.exs[ei].series[si].weight = weight;

  var liftType = getLiftForCat(cat);
  var rm       = get1RMForLift(liftType);
  if (rm && weight) {
    var computed = Math.round((weight / rm * 100) * 10) / 10; // arrondi au 0.1%
    eeState.exs[ei].series[si].pct = computed;
    var rows = document.querySelectorAll('.ee-set-row');
    var idx  = _eeRowIndex(ei, si);
    if (rows[idx]) {
      var pctInp = rows[idx].querySelectorAll('.ee-inp')[1];
      if (pctInp) pctInp.value = computed;
    }
  }
}

// Calcule l'index global d'une ligne série dans le DOM
function _eeRowIndex(ei, si) {
  var idx = 0;
  for (var i = 0; i < ei; i++) idx += eeState.exs[i].series.length;
  return idx + si;
}

function addSetToEE(ei) {
  var last = eeState.exs[ei].series.slice(-1)[0] || {};
  eeState.exs[ei].series.push({ reps: last.reps || 5, pct: last.pct || null, weight: last.weight || null, rpe: last.rpe || null, rest: 180 });
  renderExEditor();
}

function moveExInEE(ei, dir) {
  var target = ei + dir;
  if (target < 0 || target >= eeState.exs.length) return;
  var tmp = eeState.exs[ei];
  eeState.exs[ei] = eeState.exs[target];
  eeState.exs[target] = tmp;
  renderExEditor();
}

function removeSetFromEE(ei, si) { eeState.exs[ei].series.splice(si, 1); renderExEditor(); }
function removeExFromEE(ei)       { eeState.exs.splice(ei, 1);            renderExEditor(); }

function saveExEditor() {
  var prog = S.progs.find(function(p) { return p.id === eeState.pid; });
  if (!prog) return;
  prog.weeks[eeState.wi].sessions[eeState.si].exercises = eeState.exs;
  sv('programs', S.progs);
  closeExEditor();
  renderProgDetail();
  notify('✅ Séance sauvegardée !');
}
