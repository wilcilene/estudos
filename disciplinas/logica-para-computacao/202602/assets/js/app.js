(function(){
  "use strict";

  var CATEGORIES = [
    { slug: "visao-geral", label: "Visão Geral", color: "brass" },
    { slug: "linguagem", label: "Linguagem", color: "teal" },
    { slug: "logica-proposicional", label: "Lógica Proposicional", color: "crime" },
    { slug: "semantica", label: "Semântica", color: "indigo" },
    { slug: "sistemas-dedutivos", label: "Sistemas Dedutivos", color: "brass" },
    { slug: "aspectos-computacionais", label: "Aspectos Computacionais", color: "teal" },
    { slug: "resolucao", label: "Princípio da Resolução", color: "crime" },
    { slug: "predicados", label: "Lógica de Predicados", color: "indigo" },
    { slug: "substituicao", label: "Substituição", color: "brass" },
    { slug: "revisao", label: "Revisão", color: "teal" }
  ];

  var CAT_MAP = {};
  CATEGORIES.forEach(function(c){ CAT_MAP[c.slug] = c; });

  /*
    Os 20 itens da ementa não possuem `review: true`.
    Atividades extras de revisão usam `review: true`: aparecem na grade,
    na busca e nos filtros, mas não entram no contador dos 20 tópicos.
  */
  var TOPICS = [
    { id:1, title:"Introdução à lógica e à investigação formal", tags:["visao-geral"],
      desc:"Panorama da disciplina: o que é raciocínio lógico e como ele estrutura a investigação de problemas.",
      href:"topico-01-introducao-a-logica.html" },
    { id:2, title:"Proposições e identificação de sentenças", tags:["logica-proposicional"],
      desc:"O que torna uma frase uma proposição lógica e como reconhecer sentenças declarativas válidas.",
      href:"topico-02-proposicoes.html" },
    { id:3, title:"Linguagem formal e símbolos lógicos", tags:["linguagem"],
      desc:"Alfabeto, símbolos e regras de formação da linguagem da lógica proposicional.",
      href:"topico-03-linguagem-formal.html" },
    { id:4, title:"Conectivos lógicos", tags:["logica-proposicional"],
      desc:"Negação, conjunção, disjunção, condicional e bicondicional: como combinar proposições simples.",
      href:"topico-04-conectivos-logicos.html" },
    { id:5, title:"Tabelas-verdade", tags:["semantica"],
      desc:"Construção sistemática de tabelas-verdade para avaliar o valor lógico de fórmulas.",
      href:"topico-05-tabelas-verdade.html" },
    { id:6, title:"Tautologia, contradição e contingência", tags:["semantica"],
      desc:"Classificação de fórmulas conforme os valores que assumem em todas as interpretações possíveis.",
      href:"topico-06-tautologia-contradicao.html" },
    { id:7, title:"Equivalência lógica e leis da lógica", tags:["semantica"],
      desc:"Leis clássicas, como as de De Morgan, para reescrever fórmulas mantendo o mesmo significado.",
      href:"topico-07-equivalencia-logica.html" },
    { id:8, title:"Consequência lógica e argumentação", tags:["semantica","sistemas-dedutivos"],
      desc:"Quando uma conclusão decorre necessariamente das premissas de um argumento.",
      href:"topico-08-consequencia-logica.html" },
    { id:9, title:"Sistemas dedutivos e regras de inferência", tags:["sistemas-dedutivos"],
      desc:"Modus ponens, modus tollens, silogismo disjuntivo e outras regras formais de inferência.",
      href:"topico-09-sistemas-dedutivos.html" },
    { id:10, title:"Demonstrações em lógica proposicional", tags:["sistemas-dedutivos"],
      desc:"Construção de provas formais, passo a passo, a partir de premissas e regras de inferência.",
      href:"topico-10-demonstracoes.html" },
    { id:11, title:"Representação computacional de fórmulas lógicas", tags:["aspectos-computacionais"],
      desc:"Como representar proposições e fórmulas como estruturas de dados dentro de um programa.",
      href:"topico-11-representacao-computacional.html" },
    { id:12, title:"Satisfatibilidade e busca de modelos", tags:["aspectos-computacionais"],
      desc:"O problema SAT: verificar se existe uma interpretação que torne uma fórmula verdadeira.",
      href:"topico-12-satisfatibilidade.html" },
    { id:13, title:"Forma normal conjuntiva", tags:["aspectos-computacionais","resolucao"],
      desc:"Conversão de fórmulas para FNC, etapa que prepara o terreno para os algoritmos de resolução.",
      href:"topico-13-forma-normal-conjuntiva.html" },
    { id:14, title:"Cláusulas e representação por conjuntos", tags:["resolucao"],
      desc:"Representação de fórmulas lógicas como conjuntos de cláusulas, base para a refutação.",
      href:"topico-14-clausulas.html" },
    { id:15, title:"Princípio da resolução proposicional", tags:["resolucao"],
      desc:"A regra de resolução: como combinar duas cláusulas para derivar uma nova conclusão.",
      href:"topico-15-principio-da-resolucao.html" },
    { id:16, title:"Algoritmo de resolução proposicional", tags:["resolucao","aspectos-computacionais"],
      desc:"Implementação de um procedimento automático que busca uma contradição por resolução.",
      href:"topico-16-algoritmo-de-resolucao.html" },
    { id:17, title:"Lógica de predicados: termos, predicados e quantificadores", tags:["predicados"],
      desc:"Extensão da lógica proposicional com predicados, variáveis e quantificadores universal e existencial.",
      href:"topico-17-logica-de-predicados.html" },
    { id:18, title:"Semântica da lógica de predicados", tags:["predicados"],
      desc:"Interpretação de fórmulas de predicados dentro de um domínio (universo) de discurso.",
      href:"topico-18-semantica-predicados.html" },
    { id:19, title:"Substituição e unificação", tags:["substituicao"],
      desc:"Técnicas de substituição de termos e unificação de expressões que contêm variáveis.",
      href:"topico-19-substituicao-unificacao.html" },
    { id:20, title:"Resolução em lógica de predicados e investigação completa", tags:["substituicao","resolucao"],
      desc:"Resolução combinada com unificação para fechar provas completas em lógica de primeira ordem.",
      href:"topico-20-resolucao-predicados.html" },

    { id:"revisao-01", review:true, title:"Operação Floricultura", tags:["revisao","logica-proposicional","linguagem","semantica"],
      desc:"Atividades de revisão sobre proposições, linguagem formal, fórmulas bem formadas, conectivos lógicos e tabelas-verdade.",
      href:"revisao-01-logica-proposicional.html" }
  ];

  var STORAGE_KEY = "logica-computacao:progresso";

  function loadDone(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(e){
      return {};
    }
  }

  function saveDone(done){
    try{
      localStorage.setItem(STORAGE_KEY, JSON.stringify(done));
    }catch(e){}
  }

  var done = loadDone();
  var activeFilter = "todos";
  var searchTerm = "";

  var grid = document.getElementById("grid");
  var filtersEl = document.getElementById("filters");
  var emptyState = document.getElementById("empty-state");
  var statusEl = document.getElementById("results-status");
  var searchInput = document.getElementById("search-input");
  var meterCount = document.getElementById("meter-count");
  var meterTotal = document.getElementById("meter-total");
  var meterFill = document.getElementById("meter-fill");
  var meterProgressbar = document.getElementById("meter-progressbar");
  var resetProgressButton = document.getElementById("reset-progress");

  var COURSE_TOPICS = TOPICS.filter(function(topic){ return !topic.review; });

  function escapeHtml(value){
    return String(value)
      .replace(/&/g, "&amp;")
      .replace(/</g, "&lt;")
      .replace(/>/g, "&gt;")
      .replace(/"/g, "&quot;")
      .replace(/'/g, "&#039;");
  }

  function countForCategory(slug){
    if(slug === "todos") return TOPICS.length;
    return TOPICS.filter(function(topic){ return topic.tags.indexOf(slug) !== -1; }).length;
  }

  function buildFilters(){
    filtersEl.innerHTML = "";

    var all = [{ slug:"todos", label:"Todos" }].concat(CATEGORIES);
    all.forEach(function(cat){
      var btn = document.createElement("button");
      btn.type = "button";
      btn.className = "chip";
      btn.setAttribute("aria-pressed", cat.slug === activeFilter ? "true" : "false");
      btn.dataset.slug = cat.slug;
      btn.innerHTML = escapeHtml(cat.label) + ' <span class="n">' + countForCategory(cat.slug) + '</span>';

      btn.addEventListener("click", function(){
        activeFilter = cat.slug;
        Array.prototype.forEach.call(filtersEl.children, function(chip){
          chip.setAttribute("aria-pressed", chip.dataset.slug === activeFilter ? "true" : "false");
        });
        render();
      });

      filtersEl.appendChild(btn);
    });
  }

  function matchesSearch(topic, term){
    if(!term) return true;

    var categoryLabels = topic.tags.map(function(slug){
      return CAT_MAP[slug] ? CAT_MAP[slug].label : slug;
    }).join(" ");

    var haystack = (topic.title + " " + topic.desc + " " + categoryLabels).toLowerCase();
    return haystack.indexOf(term) !== -1;
  }

  function tagChipHtml(slug){
    var cat = CAT_MAP[slug];
    if(!cat) return "";
    return '<span class="tag ' + escapeHtml(cat.color) + '">' + escapeHtml(cat.label) + '</span>';
  }

  function cardHtml(topic){
    var isDone = !!done[topic.id];
    var label = topic.review ? "Atividade de revisão" : "Caso Nº " + String(topic.id).padStart(2, "0");
    var ariaLabel = topic.review
      ? "Marcar atividade de revisão como concluída"
      : "Marcar tópico " + String(topic.id).padStart(2, "0") + " como concluído";

    return (
      '<article class="card' + (isDone ? " is-done" : "") + (topic.review ? " review-card" : "") + '" data-id="' + escapeHtml(topic.id) + '" data-tags="' + escapeHtml(topic.tags.join(" ")) + '">' +
        '<div class="card-top">' +
          '<span class="card-number mono">' + escapeHtml(label) + '</span>' +
          '<label class="done-toggle">' +
            '<input type="checkbox" data-id="' + escapeHtml(topic.id) + '" ' + (isDone ? "checked" : "") + ' aria-label="' + escapeHtml(ariaLabel) + '">' +
            'concluído' +
          '</label>' +
        '</div>' +
        '<h2><a href="' + escapeHtml(topic.href) + '">' + escapeHtml(topic.title) + '</a></h2>' +
        '<p class="desc">' + escapeHtml(topic.desc) + '</p>' +
        '<div class="tags">' + topic.tags.map(tagChipHtml).join("") + '</div>' +
        '<div class="card-cta">' +
          '<a class="open-link" href="' + escapeHtml(topic.href) + '">Abrir dossiê →</a>' +
          '<span class="stamp mono">RESOLVIDO</span>' +
        '</div>' +
      '</article>'
    );
  }

  function getVisibleTopics(){
    var term = searchTerm.trim().toLowerCase();

    return TOPICS.filter(function(topic){
      var matchesCategory = activeFilter === "todos" || topic.tags.indexOf(activeFilter) !== -1;
      return matchesCategory && matchesSearch(topic, term);
    });
  }

  function updateResultsStatus(visibleCount){
    var hasSearch = searchTerm.trim().length > 0;
    var isShowingAll = activeFilter === "todos" && !hasSearch;

    if(isShowingAll){
      statusEl.textContent = "Exibindo todos os 20 tópicos e atividades de revisão.";
      return;
    }

    if(activeFilter === "revisao" && !hasSearch){
      statusEl.textContent = "Exibindo " + visibleCount + " atividade" + (visibleCount === 1 ? "" : "s") + " de revisão.";
      return;
    }

    statusEl.textContent = "Exibindo " + visibleCount + " resultado" + (visibleCount === 1 ? "" : "s") + ".";
  }

  function attachCompletionListeners(){
    Array.prototype.forEach.call(grid.querySelectorAll('input[type="checkbox"]'), function(checkbox){
      checkbox.addEventListener("change", function(){
        var id = checkbox.dataset.id;

        if(checkbox.checked){
          done[id] = true;
        }else{
          delete done[id];
        }

        saveDone(done);
        checkbox.closest(".card").classList.toggle("is-done", checkbox.checked);
        updateMeter();
      });
    });
  }

  function render(){
    var visible = getVisibleTopics();

    grid.innerHTML = visible.map(cardHtml).join("");
    emptyState.classList.toggle("show", visible.length === 0);
    updateResultsStatus(visible.length);
    attachCompletionListeners();
  }

  function updateMeter(){
    var total = COURSE_TOPICS.length;
    var count = COURSE_TOPICS.filter(function(topic){ return !!done[topic.id]; }).length;
    var pct = total ? Math.round((count / total) * 100) : 0;

    meterCount.textContent = count;
    meterTotal.textContent = total;
    meterFill.style.width = pct + "%";
    meterProgressbar.setAttribute("aria-valuenow", count);
    meterProgressbar.setAttribute("aria-valuemax", total);
  }

  searchInput.addEventListener("input", function(){
    searchTerm = searchInput.value;
    render();
  });

  resetProgressButton.addEventListener("click", function(){
    if(confirm("Reiniciar o progresso salvo dos 20 tópicos neste navegador?")){
      done = {};
      saveDone(done);
      render();
      updateMeter();
    }
  });

  buildFilters();
  render();
  updateMeter();
})();