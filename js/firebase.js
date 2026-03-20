// ══════════════════════════════════════════════════════════
// js/firebase.js — Configuration Firebase, Auth et Sync Cloud
// ══════════════════════════════════════════════════════════

const firebaseConfig = {
  apiKey:            "AIzaSyCk_HK6USgcJQl_J4rcBkkQtUR2cdDnfks",
  authDomain:        "supermagym.firebaseapp.com",
  projectId:         "supermagym",
  storageBucket:     "supermagym.firebasestorage.app",
  messagingSenderId: "360406512913",
  appId:             "1:360406512913:web:b7fa06a01c62615a7948b0"
};
firebase.initializeApp(firebaseConfig);
const auth = firebase.auth();
const db   = firebase.firestore();

let currentUser = null;
let syncTimer   = null;

function scheduleSyncToCloud() {
  if (!currentUser) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToCloud, 1500);
}

async function syncToCloud() {
  if (!currentUser) return;
  try {
    await db.collection('users').doc(currentUser.uid).set({
      oneRMs:                S.rm,
      sessions:              S.sessions,
      programs:              S.progs,
      activeProgram:         S.ap,
      currentSession:        S.cur,
      currentSessionContext: S.ctx,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.error('Sync cloud :', e);
  }
}

async function loadFromCloud() {
  if (!currentUser) return false;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (!doc.exists) return false;
    const d = doc.data();
    if (d.oneRMs)                              S.rm       = d.oneRMs;
    if (d.sessions)                            S.sessions = d.sessions;
    if (d.programs)                            S.progs    = d.programs;
    if (d.activeProgram !== undefined)         S.ap       = d.activeProgram;
    if (d.currentSession)                      S.cur      = d.currentSession;
    if (d.currentSessionContext !== undefined) S.ctx      = d.currentSessionContext;
    localStorage.setItem('oneRMs',                JSON.stringify(S.rm));
    localStorage.setItem('sessions',              JSON.stringify(S.sessions));
    localStorage.setItem('programs',              JSON.stringify(S.progs));
    localStorage.setItem('activeProgram',         JSON.stringify(S.ap));
    localStorage.setItem('currentSession',        JSON.stringify(S.cur));
    localStorage.setItem('currentSessionContext', JSON.stringify(S.ctx));
    return true;
  } catch (e) {
    console.error('Load cloud :', e);
    return false;
  }
}

function signInWithGoogle() {
  document.getElementById('login-loading').style.display = 'block';
  document.getElementById('login-error').style.display   = 'none';
  const provider = new firebase.auth.GoogleAuthProvider();
  auth.signInWithPopup(provider).catch(e => {
    document.getElementById('login-loading').style.display = 'none';
    document.getElementById('login-error').style.display   = 'block';
    document.getElementById('login-error').textContent     = '❌ ' + e.message;
  });
}

function signOut() {
  if (confirm('Se déconnecter ?')) auth.signOut();
}

auth.onAuthStateChanged(async user => {
  if (user) {
    currentUser = user;
    document.getElementById('login-loading').style.display = 'block';

    const loaded = await loadFromCloud();
    if (!loaded) {
      // Premier chargement : injecter le programme par défaut
      const defProg = getDefaultProgram();
      if (!S.progs.find(p => p.id === defProg.id)) {
        S.progs.unshift(defProg);
        localStorage.setItem('programs', JSON.stringify(S.progs));
      }
      await syncToCloud();
    }

    // Toujours mettre à jour le programme prédéfini avec la dernière version
    // (getDefaultProgram est défini dans data.js, chargé après state.js)
    var def = getDefaultProgram();
    var idx = S.progs.findIndex(function(p) { return p.id === def.id; });
    if (idx >= 0) S.progs[idx] = def;
    else S.progs.unshift(def);
    sv('programs', S.progs);
    await syncToCloud();

    // Masquer l'écran de login
    document.getElementById('login-screen').style.display = 'none';

    // Mettre à jour le drawer avec les infos utilisateur
    var dav = document.getElementById('drawer-avatar');
    if (user.photoURL) { dav.src = user.photoURL; dav.style.display = 'block'; }
    document.getElementById('drawer-username').textContent = user.displayName || user.email || '';
    document.getElementById('drawer-email').textContent    = user.email || '';

    // Render initial
    renderDash();
    renderSess();
    renderProgList();
    initApiExercises();

  } else {
    currentUser = null;
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('login-loading').style.display = 'none';
  }
});
