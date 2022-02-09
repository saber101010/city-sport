// import { Link } from "react-router-dom"
import{Button} from 'react-bootstrap'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { getAllProducts } from '../redux/actions/productActions'


function Admin(){
    const dispatch=useDispatch()
    const navigate=useNavigate()
    return(
        <div>
<div className="d-grid gap-2">
 <Button variant="primary" size="lg" onClick={()=>{dispatch(getAllProducts());navigate ('/admine/product')}} >
    Products
  </Button>
 <Button variant="secondary" size="lg">
   Users
  </Button>
</div>
        </div>
    )
}

export default Admin