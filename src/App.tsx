import React from 'react'
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Home from "./pages/home"
import Recipes from "./pages/recipes"
import Websocket from "./pages/websocket"

export default function App() {

    return (
        <Router>
            <Switch>
                <Route exact path={'/'} component={Home}/>
                <Route path={'/recipes'} component={Recipes}/>
                <Route path={'/websocket'} component={Websocket}/>
            </Switch>
        </Router>
    )
}
