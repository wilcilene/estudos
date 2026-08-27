(function () {
  'use strict';

  function escapeHtml(value) {
    return String(value)
      .replace(/&/g, '&amp;')
      .replace(/</g, '&lt;')
      .replace(/>/g, '&gt;')
      .replace(/"/g, '&quot;')
      .replace(/'/g, '&#039;');
  }

  function getCheckedValues(selector) {
    return Array.from(document.querySelectorAll(selector))
      .filter(function (element) {
        return element.checked;
      })
      .map(function (element) {
        return element.value;
      });
  }

  function showSetResult(title, expression, items) {
    var result = document.getElementById('ar-conjuntos-resultado');
    var itemsText = items.length
      ? items.map(escapeHtml).join(', ')
      : '∅ (conjunto vazio)';

    result.innerHTML =
      '<h4>' + escapeHtml(title) + '</h4>' +
      '<p class="result-expression">' + escapeHtml(expression) + '</p>' +
      '<p><strong>{' + itemsText + '}</strong> — ' +
      items.length + ' elemento(s)</p>';
  }

  function setupSetOperators() {
    var buttons = document.querySelectorAll('[data-op]');

    buttons.forEach(function (button) {
      button.addEventListener('click', function () {
        var banco = getCheckedValues('.ar-banco');
        var logica = getCheckedValues('.ar-logica');
        var operation = button.getAttribute('data-op');
        var result;
        var title;
        var expression;

        buttons.forEach(function (otherButton) {
          otherButton.classList.remove('is-active');
          otherButton.setAttribute('aria-pressed', 'false');
        });

        button.classList.add('is-active');
        button.setAttribute('aria-pressed', 'true');

        if (operation === 'uniao') {
          result = Array.from(new Set(banco.concat(logica)));
          title = 'União';
          expression = 'BancoDeDados ∪ LogicaComputacao';
        } else if (operation === 'intersecao') {
          result = banco.filter(function (name) {
            return logica.indexOf(name) !== -1;
          });
          title = 'Interseção';
          expression = 'BancoDeDados ∩ LogicaComputacao';
        } else if (operation === 'diferenca-banco-logica') {
          result = banco.filter(function (name) {
            return logica.indexOf(name) === -1;
          });
          title = 'Diferença';
          expression = 'BancoDeDados − LogicaComputacao';
        } else {
          result = logica.filter(function (name) {
            return banco.indexOf(name) === -1;
          });
          title = 'Diferença';
          expression = 'LogicaComputacao − BancoDeDados';
        }

        showSetResult(title, expression, result);
      });
    });
  }

  var students = [
    ['BD01', 'Alessandro', 'Banco de Dados'],
    ['BD02', 'Ana', 'Banco de Dados'],
    ['BD03', 'André', 'Banco de Dados'],
    ['BD04', 'Felipe', 'Banco de Dados'],
    ['BD05', 'Gabriel', 'Banco de Dados'],
    ['BD06', 'Gabriele', 'Banco de Dados'],
    ['BD07', 'Isabel', 'Banco de Dados'],
    ['BD08', 'João', 'Banco de Dados'],
    ['BD09', 'Larissa', 'Banco de Dados'],
    ['BD10', 'Matheus', 'Banco de Dados'],
    ['BD11', 'Rômulo', 'Banco de Dados'],
    ['BD12', 'Suzana', 'Banco de Dados'],
    ['BD13', 'Vinicius', 'Banco de Dados'],
    ['BD14', 'William', 'Banco de Dados'],
    ['BD15', 'Yan', 'Banco de Dados'],
    ['BD16', 'Yuri', 'Banco de Dados'],
    ['LC01', 'Alessandro', 'Lógica para Computação'],
    ['LC02', 'Elmar', 'Lógica para Computação'],
    ['LC03', 'Felipe', 'Lógica para Computação'],
    ['LC04', 'Isabel', 'Lógica para Computação'],
    ['LC05', 'João', 'Lógica para Computação'],
    ['LC06', 'Larissa', 'Lógica para Computação'],
    ['LC07', 'Matheus', 'Lógica para Computação'],
    ['LC08', 'Victor', 'Lógica para Computação'],
    ['LC09', 'Vinicius', 'Lógica para Computação'],
    ['LC10', 'Yan', 'Lógica para Computação'],
    ['LC11', 'Yuri', 'Lógica para Computação']
  ].map(function (student) {
    return {
      Codigo: student[0],
      Estudante: student[1],
      Disciplina: student[2],
      Periodo: '2026/2',
      Situacao: 'Matriculado'
    };
  });

  var columnLabels = {
    Codigo: 'Código',
    Estudante: 'Estudante',
    Disciplina: 'Disciplina',
    Periodo: 'Período',
    Situacao: 'Situação'
  };

  function getSelectedColumns() {
    return Array.from(document.querySelectorAll('.ar-coluna'))
      .filter(function (checkbox) {
        return checkbox.checked;
      })
      .map(function (checkbox) {
        return checkbox.value;
      });
  }

  function renderStudents() {
    var table = document.getElementById('ar-tabela-estudantes');
    var header = table.querySelector('thead tr');
    var body = table.querySelector('tbody');
    var filter = document.getElementById('ar-filtro-disciplina');
    var expression = document.getElementById('ar-expressao-atual');
    var discipline = filter.value;
    var columns = getSelectedColumns();
    var filteredStudents = students.filter(function (student) {
      return !discipline || student.Disciplina === discipline;
    });

    header.innerHTML = columns.map(function (column) {
      return '<th>' + escapeHtml(columnLabels[column]) + '</th>';
    }).join('');

    if (!columns.length) {
      body.innerHTML = '<tr><td>Selecione ao menos uma coluna.</td></tr>';
    } else if (!filteredStudents.length) {
      body.innerHTML =
        '<tr><td colspan="' + columns.length + '">Nenhum estudante encontrado.</td></tr>';
    } else {
      body.innerHTML = filteredStudents.map(function (student) {
        return '<tr>' + columns.map(function (column) {
          return '<td>' + escapeHtml(student[column]) + '</td>';
        }).join('') + '</tr>';
      }).join('');
    }

    var selection = discipline
      ? 'σ<sub>Disciplina=\'' + escapeHtml(discipline) + '\'</sub>(Estudantes)'
      : 'Estudantes';

    expression.innerHTML =
      'Expressão atual: <code>π<sub>' +
      (columns.length ? columns.join(', ') : '—') +
      '</sub>(' + selection + ')</code>';
  }

  function setupStudentProjection() {
    var filter = document.getElementById('ar-filtro-disciplina');

    filter.addEventListener('change', renderStudents);

    document.querySelectorAll('.ar-coluna').forEach(function (checkbox) {
      checkbox.addEventListener('change', renderStudents);
    });

    renderStudents();
  }

  function setupCartesianProduct() {
    var listA = document.getElementById('ar-lista-a');
    var listB = document.getElementById('ar-lista-b');
    var tableBody = document
      .getElementById('ar-tabela-produto')
      .querySelector('tbody');
    var info = document.getElementById('ar-produto-info');
    var button = document.getElementById('ar-gerar-produto');

    button.addEventListener('click', function () {
      var firstList = listA.value
        .split('\n')
        .map(function (value) {
          return value.trim();
        })
        .filter(Boolean);

      var secondList = listB.value
        .split('\n')
        .map(function (value) {
          return value.trim();
        })
        .filter(Boolean);

      var rows = [];

      firstList.forEach(function (firstValue) {
        secondList.forEach(function (secondValue) {
          rows.push(
            '<tr><td>' + escapeHtml(firstValue) + '</td>' +
            '<td>' + escapeHtml(secondValue) + '</td></tr>'
          );
        });
      });

      tableBody.innerHTML = rows.length
        ? rows.join('')
        : '<tr><td colspan="2">Preencha as duas listas.</td></tr>';

      info.textContent =
        firstList.length + ' × ' + secondList.length + ' = ' +
        firstList.length * secondList.length +
        ' tuplas geradas, grau 2 (1 + 1).';
    });
  }

  setupSetOperators();
  setupStudentProjection();
  setupCartesianProduct();
})();
