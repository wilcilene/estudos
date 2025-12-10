# Lógica para Computação – Parte I

Este material reúne os principais conceitos de lógica aplicada à computação, estruturados em formato de texto corrido para estudo. O objetivo é servir como apoio didático, trazendo definições, exemplos resolvidos, tabelas-verdade, além de exercícios com gabarito ao final.

---

## Tópicos da Parte I (Esta página)

- Introdução e Fundamentos: 
  - Apresentação da disciplina, objetivos e aplicações da lógica na computação. 
  - Revisão matemática básica: conjuntos, proposições e conectivos.
- Lógica Proposicional, Linguagem e Semântica: 
  - Sintaxe e fórmulas bem formadas (FBFs).
  - Tabelas-verdade, tautologias, contradições, contingências e Equivalências lógicas.
  - Simplificação de fórmulas.
- Sistemas Dedutivos e Dedução natural: 
  - Regras de inferência. Argumentos válidos x inválidos.
  - Construção de provas.
  - Aplicação de dedução em problemas computacionais.

---

## Introdução e Fundamentos

A lógica é a base do raciocínio estruturado e preciso, fundamental para algoritmos, inteligência artificial e verificação de software.  
Ela também sustenta linguagens de programação, já que estruturas condicionais, operadores e expressões lógicas são diretamente inspiradas nos princípios da lógica.

O foco é estabelecer a base para o raciocínio lógico usado em programação.

**Objetivos da disciplina:**
Ao final dessa disciplina (Parte I e Parte II) é esperado que o estudante possa
- Compreender os fundamentos da lógica proposicional e de predicados.
- Formalizar, analisar e validar argumentos.
- Aplicar técnicas dedutivas e computacionais na resolução de problemas.
- Aprimorar a capacidade de relacionar a lógica com estruturas computacionais.
- Utilizar algoritmos de resolução e unificação.
- Explorar aplicações práticas em diversas áreas.

---

## Conjuntos (Revisão rápida)

- Um **conjunto** é uma coleção bem definida de elementos.  
- Principais operações:
  - **União (∪)**: elementos que estão em A ou B.  
  - **Interseção (∩)**: elementos que estão em A e B.  
  - **Diferença (−)**: elementos que estão em A mas não em B (ou que estão em B e não em A - depende da ordem).

<img width="1020" height="249" alt="image" src="https://github.com/user-attachments/assets/f0a2fbba-99ce-4c90-86e4-537d1d48f35d" />


(Imagem adaptada de respondeai)

Exemplo:
A = {1, 2, 3}, B = {2, 3, 4}
A ∪ B = {1, 2, 3, 4}

A ∩ B = {2, 3}

A − B = {1}

---

# 'Se chover, então levo guarda-chuva' → condição lógica.

---

## Proposições

- **Definição**: uma proposição é uma sentença declarativa que pode ser **verdadeira (1)** ou **falsa (0)**.  
- Exemplos:
  - "2 é par" → 1 (verdadeira).
  - "5 < 3" → 0 (falsa).
  - "Leia este texto" → não é proposição (não possui valor lógico).

---

## Para Pensar

### 1. Classifique como proposição ou não:
a) `3 + 2 = 8`  
b) `O Brasil fica na América do Sul`  
c) `Abra a porta`  
d) `Hoje está calor`

---

## Conectivos Lógicos

- **Negação (`¬p`)**: inverte o valor de `p`.
- **Conjunção (`p ∧ q`)**: é `1` apenas se `p` e `q` forem ambos `1`.
- **Disjunção (`p ∨ q`)**: é `1` se pelo menos um for `1`.
- **Condicional (`p → q`)**: é `0` apenas quando `p = 1` e `q = 0`.
- **Bicondicional (`p ↔ q`)**: é `1` se `p` e `q` tiverem o mesmo valor.

### Tabelas-verdade

## Tabelas-verdade

<h3>Negação</h3>
<table>
  <tr><th>p</th><th>¬p</th></tr>
  <tr><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>1</td></tr>
</table>

<h3>Conjunção</h3>
<table>
  <tr><th>p</th><th>q</th><th>p ∧ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

<h3>Disjunção</h3>
<table>
  <tr><th>p</th><th>q</th><th>p ∨ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

<h3>Condicional</h3>
<table>
  <tr><th>p</th><th>q</th><th>p → q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td></tr>
</table>

<h3>Bicondicional</h3>
<table>
  <tr><th>p</th><th>q</th><th>p ↔ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>1</td></tr>
</table>

---

## Argumentos Lógicos

Conjunto de proposições em que algumas são **premissas** e uma é a **conclusão**.

### Exemplo 1

1. Se as demandas aumentam, então as empresas crescem.  
2. Se as empresas crescem, então contratam novos trabalhadores.  
**Conclusão:** Se as demandas aumentam, então as empresas contratam novos trabalhadores.

*Analisando:*:

P: As demandas aumentam.

Q: as empresas crescem.

R: As empresas contratam novos trabalhadores.

Se P então Q.

Se Q então R.

Conclusão: Se P então R.

*Representando:*
- Premissa 1: `P → Q`  
- Premissa 2: `Q → R`  
- Conclusão: `P → R`  
- Essa é uma regra de inferência válida chamada **silogismo hipotético**.

### Exemplo 2

1. Este programa tem bug ou foram inseridos valores errados.
2. Os valores inseridos não estão errados.  
**Conclusão:** Este programa tem bug.


*Analisando:*:

P: Este programa tem bug.

Q: Foram inseridos valores errados.


`P ∨ Q`

`¬Q`

Conclusão: `P`

*Representando:*
- Premissa 1: `P ∨ Q`  
- Premissa 2: `¬Q`  
- Conclusão: `P`  
- Esse raciocínio aplica a **lei do silogismo disjuntivo**.

### Mas atenção, apenas se as premissas forem verdadeiras

1. Se o gato ver o peixe, então o gato pegará o peixe.
2. Se o gato pegar o peixe, então o gato comerá o peixe.  
**Conclusão:** Se o gato ver o peixe, então o gato comerá o peixe.


A conclusão considera que as premissas são verdadeiras.

Alguns gatos não pegam peixes, alguns gatos não comem peixes.
Para assumir que se o gato ver o peixe, então o gato comerá o peixe, as premissas 1 e 2 devem ser verdadeiras.

---
# Lógica Proposicional: Linguagem e Semântica

A **lógica proposicional** é um dos alicerces do raciocínio formal em computação.  
Já entendemos as **proposições** (sentenças que podem ser verdadeiras ou falsas) e os **conectivos lógicos** que permitem construir proposições compostas, como **negação**, **conjunção**, **disjunção**, **condicional** e **bicondicional**.

Então vamos estudar sintaxe e semântica:

- **Sintaxe (Linguagem Formal):**  
  Define as regras de escrita (assim como em português, inglês ou qualquer linguagem).  

  Uma sequência de símbolos só é considerada uma **Fórmula Bem Formada (FBF)** se respeitar essas regras.

  FBF = Termo técnico para uma sequência finita de símbolos de um alfabeto formal que segue as regras de construção de uma linguagem formal, como a lógica proposicional ou a lógica de predicados. São expressões construídas corretamente com proposições e conectivos.
Obs: os símbolos atômicos (as proposições em si) são FBFs. Se 'P' representa a proposição "Estudo", então 'P' é uma FBF. Podemos a partir dela construir outras como 'não Estudo', 'Estudo e vou bem nas provas' supondo Q como 'vou bem nas provas'.

  Resumindo uma FBF é uma expressão lógica construída corretamente, seguindo as regras sintáticas.

  Exemplo válido:
    `(p ∨ ¬q) → r`

  Exemplo inválido:
    `p ∨ ∧ q`


- **Semântica (Significado):**  

  Trata da interpretação das proposições, isto é, do valor lógico que cada expressão assume (verdadeiro = 1, falso = 0).  

  A semântica é representada pelas **tabelas-verdade**, que permitem avaliar todas as combinações possíveis dos valores de uma fórmula.


Esse entendimento é importante para a programação pois fornece a base para entender **condições, estruturas de decisão, algoritmos e validação de programas**.  

Isso nos permite formalizar problemas, analisar a validade de argumentos e simplificar expressões. Habilidades essenciais para a engenharia de software e áreas relacionadas.

---
## Para Pensar

### 2. Diga se as expressões são FBFs:
a) `p ∧ q`  
b) `(¬p ∨ q) → r`  
c) `p ∨ ∧ q`  
d) `((p → q) ↔ (q → r))`

---
## Exercícios

** 1. Determine se são verdadeiras (V), falsas (F) ou não são proposições (N):**
a) "2 + 3 = 5"  
b) "O sol é uma estrela."
c) "Leia este livro."  
d) "x + 1 = 2."
e) "A água ferve a 100 °C ao nível do mar."

** 2. Classifique cada expressão como FBF ou não-FBF. Justifique:**
a) `¬p ∨ q`
b) `(p ∧) ∨ q`
c) `(p ∧ q) → (r ∨ ¬s)`
d) `(p ↔ q ↔ r)`
e) `((p ∨ q) ∧ (¬r))`
 
** 3. Construa FBFs a partir das frases:**
a) "Se chover, então levo guarda-chuva."  
b) "Vou à praia se e somente se fizer sol."  
c) "Pedro é alto e Maria é baixa."  
d) "Se João estuda, então ele passa; se não, ele não passa."

** 4. Suponha que:** 
- p: “O computador está ligado.”  
- q: “A internet funciona.”  
- r: “Posso acessar o Google.”  

Escreva em linguagem natural (português) as seguintes fórmulas:  
a) `p ∧ q`  
b) `¬p ∨ q`  
c) `(p ∧ q) → r`  
d) `(q ↔ r)`

** 5. Em sala, pegue uma folha de papel e crie em linguagem natural, uma proposição simples e duas FBFs.**

---
## Para revisar

## Conectivos Lógicos

Os conectivos lógicos permitem combinar proposições e construir expressões mais complexas.  
A seguir, veremos os principais conectivos, seus significados, exemplos práticos e as tabelas-verdade correspondentes.

---

### Negação (¬)

A negação inverte o valor de uma proposição.  
- Se a proposição é verdadeira (1), sua negação é falsa (0).  
- Se é falsa (0), sua negação é verdadeira (1).

**Exemplo:**  
- p: "Hoje está chovendo"  
- ¬p: "Hoje **não** está chovendo"

**Tabela-verdade:**

<table>
  <tr><th>p</th><th>¬p</th></tr>
  <tr><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>1</td></tr>
</table>

---

### Conjunção (∧)

A conjunção é verdadeira apenas quando **ambas as proposições** são verdadeiras.  
Em qualquer outro caso, é falsa.

**Exemplo prático:**

** Peguem caneta e Lápis**

- Ana pegou caneta e lápis → verdadeiro  
- João pegou só caneta → falso  
- Maria pegou só lápis → falso  
- José não pegou nenhum → falso  

**Tabela-verdade:**

<table>
  <tr><th>p</th><th>q</th><th>p ∧ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

---

### Disjunção (∨)

A disjunção é verdadeira quando **ao menos uma das proposições** é verdadeira.  
Só é falsa quando ambas são falsas.

**Exemplo prático:**

** Peguem caneta ou Lápis**
  
- Ana pegou caneta e lápis → verdadeiro  
- João pegou só caneta → verdadeiro  
- Maria pegou só lápis → verdadeiro  
- José não pegou nenhum → falso  

**Tabela-verdade:**

<table>
  <tr><th>p</th><th>q</th><th>p ∨ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

---

### Condicional (→)

O condicional é lido como "se... então...".  
É **falso apenas** quando a primeira proposição é verdadeira e a segunda é falsa.  
Nos demais casos, é verdadeiro.

**Exemplo prático:**  
- p: "Se pegarem caneta"  
- q: "Então peguem lápis"  

Situação:
- Ana pegou caneta e lápis → verdadeiro  
- João pegou só caneta → falso (p=1, q=0)  
- Maria pegou só lápis → verdadeiro (p=0, q=1)  
- José não pegou nenhum → verdadeiro (p=0, q=0)  

**Tabela-verdade:**

<table>
  <tr><th>p</th><th>q</th><th>p → q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td></tr>
</table>

---

### Bicondicional (↔)

O bicondicional é lido como "se e somente se".  
É verdadeiro quando as duas proposições têm o **mesmo valor lógico** (ambas verdadeiras ou ambas falsas).  

**Exemplo prático:**  
- p: "Se e somente se pegarem caneta"  
- q: "Então peguem lápis"  

Situação:
- Ana pegou caneta e lápis → verdadeiro  
- João pegou só caneta → falso  
- Maria pegou só lápis → falso  
- José não pegou nenhum → verdadeiro  

**Tabela-verdade:**

<table>
  <tr><th>p</th><th>q</th><th>p ↔ q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>1</td></tr>
</table>

--

> ### Para lembrar: Conectivos Lógicos Fundamentais
> 1. Qualquer expressão da forma (¬P) é chamada de **negação**.  
> 2. Qualquer expressão da forma (P ∧ Q) é chamada de **conjunção**.  
> 3. Qualquer expressão da forma (P ∨ Q) é chamada de **disjunção**.  
> 4. Qualquer expressão da forma (P → Q) é chamada de **condicional**.  
> 5. Qualquer expressão da forma (P ↔ Q) é chamada de **equivalência**.  
>
> Todas as expressões consideradas são atômicas,  
> ou negações, conjunções, disjunções, condicionais ou equivalências.

---

## Análise de Composição

Para analisar proposições compostas, utilizamos **árvores de análise sintática (parse trees)**.

O objetivo é decompor uma proposição em suas partes atômicas.

Uma árvore de análise sintática é construída top-down. Você começa com a expressão completa e quebra ela até chegar em expressões atômicas.

Uma *parse tree* pode ser representada em uma expressão com parênteses.

### Exemplo
> "Se o Gustavo aprovar no TCC todos irão admirá-lo e ele receberá o diploma.  
> Mas se ele não passar, então precisará aumentar o esforço."

Definindo:
- P: Gustavo aprova no TCC
- Q: Todos irão admirá-lo
- R: Gustavo receberá o diploma
- S: Gustavo precisará aumentar o esforço

A proposição composta é: `((P → (Q ∧ R)) ∧ (¬P → S))`

Essa fórmula expressa as duas condições: caso Gustavo seja aprovado, terá admiração e diploma; caso não seja, precisará aumentar o esforço.

<img width="770" height="661" alt="image" src="https://github.com/user-attachments/assets/22cfaaa9-a490-4544-89f3-26e9e7916b3d" />

---
## Para pensar

Represente a *parse tree* para:

"Se eu prestar atenção então entenderei o conteúdo, e se eu fizer os exercícios fixarei o que aprendi".

`((P → Q) ∧ (R → S))`


<img width="649" height="251" alt="image" src="https://github.com/user-attachments/assets/4b61cfdd-c0c9-4777-83fa-a70f84785e66" />

---

## Regras de Precedência

Os conectivos lógicos seguem uma ordem de prioridade:

1. `¬` (negação)  
2. `∧` (conjunção)  
3. `∨` (disjunção)  
4. `→` (condicional)  
5. `↔` (bicondicional)  

Exemplo1: `P ∨ Q ∧ R → ¬P ∧ R ↔ S`

Deve ser lido conforme a ordem de precedência acima.

 `(((P ∨ (Q ∧ R)) → ((¬P) ∧ R)) ↔ S)`
 
--

 Exemplo2: `P v Q v R v S`
 
 Deve ser lido conforme a ordem de precedência acima.
 
`(((P v Q) v R) v S)`

--
Para o exemplo anterior temos:
"Se o Gustavo aprovar no TCC todos irão admirá-lo e ele receberá o diploma. 
Mas se ele não passar, então precisará aumentar o esforço."

`((P→(Q^R))^((¬P)→(S))`

Que deve ser lido conforme a ordem de precedência acima.

`(P→Q^R)^(¬P→S)`

---

## Tautologias, Contradições e Contingências

- **Tautologia**: fórmula que é verdadeira em todos os casos.  
- **Contradição**: fórmula que é falsa em todos os casos.  
- **Contingência**: fórmula que em alguns casos é verdadeira e em outros é falsa.  

### Exemplo de tautologia
`¬(P ∧ Q) ∨ Q`

<table>
  <tr>
    <th>P</th><th>Q</th><th>P ∧ Q</th><th>¬(P ∧ Q)</th><th>¬(P ∧ Q) ∨ Q</th>
  </tr>
  <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
</table>

Resultado final: a coluna **`¬(P ∧ Q) ∨ Q`** é sempre **1**, logo a expressão é uma **tautologia**.

---
### Exemplo de contradição
`(P ∨ Q) ∧ ¬P ∧ ¬Q`

<table>
  <tr>
    <th>P</th><th>Q</th><th>P ∨ Q</th><th>¬P</th><th>¬Q</th><th>(P ∨ Q) ∧ ¬P ∧ ¬Q</th>
  </tr>
  <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>0</td></tr>
</table>

Resultado final: a coluna **`(P ∨ Q) ∧ ¬P ∧ ¬Q`** é sempre **0**, logo a expressão é uma **contradição**.

---
## Para Pensar

Crie uma expressão que contenha 5 proposições e seja uma tautologia e outra que seja uma contradição (Apresente a resolução e a árvore).

---

## Equivalências Lógicas

Duas proposições são equivalentes se tiverem os mesmos valores em todas as linhas da tabela-verdade.

Exemplo:
O programa foi bem escrito e bem documentado. 
`(Q ^ P)`

O programa foi bem documentado e bem escrito.
`(P ^ Q)`

Tautologia: `(Q ^ P) ↔ (P ^ Q)`
**Prova de que são equivalentes**


### Exemplos
- `(P ∧ Q) ↔ (Q ∧ P)` → **equivalência comutativa**
- `P → Q ≡ ¬P ∨ Q` → **eliminação do condicional**
- `P ↔ Q ≡ (P → Q) ∧ (Q → P)` → **definição do bicondicional**


Ele não está informado ou não é honesto. `¬P v ¬Q`

Não é verdade que ele seja informado e honesto. `¬(P ^ Q)`

<table>
  <tr>
    <th>p</th><th>q</th><th>p ∧ q</th><th>¬p V ¬q </th><th>¬(p ∧ q) ↔  (¬p V ¬q)</th>
  </tr>
  <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
</table>

- Quando `¬(p ∧ q)` é **1**, também `¬p V ¬q` é **1**.

---
Se os produtos não forem pagos, não serão entregues.

Se os produtos foram entregues, então foram pagos.

P: Produtos entregues
Q: Produtos pagos

<table style="display:inline-block; margin-right:24px; vertical-align:top;">
  <caption><strong>p → q</strong></caption>
  <tr><th>p</th><th>q</th><th>p → q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td></tr>
</table>

<table style="display:inline-block; vertical-align:top;">
  <caption><strong>¬p ∨ q</strong></caption>
  <tr><th>p</th><th>q</th><th>¬p</th><th>¬q</th>th><th>¬q ∨ ¬p</th></tr>
  <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
</table>

As colunas finais de ambas as tabelas coincidem (1,0,1,1), portanto `(p → q)` é equivalente a `(¬p ∨ q)`.

---

## Leis Essenciais da Lógica

---

### Law of Absorption (Lei da Absorção)

Esta lei mostra que, quando temos uma proposição combinada com ela mesma em disjunção ou conjunção, os elementos adicionais se tornam redundantes.  
Ou seja, a proposição isolada já carrega o mesmo valor lógico que a expressão expandida.

**Expressões:**
P ∨ (P ∧ Q) ≡ P
P ∧ (P ∨ Q) ≡ P

**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>P ∨ (P ∧ Q)</caption>
  <tr><th>P</th><th>Q</th><th>P ∨ (P ∧ Q)</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

<table style="display:inline-block;">
  <caption>P</caption>
  <tr><th>P</th></tr>
  <tr><td>1</td></tr>
  <tr><td>1</td></tr>
  <tr><td>0</td></tr>
  <tr><td>0</td></tr>
</table>

---

### Law of Identity (Lei da Identidade)

Afirma que qualquer proposição combinada com o valor lógico universal (0 ou 1) mantém seu valor original.  
Ou seja, unir com falso (0) não altera na disjunção, e unir com verdadeiro (1) não altera na conjunção.

**Expressões:**
P ∨ 0 ≡ P
P ∧ 1 ≡ P


**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>P ∨ 0</caption>
  <tr><th>P</th><th>P ∨ 0</th></tr>
  <tr><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td></tr>
</table>

<table style="display:inline-block;">
  <caption>P</caption>
  <tr><th>P</th></tr>
  <tr><td>1</td></tr>
  <tr><td>0</td></tr>
</table>

---

### Law of Excluded Middle (Lei do Terceiro Excluído)

Estabelece que uma proposição ou sua negação sempre resultam em verdadeiro.  
Não há meio termo: ou a proposição é verdadeira, ou sua negação é.

**Expressão:**
P ∨ ¬P ≡ 1


**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>P ∨ ¬P</caption>
  <tr><th>P</th><th>¬P</th><th>P ∨ ¬P</th></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
</table>

<table style="display:inline-block;">
  <caption>1 (Constante)</caption>
  <tr><th>Valor</th></tr>
  <tr><td>1</td></tr>
  <tr><td>1</td></tr>
</table>

---

### Law of Contradiction (Lei da Contradição)

Afirma que uma proposição e sua negação nunca podem ser verdadeiras ao mesmo tempo.  
Assim, a conjunção de `P` com `¬P` é sempre falsa.

**Expressão:**
P ∧ ¬P ≡ 0

**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>P ∧ ¬P</caption>
  <tr><th>P</th><th>¬P</th><th>P ∧ ¬P</th></tr>
  <tr><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
</table>

<table style="display:inline-block;">
  <caption>0 (Constante)</caption>
  <tr><th>Valor</th></tr>
  <tr><td>0</td></tr>
  <tr><td>0</td></tr>
</table>

---

### Commutative Laws (Leis Comutativas)

A ordem das proposições não altera o resultado.

**Expressões:**
P ∨ Q ≡ Q ∨ P
P ∧ Q ≡ Q ∧ P

**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>P ∨ Q</caption>
  <tr><th>P</th><th>Q</th><th>P ∨ Q</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

<table style="display:inline-block;">
  <caption>Q ∨ P</caption>
  <tr><th>P</th><th>Q</th><th>Q ∨ P</th></tr>
  <tr><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td></tr>
</table>

---

### Associative Laws (Leis Associativas)

A forma como as proposições são agrupadas não altera o resultado.

**Expressões:**
(P ∨ Q) ∨ R ≡ P ∨ (Q ∨ R)
(P ∧ Q) ∧ R ≡ P ∧ (Q ∧ R)

---

### Distributive Laws (Leis Distributivas)

Uma proposição pode ser distribuída sobre outra em conjunção ou disjunção.

**Expressões:**
P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)
P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)

---

### Double Negation Law (Lei da Dupla Negação)

Negar duas vezes equivale à proposição original.

**Expressão:**
¬(¬P) ≡ P

**Tabela-verdade:**

<table style="display:inline-block; margin-right:20px;">
  <caption>¬(¬P)</caption>
  <tr><th>P</th><th>¬P</th><th>¬(¬P)</th></tr>
  <tr><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td></tr>
</table>

<table style="display:inline-block;">
  <caption>P</caption>
  <tr><th>P</th></tr>
  <tr><td>1</td></tr>
  <tr><td>0</td></tr>
</table>

---

### De Morgan’s Laws (Leis de De Morgan)

Transformam uma negação de conjunção em disjunção e vice-versa.

**Expressões:**
¬(P ∧ Q) ≡ (¬P ∨ ¬Q)
¬(P ∨ Q) ≡ (¬P ∧ ¬Q)


**Tabela-verdade (primeira lei):**

<table style="display:inline-block; margin-right:20px;">
  <caption>¬(P ∧ Q)</caption>
  <tr><th>P</th><th>Q</th><th>P ∧ Q</th><th>¬(P ∧ Q)</th></tr>
  <tr><td>1</td><td>1</td><td>1</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td><td>1</td></tr>
</table>

<table style="display:inline-block;">
  <caption>(¬P ∨ ¬Q)</caption>
  <tr><th>P</th><th>Q</th><th>¬P</th><th>¬Q</th><th>¬P ∨ ¬Q</th></tr>
  <tr><td>1</td><td>1</td><td>0</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
</table>
 
---

# Sistemas Dedutivos e Dedução Natural

A lógica proposicional não se limita a avaliar proposições com tabelas-verdade.  
Ela também permite **deduzir conclusões a partir de premissas**, seguindo regras formais chamadas **regras de inferência**.  
Essas regras constituem os **sistemas dedutivos**, fundamentais para a matemática, a filosofia e a computação.

---

## Regras de Inferência

As **regras de inferência** estabelecem formas válidas de obter uma conclusão a partir de uma ou mais premissas verdadeiras.  
Elas garantem que, se as premissas forem verdadeiras, a conclusão também será verdadeira.

### Exemplos de regras

1. **Modus Ponens (MP)**  
   - Se `p → q` e `p` são verdadeiros, então `q` também é verdadeiro.  
   - Exemplo:  
     - Premissas:  
       1. "Se chover, levarei guarda-chuva."  
       2. "Está chovendo."  
     - Conclusão: "Levarei guarda-chuva."
    
<table>
  <tr>
    <th>p</th><th>q</th><th>p → q</th><th>Premissas válidas?</th><th>Conclusão q</th>
  </tr>
  <tr><td>1</td><td>1</td><td>1</td><td>p e (p → q) são 1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>(p → q) é 0</td><td>-</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>p é 0</td><td>-</td></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>p é 0</td><td>-</td></tr>
</table>

**Validade:** apenas na linha 1 as premissas são verdadeiras, e nesse caso `q` também é verdadeiro → regra confirmada.


2. **Modus Tollens (MT)**  
   - Se `p → q` e `¬q` são verdadeiros, então `¬p` também é verdadeiro.  
   - Exemplo:  
     - Premissas:  
       1. "Se chover, a rua ficará molhada."  
       2. "A rua não está molhada."  
     - Conclusão: "Não choveu."
    
<table>
  <tr>
    <th>p</th><th>q</th><th>p → q</th><th>¬q</th><th>Premissas válidas?</th><th>Conclusão ¬p</th>
  </tr>
  <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>-</td><td>-</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>1</td><td>(p → q) é 0</td><td>-</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>0</td><td>-</td><td>-</td></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>Premissas verdadeiras</td><td>¬p = 1</td></tr>
</table>

**Validade:** na linha 4, onde as premissas são verdadeiras, a conclusão `¬p` também é verdadeira → regra confirmada.


3. **Silogismo Hipotético (SH)**
   - Se `p → q` e `q → r`, então `p → r`.  
   - Exemplo:  
     - Premissas:  
       1. "Se estudar, tiro boa nota."  
       2. "Se tiro boa nota, fico feliz."  
     - Conclusão: "Se estudar, fico feliz."

<table>
  <tr>
    <th>p</th><th>q</th><th>r</th>
    <th>p → q</th><th>q → r</th><th>p → r</th>
  </tr>
  <tr><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>1</td><td>0</td><td>1</td><td>0</td><td>0</td></tr>
  <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td><td>1</td></tr>
  <tr><td>1</td><td>0</td><td>0</td><td>0</td><td>1</td><td>0</td></tr>
  <tr><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>1</td><td>0</td><td>1</td><td>0</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td><td>1</td></tr>
  <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>1</td><td>1</td></tr>
</table>

**Validade:** sempre que `p → q` e `q → r` são verdadeiros, `p → r` também é verdadeiro.


4. **Silogismo Disjuntivo (SD)**  
   - Se `p ∨ q` e `¬p`, então `q`.  
   - Exemplo:  
     - Premissas:  
       1. "Ou estudo ou vou ao cinema."  
       2. "Não vou estudar."  
     - Conclusão: "Vou ao cinema."
    
<table> <tr> <th>p</th><th>q</th><th>p ∨ q</th><th>¬p</th><th>Premissas (p ∨ q ∧ ¬p)?</th><th>Conclusão (q)</th> </tr> <tr><td>1</td><td>1</td><td>1</td><td>0</td><td>Não</td><td>1</td></tr> <tr><td>1</td><td>0</td><td>1</td><td>0</td><td>Não</td><td>0</td></tr> <tr><td>0</td><td>1</td><td>1</td><td>1</td><td><strong>Sim</strong></td><td><strong>1</strong></td></tr> <tr><td>0</td><td>0</td><td>0</td><td>1</td><td>Não</td><td>0</td></tr> </table>


---

## Argumentos Válidos x Inválidos

- Um **argumento válido** é aquele em que a conclusão decorre logicamente das premissas.  
- Um **argumento inválido** é aquele em que a conclusão **não** segue das premissas, mesmo que todas as premissas sejam verdadeiras.

**Exemplo válido:**  
1. "Se eu programar em Python, entenderei lógica."  
2. "Eu programei em Python."  
3. Logo, "Entendi lógica." (Modus Ponens)

**Exemplo inválido:**  
1. "Se eu programar em Python, entenderei lógica."  
2. "Entendi lógica."  
3. Logo, "Programei em Python." (→ Erro: conclusão não é garantida)

---

## Dedução Natural

A **dedução natural** é um método para construir provas lógicas **passo a passo**, usando regras de inferência.  
Cada linha de uma prova é justificada por uma regra previamente aceita.

### Problema:
> Se eu estudar, então passo na prova.  
> Se eu passo na prova, então fico feliz.  
> Eu estudei.  
> Logo, fico feliz.

### Formalização:
- p: "Eu estudei"  
- q: "Eu passo na prova"  
- r: "Eu fico feliz"  
- Premissas: `p → q`, `q → r`, `p`  
- Conclusão: `r`

### Prova (dedução natural):

1. `p → q` (premissa)  
2. `q → r` (premissa)  
3. `p` (premissa)  
4. `q` (Modus Ponens em 1 e 3)  
5. `r` (Modus Ponens em 2 e 4)  

**Conclusão:** a partir das premissas, concluímos `r` — o argumento é **válido**.

---

# Para Pensar

1. Prove, usando dedução natural:  
   - "Se eu praticar exercícios, terei mais saúde."  
   - "Se eu tiver mais saúde, serei mais produtivo."  
   - "Eu pratico exercícios."  
   - **Conclusão:** "Serei mais produtivo."
     
---

## Aplicações em Computação

Sistemas dedutivos e dedução natural são aplicados em diversas áreas da computação, como:

- **Verificação de programas**: garantir que um software satisfaz requisitos formais.  
- **Compiladores**: verificação de tipos e consistência de programas.  
- **Inteligência Artificial**: mecanismos de raciocínio automático em sistemas especialistas.  
- **Segurança da informação**: provas formais de protocolos criptográficos.  

---

## Exercícios

1. Use **Modus Tollens** para deduzir a conclusão:  
   - Premissas:  
     1. "Se o sistema está vulnerável, então haverá falhas de segurança."  
     2. "Não há falhas de segurança."  
   - Conclusão: ?

2. Determine se o argumento é válido ou inválido:  
   - "Se a senha for forte, o sistema é seguro."  
   - "O sistema é seguro."  
   - "Logo, a senha é forte."

3. Construa uma prova em dedução natural:  
   - Premissa: `p → (q → r)`  
   - Premissa: `p ∧ q`  
   - Conclusão: `r`

---

## Gabarito (precisa organizar)

1. Conclusão: "O sistema não está vulnerável." (Modus Tollens)  
2. Argumento inválido (afirmação do consequente).  
3.  
   1. `p → (q → r)` (premissa)  
   2. `p ∧ q` (premissa)  
   3. `p` (eliminação da conjunção em 2)  
   4. `q` (eliminação da conjunção em 2)  
   5. `q → r` (Modus Ponens em 1 e 3)  
   6. `r` (Modus Ponens em 5 e 4)  

### Exercício 1
a) Proposição, 0 (falsa).  
b) Proposição, 1 (verdadeira).  
c) Não é proposição.  
d) Proposição (valor depende do contexto, mas é proposição).  

### Exercício 2
a) FBF (válida).  
b) FBF (válida).  
c) Não é FBF.  
d) FBF (válida).  

### Exercício 3
a) `p → q`  
b) `p ↔ q`  
c) `p ∧ q`  
d) `(p → q) ∧ (¬p → ¬q)`  

### Exercício 4
a) "O computador está ligado e a internet funciona."  
b) "O computador está desligado ou a internet funciona."  
c) "Se o computador está ligado e a internet funciona, então posso acessar o Google."  
d) "A internet funciona se e somente se posso acessar o Google."  

---

📚 **Leitura complementar:** Huth & Ryan, *Logic in Computer Science*, Capítulo 1.  
