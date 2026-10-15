(() => {
  "use strict";

  const normalize = value => String(value || "").trim().replace(/\s+/g, "");

  /* Aceita a notação simbólica e a digitação pelo teclado:
     ~ ou ! (não), & ou && (e), | ou || ou v (ou), -> (implica), <-> (bicondicional).
     Também ignora espaços e um par de parênteses externos. */
  const normalizeFormula = value => {
    let f = String(value || "")
      .replace(/(^|[\s()])v(?=[\s()]|$)/g, "$1∨")
      .replace(/\s+/g, "")
      .replace(/<->|<=>/g, "↔")
      .replace(/->|=>/g, "→")
      .replace(/&&|&|\^/g, "∧")
      .replace(/\|\||\|/g, "∨")
      .replace(/[~!]/g, "¬")
      .toUpperCase()
      .replace(/¬¬/g, "");

    const wrapsAll = text => {
      if (!text.startsWith("(") || !text.endsWith(")")) return false;
      let depth = 0;
      for (let i = 0; i < text.length; i += 1) {
        if (text[i] === "(") depth += 1;
        if (text[i] === ")") depth -= 1;
        if (depth === 0 && i < text.length - 1) return false;
      }
      return true;
    };

    while (wrapsAll(f)) f = f.slice(1, -1);
    return f;
  };

  const showFeedback = (exerciseId, correct, total) => {
    const feedback = document.getElementById(`feedback-${exerciseId}`);
    if (!feedback) return;

    const message = correct === total
      ? "Excelente trabalho, detetive!"
      : "Revise as pistas e tente novamente.";

    feedback.classList.add("show");
    feedback.innerHTML = `<strong>Resultado:</strong> ${correct}/${total} item(ns) correto(s). ${message}`;
  };

  const evaluateCheckboxes = exerciseId => {
    let correct = 0;
    const items = document.querySelectorAll(`.js-${exerciseId}`);

    items.forEach(item => {
      const expected = item.dataset.correct === "true";
      if (item.checked === expected) correct += 1;
    });

    return { correct, total: items.length };
  };

  const evaluateSelects = exerciseId => {
    let correct = 0;
    const items = document.querySelectorAll(`.js-${exerciseId}`);

    items.forEach(item => {
      if (item.value === item.dataset.answer) correct += 1;
    });

    return { correct, total: items.length };
  };

  const evaluateRadioGroups = exerciseId => {
    const groups = exerciseId === "q5" ? ["q5", "q5b"] : [exerciseId];
    let correct = 0;

    groups.forEach(group => {
      const selected = document.querySelector(`input[name="${group}"]:checked`);
      if (selected?.value === "correct") correct += 1;
    });

    return { correct, total: groups.length };
  };

  const evaluateTextAnswers = () => {
    let correct = 0;
    const items = document.querySelectorAll(".js-q6");

    items.forEach(item => {
      const accepted = item.dataset.textAnswer.split("|").map(normalizeFormula);
      if (accepted.includes(normalizeFormula(item.value))) correct += 1;
    });

    return { correct, total: items.length };
  };

  const evaluateTruthTable = exerciseId => {
    let correct = 0;
    const items = document.querySelectorAll(`.js-${exerciseId}`);

    items.forEach(item => {
      if (normalize(item.value) === item.dataset.answer) correct += 1;
    });

    return { correct, total: items.length };
  };

  const evaluateExercise = exerciseId => {
    if (["q1", "q4"].includes(exerciseId)) return evaluateCheckboxes(exerciseId);
    if (["q2", "q3"].includes(exerciseId)) return evaluateSelects(exerciseId);
    if (["q5", "q7", "q8"].includes(exerciseId)) return evaluateRadioGroups(exerciseId);
    if (exerciseId === "q6") return evaluateTextAnswers();
    if (["q9", "q10", "q11"].includes(exerciseId)) return evaluateTruthTable(exerciseId);
    return { correct: 0, total: 0 };
  };

  document.querySelectorAll(".js-check").forEach(button => {
    button.addEventListener("click", () => {
      const exerciseId = button.dataset.exerciseId;
      const result = evaluateExercise(exerciseId);
      showFeedback(exerciseId, result.correct, result.total);
    });
  });

  document.querySelectorAll(".js-toggle-answer").forEach(button => {
    button.addEventListener("click", () => {
      const target = document.getElementById(button.dataset.target);
      if (!target) return;

      const isOpen = target.classList.toggle("open");
      button.setAttribute("aria-expanded", String(isOpen));
    });
  });
})();