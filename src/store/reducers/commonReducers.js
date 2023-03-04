import initialState from '../initialState';
import * as actionTypes from '../actions/helper/actionType';

//#region Dark Light mode reducer
export function darkLightModeReducer(state = initialState.darkLightMode, action) {
    switch (action.type) {
        case actionTypes.DARK_LIGHT_MODE:
            let lightDarkMode = null;
            if (action.payload == null) {
                lightDarkMode = window.matchMedia("(prefers-color-scheme:dark)").matches ? 'dark' : 'light'
            } else {
                lightDarkMode = action.payload;
            }
            return {
                ...state,
                data: lightDarkMode
            }
        default:
            return state;
    }
}
//#endregion