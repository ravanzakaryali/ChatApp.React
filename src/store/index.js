import { combineReducers } from 'redux'
import { loginReducer, registerReducer } from './reducers/authReducers';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
})
export default rootReducer;