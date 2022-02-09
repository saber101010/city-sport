import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Card from "../Card/card";
import './adminProduct.css'
import {Button, Table} from 'react-bootstrap'

function AdminProduct(){
  const products=useSelector(state=>state.productReducers.products)
  const navigate=useNavigate()
    return(
      <div>
        <Button onClick={()=>navigate('/admine/product/addedProduct')}
        >added new product</Button>
      <Table striped bordered hover>
      <thead>
        <tr>
          <th>Name</th>
          <th>description</th>
          <th>prix</th>
          <th>action</th>
        </tr>
      </thead>
      {products.map(product=><Card product={product} key={product._id} />)}
    </Table>
    </div>
  )
}  




export default AdminProduct