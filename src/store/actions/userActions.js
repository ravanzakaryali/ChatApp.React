import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, header, headerAuthorization } from './helper/axionConfiguration';

const getUserSuccess = data => {
    return { type: actionTypes.USER_GET_SUCCESS, payload: data }
}
const getUserError = error => {
    return { type: actionTypes.USER_GET_ERROR, payload: error }
}
const getUserLoading = () => {
    return { type: actionTypes.USER_GET_LOADING }
}
export function getUsers() {
    return async function (dispatch) {
        dispatch(getUserLoading())
        let url = `${baseUrl}/user`;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getUserSuccess(res.data));
            }).catch((error) => {
                dispatch(getUserError(error));
            })
    }
}
