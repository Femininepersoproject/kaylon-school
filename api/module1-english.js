// module1-english.js

document.addEventListener("DOMContentLoaded", () => {
  const submitBtn = document.getElementById("submit-english");
  const feedbackDiv = document.getElementById("feedback-english");

  if (!submitBtn) return;

  submitBtn.addEventListener("click", () => {
    const answers = {
      verbLove: document.getElementById("verb-love").value.trim().toLowerCase(),
      sentence1: document.getElementById("sentence1").value.trim(),
      sentence2: document.getElementById("sentence2").value.trim(),
      favHobby: document.getElementById("fav-hobby").value.trim(),
    };

    let score = 0;
    let feedback = [];

    // Vérification du verbe
    if (answers.verbLove === "love") {
      score += 1;
      feedback.push("✅ Bonne réponse pour le verbe !");
    } else {
      feedback.push("❌ Le verbe à utiliser ici est 'love'.");
    }

    // Vérification phrases 1 & 2 (présence de sujet + verbe)
    const sentenceRegex = /^[A-Z].*\.$/;
    if (sentenceRegex.test(answers.sentence1)) {
      score += 1;
      feedback.push("✅ Phrase 1 correcte.");
    } else {
      feedback.push("❌ Ta première phrase doit commencer par une majuscule et finir par un point.");
    }

    if (sentenceRegex.test(answers.sentence2)) {
      score += 1;
      feedback.push("✅ Phrase 2 correcte.");
    } else {
      feedback.push("❌ Ta deuxième phrase doit aussi respecter la ponctuation.");
    }

    // Vérification hobby non vide
    if (answers.favHobby.length > 2) {
      score += 1;
      feedback.push("✅ Super ! Tu as mentionné ton hobby préféré.");
    } else {
      feedback.push("❌ N'oublie pas de décrire ton hobby favori.");
    }

    // Afficher le feedback
    feedbackDiv.innerHTML = `
      <p><strong>Résultat :</strong> ${score}/4</p>
      <ul>${feedback.map(f => `<li>${f}</li>`).join('')}</ul>
    `;

    // Envoi à l'API (simulé ici)
    fetch("/send-result.js", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        module: "english-1",
        activity: "talk-about-passions",
        result: score,
        answers,
        timestamp: new Date().toISOString(),
      })
    }).then(res => {
      if (res.ok) {
        console.log("Résultat envoyé avec succès.");
      } else {
        console.warn("Erreur lors de l'envoi du résultat.");
      }
    });
  });
});