// === CONFIGURATION ===
const euroToBaht = 38;
const bahtToEuro = 1 / euroToBaht;

// === LOGIQUE EXERCICE 1 : Devine le prix ===
function checkConversion(inputId, correctValue, isEuro = true) {
  const input = document.getElementById(inputId);
  const result = parseFloat(input.value);
  const feedback = document.getElementById(`${inputId}-feedback`);

  if (!result || isNaN(result)) {
    feedback.textContent = "⛔️ Remplis une valeur numérique.";
    feedback.style.color = "orange";
    return;
  }

  const tolerance = 0.1; // marge d'erreur
  if (Math.abs(result - correctValue) <= tolerance) {
    feedback.textContent = "✅ Yes Kylon ! C’est le bon calcul.";
    feedback.style.color = "green";
  } else {
    feedback.textContent = isEuro
      ? "❌ Essaie avec une division par 38 pour passer en euros."
      : "❌ Essaie avec une multiplication par 38 pour passer en bahts.";
    feedback.style.color = "red";
  }
}

// === LOGIQUE EXERCICE 2 : Complète la logique ===
function checkLogic(inputId, correctValue) {
  const input = document.getElementById(inputId);
  const feedback = document.getElementById(`${inputId}-feedback`);
  const result = parseFloat(input.value);

  if (!result || isNaN(result)) {
    feedback.textContent = "⛔️ Remplis une valeur.";
    feedback.style.color = "orange";
    return;
  }

  const tolerance = 0.1;
  if (Math.abs(result - correctValue) <= tolerance) {
    feedback.textContent = "✅ C’est juste !";
    feedback.style.color = "green";
  } else {
    feedback.textContent = `❌ Essaie encore. Piste : fais ${correctValue * 2} ÷ 2 par exemple.`;
    feedback.style.color = "red";
  }
}

// === LOGIQUE ENQUÊTES : Résolution Scénario 1 & 2 ===
function checkScenario1() {
  const total = 75 + 65 + 88;
  const feedback = document.getElementById("scenario1-feedback");

  feedback.textContent = total <= 300
    ? "✅ Oui, il peut tout prendre !"
    : "❌ Non, il doit retirer un élément.";
}

function checkScenario2() {
  const budget = 10 * euroToBaht;
  const jouet = 340;
  const feedback = document.getElementById("scenario2-feedback");

  feedback.textContent = budget >= jouet
    ? "✅ Oui, il peut acheter le jouet !"
    : "❌ Il n’a pas assez. Essaie de convertir les euros en bahts.";
}

// === ENVOI API : Résultats de l’élève ===
function sendResultsToAPI(moduleId, studentName, answers) {
  fetch('/api/send-result.js', {
    method: 'POST',
    headers: { 'Content-Type': 'application/json' },
    body: JSON.stringify({
      module: moduleId,
      name: studentName,
      answers: answers,
      date: new Date().toISOString()
    })
  })
    .then(res => res.ok ? console.log('✅ Résultats envoyés') : console.error('⛔️ Erreur d’envoi'))
    .catch(err => console.error('⛔️ API Error', err));
}

// Exemple d’appel :
// sendResultsToAPI('module-math-1', 'Kylon', { ex1q1: '5€', ex1q2: '1.5€', ... });