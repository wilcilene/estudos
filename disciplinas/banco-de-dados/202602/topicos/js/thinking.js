// thinking.js

document.addEventListener('DOMContentLoaded', function () {
  var buttons = document.querySelectorAll('.thinking-toggle');

  if (!buttons.length) {
    return; 
  }

  buttons.forEach(function (button) {
    button.addEventListener('click', function () {
      var targetId = button.getAttribute('data-target');
      var panel = document.getElementById(targetId);
      if (!panel) return;

      var isHidden = panel.classList.contains('thinking-hints--hidden');

      if (isHidden) {
        panel.classList.remove('thinking-hints--hidden');
        panel.setAttribute('aria-hidden', 'false');
        button.setAttribute('aria-expanded', 'true');
        button.textContent = 'Ocultar pistas para o MER';
      } else {
        panel.classList.add('thinking-hints--hidden');
        panel.setAttribute('aria-hidden', 'true');
        button.setAttribute('aria-expanded', 'false');
        button.textContent = 'Mostrar pistas para o MER';
      }
    });
  });
});
