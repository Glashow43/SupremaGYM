// ══════════════════════════════════════════════════════════
// js/data.js — Exercices + référence aux programmes prédéfinis
// ══════════════════════════════════════════════════════════

const GITHUB_IMG = 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/';

// ── Icônes / couleurs par catégorie ───────────────────────
const CAT_ICONS = {
  'Jambes':       { emoji: '🦵', color: '#fb923c', bg: 'rgba(249,115,22,0.18)'  },
  'Pectoraux':    { emoji: '💪', color: '#f87171', bg: 'rgba(248,113,113,0.18)' },
  'Dos':          { emoji: '🏋️', color: '#60a5fa', bg: 'rgba(96,165,250,0.18)'  },
  'Épaules':      { emoji: '🔼', color: '#34d399', bg: 'rgba(52,211,153,0.18)'  },
  'Bras':         { emoji: '💥', color: '#c084fc', bg: 'rgba(192,132,252,0.18)' },
  'Abdominaux':   { emoji: '🔥', color: '#f87171', bg: 'rgba(244,63,94,0.18)'   },
  'Personnalisé': { emoji: '✏️', color: '#94a3b8', bg: 'rgba(148,163,184,0.15)' },
};

// ── Mapping bodyPart ExerciseDB → catégories app ──────────
const API_CAT_MAP = {
  'chest':        'Pectoraux',
  'back':         'Dos',
  'upper legs':   'Jambes',
  'lower legs':   'Jambes',
  'upper arms':   'Bras',
  'lower arms':   'Bras',
  'shoulders':    'Épaules',
  'waist':        'Abdominaux',
  'cardio':       'Personnalisé',
  'neck':         'Personnalisé',
};

// ── Exercices intégrés (lecture seule) ────────────────────
const BUILTIN_EXERCISES = [

  // ── JAMBES ───────────────────────────────────────────────
  { name: 'Squat',                        lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Squat Barre Haute',            lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'TEMPO SQUAT 3:1:3',            lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Squat Pause 2CT',              lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Presse à cuisses',             lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/9KU9TYG.gif' },
  { name: 'Leg Extension',                lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/my33uHU.gif' },

  // ── PECTORAUX ─────────────────────────────────────────────
  { name: 'Bench Press',                  lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Pause 2CT',              lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Pause 3CT',              lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'TEMPO Bench 4:2:0',            lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'TEMPO Bench 3:1:0',            lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Haltères',               lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/SpYC0Kp.gif' },
  { name: 'Larsen Press',                 lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Elel9Vp.gif' },
  { name: 'Larsen Close Grip',            lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Elel9Vp.gif' },
  { name: 'Close Grip Bench',             lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Close Grip Bench Pause 2CT',   lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Spoto Press',                  lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Machine Pec',                  lift: '',         cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/wDN97Ca.gif' },

  // ── DOS ───────────────────────────────────────────────────
  { name: 'Deadlift',                     lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Deadlift Halte',               lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Deadlift TEMPO 3:0:3',         lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'RDL (Haltères)',               lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/rR0LJzx.gif' },
  { name: 'Tempo RDL 3:0:3',              lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/rR0LJzx.gif' },
  { name: 'Rowing Haltère (Bucheron)',    lift: '',         cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/C0MA9bC.gif' },
  { name: 'Tractions',                    lift: '',         cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/lBDjFxJ.gif' },
  { name: 'Tirage Horizontal Machine',    lift: '',         cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/qcY50ZD.gif' },

  // ── ÉPAULES ───────────────────────────────────────────────
  { name: 'Développé Militaire Haltères', lift: '',         cat: 'Épaules',   image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ns0SIbU.gif' },

  // ── BRAS ──────────────────────────────────────────────────
  { name: 'Extension Triceps Poulie',     lift: '',         cat: 'Bras',      image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/NN8nSNT.gif' },
  { name: 'Curl Biceps',                  lift: '',         cat: 'Bras',      image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/NbVPDMW.gif' },
];

// ── Cache mémoire ─────────────────────────────────────────
var _apiExercises = null;

async function loadApiExercises() {
  if (_apiExercises) return _apiExercises;
  try {
    var cached   = localStorage.getItem('apiExercises');
    var cachedAt = localStorage.getItem('apiExercisesAt');
    if (cached && cachedAt && Date.now() - +cachedAt < 7 * 24 * 3600 * 1000) {
      _apiExercises = JSON.parse(cached);
      return _apiExercises;
    }
  } catch(e) {}
  try {
    var allExercises = [];
    var chunkIndex = 0;
    while (true) {
      var doc = await db.collection('global').doc('exercises_' + chunkIndex).get();
      if (!doc.exists) break;
      allExercises = allExercises.concat(doc.data().data);
      chunkIndex++;
    }
    _apiExercises = allExercises.map(function(ex) {
      return {
        name:    ex.name.charAt(0).toUpperCase() + ex.name.slice(1),
        lift:    '',
        cat:     API_CAT_MAP[(ex.bodyParts && ex.bodyParts[0]) || ex.bodyPart] || 'Personnalisé',
        image:   GITHUB_IMG + (ex.exerciseId || ex.id) + '.gif',
        desc:    (ex.targetMuscles || [ex.target] || []).join(', '),
        fromApi: true
      };
    });
    localStorage.setItem('apiExercises',   JSON.stringify(_apiExercises));
    localStorage.setItem('apiExercisesAt', Date.now().toString());
    return _apiExercises;
  } catch(e) {
    console.error('ExerciseDB Firestore:', e);
    return [];
  }
}

function getAllExercises() {
  var custom = (ld('customExercises', []) || []).map(function(e) {
    return Object.assign({}, e, { custom: true });
  });
  var api = _apiExercises || [];
  return BUILTIN_EXERCISES.concat(api).concat(custom);
}

async function initApiExercises() {
  await loadApiExercises();
  if (document.getElementById('page-exercises').classList.contains('active')) {
    renderExPage();
  }
}

// ── Programmes prédéfinis ─────────────────────────────────
// Les fonctions sont définies dans js/programs/*.js
function getPresetPrograms() {
  return [
    getPowerRushPana(),
    getUltraPower(),
    getFullPower(),
    getBuild4J(),
    get531(),
    getPowerlifterLvl2(),
  ];
}
