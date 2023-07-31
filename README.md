<div align="center"> 
<img src="https://github.com/selenitye/agenda/assets/129871998/72a69b8b-1200-494c-9a2d-2e133ddb80d8" width="170px">
<h1>Projeto Agenda</h1>
</div>

<p align="center">
<img src="http://img.shields.io/static/v1?label=STATUS&message=%20concluido&color=blue&style=for-the-badge"/> 
</p>

Seja bem-vindo à Documentação Técnica do Projeto Agenda! Neste espaço, você encontrará informações detalhadas acerca do projeto, incluindo sua estrutura, tecnologias empregadas, explicações sobre o modelo de esquemas, os testes de rotas que foram implementados, além de um breve resumo sobre a arquitetura MVC que dá suporte ao desenvolvimento. Por último, disponibilizamos instruções para realizar a clonagem do repositório. Esperamos que esta documentação seja de grande valia, simplificando a compreensão de todos os aspectos fundamentais para o desenvolvimento e manutenção deste sistema.

## 🔍 Visão Geral do Projeto

O projeto Agenda é uma aplicação BackEnd desenvolvida em JavaScript, utilizando a plataforma Node.js e adotando a arquitetura MVC. Essa solução possibilita a execução de operações CRUD, permitindo a manipulação dos dados dos contatos armazenados no banco de dados.

## 🌐 Tecnologias Utilizadas

| Tecnologia | Função na aplicação                                                                                                                                  |
| ---------- | ---------------------------------------------------------------------------------------------------------------------------------------------------- |
| JavaScript | Linguagem de programação utilizada para escrever o código do back-end da aplicação.                                                                  |
| Node.js    | Ambiente de execução JavaScript assíncrono orientado a eventos, utilizado como base para a aplicação fornecendo bibliotecas.                         |
| Nodemon    | Ferramenta que monitora alterações nos arquivos do projeto e reinicia automaticamente o servidor durante o desenvolvimento.                          |
| Mongoose   | Biblioteca do Node.js que simplifica a interação com o MongoDB, um banco de dados NoSQL orientado a documentos.                                      |
| Express    | Framework web para Node.js que simplifica o desenvolvimento de aplicativos e APIs RESTful.                                                           |
| Chalk      | Pacote npm para formatação de texto no console, utilizado para melhorar a legibilidade dos logs e mensagens de saída no ambiente de desenvolvimento. |
| MongoDB    | Banco de dados NoSQL orientado a documentos, usado para armazenar os dados do projeto.                                                               |
| Postman    | Plataforma de testes de API, utilizada para testar e documentar as requisições e respostas do projeto.                                               |

## 🏛️ Arquitetura do Projeto

```
 📁agenda
   |
   |--📁node_modules
   |
   |--📁 src
   |  ||
   |  ||--📁 config
   |  |    |- 📄 dbConnect.js
   |  ||
   |  ||--📁 controllers
   |  |    |- 📄 listaController.js
   |  |
   |  ||--📁 models
   |  |    |- 📄 lista.json
   |  |    |- 📄 listas.js
   |  |
   |  ||--📁 routes
   |  |    |- 📄 lista.js
   |  |    |- 📄 index.js
   |  |
   |  ||-📄 app.js
   |  |
   |- 📄 .gitignore
   |- 📄 package-lock.json
   |- 📄 package.json
   |- 📄 README.md
   |- 📄 server.js


```

### Arquitetura MVC:

O projeto segue a arquitetura Model-View-Controller (MVC), que divide a aplicação em três componentes principais:

1. 💼 **Model:** Responsável pela definição da estrutura de dados e regras de negócio.
2. 👀 **View:** Responsável pela interface de usuário e apresentação dos dados ao usuário final.
3. 🎮 **Controller:** Responsável por receber as requisições do usuário, interagir com o Model e renderizar a View correspondente.

A utilização do padrão MVC permite uma separação clara de responsabilidades, facilitando a manutenção, reutilização de código e testabilidade do projeto.

## 🗂️ Esquema da Agenda usando Mongoose (MongoDB)

```
const listaSchema = new mongoose.Schema({
  nome: { type: String, required: true },
  telefone: { type: String, required: false },
  email: { type: String, required: false },
  whatsapp: { type: Boolean, required: false },
});

```
## 📝 Esquema para inserção de dados no banco de dados.

```
 [
  {
    "nome": "Maria jose Da Silva",
    "telefone": "81 98887-9878",
    "email": "mariaJoaquina@hotmail.com",
    "whatsapp": false
  },
  {
    "nome": "Rafaela monte Da Silva",
    "telefone": "81 98887-9878",
    "email": "rafaelam@hotmail.com",
    "whatsapp": true
  }
]
```

## 🛣️ Testando Rotas

 <h3> Métodos e rotas Utilizados:</h3>

| Verbo  | EndPoint  | Descrição do Rota                                 |
| ------ | --------- | ------------------------------------------------- |
| GET    | /Contatos | Listar todos as Contatos cadastrados              |
| GET    | /:id      | Mostra o cadastro do Contato por ID               |
| POST   | /         | Registra um novo Contato                          |
| PUT    | /:id      | Altera dados do Contato identificado pelo id      |
| DELETE | /:id      | Remove o cadastro do Contato identificado pelo id |

## 🚀 Testando as APIs

Para testar as APIs do projeto, você pode utilizar o Postman. Siga as etapas abaixo:

1. Abra o Postman.
2. Importe a coleção de requisições do projeto, localizada no diretório `postman` do repositório.
3. Após importar a coleção, você poderá enviar as requisições para testar as funcionalidades disponíveis.

## 📥 Clonando o Repositório

Para clonar o repositório do projeto, siga as etapas abaixo:

1. Abra o terminal e navegue até o diretório em que deseja armazenar o projeto.
2. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/selenitye/agenda.git
```

Certifique-se de substituir `selenitye` pelo seu nome de usuário do GitHub.

## ▶️ Executando o Projeto

Após clonar o repositório, siga as etapas abaixo para executar o projeto localmente:

1. Navegue até o diretório do projeto:

```bash
cd agenda
```

2. Instale as dependências do projeto:

```bash
npm install
```

3. Inicie o servidor local:

```bash
npm start
```

O servidor será iniciado e estará pronto para receber requisições.

## 🤝 Contribuição

Se você deseja contribuir com este projeto, siga as etapas abaixo:

1. Faça um fork do repositório para o seu próp

usuário do GitHub. 2. Clone o repositório forkado para o seu ambiente de desenvolvimento local. 3. Crie uma branch para realizar suas alterações:

```bash
git checkout -b nome-da-sua-branch
```

4. Faça as alterações desejadas no código.
5. Commit suas alterações:

```bash
git commit -m "Descrição das alterações"
```

6. Envie suas alterações para o repositório remoto:

```bash
git push origin nome-da-sua-branch
```

7. Abra um pull request no repositório original, descrevendo suas alterações em detalhes.

<br>


### ✨ Obrigada a você que chegou até aqui!✨ 
Espero que as informações fornecidas tenham sido úteis e que você possa aproveitar ao máximo este projeto. Caso surjam dúvidas adicionais, fique à vontade para consultar a documentação do código ou entrar em contato comigo pelo email: ***selenitye@gmail.com***. 
Estou à disposição para ajudar no que for necessário.

<br>[🔝 Voltar ao topo](#projeto-agenda) <br>
