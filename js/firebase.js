// ══════════════════════════════════════════════════════════
// js/firebase.js — Configuration Firebase, Auth et Sync Cloud
// ══════════════════════════════════════════════════════════

// ── Config Firebase ───────────────────────────────────────
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

// ── Variables globales d'auth ─────────────────────────────
let currentUser = null;
let syncTimer   = null;

// ── Sync Cloud ────────────────────────────────────────────

/**
 * Planifie une sync debounce 1500ms après chaque sv().
 * Annule la sync précédente si une nouvelle arrive.
 */
function scheduleSyncToCloud() {
  if (!currentUser) return;
  clearTimeout(syncTimer);
  syncTimer = setTimeout(syncToCloud, 1500);
}

/**
 * Écrit tout l'état S dans Firestore (users/{uid}).
 */
async function syncToCloud() {
  if (!currentUser) return;
  try {
    await db.collection('users').doc(currentUser.uid).set({
      oneRMs:               S.rm,
      sessions:             S.sessions,
      programs:             S.progs,
      activeProgram:        S.ap,
      currentSession:       S.cur,
      currentSessionContext: S.ctx,
      updatedAt: firebase.firestore.FieldValue.serverTimestamp()
    });
  } catch (e) {
    console.error('Sync cloud :', e);
  }
}

/**
 * Charge les données depuis Firestore vers S + localStorage.
 * Retourne true si un document existait, false sinon.
 */
async function loadFromCloud() {
  if (!currentUser) return false;
  try {
    const doc = await db.collection('users').doc(currentUser.uid).get();
    if (!doc.exists) return false;
    const d = doc.data();
    if (d.oneRMs)                   S.rm       = d.oneRMs;
    if (d.sessions)                 S.sessions = d.sessions;
    if (d.programs)                 S.progs    = d.programs;
    if (d.activeProgram !== undefined) S.ap    = d.activeProgram;
    if (d.currentSession)           S.cur      = d.currentSession;
    if (d.currentSessionContext !== undefined) S.ctx = d.currentSessionContext;
    // Miroir localStorage
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

// ── Auth ──────────────────────────────────────────────────

/** Ouvre la popup Google Sign-In */
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

/** Déconnexion */
function signOut() {
  if (confirm('Se déconnecter ?')) auth.signOut();
}

/**
 * Observateur d'état de connexion.
 * Appelé par Firebase à chaque changement (login / logout / refresh).
 */
auth.onAuthStateChanged(async user => {
  if (user) {
    currentUser = user;
    document.getElementById('login-loading').style.display = 'block';

    const loaded = await loadFromCloud();
    if (!loaded) {
      // Premier login : injecter le programme par défaut
      const defProg = getDefaultProgram();
      if (!S.progs.find(p => p.name === defProg.name)) {
        S.progs.push(defProg);
        localStorage.setItem('programs', JSON.stringify(S.progs));
      }
      await syncToCloud();
    }

    // Masquer l'écran de login
    document.getElementById('login-screen').style.display = 'none';

    // Afficher badge utilisateur
    const badge = document.getElementById('user-badge');
    badge.classList.add('visible');
    const av = document.getElementById('user-avatar');
    if (user.photoURL) { av.src = user.photoURL; av.style.display = 'block'; }
    document.getElementById('user-name').textContent = user.displayName || user.email || '';

    // Rendre le dashboard et la séance en cours
    renderDash();
    renderSess();

  } else {
    currentUser = null;
    document.getElementById('login-screen').style.display = 'flex';
    document.getElementById('user-badge').classList.remove('visible');
    document.getElementById('login-loading').style.display = 'none';
  }
});
