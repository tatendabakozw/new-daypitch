import { SERVICE_GET_FAIL, SERVICE_GET_REQUEST, SERVICE_GET_SUCSESS } from "../constants/serviceConstants";

//get service
export const singleServiceReducer = (state={}, action) =>{
    switch(action.type){
        case SERVICE_GET_REQUEST:
            return {loading: true}
        case SERVICE_GET_SUCSESS:
            return {loading: false, service: action.payload}
        case SERVICE_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}