# React Typescript APP Example 
Created with CodeSandbox

## Content
1. Get Started
2. Configuration
3. Simple API Calling and Displaying
4. Simple Chat app using websocket
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
### Environment
- Node 16.13.0
- npm 8.1.4
- yarn 1.22.4
### package Installations
- use @emotion/react for styling
```
yarn add @emotion/react
```

What I usually do for putting alert box (e.g. Note or Warning) in markdown texts (not only when using pandoc but also every where that markdown is supported) is surrounding the content with two horizontal lines:

---
_Note:_ Please import jsx from '@emotion/react' instead of React from 'react' at the top of every file where you are going to use css prop.
[Lean more...](https://emotion.sh/docs/css-prop#jsx-pragma)
---
- user router [Learn more...](https://www.npmjs.com/package/react-router-dom)
``` 
yarn add react-router-dom @types/react-router-dom
```
- user HTTP client [Lean more...](https://www.npmjs.com/package/axios)
```
yarn add axios
```
- use nodemon with typescript
```
yarn add nodemon ts-node
```
- use qraphQL
``` 
yarn add apollo-server graphql
```
