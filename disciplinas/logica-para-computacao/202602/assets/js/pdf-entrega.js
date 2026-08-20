(() => {
  "use strict";

  const button = document.querySelector(".js-generate-pdf");
  const feedback = document.getElementById("pdf-feedback");
  const studentNameInput = document.getElementById("student-name");

  if (!button || !feedback || !studentNameInput) return;

  const cleanText = value => String(value || "").replace(/\s+/g, " ").trim();

  const selectedRadioLabel = name => {
    const selected = document.querySelector(`input[name="${name}"]:checked`);
    return selected ? cleanText(selected.parentElement.textContent) : "Não respondido";
  };

  const selectedCheckboxLabels = className => {
    const selected = [...document.querySelectorAll(`.${className}:checked`)]
      .map(item => cleanText(item.parentElement.textContent));

    return selected.length ? selected.join(" | ") : "Nenhuma alternativa marcada";
  };

  const selectValues = className => [...document.querySelectorAll(`.${className}`)].map((item, index) => {
    const response = item.value ? cleanText(item.options[item.selectedIndex].textContent) : "Não respondido";
    return `Item ${index + 1}: ${response}`;
  });

  const inputValues = className => [...document.querySelectorAll(`.${className}`)].map((item, index) => {
    return `Item ${index + 1}: ${cleanText(item.value) || "Não respondido"}`;
  });

  const loadJsPdf = () => new Promise((resolve, reject) => {
    if (window.jspdf) {
      resolve();
      return;
    }

    const script = document.createElement("script");
    script.src = "https://cdnjs.cloudflare.com/ajax/libs/jspdf/2.5.1/jspdf.umd.min.js";
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });

  const createPdf = studentName => {
    const { jsPDF } = window.jspdf;
    const pdf = new jsPDF({ unit: "mm", format: "a4" });
    const margin = 15;
    const pageWidth = 180;
    let y = 18;

    const write = (content, size = 10, bold = false) => {
      pdf.setFont("helvetica", bold ? "bold" : "normal");
      pdf.setFontSize(size);
      const lines = pdf.splitTextToSize(String(content), pageWidth);

      if (y + lines.length * 5 > 280) {
        pdf.addPage();
        y = 18;
      }

      pdf.text(lines, margin, y);
      y += lines.length * 5 + 3;
    };

    const section = title => {
      y += 3;
      write(title, 13, true);
    };

    pdf.setProperties({
      title: `Dossiê de Revisão - ${studentName}`,
      subject: "Operação Floricultura"
    });

    write("LÓGICA PARA COMPUTAÇÃO", 16, true);
    write("Dossiê de revisão: Operação Floricultura", 13, true);
    write(`Estudante: ${studentName}`, 11, true);
    write(`Data de geração: ${new Date().toLocaleString("pt-BR")}`);

    section("Atividade 1 — Proposições marcadas");
    write(selectedCheckboxLabels("js-q1"));

    section("Atividade 2 — Classificação");
    selectValues("js-q2").forEach(write);

    section("Atividade 3 — Símbolos");
    selectValues("js-q3").forEach(write);

    section("Atividade 4 — FBFs marcadas");
    write(selectedCheckboxLabels("js-q4"));

    section("Atividade 5 — Alternativas");
    write(`Pista 1: ${selectedRadioLabel("q5")}`);
    write(`Pista 2: ${selectedRadioLabel("q5b")}`);

    section("Atividade 6 — Traduções");
    inputValues("js-q6").forEach(write);

    section("Atividade 7 — Conclusão");
    write(selectedRadioLabel("q7"));

    section("Atividade 8 — Pista decisiva");
    write(selectedRadioLabel("q8"));

    section("Atividade 9 — Tabela F e M");
    write(`Valores de F ∧ M: ${inputValues("js-q9").join("; ")}`);

    section("Atividade 10 — Tabela A ou C");
    write(`Valores de A ∨ C: ${inputValues("js-q10").join("; ")}`);

    section("Atividade 11 — Tabela J implica F");
    write(`Valores de J → F: ${inputValues("js-q11").join("; ")}`);
    write(`Explicação: ${cleanText(document.getElementById("implication-explanation")?.value) || "Não respondido"}`);

    section("Atividade 12 — Missão final");
    [...document.querySelectorAll(".js-final-answer")].forEach((item, index) => {
      const label = item.closest("label");
      const question = label ? cleanText(label.childNodes[0].textContent) : `Resposta aberta ${index + 1}`;
      write(question, 10, true);
      write(cleanText(item.value) || "Não respondido");
    });

    const safeName = studentName
      .normalize("NFD")
      .replace(/[\u0300-\u036f]/g, "")
      .replace(/[^a-zA-Z0-9]+/g, "-")
      .replace(/^-|-$/g, "");

    pdf.save(`dossie-revisao-${safeName || "estudante"}.pdf`);
  };

  button.addEventListener("click", async () => {
    const studentName = cleanText(studentNameInput.value);
    feedback.classList.add("show");

    if (!studentName) {
      feedback.innerHTML = "<strong>Informe seu nome completo</strong> antes de gerar o PDF.";
      studentNameInput.focus();
      return;
    }

    button.disabled = true;
    button.textContent = "Preparando PDF...";
    feedback.textContent = "Organizando as respostas do dossiê...";

    try {
      await loadJsPdf();
      createPdf(studentName);
      feedback.innerHTML = "<strong>PDF gerado.</strong> Anexe o arquivo baixado e envie-o para <a href=\"mailto:wilcilenekowal@gmail.com\">wilcilenekowal@gmail.com</a>.";
    } catch (error) {
      feedback.innerHTML = "<strong>Não foi possível gerar o PDF.</strong> Verifique sua conexão com a internet e tente novamente.";
    } finally {
      button.disabled = false;
      button.textContent = "Gerar PDF para entrega";
    }
  });
})();