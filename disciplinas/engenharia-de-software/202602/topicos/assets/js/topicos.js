/** 
 * 1. Utilidades
 * 2. Barra de progresso de leitura
 * 3. Sumário (TOC) com destaque da seção ativa (scrollspy)
 * 4. Botão "copiar código"
 * 5. Marcar tópico como estudado (localStorage)
 * 6. Inicialização
 */
(function () {
  "use strict";

  /* ------------------------------------------------------------------ */
  /* 1. Utilidades                                                       */
  /* ------------------------------------------------------------------ */
  var prefersReducedMotion =
    window.matchMedia &&
    window.matchMedia("(prefers-reduced-motion: reduce)").matches;

  function qs(selector, scope) {
    return (scope || document).querySelector(selector);
  }

  function qsa(selector, scope) {
    return Array.prototype.slice.call(
      (scope || document).querySelectorAll(selector)
    );
  }

  /* ------------------------------------------------------------------ */
  /* 2. Barra de progresso de leitura                                    */
  /* ------------------------------------------------------------------ */
  function setupReadingProgress() {
    var fill = qs("[data-reading-progress-fill]");
    var article = qs("[data-article]");
    if (!fill || !article) return;

    function update() {
      var rect = article.getBoundingClientRect();
      var articleHeight = rect.height - window.innerHeight;
      var scrolled = -rect.top;
      var ratio = articleHeight > 0 ? scrolled / articleHeight : 0;
      ratio = Math.min(1, Math.max(0, ratio));
      fill.style.width = ratio * 100 + "%";
    }

    document.addEventListener("scroll", update, { passive: true });
    window.addEventListener("resize", update);
    update();
  }

  /* ------------------------------------------------------------------ */
  /* 3. Sumário (TOC) com destaque da seção ativa                        */
  /* ------------------------------------------------------------------ */
  function setupTocScrollspy() {
    var tocLinks = qsa("[data-toc] a[href^='#']");
    if (!tocLinks.length) return;

    var sections = tocLinks
      .map(function (link) {
        var id = link.getAttribute("href").slice(1);
        return document.getElementById(id);
      })
      .filter(Boolean);

    if (!sections.length || !("IntersectionObserver" in window)) return;

    var linkById = {};
    tocLinks.forEach(function (link) {
      linkById[link.getAttribute("href").slice(1)] = link;
    });

    function setActive(id) {
      tocLinks.forEach(function (link) {
        link.removeAttribute("aria-current");
      });
      var active = linkById[id];
      if (active) {
        active.setAttribute("aria-current", "true");
      }
    }

    var observer = new IntersectionObserver(
      function (entries) {
        var visible = entries
          .filter(function (entry) {
            return entry.isIntersecting;
          })
          .sort(function (a, b) {
            return a.boundingClientRect.top - b.boundingClientRect.top;
          });

        if (visible.length) {
          setActive(visible[0].target.id);
        }
      },
      {
        rootMargin: "-15% 0px -70% 0px",
        threshold: 0,
      }
    );

    sections.forEach(function (section) {
      observer.observe(section);
    });

    // Em telas pequenas, o sumário fica dentro de um <details>: ao
    // escolher um item, fecha o painel para liberar espaço de leitura.
    var tocDetails = qs("[data-toc-panel]");
    tocLinks.forEach(function (link) {
      link.addEventListener("click", function () {
        if (tocDetails && window.innerWidth < 992) {
          tocDetails.removeAttribute("open");
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 4. Botão "copiar código"                                            */
  /* ------------------------------------------------------------------ */
  function setupCopyButtons() {
    qsa("[data-copy-target]").forEach(function (button) {
      var targetSelector = button.getAttribute("data-copy-target");
      var codeEl = qs(targetSelector);
      if (!codeEl) return;

      button.addEventListener("click", function () {
        var text = codeEl.textContent;

        function markCopied() {
          var original = button.textContent;
          button.textContent = "Copiado!";
          button.setAttribute("data-copied", "true");
          window.setTimeout(function () {
            button.textContent = original;
            button.removeAttribute("data-copied");
          }, 1800);
        }

        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(text).then(markCopied, function () {
            // Falha silenciosa: usuário ainda pode selecionar o texto manualmente.
          });
        } else {
          var range = document.createRange();
          range.selectNodeContents(codeEl);
          var selection = window.getSelection();
          selection.removeAllRanges();
          selection.addRange(range);
          try {
            document.execCommand("copy");
            markCopied();
          } catch (err) {
            /* sem suporte a cópia: ignora silenciosamente */
          }
          selection.removeAllRanges();
        }
      });
    });
  }

  /* ------------------------------------------------------------------ */
  /* 5. Marcar tópico como estudado (localStorage)                       */
  /*    Usa a mesma convenção de dados que a home ("Estudado"),          */
  /*    marcar aqui também reflete lá.                                   */
  /* ------------------------------------------------------------------ */
  function setupStudyTracker() {
    var button = qs("[data-track-topic]");
    if (!button) return;

    var topicId = button.getAttribute("data-track-topic");
    var storageKey = "estudos:progresso:" + topicId;

    function readState() {
      try {
        return window.localStorage.getItem(storageKey) === "true";
      } catch (err) {
        return false;
      }
    }

    function render(isStudied) {
      button.setAttribute("aria-pressed", String(isStudied));
      button.textContent = isStudied ? "✓ Estudado" : "Marcar como estudado";
    }

    function writeState(isStudied) {
      try {
        window.localStorage.setItem(storageKey, String(isStudied));
      } catch (err) {
        /* localStorage indisponível (ex.: modo privado): apenas não persiste */
      }
    }

    render(readState());

    button.addEventListener("click", function () {
      var next = !readState();
      writeState(next);
      render(next);
    });
  }

  /* ------------------------------------------------------------------ */
  /* 6. Inicialização                                                     */
  /* ------------------------------------------------------------------ */
  function init() {
    setupReadingProgress();
    setupTocScrollspy();
    setupCopyButtons();
    setupStudyTracker();
  }

  if (document.readyState === "loading") {
    document.addEventListener("DOMContentLoaded", init);
  } else {
    init();
  }
})();
