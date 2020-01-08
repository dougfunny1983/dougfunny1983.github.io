import React, { Component } from 'react';
import './App.css';
import Tabuleiro from './componets/Tabuleiro';

class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Tabuleiro/> 
      </div>
    );
  }
}

export default App;
