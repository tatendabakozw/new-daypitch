import { db } from "../../helpers/firebase"
import {
    CREATE_JOB_FAIL,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    GET_ALL_JOB_FAIL,
    GET_ALL_JOB_REQUEST,
    GET_ALL_JOB_SUCCESS
} from "../constants/jobsConstants"

export const create_a_job = (msg_obj, id) => (dispatch) => {
    dispatch({
        type: CREATE_JOB_REQUEST,
        payload: { msg_obj, id }
    })
    db.collection('jobs').add({
        ...msg_obj,
        status: 'pending',
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

//get all setvices 
export const get_all_Jobs = () => (dispatch) => {
    dispatch({
        type: GET_ALL_JOB_REQUEST
    });
    const all_services = []

    db.collection('jobs').onSnapshot(snapshot => {
        snapshot.forEach(doc => {
            all_services.push({
                job: doc.data(),
                id: doc.id
            })
        })
        // console.log(all_services)
        dispatch({
            type: GET_ALL_JOB_SUCCESS,
            payload: all_services
        })
    }, (error) => {
        dispatch({
            type: GET_ALL_JOB_FAIL,
            payload: error.response && error.response.message
                ? error.response.error.message
                : error.message
        })
    })
}