// Álgebra Relacional — Junções e Divisão
// Lógica interativa: toggles de dica/resposta e simuladores de junção e divisão.

document.addEventListener('DOMContentLoaded', function () {

  // ---------- Toggle das dicas/respostas do "Pense como um detetive" ----------
  document.querySelectorAll('.thinking-toggle[aria-expanded]').forEach(function (button) {
    button.addEventListener('click', function () {
      var panel = button.closest('.thinking-exercise').querySelector('.thinking-hints');
      var isHidden = panel.classList.toggle('thinking-hints--hidden');
      button.setAttribute('aria-expanded', String(!isHidden));
      button.textContent = isHidden ? 'Ver dica e resposta' : 'Ocultar dica e resposta';
    });
  });

  // ---------- 1. Simulador de junção ----------
  var gatos = [
    { Nome: 'Mingau', Cor: 'Preto', Idade: 3, Sexo: 'M', Peso_kg: 4.2 },
    { Nome: 'Flor', Cor: 'Branco', Idade: 1, Sexo: 'F', Peso_kg: 3.5 },
    { Nome: 'Tofu', Cor: 'Cinza', Idade: 5, Sexo: 'M', Peso_kg: 5.1 },
    { Nome: 'Nuvem', Cor: 'Branco', Idade: 2, Sexo: 'F', Peso_kg: 3.8 },
    { Nome: 'Pistache', Cor: 'Caramelo', Idade: 4, Sexo: 'M', Peso_kg: 4.7 }
  ];
  var consultas = [
    { Nome: 'Mingau', Data: '03/03/2026', Veterinario: 'Dra. Helena', Motivo: 'Vacina' },
    { Nome: 'Flor', Data: '10/03/2026', Veterinario: 'Dr. Ivo', Motivo: 'Check-up' },
    { Nome: 'Tofu', Data: '15/03/2026', Veterinario: 'Dra. Helena', Motivo: 'Vermífugo' },
    { Nome: 'Doceo', Data: '20/03/2026', Veterinario: 'Dr. Ivo', Motivo: 'Emergência' }
  ];

  function nullCell() {
    return '<em style="color:var(--ink-soft);">NULL</em>';
  }

  function merge(g, c) {
    return {
      Nome: g ? g.Nome : c.Nome,
      Cor: g ? g.Cor : null,
      Idade: g ? g.Idade : null,
      Sexo: g ? g.Sexo : null,
      Peso_kg: g ? g.Peso_kg : null,
      Data: c ? c.Data : null,
      Veterinario: c ? c.Veterinario : null,
      Motivo: c ? c.Motivo : null
    };
  }

  function computeJoin(tipo) {
    var rows = [];
    if (tipo === 'natural' || tipo === 'left' || tipo === 'full') {
      gatos.forEach(function (g) {
        var match = consultas.filter(function (c) { return c.Nome === g.Nome; })[0];
        if (match) {
          rows.push(merge(g, match));
        } else if (tipo === 'left' || tipo === 'full') {
          rows.push(merge(g, null));
        }
      });
    }
    if (tipo === 'right' || tipo === 'full') {
      consultas.forEach(function (c) {
        var match = gatos.filter(function (g) { return g.Nome === c.Nome; })[0];
        if (tipo === 'right') {
          rows.push(merge(match || null, c));
        } else if (!match) {
          rows.push(merge(null, c));
        }
      });
    }
    return rows;
  }

  var tabelaJoinEl = document.getElementById('ar-tabela-join');
  if (tabelaJoinEl) {
    var tbodyJoin = tabelaJoinEl.querySelector('tbody');
    var joinInfo = document.getElementById('ar-join-info');
    var colunas = ['Nome', 'Cor', 'Idade', 'Sexo', 'Peso_kg', 'Data', 'Veterinario', 'Motivo'];
    var nomesTipo = {
      natural: 'Junção natural (⋈)',
      left: 'Externa à esquerda (⟕)',
      right: 'Externa à direita (⟖)',
      full: 'Externa completa (⟗)'
    };

    document.querySelectorAll('[data-jointype]').forEach(function (btn) {
      btn.addEventListener('click', function () {
        var tipo = btn.getAttribute('data-jointype');
        var rows = computeJoin(tipo);
        tbodyJoin.innerHTML = rows.map(function (r) {
          return '<tr>' + colunas.map(function (c) {
            return '<td>' + (r[c] === null || r[c] === undefined ? nullCell() : r[c]) + '</td>';
          }).join('') + '</tr>';
        }).join('');
        joinInfo.textContent = nomesTipo[tipo] + ' — ' + rows.length + ' tupla(s) no resultado.';
      });
    });
  }

  // ---------- 2. Simulador de divisão ----------
  var capacidadesIniciais = {
    R01: { Colheita: true, Pulverização: true, Monitoramento: true },
    R02: { Colheita: true, Pulverização: true, Monitoramento: false },
    R03: { Colheita: false, Pulverização: false, Monitoramento: true },
    R04: { Colheita: true, Pulverização: true, Monitoramento: true }
  };
  var tarefas = ['Colheita', 'Pulverização', 'Monitoramento'];
  var tabelaCapEl = document.getElementById('ar-tabela-capacidades');

  if (tabelaCapEl) {
    var tbodyCap = tabelaCapEl.querySelector('tbody');

    tbodyCap.innerHTML = Object.keys(capacidadesIniciais).map(function (codigo) {
      var cels = tarefas.map(function (t) {
        var checked = capacidadesIniciais[codigo][t] ? 'checked' : '';
        return '<td><input type="checkbox" class="ar-cap" data-robo="' + codigo + '" data-tarefa="' + t + '" ' + checked + '></td>';
      }).join('');
      return '<tr><td>' + codigo + '</td>' + cels + '</tr>';
    }).join('');

    var btnDivisao = document.getElementById('ar-calcular-divisao');
    if (btnDivisao) {
      btnDivisao.addEventListener('click', function () {
        var obrigatorias = Array.from(document.querySelectorAll('.ar-tarefa-obrig'))
          .filter(function (el) { return el.checked; })
          .map(function (el) { return el.value; });

        var resultado = Object.keys(capacidadesIniciais).filter(function (codigo) {
          return obrigatorias.every(function (t) {
            var cb = document.querySelector('.ar-cap[data-robo="' + codigo + '"][data-tarefa="' + t + '"]');
            return cb && cb.checked;
          });
        });

        var painel = document.getElementById('ar-divisao-resultado');
        painel.innerHTML = '<h4>Resultado</h4>' +
          '<p style="margin:0 0 .4rem; font-family:var(--font-display); font-size:.85rem; color:var(--ink-soft);">RoboTarefa ÷ {' + obrigatorias.join(', ') + '}</p>' +
          '<p style="margin:0;"><strong>{' + (resultado.length ? resultado.join(', ') : '∅ (nenhum robô cobre todas as tarefas exigidas)') + '}</strong></p>';
      });
    }
  }
});
