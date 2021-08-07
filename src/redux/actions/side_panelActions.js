import { SIDEPANEL_CLOSE, SIDEPANEL_OPEN } from "../constants/side_panelConstants"

export const open_sidepanel = () => (dispatch) =>{
    dispatch({
        type: SIDEPANEL_OPEN,
        payload: {sidebar_open: true }
    })
}

export const close_sidepanel = () => (dispatch) =>{
    dispatch({
        type: SIDEPANEL_CLOSE,
        payload: {sidebar_open: false }
    })
}