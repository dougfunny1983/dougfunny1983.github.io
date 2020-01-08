import React, { Component } from 'react';
import './App.css';
import Tabuleiro from './componets/Tabuleiro';

export default class App extends Component {
  
  render() {
    return (
      <div className="App">
        <Tabuleiro/> 
      </div>
    );
  }
}
