import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region LoginReducer
export function loginReducer(state = initialState.loginInfo, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            window.location.reload();
            return action.payload
        case actionTypes.USER_LOGIN_ERROR:
            return action.payload
        default:
            return state;
    }
}
//#endregion

//#region LoginReducer
export function registerReducer(state = initialState.registerInfo, action) {
    switch (action.type) {
        case actionTypes.USER_REGISTER_LOADING:
            return "loading"
        case actionTypes.USER_REGISTER_SUCCESS:
            return action.payload
        case actionTypes.USER_REGISTER_ERROR:
            return action.payload
        default:
            return state;
    }
}
//#endregion