(function(){
  "use strict";
  var STORAGE_KEY = "logica-computacao:progresso";
  var toggle = document.getElementById("topic-done-toggle");
  if(!toggle) return;

  var id = toggle.dataset.id;

  function loadDone(){
    try{
      var raw = localStorage.getItem(STORAGE_KEY);
      return raw ? JSON.parse(raw) : {};
    }catch(e){ return {}; }
  }
  function saveDone(done){
    try{ localStorage.setItem(STORAGE_KEY, JSON.stringify(done)); }catch(e){}
  }

  var done = loadDone();
  var checkbox = toggle.querySelector("input");
  checkbox.checked = !!done[id];
  toggle.classList.toggle("is-done", checkbox.checked);

  checkbox.addEventListener("change", function(){
    if(checkbox.checked){ done[id] = true; } else { delete done[id]; }
    saveDone(done);
    toggle.classList.toggle("is-done", checkbox.checked);
  });
})();
