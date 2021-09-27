import { db } from "../../helpers/firebase"
import {
    FILTER_BY_CATEGORY_FAIL,
    FILTER_BY_CATEGORY_REQUEST,
    FILTER_BY_CATEGORY_SUCCESS,
    SEARCH_ITEM_FAIL,
    SEARCH_ITEM_REQUEST,
    SEARCH_ITEM_SUCCESS
} from "../constants/searchConstants"

const propRef = db.collection('properties')

//universal search feature
export const search_item_Action = (term) => async (dispatch) => {
    dispatch({
        type: SEARCH_ITEM_REQUEST,
        payload: { term }
    })
    const arr = []
    propRef.where('category', '>=', term).where('category', '<=', term + '\uf8ff').get().then(res => {
        res.forEach(doc => {
            arr.push({
                id: doc.id,
                property: doc.data()
            })
        })
    }).finally(() => {
        dispatch({
            type: SEARCH_ITEM_SUCCESS,
            payload: arr
        })
    }).catch(error => {
        dispatch({
            type: SEARCH_ITEM_FAIL,
            payload: error
        })
    })
}

//filter by category option
export const filter_by_category_Action = (category) => (dispatch) => {
    dispatch({
        type: FILTER_BY_CATEGORY_REQUEST,
        payload: category
    })
    const arr = []
    propRef.where('category', '==', category).get().then(res => {
        res.forEach(doc => {
            arr.push({
                id: doc.id,
                property: doc.data()
            })
        })
    }).finally(() => {
        dispatch({
            type: FILTER_BY_CATEGORY_SUCCESS,
            payload: arr
        })
    }).catch(error => {
        dispatch({
            type: FILTER_BY_CATEGORY_FAIL,
            payload: error
        })
    })
}