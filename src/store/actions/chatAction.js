import axios from 'axios'
import * as actionTypes from './helper/actionType'
import { baseUrl, headerAuthorization } from './helper/axionConfiguration';

//#region Get Message
const getMessagesLoading = () => {
    return { type: actionTypes.GET_MESSAGES_LOADING }
}
const getMessagesSuccess = data => {
    return { type: actionTypes.GET_MESSAGES_SUCCESS, payload: data }
}
const getMessagesError = error => {
    return { type: actionTypes.GET_MESSAGES_ERROR, payload: error }
}
export function getMessages(username) {
    return async function (dispatch) {
        dispatch(getMessagesLoading())
        let url = `${baseUrl}/chat/${username}`;
        axios.get(url, headerAuthorization)
            .then((res) => {
                console.log(res)
                dispatch(getMessagesSuccess(res.data));
            }).catch((error) => {
                dispatch(getMessagesError(error));
            })
    }
}
//#endregion