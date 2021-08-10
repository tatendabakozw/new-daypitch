import { db } from "../../helpers/firebase"
import { GET_USERS_FAIL, 
            GET_USERS_REQUEST, 
            GET_USERS_SUCCESS } from "../constants/firestore_usersConstants"

export const get_all_Firestore_users = (uid) =>(dispatch) =>{
    dispatch({
        type: GET_USERS_REQUEST
    })
    const users = []
    db.collection('users').onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            if(doc.data().uid != uid){
                users.push(doc.data())
            }
        })
        dispatch({
            type: GET_USERS_SUCCESS,
            payload: users
        })
    }, (err)=>{
        dispatch({
            type: GET_USERS_FAIL,
            payload: err.response && err.response.message 
                    ? err.response.err.message 
                    : err.message
        })
    })
}