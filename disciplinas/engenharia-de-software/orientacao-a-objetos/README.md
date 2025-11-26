# Exemplo de Herança e Polimorfismo em Java

Este repositório contém exemplos didáticos desenvolvidos para auxiliar os estudantes na compreensão de conceitos fundamentais da **Programação Orientada a Objetos (POO)** utilizando Java.

Os exemplos demonstram:

- Herança  
- Classes abstratas  
- Sobrescrita de métodos  
- Encapsulamento  
- Polimorfismo  
- Relacionamento entre classes  

 Os códigos foram desenvolvidos para serem utilizados em aulas, mas auxiliam também em estudos individuais.

---

## Arquivos

### **Pessoa.java**
Classe abstrata que define atributos e comportamentos comuns a todas as Pessoas.

### **Fisica.java**
Representa uma pessoa física, que possui CPF.

### **Juridica.java**
Representa uma pessoa jurídica, com CNPJ.

### **Principal.java**
Demonstra criação de objetos, polimorfismo e uso dos métodos.

---
## Como Executar os Exemplos

### Opção 1:  pelo Terminal (sem IDE)

Acesse a pasta com os arquivos *.java

Compile os arquivos:

''' 
javac *.java
'''

Execute:

'''
java Principal
'''

### Opção 2: Com Eclipse, IntelliJ ou NetBeans

Crie um novo projeto Java

Copie os arquivos para src

Execute a classe Principal

### Opção 3: Com VSCode

Instale a extensão Extension Pack for Java

Abra a pasta do projeto

Execute Principal.java

---
## Para estudar


### 1. Comece pela classe Pessoa

Observe abstração

Método abstrato getDocumento()

Encapsulamento

### 2. Compare Fisica e Juridica

Ambos herdam Pessoa

Cada um implementa getDocumento()

Veja o uso de construtores e atributos próprios

### 3. Analise a classe Principal

Instanciação

Polimorfismo

Impressão amigável via toString()

###  4. Tente modificar o código

Criar novos tipos de pessoa

Adicionar validações

Melhorar os métodos()

Criar coleções de pessoas

etc...
