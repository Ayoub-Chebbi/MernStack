import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import ProductList from './Components/ProductList';
import { useState } from 'react';
import {Routes , Route} from "react-router-dom"
import Detail from './Components/Detail';
function App() {

  const [product, setProduct] = useState([])
  return (
    <div className="App">
      <Routes> 
            <Route element={<Detail/>} path='/product/:id'/>
          </Routes>
              <Form product={product} setProduct={setProduct} />
                <hr/>
              <ProductList product={product} setProduct={setProduct} />
    </div>
  );
}

export default App;
