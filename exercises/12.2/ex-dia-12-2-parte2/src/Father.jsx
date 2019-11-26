import React, { Component } from 'react';

export default class FatherBtn extends Component {
  constructor(props) {
    super(props)
    this.state = {
      lista: []
    }
  }
  componentDidMount(){
    const endPoint = () => const endPoint = () =>
    fetch(, {
      headers: { Accept: 'application/json' },
    })
      .then(response => response.json())
      .then(array => criarListaElemento(array.products));
  });
  }
  

  render() {
    return (
      
    );
  }
}
