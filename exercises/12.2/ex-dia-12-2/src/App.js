import React from 'react';
import Content from './Content'
import './App.css'

class App extends React.Component {
  constructor(props) {
    super(props);    
    this.state = {
        data: 0
    }
    //this.setNewNumber = this.setNewNumber.bind(this);
  }

  setNewNumber = () => {
    this.setState({ data: this.state.data + 1 });
  }
  
  render() {
    return (
      <div className='App'>
        <button onClick={this.setNewNumber}>INCREMENT</button>
        <Content myNumber={this.state.data} />
      </div>
    );
  }
}

export default App;
