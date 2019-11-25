import React, { Component } from 'react';


class Heroes extends Component {
  listHero = ['Ursa', 'Sven', 'Luna', 'Phantom Assassin', 'Sniper', 'Girocopter', 'Huskar']
  creatHero = (value) => {
    <button key={value} type="button" >{value}</button>
  }
  render() {
    return (
      <div>
        <input type="text" />
      <div>
      {this.listHero.map(select => this.creatHero(select))}
      </div>
      </div>
    );
  }
}

export default Heroes;
