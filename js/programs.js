// ══════════════════════════════════════════════════════════
// js/programs.js — Gestion des programmes + Éditeur de séance
// ══════════════════════════════════════════════════════════

let dpid = null;

// ════════════════════════════════════════════════════════
// MAPPING CATÉGORIE → 1RM
// ════════════════════════════════════════════════════════

function getLiftForCat(cat) {
  if (cat === 'Jambes')    return 'squat';
  if (cat === 'Pectoraux') return 'bench';
  if (cat === 'Dos')       return 'deadlift';
  return null;
}

function get1RMForLift(liftType) {
  if (!liftType || !S.rm) return null;
  var val = S.rm[liftType];
  return (val && val > 0) ? val : null;
}

// ════════════════════════════════════════════════════════
// RENOMMAGE INLINE
// ════════════════════════════════════════════════════════

// Renomme le programme
function renameProg(pid) {
  var p = S.progs.find(function(p) { return p.id === pid; });
  if (!p || isPreset(pid)) return;
  var val = prompt('Nouveau nom du programme :', p.name);
  if (!val || !val.trim()) return;
  p.name = val.trim();
  sv('programs', S.progs);
  renderProgList();
  renderProgDetail();
}

// Renomme une semaine (son label affiché, ex: "Semaine 1" → "Semaine Force")
function renameWeek(wi) {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p || isPreset(p.id)) return;
  var current = p.weeks[wi].label || ('Semaine ' + p.weeks[wi].weekNum);
  var val = prompt('Nouveau nom de la semaine :', current);
  if (!val || !val.trim()) return;
  p.weeks[wi].label = val.trim();
  sv('programs', S.progs);
  renderProgDetail();
}

// Renomme une séance
function renameSess(wi, sIdx) {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p || isPreset(p.id)) return;
  var val = prompt('Nouveau nom de la séance :', p.weeks[wi].sessions[sIdx].name);
  if (!val || !val.trim()) return;
  p.weeks[wi].sessions[sIdx].name = val.trim();
  sv('programs', S.progs);
  renderProgDetail();
}

// ════════════════════════════════════════════════════════
// LISTE DES PROGRAMMES
// ════════════════════════════════════════════════════════

function renderProgList() {
  var el      = document.getElementById('prog-list-content');
  var presets = S.progs.filter(function(p) { return isPreset(p.id); });
  var customs = S.progs.filter(function(p) { return !isPreset(p.id); });

  function progCard(p) {
    var locked = isPreset(p.id);
    var border = locked ? '2px solid var(--blue)' : '2px solid var(--green)';
    return '<div class="prog-item" onclick="openProgDetail(' + p.id + ')" style="border:' + border + ';">'
      + '<div class="prog-icon" style="background:' + (locked ? 'rgba(59,130,246,0.15)' : 'rgba(34,197,94,0.15)') + ';">' + (locked ? '🔒' : '📋') + '</div>'
      + '<div class="prog-info">'
      + '<div class="prog-name">' + p.name + '</div>'
      + '<div class="prog-meta">' + p.weeks.length + ' semaines · ' + (p.weeks[0] && p.weeks[0].sessions.length || 0) + ' séances/sem</div>'
      + '</div>'
      + (locked
        ? '<button class="btn b sm" onclick="event.stopPropagation();duplicateProgram(' + p.id + ')">📋 Copier</button>'
        : '<div style="display:flex;gap:6px;">'
          + '<button class="btn b sm" onclick="event.stopPropagation();renameProg(' + p.id + ')">✏️</button>'
          + '<button class="btn r sm" onclick="event.stopPropagation();deleteProgram(' + p.id + ')">🗑</button>'
          + '</div>')
      + '</div>';
  }

  var html = '';
  html += '<div class="sh" style="margin-top:4px;color:var(--green);border-color:var(--green);">🎯 Mes Programmes Personnalisés</div>';
  if (!customs.length) {
    html += '<div style="font-size:12px;color:var(--text2);padding:8px 4px;">Aucun programme personnalisé — crée-en un ou copie un programme prédéfini.</div>';
  } else {
    html += customs.map(progCard).join('');
  }
  if (presets.length) {
    html += '<div class="sh" style="margin-top:16px;color:var(--blue);border-color:var(--blue);">🏅 Programmes Prédéfinis</div>';
    html += presets.map(progCard).join('');
  }
  el.innerHTML = html || '<div class="empty"><div class="empty-icon">📋</div><p>Aucun programme</p></div>';
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
  var prog   = S.progs.find(function(p) { return p.id === dpid; });
  if (!prog) return;
  var locked = isPreset(prog.id);

  // Titre du programme avec bouton renommer si non verrouillé
  var nameEl = document.getElementById('detail-prog-name');
  if (locked) {
    nameEl.textContent = prog.name + ' 🔒';
  } else {
    nameEl.innerHTML = prog.name
      + ' <button onclick="renameProg(' + prog.id + ')" style="background:none;border:none;color:var(--purple);font-size:14px;cursor:pointer;vertical-align:middle;">✏️</button>';
  }

  var addWeekBtn = document.querySelector('#prog-detail > .pc > button:last-child');
  if (addWeekBtn) addWeekBtn.style.display = locked ? 'none' : '';

  var el = document.getElementById('detail-weeks-content');
  el.innerHTML = prog.weeks.map(function(w, wi) {
    var weekLabel = w.label || ('Semaine ' + w.weekNum);

    var sessHTML = w.sessions.map(function(sess, sIdx) {
      return '<div style="display:flex;align-items:center;justify-content:space-between;padding:8px;background:var(--surface2);border-radius:8px;margin-bottom:6px;margin-top:6px;">'
        + '<div style="display:flex;align-items:center;gap:6px;flex:1;min-width:0;">'
        + '<div>'
        + '<div style="font-size:13px;font-weight:700;">' + sess.name + '</div>'
        + '<div style="font-size:11px;color:var(--text2);">' + sess.exercises.length + ' exercice' + (sess.exercises.length !== 1 ? 's' : '') + '</div>'
        + '</div>'

        + '</div>'
        + '<div style="display:flex;gap:6px;flex-shrink:0;">'
        + (locked
          ? '<button class="btn b sm" onclick="openExEditor(' + dpid + ',' + wi + ',' + sIdx + ')">👁 Voir</button>'
          : '<button class="btn b sm" onclick="openExEditor(' + dpid + ',' + wi + ',' + sIdx + ')">✏️ Éditer</button>'
            + '<button class="btn r sm" onclick="deleteSess(' + wi + ',' + sIdx + ')">🗑</button>')
        + '</div>'
        + '</div>';
    }).join('');

    return '<div class="wcard" style="margin-bottom:10px;padding:0;overflow:hidden;">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;padding:12px 14px;cursor:pointer;user-select:none;" onclick="toggleProgWeek(this)">'
      + '<div style="display:flex;align-items:center;gap:8px;">'
      + '<span style="font-size:14px;color:var(--text2);display:inline-block;transition:transform 0.2s;">›</span>'
      + '<span style="font-size:13px;font-weight:800;color:var(--purple);">' + weekLabel + '</span>'
      + '<span style="font-size:11px;color:var(--text2);">' + w.sessions.length + ' séance' + (w.sessions.length !== 1 ? 's' : '') + '</span>'
              + (locked ? '' : '<button onclick="event.stopPropagation();renameWeek(' + wi + ')" class="btn b sm" style="padding:3px 7px;">✏️</button>')
      + '</div>'
      + (locked ? '' : '<button class="btn r sm" onclick="event.stopPropagation();deleteWeek(' + wi + ')">🗑 Supprimer</button>')
      + '</div>'
      + '<div style="display:none;padding:0 14px 12px;">'
      + sessHTML
      + (locked ? '' : '<button onclick="addSessToWeek(' + dpid + ',' + wi + ')" style="width:100%;padding:7px;background:none;border:1.5px dashed var(--border);border-radius:8px;color:var(--blue);font-size:12px;font-weight:700;cursor:pointer;font-family:\'Inter\',sans-serif;margin-top:4px;">＋ Ajouter une séance</button>')
      + '</div>'
      + '</div>';
  }).join('');

  if (locked) {
    el.insertAdjacentHTML('afterbegin',
      '<div style="background:rgba(139,108,247,0.12);border:1px solid var(--purple);border-radius:var(--r);padding:10px 14px;margin-bottom:12px;display:flex;align-items:center;justify-content:space-between;gap:10px;">'
      + '<div style="font-size:12px;color:var(--purple2);font-weight:600;">🔒 Programme officiel — lecture seule</div>'
      + '<button class="btn p sm" onclick="duplicateProgram(' + prog.id + ')">📋 Copier et modifier</button>'
      + '</div>'
    );
  }
}

// ── Dupliquer un programme prédéfini ─────────────────────
function duplicateProgram(pid) {
  var orig = S.progs.find(function(p) { return p.id === pid; });
  if (!orig) return;
  var copy  = JSON.parse(JSON.stringify(orig));
  copy.id   = Date.now();
  copy.name = orig.name + ' (copie)';
  S.progs.push(copy);
  sv('programs', S.progs);
  renderProgList();
  openProgDetail(copy.id);
  notify('📋 Programme copié ! Tu peux maintenant le modifier.');
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
    for (var sIdx = 0; sIdx < ns; sIdx++) {
      sessions.push({ id: Date.now() + wi * 100 + sIdx, name: 'Séance ' + (sIdx + 1), exercises: [] });
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
  if (!p || isPreset(p.id)) return;
  p.weeks.push({ weekNum: p.weeks.length + 1, sessions: [{ id: Date.now(), name: 'Séance 1', exercises: [] }] });
  sv('programs', S.progs);
  renderProgDetail();
}

function addSessToWeek(pid, wi) {
  var p = S.progs.find(function(p) { return p.id === pid; });
  if (!p || isPreset(p.id)) return;
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
  if (!p || isPreset(p.id)) return;
  if (!confirm('Supprimer la semaine ' + (wi + 1) + ' et toutes ses séances ?')) return;
  p.weeks.splice(wi, 1);
  p.weeks.forEach(function(w, i) { w.weekNum = i + 1; });
  sv('programs', S.progs);
  renderProgDetail();
}

function deleteSess(wi, sIdx) {
  var p = S.progs.find(function(p) { return p.id === dpid; });
  if (!p || isPreset(p.id)) return;
  var sessName = p.weeks[wi].sessions[sIdx].name;
  if (!confirm('Supprimer "' + sessName + '" ?')) return;
  p.weeks[wi].sessions.splice(sIdx, 1);
  sv('programs', S.progs);
  renderProgDetail();
}

function deleteProgram(pid) {
  if (isPreset(pid)) { notify('Ce programme est officiel et ne peut pas être supprimé.'); return; }
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

var eeState = { pid: null, wi: null, si: null, exs: [], locked: false };

function normEx(ex) {
  if (!ex.series || !ex.series.length)
    ex.series = [{ reps: 5, pct: null, weight: null, rpe: null, rest: 180 }];
  return ex;
}

function openExEditor(pid, wi, sessIdx) {
  var prog = S.progs.find(function(p) { return p.id === pid; });
  if (!prog) return;
  var sess = prog.weeks[wi].sessions[sessIdx];
  eeState = {
    pid:    pid,
    wi:     wi,
    si:     sessIdx,
    exs:    sess.exercises.map(function(ex) { return normEx(JSON.parse(JSON.stringify(ex))); }),
    locked: isPreset(pid)
  };
  var titleEl = document.getElementById('ee-title');
  titleEl.innerHTML = '<span style="opacity:0.6;font-size:13px;font-weight:600;">' + prog.name + ' · S' + (wi + 1) + '.' + (sessIdx + 1) + ' — </span>'
    + (eeState.locked
        ? '<span>' + sess.name + '</span>'
        : '<span contenteditable="true" id="ee-sess-name" style="outline:none;border-bottom:2px solid var(--purple);padding-bottom:2px;cursor:text;" onblur="saveEESessName(' + wi + ',' + sessIdx + ',this.textContent.trim())" onkeydown="if(event.key===\'Enter\'){event.preventDefault();this.blur();}">' + sess.name + '</span>');
  renderExEditor();
  document.getElementById('ex-editor').classList.add('open');
}

function closeExEditor() {
  document.getElementById('ex-editor').classList.remove('open');
}

function saveEESessName(wi, sIdx, val) {
  if (!val) return;
  var prog = S.progs.find(function(p) { return p.id === eeState.pid; });
  if (!prog || isPreset(prog.id)) return;
  prog.weeks[wi].sessions[sIdx].name = val;
  sv('programs', S.progs);
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
  var allEx  = getAllExercises();
  var locked = eeState.locked;
  var html   = '';

  // Bouton + Exercice et Sauvegarder masqués en mode lecture seule
  var addExBtn  = document.querySelector('.ex-editor-hdr .btn.g');
  var saveBtn   = document.getElementById('ee-save-btn');
  if (addExBtn) addExBtn.style.display = locked ? 'none' : '';
  if (saveBtn)  saveBtn.style.display  = locked ? 'none' : '';

  for (var ei = 0; ei < eeState.exs.length; ei++) {
    var ex    = eeState.exs[ei];
    var found = allEx.find(function(e) { return e.name.toLowerCase() === ex.name.toLowerCase(); });
    var cat   = (found && found.cat) || 'Personnalisé';
    var icon  = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];
    var liftForCat = getLiftForCat(cat);
    var rm         = get1RMForLift(liftForCat);
    var rmBadge    = rm
      ? '<span style="font-size:10px;background:rgba(139,108,247,0.2);color:var(--purple2);border-radius:6px;padding:2px 7px;font-weight:700;margin-left:6px;">1RM ' + rm + ' kg</span>'
      : '';

    var rows = '';
    for (var ri = 0; ri < ex.series.length; ri++) {
      var s   = ex.series[ri];
      var dis = locked ? ' disabled style="opacity:0.6;"' : '';
      rows += '<div class="ee-set-row">'
        + '<span class="ee-set-num">' + (ri + 1) + '</span>'
        + '<input class="ee-inp" type="number" value="' + (s.reps || '') + '" placeholder="5"' + dis + (locked ? '' : ' oninput="eeUpdate(' + ei + ',' + ri + ',\'reps\',this.value)"') + '>'
        + '<input class="ee-inp" type="number" value="' + (s.pct  || '') + '" placeholder="—"' + dis + (locked ? '' : ' oninput="eeUpdatePct(' + ei + ',' + ri + ',this.value,\'' + cat + '\')"') + ' step="0.5">'
        + '<input class="ee-inp" type="number" value="' + (s.weight !== null && s.weight !== undefined ? s.weight : '') + '" placeholder="—"' + dis + (locked ? '' : ' oninput="eeUpdateWeight(' + ei + ',' + ri + ',this.value,\'' + cat + '\')"') + ' step="0.5">'
        + '<input class="ee-inp" type="number" value="' + (s.rpe  || '') + '" placeholder="—"' + dis + (locked ? '' : ' oninput="eeUpdate(' + ei + ',' + ri + ',\'rpe\',this.value)"') + '>'
        + (locked ? '<span></span>' : '<button onclick="removeSetFromEE(' + ei + ',' + ri + ')" style="background:none;border:none;color:var(--red);font-size:16px;cursor:pointer;">✕</button>')
        + '</div>';
    }

    html += '<div class="ee-ex-item">'
      + '<div class="ee-ex-hdr">'
      + '<div style="display:flex;align-items:center;gap:10px;">'
      + '<div style="width:36px;height:36px;border-radius:9px;overflow:hidden;flex-shrink:0;">'
      + (found && found.image
        ? '<img src="' + found.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;">'
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
      + (locked ? '' :
          '<div style="display:flex;gap:4px;">'
          + '<button class="btn out sm" onclick="moveExInEE(' + ei + ',-1)" style="padding:4px 8px;"' + (ei === 0 ? ' disabled' : '') + '>↑</button>'
          + '<button class="btn out sm" onclick="moveExInEE(' + ei + ',1)"  style="padding:4px 8px;"' + (ei === eeState.exs.length - 1 ? ' disabled' : '') + '>↓</button>'
          + '<button class="btn r sm" onclick="removeExFromEE(' + ei + ')">✕</button>'
          + '</div>')
      + '</div>'
      + '<div class="ee-hdr-labels">'
      + '<span class="ee-lbl">#</span><span class="ee-lbl">Reps</span><span class="ee-lbl">%1RM</span><span class="ee-lbl">Poids</span><span class="ee-lbl">RPE</span><span class="ee-lbl"></span>'
      + '</div>'
      + rows
      + (locked ? '' : '<div style="padding:8px 10px;"><button class="btn g sm full" onclick="addSetToEE(' + ei + ')">＋ Série</button></div>')
      + '</div>';
  }
  el.innerHTML = html;
}

function eeUpdate(ei, ri, key, val) {
  if (eeState.locked) return;
  eeState.exs[ei].series[ri][key] = val === '' ? null : parseFloat(val) || parseInt(val) || val;
}

function eeUpdatePct(ei, ri, val, cat) {
  if (eeState.locked) return;
  var pct = val === '' ? null : parseFloat(val);
  eeState.exs[ei].series[ri].pct = pct;
  var rm = get1RMForLift(getLiftForCat(cat));
  if (rm && pct) {
    var computed = Math.round((rm * pct / 100) * 4) / 4;
    eeState.exs[ei].series[ri].weight = computed;
    var rows = document.querySelectorAll('.ee-set-row');
    var idx  = _eeRowIndex(ei, ri);
    if (rows[idx]) { var w = rows[idx].querySelectorAll('.ee-inp')[2]; if (w) w.value = computed; }
  }
}

function eeUpdateWeight(ei, ri, val, cat) {
  if (eeState.locked) return;
  var weight = val === '' ? null : parseFloat(val);
  eeState.exs[ei].series[ri].weight = weight;
  var rm = get1RMForLift(getLiftForCat(cat));
  if (rm && weight) {
    var computed = Math.round((weight / rm * 100) * 10) / 10;
    eeState.exs[ei].series[ri].pct = computed;
    var rows = document.querySelectorAll('.ee-set-row');
    var idx  = _eeRowIndex(ei, ri);
    if (rows[idx]) { var p = rows[idx].querySelectorAll('.ee-inp')[1]; if (p) p.value = computed; }
  }
}

function _eeRowIndex(ei, ri) {
  var idx = 0;
  for (var i = 0; i < ei; i++) idx += eeState.exs[i].series.length;
  return idx + ri;
}

function addSetToEE(ei) {
  if (eeState.locked) return;
  var last = eeState.exs[ei].series.slice(-1)[0] || {};
  eeState.exs[ei].series.push({ reps: last.reps || 5, pct: last.pct || null, weight: last.weight || null, rpe: last.rpe || null, rest: 180 });
  renderExEditor();
}

function moveExInEE(ei, dir) {
  if (eeState.locked) return;
  var target = ei + dir;
  if (target < 0 || target >= eeState.exs.length) return;
  var tmp = eeState.exs[ei];
  eeState.exs[ei] = eeState.exs[target];
  eeState.exs[target] = tmp;
  renderExEditor();
}

function removeSetFromEE(ei, ri) { if (eeState.locked) return; eeState.exs[ei].series.splice(ri, 1); renderExEditor(); }
function removeExFromEE(ei)       { if (eeState.locked) return; eeState.exs.splice(ei, 1);            renderExEditor(); }

function saveExEditor() {
  if (eeState.locked) { closeExEditor(); return; }
  var prog = S.progs.find(function(p) { return p.id === eeState.pid; });
  if (!prog) return;
  prog.weeks[eeState.wi].sessions[eeState.si].exercises = eeState.exs;
  sv('programs', S.progs);
  closeExEditor();
  renderProgDetail();
  notify('✅ Séance sauvegardée !');
}
