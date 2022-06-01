import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

export function loginReducer(state = initialState.loginInfo, action) {
    switch (action.type) {
        case actionTypes.USER_LOGIN_SUCCESS:
            window.location.reload();
            return action.payload
        case actionTypes.USER_LOGIN_ERROR:
            return action.payload
        default:
            return state;
    }
}