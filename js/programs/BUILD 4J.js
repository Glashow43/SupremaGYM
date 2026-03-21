// ══════════════════════════════════════════════════════════
// js/programs/build-4j.js
// ══════════════════════════════════════════════════════════
function getBuild4J() {
  return {
    id: 1004,
    name: "BUILD 4J",
    weeks: [

      // ══════════════════════════════════════
      // SEMAINE 1
      // ══════════════════════════════════════
      { weekNum: 1, sessions: [

        { id: 3000, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Close Grip", liftType: "bench", series: [
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        { id: 3001, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 4, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 4, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 5, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3002, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 68, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 8, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3003, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 7.5,  rest: 180 },
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

        { id: 3100, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 82, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Close Grip", liftType: "bench", series: [
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        { id: 3101, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 4, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 4, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 83, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 88, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 5, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3102, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 68, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 8, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3103, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 93, weight: null, rpe: 7.5,  rest: 180 },
            { reps: 1, pct: 97, weight: null, rpe: 9.0,  rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 95, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 4, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 3
      // ══════════════════════════════════════
      { weekNum: 3, sessions: [

        { id: 3200, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Close Grip", liftType: "bench", series: [
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        { id: 3201, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 4, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 4, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 81, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 3, pct: 91, weight: null, rpe: 9.0,  rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 5, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3202, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 6, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 68, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 76, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 3, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Bench Haltères", liftType: "bench", series: [
            { reps: 8, pct: null, weight: null, rpe: 5.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
            { reps: 8, pct: null, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3203, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 98, weight: null, rpe: 9.5,  rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 91, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 1, pct: 98, weight: null, rpe: 9.5,  rest: 180 },
            { reps: 4, pct: 83, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 4
      // ══════════════════════════════════════
      { weekNum: 4, sessions: [

        { id: 3300, name: "1ère Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 91, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 5, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 90, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 94, weight: null, rpe: 8.0,  rest: 180 },
          ]},
          { name: "Larsen Close Grip", liftType: "bench", series: [
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
            { reps: 5, pct: 74, weight: null, rpe: 8.0, rest: 180 },
          ]},
        ]},

        { id: 3301, name: "2ème Séance", exercises: [
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 4, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 80, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 4, pct: 85, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 4, pct: 78, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 3, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 81, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 86, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 5, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 77, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3302, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 65, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 3, pct: 65, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 71, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
            { reps: 3, pct: 75, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 71, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3303, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Bench Press", liftType: "bench", series: [
            { reps: 1, pct: 91, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 100, weight: null, rpe: 10.0, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 89, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 1, pct: 96, weight: null, rpe: 8.5,  rest: 180 },
            { reps: 1, pct: 98, weight: null, rpe: 10.0, rest: 180 },
          ]},
        ]},

      ]},

      // ══════════════════════════════════════
      // SEMAINE 5
      // ══════════════════════════════════════
      { weekNum: 5, sessions: [

        { id: 3400, name: "1ère Séance", exercises: [
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 1, pct: 81, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 81, weight: null, rpe: 6.0, rest: 180 },
            { reps: 1, pct: 81, weight: null, rpe: 6.0, rest: 180 },
          ]},
          { name: "Squat Pause 2CT", liftType: "squat", series: [
            { reps: 6, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 70, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 6, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 6, pct: 68, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "TEMPO Bench 4:2:0", liftType: "bench", series: [
            { reps: 5, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 76, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 5, pct: 80, weight: null, rpe: 8.0,  rest: 180 },
          ]},
        ]},

        { id: 3401, name: "2ème Séance", exercises: [
          { name: "Close Grip Bench", liftType: "bench", series: [
            { reps: 8, pct: 62, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: 6.0,  rest: 180 },
            { reps: 8, pct: 76, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 70, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 7, pct: 56, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 67, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 7, pct: 73, weight: null, rpe: 7.0,  rest: 180 },
            { reps: 7, pct: 73, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Deadlift TEMPO 3:0:3", liftType: "deadlift", series: [
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 6, pct: 60, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3402, name: "3ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 8, pct: 60, weight: null, rpe: null, rest: 180 },
            { reps: 8, pct: 67, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 8, pct: 74, weight: null, rpe: 8.0,  rest: 180 },
            { reps: 8, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Leg Extension", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
          ]},
          { name: "Bench Pause 3CT", liftType: "bench", series: [
            { reps: 1, pct: 89, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 7.0, rest: 180 },
            { reps: 1, pct: 89, weight: null, rpe: 7.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 8.0, rest: 180 },
            { reps: 3, pct: 84, weight: null, rpe: 8.0, rest: 180 },
          ]},
          { name: "Machine Pec", liftType: "", series: [
            { reps: 10, pct: null, weight: null, rpe: 5.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 7.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
            { reps: 10, pct: null, weight: null, rpe: 9.0, rest: 120 },
          ]},
          { name: "Deadlift TEMPO 3:0:3", liftType: "deadlift", series: [
            { reps: 4, pct: 58, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 64, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 69, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 69, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

        { id: 3403, name: "4ème Séance", exercises: [
          { name: "Squat", liftType: "squat", series: [
            { reps: 1, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
          ]},
          { name: "Squat Barre Haute", liftType: "squat", series: [
            { reps: 5, pct: 67, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 67, weight: null, rpe: null, rest: 180 },
            { reps: 5, pct: 67, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Bench Pause 2CT", liftType: "bench", series: [
            { reps: 1, pct: 84, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 88, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 1, pct: 92, weight: null, rpe: 7.0,  rest: 180 },
          ]},
          { name: "Larsen Press", liftType: "bench", series: [
            { reps: 7, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 66, weight: null, rpe: null, rest: 180 },
            { reps: 7, pct: 66, weight: null, rpe: null, rest: 180 },
          ]},
          { name: "Deadlift", liftType: "deadlift", series: [
            { reps: 1, pct: 80, weight: null, rpe: null, rest: 180 },
            { reps: 1, pct: 86, weight: null, rpe: 5.0,  rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 73, weight: null, rpe: null, rest: 180 },
            { reps: 4, pct: 63, weight: null, rpe: null, rest: 180 },
          ]},
        ]},

      ]},

    ]
  };
}