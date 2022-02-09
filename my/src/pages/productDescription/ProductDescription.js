import { useSelector } from "react-redux"


function ProductDescription(){
  const product=useSelector(state=>state.productReducers.product)
    return(
        <div id="container">	
        {/* Start	Product details */}
        <div className="product-details">
          {/* 	Product Name */}
          <h1>{product.title}</h1>
          {/* 		<span class="hint new">New</span> */}
          {/* 		<span class="hint free-shipping">Free Shipping</span> */}
          {/* 		the Product rating */}
          <span className="hint-star star">
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star" aria-hidden="true" />
            <i className="fa fa-star-half-o" aria-hidden="true" />
            <i className="fa fa-star-o" aria-hidden="true" />
          </span>
          {/* The most important information about the product */}
          <p className="information">{product.description}</p>
          {/* 		Control */}
          <div className="control">
            {/* Start Button buying */}
            <button className="btn">
              {/* 		the Price */}
              <span className="price">{product.prix}$</span>
              {/* 		shopping cart icon*/}
              <span className="shopping-cart"><i className="fa fa-shopping-cart" aria-hidden="true" /></span>
              {/* 		Buy Now / ADD to Cart*/}
              <span className="buy">Buy Now</span>
            </button>
            {/* End Button buying */}
          </div>
        </div>
        {/* 	End	Product details   */}
        {/* 	Start product image & Information */}
        <div className="product-image">
          <img src={product.imageUrl}alt="Omar Dsoky" />
          {/* 	product Information*/}
          <div className="info">
            <h2>The Description</h2>
            <ul>
              <li><strong>Sun Needs: </strong>Full Sun</li>
              <li><strong>Soil Needs: </strong>Damp</li>
              <li><strong>Zones: </strong>9 - 11</li>
              <li><strong>Height: </strong>2 - 3 feet</li>
              <li><strong>Blooms in: </strong>Mid‑Summer - Mid‑Fall</li>
              <li><strong>Features: </strong>Tolerates heat</li>
            </ul>
          </div>
        </div>
   {/*  End product image  */}
   </div>


        
    )
}

export default ProductDescription