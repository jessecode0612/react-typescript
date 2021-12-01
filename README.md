# React Typescript APP Example 
Created with CodeSandbox

## Content
1. Get Started
2. Configuration
3. Simple API Calling and Displaying
4. Simple Chat app using websocket
5. 
6. Trouble shootings
## 1. Get Started with React Typescript
- make sure node is installed
- make sure yarn is installed

#### create react app with typescript [Learn more...](https://create-react-app.dev/docs/adding-typescript/)
```
npx create-react-app [APP_NAME] --template typescript
# or
yarn create react-app [] --template typescript
```
## 2. Configuration
### Env
- REACT_APP_API_URL = https://ecomm-products.modus.workers.dev/
### Yarn
#### Set up PNP with the latest version rc [Lean more...](https://yarnpkg.com/cli/set/version)
```
yarn set version berry
yarn set version latest
yarn set version canary
```
#### Import yarn plugins See [Learn more...](https://yarnpkg.com/api/)
```
yarn plugin import typescript
yarn plugin import interactive-tools
```
### TS configuration [See tsconfig.json]
- set alias (baseUrl & paths)
### NPM package Installations
- use sass [Learn more](https://www.npmjs.com/package/node-sass)
```
yarn add node-sass
yarn add @types/node-sass
```
- user router [Learn more...](https://www.npmjs.com/package/react-router-dom)
``` 
yarn add react-router-dom
yarn add react-router-dom@next
yarn add @types/react-router-dom -D
```
- user HTTP client [Lean more...](https://www.npmjs.com/package/axios)
```
yarn add axios
```

