/* ==========================================================================
   topicos.js — comportamentos compartilhados das páginas de tópico.
   Tudo aqui é melhoria progressiva: sem JavaScript, o conteúdo continua
   completo e navegável.
     1. Barra de progresso de leitura
     2. Destaque da seção atual no sumário
     3. Sumário recolhido em telas pequenas
     4. Botão "Copiar" nos blocos de código
     5. "Marcar como estudado", sincronizado com o índice do tópico
     6. Botão "Ampliar" para ver diagramas grandes em tela cheia
   ========================================================================== */
(function () {
  'use strict';

  var reduzMovimento = window.matchMedia && window.matchMedia('(prefers-reduced-motion: reduce)').matches;

  /* 1. Barra de progresso de leitura */
  var barra = document.createElement('div');
  barra.className = 'reading-progress';
  barra.setAttribute('aria-hidden', 'true');
  document.body.appendChild(barra);
  var agendado = false;
  function atualizaBarra() {
    var h = document.documentElement;
    var total = h.scrollHeight - h.clientHeight;
    barra.style.width = (total > 0 ? (h.scrollTop / total) * 100 : 0) + '%';
    agendado = false;
  }
  document.addEventListener('scroll', function () {
    if (!agendado) { agendado = true; window.requestAnimationFrame(atualizaBarra); }
  }, { passive: true });
  atualizaBarra();

  /* 2. Destaque da seção atual no sumário */
  var links = Array.prototype.slice.call(document.querySelectorAll('.topic-toc nav a[href^="#"]'));
  if (links.length && 'IntersectionObserver' in window) {
    var porId = {};
    links.forEach(function (a) { porId[a.getAttribute('href').slice(1)] = a; });
    var observador = new IntersectionObserver(function (entradas) {
      entradas.forEach(function (e) {
        if (!e.isIntersecting) return;
        var link = porId[e.target.id];
        if (!link) return;
        links.forEach(function (a) { a.classList.remove('is-active'); a.removeAttribute('aria-current'); });
        link.classList.add('is-active');
        link.setAttribute('aria-current', 'location');
      });
    }, { rootMargin: '-20% 0px -70% 0px' });
    Object.keys(porId).forEach(function (id) {
      var alvo = document.getElementById(id);
      if (alvo) observador.observe(alvo);
    });
  }

  /* 3. Sumário recolhido em telas pequenas (fica aberto no desktop) */
  var sumario = document.querySelector('.topic-toc__summary');
  if (sumario && window.matchMedia('(max-width: 900px)').matches) {
    sumario.removeAttribute('open');
    sumario.querySelectorAll('a').forEach(function (a) {
      a.addEventListener('click', function () { sumario.removeAttribute('open'); });
    });
  }

  /* 4. Botão "Copiar" nos blocos de código */
  document.querySelectorAll('.codeblock').forEach(function (bloco) {
    var bar = bloco.querySelector('.codeblock__bar');
    var pre = bloco.querySelector('pre');
    if (!bar || !pre || !navigator.clipboard) return;
    var botao = document.createElement('button');
    botao.type = 'button';
    botao.className = 'codeblock__copy';
    botao.textContent = 'Copiar';
    botao.addEventListener('click', function () {
      navigator.clipboard.writeText(pre.innerText).then(function () {
        botao.textContent = 'Copiado';
        setTimeout(function () { botao.textContent = 'Copiar'; }, 1800);
      });
    });
    bar.appendChild(botao);
  });

  /* 5. "Marcar como estudado" — usa a mesma chave do índice do tópico */
  /* v2: 7 assuntos. Migra o progresso salvo na versão de 6 assuntos,
     abrindo espaço para "Diagrama de casos de uso" (posição 3). */
  var CHAVE = 'es-analise-projeto-progresso-v2';
  var TOTAL = 7;
  function ler() {
    try {
      var v2 = localStorage.getItem(CHAVE);
      if (v2) { return JSON.parse(v2); }
      var antigo = JSON.parse(localStorage.getItem('es-analise-projeto-progresso') || '[]');
      if (antigo.length) { antigo.splice(2, 0, false); }
      return antigo;
    } catch (e) { return []; }
  }
  function gravar(lista) {
    try { localStorage.setItem(CHAVE, JSON.stringify(lista)); } catch (e) { /* modo privado */ }
  }
  document.querySelectorAll('[data-progresso-indice]').forEach(function (caixa) {
    var i = parseInt(caixa.getAttribute('data-progresso-indice'), 10);
    var estado = ler();
    caixa.checked = !!estado[i];
    caixa.addEventListener('change', function () {
      var atual = ler();
      for (var k = 0; k < TOTAL; k++) { atual[k] = !!atual[k]; }
      atual[i] = caixa.checked;
      gravar(atual);
    });
  });

  /* 6. Ampliar diagramas grandes */
  var figuras = document.querySelectorAll('.figura--larga, .figura--media');
  if (figuras.length && typeof HTMLDialogElement === 'function') {
    var dialogo = document.createElement('dialog');
    dialogo.className = 'zoom';
    dialogo.setAttribute('aria-label', 'Diagrama ampliado');
    dialogo.innerHTML = '<div class="zoom__topo"><span class="zoom__titulo"></span>' +
      '<button type="button" class="zoom__fechar">Fechar</button></div><div class="zoom__area"></div>';
    document.body.appendChild(dialogo);
    var area = dialogo.querySelector('.zoom__area');
    dialogo.querySelector('.zoom__fechar').addEventListener('click', function () { dialogo.close(); });
    dialogo.addEventListener('click', function (e) { if (e.target === dialogo) dialogo.close(); });
    dialogo.addEventListener('close', function () { area.innerHTML = ''; });
    figuras.forEach(function (fig) {
      var svg = fig.querySelector('svg');
      if (!svg) return;
      var titulo = svg.querySelector('title');
      var botao = document.createElement('button');
      botao.type = 'button';
      botao.className = 'figura__ampliar';
      botao.textContent = 'Ampliar diagrama';
      botao.addEventListener('click', function () {
        var copia = svg.cloneNode(true);
        copia.removeAttribute('aria-labelledby');
        copia.setAttribute('aria-hidden', 'true');
        Array.prototype.forEach.call(copia.querySelectorAll('[id]'), function (el) { el.removeAttribute('id'); });
        area.innerHTML = '';
        area.appendChild(copia);
        dialogo.querySelector('.zoom__titulo').textContent = titulo ? titulo.textContent : 'Diagrama';
        dialogo.showModal();
      });
      var legenda = fig.querySelector('figcaption');
      fig.insertBefore(botao, legenda || null);
    });
  }

  if (reduzMovimento) document.documentElement.style.scrollBehavior = 'auto';
})();
