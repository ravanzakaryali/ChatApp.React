import { combineReducers } from 'redux'
import { loginReducer } from './reducers/authReducers';

const rootReducer = combineReducers({
    loginReducer,
    //Reducers
})
export default rootReducer;