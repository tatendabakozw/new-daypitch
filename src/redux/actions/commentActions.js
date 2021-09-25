import { db } from "../../helpers/firebase"
import { CREATE_COMMENT_REQUEST } from "../constants/commentConstants"

//create a job
export const create_a_comment_action = (id, commenter, comment) => (dispatch) =>{
    dispatch({
        type: CREATE_COMMENT_REQUEST,
        payload: id
    })
    db.collection('comments').doc().set({
        comment: comment,
        commenter: commenter,
        owner: id
    })
}