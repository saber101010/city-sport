import {Navbar,Nav,Container} from 'react-bootstrap'
import { useDispatch, useSelector } from 'react-redux'
import {Link,useNavigate} from 'react-router-dom'
import { filterProduct } from '../redux/actions/productActions'

import User from './User'


function NavBar(){
  const dispatch=useDispatch()
  const navigate=useNavigate()
 const user =useSelector(state=>state.authReducer.user)
 const isAuth =useSelector(state=>state.authReducer.isAuth)

    

  return(<div>
    {
      isAuth&&user&&user.role===1 ? <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
      <Container>
      <Link to='/'><Navbar.Brand >CIty sport</Navbar.Brand></Link>
      <Navbar.Toggle aria-controls="responsive-navbar-nav" />
      <Navbar.Collapse id="responsive-navbar-nav">
        <Nav className="me-auto">
          <Nav.Link onClick={()=>{dispatch(filterProduct("men"));navigate('/men')}} >Men</Nav.Link>
          <Nav.Link onClick={()=>{dispatch(filterProduct("women"));navigate('/women')}} >Women</Nav.Link>
          <Nav.Link onClick={()=>{dispatch(filterProduct("kid"));navigate('/kid')}}>Kid</Nav.Link>
         
          <Nav.Link as={Link} to='/admin'>Admin</Nav.Link>
        </Nav>
          <User/>
      </Navbar.Collapse>
      </Container>
    </Navbar> : <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
    <Container>
    <Link to='/'><Navbar.Brand >CIty sport</Navbar.Brand></Link>
    <Navbar.Toggle aria-controls="responsive-navbar-nav" />
    <Navbar.Collapse id="responsive-navbar-nav">
      <Nav className="me-auto">
        <Nav.Link as={Link} to='/men'>Men</Nav.Link>
        <Nav.Link as={Link} to="/women">Women</Nav.Link>
        <Nav.Link as={Link} to="/kids">Kid's</Nav.Link>
       
       
      </Nav>
        <User/>
    </Navbar.Collapse>
    </Container>
  </Navbar> 
  

    
      
    
    
    }
    </div>
  )}

  

  

    


export default NavBar