// ══════════════════════════════════════════════════════════
// js/calc.js — Calculateur 1RM (formule d'Epley) + tableau %
// ══════════════════════════════════════════════════════════

const PCTS = [100, 97, 94, 92, 89, 86, 83, 81, 78, 75, 70, 67, 65, 60];
const PCR  = { 100: 1, 97: 2, 94: 3, 92: 4, 89: 5, 86: 6, 83: 7, 81: 8, 78: 9, 75: 10, 70: 12, 67: 15 };

function renderCalc() {
  // ── Encarts 1RM actuels ──
  var rmEl = document.getElementById('calc-rm-cards');
  if (rmEl) {
    var total = (S.rm.squat || 0) + (S.rm.bench || 0) + (S.rm.deadlift || 0);
    rmEl.innerHTML = '<div class="rm-row">'
      + '<div class="rm-card squat"><div class="rm-label">Squat</div><div class="rm-val">' + (S.rm.squat || '—') + '</div><div class="rm-unit">kg</div></div>'
      + '<div class="rm-card bench"><div class="rm-label">Bench</div><div class="rm-val">' + (S.rm.bench || '—') + '</div><div class="rm-unit">kg</div></div>'
      + '<div class="rm-card deadlift"><div class="rm-label">Deadlift</div><div class="rm-val">' + (S.rm.deadlift || '—') + '</div><div class="rm-unit">kg</div></div>'
      + '</div>'
      + (total > 0 ? '<div class="wcard" style="text-align:center;padding:16px;margin-bottom:10px;"><div class="home-total-label">Total Powerlifting</div><div class="home-total">' + total + ' kg</div></div>' : '');
  }

  // ── Calculateur ──
  var w  = parseFloat(document.getElementById('calc-weight').value);
  var r  = parseInt(document.getElementById('calc-reps').value);
  var el = document.getElementById('calc-results');
  if (!w || !r) { el.innerHTML = ''; return; }

  var orm = r === 1 ? w : +(w / (1.0278 - 0.0278 * r)).toFixed(1);

  el.innerHTML = '<div class="wcard">'
    + '<div style="text-align:center;margin-bottom:12px;">'
    + '<div style="font-size:11px;color:var(--text2);text-transform:uppercase;font-weight:700;">1RM estimé</div>'
    + '<div style="font-size:32px;font-weight:900;color:var(--purple);">' + orm + ' kg</div>'
    + '</div>'
    + '<div class="sh p">Tableau des %</div>'
    + PCTS.map(function(pct) {
        var kg   = +(orm * pct / 100).toFixed(1);
        var reps = PCR[pct] || '';
        return '<div class="calc-result-row">'
          + '<span class="calc-pct">' + pct + '%</span>'
          + '<span class="calc-kg">' + kg + ' kg</span>'
          + '<span class="calc-reps">' + (reps ? reps + '+ reps' : '') + '</span>'
          + '</div>';
      }).join('')
    + '</div>';
}

function save1RM() {
  var lift = document.getElementById('calc-lift').value;
  var w    = parseFloat(document.getElementById('calc-weight').value);
  var r    = parseInt(document.getElementById('calc-reps').value);
  if (!w || !r) { notify('Entre un poids et des reps'); return; }
  var orm = r === 1 ? w : +(w / (1.0278 - 0.0278 * r)).toFixed(1);
  S.rm[lift] = orm;
  sv('oneRMs', S.rm);
  renderDash();
  renderCalc();
  notify('✅ 1RM ' + lift + ' mis à jour: ' + orm + 'kg');
}
