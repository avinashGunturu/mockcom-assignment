import React, { useContext, useState } from 'react'
import {BsPencil} from 'react-icons/bs'
import {MdDragIndicator} from 'react-icons/md'
import Discount from './Discount';
import {AiOutlineArrowDown,AiOutlineArrowUp} from "react-icons/ai"
import VariantList from './VariantList';
import ModelWindow from './ModelWindow';
import { ProductContextProvider } from './ProductContext';


const Product = ({item,index}) => {
    const [addDiscount,setaddDiscount ] =useState(false);
    const [showVaraint,setShowVariant]=useState(false)
    const [title,setTitle]=useState(item?.title)

    const {model,setModel} =useContext(ProductContextProvider)

  return (
          <div className="SelectProductContainer" >
          <div className="selectproduct">
              <div className="indexContainer">
              <MdDragIndicator />
              <p>{index+1}</p>
              </div>
              <div className="editProductCOntainer">
              <input type="text" placeholder='SelectProduct' value={title} onChange={(e)=>{  setTitle(e.target.value) }}/>
              <div className="edit" onClick={()=>{setModel(true)}}>
              <BsPencil/>
              </div>
              </div>
              <Discount addDiscount={addDiscount} setaddDiscount={setaddDiscount} value={item?.id}/>
          </div>
          <div className="variantsList">
  
              {showVaraint ? ( <div>
              <p className='underbluecolor' onClick={()=>{setShowVariant(false)}}>Hide Variants <AiOutlineArrowUp /></p>
  
              
              <VariantList variantitem={item?.variant}/>
              
              
              </div>):(
              <p className='underbluecolor' onClick={()=>{setShowVariant(true)}}>Show Variants <AiOutlineArrowDown /></p>
              )}
          </div>
             
        {
          (model && <ModelWindow setShowModel={setModel} productid={item?.id}/>)
          }
         
      </div>
     
  
  )
}

export default Product 