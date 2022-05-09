import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'
import PrivateRouter from './common/PrivateRouter'

const App = () => {
    return (
        <BrowserRouter>
            <Route element={<PrivateRouter />}>
            </Route>
            <div>Chat App</div>
        </BrowserRouter>
    )
}

export default App