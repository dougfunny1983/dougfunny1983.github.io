import React, { Component } from 'react';
import Celula from './Celula';

class Tabuleiro extends Component {

  render() {
    const repetidorDeComponets = () => {
      const lista = []
      for (let index = 0; index < 9; index++) {
       lista.push( <Celula />)
      }
      return lista
    }
    return (
      <div className='tabuleiro'>
        {repetidorDeComponets()}
      </div>
    );
  }
}

export default Tabuleiro;
