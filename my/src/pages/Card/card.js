import { Button } from "react-bootstrap";
  import "./card.css";
  import { useDispatch } from "react-redux";
  import { useNavigate } from "react-router-dom";
import { deleteProduct } from "../../redux/actions/productActions";
  
  function Card({ product}) {
    const dispatch = useDispatch();
    const navigate = useNavigate();
   
    return (
     
      <tbody>
      <tr>
        <td>{product.title}</td>
        <td>{product.description}</td>
        <td>{product.prix}</td>
        <td><Button onClick={()=>dispatch(deleteProduct(product._id))}><i className="fas fa-trash-alt"></i></Button></td>
      </tr>
     
    </tbody>
      
    );
  }
  export default Card;