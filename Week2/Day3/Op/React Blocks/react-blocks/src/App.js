import React from 'react';
import './App.css';
import Header from './Components/Header';
import Navigation from './Components/Navigation.jsx';
import Main from './Components/Main';
import SubContents from './Components/SubContents';
import Advertisement from './Components/Advertisement';
 
                
function App() {
  return (
    <div className="app" style={{backgroundColor: "dddddd", padding:"20px",display:"flex",flexDirection:"column", gap:"20px"}}>
        <Header/>
        <div style={{display:"flex"}}>
        <Navigation />
        <Main>
            <SubContents />
            <SubContents />
            <SubContents />
            <Advertisement />
        </Main>
        </div>
        
    </div>
  );
}
                
export default App;

