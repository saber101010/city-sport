import { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addedProduct } from '../../redux/actions/productActions'
import './addedProduct.css'



function AddedProduct() {
    const navigate=useNavigate()
    const dispatch=useDispatch()
    const[formData,setFormData]=useState({title:"",prix:0,description:"",imageUrl:"",categorie:""})
//handelChange:
const handelChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value}); console.log(formData)}

 //handleSubmit:
//  const handleSubmit=(e)=>{
//     e.preventDefault()
//     dispatch(addedProduct(formData))
//     navigate ('/admine/product')
//   }

    return(
        <>

<div className="container1">
        <div className="left">
          <div className="header">
            <h2 className="animation a1">Welcome Back</h2>
           
          </div>
          <div className="form">
            <input type="text" name="title" className="form-field animation a3" placeholder="title" onChange={handelChange} />
            <input type="Number" name="prix" className="form-field animation a4" placeholder="prix"  onChange={handelChange}/>
            <input type="text" name="description" className="form-field animation a4" placeholder="description"  onChange={handelChange}/>
            <input type="text" name="imageUrl" className="form-field animation a4" placeholder="image"  onChange={handelChange}/>
            <input type="text" name="categorie" className="form-field animation a4" placeholder="categorie"  onChange={handelChange}/>
            
           
            <button className="animation a6" onClick={()=>{dispatch(addedProduct(formData,navigate))}}>addedProduct</button>
          </div>
        </div>
        <div className="right" />
      </div>
        
        </>
    )
}

export default AddedProduct