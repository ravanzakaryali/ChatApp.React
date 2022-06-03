import { combineReducers } from 'redux'
import { loginReducer, registerReducer } from './reducers/authReducers';
import { getUserReducer, getUsersReducer } from './reducers/userReducers';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getUsersReducer,
    getUserReducer,
})
export default rootReducer;