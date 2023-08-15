import React from "react";
import {
  BrowserRouter,
  Link,
  Routes,
  Route
} from "react-router-dom";
import Home from "./Components/Home";
import Number from "./Components/Number";
import Text from "./Components/Text";
import Color from "./Components/Color";

function App() {
  return (
    <BrowserRouter>
      <p>
        <Link to="/home">Home</Link>
        <br/>
        <Link to="/4">number</Link>
        <br/>
        <Link to="/hello">Text</Link>
        <br/>
        <Link to="/hello/blue/red">Color</Link>
      </p>
      <Routes>
        <Route path="/home" element={<Home />}/>
        <Route path="/:number" element={<Number />}/>
        <Route path="/:text" element={<Text />}/>
        <Route path="/:Text/:color/:backgroundColor" element={<Color />}/>
      </Routes>
    </BrowserRouter>
  );
}
    
export default App;
