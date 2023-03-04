import React from 'react'
import { BrowserRouter, Route, Routes } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'
import Home from '../pages/home/Home'
import { createTheme, CssBaseline } from '@mui/material'
import Auth from '../pages/auth/Auth'
import Login from '../pages/auth/Login'
import Register from '../pages/auth/Register'
import { Provider } from 'react-redux'
import store from '../store/configureStore'
import Chats from './Chats/Chats'
import Setting from '../pages/settings/Setting';
import Index from '../pages/Index'
import { ThemeProvider } from '@emotion/react'
import { getDesign } from '../styles/theme'

const theme = createTheme(getDesign(
    window.matchMedia("(prefers-color-scheme:dark)").matches ?
        'light' :
        'light'
));

const App = () => {

    return (
        <BrowserRouter>
            <Provider store={store}>
                <ThemeProvider theme={theme}>
                    <CssBaseline>
                        <Routes>
                            <Route element={<PrivateRouter />}>
                                <Route element={<Index />}>
                                    <Route element={<Home />} path={'/'} >
                                        <Route element={<Chats />} path={':username'} />
                                    </Route>
                                    <Route element={<Setting />} path={'/settings'}>
                                    </Route>
                                </Route>
                            </Route>
                            <Route element={<Auth />} path="/auth">
                                <Route element={<Login />} path={'login'} />
                                <Route element={<Register />} path={'register'} />
                            </Route>
                        </Routes>
                    </CssBaseline>
                </ThemeProvider>
            </Provider>
        </BrowserRouter>
    )
}

export default App