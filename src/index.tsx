/* eslint-disable-next-line no-use-before-define */
import React from "react"
import ReactDOM from "react-dom"

import App from "./App"
import {Global} from '@emotion/react'
import appStyles from './styles/app.css'

const rootElement = document.getElementById("root")
ReactDOM.render(
    <React.StrictMode>
        <Global styles={appStyles}/>
        <App/>
    </React.StrictMode>,
    rootElement
)
