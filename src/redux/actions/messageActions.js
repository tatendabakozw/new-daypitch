import { db } from "../../helpers/firebase"
import {
    CREATE_MESSAGE_FAIL,
    CREATE_MESSAGE_REQUEST,
    CREATE_MESSAGE_SUCCESS
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