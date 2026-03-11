# SupremaGym — Documentation technique

> Application PWA de suivi d'entraînement powerlifting  
> Stack : HTML + CSS + JS vanilla · Firebase Auth/Firestore · GitHub Pages

---

## 📁 Structure du projet

```
supremagym/
├── index.html          ← Structure HTML uniquement (zéro logique)
├── css/
│   └── style.css       ← Tous les styles (thème sombre)
├── js/
│   ├── firebase.js     ← Config Firebase, Auth, Sync cloud
│   ├── state.js        ← État global S + helpers localStorage
│   ├── data.js         ← Données exercices + programme par défaut
│   ├── nav.js          ← Navigation, toast, modals
│   ├── home.js         ← Dashboard (page Accueil)
│   ├── exercises.js    ← Page exercices + Exercise Picker
│   ├── programs.js     ← Programmes + Éditeur de séance
│   ├── session.js      ← Page Train + Logger de séance
│   ├── calc.js         ← Calculateur 1RM
│   ├── progress.js     ← Historique des séances
│   ├── settings.js     ← Réglages, export, import, reset
│   └── pwa.js          ← Bannière install + Service Worker
└── DOCUMENTATION.md    ← Ce fichier
```

> ⚠️ **Ordre de chargement des scripts dans index.html**  
> `firebase.js` → `state.js` → `data.js` → `nav.js` → `home.js` → `exercises.js` → `programs.js` → `session.js` → `calc.js` → `progress.js` → `settings.js` → `pwa.js`

---

## 🗂 Fichiers JS — rôle détaillé

### `js/firebase.js`
Config et initialisation Firebase. Gère :
- `firebaseConfig` — credentials du projet `supermagym`
- `auth`, `db` — instances Firebase Auth et Firestore
- `currentUser` — utilisateur connecté (null si déconnecté)
- `scheduleSyncToCloud()` — debounce 1500ms avant sync
- `syncToCloud()` — écrit tout `S` dans `users/{uid}`
- `loadFromCloud()` — charge les données depuis Firestore
- `signInWithGoogle()` — popup Google Sign-In
- `signOut()` — déconnexion avec confirmation
- `auth.onAuthStateChanged(...)` — point d'entrée principal de l'app après login

### `js/state.js`
Unique source de vérité de l'application.

```js
S = {
  rm:       { squat, bench, deadlift },   // 1RM actuels (kg)
  sessions: [ ...séances terminées ],     // historique
  cur:      [ ...exercices en cours ],    // séance live
  progs:    [ ...programmes ],            // liste complète
  ap:       { programId, weekIdx, sessionIdx } | null,  // programme actif
  ctx:      { progId, weekIdx, sessionIdx, progName, sessionName } | null  // contexte séance
}
```

Fonctions helpers :
- `ld(key, default)` — lit depuis localStorage (JSON.parse)
- `sv(key, value)` — écrit dans localStorage + déclenche sync cloud

### `js/data.js`
Données statiques et référentiel d'exercices.

- `CAT_ICONS` — dictionnaire catégorie → `{ emoji, color, bg }`
- `BUILTIN_EXERCISES` — 45 exercices intégrés (lecture seule)
- `getAllExercises()` — fusionne BUILTIN + exercices custom (localStorage)
- `getDefaultProgram()` — retourne l'objet JSON complet POWER RUSH PANA (5 semaines)

### `js/nav.js`
Navigation et utilitaires UI.

- `showPage(id, navIndex)` — affiche une page, met à jour top nav + bottom nav, déclenche le render de la page
- `notify(message)` — toast en haut de l'écran (2,4s, timer réinitialisé si double appel)
- `openModal(id)` / `closeModal(id)` — affiche/masque un modal

**Table de navigation :**

| id         | navIndex | Page affichée        |
|------------|----------|----------------------|
| `home`     | 0        | Accueil / Dashboard  |
| `exercises`| 1        | Bibliothèque exercices|
| `programs` | 2        | Mes Programmes       |
| `train`    | 3        | S'entraîner          |
| `session`  | 3        | Séance en cours      |
| `calc`     | 4        | Calculateur 1RM      |
| `progress` | 5        | Historique           |
| `settings` | 6        | Réglages             |

### `js/home.js`
- `renderDash()` — rend les 3 cartes 1RM, le total, le programme actif, la dernière séance, les 5 séances récentes

### `js/exercises.js`
**Exercise Picker (bottom sheet)**
- `openExPicker(mode)` — ouvre le picker en mode `'session'` ou `'editor'`
- `closeExPicker(event)` — ferme si clic sur le fond sombre
- `renderExPicker()` — render de la liste + filtres (catégorie + recherche)
- `setPickerCat(cat)` — change le filtre catégorie
- `pickExercise(ex)` — action au clic :
  - `'session'` → ouvre le modal de confirmation (séries/reps)
  - `'editor'`  → ajoute directement dans `eeState.exs`

**Page Exercices**
- `renderExPage()` — render complet de la bibliothèque groupée par catégorie
- `setExPageCat(cat)` — change le filtre catégorie
- `openAddCustomEx()` — ouvre le modal de création (champs vides)
- `openEditEx(ex)` — ouvre le modal de modification (pré-rempli)
- `saveEditEx()` — enregistre l'exercice custom dans localStorage
- `deleteCustomEx(ex)` — supprime avec confirmation

### `js/programs.js`
**Liste / Détail**
- `renderProgList()` — liste les programmes avec badge ACTIF
- `showProgList()` / `openProgDetail(pid)` — navigation entre les 2 sous-pages
- `renderProgDetail()` — affiche semaines et séances avec boutons Éditer / Lancer
- `createProgram()` — crée un programme vide depuis le modal
- `addWeek()` — ajoute une semaine vide
- `addSessToWeek(pid, wi)` — ajoute une séance à une semaine
- `activateProgram(pid)` — active un programme (remet à Sem1/Séance1)
- `deleteProgram(pid)` — supprime avec confirmation

**Éditeur de séance (overlay plein écran)**
- `eeState` — `{ pid, wi, si, exs[] }` — état courant de l'éditeur
- `openExEditor(pid, wi, si)` — ouvre l'éditeur pour une séance donnée
- `closeExEditor()` — ferme l'overlay
- `renderExEditor()` — render des exercices + séries avec inputs
- `eeUpdate(ei, si, key, val)` — mise à jour d'un champ de série
- `addSetToEE(ei)` / `removeSetFromEE(ei, si)` — gestion des séries
- `removeExFromEE(ei)` — supprime un exercice de l'éditeur
- `saveExEditor()` — persiste les modifications dans `S.progs`
- `normEx(ex)` — s'assure qu'un exercice a au moins une série

### `js/session.js`
**Wake Lock**
- `requestWakeLock()` — empêche l'écran de s'éteindre
- `releaseWakeLock()` — libère le wake lock
- Ré-acquisition automatique au `visibilitychange`

**Page Train**
- `renderTrain()` — séance suggérée + arbre collapsible des programmes
- `toggleTrainProg(hdr)` — toggle l'accordéon

**Logger**
- `startSess(pid, wi, si)` — initialise `S.cur` et `S.ctx`, navigue vers page-session. **NE fait PAS avancer le compteur.**
- `renderSess()` — render de la séance en cours (inputs reps/poids/RPE + checkmarks)
- `sessUpdate(ei, si, key, val)` — mise à jour live d'un champ
- `toggleDone(ei, si)` — toggle le checkmark ✓ d'une série
- `addSetToSess(ei)` / `removeExFromSess(ei)` — gestion des séries/exercices
- `confirmQuickEx()` — confirme l'ajout d'un exercice depuis le picker
- `saveSession()` — sauvegarde la séance, met à jour les 1RM, **avance le compteur du programme**, libère le wake lock
- `clearSession()` — annule la séance sans avancer le compteur

> 🔑 **Règle importante sur le compteur de programme**  
> Le compteur (`S.ap.weekIdx` / `S.ap.sessionIdx`) n'avance **que dans `saveSession()`**, jamais dans `startSess()`. Annuler une séance (`clearSession()`) laisse donc le compteur intact et repropose la même séance.

### `js/calc.js`
- `renderCalc()` — calcule le 1RM estimé (formule d'Epley) + affiche le tableau des pourcentages
- `save1RM()` — sauvegarde le 1RM calculé dans `S.rm[lift]`

**Formule d'Epley :**
```
1RM = poids / (1.0278 - 0.0278 × reps)
```

### `js/progress.js`
- `renderProgress()` — historique complet antéchronologique avec volume total par exercice

### `js/settings.js`
- `renderSettings()` — infos utilisateur et stats
- `exportData()` — télécharge un JSON `supremagym-backup-YYYY-MM-DD.json`
- `importData(event)` — restaure depuis un JSON
- `clearAllData()` — double confirmation, efface localStorage + Firestore

### `js/pwa.js`
- Bannière "Ajouter à l'écran d'accueil" (événement `beforeinstallprompt`)
- `installApp()` — déclenche la boîte native
- Service Worker via Blob URL (compatible GitHub Pages, pas de fichier sw.js séparé)

---

## 🔥 Firebase

| Champ Firestore (`users/{uid}`) | Type    | Description                    |
|----------------------------------|---------|-------------------------------|
| `oneRMs`                         | object  | `{ squat, bench, deadlift }`  |
| `sessions`                       | array   | Historique complet             |
| `programs`                       | array   | Tous les programmes            |
| `activeProgram`                  | object  | `{ programId, weekIdx, sessionIdx }` |
| `currentSession`                 | array   | Séance en cours (live)        |
| `currentSessionContext`          | object  | Contexte de la séance live    |
| `updatedAt`                      | timestamp | Dernière sync                |

**Sync :** toutes les écritures (`sv()`) déclenchent `scheduleSyncToCloud()` avec un debounce de 1500ms pour éviter les appels répétés.

---

## 📐 Modèles de données

### Exercice (dans un programme)
```json
{
  "name": "SQUAT",
  "liftType": "squat",
  "series": [
    { "reps": 5, "pct": 82, "weight": 151.7, "rpe": 8.0, "rest": 180 }
  ]
}
```

### Exercice (séance en cours)
```json
{
  "id": 1,
  "name": "SQUAT",
  "liftType": "squat",
  "sets": [
    { "reps": 5, "weight": "151.7", "done": false }
  ]
}
```

### Séance sauvegardée
```json
{
  "id": 1741700000000,
  "date": "2026-03-11T10:00:00.000Z",
  "context": { "progId": 1001, "weekIdx": 0, "sessionIdx": 0, "progName": "POWER RUSH PANA", "sessionName": "1ere Seance" },
  "exercises": [
    { "name": "SQUAT", "liftType": "squat", "sets": [...] }
  ]
}
```

### Programme actif
```json
{ "programId": 1001, "weekIdx": 0, "sessionIdx": 0 }
```

---

## 🎨 Thème CSS

Variables CSS dans `:root` (fichier `css/style.css`) :

| Variable      | Valeur    | Usage                     |
|---------------|-----------|---------------------------|
| `--bg`        | `#0e0f17` | Fond général              |
| `--surface`   | `#181a27` | Cartes                    |
| `--surface2`  | `#1f2133` | Fond inputs, lignes       |
| `--border`    | `#2a2d42` | Bordures                  |
| `--nav-bg`    | `#12131f` | Top nav + bottom nav      |
| `--purple`    | `#8b6cf7` | Couleur accent principale |
| `--purple2`   | `#a78bfa` | Accent secondaire         |
| `--green`     | `#22c55e` | Succès, boutons verts     |
| `--red`       | `#f43f5e` | Danger, annulation        |
| `--blue`      | `#3b82f6` | Info, boutons bleus       |
| `--squat`     | `#f87171` | Couleur Squat             |
| `--bench`     | `#60a5fa` | Couleur Bench             |
| `--deadlift`  | `#4ade80` | Couleur Deadlift          |
| `--grad`      | gradient  | Dégradé violet (header séance, login) |

---

## 🚀 Déploiement GitHub Pages

1. Pousser tous les fichiers sur la branche `main`
2. Settings → Pages → Source: `main` / `/ (root)`
3. Dans Firebase Console → Authentication → Authorized domains → ajouter `glashow43.github.io`

**URL :** `https://glashow43.github.io/SupremaGYM/`

---

## ⚠️ Points d'attention

- **Safari iOS** : `signInWithPopup` peut échouer sur certains navigateurs en mode privé. Solution future : implémenter `signInWithRedirect`.
- **Service Worker** : utilise un Blob URL (pas de fichier `sw.js` séparé) pour contourner les restrictions CORS de GitHub Pages.
- **localStorage** : miroir local de Firestore. En cas de désynchronisation, recharger la page resync depuis le cloud.
- **IDs des programmes** : utiliser `Date.now()` sauf pour le programme par défaut (ID fixe `1001`).
