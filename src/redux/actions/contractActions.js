import { db } from "../../helpers/firebase"
import {
    CREATE_CONTRACTS_FAIL,
    CREATE_CONTRACTS_REQUEST,
    CREATE_CONTRACTS_SUCCESS, 
    GET_ALL_CONTRACTS_REQUEST
} from "../constants/contractsConstants"

export const create_a_contract = (msg_obj, id) => (dispatch) => {
    dispatch({
        type: CREATE_CONTRACTS_REQUEST,
        payload: { msg_obj, id }
    })
    db.collection('contracts').doc(id).get({
        ...msg_obj,
        isView: false,
        createdAt: new Date()
    }).then(res => {
        dispatch({
            type: CREATE_CONTRACTS_SUCCESS,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: CREATE_CONTRACTS_FAIL,
            payload: err.response && err.response.message
                ? err.response.err.message
                : err.message
        })
    })
}

export const get_a_Contract = (id) => (dispatch) => {
    dispatch({
        type: GET_ALL_CONTRACTS_REQUEST,
        payload: { id }
    })
    db.collection('contracts').doc(id).get().then(res => {
        console.log(id)
        dispatch({
            type: CREATE_CONTRACTS_SUCCESS,
            payload: res
        })
    }).catch(err => {
        dispatch({
            type: CREATE_CONTRACTS_FAIL,
            payload: err.response && err.response.message
                ? err.response.err.message
                : err.message
        })
    })
}