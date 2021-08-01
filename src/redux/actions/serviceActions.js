import axios from "axios";
import { apiUrl } from "../../helpers/apiUrl";
import { ALL_SERVICE_GET_REQUEST, ALL_SERVICE_GET_SUCSESS, SERVICE_GET_FAIL, 
        SERVICE_GET_REQUEST, 
        SERVICE_GET_SUCSESS } from "../constants/serviceConstants"

//get a single service
export const get_serviceAction = (token, id) => (dispatch)=>{
    // console.log(token, id)
    dispatch({
        type: SERVICE_GET_REQUEST,
        payload: {token, id}
    });
    axios.get(`${apiUrl}/service/get/single/${id}`,{
        headers:{
            authorization: token
        }
    }).then(res=>{
        dispatch({
            type: SERVICE_GET_SUCSESS, 
            payload: res
        })
    }).catch(error=>{
        dispatch({
            type: SERVICE_GET_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
}

//get all setvices 
export const get_allServices = (limit, skip) => (dispatch) =>{
    dispatch({
        type: ALL_SERVICE_GET_REQUEST,
        payload: {limit, skip}
    });
    axios.post(`${apiUrl}/service/get/all`,{limit, skip}).then(res=>{
        dispatch({
            type: ALL_SERVICE_GET_SUCSESS,
            payload: res
        })
    }).catch(error=>{
        dispatch({
            type: SERVICE_GET_FAIL,
            payload: error.response && error.response.message 
                    ? error.response.error.message 
                    : error.message
        })
    })
} 