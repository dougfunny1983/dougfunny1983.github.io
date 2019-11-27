import React, { Component } from 'react';
import './App.css';
import Doguitchos from './Doguitchos';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      lista:[],
    };
  }

  componentDidUpdate() {

  }
  
  teste = () => {
    const value = <Doguitchos/>
    console.log(value);
    this.setState({
      lista:[value]
    })
    
  };


  //   render () {
  //     return Dados.map(select => <CriarPokemon dados={select}/>);
  // }
  // }

  render() {
    const {value} = this.state
    console.log('/////////////////////////////');
    console.log(value);
    console.log('////////////////////////////');
    return (
      <div className="App">
        <div className="App-header">
          <div className="Flex-box">
            {value}
            <Button pushImg={this.teste}></Button>

          </div>
        </div>
      </div>
    );
  }
}
