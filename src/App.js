import React, {useState} from 'react';
import './App.css';
import Parent from './Parent';
import ValueContext from './ValueContext';

function App() {
  let value = useState(99);
  return (
    <ValueContext.Provider value = {value}>
      <div >
        Hello Parent
        <br/>
        <Parent></Parent>
        <button onClick={()=> value++} >Update Number</button>
      </div>
    </ValueContext.Provider>
  );
}

export default App;
