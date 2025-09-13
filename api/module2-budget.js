// module2-budget.js

// --- EXERCICE 1 ---
function checkMenuBudget() {
  const selected = document.querySelectorAll('input[name^="plat"]:checked');
  let total = 0;
  selected.forEach(item => total += parseInt(item.value));

  const feedback = document.getElementById("feedback-menu");
  feedback.innerText = total <= 120
    ? "✅ C’est parfait, tu restes dans ton budget."
    : "❌ Attention, tu dépasses ! Revois tes choix.";
  document.getElementById("total-menu").innerText = `Total: ${total} bahts`;
}

// --- EXERCICE 2 ---
function checkDayPlan() {
  const selected = document.querySelectorAll('input[name^="plan"]:checked');
  let total = 0;
  selected.forEach(item => total += parseInt(item.value));

  const feedback = document.getElementById("feedback-plan");
  const remaining = 300 - total;
  feedback.innerText = (remaining >= 30)
    ? "🟢 Tu es bon ! Tu peux vivre cette journée avec équilibre 🌿"
    : "🔴 Tu dépenses trop : essaie d’enlever une activité ou choisis un transport plus économique.";
  document.getElementById("total-plan").innerText = `Total: ${total} bahts | Reste: ${remaining} bahts`;
}

// --- ENVOI DES RÉPONSES ---
async function sendModule2Answers() {
  const data = {
    module: "module2",
    menuChoices: [...document.querySelectorAll('input[name^="plat"]:checked')].map(e => e.id),
    dayPlan: [...document.querySelectorAll('input[name^="plan"]:checked')].map(e => e.id),
    reflection1: document.getElementById("reflection1").value,
    reflection2: document.getElementById("reflection2").value,
    reflection3: document.getElementById("reflection3").value,
    bonus: document.getElementById("bonusReflection").value,
    timestamp: new Date().toISOString()
  };

  try {
    const res = await fetch("/api/send-result.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(data)
    });
    const json = await res.json();
    alert(json.message || "Données envoyées avec succès !");
  } catch (e) {
    alert("Erreur lors de l'envoi : " + e.message);
  }
}