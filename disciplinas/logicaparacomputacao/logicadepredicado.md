# Lógica de Predicados

## 1. Introdução

A **Lógica de Predicados** (ou **Lógica de Primeira Ordem**) é uma extensão da **Lógica Proposicional**. Enquanto a lógica proposicional lida apenas com proposições inteiras (verdadeiras ou falsas), a lógica de predicados permite analisar **a estrutura interna das proposições**, descrevendo relações entre objetos e suas propriedades.

Isso a torna muito mais expressiva e poderosa para modelar problemas computacionais, pois permite representar conhecimento sobre **conjuntos de elementos**, **relações** e **quantificações** (como "para todo" ou "existe").

---

## 2. Sintaxe da Lógica de Predicados

A sintaxe define **como as expressões são construídas**.

### 2.1. Elementos básicos

* **Constantes:** representam objetos específicos do domínio.
  Ex: `a`, `b`, `1`, `Joao`.
* **Variáveis:** representam elementos genéricos do domínio.
  Ex: `x`, `y`, `z`.
* **Funções:** mapeiam elementos do domínio em outros elementos.
  Ex: `pai(x)`, `maior(x,y)`.
* **Predicados:** expressam propriedades ou relações sobre elementos.
  Ex: `Estudante(x)` (x é estudante), `MaiorQue(x, y)` (x é maior que y).

### 2.2. Fórmulas atômicas

Uma **fórmula atômica** é uma aplicação de um predicado a termos.
Exemplos:

```text
Estudante(Joao)
MaiorQue(3, 2)
Amigo(Joao, Maria)
```

### 2.3. Conectivos lógicos

Os mesmos da lógica proposicional:

* ¬ (negação)
* ∧ (conjunção)
* ∨ (disjunção)
* → (implicação)
* ↔ (equivalência)

### 2.4. Quantificadores

* **Universal (∀)** – lê-se “para todo”:
  `∀x P(x)` significa “para todo x, P(x) é verdadeiro”.
* **Existencial (∃)** – lê-se “existe”:
  `∃x P(x)` significa “existe pelo menos um x tal que P(x) é verdadeiro”.

> **Dica:** o quantificador indica o *alcance* da variável. Fora do quantificador, a variável perde o valor.

---

## 3. Exemplos de Formalização

| Sentença em Português               | Formalização                                           | Leitura                                                                |
| ----------------------------------- | ------------------------------------------------------ | ---------------------------------------------------------------------- |
| Todo estudante estuda.              | `∀x (Estudante(x) → Estuda(x))`                        | Para todo x, se x é estudante, então x estuda.                         |
| Existe um estudante que não estuda. | `∃x (Estudante(x) ∧ ¬Estuda(x))`                       | Há pelo menos um x que é estudante e não estuda.                       |
| João é amigo de Maria.              | `Amigo(Joao, Maria)`                                   | João é amigo de Maria.                                                 |
| Todo professor tem um estudante.    | `∀x (Professor(x) → ∃y (Estudante(y) ∧ Ensina(x, y)))` | Para todo x que é professor, existe um y que é estudante e x ensina y. |

---

## 4. Semântica: Interpretação e Modelos

A **semântica** define **o significado** das fórmulas, isto é, quando uma fórmula é considerada **verdadeira**.

### 4.1. Interpretação

Uma **interpretação** consiste em:

* Um **domínio (D)**: o conjunto de todos os objetos considerados.
* Atribuições que associam:

  * Constantes → elementos de D.
  * Funções → funções sobre D.
  * Predicados → relações sobre D.

**Exemplo:**

```text
Domínio D = {Joao, Maria}
Estudante(x): {Joao}
Estuda(x): {Joao, Maria}
```

Nessa interpretação:

* `Estudante(Joao)` é **verdadeiro**.
* `Estudante(Maria)` é **falso**.
* `∀x Estuda(x)` é **verdadeiro** (pois ambos estudam).
* `∃x ¬Estudante(x)` é **verdadeiro** (pois Maria não é estudante).

### 4.2. Modelos

Uma **fórmula é verdadeira em um modelo** se sua interpretação torna a sentença verdadeira.
Um **modelo** é uma interpretação que satisfaz todas as fórmulas de um conjunto.

**Exemplo:**
Se o modelo M satisfaz `∀x (Estudante(x) → Estuda(x))`, dizemos que M é **modelo da teoria**.

---

## 5. Validade e Satisfatibilidade

* **Válida:** verdadeira em **todas as interpretações** possíveis.
  Ex: `∀x (P(x) → P(x))`.
* **Satisfatível:** verdadeira em **pelo menos uma** interpretação.
  Ex: `∃x P(x)`.
* **Contradição:** falsa em **todas** as interpretações.
  Ex: `∀x (P(x) ∧ ¬P(x))`.

---

## 6. Modelagem de Problemas

A lógica de predicados é muito usada para **modelar problemas de IA, bancos de dados e verificação de programas**.

### Exemplo prático: Sistema de recomendação

> “Se um usuário gosta de um filme e o filme é do gênero ação, então o usuário gosta de ação.”

**Formalização:**

```text
∀x∀y ((Usuario(x) ∧ Filme(y) ∧ Gosta(x, y) ∧ Genero(y, Acao)) → GostaGenero(x, Acao))
```

Esse tipo de formalização é base para **mecanismos de inferência**, usados em sistemas especialistas e IA simbólica.

---

## 7. Comparação entre Lógica Proposicional e Lógica de Predicados

| Característica | Lógica Proposicional                 | Lógica de Predicados                            |
| -------------- | ------------------------------------ | ----------------------------------------------- |
| Unidade básica | Proposição                           | Predicado + termos                              |
| Expressividade | Limitada                             | Alta (permite quantificação)                    |
| Exemplo        | `P → Q`                              | `∀x (P(x) → Q(x))`                              |
| Aplicações     | Circuitos, AFDs, verificação simples | IA, bancos de dados, Prolog, verificação formal |

---

## 8. Exercícios sugeridos

1. Traduza para a linguagem de predicados:

   * a) Todo programador sabe lógica.
   * b) Existe um estudante que não entregou o trabalho.
   * c) Se um estudante é dedicado, então ele passa na disciplina.

2. Dê uma interpretação e verifique se cada fórmula é verdadeira ou falsa.

3. Formalize as seguintes regras para um sistema especialista simples:

   * a) Todo mamífero é animal.
   * b) Todo gato é mamífero.
   * c) Se um gato mia, então ele é vivo.

---

## 9. Resumo

A Lógica de Predicados amplia os horizontes da lógica proposicional, permitindo representar e raciocinar sobre propriedades e relações entre objetos. É uma ferramenta essencial para áreas como **Inteligência Artificial**, **Verificação Formal**, **Linguagens de Programação** e **Banco de Dados**.

> compreender a sintaxe, semântica e interpretação da Lógica de Predicados é o primeiro passo para aplicar raciocínio lógico de forma automatizada em sistemas computacionais.

<!--
## 9. Materiais e Recursos Extras

### Livros

* **E. Mendelson**, *Introduction to Mathematical Logic*, Springer.
* **Huth & Ryan**, *Logic in Computer Science: Modelling and Reasoning about Systems*.
* **Ian Chiswell & Wilfrid Hodges**, *Mathematical Logic*.

### Online

* [Lógica de Predicados – UNIVESP](https://www.youtube.com/watch?v=b7P5qtuWHDI)
* [Introdução à Lógica – USP Coursera](https://www.coursera.org/learn/logica)
* [Brilliant.org – Logic Courses](https://brilliant.org/courses/logic/)
* [Wikibooks – Lógica Matemática](https://pt.wikibooks.org/wiki/L%C3%B3gica_Matem%C3%A1tica)
* [Logic.ly – Simulador de circuitos lógicos](https://logic.ly/demo/)
-->
---
