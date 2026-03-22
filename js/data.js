// ══════════════════════════════════════════════════════════
// js/data.js — Données exercices et programme par défaut
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
  { name: 'Squat',                       lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Squat Barre Haute',           lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'TEMPO SQUAT 3:1:3',           lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Squat Pause 2CT',             lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Presse à cuisses',            lift: '',         cat: 'Jambes',    image: '' },
  { name: 'Leg Extension',               lift: '',         cat: 'Jambes',    image: '' },

  // ── PECTORAUX ─────────────────────────────────────────────
  { name: 'Bench Press',                 lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Pause 2CT',             lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Pause 3CT',             lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'TEMPO Bench 4:2:0',           lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'TEMPO Bench 3:1:0',           lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Bench Haltères',              lift: 'bench',    cat: 'Pectoraux', image: '' },
  { name: 'Larsen Press',                lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Elel9Vp.gif' },
  { name: 'Larsen Close Grip',           lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Elel9Vp.gif' },
  { name: 'Close Grip Bench',            lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Close Grip Bench Pause 2CT',  lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Spoto Press',                 lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Machine Pec',                 lift: '',         cat: 'Pectoraux', image: '' },

  // ── DOS ───────────────────────────────────────────────────
  { name: 'Deadlift',                    lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Deadlift Halte',              lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Deadlift TEMPO 3:0:3',        lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'RDL (Haltères)',              lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/rR0LJzx.gif' },
  { name: 'Tempo RDL 3:0:3',            lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/rR0LJzx.gif' },
  { name: 'Rowing Haltère (Bucheron)',   lift: '',         cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/C0MA9bC.gif' },
  { name: 'Tractions',                   lift: '',         cat: 'Dos',       image: '' },
  { name: 'Tirage Horizontal Machine',   lift: '',         cat: 'Dos',       image: '' },

  // ── ÉPAULES ───────────────────────────────────────────────
  { name: 'Développé Militaire Haltères', lift: '',        cat: 'Épaules',   image: '' },

  // ── BRAS ──────────────────────────────────────────────────
  { name: 'Extension Triceps Poulie',    lift: '',         cat: 'Bras',      image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/NN8nSNT.gif' },
  { name: 'Curl Biceps',                 lift: '',         cat: 'Bras',      image: '' },

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

// ── Programme par défaut (POWER RUSH PANA) ───────────────
function getDefaultProgram() {
  return {
    id: 1001,
    name: "POWER RUSH PANA",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        // S1.1
        { id: 0, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S1.2
        { id: 1, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 180 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        // S1.3
        { id: 2, name: "3ème Seance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S1.4
        { id: 3, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 84, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 84, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 2
      // ══════════════════════════════════════
      { weekNum: 2, sessions: [

        // S2.1
        { id: 100, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S2.2
        { id: 101, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S2.3
        { id: 102, name: "3ème Seance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S2.4
        { id: 103, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 86, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        // S3.1
        { id: 200, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S3.2
        { id: 201, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S3.3
        { id: 202, name: "3ème Seance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S3.4
        { id: 203, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 86, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 9.0, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        // S4.1
        { id: 300, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S4.2
        { id: 301, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S4.3
        { id: 302, name: "3ème Seance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S4.4
        { id: 303, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        // S5.1
        { id: 400, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
          ]},
        ]},

        // S5.2
        { id: 401, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 77, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 67, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 67, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 67, weight: null, rpe: 6.0,  rest: 180 },
          ]},
        ]},

        // S5.3
        { id: 402, name: "3ème Seance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 2, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S5.4
        { id: 403, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 83,  weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89,  weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95,  weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 83,  weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89,  weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95,  weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79,  weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86,  weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93,  weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}
