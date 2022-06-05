import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region Get Message Reducer
export function getMessagesReducer(state = initialState.messages, action) {
    switch (action.type) {
        case actionTypes.GET_MESSAGES_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_MESSAGES_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload,
            }
        case actionTypes.GET_MESSAGES_ERROR:
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