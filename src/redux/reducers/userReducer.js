import { LOGIN_USER_FAIL,
         LOGIN_USER_REQUEST, 
         LOGIN_USER_SUCCESS, 
         REGISTER_USER_FAIL, 
         REGISTER_USER_REQUEST, 
         REGISTER_USER_SUCCESS, 
         USER_SIGNOUT } from "../constants/userConstants"

export const signInWithCredsReducer = (state={loading: false}, action) =>{
    switch(action.type){
        case LOGIN_USER_REQUEST:
            return {loading: true}
        case LOGIN_USER_SUCCESS:
            return {loading: false, userInfo: action.payload}
        case LOGIN_USER_FAIL:
            return {loading: false, error: action.payload, message: action.message}
        case USER_SIGNOUT:
            return {}
        default:
            return state
    }
}

//register user with cred
export const registerWithCresReducer = (state={}, action) =>{
    switch(action.type){
        case REGISTER_USER_REQUEST:
            return {loading: true}
        case REGISTER_USER_SUCCESS:
            return {loading: false, userInfo: action.payload, message: action.message}
        case REGISTER_USER_FAIL:
            return {loading: false, error: action.payload}
        default:
            return state
    }
}