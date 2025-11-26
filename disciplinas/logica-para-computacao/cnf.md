# O Princípio da Resolução

Forma normal conjuntiva (FNC/CNF). Algoritmo de resolução proposicional.
  <img width="1146" height="217" alt="image" src="https://github.com/user-attachments/assets/7ec7b913-5e92-4120-85b4-c5d3d28d4c81" />
  <img width="1032" height="128" alt="image" src="https://github.com/user-attachments/assets/984a2c83-ca0b-46a0-8a22-08580c129f5f" />

  - https://www.youtube.com/watch?v=P83EaNMPAkE - Aplicação FNC
    - Uma Forma Normal Conjuntiva (FNC) é uma forma de escrever proposições lógicas como uma conjunção de cláusulas, em que cada cláusula é uma disjunção de literais. Para transformar uma expressão lógica comum em FNC, aplica-se inicialmente a eliminação de implicações, depois movem-se as negações até os literais, e por fim distribuem-se conectivos para reescrever a expressão como uma conjunção de disjunções. Aprender FNC é importante porque muitos métodos de prova e algoritmos de lógica dependem dessa forma padronizada para funcionar corretamente.
      
  - https://www.youtube.com/watch?v=7r0ahPsbcVA - FNC por construção da fórmula
    - Para converter uma expressão lógica qualquer em FNC:
      Começa-se eliminando implicações e equivalências, reescrevendo-as em termos de negações, conjunções e disjunções.
      Em seguida, aplica-se as leis de De Morgan quando necessário para mover negações para dentro, até incidir apenas sobre literais.
      Depois, distribui-se disjunções sobre conjunções (quando apropriado), de modo a obter uma forma em que o formato final seja (cláusula 1) ∧ (cláusula 2) ∧ ···, cada cláusula sendo algo como (lit1 ∨ lit2 ∨ …).
        - O vídeo mostra esse processo passo a passo

  - https://youtu.be/maPFYOYbPHw?si=8iJ9xBmuNNCM-T1U - FNC pela tabela verdade
    
- O Princípio da Resolução: Aplicações em problemas computacionais.
  - [Verificador de consistência](https://brennofv.github.io/Verificador-de-Consistencia/) Brenno Franco Vergitz, Eduardo Michel Karschimarski, Gustavo Gracia Molina, Rafael Henrique Reichardt
  - [Prova Automática de Teoremas](https://gustavoleandroalmeidadeandrade.github.io/prova-de-teoremas/) Gustavo Leandro, Gustavo Lopes, Leonardo Molina e Rômulo Braun.
