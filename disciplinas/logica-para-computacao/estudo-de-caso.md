# Sistema Especialista para Diagnóstico Médico
### Este estudo de caso demonstra como **substituição**, **unificação** e **resolução** são peças fundamentais no raciocínio automático usado em sistemas especialistas, especialmente na área médica.

---
## 1. Introdução
Este estudo de caso apresenta um Sistema Especialista para Diagnóstico Médico utilizando conceitos fundamentais de lógica para computação:
- **Substituição**
- **Unificação**
- **Resolução**
Esses conceitos são amplamente usados em mecanismos de inferência, motores de regras e sistemas de IA simbólica — incluindo Prolog.
---
## 2. Cenário Geral
Um hospital deseja automatizar parte do processo de triagem. O sistema deve analisar sintomas relatados e **inferir possíveis diagnósticos**, utilizando uma base de conhecimento estruturada em regras lógicas.

O sistema trabalha com um conjunto reduzido de doenças e sintomas para fins de demonstração.

**Sintomas:** febre, dor de cabeça, tosse, dor muscular, fadiga  
**Doenças:** gripe, resfriado, covid  

**Predicados utilizados:**

- `TemSintoma(paciente, sintoma)`
- `SugereDoenca(sintoma, doença)`
- `Diagnostico(paciente, doença)`
  
---

## 3. Base de Conhecimento (Exemplo)

```prolog
febre(paciente1).
tosse(paciente1).
dores_musculares(paciente1).
regra(gripe, [febre(X), tosse(X), dores_musculares(X)]).
regra(resfriado, [tosse(X), congestao(X)]).
regra(covid, [febre(X), tosse(X), falta_de_ar(X)]).
```

### 3.1 Fatos

```prolog
TemSintoma(ana, febre).
TemSintoma(ana, tosse).
TemSintoma(ana, dorCabeca).

TemSintoma(joao, fadiga).
TemSintoma(joao, dorMuscular).
```

### 3.2 Regras (Sintoma → Doença)

```prolog
SugereDoenca(febre, gripe).
SugereDoenca(tosse, gripe).
SugereDoenca(dorCabeca, gripe).

SugereDoenca(febre, covid).
SugereDoenca(fadiga, covid).

SugereDoenca(dorMuscular, resfriado).
```

### 3.3 Regra Geral de Diagnóstico

```prolog
∀p ∀s ∀d ( TemSintoma(p, s) ∧ SugereDoenca(s, d) → Diagnostico(p, d) )
```

---

## 4. Aplicando Substituição

A **substituição** consiste em substituir variáveis por termos concretos.
Exemplo:
- Variável: `X`
- Substituição: `{ X/paciente1 }`
Aplicando à regra da gripe:
```prolog
[febre(X), tosse(X), dores_musculares(X)]
↓ substituição { X/paciente1 }
[febre(paciente1), tosse(paciente1), dores_musculares(paciente1)]
```

Regra original:

```prolog
TemSintoma(p, s) ∧ SugereDoenca(s, d) → Diagnostico(p, d)
```

Substituição 1
```prolog
σ₁ = { p/ana, s/febre }
```


Resultado:

```prolog
TemSintoma(ana, febre) ∧ SugereDoenca(febre, d) → Diagnostico(ana, d)
```

Substituição 2
```prolog
σ₂ = { d/gripe }
```

Resultado final:

```prolog
TemSintoma(ana, febre) ∧ SugereDoenca(febre, gripe) → Diagnostico(ana, gripe)
```

---
## 5. Aplicando Unificação
A **unificação** tenta tornar dois termos iguais, criando uma substituição válida.
Exemplo de tentativa de unificação:
```
febre(X) ↔ febre(paciente1)
```
Resultado:
```
{ X/paciente1 }
```
Se todos os predicados em uma regra conseguem ser unificados com fatos conhecidos, ela pode ser aplicada.

### Exemplo 1

Unificar:
```prolog
TemSintoma(p, s)
TemSintoma(ana, febre)
```

MGU (Most General Unifier):

```prolog
μ = { p/ana, s/febre }
```

### Exemplo 2

Unificar:
```prolog
SugereDoenca(s, d)
SugereDoenca(febre, gripe)
```

MGU:
```prolog
μ = { s/febre, d/gripe }
```

---
## 6. Resolução para Inferência

A **resolução** é usada pelo sistema para encadear fatos e regras, concluindo novos fatos (diagnósticos).

Processo para o paciente:
1. O sistema consulta a regra:

```
regra(gripe, [febre(X), tosse(X), dores_musculares(X)]).
```

2. Tenta unificar cada condição com a base de fatos.

3. Se todas as unificações são bem-sucedidas, a conclusão é ativada:

```
diagnostico(X, gripe).
```

4. Como todas são verdadeiras para `paciente1`, o sistema deduz:

```
diagnostico(paciente1, gripe).
```
---

## 7. Resultado Final
O sistema especialista conclui:
```
Paciente: paciente1
Diagnóstico provável: gripe
```

> O que a Ana tem?
> O que mais poderiamos adicionar nesse sistema?
> Quais outros resultados poderiamos obter através de outras substituições?

> Escolha outro estudo de caso e demonstre como a **substituição**, a **unificação** e a **resolução** podem ser aplicadas nesse sistema.
> A equipe escolhe um estudo de caso sistema (neste caso, o sistema de diagnóstico), cada membro apresenta um caso de dados (outro paciente, com outro sintoma e possivelmente outro diagnóstico). 
