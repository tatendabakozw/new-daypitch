import {
    CREATE_JOB_FAIL,
    CREATE_JOB_REQUEST,
    CREATE_JOB_SUCCESS,
    GET_ALL_JOB_FAIL,
    GET_ALL_JOB_REQUEST,
    GET_ALL_JOB_SUCCESS
} from "../constants/jobsConstants"

export const create_jobs_Reducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_JOB_REQUEST:
            return { loading: true }
        case CREATE_JOB_SUCCESS:
            return { loading: false, message: action.payload }
        case CREATE_JOB_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//get all services
export const getAll_Jobs_Reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_ALL_JOB_REQUEST:
            return { loading: true }
        case GET_ALL_JOB_SUCCESS:
            return { loading: false, all_services: action.payload }
        case GET_ALL_JOB_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}
