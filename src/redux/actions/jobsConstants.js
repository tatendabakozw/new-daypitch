import { CREATE_JOB_FAIL, CREATE_JOB_REQUEST, CREATE_JOB_SUCCESS } from "../constants/jobsConstants"

export const create_a_job = (msg_obj, id) => (dispatch) => {
    dispatch({
        type: CREATE_JOB_REQUEST,
        payload: { msg_obj, id }
    })
    db.collection('contracts').doc(id).get({
        ...msg_obj,
        status: 'panding',
        createdAt: new Date()
    }).then(res => {
        dispatch({
            type: CREATE_JOB_SUCCESS,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: CREATE_JOB_FAIL,
            payload: err.response && err.response.message
                ? err.response.err.message
                : err.message
        })
    })
}