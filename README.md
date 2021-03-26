# Projeto API cadastro

Esta é a minha primeira API em NodeJS com MongoDB.
O objetivo dessa aplicação realizar cadastro de pessoas via chatbot e enviar um email de confirmação para os mesmos ao realizar o cadastro. A API foi publicada via Heroku e o banco de dados MongoDB via mLab.

## Teste

Entre no chatbot (https://bityli.com/dr4GV) e selecione a opção "Junte-se a nós na Geek Week" (descendo o menu na seta para baixo). Cadastre-se e verifique a sua caixa de emails!
O bot faz validação de CPF, gere um CPF válido em https://www.4devs.com.br/gerador_de_cpf

## Instruções

Para rodar esse projeto é necessário ter instalados o Node js e o MongoDB. Para esse projeto criei o banco de dados no mLab, que é gratuito.

* Crie uma cópia deste repositório:
```
  $ git clone https://github.com/nandapieri/testeSmarkio
```

* Navegue até a pasta do projeto via terminal e baixe as dependências do projeto:
```
  $ npm install
```

* Crie um banco de dados na sua instancia do MongoDB e pegue a URI para se conectar com o mesmo.

* Copie o arquivo .env.ex e crie um arquivo .env:
```
  $ cp .env.ex .env
```

* Abra o arquivo .env e adicione a URI do seu banco de dados MongoDB e o email e senha que irá utilizar para mandar o email de confirmação. Importante: é necessário ter uma conta no gmail e criar uma senha para aplicativo nele. https://support.google.com/accounts/answer/185833?hl=pt-BR


* Para iniciar digite no terminal, ainda na pasta do projeto:
```
  $ npm start
```

* Você pode usar o Postman para testar o servidor.

* Para parar o servidor, digite ctrl+C no terminal.
