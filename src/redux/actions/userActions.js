import axios from "axios"
import { apiUrl } from "../../helpers/apiUrl"
import { auth } from "../../helpers/firebase"
import { LOGIN_USER_FAIL, 
        LOGIN_USER_REQUEST, 
        LOGIN_USER_SUCCESS, 
        REGISTER_USER_FAIL,
        REGISTER_USER_REQUEST, 
        REGISTER_USER_SUCCESS } from "../constants/userConstants"
import firebase from 'firebase'
var provider = new firebase.auth.GoogleAuthProvider();

//login with credentials
export const loginWithCred = (email, password) => (dispatch) =>{
    dispatch({
        type: LOGIN_USER_REQUEST, payload: {email, password}
    })
    auth.signInWithEmailAndPassword(email, password).then(res=>{
        dispatch({
            type: LOGIN_USER_SUCCESS, payload: res
        })
        localStorage.setItem('userInfo', JSON.stringify(res))
    }).catch(error=>{
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
} 

//login with google
export const loginWithGoog = () =>(dispatch)=>{
    dispatch({
        type: LOGIN_USER_REQUEST
    })
    auth.signInWithPopup(provider).then(res=>{
        if(res.additionalUserInfo.isNewUser){
            axios.post(`${apiUrl}/user/create`,{
                displayName: res.user.displayName,
                firstname: '',
                lastname: '',
                city: '',
                country: '',
                firebase_uid: res.user.uid,
                email: res.user.email
            }).finally((res)=>{
                dispatch({
                    type: REGISTER_USER_SUCCESS, payload:res, message: 'Account created sucessfully'
                })
            }).catch(err=>{
                dispatch({
                    type: REGISTER_USER_FAIL,
                    payload: err.response && err.response.message 
                            ? err.response.err.message 
                            : err.message
                })
            })
        }else{
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: res, message: 'Login Sucessful'
            })
            localStorage.setItem('userInfo', JSON.stringify(res))
        }
    }).catch(error=>{
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
}

//register with credential 
export const registerWithCred = (email, password) => (dispatch) =>{
    dispatch({
        type: REGISTER_USER_REQUEST, payload: {email, password}
    })
    auth.createUserWithEmailAndPassword(email, password).then(res=>{
        axios.post(`${apiUrl}/user/create`,{
            displayName: res.user.displayName,
            firstname: '',
            lastname: '',
            city: '',
            country: '',
            firebase_uid: res.user.uid,
            email: res.user.email
        }).finally((res)=>{
            dispatch({
                type: REGISTER_USER_SUCCESS, payload:res, message: 'Account created sucessfully'
            })
        }).catch(err=>{
            dispatch({
                type: REGISTER_USER_FAIL,
                payload: err.response && err.response.message 
                        ? err.response.err.message 
                        : err.message
            })
        })
    }).catch(err=>{
        dispatch({
            type: REGISTER_USER_FAIL,
            payload: err.response && err.response.message 
                    ? err.response.err.message 
                    : err.message
        })
    })   
}

//register with google
export const registerWithGoog = () => (dispatch) =>{
    dispatch({
        type: REGISTER_USER_REQUEST
    })
    auth.signInWithPopup(provider).then(res=>{
        if(res.additionalUserInfo.isNewUser){
            axios.post(`${apiUrl}/user/create`,{
                displayName: res.user.displayName,
                firstname: '',
                lastname: '',
                city: '',
                country: '',
                firebase_uid: res.user.uid,
                email: res.user.email
            }).finally((res)=>{
                dispatch({
                    type: REGISTER_USER_SUCCESS, payload:res, message: 'Account created sucessfully'
                })
            }).catch(err=>{
                dispatch({
                    type: REGISTER_USER_FAIL,
                    payload: err.response && err.response.message 
                            ? err.response.err.message 
                            : err.message
                })
            })
        }else{
            dispatch({
                type: LOGIN_USER_SUCCESS, payload: res, message: 'Login Sucessful'
            })
            localStorage.setItem('userInfo', JSON.stringify(res))
        }
    }).catch(error=>{
        dispatch({
            type: LOGIN_USER_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
}