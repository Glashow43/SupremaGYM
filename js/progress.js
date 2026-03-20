// ══════════════════════════════════════════════════════════
// js/progress.js — Page Historique / Progression
// ══════════════════════════════════════════════════════════

// Génère la miniature d'un exercice (image ou icône emoji)
function getExThumb(name, size) {
  size = size || 40;
  var allEx = getAllExercises();
  var found = allEx.find(function(e) { return e.name.toLowerCase() === name.toLowerCase(); });
  var cat   = (found && found.cat) || 'Personnalisé';
  var icon  = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];
  if (found && found.image) {
    return '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:8px;overflow:hidden;flex-shrink:0;">'
      + '<img src="' + found.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;" onerror="this.parentNode.innerHTML=\'<div style=\\\'width:' + size + 'px;height:' + size + 'px;border-radius:8px;background:' + icon.bg + ';display:flex;align-items:center;justify-content:center;font-size:' + Math.round(size * 0.45) + 'px;\\\'>' + icon.emoji + '</div>\'">'
      + '</div>';
  }
  return '<div style="width:' + size + 'px;height:' + size + 'px;border-radius:8px;background:' + icon.bg + ';display:flex;align-items:center;justify-content:center;font-size:' + Math.round(size * 0.45) + 'px;flex-shrink:0;">' + icon.emoji + '</div>';
}

// ════════════════════════════════════════════════════════
// LISTE HISTORIQUE
// ════════════════════════════════════════════════════════

function renderProgress() {
  var el = document.getElementById('progress-content');
  if (!S.sessions.length) {
    el.innerHTML = '<div class="empty"><div class="empty-icon">📈</div><p>Aucune séance enregistrée</p></div>';
    return;
  }
  el.innerHTML = S.sessions.slice().reverse().map(function(s, i) {
    var idx = S.sessions.length - 1 - i;
    var d = new Date(s.date).toLocaleDateString('fr-FR', {
      weekday: 'short', day: '2-digit', month: 'short', year: 'numeric'
    });
    var totalVol  = s.exercises.reduce(function(a, e) {
      return a + e.sets.reduce(function(b, st) { return b + (parseFloat(st.weight) || 0) * (st.reps || 0); }, 0);
    }, 0);
    var totalSets = s.exercises.reduce(function(a, e) { return a + e.sets.length; }, 0);

    return '<div class="hist-item" onclick="openSessDetail(' + idx + ')" style="cursor:pointer;">'
      + '<div style="display:flex;align-items:center;justify-content:space-between;gap:10px;">'
      + '<div style="flex:1;min-width:0;">'
      + '<div class="hist-date">' + d + '</div>'
      + '<div class="hist-name">' + (s.context && s.context.sessionName ? s.context.sessionName : 'Séance libre') + '</div>'
      + '<div style="font-size:11px;color:var(--text2);margin-top:2px;">'
      + s.exercises.length + ' exercice' + (s.exercises.length !== 1 ? 's' : '') + ' · ' + totalSets + ' séries · ' + totalVol.toFixed(0) + ' kg'
      + '</div>'
      + '</div>'
      + '<span style="font-size:18px;color:var(--text3);flex-shrink:0;">›</span>'
      + '</div>'
      + '</div>';
  }).join('');
}

// ════════════════════════════════════════════════════════
// DÉTAIL D'UNE SÉANCE
// ════════════════════════════════════════════════════════

function openSessDetail(idx) {
  var s = S.sessions[idx];
  if (!s) return;

  var d = new Date(s.date).toLocaleDateString('fr-FR', {
    weekday: 'long', day: '2-digit', month: 'long', year: 'numeric'
  });

  var totalExs  = s.exercises.length;
  var totalSets = s.exercises.reduce(function(a, e) { return a + e.sets.length; }, 0);
  var totalReps = s.exercises.reduce(function(a, e) {
    return a + e.sets.reduce(function(b, st) { return b + (st.reps || 0); }, 0);
  }, 0);
  var totalVol = s.exercises.reduce(function(a, e) {
    return a + e.sets.reduce(function(b, st) { return b + (parseFloat(st.weight) || 0) * (st.reps || 0); }, 0);
  }, 0);

  var exsHTML = s.exercises.map(function(e) {
    var exVol  = e.sets.reduce(function(a, st) { return a + (parseFloat(st.weight) || 0) * (st.reps || 0); }, 0);
    var exReps = e.sets.reduce(function(a, st) { return a + (st.reps || 0); }, 0);
    var exMax  = Math.max.apply(null, e.sets.map(function(st) { return parseFloat(st.weight) || 0; }));

    var setsHTML = e.sets.map(function(st, si) {
      return '<div class="det-set-row">'
        + '<span class="det-set-num">' + (si + 1) + '</span>'
        + '<span class="det-set-val">' + (parseFloat(st.weight) || '—') + ' kg</span>'
        + '<span class="det-set-val">' + (st.reps || '—') + ' reps</span>'
        + '<span class="det-set-vol">' + ((parseFloat(st.weight) || 0) * (st.reps || 0)).toFixed(0) + ' kg</span>'
        + '</div>';
    }).join('');

    return '<div class="det-ex">'
      + '<div class="det-ex-name" style="display:flex;align-items:center;gap:10px;">'
      + getExThumb(e.name, 64)
      + '<div>'
      + '<div style="font-size:14px;font-weight:800;">' + e.name + '</div>'
      + '<div style="font-size:10px;color:var(--text2);margin-top:1px;">' + exReps + ' reps · max ' + exMax + ' kg</div>'
      + '</div>'
      + '</div>'
      + '<div class="det-set-hdr"><span>Série</span><span>Poids</span><span>Reps</span><span>Volume</span></div>'
      + setsHTML
      + '<div class="det-ex-total">Total · ' + exReps + ' reps · max ' + exMax + ' kg · ' + exVol.toFixed(0) + ' kg volume</div>'
      + '</div>';
  }).join('');

  document.getElementById('sess-detail-date').textContent  = d;
  document.getElementById('sess-detail-name').textContent  = (s.context && s.context.sessionName) || 'Séance libre';
  document.getElementById('sess-detail-prog').textContent  = (s.context && s.context.progName)    || '';
  document.getElementById('sess-detail-body').innerHTML    = exsHTML;
  document.getElementById('sess-detail-exs').textContent   = totalExs;
  document.getElementById('sess-detail-sets').textContent  = totalSets;
  document.getElementById('sess-detail-reps').textContent  = totalReps;
  document.getElementById('sess-detail-vol').textContent   = totalVol.toFixed(0) + ' kg';

  document.getElementById('sess-detail-overlay').classList.add('open');
}

function closeSessDetail() {
  document.getElementById('sess-detail-overlay').classList.remove('open');
}
