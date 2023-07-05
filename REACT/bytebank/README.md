# Bytebank

Este é um projeto desenvolvido durante o curso "React JS: Crie testes com Jest e Testing Library e garanta o funcionamento do Front-end" da Alura. Neste curso, foi abordada a importância dos testes no desenvolvimento de aplicações Front-end utilizando as ferramentas Jest e React Testing Library. Alguns dos tópicos abordados incluem:

- Compreensão da importância dos testes no desenvolvimento de aplicações Front-end.
- Utilização das ferramentas Jest e React Testing Library para escrever testes automatizados em aplicações React.
- Simulação de funções e comportamentos do usuário nos testes.
- Proteção da aplicação em produção contra possíveis bugs por meio de testes automatizados.
- Garantia da qualidade do código por meio de testes.

**[Acesse aqui o Alura-Bytebank pelo Vercel](https://alura-bytebank.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/makenrosa/alura-bytebank.git
```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando os testes

Para executar os testes automatizados, siga as etapas abaixo:

1. Navegue até o diretório onde você clonou o repositório.

2. Abra o terminal ou prompt de comando.

3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).

4. Execute o seguinte comando para instalar as dependências do projeto:

```bash
npm install
```

5. Execute o seguinte comando para executar os testes:

```bash
npm run test
```

6. Os testes serão executados e você verá os resultados no terminal ou prompt de comando.

## Estrutura do projeto

A estrutura básica do projeto é a seguinte:

```Bytebank/
├── public/
│   ├── index.html
|   ├── favicon-48.ico
│   └── robots.txt
├── src/
│   ├── components/
│   │   ├── Header/
|   |   |   ├── avatar.svg
|   |   |   ├── bytebank.svg
│   │   │   ├── index.jsx
|   |   |   ├── Header.module.css
│   │   │   └── Header.test.js
│   │   ├── Main
│   │   │   ├── Balance/
│   │   │   │   ├── index.jsx
│   │   │   │   ├── eye-icon.svg
│   │   │   │   ├── Balance.module.css
│   │   │   │   └── Balance.test.js
│   │   │   ├── bot-detail.svg
│   │   │   ├── top-detail.svg
│   │   │   ├── illustration.svg
│   │   │   ├── index.jsx
│   │   │   └── Main.module.css
│   │   ├── Menu/
│   │   │   ├── __snapshots__/
│   │   │   │   └── Menu.test.js.snap
│   │   │   ├── index.jsx
│   │   │   ├── Menu.module.css
│   │   │   └── Menu.test.js
│   │   ├── Statement/
│   │   │   ├── Transactions/
│   │   │   │   ├── index.jsx
│   │   │   │   └── Transactions.test.js
│   │   │   ├── index.jsx
│   │   │   ├── Statement.module.css
│   │   │   └── Statement.test.js
│   │   └── Transaction/
│   │       ├── Form/
│   │       │   ├── index.jsx
│   │       │   ├── Form.module.css
│   │       │   └── Form.test.js
│   │       ├── bot-detail.svg
│   │       ├── top-detail.svg
│   │       ├── illustration.svg
│   │       ├── index.jsx
│   │       └── Transaction.module.css
│   ├── utils/
│   │   ├── index.js
│   │   └── utils.test.js
│   ├── App.js
│   ├── App.module.css
│   ├── index.js
│   ├── index.css
│   └── setupTests.js
├── .eslintrc
├── .gitignore
├── .prettierrc
├── jsconfig.json
├── package.json
└── package-lock.json
```

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-bytebank/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.