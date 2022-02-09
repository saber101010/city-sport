import Admin from "../pages/Admin"
import AdminProduct from "../pages/adminproduct/adminProduct"
// import AddedProduct from "../pages/addProduct/addedProduct"
import { Navigate } from "react-router-dom"


function PrivateRoute({children}){

    const token =localStorage.getItem('token')
    return(
        <>
         {
             token ? children : <Navigate to='/login'/>
         }
        </>
    )
}

export default PrivateRoute