import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, header, headerAuthorization } from './helper/axionConfiguration';

export function loginSuccess(data) {
    return { type: actionTypes.USER_LOGIN_SUCCESS, payload: data }
}
export function loginError(error) {
    return { type: actionTypes.USER_LOGIN_ERROR, payload: error }
}
export function loginLoading() {
    return { type: actionTypes.USER_LOGIN_LOADING }
}
export function authLogin(loginState) {
    return async function (dispatch) {
        dispatch(loginLoading())
        let url = `${baseUrl}/authenticate/login`;
        axios.post(url, loginState, header)
            .then((res) => {
                localStorage.setItem("token", res.data.token);
                dispatch(loginSuccess(res.data));
            }).catch((error) => {
                dispatch(loginError(error));
            })
    }
}