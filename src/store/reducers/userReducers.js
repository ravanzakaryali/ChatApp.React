import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region Get Users Reducer
export function getUsersReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_USERS_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_USERS_ERROR:
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

//#region Get User Reducer
export function getUserReducer(state = initialState.user, action) {
    switch (action.type) {
        case actionTypes.GET_USER_LOADING:
            return {
                ...state,
                loading: true
            }
        case actionTypes.GET_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_USER_ERROR:
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