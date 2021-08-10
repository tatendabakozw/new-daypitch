import { GET_USERS_FAIL, GET_USERS_REQUEST, GET_USERS_SUCCESS } from "../constants/firestore_usersConstants";

export const firestore_users_Reducer = (state={}, action) =>{
    switch(action.type){
        case GET_USERS_REQUEST:
            return {loading: true}
        case GET_USERS_SUCCESS:
            return {loading: false, users:action.payload }
        case GET_USERS_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}