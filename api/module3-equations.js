// 📘 module3-equations.js

function checkEx1() {
  const answers = [30, 112, 80, 50];
  const userAnswers = [
    Number(document.getElementById("q1").value),
    Number(document.getElementById("q2").value),
    Number(document.getElementById("q3").value),
    Number(document.getElementById("q4").value),
  ];

  const feedback = userAnswers.map((val, i) => val === answers[i]);
  document.getElementById("result-ex1").innerHTML = feedback.every(f => f)
    ? "✅ Bravo ! Toutes les réponses sont correctes."
    : "❌ Vérifie tes calculs. Certaines réponses sont incorrectes.";
}

function checkEx2() {
  const answers = [15, 20, 23];
  const userAnswers = [
    Number(document.getElementById("q5").value),
    Number(document.getElementById("q6").value),
    Number(document.getElementById("q7").value),
  ];

  const feedback = userAnswers.map((val, i) => val === answers[i]);
  document.getElementById("result-ex2").innerHTML = feedback.every(f => f)
    ? "✅ Excellent !"
    : "❌ Certaines unités sont fausses. Essaie encore.";
}

function checkEx3() {
  const correct = document.querySelector('input[name="q8"]:checked');
  if (!correct) {
    document.getElementById("result-ex3").innerHTML = "⛔ Choisis une option.";
    return;
  }
  document.getElementById("result-ex3").innerHTML =
    correct.value === "A"
      ? "✅ Oui ! Il faut diviser 75 par 3."
      : "❌ Non, pense à ce qu’on cherche exactement.";
}

function checkEx4() {
  const answers = [225, 75, 25];
  const userAnswers = [
    Number(document.getElementById("q9").value),
    Number(document.getElementById("q10").value),
    Number(document.getElementById("q11").value),
  ];

  const feedback = userAnswers.map((val, i) => val === answers[i]);
  document.getElementById("result-ex4").innerHTML = feedback.every(f => f)
    ? "✅ Très bien vu ! Tu maîtrises."
    : "❌ Il y a des erreurs. Revois les calculs.";
}