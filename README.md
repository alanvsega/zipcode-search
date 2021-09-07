# zipcode-search 🗺️

[![Minimum node.js version](https://badgen.net/npm/node/next)](https://npmjs.ccom/package/express)
[![Npm package version](https://badgen.net/npm/v/express)](https://npmjs.com/package/express)
[![Docker](https://badgen.net/badge/icon/docker?icon=docker&label)](https://https://docker.com/)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](#)

> Luizalabs challenge. Service that provides zip code search.

# Technology stack

This project was built using [Node v14.x](https://nodejs.org/en/) and uses the following technologies:

-   [Typescript](https://www.npmjs.com/package/typescript) - A language for application-scale JavaScript.
-   [Express](https://www.npmjs.com/package/express) - For building the web application and the APIs.
-   [Jest](https://www.npmjs.com/package/jest) - For unit test.
-   [Supertest](https://www.npmjs.com/package/supertest) - For HTTP test.
-   [Morgan](https://www.npmjs.com/package/morgan) - For estructural logs.
-   [Swagger/OpenAPI](https://www.npmjs.com/package/swagger-ui-express) - For API documentation.
-   [Docker](https://docs.docker.com/) - To run the project on a container.
-   [ESLint](https://www.npmjs.com/package/eslint) - For improving code quality.
-   [Yarn](https://www.npmjs.com/package/yarn) - For dependency management.

# Project structure

The archtecture pattern chosen is a simple "Model-View-Controller-Service". As this is a backend application, the View was only implemented by the OpenApi documentation. The directory structure is shown below:

```sh
├── coverage
├── dist
├── docs
├── logs
├── node_modules
├── src
│   ├── controllers
│   ├── middlewares
│   ├── models
│   ├── routes
│   └── services
└── tests
    ├── controllers
    ├── mocks
    └── services
```

# API Usage

The API has only one endpoint exposed:

```
/api/v1/zipcode/{zipcode}
```

It can be accessed with `curl`, an API Platform like [Insomnia](https://insomnia.rest/) or with the OpenAPI documentation, as shown below:

![OpenAPI Example](/docs/assets/openapi_example.jpg)

This is an API Key secured API, so it is expected to receive the key with a header parameter:

```
X_API_KEY: {API_KEY}
```

Or in the OpenAPI documentation, the authorization must be done before execute the request:

![API Key Example](/docs/assets/apikey_example.jpg)

# Run locally

## Create an .env file

```sh
cp .env.example .env
```

Don't forget to update the `API_KEY` param with a secure key.

## Install

```sh
yarn
```

## Build

```sh
yarn build
```

## Run

```sh
yarn start
```

## Run tests

```sh
yarn test
```

## Run tests with coverage

```sh
yarn test --coverage
```

# Run on docker

## Run

```sh
docker-compose up
```

# Open the documentation

On a browser, access http://localhost:3333/docs.

## Next steps

-   [ ] Add healthcheck endpoint
-   [ ] Add metrics endpoint
-   [ ] Add cache usage
-   [ ] Performance improvements

## Author

👤 **Alan Vinícius Sega <alanvsega@gmail.com>**

-   Github: [@alanvsega](https://github.com/alanvsega)
-   LinkedIn: [@alanvsega](https://linkedin.com/in/alanvsega)
