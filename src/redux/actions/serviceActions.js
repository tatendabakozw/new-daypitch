import axios from "axios";
import { apiUrl } from "../../helpers/apiUrl";
import { db } from "../../helpers/firebase";
import { ALL_SERVICE_GET_REQUEST, ALL_SERVICE_GET_SUCSESS, SERVICE_GET_FAIL, 
        SERVICE_GET_REQUEST, 
        SERVICE_GET_SUCSESS, 
        SERVIVE_CREATE_FAIL, 
        SERVIVE_CREATE_REQUEST,
        SERVIVE_CREATE_SUCCESS} from "../constants/serviceConstants"

//get a single service
export const get_serviceAction = (id) => (dispatch)=>{
    // console.log(token, id)
    dispatch({
        type: SERVICE_GET_REQUEST,
        payload: {id}
    });
    db.collection('services').doc(id).onSnapshot(snapshot=>{
        console.log(id)
        dispatch({
            type: SERVICE_GET_SUCSESS, 
            payload: snapshot.data()
        })
    },(error)=>{
        dispatch({
            type: SERVICE_GET_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
}

//get all setvices 
export const get_allServices = () => (dispatch) =>{
    dispatch({
        type: ALL_SERVICE_GET_REQUEST
    });
    const all_services = []

    db.collection('services').onSnapshot(snapshot=>{
        snapshot.forEach(doc=>{
            all_services.push(doc.data())
        })
        console.log(all_services)
        dispatch({
            type: ALL_SERVICE_GET_SUCSESS,
            payload: all_services
        })
    },(error)=>{
        dispatch({
            type: SERVICE_GET_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
} 

//create a service 
export const create_a_service = (id, description, tags, level, school, price, category, location) => (dispatch) =>{
    dispatch({
        type: SERVIVE_CREATE_REQUEST
    })
    db.collection('services').doc(id).set({
        description: description,
        tags: tags,
        level: level,
        school: school,
        price: price,
        category: category,
        location: location
    }).then(res=>{
        dispatch({
            type: SERVIVE_CREATE_SUCCESS,
            payload: res
        })
    }).catch(error=>{
        dispatch({
            type: SERVIVE_CREATE_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
}