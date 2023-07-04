# Alura-Bank

Este é um projeto desenvolvido durante o curso "TypeScript" da Alura. Neste curso, foram abordados os principais conceitos e recursos do TypeScript, permitindo uma compreensão aprofundada da linguagem e sua aplicação em projetos reais. Alguns dos tópicos abordados incluem:

- Configuração do ambiente de desenvolvimento para o uso do TypeScript.
- Exploração dos recursos e vantagens da tipagem estática do TypeScript.
- Modelagem de classes utilizando o TypeScript.
- Utilização de tipos, modificadores e generics para uma melhor expressividade e segurança de tipos.
- Herança de classes e uso de enums no TypeScript.
- Criação de um mini framework de atualização de view inspirado no JSX.
- Configurações avançadas do compilador para maximizar a eficiência do código.

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/makenrosa/alura-bank.git
```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando o projeto

Para executar o projeto TypeScript, siga as etapas abaixo:

1. Navegue até o diretório onde você clonou o repositório.

2. Abra o terminal ou prompt de comando.

3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).

4. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

5. Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```bash
npm start
```

6. O servidor de desenvolvimento será iniciado e você poderá visualizar o projeto em execução no endereço `http://localhost:3000`.

## Estrutura do projeto

A estrutura básica do projeto é a seguinte:

```alura-bank/
├── .vscode/
│   └── settings.json
├── app/
│   ├── models/
│   │   ├── transaction.ts
│   │   └── transactions.ts
│   ├── views/
│   │   ├── message-view.ts
│   │   ├── view.ts
│   │   └── transaction-view.ts
│   ├── controllers/
│   │   └── transaction-controller.ts
│   ├── enums
│   │   └── day-of-week.ts
│   └── app.ts
├── dist/
│   ├── index.html
│   ├── css/
│   │   ├── bootstrap.css
│   │   └── bootstrap.css.map
│   └── js/
│       ├── models/
│       │   ├── transaction.js
│       │   └── transactions.js
│       ├── views/
│       │   ├── message-view.js
│       │   ├── view.js
│       │   └── transaction-view.js
│       ├── controllers/
│       │   └── transaction-controller.js
│       ├── enums
│       │   └── day-of-week.js
│       └── app.js
├── servidor-api/
│   ├── app/
│   │   ├── api/
│   │   │   └── index.js
|   |   └── routes/
│   │       └── index.js
│   ├── config/
│   │   └── express.js
│   ├── package-lock.json
│   ├── package.json
│   └── server.js
├── .gitignore
├── package-lock.json
├── package.json
└── tsconfig.json
```

- O diretório `.vscode` contém o arquivo `settings.json` com as configurações do editor de código Visual Studio Code.

- O diretório `app` contém o código-fonte do projeto.
    - O diretório `models` contém as classes de modelo do projeto.
    - O diretório `views` contém as classes de visualização do projeto.
    - O diretório `controllers` contém as classes de controle do projeto.
    - O diretório `enums` contém as classes de enumeração do projeto.
    - O arquivo `app.ts` contém o código-fonte da aplicação.   

- O diretório `dist` contém os arquivos compilados do projeto.
    - O arquivo `index.html` contém o código-fonte da página principal do projeto.
    - O diretório `css` contém os arquivos CSS do projeto.
    - O diretório `js` contém os arquivos JavaScript do projeto.

- O diretório `servidor-api` contém o código-fonte do servidor de API.
    - O diretório `app` contém o código-fonte da aplicação.
        - O diretório `api` contém o código-fonte da API.
        - O diretório `routes` contém o código-fonte das rotas da API.
    - O diretório `config` contém o código-fonte das configurações do servidor.
    - O arquivo `package-lock.json` contém as dependências do projeto.
    - O arquivo `package.json` contém as dependências do projeto.
    - O arquivo `server.js` contém o código-fonte do servidor.

- O arquivo `.gitignore` contém a lista de arquivos e pastas que devem ser ignorados pelo Git.

- O arquivo `package.json` contém as dependências do projeto.

- O arquivo `tsconfig.json` contém as configurações do compilador do TypeScript.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-bank/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
