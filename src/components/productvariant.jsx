import React, {  useState } from 'react'

const ProductVariant = ({variants,check,productid}) => {

  const [variantcheck,setvariantchek] = useState(false)

  const setVarinatclick = ()=>{
    setvariantchek((prev)=>!prev)
  }

  return (
    <div className='singleVariantcontainer' onClick={setVarinatclick}>
        <div className="chekboxname">
            <div type="checkbox" name="checkbox" id="checkbox" className={`chekboxx ${check || variantcheck ? "":"active"}`} ></div>
            <p>{variants.title}</p>
        </div>
        <div className="priceAvailability">
            <p className='availability'>{variants.inventory_quantity}available</p>
            <p>₹ {variants.price}</p>
        </div>
    </div>
  )
}

export default ProductVariant