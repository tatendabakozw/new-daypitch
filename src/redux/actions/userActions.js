import { auth, db, storage } from "../../helpers/firebase";
import {
  CHANGE_PROFILE_PICTURE_FAIL,
  CHANGE_PROFILE_PICTURE_REQUEST,
  CHANGE_PROFILE_PICTURE_SUCCESS,
  EDIT_PROFILE_REQUEST,
  EDIT_PROFILE_SUCCESS,
  EDIT_PROFILE_FAIL,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_SIGNOUT,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  GET_SINGLE_USER_FAIL
} from "../constants/userConstants";
import firebase from "firebase";
import { getRandomString } from "../../utils/getRandomString";
var provider = new firebase.auth.GoogleAuthProvider();

const random_string = getRandomString(8);

//login with credentials
export const loginWithCred = (email, password) => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  auth
    .signInWithEmailAndPassword(email, password)
    .then((res) => {
      dispatch({
        type: LOGIN_USER_SUCCESS,
        payload: res,
      });
      localStorage.setItem("userInfo", JSON.stringify(res));
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.error.message
            : error.message,
      });
    });
};

//login with google
export const loginWithGoog = () => (dispatch) => {
  dispatch({
    type: LOGIN_USER_REQUEST,
  });
  auth
    .signInWithPopup(provider)
    .then((res) => {
      if (res.additionalUserInfo.isNewUser) {
        db.collection("users")
          .add({
            name: res.user.displayName,
            uid: res.user.uid,
            role: "buyer",
            createdAt: new Date(),
          })
          .then((res) => {
            dispatch({
              type: REGISTER_USER_SUCCESS,
              payload: res,
              message: "Account created sucessfully",
            });
          })
          .catch((err) => {
            dispatch({
              type: REGISTER_USER_FAIL,
              payload:
                err.response && err.response.message
                  ? err.response.err.message
                  : err.message,
            });
          });
      } else {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res,
          message: "Login Sucessful",
        });
        localStorage.setItem("userInfo", JSON.stringify(res));
      }
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.error.message
            : error.message,
      });
    });
};

//register with credential
export const registerWithCred = (email, password) => (dispatch) => {
  dispatch({
    type: REGISTER_USER_REQUEST,
    payload: { email, password },
  });
  auth
    .createUserWithEmailAndPassword(email, password)
    .then((res) => {
      const currentUser = auth.currentUser;
      const fields = email.split("@");
      currentUser
        .updateProfile({
          displayName: fields[0],
        })
        .then(() => {
          db.collection("users")
            .doc(res.user.uid)
            .set({
              name: fields[0],
              uid: res.user.uid,
              createdAt: new Date(),
              role: "buyer",
              isOnline: true,
              propic: res.user.photoURL ? res.user.photoURL : null,
              current_contracts: 0,
              total_contracts: 0,
              verified: false,
            })
            .then((res) => {
              dispatch({
                type: REGISTER_USER_SUCCESS,
                payload: res,
                message: "Account created sucessfully, you can login now",
              });
            })
            .catch((err) => {
              dispatch({
                type: REGISTER_USER_FAIL,
                payload:
                  err.response && err.response.message
                    ? err.response.err.message
                    : err.message,
              });
            });
        })
        .catch((err) => {
          dispatch({
            type: REGISTER_USER_FAIL,
            payload:
              err.response && err.response.message
                ? err.response.err.message
                : err.message,
          });
        });
    })
    .catch((err) => {
      dispatch({
        type: REGISTER_USER_FAIL,
        payload:
          err.response && err.response.message
            ? err.response.err.message
            : err.message,
      });
    });
};

//register with google
export const registerWithGoog = () => (dispatch) => {
  dispatch({
    type: REGISTER_USER_REQUEST,
  });
  auth
    .signInWithPopup(provider)
    .then((res) => {
      if (res.additionalUserInfo.isNewUser) {
        db.collection("users")
          .doc(res.user.uid)
          .set({
            name: res.user.displayName,
            uid: res.user.uid,
            role: "buyer",
            createdAt: new Date(),
            isOnline: true,
            propic: res.user.photoURL ? res.user.photoURL : null,
            current_contracts: 0,
            total_contracts: 0,
            verified: false,
          })
          .then((res) => {
            dispatch({
              type: REGISTER_USER_SUCCESS,
              payload: res,
              message: "Account created sucessfully, you can login now",
            });
          })
          .catch((err) => {
            dispatch({
              type: REGISTER_USER_FAIL,
              payload:
                err.response && err.response.message
                  ? err.response.err.message
                  : err.message,
            });
          });
      } else {
        dispatch({
          type: LOGIN_USER_SUCCESS,
          payload: res,
          message: "Login Sucessful",
        });
        localStorage.setItem("userInfo", JSON.stringify(res));
      }
    })
    .catch((error) => {
      dispatch({
        type: LOGIN_USER_FAIL,
        payload:
          error.response && error.response.message
            ? error.response.error.message
            : error.message,
      });
    });
};

//logout function
export const user_logout = () => (dispatch) => {
  localStorage.removeItem("userInfo");
  auth.signOut();
  dispatch({
    type: USER_SIGNOUT,
  });
};

export const change_profile_picture_Action = (id, picture) => (dispatch) => {
  dispatch({
    type: CHANGE_PROFILE_PICTURE_REQUEST,
    payload: { id: picture },
  });
  const uploadTask = storage
    .ref(`/images/daypitch/propics/${random_string}`)
    .put(picture);
  uploadTask.on(
    "state_changed",
    (snapshot) => {
      const progress = Math.round(
        (snapshot.bytesTransferred / snapshot.totalBytes) * 100
      );
      console.log(progress);
    },
    (error) => {
      dispatch({
        type: CHANGE_PROFILE_PICTURE_FAIL,
        payload: error.message,
      });
    },
    () => {
      storage
        .ref("images/daypitch/propics")
        .child(random_string)
        .getDownloadURL()
        .then((url) => {
          auth.currentUser
            .updateProfile({
              photoURL: url,
            })
            .then(() => {
              db.collection("users")
                .doc(id)
                .update({
                  propic: url,
                })
                .then((res) => {
                  dispatch({
                    type: CHANGE_PROFILE_PICTURE_SUCCESS,
                    payload: res,
                  });
                })
                .catch((err) => {
                  dispatch({
                    type: CHANGE_PROFILE_PICTURE_FAIL,
                    payload: err.message,
                  });
                });
            })
            .catch((err) => {
              dispatch({
                type: CHANGE_PROFILE_PICTURE_FAIL,
                payload: err.message,
              });
            });
        });
    }
  );
};

//edit profile action
export const edit_profile_info_Action = (id, username, firstname, lastname, address, city, country) => (dispatch) => {
  dispatch({
    type: EDIT_PROFILE_REQUEST,
    payload: id
  })
  
  db.collection('users').doc(id).set({
    username: username,
    firstname: firstname,
    lastname: lastname,
    address: address,
    city: city,
    country: country
  }, { merge: true }).then(res => {
    dispatch({
      type: EDIT_PROFILE_SUCCESS,
      payload: res
    })
  }).catch(err => {
    dispatch({
      EDIT_PROFILE_FAIL,
      payload: err.message
    })
  })
}

//get single user
export const get_single_user_Action = (id) => (dispatch) => {
  dispatch({
    type: GET_SINGLE_USER_REQUEST,
    payload: id
  })
  db.collection('users').doc(id).onSnapshot(res => {
    console.log(res.data())
    dispatch({
      type: GET_SINGLE_USER_SUCCESS,
      payload: res.data()
    })
  }, (error) => {
    dispatch({
      GET_SINGLE_USER_FAIL,
      payload: error.message
    })
  })
}