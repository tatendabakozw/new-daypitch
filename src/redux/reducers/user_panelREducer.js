import { SIDEPANEL_CLOSE, SIDEPANEL_OPEN } from "../constants/side_panelConstants";

export const sidebarReducer = (state={sidebar_open: false}, action)=>{
    switch(action.type){
        case SIDEPANEL_OPEN:
            return {sidebar_state: action.payload}
        case SIDEPANEL_CLOSE:
            return {sidebar_state: action.payload}
        default:
            return state
    }
}