import { applyMiddleware, combineReducers, compose, createStore } from "redux"
import thunk from "redux-thunk"
import { registerWithCresReducer, signInWithCredsReducer } from "./userReducer"

const initialState = {
    userCredsSignIn:{
        userInfo: localStorage.getItem('userInfo') ? JSON.parse(localStorage.getItem('userInfo')) : null
    }
}
const reducer = combineReducers({
    userCredsSignIn : signInWithCredsReducer,
    registerWithCreds: registerWithCresReducer
})

const composeForBrowser = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose
const store = createStore(reducer, initialState, composeForBrowser(applyMiddleware(thunk)))

export default store