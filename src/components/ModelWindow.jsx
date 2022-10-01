import React, { useEffect, useState,useContext } from 'react'
import cross from '../images/cross.svg'
import {FiSearch} from 'react-icons/fi'
import axios from 'axios'
import ProductandVarient from './ProductandVarient'
import { ProductContextProvider } from './ProductContext'

const ModelWindow = ({setShowModel,productid}) => {

    const [allProducts,setALlProducts]=useState([])
    const [searchInpput]=useState("F")
    const [newProducts,setNewProducts]=useState([])
    

  const {dispatch}=useContext(ProductContextProvider)

   const addProducts = ()=>{
        
    newProducts && newProducts.forEach(element => {
      dispatch({type:"add",payload:element})
    });
        
        setNewProducts([])
        setShowModel(false)
    }

useEffect(()=>{
  axios.get(`https://stageapibc.monkcommerce.app/admin/shop/product?search=${searchInpput}&page=1`)
      .then((res)=> {
       
         setALlProducts(res.data)
      })
},[searchInpput])


const filtering = (e)=>{

 console.log(e.target.value)
}



  return (
   <div className="modelWrapper">
        <div className="PeoductMOdel">
          <div className="MOdelheader">
            <h3>Add Products</h3>
            <img src={cross} alt="close model button" onClick={()=> setShowModel(false)}/>
          </div>
          <div className="searchbox">
            <div className="searchboxContainer">

            <div className="searchicon">
            <FiSearch />
            </div>
            <input type="text" placeholder='Search Products' className='searchinput' onChange={filtering}/>
          </div>
            </div>
          <div className="producListCOntainer">
         
     {
        allProducts &&   allProducts?.map((item)=>
                    <ProductandVarient key={item.id} item={item} productid={productid} setNewProducts={setNewProducts} newProducts={newProducts}/>
                )
            }
           
          </div>
          <div className="addcancelcontainer">
            <div className="noofprod">
                <p><span>{newProducts.length}</span> products selected</p>
            </div>
            <div className="canceladd">
                <button className='cancelbtn' onClick={()=>  setShowModel(false)}>Cancel</button>
                <button className={newProducts.length > 0 ? 'addBtn selcted':'addBtn nunselcted' } onClick={addProducts}>Add</button>
            </div>
          </div>
        
        </div>
   </div>
  )
}

export default ModelWindow