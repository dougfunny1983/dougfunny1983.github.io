import React, { Component } from 'react'

export class Celula extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       array: [[0,0,0],[0,0,0],[0,0,0]],
       jogador: 1,
       gameOver: false,
    }
    this.receberCliques = this.receberCliques.bind(this)
  }
  
   receberCliques() {
    this.setState({
      jogador: 0
    })
    
  }
  render() {
    return (
      <div className='celula' onClick={() => this.receberCliques()}></div>
    )
  }
}

export default Celula
