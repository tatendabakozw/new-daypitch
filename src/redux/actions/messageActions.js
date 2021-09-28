import { db } from "../../helpers/firebase"
import {
    CREATE_MESSAGE_FAIL,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS,
    GET_ALL_USER_MESSAGES_REQUEST,
    GET_ALL_USER_MESSAGES_FAIL
} from "../constants/messageConstants"
import firebase from 'firebase'

const generateChannelID = (otherID, myid) => {
    if (myid > otherID) {
        return (otherID + myid)
    } else {
        return (myid + otherID)
    }
}

//send a message
export const create_message_Action = (sent_by, body, sent_to) => (dispatch) => {
    dispatch({
        type: CREATE_MESSAGE_REQUEST,
        payload: { sent_by, body, sent_to }
    })
    db.collection('messages').doc().set({
        message: body,
        sent_to: sent_to,
        sent_by: sent_by,
        createdAt: Date.now()
    }).then(res=>{
        dispatch({
            type: CREATE_MESSAGE_SUCCESS,
            payload: res
        })
    }).catch(err=>{
        dispatch({
            type: CREATE_MESSAGE_FAIL,
            payload: err.message
        })
    })
}

//get all user messages
export const get_all_user_messages_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_ALL_USER_MESSAGES_REQUEST,
        dispatch: { id }
    })
    db.collection('users').doc(id).get().then(res => {
        console.log(res.data().UserChatRooms.length)
        const user = db.collection('ChatRooms').where(firebase.firestore.FieldPath.documentId, 'in', res.data().UserChatRooms).getDocuments()
        console.log(user)
    }).catch(error => {
        dispatch({
            type: GET_ALL_USER_MESSAGES_FAIL,
            payload: error.message
        })
    })
}