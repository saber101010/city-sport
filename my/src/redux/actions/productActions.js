import axios from "axios";


import {  FILTERPRODUCT, GETALLPRODUCTS, GETONEPRODUCT } from "../types";


export const getAllProducts=()=>async(dispatch)=>{
    // const token=localStorage.getItem('token')
    // const config={
    //     headers:{authorization:token}}
    try {
        const res= await axios.get('/api/product/allProduct')
        console.log(res)
        dispatch({type:GETALLPRODUCTS,payload:res.data})
    } catch (error) {
        console.log(error)
    }
}

// export const addedProduct=(formData)=>async(dispatch)=>{
//     const token=localStorage.getItem('token')
//     const config={
//         headers:{authorization:token}}
//     try {
//       const res= await axios.post('/api/product/addProduct',formData,config)
//       console.log(res.data)
//         dispatch(getAllProducts())
//     } catch (error) {
//         console.log(error)
//     }
// }
// add product

export const addedProduct = (formData, navigate) => async (dispatch) => {
    const token = localStorage.getItem("token");
    const config = {
      headers: {
        authorization: token,
      },
    };
    try {
        const res =
      await 
      axios.post(
        "/api/product/addProduct",
        formData,
        config
      );
 console.log('hello')
  
      dispatch(getAllProducts());
      navigate("/admine/product");
    } catch (err) {
     console.log(err)
      
    }
  };



export const getOneProduct=(productId)=>async(dispatch)=>{
    const token=localStorage.getItem('token')
    const config={
        headers:{authorization:token}}

try {
    const res=await axios.get(`/api/product/getproduct/${productId}`,config)
    dispatch({type:GETONEPRODUCT,payload:res.data})
} catch (error) {
    console.log(error)
}
}
export const deleteProduct=(productId)=>async(dispatch)=>{
    const token=localStorage.getItem('token')
    const config={
        headers:{authorization:token}}
    try {
        axios.delete(`/api/product/delete/${productId}`,config)
        dispatch(getAllProducts())
    } catch (error) {
        console.log(error)
    }
}
export const filterProduct=(filter)=>{
    return{
        type:FILTERPRODUCT,payload:filter
    }
}