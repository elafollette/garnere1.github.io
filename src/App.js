import "./App.css";
import React from "react";
import Tabs from "./Tabs/Tabs";
import headshot from "./Assets/headshot.jpeg";
import { TypeAnimation } from 'react-type-animation';


function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={headshot} className="headshot" alt="headshot" />
        <div className="headerText">
          <h1>
            Emily Garner
          </h1>
          <p>
            <TypeAnimation
              sequence={[
                'Programmer',
                1000,
                'Ideator', 
                1000,
                'Innovator', 
                1000,
              ]}
              wrapper="span"
              cursor={true}
              repeat={Infinity}
              style={{ fontSize: '2em', display: 'inline-block' }}
            />
          </p>
      </div>
      </header>
      <Tabs />  
    </div>
  );
}
export default App;
