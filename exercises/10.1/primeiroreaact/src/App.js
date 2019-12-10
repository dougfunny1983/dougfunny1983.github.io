import React from 'react';
import logo from './logo.svg';
import './App.css';
const lista = () => ['viajar', 'comer', 'sair', 'codar','trabalhar', 'andar de moto'].map(coco => <li>{coco}</li>);
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <ol>
            {lista()}
        </ol>
      </header>
    </div>
  );
}

export default App;
