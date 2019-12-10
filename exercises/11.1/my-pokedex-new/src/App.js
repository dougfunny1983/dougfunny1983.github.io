import React from "react";
import "./App.css";
import Pokemon from "./Pokemon";
import Data from "./data";
import Button from "./Button";

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      contador: 0
    };
  }

  setBtnCont = () => {
    this.setState({
      contador: this.state.contador === 8 ? 0 : (this.state.contador = this.state.contador + 1)
    });
  };
  render() {
    console.log(this.state);
    return (
      <div className="App">
        <h1> Pokedex </h1>
        <Pokemon pokemon={Data[this.state.contador]} />
        <Button contNumber={this.setBtnCont} />
      </div>
    );
  }
}

export default App;
