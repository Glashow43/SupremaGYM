// ══════════════════════════════════════════════════════════
// js/exercises.js — Page Exercices + Exercise Picker (bottom sheet)
// ══════════════════════════════════════════════════════════

// ════════════════════════════════════════════════════════
// EXERCISE PICKER (bottom sheet universel)
// Utilisé depuis la séance (pickerMode='session')
//          et depuis l'éditeur de séance (pickerMode='editor')
// ════════════════════════════════════════════════════════

let pickerMode = 'session';
let pickerCat  = 'Tous';
let _pickerExs = [];   // liste filtrée courante

/**
 * Ouvre le picker en réinitialisant la recherche et le filtre.
 * @param {'session'|'editor'} mode
 */
function openExPicker(mode) {
  pickerMode = mode;
  pickerCat  = 'Tous';
  document.getElementById('ex-picker-search').value = '';
  renderExPicker();
  document.getElementById('ex-picker-overlay').classList.add('open');
}

/**
 * Ferme le picker uniquement si le clic est sur l'overlay (fond sombre),
 * pas sur la feuille elle-même.
 */
function closeExPicker(e) {
  if (e && e.target !== document.getElementById('ex-picker-overlay')) return;
  document.getElementById('ex-picker-overlay').classList.remove('open');
}

/** Render complet du picker (filtres + liste) */
function renderExPicker() {
  const q    = (document.getElementById('ex-picker-search').value || '').toLowerCase();
  const cats = ['Tous','Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];

  // Boutons de catégorie
  document.getElementById('ex-picker-cats').innerHTML = cats.map(c => {
    const ic    = CAT_ICONS[c] || {};
    const label = c === 'Tous' ? 'Tous' : (ic.emoji || '') + '\u00a0' + c;
    return `<button class="ex-cat-btn${pickerCat === c ? ' active' : ''}" onclick="setPickerCat('${c}')">${label}</button>`;
  }).join('');

  // Filtrage
  let exs = getAllExercises();
  if (pickerCat !== 'Tous') exs = exs.filter(e => pickerCat === 'Personnalisé' ? e.custom : e.cat === pickerCat);
  if (q) exs = exs.filter(e => e.name.toLowerCase().includes(q));
  _pickerExs = exs;

  // Rendu de la liste
  const listEl = document.getElementById('ex-picker-list');
  if (!exs.length) {
    listEl.innerHTML = '<div class="empty"><p>Aucun exercice</p></div>';
    return;
  }
  listEl.innerHTML = '';
  exs.forEach((e, i) => {
    const ic  = CAT_ICONS[e.cat] || CAT_ICONS['Personnalisé'];
    const div = document.createElement('div');
    div.className = 'ex-pick-item';
    div.innerHTML = `
      <div class="ex-pick-icon" style="background:${ic.bg};color:${ic.color};">${ic.emoji}</div>
      <div>
        <div class="ex-pick-name">${e.name}</div>
        <div class="ex-pick-cat">${e.cat}</div>
      </div>`;
    div.addEventListener('click', () => pickExercise(_pickerExs[i]));
    listEl.appendChild(div);
  });
}

/** Change la catégorie active du picker et re-rend */
function setPickerCat(c) { pickerCat = c; renderExPicker(); }

/**
 * Action au clic sur un exercice dans le picker.
 * - mode 'session' : ouvre le modal de confirmation (séries/reps)
 * - mode 'editor'  : ajoute directement à l'éditeur de séance
 */
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

let exPageCat  = 'Tous';
let _exPageList = [];   // liste filtrée courante pour les indices

/**
 * Render complet de la page Exercices :
 * filtres catégorie, recherche, liste groupée par catégorie.
 */
function renderExPage() {
  const listEl = document.getElementById('expage-list');
  const catsEl = document.getElementById('expage-cats');
  if (!listEl || !catsEl) return;

  const q    = (document.getElementById('expage-search')?.value || '').toLowerCase();
  const cats = ['Tous','Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];

  // Boutons de filtre
  catsEl.innerHTML = cats.map(c => {
    const ic    = CAT_ICONS[c] || {};
    const label = c === 'Tous' ? 'Tous' : (ic.emoji || '') + '\u00a0' + c;
    return `<button class="ex-cat-btn${exPageCat === c ? ' active' : ''}" onclick="setExPageCat('${c}')">${label}</button>`;
  }).join('');

  // Filtrage
  let exs = getAllExercises();
  if (exPageCat !== 'Tous') exs = exs.filter(e => exPageCat === 'Personnalisé' ? e.custom : e.cat === exPageCat);
  if (q) exs = exs.filter(e => e.name.toLowerCase().includes(q));
  _exPageList = exs;

  if (!exs.length) {
    listEl.innerHTML = '<div class="empty"><div class="empty-icon">🔍</div><p>Aucun exercice trouvé</p></div>';
    return;
  }

  // Groupement par catégorie
  const CAT_ORDER = ['Powerlifting','Jambes','Pectoraux','Dos','Épaules','Bras','Abdominaux','Personnalisé'];
  const groups    = {};
  exs.forEach((e, i) => {
    const c = e.cat || 'Personnalisé';
    if (!groups[c]) groups[c] = [];
    groups[c].push({ e, i });
  });
  const orderedCats = CAT_ORDER.filter(c => groups[c])
    .concat(Object.keys(groups).filter(c => !CAT_ORDER.includes(c)));

  let out = '';
  for (const cat of orderedCats) {
    const ic = CAT_ICONS[cat] || CAT_ICONS['Personnalisé'];
    out += `<div class="excat-section"><div class="excat-title">${ic.emoji} ${cat}</div>`;
    for (const { e, i } of groups[cat]) {
      const w = e.defaultWeight || 0;
      const d = e.desc || '';
      out += `
        <div class="exrow">
          <div class="exrow-thumb" style="background:${ic.bg};color:${ic.color};">${ic.emoji}</div>
          <div class="exrow-body">
            <div class="exrow-name">${e.name}${e.custom ? '<span class="ex-list-custom">Perso</span>' : ''}</div>
            ${d ? `<div class="exrow-desc">${d}</div>` : ''}
            <div class="exrow-weight"><strong>Poids par défaut:</strong> ${w} kg</div>
          </div>
          <div class="exrow-actions">
            <button class="exbtn-edit" data-idx="${i}">✏️ Modifier</button>
            ${e.custom ? `<button class="exbtn-del" data-idx="${i}">🗑️ Supprimer</button>` : ''}
          </div>
        </div>`;
    }
    out += '</div>';
  }
  listEl.innerHTML = out;

  // Attacher les handlers (onclick inline ne peut pas référencer _exPageList au bon index)
  listEl.querySelectorAll('.exbtn-edit').forEach(btn => {
    btn.onclick = () => openEditEx(_exPageList[+btn.dataset.idx]);
  });
  listEl.querySelectorAll('.exbtn-del').forEach(btn => {
    btn.onclick = () => deleteCustomEx(_exPageList[+btn.dataset.idx]);
  });
}

/** Change la catégorie active de la page exercices */
function setExPageCat(cat) { exPageCat = cat; renderExPage(); }

// ── CRUD exercices custom ─────────────────────────────────

/** Ouvre le modal d'ajout (champs vides) */
function openAddCustomEx() {
  document.getElementById('edit-ex-oldname').value = '';
  document.getElementById('edit-ex-name').value    = '';
  document.getElementById('edit-ex-desc').value    = '';
  document.getElementById('edit-ex-cat').value     = 'Jambes';
  document.getElementById('edit-ex-weight').value  = '0';
  openModal('modal-edit-ex');
}

/**
 * Ouvre le modal de modification (pré-rempli avec les données de e).
 * @param {object} e - exercice à modifier
 */
function openEditEx(e) {
  document.getElementById('edit-ex-oldname').value = e.name;
  document.getElementById('edit-ex-name').value    = e.name;
  document.getElementById('edit-ex-desc').value    = e.desc || '';
  document.getElementById('edit-ex-cat').value     = e.cat  || 'Jambes';
  document.getElementById('edit-ex-weight').value  = e.defaultWeight || 0;
  openModal('modal-edit-ex');
}

/** Sauvegarde un exercice custom (création ou modification) */
function saveEditEx() {
  const oldname = document.getElementById('edit-ex-oldname').value;
  const name    = document.getElementById('edit-ex-name').value.trim();
  const desc    = document.getElementById('edit-ex-desc').value.trim();
  const cat     = document.getElementById('edit-ex-cat').value;
  const weight  = parseFloat(document.getElementById('edit-ex-weight').value) || 0;
  if (!name) { notify('Entre un nom'); return; }

  let custom = ld('customExercises', []) || [];
  if (oldname) {
    // Modification
    const idx = custom.findIndex(e => e.name === oldname);
    if (idx >= 0) custom[idx] = { ...custom[idx], name, desc, cat, defaultWeight: weight };
    else custom.push({ name, desc, cat, lift: '', defaultWeight: weight, custom: true });
  } else {
    // Création
    custom.push({ name, desc, cat, lift: '', defaultWeight: weight, custom: true });
  }
  sv('customExercises', custom);
  closeModal('modal-edit-ex');
  renderExPage();
  notify('✅ Exercice enregistré !');
}

/**
 * Supprime un exercice custom après confirmation.
 * @param {object} e - exercice à supprimer
 */
function deleteCustomEx(e) {
  if (!confirm(`Supprimer "${e.name}" ?`)) return;
  let custom = ld('customExercises', []) || [];
  custom = custom.filter(c => c.name !== e.name);
  sv('customExercises', custom);
  renderExPage();
}
