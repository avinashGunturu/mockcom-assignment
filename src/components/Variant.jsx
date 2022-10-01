import React, { useContext } from 'react'
import { MdDragIndicator } from 'react-icons/md'
import cross from '../images/cross.svg'
import { ProductContextProvider } from './ProductContext'

const Variant = ({value}) => {

const {discountnum,disperc}=useContext(ProductContextProvider)

  return (
    <div className='singleVariantContaner'>
        <MdDragIndicator />
        <div className="variantName">
            <p>{value.title}</p>
        </div>
        <div className="discountNumber">
            <p>{discountnum}</p>
        </div>
        
            <p value="variantPercentoff">{disperc}</p>
       
         <img src={cross} alt="wrongbtn" className='cross' />
    </div>
  )
}

export default Variant