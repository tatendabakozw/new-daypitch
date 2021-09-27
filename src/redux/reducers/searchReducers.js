import {
    FILTER_BY_CATEGORY_FAIL,
    FILTER_BY_CATEGORY_REQUEST,
    FILTER_BY_CATEGORY_SUCCESS,
    SEARCH_ITEM_FAIL,
    SEARCH_ITEM_REQUEST,
    SEARCH_ITEM_SUCCESS
} from "../constants/searchConstants";

//universal search reducer
export const search_item_Reducer = (state = { search_loading: false }, action) => {
    switch (action.type) {
        case SEARCH_ITEM_REQUEST:
            return { search_loading: true }
        case SEARCH_ITEM_SUCCESS:
            return { search_loading: false, search_result: action.payload }
        case SEARCH_ITEM_FAIL:
            return { search_loading: false, search_error: action.error }
        default:
            return state
    }
}

//filter by category reducer 
export const filter_by_category_Reducer = (state = { filter_loading: false }, action) =>{
    switch (action.type) {
        case FILTER_BY_CATEGORY_REQUEST:
            return { filter_loading: true }
        case FILTER_BY_CATEGORY_SUCCESS:
            return { filter_loading: false, search_result: action.payload }
        case FILTER_BY_CATEGORY_FAIL:
            return { filter_loading: false, filter_error: action.error }
        default:
            return state
    }
}