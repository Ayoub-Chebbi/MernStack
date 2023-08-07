import './App.css';
import Text from "./Components/Text"


function App() {
  return (
    <div className="App">
      <Text firstName = {"Doe"} lastName={"Jane"} age={45} hairColor={"Black"} btn={"Birthday Button for Jane Doe"}/>
      <Text firstName = {"Smith"} lastName={"John"} age={88} hairColor={"Brown"} btn={"Birthday Button for Jhon Smith"}/>
    </div>
  );
}

export default App;
