# REST API

## Setup

Clone the repository, install the dependencies and start

> $ git clone  
  $ cd  
>  $ npm install  
  $ cp .env.example .env

Update your application details

> \$ npm run migrate

Start the application

> \$ npm run start:dev

Check http://localhost:8080/api-docs to verify installation.

## Setup using Docker

Specific configuration for Docker is in `.env.docker`

- `0.0.0.0` as `APP_HOST` to expose app on Docker network interface

Start docker

> docker-compose up

Check http://localhost:8080/api-docs to verify installation.

## Tests

> npm run test

## Tests using Docker

> docker exec -it ng-rest_ng-rest_1 bash  
> npm run test
