// ══════════════════════════════════════════════════════════
// js/programs/powerlifter-lvl2.js
// ══════════════════════════════════════════════════════════
function getPowerlifterLvl2() {
  return {
    id: 1006,
    name: "POWERLIFTER LVL2",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        { id: 5000, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 81, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 81, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5001, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5002, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 5, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 8, pct: 65, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 73, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5003, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 2
      // ══════════════════════════════════════
      { weekNum: 2, sessions: [

        { id: 5100, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5101, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 6.0, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 6.0, rest: 180 },
          ]},
        ]},

        { id: 5102, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 5, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: 68, weight: null, rpe: 6.0, rest: 180 },
            { reps: 8, pct: 68, weight: null, rpe: 6.0, rest: 180 },
          ]},
        ]},

        { id: 5103, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        { id: 5200, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 82, weight: null, rpe: 6.0, rest: 180 },
            { reps: 3, pct: 87, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 81, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5201, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 82, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5202, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 5, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5203, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 82, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        { id: 5300, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 81, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5301, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift Halte", liftType: "deadlift", series: [
            { reps: 3, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 77, weight: null, rpe: 5.0, rest: 180 },
          ]},
        ]},

        { id: 5302, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 5, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5303, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 90, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        { id: 5400, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 4, pct: 79, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5401, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 6.0, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 6.0, rest: 180 },
          ]},
        ]},

        { id: 5402, name: "3ème Séance", exercises: [
          { name: "TEMPO SQUAT 3:1:3", liftType: "squat", series: [
            { reps: 5, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: 68, weight: null, rpe: 6.0, rest: 180 },
            { reps: 8, pct: 68, weight: null, rpe: 6.0, rest: 180 },
          ]},
        ]},

        { id: 5403, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 6
      // ══════════════════════════════════════
      { weekNum: 6, sessions: [

        { id: 5500, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 9, pct: 63, weight: null, rpe: 5.0, rest: 180 },
            { reps: 9, pct: 66, weight: null, rpe: 6.0, rest: 180 },
            { reps: 9, pct: 69, weight: null, rpe: 7.0, rest: 180 },
            { reps: 9, pct: 61, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 6, pct: 71, weight: null, rpe: 5.0, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: 7.0, rest: 180 },
            { reps: 6, pct: 80, weight: null, rpe: 8.0, rest: 180 },
            { reps: 6, pct: 74, weight: null, rpe: 6.0, rest: 180 },
          ]},
        ]},

        { id: 5501, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 9, pct: 63, weight: null, rpe: 5.0, rest: 180 },
            { reps: 9, pct: 69, weight: null, rpe: 7.0, rest: 180 },
            { reps: 9, pct: 74, weight: null, rpe: 9.0, rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 5,  pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8,  pct: null, weight: null, rpe: 7.0, rest: 180 },
            { reps: 8,  pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8,  pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 7, pct: 69, weight: null, rpe: 5.0, rest: 180 },
            { reps: 7, pct: 72, weight: null, rpe: 6.0, rest: 180 },
            { reps: 7, pct: 75, weight: null, rpe: 7.0, rest: 180 },
            { reps: 7, pct: 75, weight: null, rpe: 7.0, rest: 180 },
          ]},
        ]},

        { id: 5502, name: "3ème Séance", exercises: [
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 3, pct: 79, weight: null, rpe: 5.0, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 6.0, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Squat", liftType: "squat", series: [
            { reps: 5, pct: 74, weight: null, rpe: 5.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 5.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 87, weight: null, rpe: 6.0, rest: 180 },
            { reps: 10, pct: 70, weight: null, rpe: 9.0, rest: 180 },
          ]},
        ]},

        { id: 5503, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 4, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 82, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 4, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 82, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 82, weight: null, rpe: 7.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 4, pct: 77, weight: null, rpe: 5.0, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0, rest: 180 },
            { reps: 4, pct: 82, weight: null, rpe: 7.0, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}