// ══════════════════════════════════════════════════════════
// js/programs/531.js
// ══════════════════════════════════════════════════════════
function get531() {
  return {
    id: 1005,
    name: "5-3-1",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        { id: 4000, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4001, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 4, pct: 72, weight: null, rpe: 5.0, rest: 180 },
            { reps: 2, pct: 80, weight: null, rpe: 7.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4002, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Développé Militaire Haltères", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Curl Biceps", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4003, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 72, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 2
      // ══════════════════════════════════════
      { weekNum: 2, sessions: [

        { id: 4100, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 84, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4101, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 4, pct: 72, weight: null, rpe: 5.0, rest: 180 },
            { reps: 2, pct: 80, weight: null, rpe: 7.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4102, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Développé Militaire Haltères", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Curl Biceps", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4103, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 92, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 92, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 92, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        { id: 4200, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4201, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 4, pct: 72, weight: null, rpe: 5.0, rest: 180 },
            { reps: 2, pct: 80, weight: null, rpe: 7.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4202, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Développé Militaire Haltères", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Curl Biceps", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4203, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 80, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 80, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 80, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        { id: 4300, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4301, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 4, pct: 72, weight: null, rpe: 5.0, rest: 180 },
            { reps: 2, pct: 80, weight: null, rpe: 7.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 88, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
          { name: "Rowing Haltère (Bucheron)", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4302, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 4303, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 85, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 85, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 85, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        { id: 4400, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 82, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 6.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 4401, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 4, pct: 72, weight: null, rpe: 5.0, rest: 180 },
            { reps: 2, pct: 80, weight: null, rpe: 7.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 2, pct: 86, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
        ]},

        { id: 4402, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 4403, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 6 — DELOAD
      // ══════════════════════════════════════
      { weekNum: 6, sessions: [

        { id: 4500, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
        ]},

        { id: 4501, name: "2ème Séance", exercises: [
          { name: "Spoto Press", liftType: "bench", series: [
            { reps: 6, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 4502, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Close Grip Bench Pause 2CT", liftType: "bench", series: [
            { reps: 6, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 4503, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}