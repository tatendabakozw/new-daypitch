import { auth, db } from "../../helpers/firebase"
import { LOGIN_USER_FAIL, 
        LOGIN_USER_REQUEST, 
        LOGIN_USER_SUCCESS, 
        REGISTER_USER_FAIL,
        REGISTER_USER_REQUEST, 
        REGISTER_USER_SUCCESS, 
        USER_SIGNOUT} from "../constants/userConstants"
import firebase from 'firebase'
var provider = new firebase.auth.GoogleAuthProvider();

//login with credentials
export const loginWithCred = (email, password) => (dispatch) =>{
    dispatch({
        type: LOGIN_USER_REQUEST
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
            db.collection('users').add({
                name: res.user.displayName,
                uid: res.user.uid,
                role: 'buyer',
                createdAt: new Date()
            }).then((res)=>{
                 dispatch({
                     type: REGISTER_USER_SUCCESS,
                     payload: res,
                     message: 'Account created sucessfully'
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
        const currentUser = auth.currentUser
        const fields = email.split('@');
        currentUser.updateProfile({
            displayName: fields[0]
        }).then(()=>{
            db.collection('users').doc(res.user.uid).set({
                name: fields[0],
                uid: res.user.uid,
                createdAt: new Date(),
                role: 'buyer',
                isOnline: true,
                propic: res.user.photoURL ? res.user.photoURL : null
            }).then(res=>{
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: res,
                    message: 'Account created sucessfully, you can login now'
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
           db.collection('users').doc(res.user.uid).set({
               name: res.user.displayName,
               uid: res.user.uid,
               role: 'buyer',
               createdAt: new Date(),
               isOnline: true,
                propic: res.user.photoURL ? res.user.photoURL : null
           }).then((res)=>{
                dispatch({
                    type: REGISTER_USER_SUCCESS,
                    payload: res,
                    message: 'Account created sucessfully, you can login now'
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

//logout function
export const user_logout = () => (dispatch) =>{
    localStorage.removeItem('userInfo')
    auth.signOut()
    dispatch({
        type: USER_SIGNOUT
    })
}