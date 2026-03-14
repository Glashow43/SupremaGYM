// ══════════════════════════════════════════════════════════
// js/data.js — Données exercices et programme par défaut
// ══════════════════════════════════════════════════════════

const RAPIDAPI_KEY = '3e24d81530mshcafeab04111d0edp18126bjsn5a1f916e200f';
const PROXY_URL    = 'https://snowy-bird-d625.glashow43.workers.dev';

// ── Icônes / couleurs par catégorie ───────────────────────
const CAT_ICONS = {
  'Powerlifting': { emoji: '🏆', color: '#a78bfa', bg: 'rgba(139,108,247,0.18)' },
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
  { name: 'Squat',                        lift: 'squat',    cat: 'Powerlifting' },
  { name: 'Bench Press',                  lift: 'bench',    cat: 'Powerlifting' },
  { name: 'Deadlift',                     lift: 'deadlift', cat: 'Powerlifting' },
  { name: 'Squat Barre Haute',            lift: 'squat',    cat: 'Powerlifting' },
  { name: 'Squat Tempo',                  lift: 'squat',    cat: 'Powerlifting' },
  { name: 'Bench Pause 2ct',              lift: 'bench',    cat: 'Powerlifting' },
  { name: 'Larsen Press',                 lift: 'bench',    cat: 'Powerlifting' },
  { name: 'Soulevé de terre roumain',     lift: 'deadlift', cat: 'Powerlifting' },
  { name: 'Leg Press',                    lift: '',         cat: 'Jambes'       },
  { name: 'Leg Curl',                     lift: '',         cat: 'Jambes'       },
  { name: 'Leg Extension',                lift: '',         cat: 'Jambes'       },
  { name: 'Fentes',                       lift: '',         cat: 'Jambes'       },
  { name: 'Hip Thrust',                   lift: '',         cat: 'Jambes'       },
  { name: 'Bulgare (Split Squat)',         lift: '',         cat: 'Jambes'       },
  { name: 'Mollets Debout',               lift: '',         cat: 'Jambes'       },
  { name: 'RDL Haltères',                 lift: 'deadlift', cat: 'Jambes'       },
  { name: 'Développé couché',             lift: 'bench',    cat: 'Pectoraux'    },
  { name: 'Développé incliné',            lift: 'bench',    cat: 'Pectoraux'    },
  { name: 'Développé décliné',            lift: 'bench',    cat: 'Pectoraux'    },
  { name: 'Écarté Haltères',              lift: '',         cat: 'Pectoraux'    },
  { name: 'Dips',                         lift: 'bench',    cat: 'Pectoraux'    },
  { name: 'Pompes',                       lift: '',         cat: 'Pectoraux'    },
  { name: 'Rowing Barre',                 lift: '',         cat: 'Dos'          },
  { name: 'Rowing Haltère (Bucheron)',     lift: '',         cat: 'Dos'          },
  { name: 'Rowing Poulie Basse',          lift: '',         cat: 'Dos'          },
  { name: 'Tirage Vertical Prise Large',  lift: '',         cat: 'Dos'          },
  { name: 'Tirage Vertical Prise Serrée', lift: '',         cat: 'Dos'          },
  { name: 'Traction',                     lift: '',         cat: 'Dos'          },
  { name: 'Face Pull',                    lift: '',         cat: 'Dos'          },
  { name: 'Shrug Barre',                  lift: '',         cat: 'Dos'          },
  { name: 'Développé Militaire',          lift: 'ohp',      cat: 'Épaules'      },
  { name: 'Développé Haltères Épaules',   lift: 'ohp',      cat: 'Épaules'      },
  { name: 'Élévations Latérales',         lift: '',         cat: 'Épaules'      },
  { name: 'Élévations Frontales',         lift: '',         cat: 'Épaules'      },
  { name: 'Arnold Press',                 lift: '',         cat: 'Épaules'      },
  { name: 'Curl Barre',                   lift: '',         cat: 'Bras'         },
  { name: 'Curl Haltères',                lift: '',         cat: 'Bras'         },
  { name: 'Curl Marteau',                 lift: '',         cat: 'Bras'         },
  { name: 'Extension Triceps Poulie',     lift: '',         cat: 'Bras'         },
  { name: 'Extension Triceps Haltère',    lift: '',         cat: 'Bras'         },
  { name: 'Barre Frontale (Skull Crusher)',lift:'',         cat: 'Bras'         },
  { name: 'Crunch',                       lift: '',         cat: 'Abdominaux'   },
  { name: 'Planche',                      lift: '',         cat: 'Abdominaux'   },
  { name: 'Relevé de Jambes',             lift: '',         cat: 'Abdominaux'   },
  { name: 'Gainage Latéral',              lift: '',         cat: 'Abdominaux'   },
  { name: 'Ab Wheel',                     lift: '',         cat: 'Abdominaux'   },
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
        cat:     API_CAT_MAP[ex.bodyPart] || 'Personnalisé',
        image:   PROXY_URL + '?exerciseId=' + ex.id + '&resolution=180',
        desc:    ex.target + (ex.equipment !== 'body weight' ? ' · ' + ex.equipment : ''),
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
  return {"id":1001,"name":"POWER RUSH PANA","weeks":[{"weekNum":1,"sessions":[{"id":0,"name":"1ere Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":5,"pct":65,"weight":120.25,"rpe":null,"rest":180},{"reps":5,"pct":75,"weight":138.75,"rpe":null,"rest":180},{"reps":5,"pct":82,"weight":151.7,"rpe":8.0,"rest":180},{"reps":5,"pct":82,"weight":151.7,"rpe":8.0,"rest":180},{"reps":5,"pct":72,"weight":133.2,"rpe":null,"rest":180}]},{"name":"BENCH 2CT PAUSE","liftType":"bench","series":[{"reps":3,"pct":74,"weight":74.0,"rpe":null,"rest":180},{"reps":3,"pct":82,"weight":82.0,"rpe":6.0,"rest":180},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0,"rest":180},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0,"rest":180},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0,"rest":180}]}]},{"id":1,"name":"2ème Seance","exercises":[{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":5,"pct":65,"weight":126.75,"rpe":null,"rest":180},{"reps":5,"pct":75,"weight":146.25,"rpe":null,"rest":180},{"reps":5,"pct":82,"weight":159.9,"rpe":8.0,"rest":180},{"reps":5,"pct":82,"weight":159.9,"rpe":8.0,"rest":180},{"reps":5,"pct":72,"weight":140.4,"rpe":null,"rest":180}]},{"name":"RDL haltère","liftType":"deadlift","series":[{"reps":10,"pct":null,"weight":null,"rpe":5.0,"rest":180},{"reps":10,"pct":null,"weight":null,"rpe":5.0,"rest":180},{"reps":10,"pct":null,"weight":null,"rpe":5.0,"rest":180},{"reps":10,"pct":null,"weight":null,"rpe":5.0,"rest":180}]},{"name":"Rowing Bucheron","liftType":"","series":[{"reps":8,"pct":null,"weight":null,"rpe":8.0,"rest":180},{"reps":8,"pct":null,"weight":null,"rpe":8.0,"rest":180},{"reps":8,"pct":null,"weight":null,"rpe":8.0,"rest":180}]},{"name":"Larsen Press","liftType":"bench","series":[{"reps":1,"pct":75,"weight":75.0,"rpe":null,"rest":180},{"reps":1,"pct":82,"weight":82.0,"rpe":6.0,"rest":180},{"reps":1,"pct":87,"weight":87.0,"rpe":8.0,"rest":180},{"reps":5,"pct":77,"weight":77.0,"rpe":8.0,"rest":180},{"reps":5,"pct":77,"weight":77.0,"rpe":8.0,"rest":180},{"reps":5,"pct":77,"weight":77.0,"rpe":8.0,"rest":180}]},{"name":"Extension triceps","liftType":"","series":[{"reps":12,"pct":null,"weight":null,"rpe":8.0,"rest":180},{"reps":12,"pct":null,"weight":null,"rpe":8.0,"rest":180},{"reps":12,"pct":null,"weight":null,"rpe":8.0,"rest":180}]}]},{"id":2,"name":"3ème Seance","exercises":[{"name":"TEMPO SQUAT 3:1:3","liftType":"squat","series":[{"reps":3,"pct":75,"weight":138.75,"rpe":null,"rest":180},{"reps":3,"pct":75,"weight":138.75,"rpe":null,"rest":180},{"reps":3,"pct":75,"weight":138.75,"rpe":null,"rest":180}]},{"name":"TEMPO 4:2:0 Bench","liftType":"bench","series":[{"reps":2,"pct":70,"weight":70.0,"rpe":null,"rest":180},{"reps":2,"pct":78,"weight":78.0,"rpe":null,"rest":180},{"reps":2,"pct":83,"weight":83.0,"rpe":null,"rest":180},{"reps":2,"pct":83,"weight":83.0,"rpe":null,"rest":180}]}]},{"id":3,"name":"4ème Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":1,"pct":77,"weight":140.53,"rpe":null,"rest":180},{"reps":1,"pct":84,"weight":153.3,"rpe":5.0,"rest":180},{"reps":1,"pct":90,"weight":164.25,"rpe":7.5,"rest":180},{"reps":1,"pct":90,"weight":164.25,"rpe":7.5,"rest":180},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0,"rest":180}]},{"name":"BENCH","liftType":"bench","series":[{"reps":1,"pct":79,"weight":79.0,"rpe":null,"rest":180},{"reps":1,"pct":86,"weight":86.0,"rpe":6.0,"rest":180},{"reps":1,"pct":93,"weight":93.0,"rpe":8.0,"rest":180},{"reps":1,"pct":93,"weight":93.0,"rpe":8.0,"rest":180},{"reps":7,"pct":72,"weight":72.0,"rpe":7.0,"rest":180},{"reps":7,"pct":72,"weight":72.0,"rpe":7.0,"rest":180}]},{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":1,"pct":77,"weight":150.15,"rpe":null,"rest":180},{"reps":1,"pct":84,"weight":163.8,"rpe":5.0,"rest":180},{"reps":1,"pct":89,"weight":173.55,"rpe":7.0,"rest":180},{"reps":1,"pct":89,"weight":173.55,"rpe":7.0,"rest":180}]}]}]},{"weekNum":2,"sessions":[{"id":100,"name":"1ere Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":5,"pct":65,"weight":118.62},{"reps":5,"pct":75,"weight":136.88},{"reps":5,"pct":82,"weight":149.65,"rpe":8.0},{"reps":5,"pct":82,"weight":149.65,"rpe":8.0},{"reps":5,"pct":82,"weight":149.65,"rpe":8.0}]},{"name":"BENCH 2CT PAUSE","liftType":"bench","series":[{"reps":3,"pct":74,"weight":74.0},{"reps":3,"pct":82,"weight":82.0,"rpe":6.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0}]}]},{"id":101,"name":"2ème Seance","exercises":[{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":5,"pct":65,"weight":126.75},{"reps":5,"pct":75,"weight":146.25},{"reps":5,"pct":82,"weight":159.9,"rpe":8.0},{"reps":5,"pct":82,"weight":159.9,"rpe":8.0},{"reps":5,"pct":72,"weight":140.4}]},{"name":"Larsen Press","liftType":"bench","series":[{"reps":1,"pct":75,"weight":71.25},{"reps":1,"pct":82,"weight":77.9,"rpe":6.0},{"reps":1,"pct":87,"weight":82.65,"rpe":8.0},{"reps":5,"pct":77,"weight":73.15,"rpe":8.0},{"reps":5,"pct":77,"weight":73.15,"rpe":8.0}]},{"name":"Extension triceps","liftType":"","series":[{"reps":12},{"reps":12},{"reps":12}]}]},{"id":102,"name":"3ème Seance","exercises":[{"name":"TEMPO SQUAT 3:1:3","liftType":"squat","series":[{"reps":3,"pct":80,"weight":146.0},{"reps":3,"pct":80,"weight":146.0},{"reps":3,"pct":80,"weight":146.0}]},{"name":"TEMPO 4:2:0 Bench","liftType":"bench","series":[{"reps":2,"pct":70,"weight":66.5},{"reps":2,"pct":78,"weight":74.1},{"reps":2,"pct":83,"weight":78.85},{"reps":2,"pct":83,"weight":78.85}]}]},{"id":103,"name":"4ème Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":1,"pct":86,"weight":156.95,"rpe":6.0},{"reps":1,"pct":93,"weight":169.72,"rpe":8.0},{"reps":1,"pct":93,"weight":169.72,"rpe":8.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0}]},{"name":"BENCH","liftType":"bench","series":[{"reps":1,"pct":79,"weight":75.05},{"reps":1,"pct":86,"weight":81.7,"rpe":6.0},{"reps":1,"pct":93,"weight":88.35,"rpe":8.0},{"reps":7,"pct":72,"weight":68.4,"rpe":7.0},{"reps":7,"pct":72,"weight":68.4,"rpe":7.0}]},{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":1,"pct":79,"weight":154.05},{"reps":1,"pct":86,"weight":167.7,"rpe":5.0},{"reps":1,"pct":93,"weight":181.35,"rpe":8.0},{"reps":1,"pct":93,"weight":181.35,"rpe":8.0}]}]}]},{"weekNum":3,"sessions":[{"id":200,"name":"1ere Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":3,"pct":74,"weight":135.05},{"reps":3,"pct":82,"weight":149.65,"rpe":6.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0}]},{"name":"BENCH 2CT PAUSE","liftType":"bench","series":[{"reps":3,"pct":74,"weight":74.0},{"reps":3,"pct":82,"weight":82.0,"rpe":6.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0},{"reps":3,"pct":86,"weight":86.0,"rpe":8.0}]}]},{"id":201,"name":"2ème Seance","exercises":[{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":3,"pct":74,"weight":144.3},{"reps":3,"pct":82,"weight":159.9,"rpe":6.0},{"reps":3,"pct":86,"weight":167.7,"rpe":8.0},{"reps":3,"pct":86,"weight":167.7,"rpe":8.0}]},{"name":"Larsen Press","liftType":"bench","series":[{"reps":1,"pct":75,"weight":71.25},{"reps":1,"pct":82,"weight":77.9,"rpe":6.0},{"reps":1,"pct":87,"weight":82.65,"rpe":8.0},{"reps":5,"pct":77,"weight":73.15,"rpe":8.0},{"reps":5,"pct":77,"weight":73.15,"rpe":8.0}]}]}]},{"weekNum":4,"sessions":[{"id":300,"name":"1ere Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":3,"pct":74,"weight":135.05},{"reps":3,"pct":82,"weight":149.65,"rpe":6.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0},{"reps":3,"pct":86,"weight":156.95,"rpe":8.0}]},{"name":"BENCH 2CT PAUSE","liftType":"bench","series":[{"reps":3,"pct":74,"weight":70.3},{"reps":3,"pct":82,"weight":77.9,"rpe":6.0},{"reps":3,"pct":86,"weight":81.7,"rpe":8.0}]}]},{"id":301,"name":"2ème Seance","exercises":[{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":3,"pct":74,"weight":144.3},{"reps":3,"pct":82,"weight":159.9,"rpe":6.0},{"reps":3,"pct":86,"weight":167.7,"rpe":8.0},{"reps":3,"pct":86,"weight":167.7,"rpe":8.0}]},{"name":"Extension triceps","liftType":"","series":[{"reps":12},{"reps":12},{"reps":12}]}]}]},{"weekNum":5,"sessions":[{"id":400,"name":"1ere Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":3,"pct":70,"weight":127.75},{"reps":3,"pct":76,"weight":138.7,"rpe":5.0},{"reps":3,"pct":80,"weight":146.0,"rpe":7.0},{"reps":3,"pct":80,"weight":146.0,"rpe":7.0}]},{"name":"BENCH 2CT PAUSE","liftType":"bench","series":[{"reps":3,"pct":70,"weight":66.5},{"reps":3,"pct":76,"weight":72.2,"rpe":5.0},{"reps":3,"pct":80,"weight":76.0,"rpe":7.0}]}]},{"id":403,"name":"4ème Seance","exercises":[{"name":"SQUAT","liftType":"squat","series":[{"reps":1,"pct":83,"weight":153.55,"rpe":5.0},{"reps":1,"pct":89,"weight":164.65,"rpe":7.0},{"reps":1,"pct":95,"weight":175.75,"rpe":8.5},{"reps":1,"pct":100,"weight":185.0,"rpe":10.0}]},{"name":"BENCH","liftType":"bench","series":[{"reps":1,"pct":83,"weight":83.0,"rpe":5.0},{"reps":1,"pct":89,"weight":89.0,"rpe":7.0},{"reps":1,"pct":95,"weight":95.0,"rpe":8.5},{"reps":1,"pct":100,"weight":100.0,"rpe":10.0}]},{"name":"DEADLIFT","liftType":"deadlift","series":[{"reps":1,"pct":79,"weight":158.0},{"reps":1,"pct":86,"weight":172.0,"rpe":6.0},{"reps":1,"pct":93,"weight":186.0,"rpe":8.0},{"reps":1,"pct":100,"weight":200.0,"rpe":10.0}]}]}]}]};
}
