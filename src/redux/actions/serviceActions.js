import axios from "axios";
import { apiUrl } from "../../helpers/apiUrl";
import { SERVICE_GET_FAIL, 
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