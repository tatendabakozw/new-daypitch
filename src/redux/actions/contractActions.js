import { db } from "../../helpers/firebase"
import {
    CREATE_CONTRACTS_FAIL,
    CREATE_CONTRACTS_REQUEST,
    CREATE_CONTRACTS_SUCCESS,
    GET_ALL_USER_CONTRACTS_FAIL,
    GET_ALL_USER_CONTRACTS_REQUEST,
    GET_ALL_USER_CONTRACTS_SUCCESS,
    GET_A_CONTRACT_FAIL,
    GET_A_CONTRACT_REQUEST,
    GET_A_CONTRACT_SUCCESS
} from "../constants/contractsConstants"

export const create_a_contract = (msg_obj, id) => (dispatch) => {
    dispatch({
        type: CREATE_CONTRACTS_REQUEST,
        payload: { msg_obj, id }
    })
    db.collection('contracts').doc().set({
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
        type: GET_A_CONTRACT_REQUEST,
        payload: { id }
    })
    db.collection('contracts').doc(id).get().then(res => {
        dispatch({
            type: GET_A_CONTRACT_SUCCESS,
            payload: res.data()
        })
    }).catch(err => {
        dispatch({
            type: GET_A_CONTRACT_FAIL,
            payload: err.response && err.response.message
                ? err.response.err.message
                : err.message
        })
    })
}

//GET ALL USER CONTRACTS for notifications
export const get_user_contracts_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_ALL_USER_CONTRACTS_REQUEST,
        payload: { id }
    })
    const arr = []
    db.collection('contracts').where('sent_to', '==', id).where('status', '==', 'inactive').get().then(res => {
        res.forEach(doc => {
            arr.push({
                id: doc.id,
                contracts: doc.data()
            })
        })
    }).finally(() => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_SUCCESS,
            payload: arr
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_FAIL,
            payload: error.message
        })
    })
}

//get all user contracts 
export const get_all_user_contracts_Action = (id) => (dispatch) => {
    dispatch({
        type: GET_ALL_USER_CONTRACTS_REQUEST,
        payload: { id }
    })
    const arr = []
    db.collection('contracts').where('sent_to', '==', id).get().then(res => {
        res.forEach(doc => {
            arr.push({
                id: doc.id,
                contracts: doc.data()
            })
        })
    }).finally(() => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_SUCCESS,
            payload: arr
        })
    }).catch(error => {
        dispatch({
            type: GET_ALL_USER_CONTRACTS_FAIL,
            payload: error.message
        })
    })
}