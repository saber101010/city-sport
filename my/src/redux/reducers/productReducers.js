import { FILTERPRODUCT, GETALLPRODUCTS, GETONEPRODUCT } from "../types"

const initState={
    products:[],
    product:{},
    filter:""
}

function productReducers(state=initState,{type,payload}){
    switch (type) {
        case GETALLPRODUCTS :
            return{
                ...state,products:payload.products
            }
            
           case GETONEPRODUCT :
               return{
                   ...state,product:payload
               }
            case FILTERPRODUCT:
                return{
                    ...state,filter:payload
                }   
    
        default:
            return state
    }
}

export default productReducers