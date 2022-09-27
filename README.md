# NestJS + MongoDB Example + RabbitMq

## Introdução

API para microserviços de administração de produtos.

## Configuração do ambiente local

Com todos os requisitos a cima preenchidos, inicie o ambiente containerizado de desenvolvimento.

Para que este projeto possa ser executado localmente, será necessário ter conexão remota com o MongoDb e RabbitMq. Ou pode ser rodado usando docker com imagens de ambos os sistemas.

- Docker
- Mongo
- RabbitMq

Execute o primeiro: npm install

Depois para iniciar o projeto: npm run start:dev

## Detalhamento das tecnologias utilizadas

### [NestJS](https://nestjs.com/)

O NestJS é um framework JavaScript/TypeScript para o desenvolvimento de back ends escaláveis.
Neste projeto ele é utilizado pela série de benefícios trazidos por eles, principalmente os estruturais.

### [RabbitMQ](https://www.rabbitmq.com/)

RabbitMQ é um servidor de mensageria de código aberto (open source) desenvolvido em Erlang, implementado para suportar mensagens em um protocolo denominado Advanced Message Queuing Protocol (AMQP). Ele possibilita lidar com o tráfego de mensagens de forma rápida e confiável, além de ser compatível com diversas linguagens de programação, possuir interface de administração nativa e ser multiplataforma.

### [MongoDB](https://www.mongodb.com/)

O MongoDB é um banco de dados orientado a documentos, diferente dos Bancos de dados tradicionais que seguem o modelo relacional.
Dessa forma, já temos uma primeira diferença entre os dois modelos, onde o Banco orientado a documentos lida com documentos e não com registros como no modelo relacional onde tudo é representado usando uma abordagem bidimensional (tabelas representadas através de duas dimensões: linhas e colunas).
