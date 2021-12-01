import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/home"
import RecipesPage from './pages/recipes'
import ErrorPage from './pages/404'

export default function App() {

    return (
        <Router>
            <Routes>
                <Route path={'/'} element={<HomePage />} />
                <Route path={'/module/simple-api'} element={<RecipesPage />} />
                <Route path={'*'} element={<ErrorPage />} />
            </Routes>
        </Router>
    )
}
