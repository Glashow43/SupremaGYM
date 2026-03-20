// ══════════════════════════════════════════════════════════
// js/session.js — Page Train + Logger de séance
// ══════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// WAKE LOCK
// ════════════════════════════════════════════════════════
let wakeLock = null;

async function requestWakeLock() {
  if (!('wakeLock' in navigator)) return;
  try { wakeLock = await navigator.wakeLock.request('screen'); } catch (e) {}
}
async function releaseWakeLock() {
  if (wakeLock) { await wakeLock.release(); wakeLock = null; }
}
document.addEventListener('visibilitychange', async () => {
  if (wakeLock !== null && document.visibilityState === 'visible') await requestWakeLock();
});

// ════════════════════════════════════════════════════════
// PAGE TRAIN
// ════════════════════════════════════════════════════════

function renderTrain() {
  var el    = document.getElementById('train-prog-list');
  var sugEl = document.getElementById('train-suggestion');
  sugEl.innerHTML = '';

  if (!S.progs.length) {
    el.innerHTML = '<div class="wcard" style="text-align:center;">'
      + '<div class="empty-icon">📋</div>'
      + '<p>Aucun programme</p>'
      + '<button class="btn p" style="margin-top:10px;" onclick="showPage(\'programs\',2)">Créer un programme</button>'
      + '</div>';
    return;
  }

  // Séance suggérée
  if (S.ap) {
    var prog = S.progs.find(function(p) { return p.id === S.ap.programId; });
    if (prog) {
      var w = prog.weeks[S.ap.weekIdx];
      var s = w && w.sessions[S.ap.sessionIdx];
      if (s) {
        sugEl.innerHTML = '<div class="wcard" style="background:linear-gradient(135deg,#28a745,#20c997);color:#fff;margin-bottom:10px;">'
          + '<div style="font-size:11px;font-weight:800;opacity:0.8;margin-bottom:4px;">SÉANCE SUGGÉRÉE</div>'
          + '<div style="font-size:16px;font-weight:800;margin-bottom:2px;">' + s.name + '</div>'
          + '<div style="font-size:12px;opacity:0.85;margin-bottom:10px;">'
          + prog.name + ' · Sem ' + (S.ap.weekIdx + 1) + ' · ' + s.exercises.length + ' exercice' + (s.exercises.length !== 1 ? 's' : '')
          + '</div>'
          + '<button class="btn out" onclick="startSess(' + prog.id + ',' + S.ap.weekIdx + ',' + S.ap.sessionIdx + ')">▶ Lancer maintenant</button>'
          + '</div>';
      }
    }
  }

  // Liste complète — séparée en deux sections
  var customs = S.progs.filter(function(p) { return !isPreset(p.id); });
  var presets = S.progs.filter(function(p) { return isPreset(p.id); });

  function progBlock(p) {
    var isActive = S.ap && S.ap.programId === p.id;
    var locked   = isPreset(p.id);
    var weeksHTML = p.weeks.map(function(w, wi) {
      var sessHTML = w.sessions.map(function(s, si) {
        var isSug = isActive && S.ap.weekIdx === wi && S.ap.sessionIdx === si;
        return '<div class="sess-item' + (isSug ? ' suggested' : '') + '">'
          + '<div class="sess-item-info">'
          + '<div class="sess-item-name">' + s.name + (isSug ? ' 📌' : '') + '</div>'
          + '<div class="sess-item-meta">' + s.exercises.length + ' exercice' + (s.exercises.length !== 1 ? 's' : '') + '</div>'
          + '</div>'
          + '<button class="btn g sm" onclick="startSess(' + p.id + ',' + wi + ',' + si + ')">▶ Lancer</button>'
          + '</div>';
      }).join('');
      return '<div style="margin-bottom:8px;">'
        + '<div style="font-size:11px;font-weight:800;color:var(--purple);text-transform:uppercase;margin:8px 0 4px;">Semaine ' + w.weekNum + '</div>'
        + sessHTML
        + '</div>';
    }).join('');

    return '<div class="train-prog" style="' + (isActive ? 'border:2px solid var(--green);background:rgba(34,197,94,0.07);' : '') + '">'
      + '<div class="train-prog-hdr" onclick="toggleTrainProg(this)">'
      + '<span>' + (locked ? '🔒' : '📋') + '</span>'
      + '<span style="flex:1;">' + p.name + '</span>'
      + (isActive ? '<span class="bdg g">ACTIF</span>' : '<button class="btn g sm" onclick="event.stopPropagation();activateProgram(' + p.id + ')">Activer</button>')
      + '<span class="chevron">›</span>'
      + '</div>'
      + '<div class="train-prog-body">' + weeksHTML + '</div>'
      + '</div>';
  }

  var html = '';
  if (customs.length) {
    html += '<div class="sh p" style="margin-top:4px;">🎯 Mes Programmes</div>';
    html += customs.map(progBlock).join('');
  }
  if (presets.length) {
    html += '<div class="sh p" style="margin-top:16px;">🏅 Programmes Prédéfinis</div>';
    html += presets.map(progBlock).join('');
  }
  el.innerHTML = html;
}

function activateProgram(pid) {
  S.ap = { programId: pid, weekIdx: 0, sessionIdx: 0 };
  sv('activeProgram', S.ap);
  renderTrain();
  notify('Programme activé ! 💪');
}

function toggleTrainProg(hdr) {
  hdr.classList.toggle('open');
  hdr.nextElementSibling.classList.toggle('open');
}

// ════════════════════════════════════════════════════════
// LANCEMENT DE SÉANCE
// ════════════════════════════════════════════════════════

function startSess(pid, wi, si) {
  var prog = S.progs.find(function(p) { return p.id === pid; });
  if (!prog) return;
  var sess = prog.weeks[wi].sessions[si];

  S.ctx = { progId: pid, weekIdx: wi, sessionIdx: si, progName: prog.name, sessionName: sess.name };
  S.cur = sess.exercises.map(function(ex) {
    return {
      id:       ++xid,
      name:     ex.name,
      liftType: ex.liftType || ex.lift || '',
      sets:     (ex.series || [{ reps: 5, weight: null }]).map(function(s) {
        return {
          reps:   s.reps   || 5,
          pct:    s.pct    || null,
          weight: s.weight ? String(s.weight) : '',
          rpe:    s.rpe    || null,
          done:   false
        };
      })
    };
  });

  sv('currentSession',        S.cur);
  sv('currentSessionContext', S.ctx);
  requestWakeLock();
  showPage('session', 3);
}

// ════════════════════════════════════════════════════════
// LOGGER DE SÉANCE
// ════════════════════════════════════════════════════════

function renderSess() {
  var titleEl = document.getElementById('sess-title');
  var subEl   = document.getElementById('sess-subtitle');
  var exEl    = document.getElementById('sess-exercises');

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

  var allEx = getAllExercises();

  exEl.innerHTML = S.cur.map(function(ex, ei) {
    var found = allEx.find(function(e) { return e.name.toLowerCase() === ex.name.toLowerCase(); });
    var cat   = (found && found.cat) || 'Personnalisé';
    var icon  = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];
    var thumb = (found && found.image)
      ? '<div style="width:64px;height:64px;border-radius:9px;overflow:hidden;flex-shrink:0;"><img src="' + found.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.remove()"></div>'
      : '<div style="width:64px;height:64px;border-radius:9px;background:' + icon.bg + ';display:flex;align-items:center;justify-content:center;font-size:20px;flex-shrink:0;">' + icon.emoji + '</div>';

    var setsHTML = ex.sets.map(function(s, si) {
      var locked = s.done; // ligne bloquée si cochée
      var rowStyle = locked
        ? 'grid-template-columns:28px 1fr 1fr 1fr 1fr 32px;background:rgba(34,197,94,0.07);'
        : 'grid-template-columns:28px 1fr 1fr 1fr 1fr 32px;';
      var inpAttr = locked ? ' disabled style="opacity:0.6;background:var(--surface2);"' : '';

      return '<div class="sess-set-row" style="' + rowStyle + '">'
        + '<span class="set-num">' + (si + 1) + '</span>'
        + '<input class="set-inp" type="number" value="' + s.reps + '" oninput="sessUpdate(' + ei + ',' + si + ',\'reps\',this.value)" placeholder="5"' + inpAttr + '>'
        + '<input class="set-inp" type="number" value="' + (s.pct || '') + '" oninput="sessUpdate(' + ei + ',' + si + ',\'pct\',this.value)" placeholder="—"' + inpAttr + '>'
        + '<input class="set-inp" type="number" value="' + s.weight + '" oninput="sessUpdate(' + ei + ',' + si + ',\'weight\',this.value)" placeholder="kg"' + inpAttr + '>'
        + '<input class="set-inp" type="number" value="' + (s.rpe || '') + '" oninput="sessUpdate(' + ei + ',' + si + ',\'rpe\',this.value)" placeholder="—" step="0.5"' + inpAttr + '>'
        + '<button class="set-done' + (locked ? ' done' : '') + '" onclick="toggleDone(' + ei + ',' + si + ')">' + (locked ? '✓' : '') + '</button>'
        + '</div>';
    }).join('');

    return '<div class="sess-ex">'
      + '<div class="sess-ex-hdr" style="display:flex;align-items:center;justify-content:space-between;">'
      + '<div style="display:flex;align-items:center;gap:10px;">'
      + thumb
      + '<div>'
      + '<div class="sess-ex-name">' + ex.name + '</div>'
      + '<div style="font-size:10px;color:' + icon.color + ';font-weight:600;">' + cat + '</div>'
      + '</div>'
      + '</div>'
      + '<button class="btn r sm" onclick="removeExFromSess(' + ei + ')">✕</button>'
      + '</div>'
      + '<div style="display:grid;grid-template-columns:28px 1fr 1fr 1fr 1fr 32px;gap:6px;padding:4px 12px 2px;background:var(--surface2);">'
      + '<span class="set-lbl">#</span>'
      + '<span class="set-lbl">Reps</span>'
      + '<span class="set-lbl">%1RM</span>'
      + '<span class="set-lbl">Poids</span>'
      + '<span class="set-lbl">RPE</span>'
      + '<span class="set-lbl">✓</span>'
      + '</div>'
      + setsHTML
      + '<div style="display:flex;gap:6px;padding:8px 12px;justify-content:center;">'
      + '<button class="btn g sm" onclick="addSetToSess(' + ei + ')">＋ Ajouter série</button>'
      + '<button class="btn r sm" onclick="removeSetToSess(' + ei + ')">✕ Supprimer série</button>'
      + '</div>'
      + '</div>';
  }).join('');
}

function sessUpdate(ei, si, key, val) {
  // Ignorer si la série est verrouillée
  if (S.cur[ei].sets[si].done) return;
  S.cur[ei].sets[si][key] = val;
  sv('currentSession', S.cur);
}

function toggleDone(ei, si) {
  S.cur[ei].sets[si].done = !S.cur[ei].sets[si].done;
  sv('currentSession', S.cur);
  renderSess();
}

function addSetToSess(ei) {
  var last = S.cur[ei].sets.slice(-1)[0] || { reps: 5, weight: '' };
  S.cur[ei].sets.push({ reps: last.reps, pct: null, weight: last.weight, rpe: null, done: false });
  sv('currentSession', S.cur);
  renderSess();
}

function removeSetToSess(ei) {
  if (S.cur[ei].sets.length <= 1) { notify('Il faut au moins une série !'); return; }
  // Empêcher la suppression d'une série validée
  var last = S.cur[ei].sets.slice(-1)[0];
  if (last && last.done) { notify('Impossible de supprimer une série validée !'); return; }
  S.cur[ei].sets.pop();
  sv('currentSession', S.cur);
  renderSess();
}

function removeExFromSess(ei) {
  // Vérifier si des séries sont déjà validées
  var hasDone = S.cur[ei].sets.some(function(s) { return s.done; });
  if (hasDone && !confirm('Cet exercice a des séries validées. Le supprimer quand même ?')) return;
  S.cur.splice(ei, 1);
  sv('currentSession', S.cur);
  renderSess();
}

// ── Ajout rapide via picker ───────────────────────────────
let pendingPickedEx = null;

function confirmQuickEx() {
  if (!pendingPickedEx) return;
  var sets = parseInt(document.getElementById('qex-sets').value) || 4;
  var reps = parseInt(document.getElementById('qex-reps').value) || 5;
  S.cur.push({
    id:       ++xid,
    name:     pendingPickedEx.name,
    liftType: pendingPickedEx.lift || '',
    sets:     Array(sets).fill(null).map(function() { return { reps: reps, pct: null, weight: '', rpe: null, done: false }; })
  });
  sv('currentSession', S.cur);
  document.getElementById('modal-quick-ex').classList.remove('open');
  pendingPickedEx = null;
  renderSess();
}

// ════════════════════════════════════════════════════════
// TERMINER / ANNULER
// ════════════════════════════════════════════════════════

function saveSession() {
  // Compter uniquement les séries validées (done === true)
  var exercises = S.cur.map(function(ex) {
    return {
      name:     ex.name,
      liftType: ex.liftType,
      sets:     ex.sets.filter(function(s) { return s.done; })
    };
  }).filter(function(e) { return e.sets.length > 0; });

  var totalDone = exercises.reduce(function(a, e) { return a + e.sets.length; }, 0);

  // Confirmation avant de terminer
  var msg = totalDone > 0
    ? '✅ ' + totalDone + ' série' + (totalDone > 1 ? 's' : '') + ' validée' + (totalDone > 1 ? 's' : '') + ' seront sauvegardées.\n\nTerminer la séance ? Aucune modification possible après.'
    : 'Aucune série validée. Terminer quand même ?';

  if (!confirm(msg)) return;

  var sess = {
    id:        Date.now(),
    date:      new Date().toISOString(),
    context:   S.ctx,
    exercises: exercises
  };

  S.sessions.push(sess);

  // Mise à jour des 1RM
  var prs = [];
  sess.exercises.forEach(function(ex) {
    if (!ex.liftType) return;
    ex.sets.forEach(function(s) {
      if (!s.weight) return;
      var est = s.reps === 1
        ? +s.weight
        : +(parseFloat(s.weight) / (1.0278 - 0.0278 * s.reps)).toFixed(1);
      if (!S.rm[ex.liftType] || est > S.rm[ex.liftType]) {
        S.rm[ex.liftType] = est;
        prs.push(ex.liftType + ': ' + est + 'kg');
      }
    });
  });

  S.cur = []; S.ctx = null;
  sv('sessions',              S.sessions);
  sv('oneRMs',                S.rm);
  sv('currentSession',        S.cur);
  sv('currentSessionContext', S.ctx);

  // Avancer le compteur du programme
  if (S.ap && S.ap.programId === (sess.context && sess.context.progId)) {
    var prog = S.progs.find(function(p) { return p.id === S.ap.programId; });
    if (prog) {
      var wi2 = S.ap.weekIdx;
      var si2 = S.ap.sessionIdx + 1;
      if (si2 >= prog.weeks[wi2].sessions.length) { wi2++; si2 = 0; }
      if (wi2 >= prog.weeks.length)               { wi2 = 0; si2 = 0; }
      S.ap = { programId: S.ap.programId, weekIdx: wi2, sessionIdx: si2 };
      sv('activeProgram', S.ap);
    }
  }

  releaseWakeLock();
  if (prs.length) notify('🏆 Nouveau PR ! ' + prs.join(', '));
  else            notify('✅ Séance sauvegardée !');
  showPage('home', 0);
}

function clearSession() {
  if (!confirm('Annuler la séance ? Les données seront perdues.')) return;
  S.cur = []; S.ctx = null;
  sv('currentSession',        S.cur);
  sv('currentSessionContext', S.ctx);
  releaseWakeLock();
  showPage('train', 3);
}
