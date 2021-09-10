# client-app
[![NPM](https://img.shields.io/npm/l/react)](https://github.com/Arthur-Rocha-Lima/client-app/blob/master/LICENSE) 

# Sobre o projeto

Client-App é um aplicação springBoot construída durante o curso Angular 9 + Spring Boot 2.2: Fullstack Completo e Atualizado [Dougllas Sousa] (https://www.udemy.com/course/full-stack-angular9-spring-boot/ "Site do curso").

A aplicação consiste em um sistema que é possível cadastrar clientes e serviços, e em cima desses clientes é possível filtrar por data para pesquisar quais serviços foram usados por tal cliente.

Ainda vou implementar umas melhorias para a implementação de um banco de dados PostgreSQL e subir em algum ambiente, como o hekoru por exemplo, além de outras alterações no projeto.

## Tela login
![Login](https://github.com/Arthur-Rocha-Lima/assets/blob/main/login.jpeg)

## Tela cliente
![Cliente](https://github.com/Arthur-Rocha-Lima/assets/blob/main/clientes-lista.jpeg)

## Tela serviço prestado
![Servico prestado](https://github.com/Arthur-Rocha-Lima/assets/blob/main/servicos-prestados-lista.jpeg)

# Tecnologias utilizadas
## Back end
- Java
- Spring Boot
- JPA / Hibernate
- Maven
## Front end
- HTML / CSS / JS / TypeScript
- Angular
- Bootstrap

# Como executar o projeto

## Back end
Pré-requisitos: Java 8

```bash
# clonar repositório
git clone https://github.com/Arthur-Rocha-Lima/client-app/tree/master/Clientes-app

# entrar na pasta do projeto back end
cd clientes

# executar o projeto
./mvnw spring-boot:run
```

## Front end web
Pré-requisitos: npm

```bash
# clonar repositório
git clone https://github.com/Arthur-Rocha-Lima/client-app/tree/master/clientes

# entrar na pasta do projeto e instalar dependências
npm install

# executar o projeto
npm serve
```

# Autor

Arthur Rocha Lima
https://www.linkedin.com/in/arthur-rocha-lima-688328176/
