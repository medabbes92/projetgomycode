import { DELETE_PRODUCT, DELETE_PRODUCT_FAIL, DELETE_PRODUCT_SUCCESS, GET_PRODUCT } from "../actionType"

const initState= {
    loading : false,
    product: null,
   

   
}

const ProductReducer = (state=initState, {type, payload}) => {

    switch (type) {
          
                case GET_PRODUCT:
                    return {
                        ...state,
                       loading : false,
                        product : payload,    
                    
                    };



                  

                        case DELETE_PRODUCT_SUCCESS:

                        return   {...state, 
                            product : state.product.filter((el)=>el._id !== payload) , }  
                    
                         
                        
        default:
            return state
    }
  }
     export default ProductReducer