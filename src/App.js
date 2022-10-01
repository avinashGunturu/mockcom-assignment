import { useContext } from 'react';
import './App.css';
import ModelWindow from './components/ModelWindow';
import { ProductContextProvider } from './components/ProductContext';
import ProductLists from './components/ProductList';

function App() {
const {model,setModel,dispatch}=useContext(ProductContextProvider)

const addnewProduct = ()=>{
  
  setModel(true)
  dispatch({type:"new"})
}

  return (
    <div className="App">
     <h1 className='heading'>Add Products</h1>
      <div className='pdHeading'>
        
        <div className='ptags'>
        <p>Product</p>
        <p>Discount</p>
        </div> 
      </div>
     <ProductLists />
    
    <button className='addproductbtn' onClick={addnewProduct}>Add Product</button>
    {
        (model && <ModelWindow setShowModel={setModel} />)
        }
    </div>
  );
}

export default App;
