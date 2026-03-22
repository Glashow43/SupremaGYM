// ══════════════════════════════════════════════════════════
// js/programs/ULTRA POWER.js
// ══════════════════════════════════════════════════════════
function getUltraPower() {
  return {
    id: 1002,
    name: "ULTRA POWER",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        { id: 1000, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1001, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 5, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 9.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 4, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
        ]},

        { id: 1002, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 6, pct: 79, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift TEMPO 3:0:3", liftType: "deadlift", series: [
            { reps: 3, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1003, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 85, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 2
      // ══════════════════════════════════════
      { weekNum: 2, sessions: [

        { id: 1100, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1101, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 5, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 9.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 4, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 91, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
        ]},

        { id: 1102, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 6, pct: 79, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift TEMPO 3:0:3", liftType: "deadlift", series: [
            { reps: 3, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1103, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 6.5,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        { id: 1200, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1201, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 5, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 9.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 2, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 88, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
        ]},

        { id: 1202, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 90, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 6, pct: 79, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift TEMPO 3:0:3", liftType: "deadlift", series: [
            { reps: 3, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1203, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 1, pct: 85, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 72, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        { id: 1300, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1301, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 3, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 2, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 2, pct: 88, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
        ]},

        { id: 1302, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 60, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 6, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: 6.0,  rest: 180 },
          ]},
        ]},

        { id: 1303, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 89, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 89, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 89, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5 — DELOAD
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        { id: 1400, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 8, pct: 63, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1401, name: "2ème Séance", exercises: [
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 5, pct: 67, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 79, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1402, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 4, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 71, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 10, pct: 55, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: 63, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: 72, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 1403, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 77, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}
