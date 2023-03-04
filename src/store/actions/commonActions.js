import * as actionTypes from './helper/actionType'


//#region Dark Light mode action
const darkLightMode = data => {
    return { type: actionTypes.DARK_LIGHT_MODE, payload: data }
}
export function darkLightModeAction(data) {
    return function (dispatch) {
        dispatch(darkLightMode(data));
    }
}

