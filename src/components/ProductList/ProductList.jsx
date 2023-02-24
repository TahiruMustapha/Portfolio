import React from 'react'
import Product from '../Product/Product'
import "../ProductList/ProductList.css"
import { product } from '../../Data'
const ProductList = () => {
  return (
    <div className='ProductList'>
      <div className="pl-text">
        <h1 className="pl-title">
            Create & inspire, it is Tahiru
        </h1>
        <p className="pl-desc">
        As a front-end developer, Mustapha
         has honed his skills in HTML, CSS, and
          JavaScript, and is constantly expanding his
           knowledge by learning new frameworks and libraries. 
           He enjoys staying on top of the latest trends and advancements 
           in the field, and is always looking for new and innovative ways
            to create engaging and dynamic user experiences.
         </p>
      </div>
      <div className="pl-list">
       {product.map((item)=>(
         <Product img = {item.img} key = {item.id} link = {item.link}/>
       ))}
      </div>
    </div>
  )
}

export default ProductList
