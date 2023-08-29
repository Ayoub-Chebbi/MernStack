import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import { useState } from 'react';
import {Routes , Route} from "react-router-dom"
import Detail from './Components/Detail';
import Update from './Components/Update';
function App() {

  const [product, setProduct] = useState([])
  const removeFromDom = productId =>{
    setProduct(product.filter(product=> product._id != productId));

}
  return (
    <div className="App">
      <Routes> 
            <Route element={<Detail/>} path='/product/:id'/>
            <Route element={<Update/>} path="/people/edit/:id"/>
          </Routes>
              <Form product={product} setProduct={setProduct} />
                <hr/>
              <ProductList product={product} setProduct={setProduct} removeFromDom={removeFromDom}/>
    </div>
  );
}

export default App;
