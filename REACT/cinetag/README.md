# Cinetag

Este é um projeto desenvolvido durante o curso "React" da Alura. No curso, foram abordados conhecimentos abrangentes sobre o desenvolvimento de aplicações utilizando a biblioteca JavaScript React. Durante o curso, os seguintes tópicos foram abordados:

- Iniciar um projeto React utilizando o Create React App.
- Construir componentes e páginas utilizando React.
- Implementar rotas normais, dinâmicas e aninhadas na aplicação.
- Utilizar os hooks `useState`, `useParams`, `useEffect` e `useContext` para gerenciar o estado e a lógica da aplicação.
- Explorar como funcionam os contextos no React.
- Aprender a consumir APIs para obter e exibir dados dinamicamente na aplicação.
- Realizar o deploy do projeto na plataforma de hospedagem Vercel.

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```git clone https://github.com/makenrosa/alura-cinetag.git```

5. Após o término do processo de clonagem, você terá uma cópia local do repositório em seu computador.

## Executando o projeto

Para executar o projeto React, siga as etapas abaixo:

1. Navegue até o diretório onde você clonou o repositório.

2. Abra o terminal ou prompt de comando.

3. Certifique-se de ter o Node.js instalado em sua máquina. Você pode fazer o download e instalar o Node.js a partir do [site oficial do Node.js](https://nodejs.org/).

4. Execute o seguinte comando para instalar as dependências do projeto:

```npm install```

5. Após a instalação das dependências, execute o seguinte comando para iniciar o servidor de desenvolvimento:

```npm start```

6. O servidor de desenvolvimento será iniciado e você poderá visualizar o projeto em execução no endereço `http://localhost:3000`.

## Estrutura do projeto

A estrutura básica do projeto é a seguinte:

```Cinetag/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│        ├─ banner-favorites.png
│        ├─ banner-home.png
│        └─ banner-player.png
├── src/
│   ├── index.js
│   ├── index.css
│   ├── routes.js
│   ├── components/
│   |    ├── Header/
│   |    │   ├── index.js
|   |    |   ├── logo.png
│   |    │   └── Header.module.css
│   |    ├── HeaderLink/
│   |    │   ├── index.js
│   |    │   └── HeaderLink.module.css
│   |    ├── Banner/
│   |    │   ├── index.js
│   |    │   └── Banner.module.css
│   |    ├── Title/
│   |    │   ├── index.js
│   |    │   └── Title.module.css
│   |    ├── Container/
│   |    │   ├── index.js
│   |    │   └── Container.module.css
│   |    ├── Footer/
│   |    │   ├── index.js
│   |    │   └── Footer.module.css
│   |    ├── Card/
│   |    │   ├── index.js
|   |    |   ├── favorite.png
|   |    |   ├── unfavorite.png
│   |    │   └── Card.module.css
│   ├── pages/
│   |    ├── Home/
│   |    │   ├── index.js
│   |    │   └── Home.module.css
│   |    ├── Favorites/
│   |    │   ├── index.js
│   |    │   └── Favorites.module.css
│   |    ├── Player/
│   |    │   ├── index.js
│   |    │   └── Player.module.css
│   |    ├── NotFound/
│   |    │   ├── index.js
│   |    │   └── NotFound.module.css
│   |    └── BasePage/
│   |        └── index.js
│   └── contexts/
│        └── Favorites.js
├── jsconfig.json
├── package.json
└── package-lock.json
```


- O diretório `public/` contém o arquivo `index.html`, o favicon `favicon.ico` e a pasta `images/`, que contém imagens utilizadas no projeto, como `banner-favorites.png`, `banner-home.png` e `banner-player.png`.

- O diretório `src/` contém o código-fonte da aplicação.
   - O arquivo `index.js` é o ponto de entrada da aplicação React.
   - O arquivo `index.css` contém estilos globais para a aplicação.
   - O arquivo `routes.js` define as rotas da aplicação utilizando a biblioteca React Router.
   
- O diretório `src/components/` contém os componentes reutilizáveis da aplicação, como `Header`, `HeaderLink`, `Banner`, `Title`, `Container`, `Footer` e `Card`. Cada componente possui seu próprio arquivo JavaScript e um arquivo CSS correspondente.

- O diretório `src/pages/` contém as páginas principais da aplicação, como `Home`, `Favorites`, `Player`, `NotFound` e `BasePage`. Cada página possui seu próprio arquivo JavaScript e um arquivo CSS correspondente.

- O diretório `src/contexts/` contém o arquivo `Favorites.js`, que define um contexto React para gerenciar os filmes favoritos.

- O arquivo `jsconfig.json` é utilizado para configurar o ambiente de desenvolvimento JavaScript no editor de código.

- O arquivo `package.json` é o arquivo de configuração do projeto Node.js, que contém as dependências e scripts do projeto.

- O arquivo `package-lock.json` é um arquivo gerado automaticamente pelo npm para travar as versões exatas das dependências instaladas.

Certifique-se de que todos esses arquivos e diretórios estejam presentes corretamente em seu projeto ao clonar o repositório.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/seu-usuario/nome-do-repositorio/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.