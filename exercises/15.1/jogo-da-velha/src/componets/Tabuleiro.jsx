import React, { Component } from 'react';
import Celula from './Celula';

class Tabuleiro extends Component {

  render() {
    return (
      <div className='tabuleiro'>
        <Celula />
        <Celula />
        <Celula />
        <Celula />
        <Celula />
        <Celula />
        <Celula />
        <Celula />
        <Celula />
      </div>
    );
  }
}

export default Tabuleiro;
