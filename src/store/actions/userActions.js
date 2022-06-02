import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, header, headerAuthorization } from './helper/axionConfiguration';

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
