// Fichier : exo-accords.js

document.addEventListener("DOMContentLoaded", () => {
  const btnExo1 = document.getElementById("btn-exo1");
  const btnExo2 = document.getElementById("btn-exo2");
  const btnExo3 = document.getElementById("btn-exo3");
  const btnExo4 = document.getElementById("btn-exo4");

  if (btnExo1) btnExo1.addEventListener("click", checkExo1);
  if (btnExo2) btnExo2.addEventListener("click", checkExo2);
  if (btnExo3) btnExo3.addEventListener("click", checkExo3);
  if (btnExo4) btnExo4.addEventListener("click", checkBonus);
});

function checkExo1() {
  const reps = [
    { det: "une", adj: "bleue" },
    { det: "des", adj: "intelligents" },
    { det: "un", adj: "sacré" },
    { det: "des", adj: "mûres" }
  ];

  for (let i = 1; i <= 4; i++) {
    const det = document.getElementById(`exo1-det-${i}`).value.trim().toLowerCase();
    const adj = document.getElementById(`exo1-adj-${i}`).value.trim().toLowerCase();
    const result = document.getElementById(`result1-${i}`);

    if (det === reps[i - 1].det && adj === reps[i - 1].adj) {
      result.innerHTML = "<span style='color:green'>✨ Le cahier accepte ta phrase ! Bravo.</span>";
    } else {
      result.innerHTML = "<span style='color:red'>🚫 Hmm… Ton adjectif n’est pas accordé. Refais un essai.</span>";
    }
  }
}

function checkExo2() {
  const expected = [
    "Des dragons rouges",
    "Un stylo magique",
    "Les filles courageuses",
    "Des baskets vertes"
  ];

  for (let i = 1; i <= 4; i++) {
    const val = document.getElementById(`exo2-input-${i}`).value.trim();
    const result = document.getElementById(`result2-${i}`);
    if (val.toLowerCase() === expected[i - 1].toLowerCase()) {
      result.innerHTML = "<span style='color:green'>✅ Bravo, tout est accordé !</span>";
    } else {
      result.innerHTML = "<span style='color:red'>❌ Rappelle-toi : féminin ou masculin ? Et le S au pluriel ?</span>";
    }
  }
}

function checkExo3() {
  const val = document.getElementById("exo3-input").value.trim();
  const result = document.getElementById("result3");
  if (val.length >= 5) {
    result.innerHTML = "<span style='color:green'>👏 Bravo, ton objet a été ajouté au grimoire de Kylon !</span>";
  } else {
    result.innerHTML = "<span style='color:red'>🧐 Essaye d'imaginer un vrai objet avec au moins 2 mots bien accordés !</span>";
  }
}

function checkBonus() {
  const val = document.getElementById("exo4-input").value.trim().toLowerCase();
  const validGroups = [
    "une jeune fille",
    "des éléphants blancs",
    "un marchand souriant",
    "les mangues dorées"
  ];
  let count = 0;
  validGroups.forEach(g => {
    if (val.includes(g)) count++;
  });
  const result = document.getElementById("result4");
  if (count >= 4) {
    result.innerHTML = "<span style='color:green'>🌟 Bien joué détective ! Tu as trouvé tous les groupes.</span>";
  } else {
    result.innerHTML = `🔍 Tu en as trouvé <strong>${count}</strong> sur 4. Cherche encore !`;
  }
}