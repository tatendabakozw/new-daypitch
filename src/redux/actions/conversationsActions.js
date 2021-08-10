import { db } from "../../helpers/firebase"
import { CREATE_MESSAGE_FAIL, CREATE_MESSAGE_REQUEST, CREATE_MESSAGE_SUCCESS, GET_ALL_MESSAGES_FAIL, GET_ALL_MESSAGES_REQUEST, GET_ALL_MESSAGES_SUCCESS } from "../constants/conversationsConstants"

export const create_a_Message_action = (msg_obj) => (dispatch) =>{
    dispatch({
        type: CREATE_MESSAGE_REQUEST
    })
    db.collection('conversations').add({
        ...msg_obj,
        isView: false,
        createdAt: new Date()
    }).then(res=>{
        dispatch({
            type: CREATE_MESSAGE_SUCCESS,
            payload: res
        })
    }).catch(err=>{
        dispatch({
            type: CREATE_MESSAGE_FAIL,
            payload: err.response && err.response.message 
                    ? err.response.err.message 
                    : err.message
        })
    })
}

export const get_all_Messages = (user) => (dispatch) =>{
    dispatch({
        type: GET_ALL_MESSAGES_REQUEST
    })
    const conversations = []
    db.collection('conversations').where('sender', 'in', [user.uid_1, user.uid_2]).onSnapshot((snapshot)=>{
        snapshot.forEach(doc=>{
            conversations.push(doc.data())
        })
        dispatch({
            type: GET_ALL_MESSAGES_SUCCESS,
            payload: conversations
        })
    },(err)=>{
        dispatch({
            type: GET_ALL_MESSAGES_FAIL,
            payload: err.response && err.response.message 
                    ? err.response.err.message 
                    : err.message
        })
    })
}