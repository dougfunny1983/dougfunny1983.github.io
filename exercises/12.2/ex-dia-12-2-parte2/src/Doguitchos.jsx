import React, { Component } from 'react';

const API = () => 'https://dog.ceo/api/breeds/image/random';

export default class Doguitchos extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: null,
      text: null,
    };
  }

  componentDidMount() {
    fetch(API())
      .then(response => response.json())
      .then(data => this.setState({ data: data.message, text: data.text }));
  }

  render() {
    const { data, text } = this.state;
    return <img className="cards" src={data} alt={text} />;
  }
}
