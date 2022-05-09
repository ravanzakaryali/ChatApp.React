import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from './containers/home/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Route element={<PrivateRouter />}>
                <Route element={<Home />} path={'/'} />
            </Route>
        </BrowserRouter>
    )
}

export default App