import React from "react";
import "./App.css";
import Header from './components/Header/Header';
import Photos from "./components/Photos/Photos";
import Body from "./components/Body/Body";

function App() {
  return (
    <div className="App">
      <Header/>
        <Photos/>
        <Body/>
      <p>
        
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
