import { CREATE_MESSAGE_FAIL, 
        CREATE_MESSAGE_REQUEST, 
        CREATE_MESSAGE_SUCCESS, 
        GET_ALL_MESSAGES_FAIL, 
        GET_ALL_MESSAGES_REQUEST, 
        GET_ALL_MESSAGES_SUCCESS 
    } from "../constants/conversationsConstants";

export const create_conversation_Reducer = (state={}, action ) =>{
    switch(action.type){
        case CREATE_MESSAGE_REQUEST:
            return {loading: true}
        case CREATE_MESSAGE_SUCCESS:
            return {loading: false, message: action.payload}
        case CREATE_MESSAGE_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}

export const get_conversation_Reducer = (state={}, action ) =>{
    switch(action.type){
        case GET_ALL_MESSAGES_REQUEST:
            return {loading: true}
        case GET_ALL_MESSAGES_SUCCESS:
            return {loading: false, messages: action.payload}
        case GET_ALL_MESSAGES_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}