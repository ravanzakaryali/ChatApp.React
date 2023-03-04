import { combineReducers } from 'redux'
import {
    loginReducer,
    registerReducer
} from './reducers/authReducers';
import {
    getUserReducer,
    getUsersReducer,
    getLoginUserReducer,
    getOnlineUsersReducer
} from './reducers/userReducers';
import {
    getMessagesReducer,
    sendMessageReducer,
    socketMessageReducer
} from './reducers/chatReducers';
import {
    darkLightModeReducer
} from './reducers/commonReducers';

const rootReducer = combineReducers({
    loginReducer,
    registerReducer,
    getUsersReducer,
    getUserReducer,
    getMessagesReducer,
    sendMessageReducer,
    socketMessageReducer,
    getLoginUserReducer,
    getOnlineUsersReducer,
    darkLightModeReducer,
});
export default rootReducer;