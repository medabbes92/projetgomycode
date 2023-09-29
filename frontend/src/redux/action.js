import axios from 'axios'
import { GET_AUTH_ADMIN, GET_AUTH_ADMIN_FAIL, GET_AUTH_ADMIN_SUCCESS, LOGIN_ADMIN, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_SUCCESS } from './actionType'


export const loginAdmin =(admin) => async(dispatch) => {
   
    dispatch({type:LOGIN_ADMIN})
    try {
        const {data}= await axios.post('/admin/login',admin )
        localStorage.setItem("token", data.token)
     dispatch({
        type: LOGIN_ADMIN_SUCCESS,
        payload: data
     })
    }
    catch(error) {
        dispatch({
            type: LOGIN_ADMIN_FAIL,
            payload: error.response.data
         })

    }
}

export const AuthAdmin =() => async(dispatch) => {
   const token = localStorage.getItem("token")
   const config = {
  headers : {
    Authorization : token
  }
   }
    dispatch({type:GET_AUTH_ADMIN})
    try {
        const {data}= await axios.get('/admin/auth',config)
       
     dispatch({
        type: GET_AUTH_ADMIN_SUCCESS,
        payload: data
     })
    }
    catch(error) {
        dispatch({
            type: GET_AUTH_ADMIN_FAIL,
            payload: error.response.data
         })

    }
}
