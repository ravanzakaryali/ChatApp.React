import { combineReducers } from 'redux'
import { loginReducer, registerReducer } from './reducers/authReducers';
import { getUserReducer, getUsersReducer, getLoginUserReducer } from './reducers/userReducers';
import { getMessagesReducer, sendMessageReducer, socketMessageReducer } from './reducers/chatReducers';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getUsersReducer,
    getUserReducer,
    getMessagesReducer,
    sendMessageReducer,
    socketMessageReducer,
    getLoginUserReducer,
})
export default rootReducer;