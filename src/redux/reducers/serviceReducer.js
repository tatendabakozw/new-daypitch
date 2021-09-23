import {
  ALL_SERVICE_GET_FAIL,
  ALL_SERVICE_GET_REQUEST,
  ALL_SERVICE_GET_SUCSESS,
  EDIT_SERVICE_FAIL,
  EDIT_SERVICE_REQUEST,
  EDIT_SERVICE_SUCCESS,
  SERVICE_GET_FAIL,
  SERVICE_GET_REQUEST,
  SERVICE_GET_SUCSESS,
  SERVIVE_CREATE_FAIL,
  SERVIVE_CREATE_REQUEST,
  SERVIVE_CREATE_SUCCESS,
} from "../constants/serviceConstants";

//get service
export const singleServiceReducer = (state = {}, action) => {
  switch (action.type) {
    case SERVICE_GET_REQUEST:
      return { loading: true };
    case SERVICE_GET_SUCSESS:
      return { loading: false, service: action.payload };
    case SERVICE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//get all services
export const getAllServicesReducer = (state = {}, action) => {
  switch (action.type) {
    case ALL_SERVICE_GET_REQUEST:
      return { loading: true };
    case ALL_SERVICE_GET_SUCSESS:
      return { loading: false, all_services: action.payload };
    case ALL_SERVICE_GET_FAIL:
      return { loading: false, error: action.payload };
    default:
      return state;
  }
};

//create a service
export const createAServiceReducer = (
  state = { create_loading: false },
  action
) => {
  switch (action.type) {
    case SERVIVE_CREATE_REQUEST:
      return { create_loading: true };
    case SERVIVE_CREATE_SUCCESS:
      return {
        create_loading: false,
        created_service: action.payload,
        create_message: "Your service has been created",
      };
    case SERVIVE_CREATE_FAIL:
      return { create_loading: false, create_error: action.payload };
    default:
      return state;
  }
};

export const edit_a_service_Reducer = (
  state = { edit_loading: false },
  action
) => {
  switch (action.type) {
    case EDIT_SERVICE_REQUEST:
      return { edit_loading: true };
    case EDIT_SERVICE_SUCCESS:
      return {
        edit_loading: false,
        edited_service: action.payload,
        edit_message: "Service edited successfully!",
      };
    case EDIT_SERVICE_FAIL:
      return { edit_loading: false, edit_error: action.payload };
    default:
      return state;
  }
};
