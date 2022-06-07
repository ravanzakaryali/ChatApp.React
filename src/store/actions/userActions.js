import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, headerAuthorization } from './helper/axionConfiguration';

//#region Get Users action
const getUsersSuccess = data => {
    return { type: actionTypes.GET_USERS_SUCCESS, payload: data }
}
const getUsersError = error => {
    return { type: actionTypes.GET_USERS_ERROR, payload: error }
}
const getUsersLoading = () => {
    return { type: actionTypes.GET_USERS_LOADING }
}
export function getUsers() {
    return async function (dispatch) {
        dispatch(getUsersLoading())
        let url = `${baseUrl}/user?page=1&size=10`;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getUsersSuccess(res.data));
            }).catch((error) => {
                dispatch(getUsersError(error));
            })
    }
}
//#endregion

//#region Get User action
const getUserSuccess = data => {
    return { type: actionTypes.GET_USER_SUCCESS, payload: data }
}
const getUserError = error => {
    return { type: actionTypes.GET_USER_ERROR, payload: error }
}
const getUserLoading = () => {
    return { type: actionTypes.GET_USER_LOADING }
}
export function getUser(username) {
    return async function (dispatch) {
        dispatch(getUserLoading())
        let url = `${baseUrl}/user/${username} `;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserError(error));
            })
    }
}
//#endregion

//#region Get Login User action
const getLoginUserSuccess = data => {
    return { type: actionTypes.GET_LOGIN_USER_SUCCESS, payload: data }
}
const getLoginUserError = error => {
    return { type: actionTypes.GET_LOGIN_USER_ERROR, payload: error }
}
const getLoginUserLoading = () => {
    return { type: actionTypes.GET_LOGIN_USER_LOADING }
}
export function getLoginUser() {
    return async function (dispatch) {
        dispatch(getLoginUserLoading())
        let url = `${baseUrl}/user/login `;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getLoginUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getLoginUserError(error));
            })
    }
}
//#endregion

//#region Get Online Users action
const getOnlineUsersSuccess = data => {
    return { type: actionTypes.GET_ONLINE_USERS_SUCCESS, payload: data }
}
export function getOnlineUsers(users) {
    return async function (dispatch) {
        dispatch(getOnlineUsersSuccess(users));
    }
}