import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '../pages/home/Home'
import { CssBaseline } from '@mui/material'
import Auth from '../pages/auth/Auth'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'

const App = () => {
    return (
        <BrowserRouter>
            <CssBaseline>
                <Routes>
                    <Route element={<PrivateRouter />}>
                        <Route element={<Home />} path={'/'} />
                    </Route>
                    <Route element={<Auth />} path="/auth">
                        <Route element={<Login />} path={'login'} />
                        <Route element={<Register />} path={'register'} />
                    </Route>
                </Routes>
            </CssBaseline>
        </BrowserRouter>
    )
}

export default App