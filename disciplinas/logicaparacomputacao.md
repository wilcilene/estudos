# Lógica para Programação – Parte I

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
- Sistemas Dedutivos: 
  - Regras de inferência. Argumentos válidos x inválidos.
- Dedução natural: 
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

Um argumento lógico é um conjunto de proposições em que algumas são **premissas** e uma é a **conclusão**.

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

** 5. Em sala,pegue uma folha de papel e crie em linguagem natural, uma proposição simples e duas FBFs.**

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
- p: "Ana pegou caneta"  
- q: "Ana pegou lápis"  
- p ∧ q: "Ana pegou caneta **e** lápis"

Situação:
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
- p: "Maria pegou caneta"  
- q: "Maria pegou lápis"  
- p ∨ q: "Maria pegou caneta **ou** lápis"

Situação:
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

## Análise de Composição

Para analisar proposições compostas, utilizamos **árvores de análise sintática (parse trees)**.  
O objetivo é decompor uma proposição em suas partes atômicas.

### Exemplo
> "Se o Gustavo aprovar no TCC todos irão admirá-lo e ele receberá o diploma.  
> Mas se ele não passar, então precisará aumentar o esforço."

Definindo:
- P: Gustavo aprova no TCC
- Q: Todos irão admirá-lo
- R: Gustavo receberá o diploma
- S: Gustavo precisará aumentar o esforço

A proposição composta é: ((P → (Q ∧ R)) ∧ (¬P → S))

Essa fórmula expressa as duas condições: caso Gustavo seja aprovado, terá admiração e diploma; caso não seja, precisará aumentar o esforço.

((P → (Q ∧ R)) ∧ (¬P → S))


                                        ∧
                       ┌────────────────┴────────────────┐
                       →                                 →
           ┌───────────┴───────────┐           ┌─────────┴─────────┐
 "Gustavo aprova no TCC"           ∧           ¬                   "Precisará
         (P)             ┌─────────┴─────────┐ |          aumentar o esforço"
                         |                   | |
        "Todos irão admirá-lo"   "Receberá o diploma"   "Gustavo aprova no TCC"
              (Q)                        (R)                    (P)


---

## Regras de Precedência

Os conectivos lógicos seguem uma ordem de prioridade:

1. ¬ (negação)  
2. ∧ (conjunção)  
3. ∨ (disjunção)  
4. → (condicional)  
5. ↔ (bicondicional)  

Exemplo: P ∨ Q ∧ R → ¬P ∧ R ↔ S
Deve ser lido conforme a ordem de precedência acima.

---

## Tautologias, Contradições e Contingências

- **Tautologia**: fórmula que é verdadeira em todos os casos.  
- **Contradição**: fórmula que é falsa em todos os casos.  
- **Contingência**: fórmula que em alguns casos é verdadeira e em outros é falsa.  

### Exemplo de tautologia
¬(P ∧ Q) ∨ Q

### Exemplo de contradição
(P ∨ Q) ∧ ¬P ∧ ¬Q


---

## Equivalências Lógicas

Duas proposições são equivalentes se tiverem os mesmos valores em todas as linhas da tabela-verdade.

### Exemplos
- `(P ∧ Q) ↔ (Q ∧ P)` → **equivalência comutativa**
- `P → Q ≡ ¬P ∨ Q` → **eliminação do condicional**
- `P ↔ Q ≡ (P → Q) ∧ (Q → P)` → **definição do bicondicional**

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

php-template
Copiar código

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

yaml
Copiar código

---

### Distributive Laws (Leis Distributivas)

Uma proposição pode ser distribuída sobre outra em conjunção ou disjunção.

**Expressões:**
P ∨ (Q ∧ R) ≡ (P ∨ Q) ∧ (P ∨ R)
P ∧ (Q ∨ R) ≡ (P ∧ Q) ∨ (P ∧ R)

yaml
Copiar código

---

### Double Negation Law (Lei da Dupla Negação)

Negar duas vezes equivale à proposição original.

**Expressão:**
¬(¬P) ≡ P

php-template
Copiar código

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

javascript
Copiar código

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

## Gabarito das atividades

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



https://www.respondeai.com.br/conteudo/calculo/pre-calculo/operacoes-com-conjuntos/1578
