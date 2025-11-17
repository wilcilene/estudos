#Pré requisitos:
(as ferramentas podem ser susbtituídas, mas como o tutorial é para uso no IFC, optou-se por indicar as ferramentas que são, por padrão, utilizadas nos laboratórios)

- Eclipse IDE
- MySQL Server instalado
- MySQL Workbench (opcional)
- Driver JDBC do MySQL (mysql-connector-j)
  - https://dev.mysql.com/downloads/connector/j/ (em windows escolha "plataform independent e baixe o *.ZIP Archive)
- Descompacte o arquivo (preste atenção no diretório em que está descompactando)

#Crie um projeto Java (no Eclipse)
- Abra o Eclipse
- Escolha File -> New -> Java Project
- Escolha um nome (Sugestão: ConexaoMySQL, se escolher outro, adeque o código)
- Clique em Finish

#Adicione o Driver JDBC ao seu projeto
- Clique com o botão direito no projeto
- em Build Path -> Configure Build Path escolha a guia Libraries e Add External JARs
- Selecione o arquivo mysql-connector-j-8.x.x.jar (no diretório onde descompactou o *.ZIP anteriormente)
- Clique em Apply and Close

 #Crie uma classe de conexão
 - Clique com o botão direito em src
 - Escolha New -> Package
 - Escolha um nome (Sugestão: br.com.conexao, se escolher outro, adeque o código)
 - Dentro dele, crie uma classe
 - New -> Class
 - Escolha um nome (Sugestão: Conexao)
> Nessa classe vamos importar as bibliotecas java.sql Connection, DriverManager e SQLException
   Connection possibilita o envio de comandos SQL (select, insert, update, delete) bem como abrir transações com o banco e fechar a conexão após o uso.
   DriverManager permite gerenciar os drivers JDBC instalados e criar conexões com o banco.
   SQLException facilita o tratamento de exceções
<!--
   

   Obs: Você pode acessar os códigos em:
