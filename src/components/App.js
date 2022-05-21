import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '../pages/home/Home'
import FontAwesome from '../utils/FontAwasome'

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