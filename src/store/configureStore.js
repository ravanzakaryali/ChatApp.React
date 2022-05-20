import rootReducer from './index'
import thunk from 'redux-thunk'
import { configureStore } from '@reduxjs/toolkit'

const middleware = [thunk]
const store = configureStore({
    reducer: rootReducer,
    middleware,
})
export default store;