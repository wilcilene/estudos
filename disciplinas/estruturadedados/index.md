# Introdução à estrutura de dados
Para melhor entender o conteúdo de “Estrutura de dados” é importante conhecer o funcionamento de um computador. Stallings (2017) afirma que “um computador é um sistema complexo” pois, pode conter milhões de componentes eletrônicos. Com o objetivo de revisar alguns conceitos importantes e melhor entender os computadores, esse post apresenta a definição de arquitetura e de organização, as funções e os níveis de um computador.

Inicialmente vamos rever alguns conceitos importantes, seguindo a definição proposta por Stallings (2017) .

Arquitetura de computador: atributos de um sistema visíveis ao programador – possuem impacto direto sobre a execução lógica de um programa. O ISA (Instruction Set Architecture) por exemplo, define os formatos de instruções, códigos de operação da instrução (opcodes), registradores, memória de dados e instrução; o efeito das instruções executadas nos registradores e na memória; e um algoritmo para o controle da execução das instruções.
– Definição de um inteiro com 32 bits. Operação de soma.

Organização de computador: unidades operacionais e suas interconexões que realizam as especificações arquiteturais. São detalhes de hardware transparentes ao programador, como sinais de controle, interfaces entre o computador e periféricos e a tecnologia de memória utilizada.
– Frequência de clock. Posições de memória.

# Funções de um computador
Desde a arquitetura proposta por Von Neumann, é necessário que os computadores apresentem quatro as funções básicas: Processamento, Armazenamento, Movimentação e Controle. A Figura 01 apresenta a visão de Stallings (2010) sobre essas funções. Se você já está familiarizado com elas, pule a leitura para a Figura 01.
- Processamento de dados: Os dados podem assumir diversas formas, em diferentes intervalos e necessitarem de diferentes operações de processamento. Não importam as condições, o computador deve ser capaz de processá-los.
- Armazenamento de dados: Há dois tipos de armazenamento de dados. O armazenamento temporário, que mantém um dado armazenado (em registradores, memória RAM, etc…) apenas o tempo necessário para ser utilizado e depois o descarta. E o armazenamento permanente, que representa o armazenamento de dados em arquivos que são salvos pelo computador (em SSD, pendrive, etc…) e permitem recuperação, edição e exclusão dos mesmos a longo prazo.
- Movimentação de dados: Se há armazenamento, recuperação, processamento e edição de dados, o computador deve ser capaz de movimentar esses dados. Seja entre um arquivo e o processador, entre um arquivo e outro ou entre posições de memória, etc. é necessário que ocorra movimentação da dados.
- Controle: É necessário controlar a movimentação, o armazenamento e o processamento desses dados. Afinal, qual é a operação? De onde vem os valores? Para onde vão os resultados? “Uma unidade de controle gerencia os recursos do computador e coordena o desempenho de suas partes em resposta a essas instruções”.

<img width="1001" height="457" alt="image" src="https://github.com/user-attachments/assets/bcada3b8-c554-4257-9f18-fe80be14030b" />
<sub>Figura 01 – Uma visão Funcional do computador (STALLINGS, 2010)</sub>

# Níveis de um computador
Do ponto de vista de usuário tudo parece gráfico, mas para o computador tudo é pulso elétrico (bits de valor, de endereço ou de instrução a serem armazenados, lidos ou processados,). Tanenbaum (2013) apresenta a Figura 02 para explicar um computador de seis níveis. Nessa Figura é possível visualizar os níveis indicados, embaixo de cada nível o método de suporte para o mesmo e o nome do programa que o suporta entre parênteses. <sub>Os parágrafos após a Figura 02, tratam brevemente cada um dos níveis, se você os compreende pode pular a leitura.</sub>

<img width="972" height="611" alt="image" src="https://github.com/user-attachments/assets/0beb671a-195b-4ca4-81e1-e74b40ee84d8" />
<sub>Figura 02 – Um computador com seis níveis (TANENBAUM, 2013)</sub>

Em uma visão Up-Down (de cima para abaixo), observa-se no topo o nível 5, nível de <u>linguagem orientada a problema</u>. Nesse nível encontram-se as linguagens de alto nível utilizadas pela maioria dos programadores de aplicações. Programas escritos nessas linguagens em geral são traduzidos para os níveis 3 ou 4 por tradutores conhecidos como compiladores, embora às vezes sejam interpretados, em vez de traduzidos.

O nível 4 representa o nível de <u>linguagem de montagem</u> (Assembly), ele permite que programadores escrevam códigos para os níveis 1, 2 e 3 em uma forma não tão desagradável quanto às linguagens de máquina virtual em si. Programas em linguagem de montagem são primeiro traduzidos para linguagem de nível 1, 2 ou 3, e só depois podem ser interpretados pela máquina.

No nível 3, nível de <u>máquina de sistema operacional</u>, são encontradas instruções definidas no ISA (*Intruction Set Architecture*), essas intruções são executadas direto pelo controle do hardware (microprograma). Esse nível também possui um conjunto de novas instruções, organização de memória diferente, capacidade de executar dois ou mais programas simultaneamente e diversos outros recursos gerenciados pelo Sistema Operacional (que roda no nível 2). Desse nível para baixo as instruções deixam de ser compreensíveis para a grande maioria dos programadores de aplicações, pois passam a ser expressas por linguagens numéricas (estudadas por programadores de sistemas).

O nível 2 <u>ISA</u> é o nível apresentado pelos manuais, eles descrevem as instruções executadas de modo interpretativo pelo microprograma ou circuitos de execução do hardware. Em casos com dois ou mais interpretadores, é necessário fornecer dois ou mais manuais de referência da “linguagem de máquina” (um para cada interpretador).

No nível 01, de <u>microarquitetura</u>, se vê um conjunto de registradores que formam uma memória local e um circuito chamado ULA – Unidade Lógica e Artitmética (ou *ALU – Arithmetic Logic Unit*). Em algumas máquinas, a operação do caminho de dados é controlada por um programa chamado microprograma, em outras, diretamente pelo hardware. Em máquinas com controle do caminho de dados por software, o microprograma é um interpretador para as instruções no nível 2.

No nível 0, nível <u>lógico digital</u>, os objetos são chamados de portas (ou gates). Cada porta tem uma ou mais entradas digitais (sinais representando 0 ou 1) e calcula como saída alguma função simples dessas entradas, como AND (E) ou OR (OU). As portas podem ser combinadas para formar uma memória de 1 bit, que consegue armazenar um 0 ou um 1. As memórias de 1 bit podem ser combinadas em grupos de (8, 16, 32, 64) para formar registradores.

Abaixo do nível zero poderia ser considerado mais um nível, que poderia ser denominado <u>nível de dispositivo</u>. Esse nível representaria transistores individuais. Normalmente descrito por autores da área de eletrônica.


# Algoritmos

Algoritmos determinam a execução de procedimentos computacionais que de forma geral, transformam entradas em saídas. Ahh, eles precisam ser bem definidos, se não, nada funciona! Cormen e Leiserson (2017) afirmam “que devemos considerar algoritmos como uma tecnologia, lado a lado com hardware rápido, interfaces gráficas do usuário, sistemas orientados a objetos e redes”.

Um exemplo muito comum, encontrado na literatura é o problema de ordenação. Tem se a necessidade de ordenar uma lista de códigos em ordem crescente. Formalmente pode-se definir esse problema como:

Entrada: Uma sequência de 'n' números quaisquer (que provavelmente estarão desordenados). 
'E = [n1, n2, n3…nn]' ->
'E = [ 3, 1, 2, 4, 5]'

Saída: Uma sequência ordenada dos n números recebidos. 
'S = [n1′, n2′, n3’…nn’]' tal que 'n1′ ≤ n2′ ≤ n3’… ≤ nn'
'S = [1, 2, 3, 4, 5]'

Para solucionar esse problema, é necessário desenvolver uma sequência de procedimentos que recebam o conjunto E, comparem de algum modo, reorganizem os valores de forma ordenada e devolvam o conjunto S. Algoritmos de ordenação serão estudados com mais ênfase nos próximos posts, pois é um problema comum na vida real dos programadores e permite encontrar ou programar uma ampla gama de diferentes soluções. A seguir é apresentado um algoritmo simples de ordenação, implementado em Python, o BubbleSort! 
Para outros algoritmos de ordenação acesse: https://github.com/wilcilene/ordenacao
```md
def bubbleSort(eA):
    if len(eA) <= 1:
        sA = eA
    else:
        for j in range(len(eA)):
            for i in range(len(eA) - 1):
                if eA[i] > eA[i + 1]:
                    temp = eA[i + 1]
                    eA[i + 1] = eA[i]
                    eA[i] = temp
        sA = eA
    return sA
```python

Referências:
Cormen, Thomas, Leiserson, Charles,Rivest, Ronald. Algoritmos. GEN LTC.
Stallings, William. Arquitetura e organização de computadores.
Tanenbaum, Andrew S. Organização Estruturada de Computadores.
