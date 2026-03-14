// ══════════════════════════════════════════════════════════
// js/exercises.js — Page Exercices + Exercise Picker (bottom sheet)
// ══════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// EXERCISE PICKER (bottom sheet universel)
// ════════════════════════════════════════════════════════

let pickerMode = 'session';
let pickerCat  = 'Tous';
let _pickerExs = [];

function openExPicker(mode) {
  pickerMode = mode;
  pickerCat  = 'Tous';
  document.getElementById('ex-picker-search').value = '';
  renderExPicker();
  document.getElementById('ex-picker-overlay').classList.add('open');
}

function closeExPicker(e) {
  if (e && e.target !== document.getElementById('ex-picker-overlay')) return;
  document.getElementById('ex-picker-overlay').classList.remove('open');
}

function renderExPicker() {
  var q    = (document.getElementById('ex-picker-search').value || '').toLowerCase();
  var cats = ['Tous','Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];

  document.getElementById('ex-picker-cats').innerHTML = cats.map(function(c) {
    var ic    = CAT_ICONS[c] || {};
    var label = c === 'Tous' ? 'Tous' : (ic.emoji || '') + '\u00a0' + c;
    return '<button class="ex-cat-btn' + (pickerCat === c ? ' active' : '') + '" onclick="setPickerCat(\'' + c + '\')">' + label + '</button>';
  }).join('');

  var exs = getAllExercises();
  if (pickerCat !== 'Tous') exs = exs.filter(function(e) { return pickerCat === 'Personnalisé' ? e.custom : e.cat === pickerCat; });
  if (q) exs = exs.filter(function(e) { return e.name.toLowerCase().includes(q); });
  _pickerExs = exs;

  var listEl = document.getElementById('ex-picker-list');
  if (!exs.length) {
    listEl.innerHTML = '<div class="empty"><p>Aucun exercice</p></div>';
    return;
  }
  listEl.innerHTML = '';
  exs.forEach(function(e, i) {
    var ic   = CAT_ICONS[e.cat] || CAT_ICONS['Personnalisé'];
    var thumb = e.image
      ? '<div class="ex-pick-icon" style="padding:0;overflow:hidden;"><img src="' + e.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:10px;" onerror="this.remove()"></div>'
      : '<div class="ex-pick-icon" style="background:' + ic.bg + ';color:' + ic.color + ';">' + ic.emoji + '</div>';
    var div = document.createElement('div');
    div.className = 'ex-pick-item';
    div.innerHTML = thumb
      + '<div>'
      + '<div class="ex-pick-name">' + e.name + '</div>'
      + '<div class="ex-pick-cat">' + e.cat + '</div>'
      + '</div>';
    div.addEventListener('click', function() { pickExercise(_pickerExs[i]); });
    listEl.appendChild(div);
  });
}

function setPickerCat(c) { pickerCat = c; renderExPicker(); }

function pickExercise(e) {
  document.getElementById('ex-picker-overlay').classList.remove('open');
  if (pickerMode === 'session') {
    document.getElementById('quick-ex-name').textContent = e.name;
    pendingPickedEx = e;
    document.getElementById('modal-quick-ex').classList.add('open');
  } else if (pickerMode === 'editor') {
    eeState.exs.push(normEx({ name: e.name, liftType: e.lift || '', series: [] }));
    renderExEditor();
  }
}

// ════════════════════════════════════════════════════════
// PAGE EXERCICES (bibliothèque complète)
// ════════════════════════════════════════════════════════

let exPageCat   = 'Tous';
let _exPageList = [];

function renderExPage() {
  var listEl = document.getElementById('expage-list');
  var catsEl = document.getElementById('expage-cats');
  if (!listEl || !catsEl) return;

  var q    = (document.getElementById('expage-search') ? document.getElementById('expage-search').value : '').toLowerCase();
  var cats = ['Tous','Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];

  catsEl.innerHTML = cats.map(function(c) {
    var ic    = CAT_ICONS[c] || {};
    var label = c === 'Tous' ? 'Tous' : (ic.emoji || '') + '\u00a0' + c;
    return '<button class="ex-cat-btn' + (exPageCat === c ? ' active' : '') + '" onclick="setExPageCat(\'' + c + '\')">' + label + '</button>';
  }).join('');

  var exs = getAllExercises();
  if (exPageCat !== 'Tous') exs = exs.filter(function(e) { return exPageCat === 'Personnalisé' ? e.custom : e.cat === exPageCat; });
  if (q) exs = exs.filter(function(e) { return e.name.toLowerCase().includes(q); });
  _exPageList = exs;

  if (!exs.length) {
    listEl.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><p>Aucun exercice trouvé</p></div>';
    return;
  }

  var CAT_ORDER = ['Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];
  var groups    = {};
  exs.forEach(function(e, i) {
    var c = e.cat || 'Personnalisé';
    if (!groups[c]) groups[c] = [];
    groups[c].push({ e: e, i: i });
  });
  var orderedCats = CAT_ORDER.filter(function(c) { return groups[c]; })
    .concat(Object.keys(groups).filter(function(c) { return !CAT_ORDER.includes(c); }));

  var out = '';
  for (var ci = 0; ci < orderedCats.length; ci++) {
    var cat = orderedCats[ci];
    var ic  = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];
    out += '<div class="excat-section"><div class="excat-title">' + ic.emoji + ' ' + cat + '</div>';
    for (var gi = 0; gi < groups[cat].length; gi++) {
      var e = groups[cat][gi].e;
      var i = groups[cat][gi].i;
      var w = e.defaultWeight || 0;
      var d = e.desc || '';
      var thumb = e.image
        ? '<div class="exrow-thumb" style="padding:0;overflow:hidden;"><img src="' + e.image + '" loading="lazy" style="width:100%;height:100%;object-fit:cover;border-radius:9px;" onerror="this.remove()"></div>'
        : '<div class="exrow-thumb" style="background:' + ic.bg + ';color:' + ic.color + ';">' + ic.emoji + '</div>';
      out += '<div class="exrow">'
        + thumb
        + '<div class="exrow-body">'
        + '<div class="exrow-name">' + e.name + (e.custom ? '<span class="ex-list-custom">Perso</span>' : '') + '</div>'
        + (d ? '<div class="exrow-desc">' + d + '</div>' : '')
        + '<div class="exrow-weight"><strong>Poids par défaut:</strong> ' + w + ' kg</div>'
        + '</div>'
        + '<div class="exrow-actions">'
        + '<button class="exbtn-edit" data-idx="' + i + '">✏️ Modifier</button>'
        + (e.custom ? '<button class="exbtn-del" data-idx="' + i + '">🗑️ Supprimer</button>' : '')
        + '</div>'
        + '</div>';
    }
    out += '</div>';
  }
  listEl.innerHTML = out;

  listEl.querySelectorAll('.exbtn-edit').forEach(function(btn) {
    btn.onclick = function() { openEditEx(_exPageList[+btn.dataset.idx]); };
  });
  listEl.querySelectorAll('.exbtn-del').forEach(function(btn) {
    btn.onclick = function() { deleteCustomEx(_exPageList[+btn.dataset.idx]); };
  });
}

function setExPageCat(cat) { exPageCat = cat; renderExPage(); }

// ── CRUD exercices custom ─────────────────────────────────

function openAddCustomEx() {
  document.getElementById('edit-ex-oldname').value = '';
  document.getElementById('edit-ex-name').value    = '';
  document.getElementById('edit-ex-desc').value    = '';
  document.getElementById('edit-ex-cat').value     = 'Jambes';
  document.getElementById('edit-ex-weight').value  = '0';
  document.getElementById('edit-ex-image').value   = '';
  renderImagePreview('');
  openModal('modal-edit-ex');
}

function openEditEx(e) {
  document.getElementById('edit-ex-oldname').value = e.name;
  document.getElementById('edit-ex-name').value    = e.name;
  document.getElementById('edit-ex-desc').value    = e.desc  || '';
  document.getElementById('edit-ex-cat').value     = e.cat   || 'Jambes';
  document.getElementById('edit-ex-weight').value  = e.defaultWeight || 0;
  document.getElementById('edit-ex-image').value   = e.image || '';
  renderImagePreview(e.image || '');
  openModal('modal-edit-ex');
}

/** Affiche la prévisualisation de l'image dans le modal */
function renderImagePreview(url) {
  var prev = document.getElementById('edit-ex-image-preview');
  if (!prev) return;
  if (url) {
    prev.innerHTML = '<img src="' + url + '" style="width:100%;max-height:160px;object-fit:cover;border-radius:10px;margin-top:8px;" onerror="this.parentElement.innerHTML=\'<p style=color:var(--red);font-size:12px;>URL invalide ou image inaccessible</p>\'">';
  } else {
    prev.innerHTML = '';
  }
}

function saveEditEx() {
  var oldname = document.getElementById('edit-ex-oldname').value;
  var name    = document.getElementById('edit-ex-name').value.trim();
  var desc    = document.getElementById('edit-ex-desc').value.trim();
  var cat     = document.getElementById('edit-ex-cat').value;
  var weight  = parseFloat(document.getElementById('edit-ex-weight').value) || 0;
  var image   = document.getElementById('edit-ex-image').value.trim();
  if (!name) { notify('Entre un nom'); return; }

  var custom = ld('customExercises', []) || [];
  if (oldname) {
    var idx = custom.findIndex(function(e) { return e.name === oldname; });
    if (idx >= 0) custom[idx] = Object.assign({}, custom[idx], { name: name, desc: desc, cat: cat, defaultWeight: weight, image: image });
    else custom.push({ name: name, desc: desc, cat: cat, lift: '', defaultWeight: weight, image: image, custom: true });
  } else {
    custom.push({ name: name, desc: desc, cat: cat, lift: '', defaultWeight: weight, image: image, custom: true });
  }
  sv('customExercises', custom);
  closeModal('modal-edit-ex');
  renderExPage();
  notify('✅ Exercice enregistré !');
}

function deleteCustomEx(e) {
  if (!confirm('Supprimer "' + e.name + '" ?')) return;
  var custom = (ld('customExercises', []) || []).filter(function(c) { return c.name !== e.name; });
  sv('customExercises', custom);
  renderExPage();
}
