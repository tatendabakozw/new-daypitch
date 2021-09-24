import { db } from "../../helpers/firebase";
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
  GET_USER_JOBS_SUCCESS,
  SAVE_JOB_FAIL,
  SAVE_JOB_REQUEST,
  SAVE_JOB_SUCCESS,
} from "../constants/jobsConstants";
import firebase from "firebase";

//create a job
export const create_a_job = (msg_obj, id) => (dispatch) => {
  dispatch({
    type: CREATE_JOB_REQUEST,
    payload: { msg_obj, id },
  });
  db.collection("jobs")
    .add({
      ...msg_obj,
      status: "pending",
      createdAt: new Date(),
    })
    .then((res) => {
      dispatch({
        type: CREATE_JOB_SUCCESS,
        payload: res,
      });
    })
    .catch((err) => {
      dispatch({
        type: CREATE_JOB_FAIL,
        payload:
          err.response && err.response.message
            ? err.response.err.message
            : err.message,
      });
    });
};

//get all jobs
export const get_all_Jobs = () => (dispatch) => {
  dispatch({
    type: GET_ALL_JOB_REQUEST,
  });
  const all_services = [];

  db.collection("jobs").onSnapshot(
    (snapshot) => {
      snapshot.forEach((doc) => {
        all_services.push({
          job: doc.data(),
          id: doc.id,
        });
      });
      // console.log(all_services)
      dispatch({
        type: GET_ALL_JOB_SUCCESS,
        payload: all_services,
      });
    },
    (error) => {
      dispatch({
        type: GET_ALL_JOB_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.error.message
            : error.message,
      });
    }
  );
};

//export single jobs
export const get_user_jobs_Actions = (id) => (dispatch) => {
  dispatch({
    type: GET_USER_JOBS_REQUEST,
    payload: id,
  });
  const _jobs = [];
  db.collection("jobs")
    .where("created_by", "==", id)
    .get()
    .then((res) => {
      res.forEach((doc) => {
        _jobs.push({
          id: doc.id,
          job: doc.data(),
        });
      });
    })
    .finally(() => {
      dispatch({
        type: GET_USER_JOBS_SUCCESS,
        payload: _jobs,
      });
    })
    .catch((error) => {
      dispatch({
        type: GET_USER_JOBS_FAIL,
        payload: error.message,
      });
    });
};

//get a single job
export const get_single_Job_Action = (id) => (dispatch) => {
  // console.log(token, id)
  dispatch({
    type: GET_SINGLE_JOB_REQUEST,
    payload: { id },
  });
  const data = [];
  db.collection("jobs")
    .doc(id)
    .collection("saved_jobs")
    .get()
    .then((res) => {
      res.forEach((doc) => {
        data.push(doc.id);
      });
    })
    .finally(() => {
      db.collection("jobs")
        .doc(id)
        .onSnapshot(
          (snapshot) => {
            dispatch({
              type: GET_SINGLE_JOB_SUCCESS,
              payload: {data: snapshot.data(), _saved: data},
              
            });
          },
          (error) => {
            dispatch({
              type: GET_SINGLE_JOB_FAIL,
              payload:
                error.response && error.response.message
                  ? error.response.error.message
                  : error.message,
            });
          }
        );
    });
};

//save job for letter
export const save_single_job_Action = (id, user) => (dispatch) => {
  dispatch({
    type: SAVE_JOB_REQUEST,
    payload: id,
  });
  db.collection("jobs")
    .doc(id)
    .collection("saved_jobs")
    .doc(user)
    .set({
      job_id: id,
      user_id: user,
      saved: true,
    })
    .then((res) => {
      dispatch({
        type: SAVE_JOB_SUCCESS,
        payload: res,
      });
    })
    .catch((error) => {
      dispatch({
        typr: SAVE_JOB_FAIL,
        payload: error.message,
      });
    });
};
