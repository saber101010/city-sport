import {  Nav, FormControl } from "react-bootstrap";
import { Link } from "react-router-dom";
import { logout } from '../redux/actions/authActions'
import {useDispatch,useSelector} from 'react-redux'
import {useNavigate} from 'react-router-dom'

function User() {
 const {isAuth,user}=useSelector(state=>state.authReducer)
  const dispatch=useDispatch()
  const navigate=useNavigate()
  const handleSubmit=()=>{
    dispatch(logout())
  }
  if (!isAuth) {
    return (
      <Nav>
        
          {" "}
          <Nav.Link as={Link} to='/register'>Register </Nav.Link>
        
          {" "}
          <Nav.Link as={Link} to='/login'>Login</Nav.Link>
        
        <FormControl></FormControl>
      </Nav>
    );
  } else {
    return (
      <Nav>
        <Nav.Link as={Link} to='/'>{user.name}</Nav.Link>
          <Nav.Link as={Link} to='/' onClick={handleSubmit} >Logout</Nav.Link>
  
      </Nav>
    );
  }
}

export default User
