import React, { useContext } from 'react'
import Product from './Product'
import { ProductContextProvider } from './ProductContext'

const ProductList = () => {
const {ProductList}=useContext(ProductContextProvider)

  return (
    <div className='productlistContainer'  >
      {
       ProductList && ProductList.map((item,index)=>
           <Product  key={index} item={item} index={index}/>
        )
      }

    </div>
        
      
  )
}

export default ProductList