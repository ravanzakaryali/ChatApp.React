import { combineReducers } from 'redux'
import { loginReducer, registerReducer } from './reducers/authReducers';
import { getUserReducer, getUsersReducer } from './reducers/userReducers';
import { getMessagesReducer } from './reducers/chatReducers';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getUsersReducer,
    getUserReducer,
    getMessagesReducer
})
export default rootReducer;