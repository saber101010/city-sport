import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router'
import { getOneProduct } from '../../redux/actions/productActions'
import './cardProduct.css'

function CardProduct({product}) {

    const dispatch=useDispatch()
    const navigate=useNavigate()

    return(
        
        
 
  <div className="centeri3"  onClick={()=>{dispatch(getOneProduct(product._id)) ;navigate ('/productdescription')}} >
       
      <div className="container">
        <div className="card">
          <div className="imgBx">
            <img src={product.imageUrl} alt="nike-air-shoe" />
          </div>
          <div className="contentBx">
            {/* <h2>{product.title}</h2> */}
           
           
            <a >{product.title }</a>
          </div>
        </div>
      </div>
      </div>
        
    
    
      
    )
}

export default CardProduct