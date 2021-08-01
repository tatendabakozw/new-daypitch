import { ALL_SERVICE_GET_FAIL, ALL_SERVICE_GET_SUCSESS, SERVICE_GET_FAIL, SERVICE_GET_REQUEST, SERVICE_GET_SUCSESS } from "../constants/serviceConstants";

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

//get all services
export const getAllServicesReducer = (state={}, action) =>{
    switch(action.type){
        case ALL_SERVICE_GET_FAIL:
            return {loading: true}
        case ALL_SERVICE_GET_SUCSESS:
            return {loading: false, all_services: action.payload}
        case SERVICE_GET_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}