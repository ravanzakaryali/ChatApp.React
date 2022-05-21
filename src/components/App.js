import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '../pages/home/Home'
import FontAwesome from '../utils/FontAwasome'
import { CssBaseline, ScopedCssBaseline } from '@mui/material'

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline>
                <Routes>
                    <Route element={<PrivateRouter />}>
                        <Route element={<Home />} path={'/'} />
                    </Route>
                </Routes>
            </CssBaseline>
        </BrowserRouter>
    )
}

export default App