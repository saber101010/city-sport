import { useState } from 'react'
import {Form,Button} from 'react-bootstrap'
import { registre } from '../redux/actions/authActions'
import {useDispatch} from 'react-redux'
import {useNavigate} from 'react-router-dom'
function Registre(){
const[formData,setFormData]=useState({name:"",email:"",password:""})
const dispatch=useDispatch()
const navigate=useNavigate()
//handleCHange:
const handleChange=(e)=>{
  setFormData({...formData,[e.target.name]:e.target.value}) }

  //handleSubmit:
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(registre(formData,navigate))
  }

    return(
        <div>
            <Form onSubmit={handleSubmit}>

            <Form.Group className="mb-3" controlId="formBasicText"   >
    <Form.Label>Name</Form.Label>
    <Form.Control type="name" name="name" placeholder="Enter your name" onChange={handleChange}/>
    <Form.Text className="text-muted">
    
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email" onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password" onChange={handleChange} />
  </Form.Group>
 
  <Button variant="primary" type="submit" >
    Rejoignez-Nous
  </Button>
</Form>
        </div>
    )
}
export default Registre