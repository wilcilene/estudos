/**
 * Banco de Dados — progresso do semestre e filtro de tópicos.
 * Vanilla JS, sem dependências. A página funciona sem JavaScript
 * (todos os tópicos ficam visíveis); este script adiciona o
 * progresso dinâmico e os filtros interativos.
 *
 * Para atualizar o andamento da disciplina: edite o atributo
 * data-status de cada <a class="topic-card"> no index.html para
 * "done", "current" ou "upcoming". Tudo abaixo é recalculado
 * automaticamente a partir desses atributos.
 */
(function () {
  'use strict';

  var STATUS_LABELS = { done: 'Concluído', current: 'Atual', upcoming: 'A seguir' };
  var RING_CIRCUMFERENCE = 326.7; // 2 * PI * r(52), já usado no viewBox do SVG

  var cards = Array.prototype.slice.call(document.querySelectorAll('.topic-card'));

  // ---------- Badges de status + progresso ----------
  function updateProgress() {
    var doneCount = 0;
    var currentCard = null;

    cards.forEach(function (card) {
      var status = card.dataset.status || 'upcoming';
      var badge = card.querySelector('.status-badge');

      card.classList.remove('is-done', 'is-current', 'is-upcoming');
      card.classList.add('is-' + status);
      if (badge) badge.textContent = STATUS_LABELS[status] || '';

      if (status === 'done') doneCount += 1;
      if (status === 'current' && !currentCard) currentCard = card;
    });

    var total = cards.length;
    var weighted = doneCount + (currentCard ? 0.5 : 0);
    var percent = total ? Math.round((weighted / total) * 100) : 0;
    percent = Math.min(100, Math.max(0, percent));

    var ringFill = document.getElementById('progress-ring-fill');
    var percentLabel = document.getElementById('progress-percent');
    var countLabel = document.getElementById('progress-count');
    var currentWrap = document.getElementById('progress-current');
    var currentName = document.getElementById('progress-current-name');

    if (ringFill) {
      var offset = RING_CIRCUMFERENCE - (percent / 100) * RING_CIRCUMFERENCE;
      ringFill.style.strokeDashoffset = String(offset);
    }
    if (percentLabel) percentLabel.textContent = percent + '%';
    if (countLabel) countLabel.textContent = doneCount + ' de ' + total + ' tópicos concluídos';

    if (currentCard && currentWrap && currentName) {
      var title = currentCard.querySelector('h3');
      currentName.textContent = title ? title.textContent : 'Em andamento';
      currentWrap.hidden = false;
    } else if (currentWrap) {
      currentWrap.hidden = true;
    }
  }

  // ---------- Filtro por assunto + busca ----------
  var searchInput = document.getElementById('topic-search');
  var pillsWrap = document.getElementById('filter-pills');
  var resultCount = document.getElementById('result-count');
  var emptyState = document.getElementById('empty-state');
  var items = Array.prototype.slice.call(document.querySelectorAll('.topic-item'));
  var activeFilter = 'todos';

  function applyFilters() {
    var query = (searchInput && searchInput.value || '').trim().toLowerCase();
    var visibleCount = 0;

    items.forEach(function (item) {
      var matchesCategory = activeFilter === 'todos' || item.dataset.category === activeFilter;
      var text = item.textContent.toLowerCase();
      var matchesQuery = query === '' || text.indexOf(query) !== -1;
      var visible = matchesCategory && matchesQuery;

      item.hidden = !visible;
      if (visible) visibleCount += 1;
    });

    if (resultCount) {
      resultCount.textContent = visibleCount + (visibleCount === 1 ? ' tópico' : ' tópicos');
    }
    if (emptyState) emptyState.hidden = visibleCount !== 0;
  }

  if (pillsWrap) {
    pillsWrap.addEventListener('click', function (event) {
      var button = event.target.closest('.pill');
      if (!button) return;

      pillsWrap.querySelectorAll('.pill').forEach(function (pill) {
        pill.classList.remove('is-active');
        pill.setAttribute('aria-pressed', 'false');
      });
      button.classList.add('is-active');
      button.setAttribute('aria-pressed', 'true');

      activeFilter = button.dataset.filter;
      applyFilters();
    });
  }

  if (searchInput) {
    searchInput.addEventListener('input', applyFilters);
  }

  updateProgress();
  applyFilters();
})();
