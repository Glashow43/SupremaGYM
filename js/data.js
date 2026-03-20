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
  { name: 'Squat',                        lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Squat Barre Haute',            lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'TEMPO SQUAT 3:1:3',            lift: 'squat',    cat: 'Jambes',    image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Gnfo4FM.gif' },
  { name: 'Bench Press',                  lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'TEMPO Bench 4:2:0',            lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' }, 
  { name: 'Bench Pause 2CT',              lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/EIeI8Vf.gif' },
  { name: 'Larsen Press',                 lift: 'bench',    cat: 'Pectoraux', image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/Elel9Vp.gif' },
  { name: 'RDL (Haltères)',               lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/rR0LJzx.gif' },
  { name: 'Deadlift',                     lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Deadlift Halte',               lift: 'deadlift', cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/ila4NZS.gif' },
  { name: 'Rowing Haltère (Bucheron)',    lift: '',         cat: 'Dos',       image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/C0MA9bC.gif' },
  { name: 'Extension Triceps Poulie',     lift: '',         cat: 'Bras',      image: 'https://raw.githubusercontent.com/Glashow43/SupremaGYM/main/images/exercises/NN8nSNT.gif' },
  
];

// ── Cache mémoire ─────────────────────────────────────────
var _apiExercises = null;

async function loadApiExercises() {
  if (_apiExercises) return _apiExercises;

  // Cache localStorage 7 jours
  try {
    var cached   = localStorage.getItem('apiExercises');
    var cachedAt = localStorage.getItem('apiExercisesAt');
    if (cached && cachedAt && Date.now() - +cachedAt < 7 * 24 * 3600 * 1000) {
      _apiExercises = JSON.parse(cached);
      return _apiExercises;
    }
  } catch(e) {}

  // Chargement depuis Firestore
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

      // ════════════════════════════════════════
      // SEMAINE 1
      // ════════════════════════════════════════
      { weekNum: 1, sessions: [

        // S1.1
        { id: 0, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 65, weight: 120.25, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: 138.75, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: 151.7,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: 151.7,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: 133.2,  rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: 74.0, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 82.0, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S1.2
        { id: 1, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 65, weight: 126.75, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: 146.25, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: 159.9,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: 159.9,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: 140.4,  rpe: null, rest: 180 },
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
            { reps: 1, pct: 75, weight: 75.0, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: 82.0, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: 87.0, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 77.0, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 77.0, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 77.0, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        // S1.3
        { id: 2, name: "3ème Seance", exercises: [
          { name: "Squat Tempo", liftType: "squat", series: [
            { reps: 3, pct: 75, weight: 138.75, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: 138.75, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: 138.75, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: 70.0, rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: 78.0, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: 83.0, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: 83.0, rpe: null, rest: 180 },
          ]},
        ]},

        // S1.4
        { id: 3, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 77, weight: 140.53, rpe: null, rest: 180 },
            { reps: 1, pct: 84, weight: 153.3,  rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: 164.25, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 90, weight: 164.25, rpe: 7.5,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: 79.0, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: 86.0, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: 93.0, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: 93.0, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 72, weight: 72.0, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: 72.0, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 77, weight: 150.15, rpe: null, rest: 180 },
            { reps: 1, pct: 84, weight: 163.8,  rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89, weight: 173.55, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 89, weight: 173.55, rpe: 7.0,  rest: 180 },
          ]},
        ]},

      ]},

      // ════════════════════════════════════════
      // SEMAINE 2
      // ════════════════════════════════════════
      { weekNum: 2, sessions: [

        // S2.1
        { id: 100, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 65, weight: 118.62, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: 136.88, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: 149.65, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: 149.65, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: 149.65, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: 74.0, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 82.0, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S2.2
        { id: 101, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 65, weight: 126.75, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: 146.25, rpe: null, rest: 180 },
            { reps: 5, pct: 82, weight: 159.9,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: 159.9,  rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 72, weight: 140.4,  rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: 71.25, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: 77.9,  rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: 82.65, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 73.15, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 73.15, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        // S2.3
        { id: 102, name: "3ème Seance", exercises: [
          { name: "Squat Tempo", liftType: "squat", series: [
            { reps: 3, pct: 80, weight: 146.0, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: 146.0, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: 146.0, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 2, pct: 70, weight: 66.5,  rpe: null, rest: 180 },
            { reps: 2, pct: 78, weight: 74.1,  rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: 78.85, rpe: null, rest: 180 },
            { reps: 2, pct: 83, weight: 78.85, rpe: null, rest: 180 },
          ]},
        ]},

        // S2.4
        { id: 103, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 86, weight: 156.95, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 93, weight: 169.72, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 93, weight: 169.72, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 79, weight: 75.05, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: 81.7,  rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: 88.35, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 72, weight: 68.4,  rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 72, weight: 68.4,  rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79, weight: 154.05, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: 167.7,  rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 93, weight: 181.35, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: 181.35, rpe: 8.0,  rest: 180 },
          ]},
        ]},

      ]},

      // ════════════════════════════════════════
      // SEMAINE 3
      // ════════════════════════════════════════
      { weekNum: 3, sessions: [

        // S3.1
        { id: 200, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: 135.05, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 149.65, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: 74.0, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 82.0, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 86.0, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S3.2
        { id: 201, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: 144.3,  rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 159.9,  rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 167.7,  rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 167.7,  rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 1, pct: 75, weight: 71.25, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: 77.9,  rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 87, weight: 82.65, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 73.15, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: 73.15, rpe: 8.0,  rest: 180 },
          ]},
        ]},

      ]},

      // ════════════════════════════════════════
      // SEMAINE 4
      // ════════════════════════════════════════
      { weekNum: 4, sessions: [

        // S4.1
        { id: 300, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: 135.05, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 149.65, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 156.95, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: 70.3,  rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 77.9,  rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 81.7,  rpe: 8.0,  rest: 180 },
          ]},
        ]},

        // S4.2
        { id: 301, name: "2ème Seance", exercises: [
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: 144.3,  rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: 159.9,  rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 167.7,  rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 86, weight: 167.7,  rpe: 8.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
            { reps: 12, pct: null, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ════════════════════════════════════════
      // SEMAINE 5
      // ════════════════════════════════════════
      { weekNum: 5, sessions: [

        // S5.1
        { id: 400, name: "1ere Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: 127.75, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: 138.7,  rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 80, weight: 146.0,  rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 80, weight: 146.0,  rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: 66.5,  rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: 72.2,  rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 80, weight: 76.0,  rpe: 7.0,  rest: 180 },
          ]},
        ]},

        // S5.4
        { id: 403, name: "4ème Seance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 83,  weight: 153.55, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89,  weight: 164.65, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95,  weight: 175.75, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: 185.0,  rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 83,  weight: 83.0,  rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 89,  weight: 89.0,  rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95,  weight: 95.0,  rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: 100.0, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 79,  weight: 158.0,  rpe: null, rest: 180 },
            { reps: 1, pct: 86,  weight: 172.0,  rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93,  weight: 186.0,  rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: 200.0,  rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}
