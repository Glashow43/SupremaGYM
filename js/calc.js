// ══════════════════════════════════════════════════════════
// js/calc.js — Calculateur 1RM (formule d'Epley) + tableau %
// ══════════════════════════════════════════════════════════

/** Pourcentages du 1RM à afficher dans le tableau */
const PCTS = [100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 70, 67, 65, 60];

/** Correspondance pourcentage → nombre de répétitions indicatif */
const PCR = { 100: 1, 97: 2, 94: 3, 92: 4, 89: 5, 86: 6, 83: 7, 81: 8, 78: 9, 75: 10, 70: 12, 67: 15 };

/**
 * Rend la page calculateur 1RM.
 * Appelé à chaque saisie dans les champs poids/reps.
 */
function renderCalc() {
  const w  = parseFloat(document.getElementById('calc-weight').value);
  const r  = parseInt(document.getElementById('calc-reps').value);
  const el = document.getElementById('calc-results');

  if (!w || !r) { el.innerHTML = ''; return; }

  // Formule d'Epley : 1RM = poids / (1.0278 - 0.0278 × reps)
  const orm = r === 1 ? w : +(w / (1.0278 - 0.0278 * r)).toFixed(1);

  el.innerHTML = `
    <div class="wcard">
      <div style="text-align:center;margin-bottom:12px;">
        <div style="font-size:11px;color:var(--text2);text-transform:uppercase;font-weight:700;">1RM estimé</div>
        <div style="font-size:32px;font-weight:900;color:var(--purple);">${orm} kg</div>
      </div>
      <div class="sh p">Tableau des %</div>
      ${PCTS.map(pct => {
        const kg   = +(orm * pct / 100).toFixed(1);
        const reps = PCR[pct] || '';
        return `
          <div class="calc-result-row">
            <span class="calc-pct">${pct}%</span>
            <span class="calc-kg">${kg} kg</span>
            <span class="calc-reps">${reps ? reps + '+ reps' : ''}</span>
          </div>`;
      }).join('')}
    </div>`;
}

/**
 * Sauvegarde le 1RM calculé dans S.rm pour le levé sélectionné.
 * Met à jour le dashboard.
 */
function save1RM() {
  const lift = document.getElementById('calc-lift').value;
  const w    = parseFloat(document.getElementById('calc-weight').value);
  const r    = parseInt(document.getElementById('calc-reps').value);
  if (!w || !r) { notify('Entre un poids et des reps'); return; }

  const orm = r === 1 ? w : +(w / (1.0278 - 0.0278 * r)).toFixed(1);
  S.rm[lift] = orm;
  sv('oneRMs', S.rm);
  renderDash();
  notify(`✅ 1RM ${lift} mis à jour: ${orm}kg`);
}
