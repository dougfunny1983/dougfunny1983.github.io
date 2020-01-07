import React, { Component } from 'react';
import './App.css';
import Tabuleiro from './componets/Tabuleiro';

class App extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    };
  };
  
  
  render() {
    return (
      <div className="App">
        <Tabuleiro/> 
      </div>
    );
  }
}

export default App;
