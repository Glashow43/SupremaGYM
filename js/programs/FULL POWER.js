// ══════════════════════════════════════════════════════════
// js/programs/full-power.js
// ══════════════════════════════════════════════════════════
function getFullPower() {
  return {
    id: 1003,
    name: "FULL POWER",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        { id: 2000, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Machine Pec", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2001, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 5, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2002, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 79, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 7, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "TEMPO Bench 3:1:0", liftType: "bench", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2003, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 83, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 7, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 7, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 76, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 83, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 4, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 2
      // ══════════════════════════════════════
      { weekNum: 2, sessions: [

        { id: 2100, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 86, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Machine Pec", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2101, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 4, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 4, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2102, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 79, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "TEMPO Bench 3:1:0", liftType: "bench", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2103, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        { id: 2200, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 75, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 91, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Machine Pec", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2201, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 91, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 85, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "RDL (Haltères)", liftType: "deadlift", series: [
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2202, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 84, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 5, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 3:1:0", liftType: "bench", series: [
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2203, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 83, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 83, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 83, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        { id: 2300, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 85, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 2301, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 5, pct: 56, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 72, weight: null, rpe: 6.0,  rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 2302, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 5, pct: 50, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 2303, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 86, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        { id: 2400, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 62, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 6, pct: 62, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Extension Triceps Poulie", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
          { name: "Curl Biceps", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
          ]},
        ]},

        { id: 2401, name: "2ème Séance", exercises: [
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: null, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 6, pct: 62, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Tractions", liftType: "", series: [
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
            { reps: null, pct: null, weight: null, rpe: null, rest: 120 },
          ]},
          { name: "Tirage Horizontal Machine", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2402, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 4, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 68, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Presse à cuisses", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 10, pct: 57, weight: null, rpe: null, rest: 180 },
            { reps: 10, pct: 63, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 10, pct: 70, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 10, pct: 70, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 10, pct: 60, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Curl Biceps", liftType: "", series: [
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
            { reps: 12, pct: null, weight: null, rpe: 8.0, rest: 120 },
          ]},
        ]},

        { id: 2403, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 78, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}