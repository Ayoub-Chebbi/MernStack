import logo from './logo.svg';
import './App.css';
import Form from './Components/Form';
import { Router } from "@reach/router";
import People from "./Components/People";
import Planets from "./Components/Planets.jsx";

function App() {
  return (
    <div className="App">
      <Form />

      <Router>
        <People path="/people/:id" />
        <Planets path="/planets/:id" />
      </Router>
    </div>
  );
}

export default App;
