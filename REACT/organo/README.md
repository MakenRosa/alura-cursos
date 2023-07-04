# Organo

Este é um projeto desenvolvido durante o curso "React" da Alura, no qual foram explorados conhecimentos aprofundados sobre o desenvolvimento com essa popular framework JavaScript. Durante o curso, os participantes têm a oportunidade de aprender a aproveitar as vantagens do React, como eficiência e reutilização de componentes, para o desenvolvimento de aplicações modernas e responsivas. Além disso, o curso aborda os seguintes tópicos:

- Criação de componentes reativos utilizando React.
- Análise e tratamento de mensagens de erro.
- Modificação e evolução de componentes de acordo com as necessidades do projeto.
- Prototipagem de uma aplicação do zero até o deploy.
- Garantia de uma experiência completa no desenvolvimento com React.

**[Acesse aqui o Alura-Organo pelo Vercel](https://alura-organo-rho.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/makenrosa/alura-organo.git
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

```Organo/
├── public/
│   ├── index.html
│   ├── favicon.ico
│   └── images/
│        ├─ banner.png
│        ├─ fb.png
│        ├─ ig.png
│        ├─ tw.png
│        ├─ fundo.png
│        └─ logo.png
├── src/
│   ├── index.js
│   ├── index.css
│   ├── App.js
│   └── components/
│        ├── Banner/
│        │    ├── index.js
│        │    ├── Banner.js
│        │    └── Banner.css
│        ├── Button/
│        │    ├── index.js
│        │    ├── Button.js
│        │    └── Button.css
│        ├── Dropdown/
│        │    ├── index.js
│        │    ├── Dropdown.js
│        │    └── Dropdown.css
│        ├── Employee/
│        │    ├── index.js
│        │    ├── Employee.js
│        │    └── Employee.css
│        ├── Footer/
│        │    ├── index.js
│        │    ├── Footer.js
│        │    └── Footer.css
│        ├── Form/
│        │    ├── index.js
│        │    ├── Form.js
│        │    └── Form.css
│        ├── Team/
│        │    ├── index.js
│        │    ├── Team.js
│        │    └── Team.css
│        └── TextField/
│             ├── index.js
│             ├── TextField.js
│             └── TextField.css
├── .gitignore
├── package.json
└── package-lock.json
```


- O diretório `public/` contém o arquivo `index.html`, que é o ponto de entrada da aplicação, além de outros arquivos estáticos como `favicon.ico` e a pasta `images/` que contém imagens utilizadas no projeto.

- O diretório `src/` é onde se encontra o código-fonte da aplicação.
  - O arquivo `src/index.js` é responsável por renderizar a aplicação no elemento `root` do HTML.
  - O arquivo `src/index.css` contém estilos CSS globais para a aplicação.
  - O arquivo `src/App.js` é o componente raiz da aplicação, onde as rotas e os componentes são definidos.

- O diretório `src/components/` contém os componentes reutilizáveis da aplicação, cada um em seu próprio diretório com arquivos de JavaScript e CSS relacionados.
  - O diretório `Banner/` contém o componente `Banner.js` que representa um banner, juntamente com os arquivos `index.js` e `Banner.css`.
  - O diretório `Button/` contém o componente `Button.js` que representa um botão, juntamente com os arquivos `index.js` e `Button.css`.
  - O diretório `Dropdown/` contém o componente `Dropdown.js` que representa um menu suspenso, juntamente com os arquivos `index.js` e `Dropdown.css`.
  - O diretório `Employee/` contém o componente `Employee.js` que representa um funcionário, juntamente com os arquivos `index.js` e `Employee.css`.
  - O diretório `Footer/` contém o componente `Footer.js` que representa o rodapé da aplicação, juntamente com os arquivos `index.js` e `Footer.css`.
  - O diretório `Form/` contém o componente `Form.js` que representa um formulário, juntamente com os arquivos `index.js` e `Form.css`.
  - O diretório `Team/` contém o componente `Team.js` que representa uma equipe, juntamente com os arquivos `index.js` e `Team.css`.
  - O diretório `TextField/` contém o componente `TextField.js` que representa um campo de texto, juntamente com os arquivos `index.js` e `TextField.css`.

- O arquivo `.gitignore` especifica os arquivos e diretórios que devem ser ignorados pelo Git ao controlar versões do projeto.
- O arquivo `package.json` contém as dependências e scripts do projeto.
- O arquivo `package-lock.json` é gerado automaticamente pelo npm para travar as versões exatas das dependências instaladas.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-organo/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
