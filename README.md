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
 <a href="#ℹ%EF%B8%8F-about">About</a> •
 <a href="#%EF%B8%8F-features">Features</a> •
 <a href="#-how-it-works">How it works</a> •
 <a href="#-tech-stack">Tech Stack</a> •
 <a href="#-documentation-API">Documentation</a> •
 <a href="#-authors">Authors</a> •
 <a href="#-license">License</a>
</p>

## ℹ️ About

API Restful for send compliments created at [RocketSeat](https://rocketseat.com.br/) Next Level Week 6.0, using stack TypeScript with Node.js.

---

## ⚙️ Features

- [x] Create User
- [x] Login
- [x] Create Tag
- [x] Create Compliment
- [x] List User Send Compliments
- [x] List User Receive Compliments
- [x] List All Users

---

## 🛠 Tech Stack

The following tools were used in the construction of the project:

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

## 🚀 How it works

### 👉 Pre-requisites

Before you begin, you will need to have the following tools installed on your machine: [Git](https://git-scm.com), [Node.js](https://nodejs.org/en/) and [Yarn](https://yarnpkg.com/). In addition, it is good to have an editor to work with the code like [VSCode](https://code.visualstudio.com/).

#### 🏁 Start

```bash
# Clone this repository
$ git clone https://github.com/BiaChacon/valoriza.git

# Access the project folder cmd/terminal
$ cd valoriza
```

#### 🎲 Running the server

```bash
# install the dependencies
$ npm install

#Create migrations
$ yarn typeorm migration:run

# Run the application
$ yarn dev

# The server will start at port: 3333 - go to http://localhost:3333

```

---

## 🗎 Documentation API

🚀 [Postman Collection](https://github.com/BiaChacon/valoriza/blob/master/postman_collection.json)

</details>

---

## 👩🏽‍💻 Authors

<table>
  <tr>
    <td align="center"><a href="https://github.com/biachacon"><img src="https://avatars1.githubusercontent.com/u/42190754?s=460&u=a5cbe42a4868b2bac9615226044b9cec15cee418&v=4" width="100px;" alt=""/><br /><sub><b>Bia Chacon</b></sub></a><br /><a href="https://github.com/BiaChacon/valoriza" title="Code">💻</a></td>
  <tr>
</table>

---

## 📝 License

This project is under MIT. See at here [LICENSE](https://github.com/BiaChacon/valoriza/blob/main/LICENSE) for more information.

---

## README versions

[English 🇺🇸](./README.md) | [Portuguese 🇧🇷](./README.pt-br.md)
