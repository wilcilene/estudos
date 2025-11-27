# Fundamentos da Engenharia de Software e Modelagem Orientada a Objetos

Na visão de Pressman, a Engenharia de Software é estruturada em quatro camadas apresentadas de cima para baixo.
No topo estão as **Ferramentas**, responsáveis por automatizar ou apoiar as atividades de desenvolvimento, oferecendo maior produtividade e padronização.

Logo abaixo encontram-se os **Métodos**, que definem como cada tarefa será realizada, englobando técnicas de análise, modelagem, projeto, implementação, testes e manutenção.
Abrangem um conjunto de tarefas que incluem:
– Comunicação;
– Análise de requisitos;
– Modelagem de projeto;
– Construção de programas;
– Testes e manutenção.

Na sequência vem o **Processo**, que organiza e orienta o desenvolvimento por meio de etapas, ciclos, práticas e artefatos, garantindo coerência e controle. O processo define o arcabouço (molde) para as tarefas 
necessárias para construção de um software com alta qualidade. Define itens como:
– Aplicação dos métodos técnicos;
– Produção dos produtos de trabalho (ex. relatórios, formulários);
– Estabelecimento dos marcos;
– Gestão das modificações necessárias.

Na base de toda a estrutura está o **Foco na Qualidade**, que sustenta e direciona todas as demais camadas, assegurando que o software seja confiável, eficiente e adequado às necessidades do usuário.

<p align="center">
  <img width="415" height="174" 
       alt="image"
       src="https://github.com/user-attachments/assets/2636a501-fe38-4dcb-96f2-d8692e2e341b">
</p>

## Modelagem e documentação de software (revisão de conceitos OO)

A modelagem conceitual de software é uma etapa essencial dentro do processo de desenvolvimento e compõe uma subárea da Engenharia de Software (Doll, 2016).
Para compreender e construir sistemas de qualidade, é necessário entender como esta área se organiza.

<p align="center">
  <img width="841" height="509" 
       alt="image"
       src="https://github.com/user-attachments/assets/5ec375f9-8349-497e-ba08-33352f1d8f36">
</p>

Vamos revisar alguns conceitos para ajudar a entender a modelagem de software: 
Obs: Você também encontra esse conteúdo nos livros do Deitel & Deitel

### Objetos:
Ao olhar ao seu redor, você identifica objetos (animados ou inanimados).
– Bola, toalha, gato, cão, etc.
Observe que esses objetos possuem características e comportamentos próprios.

Todos tem atributos:
  - Cor, tamanho, formato, espécie, etc.

Todos exibem comportamentos:
  – Rolam, absorvem, miam, ronronam, etc.

Para esse conjunto de objetos de exemplo é possível identificar semelhanças.
– Gatos e cães são animais.
e também diferenças.
– Bolas e Toalhas possuem diferentes formatos e funcionalidades.
- Gatos miam e cães latem
  
### Orientação a Objetos

Exemplo de classes com orientação a objetos: [Ver](orientacao-a-objetos)

A programação orientada a objetos inclui:

- Classes, objetos, atributos e métodos

  - Classe: modelo ou estrutura geral

  - Objeto: instância concreta da classe

  - Atributos: dados armazenados

  - Métodos: ações executadas pelo objeto

- Abstração
  
<img width="506" height="268" alt="image" src="https://github.com/user-attachments/assets/1c63d7db-ad98-49bb-ada0-a3fd2e65517d" />

Foca somente nos elementos essenciais.

Uma classe abstrata é uma especificação conceitual para outras classes.
Ela fornece um modelo para geração de outras classes, sem ser instanciada (super classe).

- Herança
  
<img width="506" height="144" alt="image" src="https://github.com/user-attachments/assets/b7be8d2e-db9f-491f-ada7-dcb41858413c" />

Permite que uma classe herde características de outra.

Facilita reutilização e especialização. Lembre que copiar e reutilizar código são ações distintas.
A classe “filha” herda as características da classe “mãe” (superclasse) e pode ter características próprias (Pantoni).

- Polimorfismo
  
<img width="376" height="171" alt="image" src="https://github.com/user-attachments/assets/b1dc8f3a-46f8-444d-8251-e81e8d149489" />

Polimorfismo é o princípio pelo qual duas ou mais classes derivadas de uma mesma superclasse podem invocar métodos que têm a mesma identificação (assinatura) mas comportamentos distintos, especializados para cada classe derivada, usando para tanto uma referência a um objeto do tipo da superclasse.
Um mesmo método pode se comportar de diferentes formas conforme a classe que o implementa.

- Dependência
  
<img width="495" height="193" alt="image" src="https://github.com/user-attachments/assets/1299388b-2978-4c47-90ea-7a96e068bff2" />

Representa uso temporário de recursos de outra classe.
É importantíssimo utilizar com bom senso as dependências, procurando sempre isolar as classes quando possível, focando sempre no desacoplamento (Ventura).

- Encapsulamento

“(…) em programação orientada a objetos significa separar o programa em partes, o mais isolado possível”

Protege os dados internos do objeto.

Controla o acesso a atributos e métodos.

- Visibilidade

Define quem pode acessar cada elemento da classe:

public (+): visível para todas as classes

protected (#): classes do mesmo pacote e subclasses

private (-): apenas dentro da própria classe

package-private (~): classes do mesmo pacote
<img width="1427" height="395" alt="image" src="https://github.com/user-attachments/assets/b87cca98-304f-4d11-b25e-890a7a19a1d8" />


## Modelagem e documentação de software

A modelagem do sistema permite:

– Analisar os requisitos do software

– Determinar os objetos envolvidos

– Determinar as características (atributos) desses objetos

– Determinar os comportamentos (métodos) desses objetos

– Compreender como os objetos interagem entre si para atender os requisitos do sistema

– Eliminar ambiguidades

– Facilitar a comunicação entre todos os envolvidos (usuários, equipe de desenvolvimento, equipe de qualidade, stakeholders, ...)

> Modelar significa estruturar o pensamento antes da construção do software.

Deitel e Deitel destacam que “A Modelagem OO fornece uma maneira natural e intuitiva de visualizar os processos do projeto de software”, pois permite modelar objetos por suas características, comportamentos e relações como no mundo real.

### Modelagem Orientada a Objetos (MOO)

Representa objetos conforme o mundo real.

> “As classes estão para os objetos assim como as plantas arquitetônicas estão para as casas”. 
Podemos instanciar várias casas a partir de uma planta (classe) mas não podemos cochilar na sala da planta, apenas na sala real (objeto).

Modela comportamentos e comunicações. As classes se relacionam com outras classes. 
A classe ContaCorrente por exemplo, se relaciona/associa com Cliente, Caixa, etc. 

A Orientação a objetos permite combinar classes, o que facilita reutilização e evolução do sistema.
Deitel & Deitel desde o primeiro livro indicam que 
> “Os três fatores que mais afetam o futuro do desenvolvimento de software são:
> -Reutilização,
> - reutilização e
> - reutilização”. 

Isso aumenta a economia de tempo e esforço que refletem em maior qualidade. 
O que facilita a manutenção do software conforme crescimento organizacional.

PseudoCódigo e rabisco são suficientes para equipes de softwares pequenos.
Mas, a empresa pode crescer e o software vai crescer! Pense nisso...

Embora existam muitas formas de realizar análise e modelagem de softwares OO, uma única linguagem gráfica é capaz de comunicar os resultados desses processos: [UML - Unified Modeling Language](https://www.omg.org/uml/).
Estudaremos mais sobre a UML e aprenderemos como compreender e representar os diagramas nos próximos tópicos. 
Você perceberá que é uma linguagem bem intuitiva, e que facilmente você consegue pegar um diagrama pronto e entender o que ele representa mesmo sem estudar UML. 
Mas para isso, alguém precisará criá-los, então nosso objetivo é aprender também, como criar esses diagramas para que outros envolvidos no processo possam entende-lo com **facilidade** e **agilidade**.
