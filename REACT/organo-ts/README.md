# Organo-TS

Este é um projeto desenvolvido durante o curso "React com TypeScript" da Alura, que é a continuação do curso anterior "React". Neste curso, foi abordado o uso do TypeScript em conjunto com o React, permitindo explorar as principais diferenças entre TypeScript (TS) e JavaScript (JS), bem como as vantagens de utilizar o TypeScript em aplicações React. Além disso, os tópicos abordados incluem:

- Integração de componentes React com TypeScript.
- Utilização do IntelliSense do VSCode para obter sugestões de código e melhorar a produtividade.
- Prototipação de um plano de migração de um projeto JavaScript existente para TypeScript.

**[Acesse aqui o Alura-Organo-TS pelo Vercel](https://alura-organo-ts-five.vercel.app/)**

## Como clonar o repositório

Siga as etapas abaixo para clonar este repositório e executar o projeto em sua máquina local:

1. Certifique-se de ter o Git instalado em sua máquina. Você pode fazer o download e instalar o Git a partir do [site oficial do Git](https://git-scm.com/).

2. Abra o terminal ou prompt de comando.

3. Navegue até o diretório onde deseja clonar o repositório.

4. Execute o seguinte comando para clonar o repositório:

```bash
git clone https://github.com/makenrosa/alura-organo-ts.git
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
│   ├── index.tsx
│   ├── index.css
│   ├── App.tsx
|   ├── shared/
│   │    └── interface/
│   │         └── IEmployee.ts
│   └── components/
│        ├── Banner/
│        │    ├── index.ts
│        │    ├── Banner.tsx
│        │    └── Banner.css
│        ├── Button/
│        │    ├── index.ts
│        │    ├── Button.tsx
│        │    └── Button.css
│        ├── Dropdown/
│        │    ├── index.ts
│        │    ├── Dropdown.tsx
│        │    └── Dropdown.css
│        ├── Employee/
│        │    ├── index.ts
│        │    ├── Employee.tsx
│        │    └── Employee.css
│        ├── Footer/
│        │    ├── index.ts
│        │    ├── Footer.tsx
│        │    └── Footer.css
│        ├── Form/
│        │    ├── index.ts
│        │    ├── Form.tsx
│        │    └── Form.css
│        ├── Team/
│        │    ├── index.ts
│        │    ├── Team.tsx
│        │    └── Team.css
│        └── TextField/
│             ├── index.ts
│             ├── TextField.tsx
│             └── TextField.css
├── .gitignore
├── package.json
├── package-lock.json
└── tsconfig.json
```


- O diretório `public/` contém o arquivo `index.html` que serve como ponto de entrada para a aplicação. Também inclui outros arquivos estáticos, como `favicon.ico` e o diretório `images/` que contém as imagens utilizadas no projeto.

- O diretório `src/` contém o código-fonte principal do projeto.
  - O arquivo `index.tsx` é o ponto de entrada da aplicação, onde o React é inicializado e o componente `App` é renderizado.
  - O arquivo `index.css` contém estilos globais aplicados em toda a aplicação.
  - O arquivo `App.tsx` é o componente raiz da aplicação, onde os componentes e rotas são definidos.
  - O diretório `shared/` contém arquivos compartilhados, como interfaces, neste caso, o arquivo `IEmployee.ts`.
  - O diretório `components/` contém os componentes reutilizáveis da aplicação, como `Banner`, `Button`, `Dropdown`, `Employee`, `Footer`, `Form`, `Team` e `TextField`, juntamente com seus arquivos de estilo.

## Contribuição

Este é um projeto desenvolvido como parte de um curso da Alura e, portanto, não é aberto para contribuições externas no momento. No entanto, sinta-se à vontade para fazer um fork deste repositório e personalizá-lo conforme suas necessidades.

Se você encontrar algum problema ou tiver sugestões, sinta-se à vontade para abrir uma [issue](https://github.com/makenrosa/alura-organo-ts/issues) neste repositório.

Aproveite o projeto! Se tiver alguma dúvida, não hesite em entrar em contato.
