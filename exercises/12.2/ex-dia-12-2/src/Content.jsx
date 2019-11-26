import React, { Component } from 'react'

export default class Content extends Component {

  shouldComponentUpdate() {
    return this.props.myNumber % 3 === 0 
  }

  componentDidUpdate() {
    alert('Numero Errado')
  }

  componentDidMount() {
  alert("Multiplo de tres")
  }

  componentWillUnmount(){
    localStorage.setItem("valor","Desmontado")
  }

  render() {
    return (
      <div>
        <h3>{this.props.myNumber}</h3>
      </div>
    );
  }
}

