# Encurtador de URL

O intuito desse repositorio é realizar o encurtamento de URL.

## Especificações do Repositorio
- Linguagem de programação: Java versão 11
- Framework para back-end: Spring boot
- Framework para front-end: Angular CLI na versão 13.3.1
- Banco de Dados: PostgreSQL
- IDE utilizada: Intellij IDE

## Criação do projeto
- Primeira etapa:
  - Criar o projeto Spring boot no `Spring Initializr` com as seguintes dependências:
    - Web
    - JPA
    - Postgres
    - Lombok
    - Validation
    - DevTools

  - Criar o projeto Angular com o o comando:
    - ng new frontend --minimal

- Segunda etapa:
  - Criação das Entities do projeto que foram:
    - Usuario: Com os atributos(id, login, password)
    - Url: Com os atributos(id, urlNormal, urlShort, dateCreate, user)
  
  - Criação dos repositories
  - Criação dos service
  - Criação do mapper
  - Criação dos controlles
  - Adiconar o Spring Security
    - Foi adicionado o security para que se tenha um controle de usuarios acessando o sistema
  - Criando as classes para tratar a segurança de dados

- Terceira etapa:
  - Criação de components do front
    - Header, Home, Nav, Login e Models
  - Realização da implementação das configurações de securança do sistema
  - Adicionando o angular material no front com o comando:
    - ng add @angular/material
  - Fazendo a ligação com o back-end
