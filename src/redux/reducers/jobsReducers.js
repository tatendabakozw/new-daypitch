import { GET_A_CONTRACT_FAIL } from "../constants/contractsConstants";
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
  GET_USER_JOBS_REQUEST,
  GET_USER_JOBS_SUCCESS,
  SAVE_JOB_FAIL,
  SAVE_JOB_REQUEST,
  SAVE_JOB_SUCCESS,
} from "../constants/jobsConstants";

export const create_jobs_Reducer = (state = {}, action) => {
  switch (action.type) {
    case CREATE_JOB_REQUEST:
      return { loading: true };
    case CREATE_JOB_SUCCESS:
      return { loading: false, message: action.payload };
    case CREATE_JOB_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get all jobs
export const getAll_Jobs_Reducer = (state = {}, action) => {
  switch (action.type) {
    case GET_ALL_JOB_REQUEST:
      return { loading: true };
    case GET_ALL_JOB_SUCCESS:
      return { loading: false, all_jobs: action.payload };
    case GET_ALL_JOB_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get job
export const get_single_Job_Reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case GET_SINGLE_JOB_REQUEST:
      return { loading: true };
    case GET_SINGLE_JOB_SUCCESS:
      return { loading: false, job: action.payload };
    case GET_SINGLE_JOB_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get user reduer
export const get_user_jobs_Reducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case GET_USER_JOBS_REQUEST:
      return { loading: true };
    case GET_USER_JOBS_SUCCESS:
      return { loading: false, jobs: action.payload };
    case GET_A_CONTRACT_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//save a job reducer
export const save_single_job_Reducer = (
  state = { save_loading: false },
  action
) => {
  switch (action.type) {
    case SAVE_JOB_REQUEST:
      return { save_loading: true };
    case SAVE_JOB_SUCCESS:
      return {
        save_loading: false,
        saved_job: action.payload,
        message: "Job Saved",
      };
    case SAVE_JOB_FAIL:
      return { save_loading: false, save_error: action.payload };
    default:
      return state;
  }
};
