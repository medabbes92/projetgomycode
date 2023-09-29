import { GET_AUTH_ADMIN, GET_AUTH_ADMIN_FAIL, GET_AUTH_ADMIN_SUCCESS, LOGIN_ADMIN, LOGIN_ADMIN_FAIL, LOGIN_ADMIN_SUCCESS } from "../actionType"

const initState= {
    loading : false,
    admin: null,
   errors:null,
   token : null,
   isAuth : false
}

const AdminReducer = (state=initState, {type, payload}) => {

switch (type) {
    case LOGIN_ADMIN:

    return {...state , loading:true}

    case LOGIN_ADMIN_SUCCESS:
        return {
            ...state,
           loading : false,
            admin : payload.admin,
            token : payload.token,
            errors:null
        }
        case LOGIN_ADMIN_FAIL:
            return {
                ...state,
               loading : false,
                errors:payload
            }


            case GET_AUTH_ADMIN:

            return {...state , loading:true} 
        
            case GET_AUTH_ADMIN_SUCCESS:
                return {
                    ...state,
                   loading : false,
                    admin : payload,
                    isAuth : true ,
                    errors:null

                }
                case GET_AUTH_ADMIN_FAIL:
                    return {
                        ...state,
                       loading : false,
                        errors:payload
                    }
        
    default:
        return state
}




   
            }
 export default AdminReducer