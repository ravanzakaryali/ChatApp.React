import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region Get Users Reducer
export function getUsersReducer(state = initialState.users, action) {
    switch (action.type) {
        case actionTypes.GET_USERS_LOADING:
            return {
                ...state,
                loading: true,
                data: [],
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
                error: action.payload,
                data: [],
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
                loading: true,
                data: [],
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
                error: action.payload,
                data: [],
            }
        default:
            return state;
    }
}
//#endregion

//#region Get Login User Reducer
export function getLoginUserReducer(state = initialState.loginUser, action) {
    switch (action.type) {
        case actionTypes.GET_LOGIN_USER_LOADING:
            return {
                ...state,
                loading: true,
                data: [],
            }
        case actionTypes.GET_LOGIN_USER_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        case actionTypes.GET_LOGIN_USER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
                data: [],
            }
        default:
            return state;
    }
}
//#endregion

//#region Get Online Users Reducer
export function getOnlineUsersReducer(state = initialState.onlineUsers, action) {
    switch (action.type) {
        case actionTypes.GET_ONLINE_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                data: action.payload
            }
        default:
            return state;
    }
}
//#endregion