import React, { Component } from 'react';
import Celula from './Celula';

export default class Tabuleiro extends Component {
  constructor(props) {
    super(props);

    this.state = {
      squares: Array(9).fill(null),
      xIsNext: true
    };
    this.handleClick = this.handleClick.bind(this);
    this.repetidorDeComponets = this.repetidorDeComponets.bind(this);
    this.calculateWinner = this.calculateWinner.bind(this);
  }

  repetidorDeComponets(i) {
    return (
      <Celula
        value={this.state.squares[i]}
        onClick={() => this.handleClick(i)}
      />
    );
  }

  handleClick(i) {
    const squares = this.state.squares.slice();
    console.log(squares);
    if (this.calculateWinner(squares) || squares[i]) {
      return;
    }
    squares[i] = this.state.xIsNext ? 'X' : 'O';
    this.setState({
      squares: squares,
      xIsNext: !this.state.xIsNext
    });
  }
  calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6]
    ];

    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (
        squares[a] &&
        squares[a] === squares[b] &&
        squares[a] === squares[c]
      ) {
        return squares[a];
      }
    }
    return null;
  }

  render() {
    const winner = this.calculateWinner(this.state.squares);
    let status;
    if (winner) {
      status = `Vencedor: ${winner}!!! S2`;
    } else {
      status = 'Próximo Jogador: ' + (this.state.xIsNext ? 'X' : 'O');
    }

    return (
      <div className="App">
        <div className="tabuleiro">
          <h1 className="status">{status}</h1>
          {this.repetidorDeComponets(0)}
          {this.repetidorDeComponets(1)}
          {this.repetidorDeComponets(2)}
          {this.repetidorDeComponets(3)}
          {this.repetidorDeComponets(4)}
          {this.repetidorDeComponets(5)}
          {this.repetidorDeComponets(6)}
          {this.repetidorDeComponets(7)}
          {this.repetidorDeComponets(8)}
        </div>
      </div>
    );
  }
}
