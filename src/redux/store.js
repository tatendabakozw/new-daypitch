import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import thunk from "redux-thunk";
import {
  create_contract_Reducer,
  get_contract_Reducer,
  get_user_contracts_Reducer,
} from "./reducers/contractsReducer";
import { firestore_users_Reducer } from "./reducers/firestore_usersReducer";
import {
  create_jobs_Reducer,
  getAll_Jobs_Reducer,
  get_single_Job_Reducer,
  get_user_jobs_Reducer,
  save_single_job_Reducer,
} from "./reducers/jobsReducers";
import {
  create_message_Reducer,
  get_all_user_messages_Reducer,
} from "./reducers/messageReducer";
import { create_a_proposal_Reducer } from "./reducers/proposalRedcuers";
import {
  filter_by_category_Reducer,
  search_item_Reducer,
} from "./reducers/searchReducers";
import {
  createAServiceReducer,
  edit_a_service_Reducer,
  getAllServicesReducer,
  singleServiceReducer,
} from "./reducers/serviceReducer";
import {
  change_user_picture_Reducer,
  get_single_user_Reducer,
  registerWithCresReducer,
  signInWithCredsReducer,
} from "./reducers/userReducer";
import { sidebarReducer } from "./reducers/user_panelREducer";

const initialState = {
  userCredsSignIn: {
    userInfo: localStorage.getItem("userInfo")
      ? JSON.parse(localStorage.getItem("userInfo"))
      : null,
  },
};
const reducer = combineReducers({
  //for users
  userCredsSignIn: signInWithCredsReducer,
  registerWithCreds: registerWithCresReducer,
  all_users: firestore_users_Reducer,
  change_user_picture: change_user_picture_Reducer,
  single_user: get_single_user_Reducer,

  //for services
  create_service: createAServiceReducer,
  edit_service: edit_a_service_Reducer,
  getService: singleServiceReducer,
  allServices: getAllServicesReducer,

  //for jobs
  allJobs: getAll_Jobs_Reducer,
  single_Job: get_single_Job_Reducer,
  create_Job: create_jobs_Reducer,
  user_jobs: get_user_jobs_Reducer,
  save_job: save_single_job_Reducer,

  //for ui
  sidebar_panel: sidebarReducer,

  //for messages
  create_message: create_message_Reducer,
  all_messages: get_all_user_messages_Reducer,

  //for contracts
  create_Contract: create_contract_Reducer,
  single_contract: get_contract_Reducer,
  all_user_contracts: get_user_contracts_Reducer,

  //for proposals
  create_proposal: create_a_proposal_Reducer,

  // for search
  search_item: search_item_Reducer,
  filter_by_category: filter_by_category_Reducer,
});

const composeForBrowser =
  window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(
  reducer,
  initialState,
  composeForBrowser(applyMiddleware(thunk))
);

export default store;
