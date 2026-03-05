```html
<!DOCTYPE html>
<html lang="pt-br">
<head>
<meta charset="UTF-8">
<title>Programação I – Introdução ao Java</title>

<style>

/* ---------- BASE ---------- */

*{
margin:0;
padding:0;
box-sizing:border-box;
font-family: "Segoe UI", Arial, sans-serif;
}

body{
background:#f4f6fb;
color:#2b2b2b;
line-height:1.6;
}

/* ---------- HERO ---------- */

.hero{
background:linear-gradient(135deg,#3f51b5,#673ab7);
color:white;
text-align:center;
padding:80px 20px;
}

.hero h1{
font-size:46px;
margin-bottom:10px;
}

.hero p{
font-size:20px;
opacity:0.95;
}

.mensagem{
margin-top:18px;
background:rgba(255,255,255,0.15);
padding:12px 20px;
display:inline-block;
border-radius:10px;
font-weight:500;
}

/* ---------- SEÇÕES ---------- */

section{
max-width:1100px;
margin:auto;
padding:60px 20px;
}

section h2{
color:#3f51b5;
font-size:32px;
margin-bottom:8px;
}

.sub{
color:#666;
margin-bottom:25px;
}

/* ---------- OBJETIVOS ---------- */

.objetivos{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(230px,1fr));
gap:20px;
}

.obj{
background:white;
padding:22px;
border-radius:12px;
box-shadow:0 5px 16px rgba(0,0,0,0.08);
transition:0.3s;
}

.obj:hover{
transform:translateY(-4px);
}

/* ---------- ROADMAP ---------- */

.roadmap-container{
position:relative;
margin-top:40px;
}

/* barra de progresso */

.progress-bar{
position:sticky;
top:0;
height:6px;
background:#ddd;
z-index:2;
}

.progress{
height:6px;
width:0%;
background:#3f51b5;
transition:width 0.2s;
}

/* grid semanas */

.roadmap{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(260px,1fr));
gap:24px;
margin-top:30px;
}

.week{
background:white;
padding:22px;
border-radius:12px;
box-shadow:0 6px 18px rgba(0,0,0,0.08);
position:relative;
transition:0.25s;
}

.week:hover{
transform:translateY(-6px);
}

.week-number{
font-size:13px;
font-weight:bold;
color:#666;
margin-bottom:6px;
}

.week h3{
color:#3f51b5;
font-size:18px;
margin-bottom:6px;
}

.week p{
font-size:14px;
color:#555;
}

/* indicador */

.week::before{
content:"";
position:absolute;
top:-10px;
left:20px;
width:12px;
height:12px;
background:#3f51b5;
border-radius:50%;
}

/* ---------- PROJETO ---------- */

.projeto{
background:#eef2ff;
border-left:6px solid #3f51b5;
padding:30px;
border-radius:10px;
}

/* ---------- APRENDER ---------- */

.aprender{
display:grid;
grid-template-columns:repeat(auto-fit,minmax(240px,1fr));
gap:20px;
}

.aprender div{
background:white;
padding:20px;
border-radius:10px;
box-shadow:0 5px 16px rgba(0,0,0,0.08);
}

/* ---------- ANIMAÇÃO ---------- */

.fade{
opacity:0;
transform:translateY(25px);
transition:0.8s;
}

.fade.visible{
opacity:1;
transform:translateY(0);
}

/* ---------- FOOTER ---------- */

footer{
background:#222b45;
color:white;
text-align:center;
padding:40px 20px;
margin-top:60px;
}

</style>
</head>

<body>

<header class="hero">

<h1>Programação I</h1>

<p>Introdução à programação com Java</p>

<div class="mensagem">
Aprender a programar é um processo progressivo. Cada semana constrói um novo passo.
</div>

</header>

<section class="fade">

<h2>O que é esta disciplina</h2>

<p class="sub">
Primeiro contato com programação e pensamento computacional.
</p>

<p>
Nesta disciplina você aprenderá a desenvolver programas utilizando Java.
O foco não é apenas aprender comandos da linguagem, mas compreender como
estruturar soluções para problemas computacionais e desenvolver sistemas
de forma organizada.
</p>

</section>

<section class="fade">

<h2>Objetivos de aprendizagem</h2>

<p class="sub">Competências fundamentais para iniciar na programação.</p>

<div class="objetivos">

<div class="obj">
Desenvolver raciocínio lógico e pensamento algorítmico.
</div>

<div class="obj">
Escrever programas em Java utilizando estruturas básicas.
</div>

<div class="obj">
Compreender os princípios da orientação a objetos.
</div>

<div class="obj">
Aplicar conceitos em um projeto de software.
</div>

</div>

</section>

<section class="fade">

<h2>Roadmap do semestre</h2>

<p class="sub">
Os conteúdos são organizados de forma progressiva ao longo das semanas.
</p>

<div class="roadmap-container">

<div class="progress-bar">
<div class="progress" id="progress"></div>
</div>

<div class="roadmap">

<div class="week">
<div class="week-number">Semanas 1–2</div>
<h3>Fundamentos da programação</h3>
<p>Paradigmas de programação e introdução ao pensamento computacional.</p>
</div>

<div class="week">
<div class="week-number">Semanas 3–4</div>
<h3>Ambiente Java</h3>
<p>História da computação, instalação do JDK e primeiros programas.</p>
</div>

<div class="week">
<div class="week-number">Semanas 5–6</div>
<h3>Estruturas básicas</h3>
<p>Entrada e saída de dados, operadores e primeiras estruturas de controle.</p>
</div>

<div class="week">
<div class="week-number">Semanas 7–8</div>
<h3>Decisões e loops</h3>
<p>Controle de fluxo com if, switch, while e for.</p>
</div>

<div class="week">
<div class="week-number">Semanas 9–10</div>
<h3>Estruturas de dados</h3>
<p>Arrays, ArrayLists e manipulação de coleções.</p>
</div>

<div class="week">
<div class="week-number">Semanas 11–12</div>
<h3>Programação orientada a objetos</h3>
<p>Classes, encapsulamento, construtores e organização do código.</p>
</div>

<div class="week">
<div class="week-number">Semanas 13–14</div>
<h3>Herança e polimorfismo</h3>
<p>Hierarquias de classes e reutilização de código.</p>
</div>

<div class="week">
<div class="week-number">Semana 15</div>
<h3>Tratamento de exceções</h3>
<p>Controle de erros e robustez de programas.</p>
</div>

<div class="week">
<div class="week-number">Semana 16</div>
<h3>Arquivos e persistência</h3>
<p>Leitura e escrita de arquivos utilizando streams.</p>
</div>

<div class="week">
<div class="week-number">Semanas 17–18</div>
<h3>Interfaces gráficas</h3>
<p>Criação de aplicações com interface visual.</p>
</div>

</div>

</div>

</section>

<section class="fade">

<div class="projeto">

<h3>Projeto da disciplina</h3>

<p>
Durante o semestre será desenvolvido um projeto em Java no qual os
estudantes aplicarão os conceitos aprendidos ao longo das aulas.
</p>

<p>
O projeto envolve análise do problema, modelagem com diagramas,
implementação do sistema e apresentação final.
</p>

<p>
Essa atividade permite experimentar o processo completo de
desenvolvimento de software.
</p>

</div>

</section>

<section class="fade">

<h2>Como vamos aprender</h2>

<p class="sub">
O aprendizado ocorre principalmente pela prática e experimentação.
</p>

<div class="aprender">

<div>
Aulas expositivas com demonstrações de programação.
</div>

<div>
Exercícios progressivos para fixação dos conceitos.
</div>

<div>
Discussão e resolução colaborativa de problemas.
</div>

<div>
Desenvolvimento de um projeto aplicado.
</div>

</div>

</section>

<footer>

<p>Disciplina de Programação I</p>
<p>Curso de Engenharia de Computação</p>

</footer>

<script>

/* PROGRESSO DA BARRA */

window.addEventListener('scroll', function() {

let scrollTop = document.documentElement.scrollTop;
let scrollHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

let progress = (scrollTop / scrollHeight) * 100;

document.getElementById('progress').style.width = progress + "%";

});

/* ANIMAÇÃO AO ROLAR */

const faders = document.querySelectorAll('.fade');

const observer = new IntersectionObserver(entries => {

entries.forEach(entry => {

if(entry.isIntersecting){
entry.target.classList.add('visible');
}

});

});

faders.forEach(el => observer.observe(el));

</script>

</body>
</html>
```

