# API Cadastro de funcionários.

Node.js, Express & MySQL: CRUD Simples

Um aplicativo CRUD simples e básico (Create, Get, GetAll, Update, Delete) usando Node.js, Express, MySQL

## Passos para rodar o projeto

### 1º Passo
Criar o banco de dados:
```bash
CREATE DATABASE IF NOT EXISTS projeto_crud;
```
### 2º Passo
Execute os comandos abaixo no terminal:
```bash
npm install
```
### 3º Passo
Criação da tabela, executar comando abaixo:
```bash
node database.js up
```
### 4º Passo
Execute o comando abaixo para Inciar a API:
```bash
npm start
```
### 5º Passo
Após o servidor iniciado usar Postman ou outro de sua preferência:
```bash
**URL: localhost:3000/api/funcionarios/**

GET:
getAll - localhost:3000/api/funcionarios/
getById - localhost:3000/api/funcionarios/1

POST:
{
   "primeiro_nome":"Joana",
   "ultimo_nome":"D'Arc",
   "email":"joanadarc@gmail.com",
   "telefone":"3333333333",
   "organizacao":"Funcionaria",
   "designacao":"Front-End",
   "salario":2500.0
}

PUT:
{
   "primeiro_nome":"Jhon",
   "ultimo_nome":"Dias",
   "email":"jhondias@gmail.com",
   "telefone":"9999999999",
   "organizacao":"Funcionaria",
   "designacao":"Back-End",
   "salario":2500.0
}

DELETE:
deleteById - localhost:3000/api/funcionarios/1
deleteAll - localhost:3000/api/funcionarios/
```