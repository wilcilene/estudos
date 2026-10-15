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
    { slug: "revisao", label: "Revisão", color: "teal" },
    { slug: "apresentacoes", label: "Apresentações", color: "crime" },
    { slug: "atividades", label: "Atividades em dupla", color: "indigo" }
  ];

  var CAT_MAP = {};
  CATEGORIES.forEach(function(c){ CAT_MAP[c.slug] = c; });

  /*
    Os 20 itens da ementa não possuem `review: true`.
    Atividades extras de revisão usam `review: true`: aparecem na grade,
    na busca e nos filtros, mas não entram no contador dos 20 tópicos.
    O campo opcional `label` troca o rótulo do card (ex.: "Apresentação 1").
  */
  var TOPICS = [
    { id:1, title:"Introdução à lógica e à investigação formal", tags:["visao-geral"],
      desc:"Introdução à Lógica para Computação: raciocínio dedutivo, validade, o papel da lógica na computação e como o jogo Detetive guia a disciplina.",
      href:"topico-01-introducao-a-logica.html" },
    { id:2, title:"Proposições e identificação de sentenças", tags:["logica-proposicional"],
      desc:"Proposições lógicas: sentenças declarativas, valor-verdade, princípios clássicos, proposições atômicas e compostas e o que não é proposição.",
      href:"topico-02-proposicoes.html" },
    { id:3, title:"Linguagem formal e símbolos lógicos", tags:["linguagem"],
      desc:"Linguagem formal da lógica proposicional: alfabeto, fórmulas bem formadas, subfórmulas, conectivo principal, precedência e indução estrutural.",
      href:"topico-03-linguagem-formal.html" },
    { id:4, title:"Conectivos lógicos", tags:["logica-proposicional"],
      desc:"Negação, conjunção, disjunção, condicional e bicondicional: significado, tabelas, traduções do português, ou exclusivo e conectivos em programação.",
      href:"topico-04-conectivos-logicos.html" },
    { id:5, title:"Tabelas-verdade", tags:["semantica"],
      desc:"Construção sistemática de tabelas-verdade: número de linhas, ordem das valorações, colunas intermediárias, crescimento exponencial e atalhos.",
      href:"topico-05-tabelas-verdade.html" },
    { id:6, title:"Tautologia, contradição e contingência", tags:["semantica"],
      desc:"Classificação de fórmulas em tautologia, contradição e contingência, relação com satisfatibilidade e o método de prova por tentativa de falsificação.",
      href:"topico-06-tautologia-contradicao.html" },
    { id:7, title:"Equivalência lógica e leis da lógica", tags:["semantica"],
      desc:"Equivalência lógica, leis clássicas (De Morgan, distributividade, absorção, contrapositiva, exportação) e simplificação algébrica de fórmulas.",
      href:"topico-07-equivalencia-logica.html" },
    { id:8, title:"Consequência lógica e argumentação", tags:["semantica","sistemas-dedutivos"],
      desc:"Consequência lógica e validade de argumentos: definição semântica, teste por tabela-verdade, relação com insatisfatibilidade e falácias formais.",
      href:"topico-08-consequencia-logica.html" },
    { id:9, title:"Sistemas dedutivos e regras de inferência", tags:["sistemas-dedutivos"],
      desc:"Sistemas dedutivos e regras de inferência: modus ponens, modus tollens, silogismos, dilema construtivo, correção e completude.",
      href:"topico-09-sistemas-dedutivos.html" },
    { id:10, title:"Demonstrações em lógica proposicional", tags:["sistemas-dedutivos"],
      desc:"Como escrever demonstrações formais: prova direta, prova condicional, redução ao absurdo, prova por casos e dedução natural.",
      href:"topico-10-demonstracoes.html" },
    { id:11, title:"Representação computacional de fórmulas lógicas", tags:["aspectos-computacionais"],
      desc:"Representação de fórmulas em programas: árvore sintática, gramática, parser, avaliação recursiva, DAG e valorações como bits.",
      href:"topico-11-representacao-computacional.html" },
    { id:12, title:"Satisfatibilidade e busca de modelos", tags:["aspectos-computacionais"],
      desc:"O problema SAT: modelos, força bruta, NP-completude, o algoritmo DPLL e a modelagem do jogo Detetive como fórmula satisfatível.",
      href:"topico-12-satisfatibilidade.html" },
    { id:13, title:"Forma normal conjuntiva", tags:["aspectos-computacionais","resolucao"],
      desc:"Forma normal conjuntiva (FNC) e disjuntiva (FND): algoritmo de conversão, construção pela tabela-verdade, explosão exponencial e transformação de Tseitin.",
      href:"topico-13-forma-normal-conjuntiva.html" },
    { id:14, title:"Cláusulas e representação por conjuntos", tags:["resolucao"],
      desc:"Cláusulas como conjuntos de literais: cláusula vazia, cláusula unitária, cláusulas de Horn, tautologias, subsunção e o formato DIMACS.",
      href:"topico-14-clausulas.html" },
    { id:15, title:"Princípio da resolução proposicional", tags:["resolucao"],
      desc:"A regra de resolução: literais complementares, resolvente, correção da regra, refutação e como a resolução generaliza modus ponens e modus tollens.",
      href:"topico-15-principio-da-resolucao.html" },
    { id:16, title:"Algoritmo de resolução proposicional", tags:["resolucao","aspectos-computacionais"],
      desc:"Algoritmo de resolução por saturação: pseudocódigo, implementação, terminação, complexidade e estratégias de refinamento.",
      href:"topico-16-algoritmo-de-resolucao.html" },
    { id:17, title:"Lógica de predicados: termos, predicados e quantificadores", tags:["predicados"],
      desc:"Lógica de primeira ordem: constantes, variáveis, funções, predicados, quantificadores, escopo, variáveis livres e ligadas e tradução do português.",
      href:"topico-17-logica-de-predicados.html" },
    { id:18, title:"Semântica da lógica de predicados", tags:["predicados"],
      desc:"Semântica da lógica de primeira ordem: estruturas, domínio, interpretação, atribuição de variáveis, avaliação de quantificadores e contramodelos.",
      href:"topico-18-semantica-predicados.html" },
    { id:19, title:"Substituição e unificação", tags:["substituicao"],
      desc:"Substituição de variáveis por termos, composição, unificador mais geral e o algoritmo de unificação de Robinson com verificação de ocorrência.",
      href:"topico-19-substituicao-unificacao.html" },
    { id:20, title:"Resolução em lógica de predicados e investigação completa", tags:["substituicao","resolucao"],
      desc:"Resolução em lógica de primeira ordem: forma clausal, skolemização, resolução com unificação, fatoração, completude e a ligação com Prolog.",
      href:"topico-20-resolucao-predicados.html" },

    { id:"revisao-01", review:true, title:"Operação Floricultura", tags:["revisao","logica-proposicional","linguagem","semantica"],
      desc:"Atividades de revisão sobre proposições, linguagem formal, fórmulas bem formadas, conectivos lógicos e tabelas-verdade.",
      href:"revisao-01-logica-proposicional.html" },

    { id:"revisao-02", review:true, title:"Operação Biblioteca: Revisão Integrada I", tags:["revisao","logica-proposicional","semantica","sistemas-dedutivos"],
      desc:"Lista dissertativa dos Casos 01 a 07: formalização, FBFs, árvores sintáticas, tabelas-verdade, classificação de fórmulas, equivalências, regras de inferência e uma prova completa. Entrega em PDF pelo SIGA.",
      href:"revisao-02-logica-computacao.html" },

    { id:"atividade-clausula-vazia", review:true, label:"Atividade em duplas", title:"Detetive: O Caso da Cláusula Vazia", tags:["atividades","resolucao"],
      desc:"Investigação em duplas sobre o sumiço da gata Estrela: transformar pistas em cláusulas, aplicar a regra de resolução e encontrar a cláusula vazia. Traz exemplo resolvido, dossiês, rubrica, modelo de registro e um simulador de resolução.",
      href:"atividade-clausula-vazia.html" },

    { id:"apresentacao-01", review:true, label:"Apresentação 1", title:"Aspectos computacionais da lógica: pesquisa, programação e apresentação", tags:["apresentacoes","aspectos-computacionais"],
      desc:"Atividade em grupo sobre representação computacional de fórmulas, satisfatibilidade e busca de modelos e forma normal conjuntiva. Traz roteiro de pesquisa em 3 aulas, desafio de programação, critérios de avaliação, glossário e um exemplo de entrega com jogo de vôlei.",
      href:"apresentacao1-index.html" }
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
    var label = topic.label || (topic.review ? "Atividade de revisão" : "Caso Nº " + String(topic.id).padStart(2, "0"));
    var ariaLabel = topic.label
      ? "Marcar " + topic.label + " como concluída"
      : topic.review
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
      statusEl.textContent = "Exibindo os " + COURSE_TOPICS.length + " casos e mais " + (TOPICS.length - COURSE_TOPICS.length) + " atividades extras (revisões, apresentações e atividades em dupla).";
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
    if(confirm("Reiniciar todo o progresso salvo neste navegador (casos, revisões, apresentações e atividades)?")){
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