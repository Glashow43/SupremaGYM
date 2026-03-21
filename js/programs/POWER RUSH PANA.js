// ══════════════════════════════════════════════════════════
// js/programs/power-rush-pana.js
// ══════════════════════════════════════════════════════════
function getPowerRushPana() {
  return {
    id: 1001,
    name: "POWER RUSH PANA",
    weeks: [
      { weekNum: 1, sessions: [
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
      // Semaines 2-5 identiques au fichier data.js original...
      // (copiez les semaines 2, 3, 4, 5 depuis votre data.js actuel)
    ]
  };
}
