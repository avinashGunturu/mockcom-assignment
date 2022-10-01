import React, { useContext } from 'react'
import cross from '../images/cross.svg'
import { ProductContextProvider } from './ProductContext'

function Discount({addDiscount,setaddDiscount,value}) {
const {dispatch,discountnum,setDiscountnum,disperc,setDisPer}=useContext(ProductContextProvider)
 
console.log(disperc,discountnum)

  return (      
    <div>

 {addDiscount ? ( <div className="applyDIscount">
              <input type="text" className='dicountpercentnum' onChange={(e)=>setDiscountnum(e.target.value)}/>
              <select name="disccount" className='productdiscountnum' id="discount" onChange={(e)=>{setDisPer(e.target.value)}} >
                <option value="%off" >%off</option>
                <option value="flat off" >flat off</option>
              </select>
              <img src={cross} alt="crossbtn"  className='cross' onClick={()=>{dispatch({type:"remove",payload:value})}} />
        </div>) : ( <div className="addDiscount">
         <button className='discountbtn' onClick={()=>setaddDiscount(true)}>Add Discount</button>
       </div> )}
    </div>
  )
}

export default Discount