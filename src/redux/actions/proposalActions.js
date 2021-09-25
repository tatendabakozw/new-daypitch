import { db, storage } from "../../helpers/firebase";
import {
  CREATE_PROPOSAL_FAIL,
  CREATE_PROPOSAL_REQUEST,
  CREATE_PROPOSAL_SUCCESS,
} from "../constants/proposalConstants";
import firebase from 'firebase'

export const create_a_proposal_Action =
  (job_id, message, attachemts, created_by, amount, payment_period, name) =>
  (dispatch) => {
    dispatch({
      type: CREATE_PROPOSAL_REQUEST,
    });
    const promises = [];
    attachemts.forEach((file) => {
      const uploadTask = storage
        .ref()
        .child(`images/attachements/${name}-${Date.now()}`)
        .put(file);
      promises.push(uploadTask);
      uploadTask.on(
        firebase.storage.TaskEvent.STATE_CHANGED,
        (snapshot) => {
          const progress =
            (snapshot.bytesTransferred / snapshot.totalBytes) * 100;
          if (snapshot.state === firebase.storage.TaskState.RUNNING) {
            console.log(`Progress: ${progress}%`);
          }
        },
        (error) => {
          dispatch({
            type: CREATE_PROPOSAL_FAIL,
            payload: error.message,
          });
        },
        async () => {
          const downloadURL = await uploadTask.snapshot.ref.getDownloadURL();
          // do something with the url
          db.collection("proposals")
            .doc()
            .set(
              {
                job: job_id,
                message: message,
                attachments: downloadURL,
                createdAt: Date.now(),
                created_by: created_by,
                offer: {
                  amount: amount,
                  payment_period: payment_period,
                },
              },
              { merge: true }
            )
            .then((res) => {
              console.log(res);
            })
            .catch((error) => {
              dispatch({
                type: CREATE_PROPOSAL_FAIL,
                payload: error.message,
              });
            });
        }
      );
    });
    Promise.all(promises)
      .then((response) => {
        dispatch({
          type: CREATE_PROPOSAL_SUCCESS,
          payload: response,
        });
      })
      .catch((errorr) => {
        dispatch({
          type: CREATE_PROPOSAL_FAIL,
          payload: errorr.message,
        });
      });
  };
