import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { create_contract_Reducer, get_contract_Reducer } from "./reducers/contractsReducer"
import { create_conversation_Reducer, get_conversation_Reducer } from "./reducers/conversationsReducer"
import { firestore_users_Reducer } from "./reducers/firestore_usersReducer"
import { create_jobs_Reducer, getAll_Jobs_Reducer } from "./reducers/jobsReducers"
import { createAServiceReducer, getAllServicesReducer, singleServiceReducer } from "./reducers/serviceReducer"
import { registerWithCresReducer, signInWithCredsReducer } from "./reducers/userReducer"
import { sidebarReducer } from "./reducers/user_panelREducer"

const initialState = {
    userCredsSignIn:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}
const reducer = combineReducers({
    userCredsSignIn : signInWithCredsReducer,
    registerWithCreds: registerWithCresReducer,
    getService: singleServiceReducer,
    allServices: getAllServicesReducer,
    allJobs: getAll_Jobs_Reducer,
    sidebar_panel: sidebarReducer,
    create_service: createAServiceReducer,
    all_users: firestore_users_Reducer,
    create_message: create_conversation_Reducer,
    all_messages: get_conversation_Reducer,
    create_Contract: create_contract_Reducer,
    user_Contracts: get_contract_Reducer,
    create_Job: create_jobs_Reducer,
})

const composeForBrowser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeForBrowser(applyMiddleware(thunk)))

export default store