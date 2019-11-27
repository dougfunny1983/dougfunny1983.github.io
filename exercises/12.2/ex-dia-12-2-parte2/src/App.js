import React, { Component } from 'react';
import './App.css';
import Doguitchos from './Doguitchos';
import Button from './Button';

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      showDoguitchos: false,
    };
  }

  choorceDoguitos = () => {
    let showDoguitchosCurrent = !this.state.showDoguitchos;
    this.setState({
      showDoguitchos: showDoguitchosCurrent,
    });
  }

  // teste = () => {
  //   const value = <Doguitchos/>
  //   console.log(value);
  //   this.setState({
  //     lista:[value]
  //   })
    
  // };


//   render() {
//     return (
//       <div className="App">
//       <button onClick={}>{this.state.showDoguitchos? "Fechar Doguitchos" : "Abrir Doguitchos"}</button>
//         {this.state.showDoguitchos ? <Doguitchos/ > : <p>Nada sem Doguitchos por enquantos!</p>}
//       </div>
//     );
//   }
// }

  render() {
    return (
      <div className="App">
        <div className="App-header">
          <div className="Flex-box">
          {this.state.showDoguitchos ? <Doguitchos/ > : <p>Nada sem Doguitchos por enquantos!</p>}
            <Button pushImg={this.choorceDoguitos}></Button>

          </div>
        </div>
      </div>
    );
  }
}
