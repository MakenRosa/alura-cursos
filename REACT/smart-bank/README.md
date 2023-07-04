# Smart-Bank

Este é um projeto desenvolvido durante o curso "React com Styled Components" da Alura. Neste curso, foram abordados conceitos e práticas avançadas para lidar com estilização de componentes em aplicações React. Alguns dos tópicos abordados incluem:

- Solução de problemas de conflitos de nomes de classes com CSS.
- Utilização do Styled Components para criar estilos de forma mais isolada e reutilizável.
- Aplicação de estilos globais quando necessário.
- Aproveitamento da herança dentro dos componentes para uma organização eficiente do projeto.
- Benefícios de um código bem estruturado e modularizado.

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/seu-usuario/nome-do-repositorio.git
```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando o projeto

Para executar o projeto React, siga as etapas abaixo:

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

```Smart-Bank/
├── public/
│   ├── index.html
│   ├── donation.svg
│   ├── manifest.json
│   └── robots.txt
├── src/
│   ├── assets/
│   │   └── images/
│   │        ├─ bank_logo.svg
│   │        ├─ eye.svg
│   │        ├─ health.svg
│   │        ├─ money.svg
│   │        ├─ nutrition.svg
│   │        ├─ others.svg
│   │        ├─ private.svg
│   │        ├─ themeOff.svg
│   │        ├─ themeOn.svg
│   │        ├─ transport.svg
│   │        └─ utilities.svg
│   ├── components/
│   │   ├── Account/
│   │   │   └── index.jsx
│   │   ├── Container/
│   │   │   └── index.jsx
│   │   ├── Header/
│   │   │   └── index.jsx
│   │   ├── Item/
│   │   │   └── index.js
│   │   ├── Items/
│   │   │   └── index.js
│   │   ├── Statement/
│   │   │   └── index.jsx
│   │   ├── ThemeSwitcher/
│   │   │   └── index.js
│   │   ├── Title/
│   │   |   └── index.jsx
│   │   └── UI/
│   │       ├── index.js
│   │       ├── themes.js
│   │       └── variables.js
│   ├── App.js
│   ├── index.js
│   └── info.js
├── .editorconfig
├── .gitignore
├── .prettierrc
├── package-lock.json
└── package.json
```

- O diretório `public` contém os arquivos estáticos do projeto, como o arquivo HTML principal, o arquivo de manifesto e o arquivo de ícone.

- O diretório `src` contém o código-fonte do projeto.

- O diretório `assets` contém os arquivos de imagem utilizados no projeto.

- O diretório `components` contém os componentes React utilizados no projeto.

- O arquivo `App.js` é o componente principal do projeto.

- O arquivo `index.js` é o arquivo de entrada do projeto.

- O arquivo `info.js` contém as informações utilizadas no projeto.

- O arquivo `.editorconfig` contém as configurações do editor de código.

- O arquivo `.gitignore` contém a lista de arquivos e pastas que são ignorados pelo Git.

- O arquivo `.prettierrc` contém as configurações do Prettier.

- O arquivo `package-lock.json` é gerado automaticamente para qualquer operação onde o npm altere a árvore de dependências.

- O arquivo `package.json` contém as dependências do projeto e outros metadados.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-smart-bank/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
