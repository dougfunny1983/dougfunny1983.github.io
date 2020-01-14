import React, { Component } from 'react';

export default class Celula extends Component {
  render() {
    const { value, onClick } = this.props;
    return (
      <div className="celula" onClick={onClick}>
        {value}
      </div>
    );
  }
}
