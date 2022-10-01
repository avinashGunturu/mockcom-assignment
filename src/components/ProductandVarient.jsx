import React,{ useState} from 'react'
import ProductVariant from './productvariant'
import { v4 as uuidv4 } from 'uuid';


const ProductandVarient = ({item,productid,setNewProducts,newProducts}) => {

const [check,setCheck]=useState(true)

const createproduct = ()=>{
setCheck((prev)=>(!prev))  

if(check){
  const newone = {
    id:uuidv4(),
    pro_id:item.id,
    title:item.title,
    discount:"",
    type_discount:"",
    variant:item.variants
  }
  setNewProducts([...newProducts,newone])
}else {
  setNewProducts([...newProducts])
}

}

  return (
    <div>
        <div className="mainProductContainer"  onClick={createproduct}>
            <div className="togetherContainer">
            <div type="checkbox" name="mainProduct" id="mainProduct" className={`mainproduct ${check ? "":"active"}`}  ></div>
            <img src={item?.image.src} alt="Product img" className='Productimage' />
            <p>{item?.title}</p>
            </div>
        </div>  

        {
            item.variants?.map((variants)=>

                <ProductVariant key={variants.id} variants={variants} check={check} productid={productid}/>
            )
        }  
    </div>
  )
}


export default ProductandVarient