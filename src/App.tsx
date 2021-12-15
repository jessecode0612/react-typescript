import React from 'react'
import {BrowserRouter as Router, Route, Routes} from 'react-router-dom'
import HomePage from "./pages/home"
import ErrorPage from './pages/404'
import {store, persisStore} from './store'
import {Provider} from 'react-redux'
import {PersistGate} from 'redux-persist/es/integration/react'

import DocsPage from './pages/docs'
import RecipesPage from './pages/samples/recipes'
import ResizablePage from './pages/samples/resizable'
import ToasterPage from './pages/samples/toaster'
import CarouselPage from './pages/samples/carousel'

export default function App() {

    return (
        <Provider store={store}>
            <PersistGate persistor={persisStore} loading={null}>
                <Router>
                    <Routes>
                        <Route path={'/'} element={<HomePage/>}/>
                        <Route path={'/samples/simple-api'} element={<RecipesPage/>}/>
                        <Route path={'/samples/resizable'} element={<ResizablePage/>}/>
                        <Route path={'/samples/toaster'} element={<ToasterPage/>}/>
                        <Route path={'/samples/carousel'} element={<CarouselPage/>}/>
                        <Route path={'/docs'} element={<DocsPage/>}/>
                        <Route path={'*'} element={<ErrorPage/>}/>
                    </Routes>
                </Router>
            </PersistGate>
        </Provider>
    )
}
