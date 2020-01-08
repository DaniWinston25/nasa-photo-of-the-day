import React from "react";
import "./App.css";
import Header from './components/Header';
import Photos from "./components/Photos";
import Body from "./components/Body";

function App() {
  return (
    <div className="App">
      <p>
        <Header/>
        <Photos/>
        <Body/>
        Read through the instructions in the README.md file to build your NASA
        app! Have fun 🚀!
      </p>
    </div>
  );
}

export default App;
