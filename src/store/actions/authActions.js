import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, header, headerAuthorization } from './helper/axionConfiguration';

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
                localStorage.setItem("token", res.data.token);
                dispatch(loginSuccess(res.data));
            }).catch((error) => {
                dispatch(loginError(error));
            })
    }
}