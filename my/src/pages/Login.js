import { useState } from 'react'
import {Form,Button}from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { login } from '../redux/actions/authActions'

function Login(){
  const[formData,setFormData]=useState({email:"",password:""})
const dispatch=useDispatch();
const navigate=useNavigate()

  const handleChange=(e)=>{
    setFormData({...formData,[e.target.name]:e.target.value}) }

    //handleSubmit:
  const handleSubmit=(e)=>{
    e.preventDefault()
    dispatch(login(formData,navigate))
  }
    return(
        <div>
<Form  onSubmit={handleSubmit}>
  <Form.Group className="mb-3" controlId="formBasicEmail">
    <Form.Label>Email address</Form.Label>
    <Form.Control type="email" name="email" placeholder="Enter email"  onChange={handleChange} />
    <Form.Text className="text-muted">
      We'll never share your email with anyone else.
    </Form.Text>
  </Form.Group>

  <Form.Group className="mb-3" controlId="formBasicPassword">
    <Form.Label>Password</Form.Label>
    <Form.Control type="password" name="password" placeholder="Password"  onChange={handleChange} />
  </Form.Group>
  <Form.Group className="mb-3" controlId="formBasicCheckbox">
    <Form.Check type="checkbox" label="Check me out" />
  </Form.Group>
  <Button variant="primary" type="submit">
    Connexion
  </Button>
</Form>
        </div>
    )
}

export default Login