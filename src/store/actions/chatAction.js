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
export function getMessages(username, connection) {
    return async function (dispatch) {
        dispatch(getMessagesLoading())
        let url = `${baseUrl}/chat/${username}`;
        axios.get(url, headerAuthorization)
            .then((res) => {
                dispatch(getMessagesSuccess(res.data));
            }).catch((error) => {
                dispatch(getMessagesError(error));
            })
    }
}
//#endregion

//#region Send Message
const sendMessageLoading = () => {
    return { type: actionTypes.SEND_MESSAGE_LOADING }
}
const sendMessageSuccess = data => {
    return { type: actionTypes.SEND_MESSAGE_SUCCESS, payload: data }
}
const sendMessageError = error => {
    return { type: actionTypes.SEND_MESSAGE_ERROR, payload: error }
}
export function sendMessage(message) {
    return async function (dispatch) {
        dispatch(sendMessageLoading())
        let url = `${baseUrl}/chat`;
        axios.post(url, message, headerAuthorization)
            .then((res) => {
                dispatch(sendMessageSuccess(res.data));
            }).catch((error) => {
                dispatch(sendMessageError(error));
            })
    }
}
//#endregion

//#region Socket Message 

const getMessageSocket = data => {
    return { type: actionTypes.SOCKET_MESSAGES_SUCCESS, payload: data }
}

export function socketMessage(message) {
    return async function (dispatch) {
        dispatch(getMessageSocket(message));
    }
}