import logo from './logo.svg';
import './App.css';
import { useState } from 'react';
import { UseToggle } from './useToggle';
import { Fact } from './Fact';

function App() {

  const [isVisible , toggle] = UseToggle() 

  const [isVisible2 , toggle2] = UseToggle() 


  return (
    <div className="App">
      
      <button onClick={toggle}>
        {isVisible ? "Hide" : "Show"}
      </button>

      {isVisible && <h1>This is my Hidden text</h1>}



      <button onClick={toggle2}>
        {isVisible2 ? "Hide" : "Show"}
      </button>

      {isVisible2 && <h1>This is my Hidden text2</h1>}

      <Fact />



    </div>
  );
}

export default App;
