import { createContext, useReducer, useState } from "react";

export const ProductContextProvider = createContext()



const reducer = (ProductList,action)=>{
    if(action.type==="add"){
      return [...ProductList,action.payload]
    }else if(action.type === "remove"){
        const newList = ProductList.filter((item)=> item.id!==action.payload)
        return [...newList]
    }else if(action.type==="new") {
      return [...ProductList]
    }

}

const ProductContext = ({children}) => {

  const [ProductList,dispatch]= useReducer(reducer,[])
  const [model,setModel] = useState(false)
  const [discountnum,setDiscountnum]=useState(0)
  const [disperc,setDisPer]=useState("")
  return (
    <ProductContextProvider.Provider  value={{ProductList,dispatch,model,setModel,discountnum,setDiscountnum,disperc,setDisPer}}>
        {children}
    </ProductContextProvider.Provider>
  )
}

export default ProductContext