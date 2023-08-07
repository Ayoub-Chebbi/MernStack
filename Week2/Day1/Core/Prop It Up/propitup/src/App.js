import './App.css';
import './Components/PersonalCard';
import PersonalCard from './Components/PersonalCard';

function App() {
  return (
    <div className="App">
      <PersonalCard firstName={"Doe"} lastName={"Jane"} age={"45"} hairColor={"black"}/>
      <PersonalCard firstName={"Smith"} lastName={"John"} age={"88"} hairColor={"brown"}/>
      <PersonalCard firstName={"Fillmore"} lastName={"Millard"} age={"50"} hairColor={"brown"}/>
      <PersonalCard firstName={"Smith"} lastName={"Maria"} age={"62"} hairColor={"brown"}/>
    </div>
  );
}

export default App;
