import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, header, headerAuthorization } from './helper/axionConfiguration';

//#region Login
const loginSuccess = data => {
    return { type: actionTypes.USER_LOGIN_SUCCESS, payload: data }
}
const loginError = error => {
    return { type: actionTypes.USER_LOGIN_ERROR, payload: error }
}
const loginLoading = () => {
    return { type: actionTypes.USER_LOGIN_LOADING }
}
export function authLogin(loginState) {
    return async function (dispatch) {
        console.log(loginState);
        dispatch(loginLoading())
        let url = `${baseUrl}/autheticate/login`;
        axios.post(url, loginState, header)
            .then((res) => {
                dispatch(loginSuccess(res.data));
            }).catch((error) => {
                dispatch(loginError(error));
            })
    }
}
//#endregion

//#region Register
const registerSuccess = data => {
    return { type: actionTypes.USER_REGISTER_SUCCESS, payload: data }
}
const registerError = error => {
    return { type: actionTypes.USER_REGISTER_ERROR, payload: error }
}
const registerLoading = () => {
    return { type: actionTypes.USER_REGISTER_LOADING }
}
export function authRegister(registerState) {
    return async function (dispatch) {
        dispatch(registerLoading())
        let url = `${baseUrl}/autheticate/register`;
        axios.post(url, registerState, header)
            .then((res) => {
                dispatch(registerSuccess(res.data));
            }).catch((error) => {
                dispatch(registerError(error));
            })
    }
}
//#endregion