import React from "react";
import "./App.css";
import Pokedex from "./Pokedex";
import Data from "./data";

class App extends React.Component {
  render() {
    
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokedex pokemons={Data} />
      </div>
    );
  }
}

export default App;
