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
        let url = `${baseUrl}/user`;
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
        let url = `${baseUrl}/user/${username}`;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserError(error));
            })
    }
}
//#endregion