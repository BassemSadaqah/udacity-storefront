# Udacity Storefront Full Stack Project
This project is a RESTful api for an e-commerse website build as a learning-project for udacity.


## Getting started
- Clone the repository
```
git clone https://github.com/BassemSadaqah/udacity-storefront
```
- Install dependencies
```
cd udacity-storefront
npm install
npm run frontend:install
npm run backend:install
```
- Run required database migrations after completing database Setup
```
cd backend
npx db-migrate up
```
- Build and the project after setting the required environmental variables
```
npm run frontend:build
npm run backend:build
```
- start Frontend development server
```
npm run frontend:start
```
- start backend development server
```
npm run backend:start
```

## Database Setup
- Connect to the database through psql ``psql -U postgres``
- Create database user
```sh
CREATE USER DATABASE_USER WITH PASSWORD 'DATABASE_PWD';
```
- Create the dev and test databases
```sh
CREATE DATABASE DATABASE_NAME;
CREATE DATABASE DATABASE_NAME_TEST;
```
- Grant database preveliges for both users
```sh
GRANT ALL PRIVILEGES ON DATABASE DATABASE_NAME TO DATABASE_USER;
GRANT ALL PRIVILEGES ON DATABASE DATABASE_NAME_TEST TO DATABASE_USER;
```

## Environment Setup
Here's an example of the required enviroment variables used by the application.\
You could add them to a `.env` file for faster implementation
- Backend Api Environment variables
```
PORT=3000
DATABEASE_HOST=localhost
DATABASE_NAME=postgres
DATABASE_USER=postgres
DATABASE_PWD=postgres
DATABASE_PORT=5432
DATABASE_NAME_TEST=postgres_test
ENV=dev
BCRYPT_PWD=A_VERY_STRONG_PASSWORD
SALT_ROUNDS=10
JWT_SECRET=A_VERY_STRONG_PASSWORD
```
- CircleCi AWS Environment variables
```
AWS_ACCESS_KEY_ID=iam_aws_access_key
AWS_SECRET_ACCESS_KEY=iam_aws_secret_key
AWS_DEFAULT_REGION=us-east-1
```