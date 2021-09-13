import { db } from "../../helpers/firebase"
import {
    CREATE_JOB_FAIL,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    GET_ALL_JOB_FAIL,
    GET_ALL_JOB_REQUEST,
    GET_ALL_JOB_SUCCESS,
    GET_SINGLE_JOB_FAIL,
    GET_SINGLE_JOB_REQUEST,
    GET_SINGLE_JOB_SUCCESS,
    GET_USER_JOBS_FAIL,
    GET_USER_JOBS_REQUEST,
    GET_USER_JOBS_SUCCESS
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

//export single jobs
export const get_user_jobs_Actions = (id) => (dispatch) => {
    dispatch({
        type: GET_USER_JOBS_REQUEST,
        payload: id
    })
    const _jobs = []
    db.collection('jobs').where('created_by', '==', id).get().then(res => {
        res.forEach(doc => {
            _jobs.push({
                id: doc.id,
                job: doc.data()
            })
        })
    }).finally(() => {
        dispatch({
            type: GET_USER_JOBS_SUCCESS,
            payload: _jobs
        })
    }).catch(error => {
        dispatch({
            type: GET_USER_JOBS_FAIL,
            payload: error.message
        })
    })
}

//get a single service
export const get_single_Job_Action = (id) => (dispatch) => {
    // console.log(token, id)
    dispatch({
        type: GET_SINGLE_JOB_REQUEST,
        payload: { id }
    });
    db.collection('jobs').doc(id).onSnapshot(snapshot => {
        // console.log(id)
        dispatch({
            type: GET_SINGLE_JOB_SUCCESS,
            payload: snapshot.data()
        })
    }, (error) => {
        dispatch({
            type: GET_SINGLE_JOB_FAIL,
            payload: error.response && error.response.message
                ? error.response.error.message
                : error.message
        })
    })
}