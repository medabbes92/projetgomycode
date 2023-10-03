import axios from 'axios'
import { DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_AUTH_ADMIN, GET_AUTH_ADMIN_FAIL, GET_AUTH_ADMIN_SUCCESS,
    GET_PRODUCT, LOGIN_ADMIN, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_SUCCESS } from './actionType'


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


// GET PRODUCTS

export const Produits =() => async(dispatch) => {

    
   

   try {
       const {data}= await axios.get('/product/getproducts')
      
    dispatch({
       type: GET_PRODUCT,
       payload: data
    })
   }
   catch(error) {
      console.log(Error.response.data)

   } }


// DELETE PRODUCT

export const handleDelete =(id) => async(dispatch) => {

   const token = localStorage.getItem("token")
   const config = {
  headers : {
    Authorization : token
  }}
 try {
     await axios.delete(`/product/deleteproduct/${id}`,config)
    
  dispatch({
     type: DELETE_PRODUCT_SUCCESS,
     payload: id
  })
 }
 catch(error) {
  console.log(Error.response.data) 
 

 } }

