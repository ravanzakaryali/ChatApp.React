import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region Login Reducer
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
            localStorage.setItem('rf_tk', JSON.stringify(action.payload.refreshToken))
            return {
                ...state,
                loading: false,
                isLogin: true,
            }
        case actionTypes.USER_LOGIN_ERROR:
            return {
                ...state,
                loading: false,
                message: "Username or password is incorrect",
                error: action.payload,
            }
        default:
            return state;
    }
}
//#endregion

//#region Register Reducer
export function registerReducer(state = initialState.registerInfo, action) {
    switch (action.type) {
        case actionTypes.USER_REGISTER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.USER_REGISTER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.USER_REGISTER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload
            }
        default:
            return state;
    }
}
//#endregion