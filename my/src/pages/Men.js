import { useSelector } from "react-redux"
import CardProduct from "./CardProduct/cardProduct"


function Men(){
    const products=useSelector(state=>state.productReducers.products)
    const filter=useSelector(state=>state.productReducers.filter)


    return(
        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap",marginTop:"20px"}}>{console.log(filter)}

{

    products.filter(product=>product.categorie===filter)
    .map(product=><CardProduct product={product} key={product._id}/>)

    
}


        </div>
    )
}

export default Men