import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from './containers/home/Home'

const App = () => {
    return (
        <BrowserRouter>
            <Routes>
                <Route element={<PrivateRouter />}>
                    <Route element={<Home />} path={'/'} />
                </Route>
            </Routes>
        </BrowserRouter>
    )
}

export default App