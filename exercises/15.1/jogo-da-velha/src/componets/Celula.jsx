import React, { Component } from 'react'

export class Celula extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       
    }
    this.receberCliques = this.receberCliques.bind(this)
  }
  
   receberCliques(e) {
    console.log(e.target);
  }
  render() {
    return (
      <div className='celula' onClick={(e) => this.receberCliques(e)}></div>
    )
  }
}

export default Celula
