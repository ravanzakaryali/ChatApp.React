import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region LoginReducer
export function loginReducer(state = initialState.loginInfo, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_LOADING:
            return {
                ...state,
                loading: true,
                isLogin: false
            }
        case actionTypes.USER_LOGIN_SUCCESS:
            localStorage.setItem('token', JSON.stringify(action.payload.token))
            localStorage.setItem('ex_d', JSON.stringify(action.payload.expiration))
            localStorage.setItem('tk_rf', JSON.stringify(action.payload.refreshToken))
            return {
                ...state,
                loading: false,
                isLogin: true,
            }
        case actionTypes.USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                isLogin: false,
                error: action.payload,
            }
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