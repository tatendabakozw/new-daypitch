import {
  CHANGE_PROFILE_PICTURE_FAIL,
  CHANGE_PROFILE_PICTURE_REQUEST,
  CHANGE_PROFILE_PICTURE_SUCCESS,
  GET_SINGLE_USER_FAIL,
  GET_SINGLE_USER_REQUEST,
  GET_SINGLE_USER_SUCCESS,
  LOGIN_USER_FAIL,
  LOGIN_USER_REQUEST,
  LOGIN_USER_SUCCESS,
  REGISTER_USER_FAIL,
  REGISTER_USER_REQUEST,
  REGISTER_USER_SUCCESS,
  USER_SIGNOUT,
} from "../constants/userConstants";

export const signInWithCredsReducer = (state = { loading: false }, action) => {
  switch (action.type) {
    case LOGIN_USER_REQUEST:
      return { loading: true };
    case LOGIN_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        message: action.message,
      };
    case LOGIN_USER_FAIL:
      return { loading: false, error: action.payload };
    case USER_SIGNOUT:
      return {};
    default:
      return state;
  }
};

//register user with cred
export const registerWithCresReducer = (state = {}, action) => {
  switch (action.type) {
    case REGISTER_USER_REQUEST:
      return { loading: true };
    case REGISTER_USER_SUCCESS:
      return {
        loading: false,
        userInfo: action.payload,
        message: action.message,
      };
    case REGISTER_USER_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//change profile picture and update firebase document
export const change_user_picture_Reducer = (
  state = { profile_loading: false },
  action
) => {
  switch (action.type) {
    case CHANGE_PROFILE_PICTURE_REQUEST:
      return { profile_loading: true };
    case CHANGE_PROFILE_PICTURE_SUCCESS:
      return {
        profile_loading: false,
        profile: action.payload,
        profile_message: 'Picture changed!',
      };
    case CHANGE_PROFILE_PICTURE_FAIL:
      return { profile_loading: false, profile_error: action.payload };
    default:
      return state;
  }
};

//change profile picture and update firebase document
export const get_single_user_Reducer = (
  state = { user_loading: false },
  action
) => {
  switch (action.type) {
    case GET_SINGLE_USER_REQUEST:
      return { user_loading: true };
    case GET_SINGLE_USER_SUCCESS:
      return {
        user_loading: false,
        single_user: action.payload,
      };
    case GET_SINGLE_USER_FAIL:
      return { user_loading: false, user_error: action.payload };
    default:
      return state;
  }
};

