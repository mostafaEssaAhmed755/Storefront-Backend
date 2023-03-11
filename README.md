# Storefront Backend Project

## About

My online store API project includes two user roles: administrators and customers. Administrators can manage categories, products, users, and orders, while customers can browse categories and products, place orders, and create accounts. The API is designed to be user-friendly and easy to navigate, with a clear separation of responsibilities between the two user roles. Additionally, the project includes robust authentication and authorization mechanisms to ensure secure access and data management.

## Setup

```bash
npm install
```

## Requirment

-   set up database through PSQL terminal,

    -   create new database one for `production` and one for `testing` **Via SQL Query**

    ```sql
    -- for production
    CREATE DATABASE databas_store;
    -- for testing
    CREATE DATABASE databas_store_test;
    ```

    -   create new user and give access to the databases **Via SQL Query**

    ```sql
    -- create user
    CREATE USER store_admin WITH PASSWORD 'password';
    -- create privileges to user
    CREATE ALL PRIVILEGES ON DATABASE databas_store TO store_admin;
    CREATE ALL PRIVILEGES ON DATABASE databas_store_test TO store_admin;
    ```

-   set connection data in `.env` file **dont forget** to add database port in `POSTGRES_PORT`

```env
POSTGRES_HOST=host
POSTGRES_PORT=port
POSTGRES_DB=databas_store
POSTGRES_TEST_DB=databas_store_test
POSTGRES_USER=store_admin
POSTGRES_PASSWORD=password

# set port number to let project running up
PORT=3000
```

-

## Running

```bash
npm run start
```

start project in [http://localhost:3000](#http://localhost:3000)

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
