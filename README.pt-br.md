<h1 align="center" style="color:#0091EA; font-weight:bold;">
     <img 
    src="https://user-images.githubusercontent.com/42190754/123525459-3874e700-d6a7-11eb-81e4-107f59460cf1.png"
    float="center"
    width="100" height="100"
    />
    <br/>
  <a href="#"> Valoriza </a>
</h1>

<p align="center">
 <a href="#ℹ%EF%B8%8F-sobre-o-projeto">Sobre</a> •
 <a href="#%EF%B8%8F-funcionalidades">Funcionalidades</a> •
 <a href="#-tecnologias">Tecnologias</a> •
 <a href="#-como-executar-o-projeto">Como executar</a> •
 <a href="#-documentação-API">Documentação</a> •
 <a href="#-autores">Autores</a> •
 <a href="#-licença">Licença</a>
</p>

## ℹ️ Sobre o projeto

API Restful para enviar elogios criado na [RocketSeat](https://rocketseat.com.br/) Next Level Week 6.0, usando TypeScript com Node.js.

---

## ⚙️ Funcionalidades

- [x] Cadastrar Usuário
- [x] Login
- [x] Cadastrar Tag
- [x] Cadastrar Elogios
- [x] Lista de elogios enviados pelo usuário
- [x] Lista de elogios recebidos pelo usuário
- [x] Listar todos os usuários

---

## 🛠 Tecnologias

As seguintes ferramentas foram usadas na construção do projeto:

- **[Node.js](https://nodejs.org/en/)**
- **[Express](https://expressjs.com/)**
- **[TypeORM](https://www.npmjs.com/package/typeorm)**
- **[Sqlite3](https://www.npmjs.com/package/sqlite3)**
- **[Metadata Reflection API](https://www.npmjs.com/package/reflect-metadata)**
- **[uuid](https://www.npmjs.com/package/uuid)**
- **[ExpressJS Async Errors](https://www.npmjs.com/package/express-async-errors)**
- **[JSON Web Tokens](https://www.npmjs.com/package/jsonwebtoken)**
- **[bcrypt.js](https://www.npmjs.com/package/bcryptjs)**
- **[class-transformer](https://www.npmjs.com/package/class-transformer)**

---

## 🚀 Como executar o projeto

### 👉 Pré-requisitos

Antes de começar, você vai precisar ter instalado em sua máquina as seguintes ferramentas: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). Além disto é bom ter um editor para trabalhar com o código como [VSCode](https://code.visualstudio.com/).

#### 🏁 Começar

```bash
# Clone este repositório
$ git clone https://github.com/BiaChacon/valoriza.git

# Acesse a pasta do projeto no terminal/cmd
$ cd valoriza
```

#### 🎲 Executando o servidor

```bash
# Instale as dependências
$ npm install

# Criar migrations
$ yarn typeorm migration:run

# Execute a aplicação
$ yarn dev

# O servidor iniciará na porta:3333 - acesse http://localhost:3333

```

---

## 🗎 Documentação API

🚀 [Postman Collection](https://github.com/BiaChacon/valoriza/blob/master/postman_collection.json)

---

## 👩🏽‍💻 Autores

<table>
  <tr>
    <td align="center"><a href="https://github.com/biachacon"><img src="https://avatars1.githubusercontent.com/u/42190754?s=460&u=a5cbe42a4868b2bac9615226044b9cec15cee418&v=4" width="100px;" alt=""/><br /><sub><b>Bia Chacon</b></sub></a><br /><a href="https://github.com/BiaChacon/valoriza" title="Code">💻</a></td>
  <tr>
</table>

---

## 📝 Licença

Este projeto está sob o MIT. Veja aqui [LICENSE](https://github.com/BiaChacon/valoriza/blob/main/LICENSE) para mais informações.

---

## Versões do README

[Inglês 🇺🇸](./README.md) | [Português 🇧🇷](./README.pt-br.md)
