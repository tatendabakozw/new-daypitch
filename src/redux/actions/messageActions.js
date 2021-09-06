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
    db.collection('ChatRooms').doc(generateChannelID(sent_by, sent_to)).set({
        chatId: generateChannelID(sent_by, sent_to),
        users: [sent_to, sent_by],
        sender: sent_by,
        last_message: body,
        time: Date.now()
    }, { merge: true }).then(() => {
        db.collection('ChatRooms').doc(generateChannelID(sent_by, sent_to)).collection('messages').add({
            sender: sent_by,
            message: body,
            createdAt: Date.now(),
            msgId: '',
            status: 'unread'
        }).then((res) => {
            db.collection('ChatRooms').doc(generateChannelID(sent_by, sent_to)).collection('messages').doc(res.id).update({
                msgId: res.id
            }).then(() => {
                db.collection('users').doc(sent_to).update({
                    UserChatRooms: firebase.firestore.FieldValue.arrayUnion(generateChannelID(sent_by, sent_to))
                }).then(() => {
                    db.collection('users').doc(sent_by).update({
                        UserChatRooms: firebase.firestore.FieldValue.arrayUnion(generateChannelID(sent_by, sent_to))
                    }).then((res) => {
                        dispatch({
                            type: CREATE_MESSAGE_SUCCESS,
                            payload: res
                        })
                    })
                }).catch(error => {
                    dispatch({
                        type: CREATE_MESSAGE_FAIL,
                        payload: error.message
                    })
                })
            }).catch(error => {
                dispatch({
                    type: CREATE_MESSAGE_FAIL,
                    payload: error.message
                })
            })
        }).catch(error => {
            dispatch({
                type: CREATE_MESSAGE_FAIL,
                payload: error.message
            })
        })
    }).catch(error => {
        dispatch({
            type: CREATE_MESSAGE_FAIL,
            payload: error.message
        })
    })

}

//get all user messages
export const get_all_user_messages_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_ALL_USER_MESSAGES_REQUEST,
        dispatch: { id }
    })
    let _chats = []
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