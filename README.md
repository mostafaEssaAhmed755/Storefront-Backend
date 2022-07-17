# Storefront Backend Project

## About

It is an api of an online store, it contains `administrators` who can control the categories, products, users and orders, it also contains `customers` who can browse the categories and products and order products and they can log in and create new accounts.

## Setup

```bash
npm install
```

## Requirment

-   create new database one for `production` and `testing` and set connection data in `.env` file

```bash
POSTGRES_HOST=host
POSTGRES_PORT=port
POSTGRES_DB=databas_name
POSTGRES_TEST_DB=databas_name_for_test
POSTGRES_USER=username
POSTGRES_PASSWORD=password
```

## Running

```bash
npm run start
```

start project in [http://localhost](#http://localhost)

## For Test Project

```bash
npm run test
```

## Other Commands

```bash
# to running project in development
npm run watch
# to formate code
npm run lint:f
```
