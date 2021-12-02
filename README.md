# React Typescript APP Example 
Created with CodeSandbox
## Environment
- Node 16.13.0
- npm 8.1.4
- yarn 1.22.4
- PostgreSQL 14

## Running the project

1. Download the project
2. Running FrontEnd
- run `yarn install` at the root of the project source on your terminal
- run `yarn start` to launch the frontend
3. Running Backend
- set your database provider and url on .env
- run `yarn prisma generate dev` to migrate database
- run `yarn dev` to launch the apollo server

## Trouble Shootings

## Development
1. Get Started
2. Configuration
3. Simple API Calling and Displaying
4. Simple Chat app using websocket
## 1. Get Started with React Typescript

#### create react app with typescript [Learn more...](https://create-react-app.dev/docs/adding-typescript/)
```
npx create-react-app [APP_NAME] --template typescript
# or
yarn create react-app [] --template typescript
```
## 2. Configuration
### package Installations
- use @emotion/react for styling
```
yarn add @emotion/react
```
_Note:_ Please import jsx from '@emotion/react' instead of React from 'react' at the top of every file where you are going to use css prop.
[Lean more...](https://emotion.sh/docs/css-prop#jsx-pragma)
- Use router [Learn more...](https://www.npmjs.com/package/react-router-dom)
``` 
yarn add react-router-dom @types/react-router-dom
```
- Use HTTP client [Lean more...](https://www.npmjs.com/package/axios)
```
yarn add axios
```
- Use nodemon with typescript
```
yarn add nodemon ts-node
```
- Use SQLite & GraphQL Apollo Client
``` 
yarn add apollo-server apollo-server-core graphql 
yarn add apollo-datasource apollo-datasource-rest 
yarn add sequelize
```
- use Prisma 
```
yarn add prisma @prisma/client
yarn add prisma
```
see "prisma" on package.json