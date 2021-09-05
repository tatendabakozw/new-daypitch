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


export const create_contract_Reducer = (state = {}, action) => {
    switch (action.type) {
        case CREATE_CONTRACTS_REQUEST:
            return { loading: true }
        case CREATE_CONTRACTS_SUCCESS:
            return { loading: false, message: action.payload }
        case CREATE_CONTRACTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

export const get_contract_Reducer = (state = {}, action) => {
    switch (action.type) {
        case GET_A_CONTRACT_REQUEST:
            return { loading: true }
        case GET_A_CONTRACT_SUCCESS:
            return { loading: false, messages: action.payload }
        case GET_A_CONTRACT_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}

//get all user contracts that are inactive ot active or in interview
export const get_user_contracts_Reducer = (state = { loading: false }, action) => {
    switch (action.type) {
        case GET_ALL_USER_CONTRACTS_REQUEST:
            return { loading: true }
        case GET_ALL_USER_CONTRACTS_SUCCESS:
            return { loading: false, contracts: action.payload }
        case GET_ALL_USER_CONTRACTS_FAIL:
            return { loading: false, error: action.payload }
        default:
            return state
    }
}