import React, { Component } from 'react';
import './App.css';
import Doguitchos from './Doguitchos';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      // lista:[],
    };
  }

  componentDidUpdate() {}

  teste = () => {
    console.log(<Doguitchos />);
  };
  // this.setState({

  // })

  //   render () {
  //     return Dados.map(select => <CriarPokemon dados={select}/>);
  // }
  // }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Flex-box">
            <Button pushImg={this.teste}></Button>
          </div>
        </div>
      </div>
    );
  }
}
