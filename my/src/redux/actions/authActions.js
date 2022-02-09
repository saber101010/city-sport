import axios from 'axios'
import { GET_USER, USER_FAIL, USER_LOGIN, USER_REGISTER } from '../types'
import { setAlert } from './alerteActions'

export const registre=(formData,navigate)=>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/signup',formData)
        dispatch({type:USER_REGISTER,payload:res.data})
        navigate('/')
        
    } catch (err) {
        dispatch({type:USER_FAIL})
        err.response.data.errors.forEach(errors=>dispatch(setAlert(errors.msg,"danger")))
    }
}
// get auth user
export const current=()=>async(dispatch)=>{
    const config={
        headers:{
            'authorization':localStorage.getItem('token')
        }
    }
    try {
        const res=await axios.get('/api/auth/current',config)
        dispatch({type:GET_USER,payload:res.data})
    } catch (error) {
        dispatch({type:USER_FAIL})
    }
}

export const logout = (navigate) => (dispatch) => {
    dispatch({type: USER_FAIL})

}

export const login =(formData,navigate) =>async(dispatch)=>{
    try {
        const res=await axios.post('/api/auth/signin',formData)
        dispatch({type:USER_LOGIN,payload:res.data})
        console.log(res.data)
        navigate('/')
        
    } catch (error) {
        dispatch({type:USER_FAIL})
    }
}

