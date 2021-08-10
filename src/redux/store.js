import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
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
    sidebar_panel: sidebarReducer,
    create_service: createAServiceReducer
})

const composeForBrowser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeForBrowser(applyMiddleware(thunk)))

export default store