# 1. Introdução

Este projeto tem como objetivo modelar, formalizar e analisar logicamente um **sistema de controle de acesso** baseado em regras, permissões e condições de segurança. A partir de um problema realista, aplica-se lógica proposicional, lógica de predicados, dedução, resolução, unificação e aspectos computacionais com apoio de ferramentas.

O cenário escolhido representa um sistema que concede acesso a uma área restrita somente quando certas condições são satisfeitas.

---

# 2. Descrição do Problema e Modelagem Conceitual

## 2.1 Problema
Em uma empresa, um usuário só pode acessar a sala de servidores se as seguintes condições forem satisfeitas:

- Ele possuir credencial válida.
- O horário for permitido.
- O usuário for funcionário autorizado.
- Nenhum alerta de segurança estiver ativo.

Além disso:

- Se houver alerta de segurança, nenhum acesso é permitido.
- Visitantes nunca podem entrar, mesmo com credencial temporária.

## 2.2 Entidades
- Usuário  
- Credencial  
- Horário  
- Status de segurança

## 2.3 Regras informais
1. Se usuário tem credencial válida ∧ é funcionário autorizado ∧ horário permitido → acesso permitido  
2. Alerta de segurança → ¬acesso  
3. Visitante → ¬acesso  
4. Funcionário autorizado → possui cadastro ativo  

---

# 3. Formalização em Lógica Proposicional

## 3.1 Proposições
- C: usuário possui credencial válida  
- A: usuário é autorizado  
- H: horário permitido  
- S: alerta de segurança ativo  
- V: usuário é visitante  
- P: acesso permitido  

## 3.2 Regras formais
1. (C ∧ A ∧ H) → P  
2. S → ¬P  
3. V → ¬P  
4. A → C   *(funcionário autorizado sempre tem credencial válida)*

## 3.3 Análise semântica (exemplo)
Avaliação da consistência:  
Se S é verdadeiro, então P é falso (Regra 2).  
Se V é verdadeiro, P é falso (Regra 3).  
Se (C ∧ A ∧ H) é verdadeiro e S é falso e V é falso, então P é verdadeiro.  
O sistema é consistente: não há contradições internas.

---

# 4. Simplificação e Equivalências

Regra 1: (C ∧ A ∧ H) → P  
Equivalência: ¬(C ∧ A ∧ H) ∨ P  
Aplicando De Morgan no antecedente: (¬C ∨ ¬A ∨ ¬H) ∨ P

---

# 5. Dedução Natural

## Prova: Se o usuário é funcionário autorizado e horário é permitido e NÃO há alerta de segurança → acesso permitido.

Premissas:
1. A → C  
2. (C ∧ A ∧ H) → P  
3. H  
4. A  
5. ¬S   (não usado diretamente neste exemplo proposicional)

### Prova:
1. A                  Premissa  
2. A → C              Premissa  
3. C                  →E 1,2  
4. H                  Premissa  
5. C ∧ A              ∧I 3,1  
6. (C ∧ A) ∧ H        ∧I 5,4  
7. P                  →E 6,2  

Conclusão: P

---

# 6. Resolução Proposicional

Converter regra 1 para CNF:

(C ∧ A ∧ H) → P  
≡ ¬C ∨ ¬A ∨ ¬H ∨ P  (já em CNF)

Verificação por refutação: provar que (C ∧ A ∧ H) → P.

Supondo o contrário:  
- C  
- A  
- H  
- ¬P  

Cláusulas:
1. {¬C, ¬A, ¬H, P}  
2. {C}  
3. {A}  
4. {H}  
5. {¬P}

Resolução:
- Res(1,5) → {¬C, ¬A, ¬H}  
- Res({¬C, ¬A, ¬H}, {C}) → {¬A, ¬H}  
- Res({¬A, ¬H}, {A}) → {¬H}  
- Res({¬H}, {H}) → {} ⟂

Contradição obtida. Logo, a implicação é válida.

---

# 7. Formalização em Lógica de Predicados

## Predicados
- Cred(u) — usuário possui credencial válida  
- Aut(u) — usuário é autorizado  
- Hor(h) — horário é permitido  
- Alert — há alerta de segurança  
- Visit(u) — usuário é visitante  
- Perm(u) — acesso permitido ao usuário  

## Regras em lógica de predicados
1. Cred(u) ∧ Aut(u) ∧ Hor(h) ∧ ¬Alert → Perm(u)  
2. Alert → ∀u ¬Perm(u)  
3. Visit(u) → ¬Perm(u)  
4. Aut(u) → Cred(u)

---

# 8. Semântica – Modelo

## Domínio
U = {joao, maria, visitante1}  
H = {manhã, tarde}

## Interpretação
- Aut(joao) = verdadeiro  
- Cred(joao) = verdadeiro  
- Visit(visitante1) = verdadeiro  
- Alert = falso  
- Hor(manhã) = verdadeiro  

Sob esse modelo:
- Perm(joao) é verdadeiro.  
- Perm(visitante1) é falso.  

---

# 9. Substituição e Unificação

## Substituição exemplo
σ = { u/joao }  
Aplicando σ em Aut(u): Aut(joao)

## Unificação exemplo
Termos: f(x, g(y)) e f(a, g(z))  
Unificação ocorre com:  
{ x/a, y/z }

---

# 10. Resolução em Lógica de Predicados

Demonstrar que um visitante não tem acesso.

Premissas:
1. Visit(u) → ¬Perm(u)  
2. Visit(visitante1)  

Forma clausal:
1. ¬Visit(u) ∨ ¬Perm(u)  
2. Visit(visitante1)

Resolução:
Res(1,2σ) onde σ={u/visitante1} → ¬Perm(visitante1)

---

# 11. Parte Computacional (Código)

Exemplo em Prolog:

```prolog
aut(joao).
cred(joao).
hor(manhanha).
visit(visitante1).

perm(U) :- aut(U), cred(U), hor(manhanha), not(alerta).
perm(U) :- visit(U), fail.

alerta :- fail.  % nenhum alerta ativo

