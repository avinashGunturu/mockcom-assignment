import React from 'react'
import Variant from './Variant'

const VariantList = ({variantitem}) => {
  return (
    
    <>
    {

      variantitem.length > 0 ? (variantitem.map((item)=>

      <Variant key={item.id} value={item}/>
    )): (null) 
      
      
    }
    
    </>

      
  )
}

export default VariantList