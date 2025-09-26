# Lógica para Programação – Parte I

Este material reúne os principais conceitos de lógica aplicada à computação, estruturados em formato de texto corrido para estudo. O objetivo é servir como apoio didático, trazendo definições, exemplos resolvidos, tabelas-verdade, além de exercícios com gabarito ao final.

---

## Introdução e Fundamentos

A lógica é a base do raciocínio estruturado e preciso, fundamental para algoritmos, inteligência artificial e verificação de software.  
Ela também sustenta linguagens de programação, já que estruturas condicionais, operadores e expressões lógicas são diretamente inspiradas nos princípios da lógica.

**Objetivos da disciplina:**
- Compreender os fundamentos da lógica proposicional e de predicados.
- Formalizar, analisar e validar argumentos.
- Aplicar técnicas dedutivas e computacionais.
- Relacionar lógica com estruturas computacionais.
- Utilizar algoritmos de resolução e unificação.

---

## Conjuntos (Revisão rápida)

- Um **conjunto** é uma coleção bem definida de elementos.  
- Principais operações:
  - **União (∪)**: elementos que estão em A ou B.  
  - **Interseção (∩)**: elementos que estão em A e B.  
  - **Diferença (−)**: elementos que estão em A mas não em B.

<img width="1020" height="249" alt="image" src="https://github.com/user-attachments/assets/f0a2fbba-99ce-4c90-86e4-537d1d48f35d" />


(Imagem adaptada de respondeai)

Exemplo:
A = {1, 2, 3}, B = {2, 3, 4}
A ∪ B = {1, 2, 3, 4}
A ∩ B = {2, 3}
A − B = {1}

---

## Proposições

- **Definição**: uma proposição é uma sentença declarativa que pode ser classificada como **verdadeira (1)** ou **falsa (0)**.  
- Exemplos:
  - "2 é par" → 1 (verdadeira)
  - "5 < 3" → 0 (falsa)
  - "Leia este texto" → não é proposição (não possui valor lógico)

---

## Conectivos Lógicos

- **Negação (¬p)**: inverte o valor de `p`.
- **Conjunção (p ∧ q)**: é 1 apenas se `p` e `q` forem ambos 1.
- **Disjunção (p ∨ q)**: é 1 se pelo menos um for 1.
- **Condicional (p → q)**: é 0 apenas quando `p = 1` e `q = 0`.
- **Bicondicional (p ↔ q)**: é 1 se `p` e `q` tiverem o mesmo valor.

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

### Exemplo 1 (Silogismo Hipotético)

1. Se as demandas aumentam, então as empresas crescem.  
2. Se as empresas crescem, então contratam novos trabalhadores.  
**Conclusão:** Se as demandas aumentam, então as empresas contratam novos trabalhadores.

Passo a passo:
- Premissa 1: `P → Q`  
- Premissa 2: `Q → R`  
- Conclusão: `P → R`  
- Essa é uma regra de inferência válida chamada **silogismo hipotético**.

### Exemplo 2

1. Este programa tem bug ou foram inseridos valores errados.  
2. Os valores inseridos não estão errados.  
**Conclusão:** Este programa tem bug.  

Passo a passo:
- Premissa 1: `P ∨ Q`  
- Premissa 2: ¬Q  
- Conclusão: `P`  
- Esse raciocínio aplica a **lei do silogismo disjuntivo**.

---

## Fórmulas Bem Formadas (FBFs)

Uma **Fórmula Bem Formada (FBF)** é uma expressão lógica construída corretamente, seguindo regras sintáticas.

Exemplo válido:
(p ∨ ¬q) → r

Exemplo inválido:
p ∨ ∧ q

---

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

```mermaid
graph TD
  A["∧"] --> B["→"]
  A --> C["→"]

  B --> D["Gustavo aprova no TCC (P)"]
  B --> E["∧"]
  E --> F["Todos irão admirá-lo (Q)"]
  E --> G["Receberá o diploma (R)"]

  C --> H["¬"]
  H --> I["Gustavo aprova no TCC (P)"]
  C --> J["Precisará aumentar o esforço (S)"]

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
## Para Pensar

### 1. Classifique como proposição ou não:
a) `3 + 2 = 8`  
b) `O Brasil fica na América do Sul`  
c) `Abra a porta`  
d) `Hoje está calor`

---

### 2. Diga se as expressões são FBFs:
a) `p ∧ q`  
b) `(¬p ∨ q) → r`  
c) `p ∨ ∧ q`  
d) `((p → q) ↔ (q → r))`

---

### 3. Construa FBFs a partir das frases:
a) "Se chover, então levo guarda-chuva."  
b) "Vou à praia se e somente se fizer sol."  
c) "Pedro é alto e Maria é baixa."  
d) "Se João estuda, então ele passa; se não, ele não passa."

---

### 4. Traduza para linguagem natural:
Dado:  
- p: “O computador está ligado.”  
- q: “A internet funciona.”  
- r: “Posso acessar o Google.”  

Transforme em português:  
a) `p ∧ q`  
b) `¬p ∨ q`  
c) `(p ∧ q) → r`  
d) `(q ↔ r)`

---

## Gabarito dos Exercícios

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
