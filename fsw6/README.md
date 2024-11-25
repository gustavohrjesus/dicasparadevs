# DICASPARADEVS

## FULL STACK WEEK - Finance IA

### INSTALACOES DE PACOTES NO PROJETO

### [NEXT](https://nextjs.org/docs/app/getting-started/installation)
```npx create-next-app@14.2.16```
Quando criando o projeto, aceitamos usar o TypeScript, ESLint, Tailwind CSS, rejeitamos os "src/" directory, aceitamos o App Router e rejeitamos os "import alias".

### [PRISMA.IO](https://www.prisma.io/docs/getting-started/setup-prisma/start-from-scratch/relational-databases-typescript-mysql)
```npm install prisma@5.21.1```

#### PRISMA - a linha de comando abaixo ira criar o arquivo de configuracao do PRISMA
```npx prisma init```

#### CONFIGURANDO O schema.prisma informando o provider (mysql) e as tabelas que serao criadas (model)
```
generator client {
  provider = "prisma-client-js"
}

datasource db {
  provider = "mysql"
  url      = env("DATABASE_URL")
}

model Transaction {
  id            String                   @id @default(uuid())
  name          String
  type          TransactionType
  amount        Decimal                  @db.Decimal(10, 2)
  category      TransactionCategory
  paymentMethod TransactionPaymentMethod
  date          DateTime
  createdAt     DateTime                 @default(now())
  updatedAt     DateTime                 @updatedAt
}

enum TransactionType {
  DEPOSIT
  EXPENSE
  INVESTMENT
}

enum TransactionCategory {
  HOUSING
  TRANSPORTATION
  FOOD
  ENTERTAINMENT
  HEALTH
  UTILITY
  SALARY
  EDUCATION
  OTHER
}

enum TransactionPaymentMethod {
  CREDIT_CARD
  DEBIT_CARD
  BANK_TRANSFER
  BANK_SLIP
  CASH
  PIX
  OTHER
}
```

#### CONFIGURANDO O .env para o PRISMA conseguir acessar o BD
Abra o arquivo .env criado quando instalado o prima e sete o 'DATABASE_URL' conforme abaixo:
`DATABASE_URL="mysql://user:passcode@localhost:3306/database"`

### EXECUTANDO O PRISMA APOS EDITAR O **schema.prisma**:
`npx prisma migrate dev --name init_db`

> Erro: Error: P1013: The provided database string is invalid. invalid port number in database URL. Please refer to the documentation in https://www.prisma.io/docs/reference/database-reference/connection-urls for constructing a correct connection string. In some cases, certain characters must be escaped. Please
> check the string for any illegal characters.

> Solucao: [Prisma - Error P1013- String is invalid](https://www.youtube.com/watch?v=X2bZJwwLlno&t=136s)
> Caracteres especiais na senha devem ser substituidos por seus equivalentes, em porcentagem, conforme abaixo:
```
! %21
# %23
$ %24
% %25
& %26
' %27
```

#### INSTALACAO DA EXTENSAO DO _TAILWIND CSS INTELLISENSE_ NO VSCODE
## INSTALACAO DA EXTENSAO SIMPLE REACT SNIPPETS (com poucas letras criar um bloco de prog inteiro)

#### INSTALAR PLUGIN PRETTIER - OPTAMOS POR NAO USAR O PRETTIER POIS ELE DESCONFIGURAVA O README.md DA FORMA COMO QUERIAMOS MANTER A SUA FORMATACAO
`npm install -D prettier prettier-plugin-tailwindcss`
Crie o arquivo '.prettierrc.json' na raiz do projeto e edite-o inserindo as informacoes abaixo:
```
{
  "plugins": ["prettier-plugin-tailwindcss"]
}
```
Instale tambem a extensao do PRETTIER no VSCode. Apos instalado, va no botao de Configuracao do VSCode (icone de engrenagem que encontra-se no canto inferior esquerdo), clique em 'Settings' e pesquise por 'Default Formatter' e em 'Editor: Default Formatter', selecione a opcao 'Prettier - Code formatter'. Apos, no campo de pesquisa digite 'Format On Save' e check a opcao 'Editor: Format On Save'

#### INSTALCAO DO SHADCN/UI PARA OBTENCAO DE COMPONENTES PRONTOS - [shascn/ui](https://ui.shadcn.com/docs/installation/next)
`npx shadcn@2.1.3 init`
Serao criados alguns arquivos e diretorios:
Foi criado o *lib* na raiz do projeto. Iremos alterar o nome para *_lib*, tornando-a uma pasta privada (o Next entende que diretorios iniciados por *_* sao diretorios privados) e muda-lo para dentro da pasta *app*.
> Foi criado o arquivo *components.json*, na raiz do projeto. Iremos alterar os *aliases* iniciados com '@' para '@/app/...', conforme abaixo:
Alteramos disso:
```
"aliases": {
    "components": "@/components",
    "utils": "@/lib/utils",
    "ui": "@/components/ui",
    "lib": "@/lib",
    "hooks": "@/hooks"
  }
```
Para isso:
```
"aliases": {
    "components": "@/app/_components",
    "utils": "@/app/_lib/utils",
    "ui": "@/app/_components/ui",
    "lib": "@/app/_/lib",
    "hooks": "@/app/_hooks"
  }
```
Foi criado o arquivo *global.css*, dentro do diretorio *app*. Iremos customizar esse arquivo obtendo a customizacao atraves dos temas fornecidos pelo [shadcn/ui - thenes](https://ui.shadcn.com/themes)

#### ADICIONANDO COMPONENTES SHADCN/UI NA APLICACAO [shadcn/ui - components](https://ui.shadcn.com/docs/components/accordion)
`npx shadcn@2.1.3 add button`

#### [CLERK - SERVICO DE AUTENTICACAO](https://clerk.com/)
OBS.: Ha a necessidade de criar uma conta no Ckerk

***

## ERRO DE VERSAO DO NODE QUANDO TENTADO EXECUTAR O PROJETO COM 'npm run dev'
OBS.: DESINSTALAMOS ATRAVES DO PAINEL DE CONTROLE DO WINDOWS O NODE QUE ESTAVA INSTALADO QUE, NO NOSSO CASO, ERA O NODE 13
Acessamos o LOCAL ONDE EH SETADO O SIMLINK DO NODE.JS E RENOMEAMOS O dir 'nodejs' para nodejs_OLD
> C:\Program Files\nodejs
> BAIXAMOS O node-v22.11.0-win-x64.zip E O DESCOMPACTAMOS.
> BAIXAMOS O node v22.11.0.exe, atraves do site oficial e o instalamos. Assim, apos a instalacao, um novo SIMLINK 'nodejs' foi criado no dir `C:\Program Files\`.
> Baixamos e instalamos o VxKex (KexSetup_Release_1_1_1_1375.exe) para que quando o Node na versao 22 for executado, nao deh o erro 'getsystemtimepreciseasfiletime kernel32.dll'. O site para download:
> https://github.com/vxiiduu/VxKex/releases.
> Seguimos o tutorial abaixo para instalar e configurar o VxKex com o Node:
> https://github.com/i486/VxKex

Agora precismos indicar qual versao do Node iremos querer usar. Para isto, antes, iremos listar as versoes instaladas no computador, atraves do comando abaixo:
> nvm ls

Apos isto, setamos a versao que queremos usar atraves do comando abaixo:
> nvm use 22.11.0

> Erro: nvm use exit status 5 acesso negado voce nao tem privilegios

> Solucao: rode o terminal como Administrador e execute o comando acima novamente.

INSTALACAO DO NVM - ULTIMA VERSAO PARA WIN 7
https://github.com/coreybutler/nvm-windows/wiki#manual-installation

---

### ATUALIZANDO O NODE E NPM ATRAVES DO NVM. (As linhas abaixo, em sua totalidade, nao funcionaram com o Windows 7)
> nvm install 22

#### Erro: ao tentarmos atualizar passando somente a linha de comando acima, obtivemos um erro "Version 22.11.0-arm64.msi is not available".

Solucao: para solucionar este erro, especificamos exatamente o arquivo que gostariamos que fosse instalado, conforme abaixo:
> nvm install 22.11.0-x64.msi

Agora precismos indicar qual versao do Node iremos querer usar. Para isto, antes, iremos listar as versoes instaladas no computador, atraves do comando abaixo:
> nvm ls

Apos isto, setamos a versao que queremos usar atraves do comando abaixo:
> nvm use 22.11.0
> Erro: nvm use exit status 5 acesso negado voce nao tem privilegios
> Solucao: rode o terminal como Administrador e execute o comando acima novamente.

ATUALIZANDO NPM
> npm install -g npm
