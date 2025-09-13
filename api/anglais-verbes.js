// 📦 fichier: /api/anglais-verbes.js

function checkExercise3() {
  const answers = ["collect", "plays", "go", "has"];
  let correct = 0;

  answers.forEach((ans, i) => {
    const select = document.getElementById(`q${i + 1 + 10}`);
    if (select && select.value === ans) correct++;
  });

  const res = document.getElementById("result-ex3");
  res.textContent = correct === 4 ? "✅ Bravo, toutes les réponses sont correctes !" : `❌ ${correct}/4 correctes. Essaie encore !`;
}

function checkExercise4() {
  const answers = ["b", "b", "b", "a"];
  let correct = 0;

  answers.forEach((val, i) => {
    const select = document.getElementById(`q${i + 1 + 20}`);
    if (select && select.value === val) correct++;
  });

  const res = document.getElementById("result-ex4");
  res.textContent = correct === 4 ? "✅ Bien joué, tu as tout bon !" : `❌ ${correct}/4 correctes. Vérifie bien les sujets.`;
}

function checkExerciseBonus() {
  const q = ["q31", "q32", "q33", "q34"];
  const res = document.getElementById("result-ex-bonus");

  let filled = 0;
  q.forEach(id => {
    const el = document.getElementById(id);
    if (el && el.value.trim() !== "") filled++;
  });

  if (filled === 4) {
    res.innerHTML = "✅ Super ! Tu as complété toutes les phrases. Tu peux maintenant relire et améliorer si besoin.";
  } else {
    res.innerHTML = "✍️ Il manque une ou plusieurs réponses. Vérifie bien chaque phrase.";
  }
}

// Bonus : feedback instantané (optionnel, à connecter par input event)
// Exemple : <input id="q31" oninput="liveFeedback(this)">
function liveFeedback(input) {
  if (!input || !input.value) return;
  const res = document.getElementById("result-ex-bonus");
  res.innerHTML = "💡 Good! Continue comme ça.";
}