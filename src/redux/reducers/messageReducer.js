import {
    CREATE_MESSAGE_FAIL,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    GET_ALL_USER_MESSAGES_FAIL,
    GET_ALL_USER_MESSAGES_REQUEST,
    GET_ALL_USER_MESSAGES_SUCCESS
} from "../constants/messageConstants"

//get service
export const create_message_Reducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_MESSAGE_REQUEST:
            return { loading: true }
        case CREATE_MESSAGE_SUCCESS:
            return { loading: false, message: action.payload, message: 'Message Send' }
        case CREATE_MESSAGE_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//get all user messages
export const get_all_user_messages_Reducer = (state = {loading: false}, action) => {
    switch (action.type) {
        case GET_ALL_USER_MESSAGES_REQUEST:
            return { loading: true }
        case GET_ALL_USER_MESSAGES_SUCCESS:
            return { loading: false, messages: action.payload }
        case GET_ALL_USER_MESSAGES_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}